import React, { useEffect, useState } from 'react';
import DocumentationTemplate from './nav-tree.mdx';
import {
  BdsChipTag,
  BdsGrid,
  BdsIcon,
  BdsList,
  BdsListItem,
  BdsListItemContent,
  BdsNavTree,
  BdsNavTreeItem,
  BdsTypo,
} from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/NavTree',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-nav-tree is-open={args.isOpen} collapse={args.colapse}>
      <bds-nav-tree-item text={args.text} secondary-text={args.secondaryText} active={args.active}>
        <bds-nav-tree slot="nav-tree">
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição">
            <bds-nav-tree slot="nav-tree">
              <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
              <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
              <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
              <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
              <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
              <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
            </bds-nav-tree>
          </bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        </bds-nav-tree>
      </bds-nav-tree-item>
      <bds-nav-tree-item text="Título" secondary-text="Breve Descrição">
        <bds-nav-tree slot="nav-tree">
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        </bds-nav-tree>
      </bds-nav-tree-item>
      <bds-nav-tree-item text="Título" secondary-text="Breve Descrição">
        <bds-nav-tree slot="nav-tree">
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        </bds-nav-tree>
      </bds-nav-tree-item>
    </bds-nav-tree>
  );
};
Properties.args = { isOpen: true, colapse: 'single', text: 'Título', secondaryText: 'Breve Descrição', active: false };

Properties.argTypes = {
  isOpen: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  colapse: {
    table: {
      defaultValue: { summary: 'single' },
    },
    description: 'Selecione a regra de comportamento de abrir e fechar as opções.',
    control: 'select',
    options: ['single', 'multiple'],
  },
  text: {
    table: {
      defaultValue: { summary: 'Título' },
    },
    control: 'text',
  },
  secondaryText: {
    table: {
      defaultValue: { summary: 'Breve Descrição' },
    },
    control: 'text',
  },
  active: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
};

export const Methods = () => {
  const btToggle = async (id) => {
    const acc = document.getElementById(id);
    await acc.toggle();
  };
  return (
    <bds-grid direction="column" gap="2">
      <bds-grid gap="2">
        <bds-button onClick={() => btToggle('nav-tree-item')} variant="primary" size="short">
          Toggle
        </bds-button>
      </bds-grid>
      <bds-nav-tree is-open>
        <bds-nav-tree-item id="nav-tree-item" text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
      </bds-nav-tree>
    </bds-grid>
  );
};

export const Events = () => {
  const [activeItem, setActiveItem] = useState(false);
  const btToggle = (id) => {
    const acc = document.getElementById(id);
    acc.isOpen = !acc.isOpen;
    setActiveItem(!activeItem);
  };
  useEffect(() => {
    const bdsToogleChange = document.getElementById('nav-tree');
    bdsToogleChange.addEventListener('bdsToogleChange', () => {
      console.log('Evento toggle funcionando');
    });
    const bdsActiveChange = document.getElementById('nav-tree-item');
    bdsActiveChange.addEventListener('bdsActiveChange', () => {
      console.log('Evento active change funcionando');
    });
  });
  return (
    <bds-grid direction="column" gap="2">
      <bds-list>
        <BdsListItem
          size="short"
          icon="heart"
          borderRadius
          id="list-2"
          clickable
          active={activeItem}
          onClick={() => btToggle('nav-tree')}
          value="02"
          text="Text of the item"
        ></BdsListItem>
        <bds-nav-tree id="nav-tree">
          <bds-nav-tree-item id="nav-tree-item" text="Título" secondaryText="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item id="nav-tree-item" text="Título" secondaryText="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item id="nav-tree-item" text="Título" secondaryText="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item id="nav-tree-item" text="Título" secondaryText="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item id="nav-tree-item" text="Título" secondaryText="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item id="nav-tree-item" text="Título" secondaryText="Breve Descrição"></bds-nav-tree-item>
        </bds-nav-tree>
      </bds-list>
    </bds-grid>
  );
};

export const FrameworkReact = () => {
  const [activeItem, setActiveItem] = useState(false);
  const handleNavTree = (id) => {
    const acc = document.getElementById(id);
    acc.isOpen = !acc.isOpen;
    setActiveItem(!activeItem);
  };
  return (
    <BdsList typeList="default">
      <BdsListItem size="short" icon="heart" borderRadius id="list-1" clickable value="01">
        <BdsListItemContent>
          <bds-typo>Text of the item</bds-typo>
        </BdsListItemContent>
      </BdsListItem>
      <BdsListItem
        size="short"
        icon="heart"
        borderRadius
        id="list-2"
        clickable
        active={activeItem}
        onClick={() => handleNavTree('nav-tree')}
        value="02"
      >
        <BdsListItemContent>
          <bds-typo>Text of the item</bds-typo>
        </BdsListItemContent>
        <div slot="action-area">
          <BdsIcon name="arrow-down"></BdsIcon>
        </div>
      </BdsListItem>
      <BdsNavTree id="nav-tree" isOpen={this.itemActive} collapse="multiple">
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição">
          <BdsGrid slot="content" height="100%" alignItems="center" gap="1">
            <BdsChipTag color="success">Novo</BdsChipTag>
            <BdsChipTag color="info">Info</BdsChipTag>
          </BdsGrid>
          <BdsNavTree slot="nav-tree">
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição">
              <BdsNavTree slot="nav-tree">
                <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
                <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
                <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
                <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
                <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
                <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
              </BdsNavTree>
            </BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
          </BdsNavTree>
        </BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição">
          <BdsNavTree slot="nav-tree">
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
          </BdsNavTree>
        </BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição">
          <BdsNavTree slot="nav-tree">
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
          </BdsNavTree>
        </BdsNavTreeItem>
      </BdsNavTree>
      <BdsListItem size="short" icon="heart" borderRadius id="list-3" clickable value="03">
        <BdsListItemContent>
          <BdsTypo>Text of the item</BdsTypo>
        </BdsListItemContent>
      </BdsListItem>
    </BdsList>
  );
};
