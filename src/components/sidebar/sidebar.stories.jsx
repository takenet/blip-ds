import React, {useEffect} from 'react';
import DocumentationTemplate from './sidebar.mdx';
import { BdsSidebar, BdsTypo } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Sidebar',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  argTypes: {
    sidebarPosition: {
      options: ['left', 'right'],
      control: { type: 'select' },
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '500px';
    el[0].style.height = '680px';
  }
  return (
    <bds-grid xxs="12" height="95vh">
      <bds-sidebar is-open={args.isOpen} sidebar-position={args.sidebarPosition} margin={args.margin} type={args.type} background={args.background} width={args.width}>
        <div slot="header">
          <bds-typo>Insira o header aqui</bds-typo>
        </div>
        <div slot="body">
          <bds-typo>Insira o seu conteúdo aqui</bds-typo>
        </div>
        <div slot="footer">
          <bds-typo>Insira o footer aqui</bds-typo>
        </div>
      </bds-sidebar>
    </bds-grid>
      
  );
};

Properties.args = {
  isOpen: true,
  sidebarPosition: 'right',
  type: 'fixed',
  background: 'surface-2',
  margin: 'true',
  width: '360'
};

Properties.argTypes = {
  isOpen: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  sidebarPosition: {
    table: {
      defaultValue: { summary: 'left' },
    },
    options: ["left", "right"],
    control: 'select',
  },
  type: {
    table: {
      defaultValue: { summary: 'fixed' },
    },
    options: ["fixed", "over"],
    control: 'select',
  },
  background: {
    table: {
      defaultValue: { summary: 'surface-2' },
    },
    options: ["surface-1", "surface-2", "surface-3", "surface-4"],
    control: 'select',
  },
  margin: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  width: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'number',
  },
}

export const Methods = () => {
  const openSidebar = async (id) => {
    const sb = document.getElementById(id);
    sb.isOpen = true;
  };
  return (
    <>
    <bds-button onClick={() => openSidebar('sidebar')}>
        Abrir Sidebar
      </bds-button>
    <bds-grid xxs="12" height="95vh">
      <bds-sidebar id="sidebar" is-open={false} sidebar-position="left" margin={true} type="over">
      <div slot="header">
          <bds-typo>Insira o header aqui</bds-typo>
        </div>
        <div slot="body">
          <bds-typo>Insira o seu conteúdo aqui</bds-typo>
        </div>
        <div slot="footer">
          <bds-typo>Insira o footer aqui</bds-typo>
        </div>
      </bds-sidebar>
    </bds-grid>
    </>
    
  );
};

export const Events = () => {
  const openSidebar = async (id) => {
    const sb = document.getElementById(id);
    sb.isOpen = true;
  };
  useEffect(() => {
    const sidebar = document.getElementById('sidebar');
    sidebar.addEventListener('bdsToggle', () => {
      console.log('Evento bdsToggle funcionando');
    });
  });
  return (
    <>
    <bds-button onClick={() => openSidebar('sidebar')}>
        Abrir Sidebar
      </bds-button>
    <bds-grid xxs="12" height="95vh">
      <bds-sidebar id="sidebar" is-open={false} sidebar-position="left" margin={true} type="over">
      <div slot="header">
          <bds-typo>Insira o header aqui</bds-typo>
        </div>
        <div slot="body">
          <bds-typo>Insira o seu conteúdo aqui</bds-typo>
        </div>
        <div slot="footer">
          <bds-typo>Insira o footer aqui</bds-typo>
        </div>
      </bds-sidebar>
    </bds-grid>
    </>
  );
};

export const FrameworkReact = () => {
  return (
      <BdsSidebar  is-open={true} sidebar-position="left" margin={true} type="over">
        <div slot="header">
          <BdsTypo>Insira o header aqui</BdsTypo>
        </div>
        <div slot="body">
          <BdsTypo>Insira o seu conteúdo aqui</BdsTypo>
        </div>
        <div slot="footer">
          <BdsTypo>Insira o footer aqui</BdsTypo>
        </div>
      </BdsSidebar>
  );
};