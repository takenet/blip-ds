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
      button-bold={args.buttonBold}
      button-italic={args.buttonItalic}
      button-strike={args.buttonStrike}
      button-underline={args.buttonUnderline}
      button-link={args.buttonLink}
      button-code={args.buttonCode}
      button-text-align={args.buttonTextAlign}
      button-list={args.buttonList}
      button-quote={args.buttonQuote}
      button-heading={args.buttonHeading}
      button-unstyled={args.buttonUnstyled}
      height={args.height}
      language={args.language}
    ></bds-rich-text>
  );
};

Properties.argTypes = {
  buttonBold: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  buttonItalic: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  buttonStrike: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  buttonUnderline: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  buttonLink: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  buttonCode: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  buttonTextAlign: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  buttonList: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  buttonQuote: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  buttonHeading: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  buttonUnstyled: {
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
  buttonBold: true,
  buttonItalic: true,
  buttonStrike: true,
  buttonUnderline: true,
  buttonLink: true,
  buttonCode: true,
  buttonTextAlign: true,
  buttonList: true,
  buttonQuote: true,
  buttonHeading: true,
  buttonUnstyled: true,
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
