import React from 'react';
import readme from './readme.md';

export default {
  title: 'Components/List',
  parameters: {
    notes: { markdown: readme },
  },
};

export const List = () => (
  <>
    <bds-list>
      <bds-list-item value="01" text="Here you put the text of the item"></bds-list-item>
      <bds-list-item
        value="02"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
      ></bds-list-item>
      <bds-list-item
        value="03"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
        icon="blip-ideas"
      ></bds-list-item>
      <bds-list-item
        value="04"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
        avatar-name="Alvare Horta"
      ></bds-list-item>
    </bds-list>
  </>
);

export const ListRadio = () => (
  <>
    <bds-list type-list="radio">
      <bds-list-item value="01" text="Here you put the text of the item"></bds-list-item>
      <bds-list-item
        value="02"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
      ></bds-list-item>
      <bds-list-item
        value="03"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
        icon="blip-ideas"
      ></bds-list-item>
      <bds-list-item
        value="04"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
        avatar-name="Alvare Horta"
      ></bds-list-item>
    </bds-list>
  </>
);

export const ListChecbox = () => (
  <>
    <bds-list type-list="checkbox">
      <bds-list-item value="01" text="Here you put the text of the item"></bds-list-item>
      <bds-list-item
        value="02"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
      ></bds-list-item>
      <bds-list-item
        value="03"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
        icon="blip-ideas"
      ></bds-list-item>
      <bds-list-item
        value="04"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
        avatar-name="Alvare Horta"
      ></bds-list-item>
    </bds-list>
  </>
);

export const ListSwitch = () => (
  <>
    <bds-list type-list="switch">
      <bds-list-item value="01" text="Here you put the text of the item"></bds-list-item>
      <bds-list-item
        value="02"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
      ></bds-list-item>
      <bds-list-item
        value="03"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
        icon="blip-ideas"
      ></bds-list-item>
      <bds-list-item
        value="04"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
        avatar-name="Alvare Horta"
      ></bds-list-item>
    </bds-list>
  </>
);

export const ListActionArea = () => (
  <>
    <bds-list type-list="default">
      <bds-list-item value="01" text="Here you put the text of the item">
        <div slot="action-area">
          <bds-button-icon variant="secondary" icon="copy" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="settings-general" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="more-options-horizontal" size="short"></bds-button-icon>
        </div>
      </bds-list-item>
      <bds-list-item
        value="02"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
      >
        <div slot="action-area">
          <bds-button-icon variant="secondary" icon="copy" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="settings-general" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="more-options-horizontal" size="short"></bds-button-icon>
        </div>
      </bds-list-item>
      <bds-list-item
        value="03"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
        icon="blip-ideas"
      >
        <div slot="action-area">
          <bds-button-icon variant="secondary" icon="copy" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="settings-general" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="more-options-horizontal" size="short"></bds-button-icon>
        </div>
      </bds-list-item>
      <bds-list-item
        value="04"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
        avatar-name="Alvare Horta"
      >
        <div slot="action-area">
          <bds-button-icon variant="secondary" icon="copy" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="settings-general" size="short"></bds-button-icon>
          <bds-button-icon variant="secondary" icon="more-options-horizontal" size="short"></bds-button-icon>
        </div>
      </bds-list-item>
    </bds-list>
  </>
);

export const ListContentArea = () => (
  <>
    <bds-list>
      <bds-list-item value="01" text="Here you put the text of the item">
        <div slot="content-area">
          <bds-chip-clickable>Chip tag label</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item
        value="02"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
      >
        <div slot="content-area">
          <bds-chip-clickable>Chip tag label</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item
        value="03"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
        icon="blip-ideas"
      >
        <div slot="content-area">
          <bds-chip-clickable>Chip tag label</bds-chip-clickable>
        </div>
      </bds-list-item>
      <bds-list-item
        value="04"
        text="Here you put the text of the item"
        secondary-text="Here you put the secondary text of the item"
        avatar-name="Alvare Horta"
      >
        <div slot="content-area">
          <bds-chip-clickable>Chip tag label</bds-chip-clickable>
        </div>
      </bds-list-item>
    </bds-list>
  </>
);

export const ListData = () => {
  const listData = [
    {
      value: '01',
      text: 'Here you put the text of the item',
    },
    {
      value: '02',
      text: 'Here you put the text of the item',
      secondaryText: 'Here you put the secondary text of the item',
    },
    {
      value: '03',
      text: 'Here you put the text of the item',
      secondaryText: 'Here you put the secondary text of the item',
      icon: 'blip-ideas',
    },
    {
      value: '04',
      text: 'Here you put the text of the item',
      secondaryText: 'Here you put the secondary text of the item',
      avatarName: 'Ashley Thompsom',
      icon: 'blip-ideas',
    },
  ];
  return (
    <>
      <bds-list>
        {listData.map((item, idx) => (
          <bds-list-item
            key={idx}
            value={item.value}
            text={item.text}
            secondary-text={item.secondaryText}
            avatar-name={item.avatarName}
            icon={item.icon}
          >
            <div slot="content-area">
              <bds-chip-clickable>Chip tag label</bds-chip-clickable>
            </div>
            <div slot="action-area">
              <bds-button-icon variant="secondary" icon="copy" size="short"></bds-button-icon>
              <bds-button-icon variant="secondary" icon="settings-general" size="short"></bds-button-icon>
              <bds-button-icon variant="secondary" icon="more-options-horizontal" size="short"></bds-button-icon>
            </div>
          </bds-list-item>
        ))}
      </bds-list>
    </>
  );
};
