console.log('WindowPanel exists', window.location.href);

class WindowPanel {
	anchorEl = null;
	bindedOpen = this.open.bind(this);
	bindedResize = this.resize.bind(this);
	closeOnEsc = null;
	confirmationTemplate = null;
	customContentEl = null;
	initOptions = null;
	keydownHandler = null;
	linkToOpen = null;
	minWidth = null;
	noButton = null;
	noEventLink = null;
	panelEventHandler = null;
	tippyInstance = null;
	widgetEl = null;
	yesButton = null;
	yesEventLink = null;

	constructor(initOptions) {
		this.initOptions = initOptions;

		this.widgetEl = document.getElementById(initOptions.runtimeId);

		this.closeOnEsc = initOptions.closeOnEsc;
		this.linkToOpen = this.widgetEl.querySelector('.windowpanel-linktoopen a');
		this.minWidth = initOptions.minWidth;
		this.noEventLink = this.widgetEl.querySelector('.windowpanel-action.no');
		this.yesEventLink = this.widgetEl.querySelector('.windowpanel-action.yes');

		this.linkToOpen.removeEventListener('click', this.bindedOpen);
		this.linkToOpen.addEventListener('click', this.bindedOpen);

		if (initOptions.contentId) {
			const source = document.getElementById(initOptions.contentId);
			source.classList.add('windowpanel-custom-content');
			this.customContentEl = source;
		}

		this.confirmationTemplate = this.createTemplate(`
			<div class="windowpanel">
				<div class="windowpanel-title Heading3"></div>
				<div class="windowpanel-message"></div>
				<div class="windowpanel-content"></div>
				<div class="windowpanel-actions">
					<a href="#" class="ButtonLink" data-cancel-button ui="ButtonCancel"></a>
					<a href="#" class="Button Third" data-no-button ui="ConfirmNo"></a>
					<a href="#" class="Button SetAsValid" data-yes-button ui="ConfirmYes"></a>
				</div>
			</div>
		`);

		this.anchorEl = document.createElement('span');
		this.anchorEl.style.left = '50%';
		this.anchorEl.style.pointerEvents = 'none';
		this.anchorEl.style.position = 'fixed';
		this.anchorEl.style.top = '50%';

		window.top.document.body.appendChild(this.anchorEl);
	}

	open() {
		this.appendBackdrop();

		const panel = this.createPanel({
			cancelLabel: this.initOptions.cancelLabel,
			message: this.initOptions.message,
			noLabel: this.initOptions.noLabel,
			title: this.initOptions.title,
			yesLabel: this.initOptions.yesLabel,
		});

		this.cancelButton = panel.querySelector('[data-cancel-button]');
		this.noButton = panel.querySelector('[data-no-button]');
		this.yesButton = panel.querySelector('[data-yes-button]');

		this.addEventListeners();
		this.addKeydownListener();

		this.tippyInstance = window.top.tippy(this.anchorEl, {
			allowHTML: true,
			appendTo: () => window.top.document.body,
			arrow: false,
			content: panel,
			hideOnClick: false,
			interactive: true,
			maxWidth: '450px',
			theme: 'windowpanel',
			trigger: 'manual',
			zIndex: 30,
			placement: 'top',
			popperOptions: {
				modifiers: [
					{
						name: 'offset',
						options: {
							offset: ({ popper }) => [0, -(popper.height / 2)],
						},
					},
				],
			},
			onShow: (instance) => {
				if (this.minWidth) {
					instance.popper.style.minWidth = `${this.minWidth}px`;
				}
			},
			onMount(instance) {},
			onShown(instance) {},
			onHide: () => {},
		});

		this.tippyInstance.show();

		//window.top.addEventListener('resize', this.bindedResize);
	}

	resize(event) {
		console.log('resize', this);
		this.tippyInstance.popperInstance?.update();
	}

	close() {
		if (this.keydownHandler) {
			window.removeEventListener('keydown', this.keydownHandler);
			this.keydownHandler = null;
		}
		this.tippyInstance.hide();
	}

	createTemplate(html) {
		const tpl = document.createElement('template');
		tpl.innerHTML = html.trim();
		return tpl;
	}

	createPanel({ cancelLabel, message, noLabel, title, yesLabel }) {
		const fragment = this.confirmationTemplate.content.cloneNode(true);
		fragment.querySelector('.windowpanel-title').textContent = title;
		fragment.querySelector('.windowpanel-message').textContent = message;

		const noBtn = fragment.querySelector('[data-no-button]');
		noLabel === '' ? noBtn.remove() : (noBtn.textContent = noLabel);

		const cancelBtn = fragment.querySelector('[data-cancel-button]');
		cancelLabel === '' ? cancelBtn.remove() : (cancelBtn.textContent = cancelLabel);

		const yesBtn = fragment.querySelector('[data-yes-button]');
		yesLabel === '' ? yesBtn.remove() : (yesBtn.textContent = yesLabel);

		if (this.customContentEl) {
			fragment.querySelector('.windowpanel-content').appendChild(this.customContentEl);
		}

		if (fragment.querySelector('.windowpanel-actions').children.length === 0) {
			fragment.querySelector('.windowpanel-actions').remove();
		}

		return fragment;
	}

	addEventListeners() {
		if (this.panelEventHandler) {
			window.removeEventListener(`windowpanel-${this.initOptions.identifier}`, this.panelEventHandler);
		}

		this.panelEventHandler = (event) => {
			console.log('Event received!');
			console.log(event.detail);
			if (event.detail.action === 'YES' && this.yesEventLink) {
				this.yesEventLink.click();
			} else if (event.detail.action === 'NO' && this.noEventLink) {
				this.noEventLink.click();
			}
		};

		window.addEventListener(`windowpanel-${this.initOptions.identifier}`, this.panelEventHandler);

		this.cancelButton?.addEventListener('click', (event) => {
			event.preventDefault();
			this.removeBackdrop();
			this.close();
		});

		this.yesButton?.addEventListener('click', (event) => {
			event.preventDefault();
			this.broadcastCustomEvent(`windowpanel-${this.initOptions.identifier}`, { action: 'YES' });
			this.removeBackdrop();
			this.close();
		});

		this.noButton?.addEventListener('click', (event) => {
			event.preventDefault();
			this.broadcastCustomEvent(`windowpanel-${this.initOptions.identifier}`, { action: 'NO' });
			this.removeBackdrop();
			this.close();
		});
	}

	addKeydownListener() {
		if (this.keydownHandler) {
			window.removeEventListener('keydown', this.keydownHandler);
		}

		this.keydownHandler = (event) => {
			const isEscape = event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27;

			if (isEscape && this.closeOnEsc) {
				event.preventDefault();
				this.removeBackdrop();
				this.close();
			}
		};

		window.addEventListener('keydown', this.keydownHandler);
	}

	broadcastCustomEvent(eventName, detail) {
		const visited = new Set();

		function visit(win) {
			if (!win || visited.has(win)) return;
			visited.add(win);

			// Dispatch in this window
			try {
				win.dispatchEvent(new CustomEvent(eventName, { detail }));
			} catch (_) {}

			// Recurse into child frames
			let frames;
			try {
				frames = win.frames; // may throw if cross-origin
			} catch (_) {
				return;
			}

			for (let i = 0; i < frames.length; i++) {
				try {
					visit(frames[i]);
				} catch (_) {}
			}
		}

		// Start at the top (or current if top not reachable)
		let root = window;
		try {
			root = window.top;
		} catch (_) {}

		visit(root);
	}

	appendBackdrop() {
		const el = document.createElement('div');
		el.setAttribute('data-windowpanel-backdrop', '');
		Object.assign(el.style, {
			position: 'fixed',
			inset: '0',
			background: `rgba(0,0,0,0.35)`,
			zIndex: 30,
			pointerEvents: 'auto',
			touchAction: 'none',
		});
		window.top.document.body.classList.add('has-windowpanel-backdrop');
		window.top.document.body.appendChild(el);
	}

	removeBackdrop() {
		const el = window.top.document.querySelector('[data-windowpanel-backdrop]');
		if (el) {
			el.remove();
		}
		window.top.document.body.classList.remove('has-windowpanel-backdrop');
	}
}

window.top.SapphireWidgets.WindowPanel = WindowPanel;
