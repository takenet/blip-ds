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
    el[0].style.width = '100%';
  }

  // Create different data URLs for demonstration
  const svgDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDA3YmZmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPlNWRyBEYXRhIFVSTDwvdGV4dD48L3N2Zz4=';
  
  // 1x1 pixel PNG (red)
  const pngDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==';
  
  // SVG circle
  const svgCircleDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjZmYwMDAwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkNpcmNsZTwvdGV4dD48L3N2Zz4=';

  return (
    <bds-grid xxs="12" direction="column" gap="3" align-items="center">
      <bds-grid xxs="12" direction="column" align-items="center" gap="1">
        <bds-typo variant="fs-20" bold="bold" tag="h3">Data URL Support</bds-typo>
        <bds-typo variant="fs-14">
          The bds-image component now supports data URLs, allowing you to embed images directly without fetching them.
        </bds-typo>
      </bds-grid>
      <bds-grid xxs="12" gap="3" flex-wrap="wrap" justify-content="center">
        <bds-grid direction="column" align-items="center" gap="1">
          <bds-paper>
            <bds-image
              src={svgDataUrl}
              alt="SVG Data URL with blue background"
              width="300px"
              height="200px"
              object-fit="cover"
            ></bds-image>
          </bds-paper>
          <bds-typo variant="fs-12">SVG Data URL</bds-typo>
        </bds-grid>
        <bds-grid direction="column" align-items="center" gap="1">
          <bds-paper>
            <bds-image
              src={svgCircleDataUrl}
              alt="SVG circle data URL"
              width="300px"
              height="200px"
              object-fit="contain"
            ></bds-image>
          </bds-paper>
          <bds-typo variant="fs-12">SVG Circle</bds-typo>
        </bds-grid>
        <bds-grid direction="column" align-items="center" gap="1">
          <bds-paper>
            <bds-image
              src={pngDataUrl}
              alt="PNG Data URL (1x1 red pixel)"
              width="300px"
              height="200px"
              object-fit="fill"
            ></bds-image>
          </bds-paper>
          <bds-typo variant="fs-12">PNG Data URL (1x1 pixel stretched)</bds-typo>
        </bds-grid>
      </bds-grid>
    </bds-grid>
  );
};
