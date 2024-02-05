import React from 'react';
import DocumentationTemplate from './image.mdx';
import { BdsImage } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Image',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '760px';
    el[0].style.display = 'flex';
    el[0].style.justifyContent = 'center';
  }
  return (
    <bds-image
      src={args.src}
      alt={args.alt}
      width={args.width}
      height={args.height}
      object-fit={args.objectFit}
    ></bds-image>
  );
};

Properties.args = {
  src: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Example of a image',
  width: '300px',
  height: '200px',
  objectFit: 'cover',
};

Properties.argTypes = {
  src: {
    table: {
      defaultValue: { summary: 'vazio' },
    },

    control: 'text',
  },
  alt: {
    table: {
      defaultValue: { summary: 'vazio' },
    },

    control: 'text',
  },
  width: {
    table: {
      defaultValue: { summary: 'vazio' },
    },

    control: 'text',
  },
  height: {
    table: {
      defaultValue: { summary: 'vazio' },
    },

    control: 'text',
  },
  objectFit: {
    table: {
      defaultValue: { summary: 'cover' },
    },
    options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    control: 'select',
  },
};

export const FrameworkReact = () => (
  <BdsImage
    src='https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D'
    alt='Example of a image'
    width='300px'
    height='200px'
    objectFit='cover'
  ></BdsImage>
);
