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
        borderless={args.borderless}
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
  borderless: false,
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
  borderless: {
    table: {
      defaultValue: { summary: 'false' },
    },

    control: 'boolean',
  },
};

export const Events = () => {
  useEffect(() => {
    const inputChips = document.getElementById('input-chips');
    inputChips.addEventListener('bdsBlur', () => {
      console.log('Evento Blur funcionando');
    });
    inputChips.addEventListener('bdsChangeChips', () => {
      console.log('Evento ChangeChips funcionando');
    });
    inputChips.addEventListener('bdsChange', () => {
      console.log('Evento Change funcionando');
    });
    inputChips.addEventListener('bdsInputChipsFocus', () => {
      console.log('Evento Focus funcionando');
    });
    inputChips.addEventListener('bdsInputChipsInput', () => {
      console.log('Evento InputChips funcionando');
    });
    inputChips.addEventListener('bdsExtendedQuantityInput', () => {
      console.log('Evento Selected Change funcionando');
    });
    inputChips.addEventListener('bdsSubmit', () => {
      console.log('Evento Selected Change funcionando');
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

export const FrameworkReact = () => {
  return <BdsInputChips id="input-chips" label="input chips" chips='["chip1", "chip2"]'></BdsInputChips>;
};
export const StyledChips = () => {
  const styles = `
    bds-input-chips::part(chip) {
      background-color: #1976D2 !important;
      border-color: #1976D2 !important;
      border-radius: 16px !important;
      color: #ffffff !important;
      font-weight: 600 !important;
    }

    bds-input-chips::part(chip):hover {
      background-color: #1565C0 !important;
      border-color: #1565C0 !important;
    }
`;

  return (
    <>
      <style>{styles}</style>
      <bds-grid direction="column" gap="2">
        <bds-typo variant="fs-16" bold="semi-bold">
          Chips with Custom Styling
        </bds-typo>
        <bds-typo variant="fs-12">
          This example demonstrates how to style chips using the ::part(chip) CSS selector
        </bds-typo>
        <bds-input-chips 
          label="Add custom styled chips" 
          chips='["Primary", "Styled", "Chips"]'
          placeholder="Type and press Enter"
        ></bds-input-chips>
      </bds-grid>
    </>
  );
};

export const StyledChipsWithCustomColors = () => {
  const styles = `
    /* Option 2: Override text color when needed */
    .blue-chips bds-input-chips {
      --bds-chip-text-color: #ffffff;
      --bds-chip-icon-color: #ffffff;
    }

    .blue-chips bds-input-chips::part(chip) {
      background-color: #1976D2;
      border-radius: 16px;
    }

    .green-chips bds-input-chips {
      --bds-chip-text-color: #ffffff;
      --bds-chip-icon-color: #ffffff;
    }

    .green-chips bds-input-chips::part(chip) {
      background-color: #059669;
      border-radius: 16px;
    }

    .orange-chips bds-input-chips {
      --bds-chip-text-color: #000000;
      --bds-chip-icon-color: #000000;
    }

    .orange-chips bds-input-chips::part(chip) {
      background-color: #D97706;
      border-radius: 16px;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <bds-grid direction="column" gap="2">
        <bds-typo variant="fs-16" bold="semi-bold">
          Chips with Custom Colors - Override per Group
        </bds-typo>
        <bds-typo variant="fs-12">
          Each chip group can have its own text and background colors via custom properties.
        </bds-typo>
        
        <div className="blue-chips">
          <bds-typo variant="fs-12" bold="semi-bold">Blue Chips (White text)</bds-typo>
          <bds-input-chips 
            label="Blue chips" 
            chips='["Feature", "Active"]'
            placeholder="Type and press Enter"
          ></bds-input-chips>
        </div>

        <div className="green-chips">
          <bds-typo variant="fs-12" bold="semi-bold">Green Chips (White text)</bds-typo>
          <bds-input-chips 
            label="Green chips" 
            chips='["Success", "Complete"]'
            placeholder="Type and press Enter"
          ></bds-input-chips>
        </div>

        <div className="orange-chips">
          <bds-typo variant="fs-12" bold="semi-bold">Orange Chips (Black text)</bds-typo>
          <bds-input-chips 
            label="Orange chips" 
            chips='["Warning", "Attention"]'
            placeholder="Type and press Enter"
          ></bds-input-chips>
        </div>
      </bds-grid>
    </>
  );
};

export const OutlinedChipStyle = () => {
  const styles = `
    bds-input-chips {
      --bds-chip-text-color: #1E6BF1;
      --bds-chip-icon-color: #1E6BF1;
      --bds-chip-border: 1.5px solid #1E6BF1;
    }

    bds-input-chips::part(chip) {
      background-color: #1E6BF118;
      border-radius: 16px;
    }

    bds-input-chips::part(chip):hover {
      background-color: #1E6BF128;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <bds-grid direction="column" gap="2">
        <bds-typo variant="fs-16" bold="semi-bold">
          Outlined Chip Style
        </bds-typo>
        <bds-typo variant="fs-12">
          Border-based styling with light background fill using custom properties
        </bds-typo>
        <bds-input-chips 
          label="Add outlined chips" 
          chips='["Design", "System", "Component"]'
          placeholder="Type and press Enter"
        ></bds-input-chips>
      </bds-grid>
    </>
  );
};

export const OutlineChipVariant = () => {
  const styles = `
    /* Option 1: Use CSS custom property (recommended) - no !important needed */
    .no-border-custom-prop bds-input-chips {
      --bds-chip-border: none;
      --bds-chip-text-color: #282828;
      --bds-chip-icon-color: #282828;
    }

    /* Option 2: Override using ::part() with !important (works but less clean) */
    .no-border-override bds-input-chips::part(chip) {
      border: none !important;
    }

    .no-border-override bds-input-chips {
      --bds-chip-text-color: #282828;
      --bds-chip-icon-color: #282828;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <bds-grid direction="column" gap="2">
        <bds-typo variant="fs-16" bold="semi-bold">
          Outline Chip Variant - Remove Border
        </bds-typo>
        <bds-typo variant="fs-12">
          Two approaches: using CSS custom property (recommended) or ::part() override
        </bds-typo>

        <bds-typo variant="fs-13" bold="semi-bold">Option 1: Custom Property (Recommended)</bds-typo>
        <div className="no-border-custom-prop">
          <bds-input-chips 
            label="Borderless via custom property" 
            chips='["Tag", "Label", "Category"]'
            placeholder="Type and press Enter"
          ></bds-input-chips>
        </div>

        <bds-typo variant="fs-13" bold="semi-bold">Option 2: ::part() Override</bds-typo>
        <div className="no-border-override">
          <bds-input-chips 
            label="Borderless via ::part()" 
            chips='["Tag", "Label", "Category"]'
            placeholder="Type and press Enter"
          ></bds-input-chips>
        </div>
      </bds-grid>
    </>
  );
};