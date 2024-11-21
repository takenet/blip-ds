import React from 'react';
import DocumentationTemplate from './nav-tree-group.mdx';
import { BdsNavTree, BdsNavTreeGroup, BdsNavTreeItem } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/NavTreeGroup',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-nav-tree-group collapse={args.colapse}>
      <bds-nav-tree id="nav-tree" icon="heart" text="Título" secondary-text="Breve Descrição">
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
      <bds-nav-tree id="nav-tree" icon="heart" text="Título" secondary-text="Breve Descrição">
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
      <bds-nav-tree id="nav-tree" icon="heart" text="Título" secondary-text="Breve Descrição">
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
      <bds-nav-tree id="nav-tree" icon="heart" text="Título" secondary-text="Breve Descrição">
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
    </bds-nav-tree-group>
  );
};
Properties.args = { colapse: 'single' };

Properties.argTypes = {
  colapse: {
    table: {
      defaultValue: { summary: 'single' },
    },
    description: 'Selecione a regra de comportamento de abrir e fechar as opções.',
    control: 'select',
    options: ['single', 'multiple'],
  },
};

export const Methods = () => {
  const btOpenAll = async (id) => {
    const acc = document.getElementById(id);
    await acc.openAll();
  };
  const btCloseAll = async (id) => {
    const acc = document.getElementById(id);
    await acc.closeAll();
  };
  return (
    <bds-grid direction="column" gap="2">
      <bds-button onClick={() => btOpenAll('nav-tree')} variant="primary" size="short">
        openAll
      </bds-button>
      <bds-button onClick={() => btCloseAll('nav-tree')} variant="primary" size="short">
        openAll
      </bds-button>
      <bds-nav-tree-group>
        <bds-nav-tree id="nav-tree" icon="heart" text="Título" secondary-text="Breve Descrição">
          <bds-nav-tree-item icon="heart" text="Título"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item icon="heart" text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        </bds-nav-tree>
        <bds-nav-tree id="nav-tree" icon="heart" text="Título" secondary-text="Breve Descrição">
          <bds-nav-tree-item icon="heart" text="Título"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item icon="heart" text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        </bds-nav-tree>
        <bds-nav-tree id="nav-tree" icon="heart" text="Título" secondary-text="Breve Descrição">
          <bds-nav-tree-item icon="heart" text="Título"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item icon="heart" text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        </bds-nav-tree>
        <bds-nav-tree id="nav-tree" icon="heart" text="Título" secondary-text="Breve Descrição">
          <bds-nav-tree-item icon="heart" text="Título"></bds-nav-tree-item>
          <bds-nav-tree-item text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
          <bds-nav-tree-item icon="heart" text="Título" secondary-text="Breve Descrição"></bds-nav-tree-item>
        </bds-nav-tree>
      </bds-nav-tree-group>
    </bds-grid>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsNavTreeGroup>
      <BdsNavTree icon="heart" text="Título" secondaryText="Breve Descrição">
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
      </BdsNavTree>
      <BdsNavTree icon="heart" text="Título" secondaryText="Breve Descrição">
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
      </BdsNavTree>
      <BdsNavTree icon="heart" text="Título" secondaryText="Breve Descrição">
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
      </BdsNavTree>
      <BdsNavTree icon="heart" text="Título" secondaryText="Breve Descrição">
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
      </BdsNavTree>
    </BdsNavTreeGroup>
  );
};
