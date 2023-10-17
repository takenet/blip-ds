import React, { useEffect } from 'react';
import DocumentationTemplate from './dropdown.mdx';

export default {
  title: 'Components/Dropdown',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.height = '400px';
    el[0].style.position = 'relative';
  }
  return (
    <bds-dropdown active-mode={args.activeMode} open={args.open} position={args.position}>
      <div slot="dropdown-activator">
        <bds-button variant="primary">Open Dropdown</bds-button>
      </div>
      <div slot="dropdown-content">
        <bds-list type-list="default">
          <bds-list-item
            value="03"
            text="Text"
            secondary-text="Secondary text"
            clickable
            icon="blip-ideas"
          ></bds-list-item>
          <bds-dropdown active-mode="hover" position="left-top">
            <div slot="dropdown-activator">
              <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
            </div>
            <div slot="dropdown-content">
              <bds-list type-list="default">
                <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
                <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
                <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
              </bds-list>
            </div>
          </bds-dropdown>
          <bds-list-item
            value="04"
            text="Text"
            secondary-text="Secondary text"
            avatar-name="Alvare Horta"
          ></bds-list-item>
        </bds-list>
      </div>
    </bds-dropdown>
  );
};

Properties.args = {
  activeMode: 'click',
  open: false,
  position: 'auto',
};

Properties.argTypes = {
  activeMode: {
    table: {
      defaultValue: { summary: 'click' },
    },
    options: ['click', 'hover'],
    control: 'select',
  },
  open: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  position: {
    table: {
      defaultValue: { summary: 'auto' },
    },
    options: [
      'auto',
      'top-center',
      'top-left',
      'top-right',
      'bottom-center',
      'bottom-right',
      'bottom-left',
      'right-center',
      'right-top',
      'right-bottom',
      'left-center',
      'left-top',
      'left-bottom',
    ],
    control: 'select',
  },
};

export const Events = () => {
  useEffect(() => {
    const dropdown = document.getElementById('dropdown');
    dropdown.addEventListener('bdsToggle', () => {
      console.log('Evento Toggle funcionando');
    });
  });
  return (
    <bds-dropdown position="bottom-left" id="dropdown">
      <div slot="dropdown-activator">
        <bds-button variant="primary">Open Menu</bds-button>
      </div>
      <div slot="dropdown-content">
        <bds-list type-list="default">
          <bds-list-item
            value="03"
            text="Text"
            secondary-text="Secondary text"
            clickable
            icon="blip-ideas"
          ></bds-list-item>
          <bds-dropdown position="left-top" active-mode="hover">
            <div slot="dropdown-activator">
              <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
            </div>
            <div slot="dropdown-content">
              <bds-list type-list="default">
                <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
                <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
                <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
              </bds-list>
            </div>
          </bds-dropdown>
          <bds-list-item
            value="04"
            text="Text"
            secondary-text="Secondary text"
            avatar-name="Alvare Horta"
          ></bds-list-item>
        </bds-list>
      </div>
    </bds-dropdown>
  );
};

export const Methods = () => {
  const btToggle = async (id) => {
    const acc = document.getElementById(id);
    await acc.toggle();
  };
  const btOpen = async (id) => {
    const acc = document.getElementById(id);
    await acc.setOpen();
  };
  const btClose = async (id) => {
    const acc = document.getElementById(id);
    await acc.setClose();
  };
  return (
    <bds-grid direction="column" gap="2">
      <bds-grid gap="2">
        <bds-button onClick={() => btToggle('dropdown')} variant="primary" size="short">
          Toggle
        </bds-button>
        <bds-button onClick={() => btOpen('dropdown')} variant="primary" size="short">
          Open
        </bds-button>
        <bds-button onClick={() => btClose('dropdown')} variant="primary" size="short">
          Close
        </bds-button>
      </bds-grid>
      <bds-dropdown id="dropdown" position="bottom-left" active-mode="hover">
        <div slot="dropdown-activator">
          <bds-button variant="primary">Open Dropdown</bds-button>
        </div>
        <div slot="dropdown-content">
          <bds-list type-list="default">
            <bds-list-item value="01" text="Text" clickable icon="blip-ideas"></bds-list-item>
            <bds-list-item value="02" text="Text" clickable icon="blip-ideas"></bds-list-item>
            <bds-list-item value="03" text="Text" clickable icon="blip-ideas"></bds-list-item>
            <bds-list-item value="04" text="Text" clickable icon="blip-ideas"></bds-list-item>
            <bds-list-item value="05" text="Text" clickable icon="blip-ideas"></bds-list-item>
          </bds-list>
        </div>
      </bds-dropdown>
    </bds-grid>
  );
};

export const FrameworkReact = () => {
  return (
    <bds-dropdown>
      <div slot="dropdown-activator">
        <bds-button variant="primary">Open Menu</bds-button>
      </div>
      <div slot="dropdown-content">
        <bds-list type-list="default">
          <bds-list-item
            value="03"
            text="Text"
            secondary-text="Secondary text"
            clickable
            icon="blip-ideas"
          ></bds-list-item>
          <bds-dropdown is-sub-menu>
            <div slot="dropdown-activator">
              <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
            </div>
            <div slot="dropdown-content">
              <bds-list type-list="default">
                <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
                <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
                <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
              </bds-list>
            </div>
          </bds-dropdown>
          <bds-list-item
            value="04"
            text="Text"
            secondary-text="Secondary text"
            avatar-name="Alvare Horta"
          ></bds-list-item>
        </bds-list>
      </div>
    </bds-dropdown>
  );
};
