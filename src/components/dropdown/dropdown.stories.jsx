import React from 'react';
import readme from './readme.md';

export default {
  title: 'Components/Dropdown',
  parameters: {
    notes: { markdown: readme },
  },
};

export const Dropdown = () => {
  return (
    <bds-dropdown>
      <div slot="dropdown-activator">
        <bds-button variant="primary">Open Menu</bds-button>
      </div>
      <div slot="dropdown-content">
        <bds-list type-list="default">
          <bds-list-item value="01" text="Text" secondary-text="Secondary text" clickable></bds-list-item>
          <bds-list-item value="03" text="Text" secondary-text="Secondary text" icon="blip-ideas"></bds-list-item>
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

export const DropdownWithSubmenu = () => {
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
