import React from 'react';
import readme from './readme.md';

export default {
  title: 'Colors',
  parameters: {
    notes: { markdown: readme },
  },
};

const blipBlues = [
  { name: 'Main', variable: 'color-primary-main', hex: '#3F7DE8' },
  { name: 'Light', variable: 'color-primary-light', hex: '#B3D4FF' },
  { name: 'Dark', variable: 'color-primary-dark', hex: '#125AD5' },
  { name: 'Night', variable: 'color-primary-night', hex: '#0747a6' },
];

const purples = [
  { name: 'Purple Pixie', variable: 'color-primary-purples-pixie', hex: '#CC99FF' },
  { name: 'Purple Bell', variable: 'color-primary-purples-bell', hex: '#C226FBF' },
  { name: 'Purple Witch', variable: 'color-primary-purples-witch', hex: '#9933CC' },
  { name: 'Purple acai', variable: 'color-primary-purples-acai', hex: '#4F0E87' },
]

const greens = [
  { name: 'Green Mint', variable: 'color-primary-greens-mint', hex: '#90E6BC' },
  { name: 'Green True', variable: 'color-primary-greens-true', hex: '#21CC79' },
  { name: 'Green Aligator', variable: 'color-primary-greens-aligator', hex: '#008767' },
  { name: 'Green Forest', variable: 'color-primary-greens-forest', hex: '#0A6045' },
];

const pinks = [
  { name: 'Pink Yogurt', variable: 'color-primary-pinks-yogurt', hex: '#FDACC5' },
  { name: 'Pink Watermelon', variable: 'color-primary-pinks-watermelon', hex: '#FB5A8B' },
  { name: 'Pink Barbie', variable: 'color-primary-pinks-barbie', hex: '#AA398D' },
  { name: 'Pink Blush', variable: 'color-primary-pinks-blush', hex: '#821A67' },
];

const oranges = [
  { name: 'Orange Sunset', variable: 'color-primary-oranges-sunset', hex: '#FFB186' },
  { name: 'Orange Carrot', variable: 'color-primary-oranges-carrot', hex: '#FF6E1D' },
  { name: 'Orange Doritos', variable: 'color-primary-oranges-doritos', hex: '#C64026' },
  { name: 'Orange Clay', variable: 'color-primary-oranges-clay', hex: '#8E3925' },
];

const yellows = [
  { name: 'Yellow Corn', variable: 'color-primary-yellows-corn', hex: '#FFF6A8' },
  { name: 'Yellow Sun', variable: 'color-primary-yellows-sun', hex: '#FFEC03' },
  { name: 'Yellow Guarana', variable: 'color-primary-yellows-guarana', hex: '#B2B229' },
  { name: 'Yellow Moss', variable: 'color-primary-yellows-moss', hex: '#757010' },
];

const secondaryColorsAlerts = [
  { name: 'Main', variable: 'color-primary-main', hex: '#3F7DE8' },
  { name: 'Brown Cheetos', variable: 'color-extend-browns-cheetos', hex: '#F6A721' },
  { name: 'Red Delete', variable: 'color-extend-reds-delete', hex: '#FF4C4C' },
  { name: 'Green True', variable: 'color-primary-greens-true', hex: '#21CC79' },
  { name: 'Purple Bell', variable: 'color-primary-purples-bell', hex: '#C226FB' },
]
const reds = [
  { name: 'Red Flower', variable: 'color-extend-reds-flower', hex: '#FFA5A5' },
  { name: 'Red Delete', variable: 'color-extend-reds-delete', hex: '#FF4C4C' },
  { name: 'Red Lipstick', variable: 'color-extend-reds-lipstick', hex: '#A01C2C' },
  { name: 'Red Dragon', variable: 'color-extend-reds-dragon', hex: '#6A2026' },
];

const browns = [
  { name: 'Brown Sand', variable: 'color-extend-browns-sand', hex: '#FFD29E' },
  { name: 'Brown Cheetos', variable: 'color-extend-browns-cheetos', hex: '#F6A721' },
  { name: 'Brown Sphinx', variable: 'color-extend-browns-sphinx', hex: '#D78935' },
  { name: 'Brown Woord', variable: 'color-extend-browns-wood', hex: '#845D37' },
];

const grays = [
  { name: 'Gray Moon', variable: 'color-extend-grays-moon', hex: '#D1D3D4' },
  { name: 'Gray Elevator', variable: 'color-extend-grays-elevator', hex: '#A7A9AC' },
  { name: 'Gray Street', variable: 'color-extend-grays-street', hex: '#6D6F71' },
  { name: 'Gray Blackwidow', variable: 'color-extend-grays-blackwidow', hex: '#000000' },
];

const lightGreens = [
  { name: 'Green Bamboo', variable: 'color-illustration-green-bamboo', hex: '#DFEA95' },
  { name: 'Green Lime', variable: 'color-illustration-green-lime', hex: '#BED42B' },
  { name: 'Green Leaf', variable: 'color-illustration-green-leaf', hex: '#9EAF30' },
  { name: 'Green Algae', variable: 'color-illustration-green-algae', hex: '#5F6A15' },
];

const lightBlues = [
  { name: 'Blue Sky', variable: 'color-illustration-blue-sky', hex: '#E9F7F8' },
  { name: 'Blue Genie', variable: 'color-illustration-blue-genie', hex: '#80E3EB' },
  { name: 'Blue Brand', variable: 'color-illustration-blue-brand', hex: '#00C6D7' },
  { name: 'Blue Sea', variable: 'color-illustration-blue-sea', hex: '#167491' },
  { name: 'Blue Jeans', variable: 'color-illustration-blue-jeans', hex: '#0747A6' },
];

const whiteSkin = [
  { name: 'Skin Nicole', variable: 'color-illustration-skin-nicole', hex: '#FDC2BF' }, 
  { name: 'Skin Keanu', variable: 'color-illustration-skin-keanu', hex: '#FFBBB8' }, 
  { name: 'Skin Scarlett', variable: 'color-illustration-skin-scarlett', hex: '#F4B1AF' }, 
  { name: 'Skin Evaristo', variable: 'color-illustration-skin-evaristo', hex: '#F3A6A3' }, 
];

const yellowSkin = [
  { name: 'Skin Jackie', variable: 'color-illustration-skin-jackie', hex: '#F3C29F' }, 
  { name: 'Skin Lucy', variable: 'color-illustration-skin-Lucy', hex: '#EDB58D' }, 
  { name: 'Skin Hideo', variable: 'color-illustration-skin-hideo', hex: '#E8AA7D' }, 
  { name: 'Skin Jung', variable: 'color-illustration-skin-jung', hex: '#E29E6C' }, 
];

const brownSkin = [
  { name: 'Skin zoe', variable: 'color-illustration-skin-zoe', hex: '#CB9685' },
  { name: 'Skin Jason', variable: 'color-illustration-skin-jason', hex: '#2C2A46' },
  { name: 'Skin Jeniffer', variable: 'color-illustration-skin-jeniffer', hex: '#BF7D68' },
  { name: 'Skin Dwayne', variable: 'color-illustration-skin-dwayne', hex: '#B5705A' },
];

const darkSkin = [
  { name: 'Skin Oprah', variable: 'color-illustration-skin-oprah', hex: '#CB8591' }, 
  { name: 'Skin Tais', variable: 'color-illustration-skin-tais', hex: '#BC7785' }, 
  { name: 'Skin Michelle', variable: 'color-illustration-skin-michelle', hex: '#A8747D' }, 
  { name: 'Skinn Will', variable: 'color-illustration-skin-will', hex: '#98646D' },
];

const disabledBlues = [
  { name: 'Disabled Bg', variable: 'color-disabled-bg', hex: '#DAF2F4' },
  { name: 'Hover Light', variable: 'color-hover-light', hex: '#C3EEF4' },
  { name: 'Disabled Text', variable: 'color-disabled-text', hex: '#6B9AA8' },
];

const disabledReds = [
  { name: 'Disabled Delete', variable: 'color-disabled-delete', hex: '#FCCCCC' },
  { name: 'Disabled error', variable: 'color-disabled-error', hex: '#DA7A7A' },
  { name: 'Disabled wrong', variable: 'color-disabled-wrong', hex: '#BA5A5A' },
];

const darkNeutrals = [
  { name: 'Dark Eclipse', variable: 'color-neutral-dark-eclipse', hex: '#0A0F1A' },
  { name: 'Dark Onix', variable: 'color-neutral-dark-onix', hex: '#1A2437' },
  { name: 'Dark Suit', variable: 'color-neutral-dark-suit', hex: '#212A3C' },
  { name: 'Dark Icoe', variable: 'color-neutral-dark-icoe', hex: '#192438' },
  { name: 'Dark Skate', variable: 'color-neutral-dark-skate', hex: '#233049' },
  { name: 'Dark City', variable: 'color-neutral-dark-city', hex: '#202C44' },
  { name: 'Dark Desk', variable: 'color-neutral-dark-desk', hex: '#3A4A65' },
  { name: 'Dark Rooftop', variable: 'color-neutral-dark-rooftop', hex: '#505F79' },
];

const mediumNeutrals = [
  { name: 'Medium Elephant', variable: 'color-neutral-medium-elephant', hex: '#6E7B91' }, 
  { name: 'Medium Cloud', variable: 'color-neutral-medium-cloud', hex: '#8CA0B3' }, 
  { name: 'Medium Silver', variable: 'color-neutral-medium-silver', hex: '#B9CBD3' }, 
  { name: 'Medium Wave', variable: 'color-neutral-medium-wave', hex: '#D2DFE6' }, 
];

const lightNeutrals = [
  { name: 'Light Box', variable: 'color-neutral-light-box', hex: '#E7EDF4' }, 
  { name: 'Light Whisper', variable: 'color-neutral-light-whisper', hex: '# F3F6FA' }, 
  { name: 'Light Breeze', variable: 'color-neutral-light-breeze', hex: '#F8FBFB' }, 
  { name: 'Light Snow', variable: 'color-neutral-light-snow', hex: '#FFFFFF' }, 
];

const gradientColors = [
  { name: 'Rose', variable: 'color-gradient-rose', hex: 'linear-gradient(213.89deg, #ff4c4c 7.75%, #821a67 135.08%)' }, 
  { name: 'Phoenix', variable: 'color-gradient-phoenix', hex: 'linear-gradient(213.98deg, #f6a721 7.74%, #fb5a8b 111.22%)' }, 
  { name: 'Cactus', variable: 'color-gradient-cactus', hex: 'linear-gradient(215.84deg, #bed42b 24.15%, #167491 143.37%)' }, 
  { name: 'Tree', variable: 'color-gradient-tree', hex: 'linear-gradient(213.19deg, #21cc79 26.38%, #167491 113.59%)' }, 
  { name: 'Oceanr', variable: 'color-gradient-ocean', hex: 'linear-gradient(206.67deg, #4786f1 25.46%, #4f0e87 187.1%)' }, 
  { name: 'Smurf', variable: 'color-gradient-smurf', hex: 'linear-gradient(213.61deg, #00c6d7 26.39%, #4786f1 100%)' }, 
  { name: 'Grape', variable: 'color-gradient-grape', hex: 'linear-gradient(214.56deg, #c226fb 0%, #0052cc 174.21%)' }, 
  { name: 'Fabulous', variable: 'color-gradient-fabulous', hex: 'linear-gradient(212.75deg, #fb5a8b 37.1%, #9933cc 171.27%)' }, 
  { name: 'Street', variable: 'color-gradient-street', hex: 'linear-gradient(213.69deg, #6e7b91 25.43%, #233049 147.21%)' }, 
  { name: 'Universe', variable: 'color-gradient-universe', hex: 'linear-gradient(213.69deg, #202c44 25.43%, #000000 147.21%)' }, 
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

const getComponentCardColors = (name, variable, hex) => {
  if (hex) {
    return (<bds-card-color name={name} variable={variable} hex={hex}></bds-card-color>);
  }
  return (<bds-card-color name={name} variable={variable}></bds-card-color>);
};

const getColorsCards = (colors) => {
  const elements = [];

  for (const color of colors) {
    elements.push(getComponentCardColors(color.name, color.variable, color.hex));
  }
  return elements;
}

export const allColors = () => (
  <>
    {getSectionColor('Blip Blues', getColorsCards(blipBlues))}
    {getSectionColor('Purples', getColorsCards(purples))}
    {getSectionColor('Greens', getColorsCards(greens))}
    {getSectionColor('Pinks', getColorsCards(pinks))}
    {getSectionColor('Oranges', getColorsCards(oranges))}
    {getSectionColor('Yellows', getColorsCards(yellows))}
    {getSectionColor('Secondary Colors Alerts', getColorsCards(secondaryColorsAlerts))}
    {getSectionColor('Reds', getColorsCards(reds))}
    {getSectionColor('Browns', getColorsCards(browns))}
    {getSectionColor('Grays', getColorsCards(grays))}
    {getSectionColor('Light Greens', getColorsCards(lightGreens))}
    {getSectionColor('Light Blues', getColorsCards(lightBlues))}
    {getSectionColor('Light Greens', getColorsCards(lightGreens))}
    {getSectionColor('Yellow Skin', getColorsCards(yellowSkin))}
    {getSectionColor('White Skin', getColorsCards(whiteSkin))}
    {getSectionColor('Brown Skin', getColorsCards(brownSkin))}
    {getSectionColor('Dark Skin', getColorsCards(darkSkin))}
    {getSectionColor('Disabled Blues', getColorsCards(disabledBlues))}
    {getSectionColor('Disabled Reds', getColorsCards(disabledReds))}
    {getSectionColor('Dark Neutrals', getColorsCards(darkNeutrals))}
    {getSectionColor('Medium Neutrals', getColorsCards(mediumNeutrals))}
    {getSectionColor('Light Neutrals', getColorsCards(lightNeutrals))}
    {getSectionColor('Gradient Colors', getColorsCards(gradientColors))}
  </>
);
