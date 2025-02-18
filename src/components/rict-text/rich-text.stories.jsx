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
  return <bds-rich-text height={args.height} language={args.language}></bds-rich-text>;
};

Properties.argTypes = {
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
