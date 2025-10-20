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
      brightness={args.brightness}
    ></bds-image>
  );
};

Properties.args = {
  src: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Example of a image',
  width: '300px',
  height: '200px',
  objectFit: 'cover',
  brightness: 1,
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
  brightness: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'number',
  },
};

export const FrameworkReact = () => (
  <BdsImage
    src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
    alt="Example of a image"
    width="300px"
    height="200px"
    objectFit="cover"
  ></BdsImage>
);

export const DataURL = () => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '760px';
    el[0].style.display = 'flex';
    el[0].style.justifyContent = 'center';
    el[0].style.gap = '20px';
    el[0].style.flexWrap = 'wrap';
  }

  // Create different data URLs for demonstration
  const svgDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDA3YmZmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPlNWRyBEYXRhIFVSTDwvdGV4dD48L3N2Zz4=';
  
  // 1x1 pixel PNG (red)
  const pngDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==';
  
  // SVG circle
  const svgCircleDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjZmYwMDAwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkNpcmNsZTwvdGV4dD48L3N2Zz4=';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '10px' }}>Data URL Support</h3>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          The bds-image component now supports data URLs, allowing you to embed images directly without fetching them.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <bds-image
            src={svgDataUrl}
            alt="SVG Data URL with blue background"
            width="300px"
            height="200px"
            objectFit="cover"
          ></bds-image>
          <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>SVG Data URL</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <bds-image
            src={svgCircleDataUrl}
            alt="SVG circle data URL"
            width="300px"
            height="200px"
            objectFit="contain"
          ></bds-image>
          <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>SVG Circle</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <bds-image
            src={pngDataUrl}
            alt="PNG Data URL (1x1 red pixel)"
            width="300px"
            height="200px"
            objectFit="fill"
          ></bds-image>
          <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>PNG Data URL (1x1 pixel stretched)</p>
        </div>
      </div>
    </div>
  );
};
