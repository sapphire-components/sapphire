SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};

(function () {
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (!isDevelopment) {
    return;
  }

  /*
  Adding this class allows to build js/css specific for dev purposes.
  */
  document.querySelector('body').classList.add('webpack-dev');
})();