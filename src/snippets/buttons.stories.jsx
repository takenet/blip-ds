import React, { useState } from 'react';

export default {
  title: 'Snippets/Buttons',
};

export const BasicButton = (args) => <bds-button>Click Me</bds-button>;

export const ButtonWithIcons = (args) => (
  <bds-grid direction="row" gap="2">
    <bds-button icon-left="builder-publish-bot">Publish</bds-button>
    <bds-button icon-right="search">Search</bds-button>
    <bds-button icon="email">Email</bds-button>
  </bds-grid>
);

export const ButtonVariants = (args) => (
  <bds-grid direction="row" gap="2">
    <bds-button variant="solid">solid</bds-button>
    <bds-button variant="outline">outline</bds-button>
    <bds-button variant="text">text</bds-button>
  </bds-grid>
);

export const ButtonColor = (args) => (
  <bds-grid direction="column" gap="2">
    <bds-grid direction="row" gap="2">
      <bds-button color="primary">primary</bds-button>
      <bds-button color="content">content</bds-button>
      <bds-button color="positive">positive</bds-button>
      <bds-button color="negative">negative</bds-button>
    </bds-grid>
    <bds-grid direction="row" gap="2">
      <bds-button variant="outline" color="primary">
        primary
      </bds-button>
      <bds-button variant="outline" color="content">
        content
      </bds-button>
      <bds-button variant="outline" color="positive">
        positive
      </bds-button>
      <bds-button variant="outline" color="negative">
        negative
      </bds-button>
    </bds-grid>
    <bds-grid direction="row" gap="2">
      <bds-button variant="text" color="primary">
        primary
      </bds-button>
      <bds-button variant="text" color="content">
        content
      </bds-button>
      <bds-button variant="text" color="positive">
        positive
      </bds-button>
      <bds-button variant="text" color="negative">
        negative
      </bds-button>
    </bds-grid>
  </bds-grid>
);

export const ButtonSize = (args) => (
    <bds-grid direction="column" gap="2">
      <bds-grid direction="row" gap="2">
        <bds-button size="medium">Button Medium</bds-button>
        <bds-button size="large">Button Large</bds-button>
      </bds-grid>
    </bds-grid>
  );

export const LoadingButton = (args) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <bds-grid direction="row" gap="2">
      <bds-button bds-loading color="primary">primary</bds-button>
      <bds-button bds-loading color="content">content</bds-button>
      <bds-button bds-loading color="positive">positive</bds-button>
      <bds-button bds-loading color="negative">negative</bds-button>
    </bds-grid>
  );
};
