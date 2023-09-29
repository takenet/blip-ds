import React, {useEffect} from 'react';
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
    options: ["auto", "bottom-center", "bottom-left", "bottom-right", "top-center", "top-left", "top-right"],
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
    <bds-dropdown id="dropdown">
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

