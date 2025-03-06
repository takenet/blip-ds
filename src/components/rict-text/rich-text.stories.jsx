import React, { useEffect } from 'react';
import DocumentationTemplate from './rich-text.mdx';
import { BdsRichText } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/RichText',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '560px';
  }
  return (
    <bds-rich-text
      weight-button={args.weightButton}
      italic-button={args.italicButton}
      strike-through-button={args.strikeThroughButton}
      underline-button={args.underlineButton}
      link-button={args.linkButton}
      code-button={args.codeButton}
      alignment-buttons={args.alignmentButtons}
      list-buttons={args.listButtons}
      quote-button={args.quoteButton}
      heading-buttons={args.headingButtons}
      unstyled-button={args.unstyledButton}
      height={args.height}
      language={args.language}
    ></bds-rich-text>
  );
};

Properties.argTypes = {
  weightButton: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  italicButton: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  strikeThroughButton: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  underlineButton: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  linkButton: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  codeButton: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  alignmentButtons: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  listButtons: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  quoteButton: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  headingButtons: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  unstyledButton: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  height: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  language: {
    table: {
      defaultValue: { summary: 'pt_BR' },
    },
    options: ['pt_BR', 'es_ES', 'en_US'],
    control: 'select',
  },
};

Properties.args = {
  weightButton: true,
  italicButton: true,
  strikeThroughButton: true,
  underlineButton: true,
  linkButton: true,
  codeButton: true,
  alignmentButtons: true,
  listButtons: true,
  quoteButton: true,
  headingButtons: true,
  unstyledButton: true,
  height: '280px',
  language: 'pt_BR',
};

export const Events = () => {
  useEffect(() => {
    const richText = document.getElementById('rich-text');
    richText.addEventListener('bdsBlur', () => {
      console.log('Evento Blur funcionando');
    });
    richText.addEventListener('bdsFocus', () => {
      console.log('Evento Focus funcionando');
    });
    richText.addEventListener('bdsRichTextChange', () => {
      console.log('Evento Change funcionando');
    });
    richText.addEventListener('bdsRichTextInput', () => {
      console.log('Evento Input funcionando');
    });
  });
  return <bds-rich-text id="rich-text" height="280px" language="pt_BR"></bds-rich-text>;
};

export const FrameworkReact = () => {
  return <BdsRichText id="rich-text" height="280px" language="pt_BR"></BdsRichText>;
};
