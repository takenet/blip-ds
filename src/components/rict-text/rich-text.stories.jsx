import React from 'react';
import DocumentationTemplate from './rich-text.mdx';

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
    richText.addEventListener('bdsOnBlur', () => {
      console.log('Evento Blur funcionando');
    });
    richText.addEventListener('bdsFocus', () => {
      console.log('Evento Focus funcionando');
    });
    richText.addEventListener('bdsChangeRichText', () => {
      console.log('Evento Change funcionando');
    });
    richText.addEventListener('bdsInputRichText', () => {
      console.log('Evento Input funcionando');
    });
  });
  return <bds-rich-text id="rich-text" height="280px" language="pt_BR"></bds-rich-text>;
};
