SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};

const isProduction = process.env.NODE_ENV === 'production ';

if (!isProduction) {
  /*
    Adding this class allows to build js/css specific for dev purposes.
   */
  document.querySelector('body').classList.add('webpack-dev');
}