/* Component LayoutSpamGuard */
(function ($, window, document, SapphireWidgets) {

  const DEFAULTS = {
    awareClass: "spam-aware",
    blockedClass: "spam-blocked",
    classes: "Button, PreventMulticlick",
    cooldownMs: 2500,
    keyTriggers: new Set(["Enter", " "]), // Space = " "
    root: document,
  };

  function normalizeClasses(list) {
    // Accepts:
    // - string: "Button, .Potatoes, .Something"
    // - array of strings: ["Button", ".Potatoes", ".Something"]
    // - mixed values
    // Returns: ["Button", "Potatoes", "Something"]
    let raw = [];

    if (Array.isArray(list)) {
      raw = list.flatMap(c => String(c ?? "").split(/[,\s]+/));
    } else if (typeof list === "string") {
      raw = list.split(/[,\s]+/);
    } else if (list != null) {
      raw = String(list).split(/[,\s]+/);
    }

    return Array.from(new Set(
      raw
        .map(c => String(c || "").trim())
        .filter(Boolean)
        .map(c => c.startsWith(".") ? c.slice(1) : c)
    ));
  }

  function matchesAnyClass(el, classes) {
    return classes.some(c => el.classList.contains(c));
  }

  function findTarget(startEl, classes) {
    let el = startEl;
    while (el && el !== document) {
      if (el.nodeType === 1 && matchesAnyClass(el, classes)) return el;
      el = el.parentElement;
    }
    return null;
  }

  function isBlocked(el, opts) {
    return el.classList.contains(opts.blockedClass) || el.dataset.spamBlocked === "1";
  }

  function block(el, opts) {
    if (isBlocked(el, opts)) return false;

    el.dataset.spamBlocked = "1";
    el.classList.add(opts.blockedClass);
    el.classList.add(opts.awareClass);
    el.setAttribute("aria-disabled", "true");

    if ("disabled" in el) el.disabled = true;

    clearTimeout(el._spamTimer);
    el._spamTimer = setTimeout(() => {
      el.dataset.spamBlocked = "0";
      el.classList.remove(opts.blockedClass);
      el.removeAttribute("aria-disabled");
      if ("disabled" in el) el.disabled = false;
    }, opts.cooldownMs);

    return true;
  }

  function guardHandler(e, opts) {
    const target = findTarget(e.target, opts.classes);
    if (!target) return;

    const hasButtonGroup = [...target.classList].some(cls =>
      cls.toLowerCase().includes("buttongroup")
    );

    if (hasButtonGroup) return;


    // keydown filtering
    if (e.type === "keydown" && !opts.keyTriggers.has(e.key)) return;

    if (isBlocked(target, opts)) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }

    block(target, opts);
  }

  function create(userOpts = {}) {


    console.log("create", userOpts);

    const opts = { ...DEFAULTS, ...userOpts };
    opts.classes = normalizeClasses(opts.classes);

    if (!opts.classes.length) {
      console.warn("SpamGuard: no classes provided");
      return;
    }

    // Capture-phase listeners
    opts.root.addEventListener("click", e => guardHandler(e, opts), true);
    opts.root.addEventListener("keydown", e => guardHandler(e, opts), true);
    opts.root.addEventListener("submit", e => guardHandler(e, opts), true);

    // Initial marking (purely visual / semantic)
    document.querySelectorAll(
      opts.classes.map(c => `.${CSS.escape(c)}`).join(",")
    ).forEach(el => el.classList.add(opts.awareClass));

    return {
      classes: opts.classes,
      disconnect() {
        opts.root.removeEventListener("click", guardHandler, true);
        opts.root.removeEventListener("keydown", guardHandler, true);
        opts.root.removeEventListener("submit", guardHandler, true);
      }
    };
  };

  SapphireWidgets.LayoutSpamGuard = { create };

})(jQuery, window, document, SapphireWidgets);


