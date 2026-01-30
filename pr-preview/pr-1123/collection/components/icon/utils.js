const clearPathsAndFillColor = (svg, color) => {
  const paths = svg.getElementsByTagName('path');
  for (let i = 0; i < paths.length; i++) {
    paths[i].setAttribute('fill', color);
  }
  svg.setAttribute('fill', color);
};
export const formatSvg = (svgContent, color, emoji = false) => {
  if (svgContent) {
    const div = document.createElement('div');
    div.innerHTML = svgContent;
    const svgElm = div.firstElementChild;
    svgElm.removeAttribute('width');
    svgElm.removeAttribute('height');
    svgElm.setAttribute('fill', 'currentColor');
    if (!emoji) {
      clearPathsAndFillColor(svgElm, color || 'currentColor');
    }
    return div.innerHTML;
  }
  return '';
};
export const getIconName = (name, theme) => {
  return `asset-icon-${name}-${theme}`;
};
export const getEmojiName = (name) => {
  return `asset-emoji-${name}`;
};
export const getLogoName = (name) => {
  return `asset-logo-${name}`;
};
