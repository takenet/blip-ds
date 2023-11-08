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
    <bds-list-item value="01" icon={args.icon1} avatar-name={args.avatarName1}>
      <bds-list-item-content>
        <bds-typo>{args.text1}</bds-typo>
        <bds-typo variant="fs-14">{args.secondaryText1}</bds-typo>
      </bds-list-item-content>
    </bds-list-item>
    <bds-list-item value="02" icon={args.icon2} avatar-name={args.avatarName2}>
      <bds-list-item-content>
        <bds-typo>{args.text2}</bds-typo>
        <bds-typo variant="fs-14">{args.secondaryText2}</bds-typo>
      </bds-list-item-content>
      <bds-grid slot="action-area">
        <bds-button-icon size="short" variant="secondary" icon="settings-general"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="question"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="bell"></bds-button-icon>
      </bds-grid>
    </bds-list-item>
    <bds-list-item value="03" icon={args.icon3} avatar-name={args.avatarName3}>
      <bds-list-item-content>
        <bds-typo>{args.text3}</bds-typo>
        <bds-typo variant="fs-14">{args.secondaryText3}</bds-typo>
      </bds-list-item-content>
      <bds-list-item-content direction="row" gap="1">
        <bds-chip-tag color="info" icon="">
          Category
        </bds-chip-tag>
        <bds-chip-tag color="success" icon="">
          Category
        </bds-chip-tag>
        <bds-chip-tag color="warning" icon="">
          Category
        </bds-chip-tag>
      </bds-list-item-content>
      <bds-grid slot="action-area">
        <bds-button-icon size="short" variant="secondary" icon="settings-general"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="question"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="bell"></bds-button-icon>
      </bds-grid>
    </bds-list-item>
    <bds-list-item icon={args.icon4} avatar-name={args.avatarName4}>
      <bds-list-item-content>
        <bds-badge shape="circle" color="system"></bds-badge>
      </bds-list-item-content>
      <bds-list-item-content>
        <bds-typo>{args.text4}</bds-typo>
        <bds-typo variant="fs-14">{args.secondaryText4}</bds-typo>
      </bds-list-item-content>
      <bds-list-item-content direction="row" gap="1">
        <bds-chip-tag color="info" icon="">
          Category
        </bds-chip-tag>
        <bds-chip-tag color="success" icon="">
          Category
        </bds-chip-tag>
        <bds-chip-tag color="warning" icon="">
          Category
        </bds-chip-tag>
      </bds-list-item-content>
      <bds-grid slot="action-area">
        <bds-button-icon size="short" variant="secondary" icon="settings-general"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="question"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="bell"></bds-button-icon>
      </bds-grid>
    </bds-list-item>
  </bds-list>
);

Properties.args = {
  typeList: 'default',
  text1: 'Text of the item',
  secondaryText1: 'Secondary text of the item',
  icon1: '',
  avatarName1: '',
  text2: 'Text of the item',
  secondaryText2: 'Secondary text of the item',
  icon2: '',
  avatarName2: '',
  text3: 'Text of the item',
  secondaryText3: 'Secondary text of the item',
  icon3: '',
  avatarName3: '',
  text4: 'Text of the item',
  secondaryText4: 'Secondary text of the item',
  icon4: '',
  avatarName4: '',
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
      <bds-list-item id="list-1" value="01">
        <bds-list-item-content>
          <bds-typo>Text of the item</bds-typo>
        </bds-list-item-content>
      </bds-list-item>
      <bds-list-item id="list-2" value="02">
        <bds-list-item-content>
          <bds-typo>Text of the item</bds-typo>
        </bds-list-item-content>
      </bds-list-item>
    </bds-list>
  );
};

export const FrameworkReact = () => (
  <BdsList>
    <BdsListItem value="01">
      <bds-list-item-content>
        <bds-typo>Text of the item</bds-typo>
      </bds-list-item-content>
    </BdsListItem>
    <BdsListItem value="02">
      <bds-list-item-content>
        <bds-typo>Text of the item</bds-typo>
      </bds-list-item-content>
    </BdsListItem>
  </BdsList>
);
