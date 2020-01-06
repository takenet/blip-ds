import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Text',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const paragraph = 'Genialidade é fruto de muito hardwork. O segredo do sucesso é começar antes de estar pronto. É você quem decide se o seu dia vai ser incrível ou não.';

export const allTexts = () => /*html*/`
  <bds-text variant="fs-10">Wearetaketeam</bds-text>
  <bds-text variant="fs-12">Wearetaketeam</bds-text>
  <bds-text variant="fs-14">Wearetaketeam</bds-text>
  <bds-text variant="fs-16">Wearetaketeam</bds-text>
`;

export const textBase = () => /*html*/`
  <bds-text variant="${text("variant", "fs-16")}">${text("text", "Wearetaketeam")}</bds-text>
`;

export const textNoWrap = () => /*html*/`
  <div style=" width: 250px ">
    <bds-text variant="${text("variant", "fs-16")}" no-wrap="${boolean("noWrap", true)}">${text("text", paragraph)}</bds-text>
  <div>
`;

export const textParapgraph = () => /*html*/`
  <bds-text variant="${text("variant", "fs-16")}" paragraph="${boolean("paragraph", true)}">${text("text", paragraph)}</bds-text>
  <bds-text variant="${text("variant", "fs-16")}" paragraph="${boolean("paragraph", true)}">${text("text", paragraph)}</bds-text>
`;
