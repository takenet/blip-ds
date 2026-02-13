import { IconTheme } from './icon-interface';

const FILL_ELEMENTS = ['path', 'rect', 'circle', 'ellipse', 'polygon', 'polyline', 'line'];

const getFilledElements = (svg: Element): Element[] => {
  const elements: Element[] = [];
  for (const tag of FILL_ELEMENTS) {
    const found = svg.getElementsByTagName(tag);
    for (let i = 0; i < found.length; i++) {
      elements.push(found[i]);
    }
  }
  return elements;
};

const clearAllFillColors = (svg: Element, color: string): void => {
  const elements = getFilledElements(svg);

  for (const el of elements) {
    el.setAttribute('fill', color);
  }

  svg.setAttribute('fill', color);
};

const isMultiColorIcon = (svg: Element): boolean => {
  const elements = getFilledElements(svg);
  const fills = new Set<string>();

  for (const el of elements) {
    const fill = el.getAttribute('fill');
    if (fill && fill !== 'none' && fill !== 'currentColor') {
      fills.add(fill.toLowerCase());
    }
  }

  return fills.size > 1;
};

const applyColorVariables = (svg: Element): void => {
  const elements = getFilledElements(svg);

  // First pass: identify unique fill colors and assign layer indices
  const colorToLayerIndex = new Map<string, number>();
  let layerIndex = 0;

  for (const el of elements) {
    const fill = el.getAttribute('fill');
    if (fill && fill !== 'none' && fill !== 'currentColor') {
      const normalizedFill = fill.toLowerCase();
      if (!colorToLayerIndex.has(normalizedFill)) {
        colorToLayerIndex.set(normalizedFill, layerIndex);
        layerIndex++;
      }
    }
  }

  // Second pass: apply CSS variables using the color-to-layer mapping
  for (const el of elements) {
    const currentFill = el.getAttribute('fill');

    if (currentFill && currentFill !== 'none' && currentFill !== 'currentColor') {
      const normalizedFill = currentFill.toLowerCase();
      const layer = colorToLayerIndex.get(normalizedFill);
      (el as HTMLElement).style.fill = `var(--icon-layer-${layer}, ${currentFill})`;
      el.setAttribute('data-customizable', 'true');
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
        clearAllFillColors(svgElm, color);
      } else if (isMultiColorIcon(svgElm)) {
        applyColorVariables(svgElm);
      } else {
        clearAllFillColors(svgElm, 'currentColor');
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
