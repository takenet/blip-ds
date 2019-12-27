import { withKnobs, text } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Icon',
  decoratos: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const name = text("name", "user");
const themeSolid = text("theme", "solid");

export const iconDefault = () => `<bds-icon name="${name}"></bds-icon>`;

export const iconTheme = () => `<bds-icon name="${name}" theme="${themeSolid}"></bds-icon>`;

export const iconSizes = () => `
  <bds-icon name="${name}" size="xxx-large"></bds-icon>
  <bds-icon name="${name}" size="xx-large"></bds-icon>
  <bds-icon name="${name}" size="x-large"></bds-icon>
  <bds-icon name="${name}" size="large"></bds-icon>
  <bds-icon name="${name}" size="medium"></bds-icon>
  <bds-icon name="${name}" size="small"></bds-icon>
  <bds-icon name="${name}" size="x-small"></bds-icon>
  <bds-icon name="${name}" size="xx-small"></bds-icon>
  <bds-icon name="${name}" size="xxx-small"></bds-icon>
`;

export const iconColors = () => `
  <bds-icon name="${name}" size="xxx-large" color="${text("color1", "#2CC3D5")}"></bds-icon>
  <bds-icon name="${name}" size="xxx-large" color="${text("color2", "#87DDE8")}"></bds-icon>
  <bds-icon name="${name}" size="xxx-large" color="${text("color3", "#2498A8")}"></bds-icon>
  <bds-icon name="${name}" size="xxx-large" theme="solid" color="${text("color1", "#2CC3D5")}"></bds-icon>
  <bds-icon name="${name}" size="xxx-large" theme="solid" color="${text("color2", "#87DDE8")}"></bds-icon>
  <bds-icon name="${name}" size="xxx-large" theme="solid" color="${text("color3", "#2498A8")}"></bds-icon>
`;


