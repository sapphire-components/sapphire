SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};

(function () {
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    return;
  }
  else {
    /*
    Adding this class allows to build js/css specific for dev purposes.
    */
    document.querySelector('body').classList.add('webpack-dev');
  }
})();