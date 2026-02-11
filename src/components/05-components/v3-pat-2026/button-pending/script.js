class ButtonPending {
	bindedClick = this.click.bind(this);
	timeout = null;
	initOptions = null;

	constructor(initOptions) {
		console.log(initOptions);
		this.state = 'idle';
		this.duration = initOptions.duration;
		this.initOptions = initOptions;

		this.widgetEl = document.getElementById(initOptions.runtimeId);

		this.widgetIconEl = this.widgetEl.querySelector('.button-pending-icon');
		this.widgetLinkEl = this.widgetEl.querySelector('.button-pending-link');
		this.widgetLabelEl = this.widgetEl.querySelector('.button-pending-label');

		let iconIdle = document.createElement('span');
		iconIdle.classList.add('idle', 'icon', 'icon-1x', 'icon-play');
		this.widgetIconEl.appendChild(iconIdle);

		let iconPending = document.createElement('span');
		iconPending.classList.add('pending');
		this.widgetIconEl.appendChild(iconPending);

		let iconDone = document.createElement('span');
		iconDone.classList.add('done', 'icon', 'icon-1x', 'icon-success');
		this.widgetIconEl.appendChild(iconDone);

		this.widgetLinkEl.querySelector('a').textContent = '';

		this.widgetLinkEl.addEventListener('click', this.bindedClick);

		this.widgetEl._instance = this;
		this.render();
	}

	click() {
		if (this.timeout) {
			clearTimeout(this.timeout);
			this.timeout = null;
		}

		this.state = 'pending';
		this.render();

		this.timeout = setTimeout(() => {
			this.state = 'done';
			this.render();
		}, this.duration * 1000);
	}

	setState(state_in) {
		this.state = state_in;
		this.render();
	}

	render() {
		this.widgetEl.dataset.state = this.state;
		this.widgetLabelEl.textContent = this.initOptions[this.state];
	}
}

window.top.SapphireWidgets.ButtonPending = ButtonPending;
