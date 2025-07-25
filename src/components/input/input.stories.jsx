import React, {useEffect} from 'react';
import DocumentationTemplate from './input.mdx';
import { BdsInput } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Input',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '500px';
  }
  return (
    <bds-input
      placeholder={args.placeholder}
      label={args.label}
      disabled={args.disabled}
      danger={args.danger}
      success={args.success}
      icon={args.icon}
      value={args.value}
      type={args.type}
      error-message={args.errorMessage}
      helper-message={args.helperMessage}
      success-message={args.successMessage}
      min={args.min}
      minlength={args.minlength}
      max={args.max}
      maxlength={args.maxlength}
      readonly={args.readonly}
      is-textarea={args.istextarea}
      rows={args.rows}
      auto-resize={args.autoresize}
      resizable={args.resizable}
      min-height={args.minheight}
      max-height={args.maxheight}
      icon-size={args.iconsize}
      counter-length={args.counterlength}
      encode={args.encode}
    ></bds-input>
  );
};

Properties.args = {
  placeholder: 'nome completo',
  label: '',
  disabled: false,
  danger: false,
  success: false,
  icon: '',
  value: '',
  type: '',
  errorMessage: '',
  helperMessage: '',
  successMessage: '',
  min: '',
  minlength: 0,
  max: '',
  maxlength: 30,
  readonly: false,
  istextarea: false,
  rows: 3,
  autoresize: true,
  resizable: false,
  minheight: 60,
  maxheight: 200,
  iconsize: 'small',
  counterlength: false,
  encode: false,
};

Properties.argTypes = {
  placeholder: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  label: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  danger: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  success: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  value: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  type: {
    table: {
      defaultValue: { summary: 'text' },
    },
    options: ['text', 'password', 'email', 'number', 'phonenumber'],
    control: 'select',
  },
  errorMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  helperMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  successMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  min: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  minlength: {
    table: {
      defaultValue: { summary: '0' },
    },
    control: 'number',
  },
  max: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  maxlength: {
    table: {
      defaultValue: { summary: '30' },
    },
    control: 'number',
  },
  readonly: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  istextarea: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  rows: {
    table: {
      defaultValue: { summary: '3' },
    },
    control: 'number',
  },
  autoresize: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  resizable: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  minheight: {
    table: {
      defaultValue: { summary: '60' },
    },
    control: 'number',
  },
  maxheight: {
    table: {
      defaultValue: { summary: '200' },
    },
    control: 'number',
  },
  iconsize: {
    table: {
      defaultValue: { summary: 'small' },
    },
    options: ['small', 'medium'],
    control: 'select',
  },
  counterlength: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  encode: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
};

// New story specifically for textarea functionality
export const TextareaExamples = () => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '600px';
  }
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>Basic Textarea</h3>
        <bds-input
          is-textarea={true}
          placeholder="Enter your message here..."
          label="Message"
          rows={3}
        ></bds-input>
      </div>
      
      <div>
        <h3>Textarea with Icon (Small)</h3>
        <bds-input
          is-textarea={true}
          icon="edit"
          icon-size="small"
          placeholder="Write your content..."
          label="Content"
          helper-message="This textarea has a small icon"
        ></bds-input>
      </div>
      
      <div>
        <h3>Textarea with Icon (Medium)</h3>
        <bds-input
          is-textarea={true}
          icon="edit"
          icon-size="medium"
          placeholder="Write your content..."
          label="Content"
          helper-message="This textarea has a medium icon"
        ></bds-input>
      </div>
      
      <div>
        <h3>Textarea with Character Counter</h3>
        <bds-input
          is-textarea={true}
          placeholder="Limited to 200 characters..."
          label="Description"
          maxlength={200}
          counter-length={true}
          helper-message="Character counter enabled"
        ></bds-input>
      </div>
      
      <div>
        <h3>Textarea with Error State</h3>
        <bds-input
          is-textarea={true}
          placeholder="This field has an error..."
          label="Error Example"
          danger={true}
          error-message="This field is required"
          icon="error"
        ></bds-input>
      </div>
      
      <div>
        <h3>Textarea with Success State</h3>
        <bds-input
          is-textarea={true}
          placeholder="This field is valid..."
          label="Success Example"
          success={true}
          success-message="Field validated successfully"
          value="Valid content here"
        ></bds-input>
      </div>
      
      <div>
        <h3>Disabled Textarea</h3>
        <bds-input
          is-textarea={true}
          placeholder="This textarea is disabled..."
          label="Disabled"
          disabled={true}
          value="Disabled content"
          helper-message="This field is disabled"
        ></bds-input>
      </div>
      
      <div>
        <h3>Fixed Height Textarea (No Auto-resize)</h3>
        <bds-input
          is-textarea={true}
          placeholder="This textarea has fixed height..."
          label="Fixed Height"
          auto-resize={false}
          rows={5}
          helper-message="Auto-resize is disabled"
        ></bds-input>
      </div>
      
      <div>
        <h3>Custom Height Limits</h3>
        <bds-input
          is-textarea={true}
          placeholder="This textarea has custom height limits..."
          label="Custom Limits"
          min-height={80}
          max-height={150}
          helper-message="Min: 80px, Max: 150px"
        ></bds-input>
      </div>
      
      <div>
        <h3>Resizable Textarea (Manual Resize Disabled)</h3>
        <bds-input
          is-textarea={true}
          placeholder="This textarea cannot be resized manually..."
          label="Not Resizable"
          resizable={false}
          auto-resize={false}
          rows={4}
          helper-message="Resizable is set to false (default)"
        ></bds-input>
      </div>
      
      <div>
        <h3>Resizable Textarea (Manual Resize Enabled)</h3>
        <bds-input
          is-textarea={true}
          placeholder="This textarea can be resized manually by dragging the corner..."
          label="Resizable"
          resizable={true}
          auto-resize={false}
          rows={4}
          helper-message="Resizable is set to true, auto-resize is false"
        ></bds-input>
      </div>
      
      <div>
        <h3>Resizable with Auto-resize (No Manual Resize)</h3>
        <bds-input
          is-textarea={true}
          placeholder="This textarea auto-resizes, but manual resize is disabled because auto-resize takes precedence..."
          label="Auto-resize Priority"
          resizable={true}
          auto-resize={true}
          rows={3}
          helper-message="When auto-resize is true, manual resizing is disabled"
        ></bds-input>
      </div>
    </div>
  );
};

export const Events = () => {
  useEffect(() => {
    const input = document.getElementById('input');
    input.addEventListener('bdsOnBlur', () => {
      console.log('Evento Blur funcionando');
    });
    input.addEventListener('bdsKeyDownBackspace', () => {
      console.log('Evento Cancel funcionando');
    });
    input.addEventListener('bdsChange', () => {
      console.log('Evento Change funcionando');
    });
    input.addEventListener('bdsFocus', () => {
      console.log('Evento Focus funcionando');
    });
    input.addEventListener('bdsInput', () => {
      console.log('Evento Input funcionando');
    });
    input.addEventListener('bdsPatternValidation', () => {
      console.log('Evento Pattern Validation funcionando');
    });
    input.addEventListener('bdsSubmit', () => {
      console.log('Evento Submit funcionando');
    });
  });
  return (
    <bds-input id="input" label="label" icon="email" value="" disabled={false} placeholder="texto aqui">
    </bds-input>
  );
};

export const FrameworkReact = () => (
  <BdsInput
    placeholder="placeholder"
    label="label do input"
  ></BdsInput>
);

export const FrameworkReactTextarea = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <BdsInput
      isTextarea={true}
      placeholder="React textarea example"
      label="React Textarea"
      helperMessage="This is a React wrapper example"
    ></BdsInput>
    
    <BdsInput
      isTextarea={true}
      icon="edit"
      iconSize="medium"
      placeholder="With icon and counter"
      label="Advanced Textarea"
      maxlength={150}
      counterLength={true}
    ></BdsInput>
  </div>
);
