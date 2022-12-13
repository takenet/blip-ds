import React from 'react';
import readme from './readme.md';

export default {
  title: 'List',
  parameters: {
    notes: { markdown: readme },
  },
};

export const List = () => (
  <>
    <bds-list type-list="default">
      <bds-list-item value="0" text="List Item Title" secondary-text="Secondary Text"></bds-list-item>
      <bds-list-item value="1" text="List Item Title" secondary-text="Secondary Text">
        <div slot="content-area">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item value="2" text="List Item Title" secondary-text="Secondary Text">
        <div slot="content-area">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
        <div slot="action-area">
          <bds-button-icon variant="secondary" icon="copy" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="settings-general" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="more-options-horizontal" size="short"></bds-button-icon>
        </div>
      </bds-list-item>
      <bds-list-item value="3" text="Settings" secondary-text="Secondary Text" icon="settings-builder">
        <div slot="content-area">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
        <div slot="action-area">
          <bds-button-icon variant="secondary" icon="copy" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="settings-general" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="more-options-horizontal" size="short"></bds-button-icon>
        </div>
      </bds-list-item>
      <bds-list-item
        value="4"
        avatar-name="Michael Scott"
        avatar-size="extra-small"
        text="Michael Scott"
        secondary-text="Manager"
      >
        <div slot="content-area">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
        <div slot="action-area">
          <bds-button-icon variant="secondary" icon="copy" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="settings-general" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="more-options-horizontal" size="short"></bds-button-icon>
        </div>
      </bds-list-item>
    </bds-list>
  </>
);

export const ListRadio = () => (
  <>
    <bds-list type-list="radio">
      <bds-list-item value="0" text="List Item Title" secondary-text="Secondary Text"></bds-list-item>
      <bds-list-item value="1" text="Settings" secondary-text="Secondary Text" icon="settings-builder">
        <div slot="content-area">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item
        value="2"
        avatar-name="Michael Scott"
        avatar-size="extra-small"
        text="Michael Scott"
        secondary-text="Manager"
      >
        <div slot="content-area">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
    </bds-list>
  </>
);

export const ListChecbox = () => (
  <>
    <bds-list type-list="checkbox">
      <bds-list-item value="0" text="List Item Title" secondary-text="Secondary Text"></bds-list-item>
      <bds-list-item value="1" text="Settings" secondary-text="Secondary Text" icon="settings-builder">
        <div slot="content-area">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item
        value="2"
        avatar-name="Michael Scott"
        avatar-size="extra-small"
        text="Michael Scott"
        secondary-text="Manager"
      >
        <div slot="content-area">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
    </bds-list>
  </>
);

export const ListSwitch = () => (
  <>
    <bds-list type-list="switch">
      <bds-list-item value="0" text="List Item Title" secondary-text="Secondary Text"></bds-list-item>
      <bds-list-item value="1" text="Settings" secondary-text="Secondary Text" icon="settings-builder">
        <div slot="content-area">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item
        value="2"
        avatar-name="Michael Scott"
        avatar-size="extra-small"
        text="Michael Scott"
        secondary-text="Manager"
      >
        <div slot="content-area">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
    </bds-list>
  </>
);
