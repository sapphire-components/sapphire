require('./styles.scss');

SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};

const style = document.createElement('style');
style.textContent = `
.select2 .select2-selection::after {
  background-image: url(${window.location.origin}/Sapphire_Resources/img/upDownArrows.png);
}
`;
document.head.appendChild(style);

require('./01-components/layout/layout-backoffice');

require('../components/05-components/v3-pat/country-phone/scripts');
require('../components/05-components/v3-pat/datetime-range-picker/scripts');
require('../components/05-components/v3-pat/hour-picker/scripts');
require('../components/05-components/v3-pat/panel/confirmation-popup');
require('../components/05-components/v3-pat/panel/panel-by-id');
require('../components/05-components/v3-pat/sapphire-popup/scripts');
require('../components/05-components/v3-pat/select-system/scripts');
require('../components/05-components/v3-pat/spinner-vertical/scripts');
require('../components/05-components/v3-pat/dropzone/dropzone');
require('../components/03-elements/script');
require('../components/05-components/v3-pat/segmented-control/scripts');
