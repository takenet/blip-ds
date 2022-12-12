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
      <bds-list-item value="List Item Title" subtitle="Secondary Text"></bds-list-item>
      <bds-list-item value="List Item Title" subtitle="Secondary Text">
        <div slot="content-list">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item value="List Item Title" subtitle="Secondary Text">
        <div slot="content-list">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
        <div slot="action-area">
          <bds-button-icon variant="secondary" icon="copy" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="settings-general" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="more-options-horizontal" size="short"></bds-button-icon>
        </div>
      </bds-list-item>
      <bds-list-item value="Settings" subtitle="Secondary Text" icon="settings-builder">
        <div slot="content-list">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
        <div slot="action-area">
          <bds-button-icon variant="secondary" icon="copy" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="settings-general" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="more-options-horizontal" size="short"></bds-button-icon>
        </div>
      </bds-list-item>
      <bds-list-item avatar-name="Michael Scott" avatar-size="extra-small" value="Michael Scott" subtitle="Manager">
        <div slot="content-list">
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
      <bds-list-item value="List Item Title" subtitle="Secondary Text"></bds-list-item>
      <bds-list-item value="Settings" subtitle="Secondary Text" icon="settings-builder">
        <div slot="content-list">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item avatar-name="Michael Scott" avatar-size="extra-small" value="Michael Scott" subtitle="Manager">
        <div slot="content-list">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
    </bds-list>
  </>
);

export const ListChecbox = () => (
  <>
    <bds-list type-list="checkbox">
      <bds-list-item value="List Item Title" subtitle="Secondary Text"></bds-list-item>
      <bds-list-item value="Settings" subtitle="Secondary Text" icon="settings-builder">
        <div slot="content-list">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item avatar-name="Michael Scott" avatar-size="extra-small" value="Michael Scott" subtitle="Manager">
        <div slot="content-list">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
    </bds-list>
  </>
);

export const ListSwitch = () => (
  <>
    <bds-list type-list="switch">
      <bds-list-item value="List Item Title" subtitle="Secondary Text"></bds-list-item>
      <bds-list-item value="Settings" subtitle="Secondary Text" icon="settings-builder">
        <div slot="content-list">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item avatar-name="Michael Scott" avatar-size="extra-small" value="Michael Scott" subtitle="Manager">
        <div slot="content-list">
          <bds-chip-clickable>Label Chip</bds-chip-clickable>
        </div>
      </bds-list-item>
    </bds-list>
  </>
);
