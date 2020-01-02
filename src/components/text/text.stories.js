import { withKnobs, text } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Text',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const allTexts = () => /*html*/`
  <bds-text variant="fs-10">Wearetaketeam</bds-text>
  <bds-text variant="fs-12">Wearetaketeam</bds-text>
  <bds-text variant="fs-14">Wearetaketeam</bds-text>
  <bds-text variant="fs-16">Wearetaketeam</bds-text>
`;

export const Text = () => /*html*/`
  <bds-text variant="${text("variant", "fs-16")}">${text("text", "Wearetaketeam")}</bds-icon>
`;
