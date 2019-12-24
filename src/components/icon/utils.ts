import { getAssetPath } from '@stencil/core';

export const getSvgPath = (name: string, theme: string) => {
  if(!name) {
    return '';
  }

  if(!theme) {
    return '';
  }

  return getAssetPath(`svg/${theme}/${name}.svg`);
}

export const getSvgContent = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Invalid icon');
  }

  const svgContent = await response.text();
  return svgContent;
};

export const formatSvg = (svgContent: string | null, height: string| null, width: string | null, color: string | null) => {
  if (svgContent) {
    const div = document.createElement('div');
    div.innerHTML = svgContent;

    const svgElm = div.firstElementChild;

    width && svgElm.setAttribute('width', width);
    height && svgElm.setAttribute('height', height);
    color && clearPathsAndFillColor(svgElm, color);

    return div.innerHTML;
  }

  return '';
}

const clearPathsAndFillColor = (svg: Element, color: string) => {
  let paths = svg.getElementsByTagName('path');

  for (let i = 0; i < paths.length; i++) {
      paths[i].setAttribute('fill', '');
  }

  svg.setAttribute('fill', color);
}
