SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};

const isProduction = process.env.NODE_ENV === 'production ';
if (!isProduction) {
  document.querySelector('body').classList.add('webpack-dev');
}