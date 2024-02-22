import React from 'react';
import DocumentationTemplate from './card-color.mdx';

export default {
  title: 'Tokens/Colors',
  parameters: {
    docs: {
      page: DocumentationTemplate,
      autodocs: false
    }
  },
};

const Light = [
  { name: 'Brand', variable: 'color-brand', hex: '#0096fa' },
  { name: 'Primary', variable: 'color-primary', hex: '#1e6bf1' },
  { name: 'Secondary', variable: 'color-secondary', hex: '#292929' },
  { name: 'Surface-1', variable: 'color-surface-1', hex: '#F6F6F6' },
  { name: 'Surface-2', variable: 'color-surface-2', hex: '#E0E0E0' },
  { name: 'Surface-3', variable: 'color-surface-3', hex: '#CFCFCF' },
  { name: 'Surface-4', variable: 'color-surface-4', hex: '#141414' },
  { name: 'Content-Default', variable: 'color-content-default', hex: '#454545' },
  { name: 'Content-Disable', variable: 'color-content-disable', hex: '#636363' },
  { name: 'Content-Ghost', variable: 'color-content-ghost', hex: '#8C8C8C' },
  { name: 'Content-Bright', variable: 'color-content-bright', hex: '#ffffff' },
  { name: 'Content-Din', variable: 'color-content-din', hex: '#000000' },
  { name: 'Border-1', variable: 'color-border-1', hex: '#B1B1B1' },
  { name: 'Border-2', variable: 'color-border-2', hex: '#CFCFCF' },
  { name: 'Border-3', variable: 'color-border-3', hex: '#E1E1E1' },
  { name: 'Info', variable: 'color-info', hex: '#80e3eb' },
  { name: 'System', variable: 'color-system', hex: '#B2DFFD' },
  { name: 'Focus', variable: 'color-focus', hex: '#c226fb' },
  { name: 'Success', variable: 'color-success', hex: '#84ebbc' },
  { name: 'Warning', variable: 'color-warning', hex: '#fde99b' },
  { name: 'Error', variable: 'color-error', hex: '#f99f9f' },
  { name: 'Delete', variable: 'color-delete', hex: '#e60f0f' }
];

const Dark = [
  { name: 'Brand', variable: 'color-brand', hex: '#0096fa' },
  { name: 'Primary', variable: 'color-primary', hex: '#1e6bf1' },
  { name: 'Secondary', variable: 'color-secondary', hex: '#0096fa' },
  { name: 'Surface-1', variable: 'color-surface-1', hex: '#292929' },
  { name: 'Surface-2', variable: 'color-surface-2', hex: '#1f1f1f' },
  { name: 'Surface-3', variable: 'color-surface-3', hex: '#141414' },
  { name: 'Surface-4', variable: 'color-surface-4', hex: '#0a0a0a' },
  { name: 'Content-Default', variable: 'color-content-default', hex: '#ffffff' },
  { name: 'Content-Disable', variable: 'color-content-disable', hex: '#949494' },
  { name: 'Content-Ghost', variable: 'color-content-ghost', hex: '#666666' },
  { name: 'Content-Bright', variable: 'color-content-bright', hex: '#ffffff' },
  { name: 'Content-Din', variable: 'color-content-din', hex: '#000000' },
  { name: 'Border-1', variable: 'color-border-1', hex: '#515151' },
  { name: 'Border-2', variable: 'color-border-2', hex: '#3B3B3B' },
  { name: 'Border-3', variable: 'color-border-3', hex: '#0A0A0A' },
  { name: 'Info', variable: 'color-info', hex: '#004f56' },
  { name: 'System', variable: 'color-system', hex: '#003c64' },
  { name: 'Focus', variable: 'color-focus', hex: '#c226fb' },
  { name: 'Success', variable: 'color-success', hex: '#355e4b' },
  { name: 'Warning', variable: 'color-warning', hex: '#60593b' },
  { name: 'Error', variable: 'color-error', hex: '#7b3d3d' },
  { name: 'Delete', variable: 'color-delete', hex: '#b60c0c' }
];

const HighContrast = [
  { name: 'Brand', variable: 'color-brand', hex: '#0096fa' },
  { name: 'Primary', variable: 'color-primary', hex: '#1e6bf1' },
  { name: 'Secondary', variable: 'color-secondary', hex: '#292929' },
  { name: 'Surface-1', variable: 'color-surface-1', hex: '#ffffff' },
  { name: 'Surface-2', variable: 'color-surface-2', hex: '#f5f5f5' },
  { name: 'Surface-3', variable: 'color-surface-3', hex: '#e0e0e0' },
  { name: 'Surface-4', variable: 'color-surface-4', hex: '#141414' },
  { name: 'Content-Default', variable: 'color-content-default', hex: '#292929' },
  { name: 'Content-Disable', variable: 'color-content-disable', hex: '#666666' },
  { name: 'Content-Ghost', variable: 'color-content-ghost', hex: '#949494' },
  { name: 'Content-Bright', variable: 'color-content-bright', hex: '#ffffff' },
  { name: 'Content-Din', variable: 'color-content-din', hex: '#000000' },
  { name: 'Border-1', variable: 'color-border-1', hex: '#616161' },
  { name: 'Info', variable: 'color-info', hex: '#80e3eb' },
  { name: 'System', variable: 'color-system', hex: '#99d5fd' },
  { name: 'Focus', variable: 'color-focus', hex: '#c226fb' },
  { name: 'Success', variable: 'color-success', hex: '#84ebbc' },
  { name: 'Warning', variable: 'color-warning', hex: '#fde99b' },
  { name: 'Error', variable: 'color-error', hex: '#f99f9f' },
  { name: 'Delete', variable: 'color-delete', hex: '#e60f0f' }
];

const ExtendedColor = [
  { name: 'Extended-Blue', variable: 'color-extended-blue', hex: '#1968F0' },
  { name: 'Extended-Ocean', variable: 'color-extended-ocean', hex: '#00D3E4' },
  { name: 'Extended-Green', variable: 'color-extended-green', hex: '#35DE90' },
  { name: 'Extended-Yellow', variable: 'color-extended-yellow', hex: '#FBCF23' },
  { name: 'Extended-Orange', variable: 'color-extended-orange', hex: '#F06305' },
  { name: 'Extended-Red', variable: 'color-extended-red', hex: '#E60F0F' },
  { name: 'Extended-Pink', variable: 'color-extended-pink', hex: '#FB4BC1' },
  { name: 'Extended-Gray', variable: 'color-extended-gray', hex: '#666666' }
];


const getSectionColor = (title, content) => (
  <>
    <div>
      <bds-typo variant="fs-20">{title}</bds-typo>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>{content}</div>
    </div>
    <br />
  </>
);

const getComponentCardColors = (name, variable, hex, gradient) => {
  let lightText = false;
  return (
    <bds-grid padding="2">
      <bds-card-color name={name} variable={variable} light-text={lightText}></bds-card-color>
    </bds-grid>
  );
};

const getColorsCards = (colors) => {
  const elements = [];

  for (const color of colors) {
    elements.push(getComponentCardColors(color.name, color.variable, color.hex, color.gradient));
  }
  return elements;
};

export const light = () => (
  <>
    {getSectionColor('Light', getColorsCards(Light))}
  </>
);

export const dark = () => (
  <>
    {getSectionColor('Dark', getColorsCards(Dark))}
  </>
);
export const highContrast = () => (
  <>
    {getSectionColor('High-contrast', getColorsCards(HighContrast))}
  </>
);
export const extendedColor = () => (
  <>
    {getSectionColor('Extended-color', getColorsCards(ExtendedColor))}
  </>
);

