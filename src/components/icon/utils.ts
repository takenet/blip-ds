import { IconTheme } from './icon-interface';

const clearPathsAndFillColor = (svg: Element, color: string): void => {
  const paths = svg.getElementsByTagName('path');

  for (let i = 0; i < paths.length; i++) {
    paths[i].setAttribute('fill', color);
  }

  svg.setAttribute('fill', color);
};

const isMultiColorIcon = (svg: Element): boolean => {
  const paths = svg.getElementsByTagName('path');
  const fills = new Set<string>();

  for (let i = 0; i < paths.length; i++) {
    const fill = paths[i].getAttribute('fill');
    if (fill && fill !== 'none' && fill !== 'currentColor') {
      fills.add(fill);
    }
  }

  return fills.size > 1;
};

const applyColorVariables = (svg: Element): void => {
  const paths = svg.getElementsByTagName('path');

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const currentFill = path.getAttribute('fill');

    if (currentFill && currentFill !== 'none' && currentFill !== 'currentColor') {
      path.style.fill = `var(--icon-layer-${i}, ${currentFill})`;
      path.setAttribute('data-customizable', 'true');
    }
  }
};

export const formatSvg = (svgContent: string | null, color: string | null, emoji = false): string => {
  if (svgContent) {
    const div = document.createElement('div');
    div.innerHTML = svgContent;

    const svgElm = div.firstElementChild as SVGElement;

    svgElm.removeAttribute('width');
    svgElm.removeAttribute('height');

    if (!emoji) {
      if (color) {
        // Outline ou força uma cor única
        clearPathsAndFillColor(svgElm, color);
      } else if (isMultiColorIcon(svgElm)) {
        // Multi-color: ativa CSS variables
        applyColorVariables(svgElm);
      } else {
        // Mono-color: usa currentColor
        svgElm.setAttribute('fill', 'currentColor');
      }
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
