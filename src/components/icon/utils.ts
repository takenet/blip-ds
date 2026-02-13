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

  // First pass: identify unique fill colors and assign layer indices
  const colorToLayerIndex = new Map<string, number>();
  let layerIndex = 0;

  for (let i = 0; i < paths.length; i++) {
    const fill = paths[i].getAttribute('fill');
    if (fill && fill !== 'none' && fill !== 'currentColor' && !colorToLayerIndex.has(fill)) {
      colorToLayerIndex.set(fill, layerIndex);
      layerIndex++;
    }
  }

  // Second pass: apply CSS variables using the color-to-layer mapping
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const currentFill = path.getAttribute('fill');

    if (currentFill && currentFill !== 'none' && currentFill !== 'currentColor') {
      const layer = colorToLayerIndex.get(currentFill);
      path.style.fill = `var(--icon-layer-${layer}, ${currentFill})`;
      path.setAttribute('data-customizable', 'true');
    }
  }
};

export const formatSvg = (svgContent: string | null, color: string | null, emoji = false): string => {
  if (svgContent) {
    const div = document.createElement('div');
    div.innerHTML = svgContent;

    const svgElm = div.firstElementChild as SVGElement;
    if (!svgElm) {
      return '';
    }

    svgElm.removeAttribute('width');
    svgElm.removeAttribute('height');

    if (!emoji) {
      if (color) {
        // Outline or force a single color
        clearPathsAndFillColor(svgElm, color);
      } else if (isMultiColorIcon(svgElm)) {
        // Multi-color: enable CSS variables
        applyColorVariables(svgElm);
      } else {
        // Mono-color: use currentColor on SVG and all paths
        clearPathsAndFillColor(svgElm, 'currentColor');
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
