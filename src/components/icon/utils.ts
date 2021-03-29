import { IconTheme } from './icon-interface';

const clearPathsAndFillColor = (svg: Element, color: string): void => {
  const paths = svg.getElementsByTagName('path');

  for (let i = 0; i < paths.length; i++) {
    paths[i].setAttribute('fill', color);
  }

  svg.setAttribute('fill', color);
};

export const formatSvg = (svgContent: string | null, color: string | null, emoji = false): string => {
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

export const getIconName = (name: string, theme: IconTheme) => {
  return `asset-icon-${name}-${theme}`;
};

export const getEmojiName = (name: string) => {
  return `asset-emoji-${name}`;
};

export const getLogoName = (name: string) => {
  return `asset-logo-${name}`;
};
