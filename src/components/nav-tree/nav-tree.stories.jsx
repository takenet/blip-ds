import React, { useEffect } from 'react';
import DocumentationTemplate from './nav-tree.mdx';
import { BdsNavTree, BdsNavTreeItem } from '../../../blip-ds-react/dist/components';

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
    <bds-nav-tree
      isOpen={args.isOpen}
      colapse={args.colapse}
      icon={args.icon}
      text={args.text}
      secondary-text={args.secondaryText}
    >
      <bds-nav-tree-item icon="heart" text="Título"></bds-nav-tree-item>
      <bds-nav-tree-item text="Título" secondary-text="Breve Descrição">
        <bds-nav-tree-item icon="heart" text="Título" isOpen></bds-nav-tree-item>
        <bds-nav-tree-item icon="heart" text="Título"></bds-nav-tree-item>
      </bds-nav-tree-item>
      <bds-nav-tree-item icon="heart" text="Título" secondary-text="Breve Descrição">
        <bds-nav-tree-item text="Título"></bds-nav-tree-item>
        <bds-nav-tree-item icon="heart" text="Título"></bds-nav-tree-item>
        <bds-nav-tree-item icon="heart" text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
      </bds-nav-tree-item>
    </bds-nav-tree>
  );
};
Properties.args = { isOpen: true, colapse: 'single', text: 'Título',icon:"heart", secondaryText: 'Breve Descrição', active: false };

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
  icon: {
    table: {
      defaultValue: { summary: 'heart' },
    },
    control: 'text',
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
};

export const Methods = () => {
  const btToggle = async (id) => {
    const acc = document.getElementById(id);
    await acc.toggle();
  };
  return (
    <bds-grid direction="column" gap="2">
      <bds-button onClick={() => btToggle('nav-tree')} variant="primary" size="short">
        Toggle
      </bds-button>
      <bds-nav-tree id="nav-tree" icon="heart" text="Título" secondary-text="Breve Descrição">
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
      </bds-nav-tree>
    </bds-grid>
  );
};

export const Events = () => {
  const btToggle = (id) => {
    const acc = document.getElementById(id);
    acc.isOpen = !acc.isOpen;
  };
  useEffect(() => {
    const bdsToogleChange = document.getElementById('nav-tree');
    bdsToogleChange.addEventListener('bdsToogleChange', () => {
      console.log('Evento toggle funcionando');
    });
  });
  return (
    <bds-grid direction="column" gap="2">
      <bds-button onClick={() => btToggle('nav-tree')} variant="primary" size="short">
        Toggle
      </bds-button>
      <bds-nav-tree id="nav-tree" icon="heart" text="Título" secondary-text="Breve Descrição">
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
      </bds-nav-tree>
    </bds-grid>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsNavTree icon="heart" text="Título" secondaryText="Breve Descrição">
      <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
      <BdsNavTreeItem text="Título" secondaryText="Breve Descrição">
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição">
          <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
          <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
          <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
          <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        </BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
      </BdsNavTreeItem>
      <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
      <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
      <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
    </BdsNavTree>
  );
};
