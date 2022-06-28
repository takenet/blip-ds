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
};

const Template = (args) => {
  return (
    <bds-sidebar
      is-open={args.isOpen}
      sidebar-position={args.sidebarPosition}
      header-title={args.headerTitle}
      header-icon={args.headerIcon}
      header-avatar-name={args.headerAvatarName}
      footer-button-apply={args.footerButtonApply}
      footer-button-cancel={args.footerButtonCancel}
    >
      <bds-input style={spacing} maxlength="30" counter-length icon="email" label="Name"></bds-input>
      <bds-input style={spacing} maxlength="30" counter-length icon="email" label="Name"></bds-input>
      <bds-input style={spacing} maxlength="30" counter-length icon="email" label="Name"></bds-input>
      <bds-input style={spacing} maxlength="30" counter-length icon="email" label="Name"></bds-input>
      <bds-input style={spacing} maxlength="30" counter-length icon="email" label="Name"></bds-input>
      <bds-input style={spacing} maxlength="30" counter-length icon="email" label="Name"></bds-input>
    </bds-sidebar>
  );
};

export const SidebarRight = Template.bind({});
SidebarRight.args = {
  isOpen: true,
  sidebarPosition: 'right',
  headerTitle: 'Title',
  footerButtonApply: 'Filter',
  footerButtonCancel: 'Clean Filter',
};

export const SidebarLeft = Template.bind({});
SidebarLeft.args = {
  isOpen: true,
  sidebarPosition: 'left',
  headerTitle: 'Title',
  footerButtonApply: 'Filter',
  footerButtonCancel: 'Clean Filter',
};

export const SidebarIconTitle = Template.bind({});
SidebarIconTitle.args = {
  isOpen: true,
  sidebarPosition: 'left',
  headerTitle: 'Title',
  headerIcon: 'filter',
  footerButtonApply: 'Filter',
  footerButtonCancel: 'Clean Filter',
};

export const SidebarAvatarTitle = Template.bind({});
SidebarAvatarTitle.args = {
  isOpen: true,
  sidebarPosition: 'left',
  headerTitle: 'Title',
  headerAvatarName: 'Take Blip',
  footerButtonApply: 'Filter',
  footerButtonCancel: 'Clean Filter',
};
