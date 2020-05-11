import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Icon Button',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const defaultIconButton = () => (
  <>
    <bds-icon-button icon="user" size="short"></bds-icon-button>
    <br />
    <bds-icon-button icon="user" size="standard"></bds-icon-button>
    <br />
    <bds-icon-button icon="user" size="tall"></bds-icon-button>
  </>
);

export const defaultIconButtonPrimary = () => (
  <>
    <bds-icon-button icon="user" size="short" variant="primary"></bds-icon-button>
    <br />
    <bds-icon-button icon="user" size="short" variant="primary" disabled></bds-icon-button>
    <br />
    <bds-icon-button icon="user" size="standard" variant="primary"></bds-icon-button>
    <br />
    <bds-icon-button icon="user" size="tall" variant="primary"></bds-icon-button>
  </>
);

export const defaultIconButtonSecondary = () => (
  <>
    <bds-icon-button icon="user" size="short" variant="secondary"></bds-icon-button>
    <br />
    <bds-icon-button icon="user" size="short" variant="secondary" disabled></bds-icon-button>
    <br />
    <bds-icon-button icon="user" size="standard" variant="secondary"></bds-icon-button>
    <br />
    <bds-icon-button icon="user" size="tall" variant="secondary"></bds-icon-button>
  </>
);

export const defaultIconButtonDelete = () => (
  <>
    <bds-icon-button icon="user" size="short" variant="delete"></bds-icon-button>
    <br />
    <bds-icon-button icon="user" size="short" variant="delete" disabled></bds-icon-button>
    <br />
    <bds-icon-button icon="user" size="standard" variant="delete"></bds-icon-button>
    <br />
    <bds-icon-button icon="user" size="tall" variant="delete"></bds-icon-button>
  </>
);