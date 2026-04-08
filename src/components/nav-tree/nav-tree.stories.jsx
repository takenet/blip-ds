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

export const CollapsedSidebar = () => {
  useEffect(() => {
    const sidebar = document.getElementById('demo-sidebar');
    const group = document.getElementById('demo-nav-group');
    const btn = document.getElementById('sidebar-toggle-btn');

    const toggle = () => {
      const isCollapsed = sidebar.classList.toggle('sidebar--collapsed');
      group.collapsed = isCollapsed;
      btn.textContent = isCollapsed ? '→ Expandir' : '← Recolher';
    };

    if (btn) btn.addEventListener('click', toggle);
  });

  return (
    <div style={{ display: 'flex', gap: '0', height: '360px', border: '1px solid #e0e0e0', borderRadius: '12px', overflow: 'hidden' }}>
      <style>{`
        .demo-sidebar {
          width: 280px;
          background: #fff;
          border-right: 1px solid #e0e0e0;
          padding: 16px 8px;
          transition: width 0.3s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-shrink: 0;
        }
        .demo-sidebar.sidebar--collapsed {
          width: 64px;
        }
        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4px 8px;
          border-bottom: 1px solid #f0f0f0;
          white-space: nowrap;
          overflow: hidden;
        }
        .sidebar-logo {
          font-weight: 700;
          font-size: 16px;
          color: #3a72d4;
          transition: opacity 0.3s ease, max-width 0.3s ease;
          max-width: 200px;
          overflow: hidden;
        }
        .demo-sidebar.sidebar--collapsed .sidebar-logo {
          opacity: 0;
          max-width: 0;
        }
        #sidebar-toggle-btn {
          background: none;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          padding: 4px 8px;
          cursor: pointer;
          font-size: 12px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .demo-content {
          flex: 1;
          padding: 24px;
          background: #fafafa;
          display: flex;
          align-items: flex-start;
        }
      `}</style>
      <div class="demo-sidebar" id="demo-sidebar">
        <div class="sidebar-header">
          <span class="sidebar-logo">Meu App</span>
          <button id="sidebar-toggle-btn">← Recolher</button>
        </div>
        <bds-nav-tree-group id="demo-nav-group" collapse="single">
          <bds-nav-tree icon="heart" text="Contatos" secondary-text="Gerencie contatos">
            <bds-nav-tree-item text="Todos os contatos"></bds-nav-tree-item>
            <bds-nav-tree-item text="Favoritos"></bds-nav-tree-item>
          </bds-nav-tree>
          <bds-nav-tree icon="star" text="Campanhas" secondary-text="Envie mensagens">
            <bds-nav-tree-item text="Ativas"></bds-nav-tree-item>
            <bds-nav-tree-item text="Rascunhos"></bds-nav-tree-item>
          </bds-nav-tree>
          <bds-nav-tree icon="robot" text="Automações">
            <bds-nav-tree-item text="Fluxos"></bds-nav-tree-item>
            <bds-nav-tree-item text="Gatilhos"></bds-nav-tree-item>
          </bds-nav-tree>
          <bds-nav-tree icon="settings-general" text="Configurações">
            <bds-nav-tree-item text="Perfil"></bds-nav-tree-item>
            <bds-nav-tree-item text="Segurança"></bds-nav-tree-item>
          </bds-nav-tree>
        </bds-nav-tree-group>
      </div>
      <div class="demo-content">
        <bds-typo variant="fs-16" bold="bold">Clique em "← Recolher" para ver o modo icon-only</bds-typo>
      </div>
    </div>
  );
};
