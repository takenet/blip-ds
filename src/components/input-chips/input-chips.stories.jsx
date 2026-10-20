import React, { useEffect } from 'react';
import DocumentationTemplate from './input-chips.mdx';
import { BdsInputChips } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Input Chips',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-grid height="100px">
      <bds-input-chips
        label={args.label}
        danger={args.danger}
        error-message={args.errorMessage}
        chips={args.chips}
        blur-creation={args.blurCreation}
        disable-submit={args.disableSubmit}
        disabled={args.disabled}
      ></bds-input-chips>
    </bds-grid>
  );
};

Properties.args = {
  type: 'text',
  label: '',
  danger: false,
  errorMessage: '',
  chips: '["chip1", "chip2"]',
  blurCreation: false,
  disableSubmit: false,
  disabled: false,
};

Properties.argTypes = {
  type: {
    table: {
      defaultValue: { summary: 'text' },
    },

    options: ['email', 'text'],
    control: 'select',
  },
  label: {
    table: {
      defaultValue: { summary: 'vazio' },
    },

    control: 'text',
  },
  danger: {
    table: {
      defaultValue: { summary: 'false' },
    },

    control: 'boolean',
  },
  errorMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },

    control: 'text',
  },
  chips: {
    table: {
      defaultValue: { summary: 'vazio' },
    },

    control: 'text',
  },
  blurCreation: {
    table: {
      defaultValue: { summary: 'false' },
    },

    control: 'boolean',
  },
  disableSubmit: {
    table: {
      defaultValue: { summary: 'false' },
    },

    control: 'boolean',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },

    control: 'boolean',
  },
};

export const Events = () => {
  useEffect(() => {
    const inputChips = document.getElementById('input-chips');
    inputChips.addEventListener('bdsBlur', (event) => {
      console.log('Evento Blur funcionando, chips:', event.detail);
    });
    inputChips.addEventListener('bdsChangeChips', (event) => {
      console.log('Evento ChangeChips funcionando, data:', event.detail);
    });
    inputChips.addEventListener('bdsChange', (event) => {
      console.log('Evento Change funcionando, data:', event.detail);
    });
    inputChips.addEventListener('bdsInputChipsFocus', () => {
      console.log('Evento Focus funcionando');
    });
    inputChips.addEventListener('bdsInputChipsInput', () => {
      console.log('Evento InputChips funcionando');
    });
    inputChips.addEventListener('bdsExtendedQuantityInput', () => {
      console.log('Evento Extended Quantity Input funcionando');
    });
    inputChips.addEventListener('bdsSubmit', (event) => {
      console.log('Evento Submit funcionando, value:', event.detail);
    });
  });
  return (
    <bds-grid height="100px">
      <bds-input-chips id="input-chips" label="input chips" chips='["chip1", "chip2"]'></bds-input-chips>
    </bds-grid>
  );
};

export const Methods = () => {
  const btIsValid = async (id) => {
    const inputChips = document.getElementById(id);
    const valid = await inputChips.isValid();
    console.log('Is valid:', valid);
  };

  const btGet = async (id) => {
    const inputChips = document.getElementById(id);
    const chips = await inputChips.get();
    console.log('Current chips:', chips);
  };

  const btClear = async (id) => {
    const inputChips = document.getElementById(id);
    await inputChips.clear();
    console.log('Chips cleared');
  };

  const btAdd = async (id, value) => {
    const inputChips = document.getElementById(id);
    await inputChips.add(value);
    console.log(`Added chip: ${value}`);
  };

  const btSetFocus = async (id) => {
    const inputChips = document.getElementById(id);
    await inputChips.setFocus();
    console.log('Input chips focused');
  };

  const btRemoveFocus = async (id) => {
    const inputChips = document.getElementById(id);
    await inputChips.removeFocus();
    console.log('Input chips focus removed');
  };

  return (
    <bds-grid direction="column" gap="2">
      <bds-grid>
        <bds-input-chips id="input-chips-example"></bds-input-chips>
      </bds-grid>
      <bds-grid direction="row" gap="2">
        <bds-button onClick={() => btIsValid('input-chips-example')}>Is Valid</bds-button>
        <bds-button onClick={() => btGet('input-chips-example')}>Get Chips</bds-button>
        <bds-button onClick={() => btClear('input-chips-example')}>Clear Chips</bds-button>
        <bds-button onClick={() => btAdd('input-chips-example', 'New Chip')}>Add Chip</bds-button>
        <bds-button onClick={() => btSetFocus('input-chips-example')}>Set Focus</bds-button>
        <bds-button onClick={() => btRemoveFocus('input-chips-example')}>Remove Focus</bds-button>
      </bds-grid>
    </bds-grid>
  );
};

export const BlurCreation = () => {
  useEffect(() => {
    const inputChips = document.getElementById('blur-creation-example');
    inputChips.addEventListener('bdsBlur', (event) => {
      console.log('bdsBlur event - chips:', event.detail);
    });
    inputChips.addEventListener('bdsSubmit', (event) => {
      console.log('bdsSubmit event - data:', event.detail);
    });
    inputChips.addEventListener('bdsChangeChips', (event) => {
      console.log('bdsChangeChips event - data:', event.detail);
    });
    inputChips.addEventListener('bdsChange', (event) => {
      console.log('bdsChange event - data:', event.detail);
    });
  });
  
  return (
    <bds-grid direction="column" gap="2">
      <bds-typo variant="fs-16" bold="bold">BlurCreation Example</bds-typo>
      <bds-typo variant="fs-14">Type text and click outside the input to create chips. Check console for event details.</bds-typo>
      <bds-grid>
        <bds-input-chips 
          id="blur-creation-example" 
          label="Email Input with Blur Creation" 
          blur-creation="true"
          placeholder="Type emails and click outside..."
          type="email"
        ></bds-input-chips>
      </bds-grid>
      <bds-typo variant="fs-12">
        With blur-creation enabled, chips are created when the input loses focus (blur event). 
        All events now correctly include the updated chip values.
      </bds-typo>
    </bds-grid>
  );
};

export const FrameworkReact = () => {
  return <BdsInputChips id="input-chips" label="input chips" chips='["chip1", "chip2"]'></BdsInputChips>;
};
