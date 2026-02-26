SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};

const style = document.createElement("style");
style.textContent = `
.select2 .select2-selection::after {
  background-image: url(${window.location.origin}/Sapphire_Resources/img/upDownArrows.png);
}
`;
document.head.appendChild(style);
