/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAssetPath } from '@stencil/core';
import { Icon } from './icon';

let CACHED_MAP: Map<string, string>;

export const isSrc = (str: string): boolean => str.length > 0 && /(\/|\.)/.test(str);

export const isStr = (val: any): val is string => typeof val === 'string';

export const toLower = (val: string): string => val.toLowerCase();

export const getName = (iconName: string | undefined, icon: string | undefined): string => {

  if (!iconName && icon && !isSrc(icon)) {
    iconName = icon;
  }
  if (isStr(iconName)) {
    iconName = toLower(iconName);
  }

  if (!isStr(iconName) || iconName.trim() === '') {
    return null;
  }
  return iconName;
};

export const getSrc = (src: string | undefined): string => {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};

export const getSvgContent = async (url: string): Promise<string> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Invalid Icon - ${url}`);
  }

  const svgContent = await response.text();
  return svgContent;
};

export const getIconMap = (): Map<string, string> => {
  if (typeof window === 'undefined') {
    return new Map();
  } else {
    if (!CACHED_MAP) {
      const win = window as any;
      win.Ionicons = win.Ionicons || {};
      CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
    }
    return CACHED_MAP;
  }
};

const getNamedUrl = (iconName: string, variant: string): string => {
  const url = getIconMap().get(iconName);
  if (url) {
    return url;
  }
  return getAssetPath(`svg/${variant}/${iconName}.svg`);
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

export const addIcons = (icons: { [name: string]: string }): void => {
  const map = getIconMap();
  Object.keys(icons).forEach(name => map.set(name, icons[name]));
};

export const getUrl = (i: Icon): string => {
  const theme = i.theme;
  let url = getSrc(i.src);

  if (url) {
    return url;
  }

  url = getName(i.name, i.icon);

  if (url) {
    return getNamedUrl(url, theme);
  }

  if (i.icon) {
    url = getSrc(i.icon);
    if (url) {
      return url;
    }
  }

  return null;
};
