import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Typo',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const paragraph = 'Genialidade é fruto de muito hardwork. O segredo do sucesso é começar antes de estar pronto. É você quem decide se o seu dia vai ser incrível ou não.';

export const allTypos = () => (
  <div>
    <bds-typo variant="fs-40">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-32">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-24">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-20">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-16">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-14">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-12">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-10">Wearetaketeam</bds-typo>
  </div>
);

export const typoBase = () => (
  <div style={{ width: '250px' }}>
    <bds-typo
      variant="${text('variant', 'fs-16')}"
      line-height="${text('lineHeight', '')}"
      bold="${text('bold', '')}"
      italic="${boolean('italic', false)}"
      no-wrap="${boolean('noWrap', false)}"
      paragraph="${boolean('paragraph', false)}"
    >
      {text("text", "Wearetaketeam")}
    </bds-typo>
  </div >
);

export const typoLineHeight = () => (
  <>
    <bds-typo variant="fs-24" line-height="double">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-24" line-height="plus">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-24" line-height="simple">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-24" line-height="small">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-24" line-height="none">Wearetaketeam</bds-typo>
  </>
);

export const typoBold = () => (
  <>
    <bds-typo variant="fs-24" bold="extra-bold">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-24" bold="bold">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-24" bold="semi-bold">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-24" bold="regular">Wearetaketeam</bds-typo>
  </>
);

export const typoItalic = () => (
  <>
    <bds-typo variant="fs-24" italic bold="extra-bold">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-24" italic bold="bold">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-24" italic bold="semi-bold">Wearetaketeam</bds-typo>
    <bds-typo variant="fs-24" italic bold="regular">Wearetaketeam</bds-typo>
  </>
);

export const typoNoWrap = () => (
  <div style={{ width: '250px' }}>
    <bds-typo variant="${text('variant', 'fs-16')}" no-wrap="${boolean('noWrap', true)}">{text('text', paragraph)}</bds-typo>
  </div>
);

export const typoParapgraph = () => (
  <>
    <bds-typo variant="${text('variant', 'fs-16')}" paragraph="${boolean('paragraph', true)}">{text('text', paragraph)}</bds-typo>
    <bds-typo variant="${text('variant', 'fs-16')}" paragraph="${boolean('paragraph', true)}" >{text('text', paragraph)}</bds-typo>
  </>
);

export const typoTag = () => (
  <>
    <bds-typo variant="${text('variant', 'fs-40')}" tag="${text('tag', 'h1')}">{text('text', 'Wearetaketeam')}</bds-typo>
    <bds-typo variant="${text('variant', 'fs-40')}" tag="${text('tag', 'h2')}">{text('text', 'Wearetaketeam')}</bds-typo>
    <bds-typo variant="${text('variant', 'fs-40')}" tag="${text('tag', 'p')}">{text('text', 'Wearetaketeam')}</bds-typo>
  </>
);
