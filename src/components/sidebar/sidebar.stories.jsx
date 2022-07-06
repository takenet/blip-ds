import React from 'react';
import readme from './readme.md';

export default {
  title: 'Sidebar',
  parameters: {
    notes: { markdown: readme },
  },
};

const spacing = {
  marginBottom: '16px',
  display: 'block',
  textAlign: 'center',
};

const textContent = '"Insira o seu conteúdo aqui"';

const Template = (args) => {
  return (
    <>
      <bds-sidebar is-open={args.isOpen} sidebar-position={args.SidebarPosition}>
        <div slot="header">
          <bds-avatar name="Take Blip" size="large"></bds-avatar>
          <bds-typo bold="bold" variant="fs-20" line-height="double" margin="false">
            Take Blip
          </bds-typo>
        </div>
        <div slot="body">
          <bds-typo style={spacing}>{textContent}</bds-typo>
        </div>
        <div slot="footer">
          <bds-button variant="secondary"> Clear Filter </bds-button>
          <bds-button variant="primary"> Filter </bds-button>
        </div>
      </bds-sidebar>
    </>
  );
};

const TemplatePosition = () => {
  const openSidebar = async (id) => {
    const acc = document.getElementById(id);
    acc.isOpen = true;
  };
  return (
    <>
      <bds-button style={spacing} onClick={() => openSidebar('sb-right')}>
        Right Sidebar
      </bds-button>
      <bds-button style={spacing} onClick={() => openSidebar('sb-left')}>
        Left Sidebar
      </bds-button>
      <bds-sidebar id="sb-right" sidebar-position="right">
        <div slot="header">
          <bds-avatar name="Take Blip" size="large"></bds-avatar>
          <bds-typo bold="bold" variant="fs-20" line-height="double" margin="false">
            Take Blip
          </bds-typo>
        </div>
        <div slot="body">
          <bds-typo style={spacing}>{textContent}</bds-typo>
        </div>
        <div slot="footer">
          <bds-button variant="secondary"> Clear Filter </bds-button>
          <bds-button variant="primary"> Filter </bds-button>
        </div>
      </bds-sidebar>
      <bds-sidebar id="sb-left" sidebar-position="left">
        <div slot="header">
          <bds-avatar name="Take Blip" size="large"></bds-avatar>
          <bds-typo bold="bold" variant="fs-20" line-height="double" margin="false">
            Take Blip
          </bds-typo>
        </div>
        <div slot="body">
          <bds-typo style={spacing}>{textContent}</bds-typo>
        </div>
        <div slot="footer">
          <bds-button variant="secondary"> Clear Filter </bds-button>
          <bds-button variant="primary"> Filter </bds-button>
        </div>
      </bds-sidebar>
    </>
  );
};

export const Sidebar = Template.bind({});
Sidebar.args = {
  isOpen: true,
  sidebarPosition: 'left',
};

export const SidebarPosition = TemplatePosition.bind({});
