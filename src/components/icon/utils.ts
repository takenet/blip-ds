export const getSvgContent = async (url: string): Promise<string> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Invalid Icon - ${url}`);
  }

  const svgContent = await response.text();
  return svgContent;
};

const clearPathsAndFillColor = (svg: Element, color: string): void => {
  const paths = svg.getElementsByTagName('path');

  for (let i = 0; i < paths.length; i++) {
    paths[i].setAttribute('fill', color);
  }

  svg.setAttribute('fill', color);
}

export const formatSvg = (svgContent: string | null, color: string | null): string => {
  if (svgContent) {
    const div = document.createElement('div');
    div.innerHTML = svgContent;

    const svgElm = div.firstElementChild;

    svgElm.removeAttribute('width');
    svgElm.removeAttribute('height');
    color && clearPathsAndFillColor(svgElm, color);

    return div.innerHTML;
  }

  return '';
}

