import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Alert',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const systemAlert = () => (
  <>
    <bds-alert open={boolean('open', true)}>
      <bds-alert-header variant={text('variant', 'system')} icon={text('icon', 'info')}>
      {text('header text', 'Atenção!')}
      </bds-alert-header>
      <bds-alert-body>
        {text('body text', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos error!')}
      </bds-alert-body> 
      <bds-alert-actions>
        <bds-button variant={text('left button variant', 'secondary')} bold={boolean('left button bold', true)}>Cancelar</bds-button>
        <bds-button variant={text('right button variant', 'secondary')} bold={boolean('right button bold', true)}>Confirmar</bds-button>
      </bds-alert-actions>
    </bds-alert>
  </>
);

export const errorAlert = () => (
  <>
    <bds-alert open>
      <bds-alert-header variant={text('variant', 'error')} icon={text('icon', 'error')}>
        {text('header text', 'Atenção!')}
        </bds-alert-header>
        <bds-alert-body>
          {text('body text', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos error!')}
        </bds-alert-body> 
        <bds-alert-actions>
          <bds-button variant={text('left button variant', 'secondary')} bold={boolean('left button bold', true)}>Cancelar</bds-button>
          <bds-button variant={text('right button variant', 'secondary')} bold={boolean('right button bold', true)}>Confirmar</bds-button>
        </bds-alert-actions>
    </bds-alert>
  </>
);

export const warningAlert = () => (
  <>
    <bds-alert open>
      <bds-alert-header variant={text('variant', 'warning')} icon={text('icon', 'warning')}>
        {text('header text', 'Atenção!')}
        </bds-alert-header>
        <bds-alert-body>
          {text('body text', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos error!')}
        </bds-alert-body> 
        <bds-alert-actions>
          <bds-button variant={text('left button variant', 'secondary')} bold={boolean('left button bold', true)}>Cancelar</bds-button>
          <bds-button variant={text('right button variant', 'secondary')} bold={boolean('right button bold', true)}>Confirmar</bds-button>
        </bds-alert-actions>
    </bds-alert>
  </>
);

export const deleteAlert = () => (
  <>
    <bds-alert open>
      <bds-alert-header variant={text('variant', 'delete')} icon={text('icon', 'trash')}>
        {text('header text', 'Atenção!')}
        </bds-alert-header>
        <bds-alert-body>
          {text('body text', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi')}
        </bds-alert-body> 
        <bds-alert-actions>
          <bds-button variant={text('left button variant', 'secondary')} bold={boolean('left button bold', true)}>Cancelar</bds-button>
          <bds-button variant={text('right button variant', 'secondary')} bold={boolean('right button bold', true)}>Confirmar</bds-button>
        </bds-alert-actions>
    </bds-alert>
  </>
);