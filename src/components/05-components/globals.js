const packageVersion = require('../../../package.json').version;
const style1 = 'color: #FFA500; font-weight: bold;';
console.log(`%cSapphire | ${packageVersion} | ${window.location.pathname}`, style1);
