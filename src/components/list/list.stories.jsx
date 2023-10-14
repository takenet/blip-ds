import React, { useEffect } from 'react';
import DocumentationTemplate from './list.mdx';
import { BdsList, BdsListItem } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/List',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => (
  <bds-list type-list={args.typeList}>
    <bds-list-item
      value="01"
      text={args.text1}
      secondary-text={args.secondaryText1}
      icon={args.icon1}
      avatar-name={args.avatarName1}
    ></bds-list-item>
    <bds-list-item
      value="02"
      text={args.text2}
      secondary-text={args.secondaryText2}
      icon={args.icon2}
      avatar-name={args.avatarName2}
    >
      <div slot="action-area">
        <bds-button-icon size="short" variant="secondary" icon="settings-general"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="question"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="bell"></bds-button-icon>
      </div>
    </bds-list-item>
    <bds-list-item
      value="03"
      text={args.text3}
      secondary-text={args.secondaryText3}
      icon={args.icon3}
      avatar-name={args.avatarName3}
    >
      <div slot="content-area">
        <bds-chip-tag color="info" icon="">
          Category
        </bds-chip-tag>
        <bds-chip-tag color="success" icon="">
          Category
        </bds-chip-tag>
        <bds-chip-tag color="warning" icon="">
          Category
        </bds-chip-tag>
      </div>
      <div slot="action-area">
        <bds-button-icon size="short" variant="secondary" icon="settings-general"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="question"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="bell"></bds-button-icon>
      </div>
    </bds-list-item>
  </bds-list>
);

Properties.args = {
  typeList: 'default',
  text1: 'Here you put the text of the item',
  secondaryText1: 'Here you put the secondary text of the item',
  icon1: '',
  avatarName1: '',
  text2: 'Here you put the text of the item',
  secondaryText2: 'Here you put the secondary text of the item',
  icon2: '',
  avatarName2: '',
  text3: 'Here you put the text of the item',
  secondaryText3: 'Here you put the secondary text of the item',
  icon3: '',
  avatarName3: '',
};

Properties.argTypes = {
  typeList: {
    table: {
      defaultValue: { summary: 'default' },
    },
    options: ['default', 'checkbox', 'radio', 'switch'],
    control: 'select',
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

export const Events = () => {
  useEffect(() => {
    const list1 = document.getElementById('list-1');
    const list2 = document.getElementById('list-2');
    list1.addEventListener('bdsChecked', () => {
      console.log('Evento bdsChecked funcionando');
    });
    list1.addEventListener('bdsClickActionButtom', () => {
      console.log('Evento bdsClickActionButtom funcionando');
    });
    list2.addEventListener('bdsChecked', () => {
      console.log('Evento bdsChecked funcionando');
    });
    list2.addEventListener('bdsClickActionButtom', () => {
      console.log('Evento bdsClickActionButtom funcionando');
    });
  });
  return (
    <bds-list type-list="checkbox">
      <bds-list-item id="list-1" value="01" text="Here you put the text of the item"></bds-list-item>
      <bds-list-item id="list-2" value="02" text="Here you put the text of the item"></bds-list-item>
    </bds-list>
  );
};

export const FrameworkReact = () => (
  <BdsList>
    <BdsListItem value="01" text="Here you put the text of the item"></BdsListItem>
    <BdsListItem value="02" text="Here you put the text of the item"></BdsListItem>
  </BdsList>
);
