import React, { useEffect, useRef } from 'react';
import readme from './readme.md';

export default {
  title: 'List',
  parameters: {
    notes: { markdown: readme },
  },
};

export const List = () => (
  <>
    <bds-list>
      <bds-list-item value="01" text="Text" secondary-text="Secondary Text"></bds-list-item>
      <bds-list-item value="02" text="Text" secondary-text="Secondary Text">
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
        <div slot="action-area">
          <bds-typo variant="fs-12">text</bds-typo>
        </div>
      </bds-list-item>
      <bds-list-item value="03" text="Text" secondary-text="Secondary Text">
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
        <div slot="action-area">
          <bds-button-icon variant="secondary" icon="copy" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="settings-general" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="more-options-horizontal" size="short"></bds-button-icon>
        </div>
      </bds-list-item>
      <bds-list-item value="05" text="Text" secondary-text="Secondary Text" icon="blip-ideas">
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
        <div slot="action-area">
          <bds-typo variant="fs-12">text</bds-typo>
        </div>
      </bds-list-item>
      <bds-list-item value="06" text="Text" secondary-text="Secondary Text" icon="blip-ideas">
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
        <div slot="action-area">
          <bds-button-icon variant="secondary" icon="copy" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="settings-general" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="more-options-horizontal" size="short"></bds-button-icon>
        </div>
      </bds-list-item>
      <bds-list-item value="08" text="Text" secondary-text="Secondary Text" avatar-name="Alvare Horta">
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
        <div slot="action-area">
          <bds-typo variant="fs-12">text</bds-typo>
        </div>
      </bds-list-item>
      <bds-list-item value="09" text="Text" secondary-text="Secondary Text" avatar-name="Alvare Horta">
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
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
    <bds-list>
      <bds-list-item value="01" type-list="radio" text="Text" secondary-text="Secondary Text"></bds-list-item>
      <bds-list-item value="02" type-list="radio" text="Text" secondary-text="Secondary Text">
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item
        value="03"
        type-list="radio"
        text="Text"
        secondary-text="Secondary Text"
        icon="blip-ideas"
      ></bds-list-item>
      <bds-list-item value="04" type-list="radio" text="Text" secondary-text="Secondary Text" icon="blip-ideas">
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item
        value="05"
        type-list="radio"
        text="Text"
        secondary-text="Secondary Text"
        avatar-name="Alvare Horta"
      ></bds-list-item>
      <bds-list-item
        value="06"
        type-list="radio"
        text="Text"
        secondary-text="Secondary Text"
        avatar-name="Alvare Horta"
      >
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
      </bds-list-item>
    </bds-list>
  </>
);

export const ListChecbox = () => (
  <>
    <bds-list>
      <bds-list-item value="01" type-list="checkbox" text="Text" secondary-text="Secondary Text"></bds-list-item>
      <bds-list-item value="02" type-list="checkbox" text="Text" secondary-text="Secondary Text">
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item
        value="03"
        type-list="checkbox"
        text="Text"
        secondary-text="Secondary Text"
        icon="blip-ideas"
      ></bds-list-item>
      <bds-list-item value="04" type-list="checkbox" text="Text" secondary-text="Secondary Text" icon="blip-ideas">
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item
        value="05"
        type-list="checkbox"
        text="Text"
        secondary-text="Secondary Text"
        avatar-name="Alvare Horta"
      ></bds-list-item>
      <bds-list-item
        value="06"
        type-list="checkbox"
        text="Text"
        secondary-text="Secondary Text"
        avatar-name="Alvare Horta"
      >
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
      </bds-list-item>
    </bds-list>
  </>
);

export const ListSwitch = () => (
  <>
    <bds-list>
      <bds-list-item value="01" type-list="switch" text="Text" secondary-text="Secondary Text"></bds-list-item>
      <bds-list-item value="02" type-list="switch" text="Text" secondary-text="Secondary Text">
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item
        value="03"
        type-list="switch"
        text="Text"
        secondary-text="Secondary Text"
        icon="blip-ideas"
      ></bds-list-item>
      <bds-list-item value="04" type-list="switch" text="Text" secondary-text="Secondary Text" icon="blip-ideas">
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item
        value="05"
        type-list="switch"
        text="Text"
        secondary-text="Secondary Text"
        avatar-name="Alvare Horta"
      ></bds-list-item>
      <bds-list-item
        value="06"
        type-list="switch"
        text="Text"
        secondary-text="Secondary Text"
        avatar-name="Alvare Horta"
      >
        <div slot="content-area">
          <bds-chip-clickable>Label</bds-chip-clickable>
        </div>
      </bds-list-item>
    </bds-list>
  </>
);

export const ListData = () => {
  const elementRf = useRef(null);
  const listData = [
    {
      value: '01',
      text: 'Text',
      secondaryText: 'Secondary Text',
      typeList: 'default',
      chips: ['Label'],
      actionsButtons: ['copy', 'settings-general', 'more-options-horizontal'],
    },
    {
      value: '02',
      text: 'Text',
      secondaryText: 'Secondary Text',
      typeList: 'radio',
    },
    {
      value: '03',
      text: 'Text',
      secondaryText: 'Secondary Text',
      typeList: 'radio',
    },
    {
      value: '04',
      text: 'Text',
      secondaryText: 'Secondary Text',
      typeList: 'radio',
    },
    {
      value: '05',
      text: 'Text',
      secondaryText: 'Secondary Text',
      typeList: 'checkbox',
    },
    {
      value: '06',
      text: 'Text',
      secondaryText: 'Secondary Text',
      typeList: 'checkbox',
    },
    {
      value: '07',
      text: 'Text',
      secondaryText: 'Secondary Text',
      typeList: 'checkbox',
    },
    {
      value: '08',
      text: 'Text',
      secondaryText: 'Secondary Text',
      typeList: 'switch',
    },
    {
      value: '09',
      text: 'Text',
      secondaryText: 'Secondary Text',
      typeList: 'switch',
    },
    {
      value: '10',
      text: 'Text',
      secondaryText: 'Secondary Text',
      typeList: 'switch',
    },
  ];

  useEffect(() => {
    elementRf.current.data = listData;
  });
  return (
    <>
      <bds-list ref={elementRf}></bds-list>
    </>
  );
};
