import React from 'react';
import readme from './readme.md';

export default {
  title: 'Colours',
  parameters: {
    notes: { markdown: readme },
  },
};

const primaryColorus = [
  { name: 'Main BLiP', variable: 'color-primary-main', hex: '#2cc3d5' },
  { name: 'Light BLiP', variable: 'color-primary-light', hex: '#87DDE8' },
  { name: 'Dark BLiP', variable: 'color-primary-dark', hex: '#2498A8' },
  { name: 'Ghost', variable: 'color-primary-ghost', hex: '#F8FBFB' },
];

const secondaryColours = [
  { name: 'Delete', variable: 'color-secondary-delete', hex: '#FF5A60' },
  { name: 'Cheetos', variable: 'color-secondary-cheetos', hex: '#F9B42F' },
  { name: 'True', variable: 'color-secondary-true', hex: '#4DCB7B' },
];

const neutralColoursBlues = [
  { name: 'Disabled Text', variable: 'color-neutral-disbled-blues-text', hex: '#76C1CA' },
  { name: 'Disabled BG', variable: 'color-neutral-disbled-blues-bg', hex: '#DAF2F4' },
];

const neutralColoursDark = [
  { name: 'Onix', variable: 'color-neutral-dark-onix', hex: '#1A2437' },
  { name: 'Suit', variable: 'color-neutral-dark-suit', hex: '#343C4C' },
  { name: 'City', variable: 'color-neutral-dark-city', hex: '#56616E' },
  { name: 'Rooftop', variable: 'color-neutral-dark-rooftop', hex: '#DAF2F4' },
];

const neutralColoursMedium = [
  { name: 'Desk', variable: 'color-neutral-medium-desk', hex: '#607B99' },
  { name: 'Cloud', variable: 'color-neutral-medium-cloud', hex: '#8CA0B3' },
  { name: 'Silver', variable: 'color-neutral-medium-silver', hex: '#B9CBD3' },
];

const neutralColoursMediumLight = [
  { name: 'Wave', variable: 'color-neutral-light-wave', hex: '#D2DFE6' },
  { name: 'Off', variable: 'color-neutral-light-off', hex: '#DEE8EC' },
  { name: 'Breeze', variable: 'color-neutral-light-brezze', hex: '#E7EEF1' },
  { name: 'Whisper', variable: 'color-neutral-light-whisper', hex: '#F5F8F9' },
];

const extendColoursRr = [
  { name: 'B Vitamin', variable: 'color-extend-rr-b-vitamin', hex: '#FFD6D7' },
  { name: 'Flower', variable: 'color-extend-rr-flower', hex: '#FF7B80' },
  { name: 'Lipstick', variable: 'color-extend-rr-lipstick', hex: '#CF5358' },
  { name: 'Dragon', variable: 'color-extend-rr-dragon', hex: '#802D30' },
  { name: 'Ballet', variable: 'color-extend-rr-ballet', hex: '#FDD9E1' },
  { name: 'Yogurt', variable: 'color-extend-rr-yogurt', hex: '#FBB3C4' },
  { name: 'Watermelon', variable: 'color-extend-rr-watermelon', hex: '#F66689' },
  { name: 'Blush', variable: 'color-extend-rr-blush', hex: '#C85C77' },
];

const extendColoursYo = [
  { name: 'Fairy', variable: 'color-extend-yo-fairy', hex: '#FBF9CC' },
  { name: 'D Vitamin', variable: 'color-extend-yo-d-vitamin', hex: '#F8F399' },
  { name: 'Melon', variable: 'color-extend-yo-melon', hex: '#F1E733' },
  { name: 'Hay', variable: 'color-extend-yo-hay', hex: '#B5AD26' },
  { name: 'Sand', variable: 'color-extend-yo-sand', hex: '#FEECCB' },
  { name: 'C Vitamin', variable: 'color-extend-yo-c-vitamin', hex: '#FCDA97' },
  { name: 'Sphinx', variable: 'color-extend-yo-Sphinx', hex: '#CB9733' },
  { name: 'Moose', variable: 'color-extend-yo-moose', hex: '#FEE6D1' },
  { name: 'Summer', variable: 'color-extend-yo-summer', hex: '#FCCDA2' },
  { name: 'Doritos', variable: 'color-extend-yo-doritos', hex: '#F99B45' },
  { name: 'Carrot', variable: 'color-extend-yo-carrot', hex: '#FA7E25' },
];

const extendColoursGreens = [
  { name: 'Chameleon', variable: 'color-exnted-green-chameleon', hex: '#D3F2DE' },
  { name: 'Mint', variable: 'color-exnted-green-mint', hex: '#A6E5BD' },
  { name: 'Corn', variable: 'color-exnted-green-corn', hex: '#4AA86C' },
  { name: 'Asparagus', variable: 'color-exnted-green-asparagus', hex: '#26663D' },
  { name: 'Bamboo', variable: 'color-exnted-green-bamboo', hex: '#EFF4CA' },
  { name: 'Lime', variable: 'color-exnted-green-lime', hex: '#DFEA95' },
  { name: 'Leaf', variable: 'color-exnted-green-leaf', hex: '#BED42B' },
  { name: 'Algae', variable: 'color-exnted-green-algae', hex: '#8E9F20' },
];

const extendColoursBlues = [
  { name: 'Sky', variable: 'color-exnted-blue-sky', hex: '#C3EEF4' },
  { name: 'Wind', variable: 'color-exnted-blue-wind', hex: '#ADE7EE' },
  { name: 'Mermaid', variable: 'color-exnted-blue-mermaid', hex: '#41B2C0' },
  { name: 'Galaxy', variable: 'color-exnted-blue-galaxy', hex: '#16626B' },
  { name: 'Ice', variable: 'color-exnted-blue-ice', hex: '#D5F3FF' },
  { name: 'Frozen', variable: 'color-exnted-blue-frozen', hex: '#AAE7FF' },
  { name: 'Smurf', variable: 'color-exnted-blue-smurf', hex: '#55CFFF' },
  { name: 'Whale', variable: 'color-exnted-blue-whale', hex: '#409BBF' },
  { name: 'Petroleum', variable: 'color-exnted-blue-genie', hex: '#D3DEFC' },
  { name: 'Genie', variable: 'color-exnted-blue-unicorn', hex: '#A8BDF9' },
  { name: 'Unicorn', variable: 'color-exnted-blue-sea', hex: '#517BF2' },
  { name: 'Sea', variable: 'color-exnted-blue-jazz', hex: '#3D5CB6' },
];


const extendColoursPurples = [
  { name: 'Eggplant', variable: 'color-exnted-purples-eggplant', hex: '#EDD9FD' },
  { name: 'Pixie', variable: 'color-exnted-purples-pixie', hex: '#DBB3FB' },
  { name: 'Witch', variable: 'color-exnted-purples-witch', hex: '#B97CE8' },
  { name: 'Grape', variable: 'color-exnted-purples-grape', hex: '#B766F6' },
  { name: 'Violet', variable: 'color-exnted-purples-violet', hex: '#995CC8' },
  { name: 'Wine', variable: 'color-exnted-purples-wine', hex: '#894CB9' },
  { name: 'Açai', variable: 'color-exnted-purples-acai', hex: '#5B337B' },
];

const gradientsColours = [
  { name: 'Universe', variable: 'color-gradient-universe ' },
  { name: 'Street', variable: 'color-gradient-street' },
  { name: 'Chair', variable: 'color-gradient-chair' },
  { name: 'Shine', variable: 'color-gradient-shine' },
  { name: 'Olaf', variable: 'color-gradient-olaf' },
  { name: 'DG BLiP System', variable: 'color-gradient-dg-blip-system' },
  { name: 'Error', variable: 'color-gradient-error' },
  { name: 'Phoenix', variable: 'color-gradient-phoenix' },
  { name: 'Success', variable: 'color-gradient-success' },
  { name: 'Barbie', variable: 'color-gradient-barbie' },
  { name: 'Jeans', variable: 'color-gradient-jeans' },
  { name: 'Ocean', variable: 'color-gradient-ocean' },
  { name: 'Smurfette', variable: 'color-gradient-smurfette' },
];

const getSectionColor = (title, content) => (
  <>
    <div>
      <bds-typo variant="fs-20">{title}</bds-typo>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>
        {content}
      </div>
    </div>
    <br />
  </>
);

const getComponentCardColours = (name, variable, hex) => {
  if (hex) {
    return (<bds-card-color name={name} variable={variable} hex={hex}></bds-card-color>);
  }
  return (<bds-card-color name={name} variable={variable}></bds-card-color>);
};

const getColorsCards = (colors) => {
  const elements = [];

  for (const color of colors) {
    elements.push(getComponentCardColours(color.name, color.variable, color.hex));
  }
  return elements;
}

export const allColors = () => (
  <>
    {getSectionColor('Primary Colours', getColorsCards(primaryColorus))}
    {getSectionColor('Secondary Colours', getColorsCards(secondaryColours))}
    {getSectionColor('Neutral Colours - Disabled Blues', getColorsCards(neutralColoursBlues))}
    {getSectionColor('Neutral Colours - Dark', getColorsCards(neutralColoursDark))}
    {getSectionColor('Neutral Colours - Medium', getColorsCards(neutralColoursMedium))}
    {getSectionColor('Neutral Colours - Light', getColorsCards(neutralColoursMediumLight))}
    {getSectionColor('Extended colors - Vermelhos / Rosas', getColorsCards(extendColoursRr))}
    {getSectionColor('Extended colors - Amarelos / Laranjas', getColorsCards(extendColoursYo))}
    {getSectionColor('Extended colors - Verdes', getColorsCards(extendColoursGreens))}
    {getSectionColor('Extended colors - Azuis', getColorsCards(extendColoursBlues))}
    {getSectionColor('Extended colors - Roxos', getColorsCards(extendColoursPurples))}
    {getSectionColor('Gradients', getColorsCards(gradientsColours))}
  </>
);
