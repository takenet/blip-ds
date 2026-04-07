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
      collapsed={args.collapsed}
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
Properties.args = { isOpen: true, colapse: 'single', text: 'Título',icon:"heart", secondaryText: 'Breve Descrição', active: false, collapsed: false };

Properties.argTypes = {
  isOpen: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  collapsed: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'When true, hides text, arrow and header-content, showing only the icon (icon-only mode).',
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

export const Collapsed = () => {
  const toggleCollapsed = async (id) => {
    const group = document.getElementById(id);
    group.collapsed = !group.collapsed;
  };
  return (
    <bds-grid direction="column" gap="2">
      <bds-button onClick={() => toggleCollapsed('nav-tree-group-collapsed')} variant="primary" size="short">
        Toggle Collapsed
      </bds-button>
      <bds-nav-tree-group id="nav-tree-group-collapsed" collapse="single">
        <bds-nav-tree icon="heart" text="Título" secondary-text="Breve Descrição">
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        </bds-nav-tree>
        <bds-nav-tree icon="star" text="Favoritos" secondary-text="Breve Descrição">
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        </bds-nav-tree>
        <bds-nav-tree icon="settings-general" text="Configurações">
          <bds-nav-tree-item text="Título"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título"></bds-nav-tree-item>
        </bds-nav-tree>
      </bds-nav-tree-group>
    </bds-grid>
  );
};
