import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Icon',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const solidIconsName = [
  "add",
  "arrow-ball-down",
  "arrow-ball-left",
  "arrow-ball-right",
  "arrow-ball-up",
  "arrow-down",
  "arrow-filter-table-default",
  "arrow-filter-table-down",
  "arrow-filter-table-up",
  "arrow-left",
  "arrow-response",
  "arrow-right",
  "arrow-up",
  "attention",
  "audio",
  "blip-forum",
  "blip-ideas",
  "blip-tutorials",
  "builder-http",
  "builder-java-script",
  "builder-publish-bot",
  "builder-redirect",
  "builder-tracking",
  "builder-variable",
  "business",
  "checkball",
  "data-security",
  "edit",
  "email",
  "error",
  "favorite",
  "folder",
  "folder-save",
  "heart",
  "info",
  "operator",
  "organize-blocks",
  "organize-list",
  "save",
  "send",
  "sms",
  "tag",
  "team",
  "user",
  "user-default",
  "user-engaged",
  "video",
  "voip",
];

const outlineIconsName = [
  "ab",
  "add",
  "add-persistent-menu",
  "arrow-ball-down",
  "arrow-ball-left",
  "arrow-ball-right",
  "arrow-ball-screen-fill",
  "arrow-ball-screen-full",
  "arrow-ball-up",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "attach",
  "attention",
  "audio",
  "avatar-deafult",
  "avatar-user",
  "back",
  "bell",
  "builder-carrousel",
  "builder-menu",
  "builder-new-state",
  "builder-publish-bot",
  "builder-quick-reply",
  "builder-router",
  "builder-test-bot",
  "builder-text-message",
  "business",
  "button",
  "calendar",
  "camera",
  "chart-bar",
  "chart-column",
  "chart-line",
  "chart-pizza",
  "checkball",
  "clock",
  "close",
  "company",
  "contact",
  "cookie",
  "copy",
  "custom-channel",
  "date-time",
  "debug",
  "deslike",
  "download",
  "edit",
  "email",
  "emoji",
  "error",
  "external-file",
  "eye-closed",
  "eye-open",
  "false",
  "faq",
  "favorite",
  "file-csv",
  "file-doc",
  "file-empty-file",
  "file-image",
  "file-java-script",
  "file-json",
  "file-new",
  "file-pdf",
  "file-ppt",
  "file-txt",
  "filter",
  "folder",
  "forum-flag",
  "forum-settings",
  "heart",
  "home",
  "ia",
  "info",
  "integration",
  "library",
  "like",
  "link",
  "list",
  "loading",
  "localization",
  "lock",
  "logout",
  "menu-dot",
  "menu-hamburger",
  "message-active",
  "message-ballon",
  "message-received",
  "message-sent",
  "message-talk",
  "message-total",
  "more-options-horizontal",
  "more-options-vertical",
  "move",
  "notes",
  "order-elements",
  "paint",
  "plus",
  "question",
  "redo-arrow",
  "refresh",
  "restore",
  "robot",
  "save-disk",
  "save-flag",
  "search",
  "send",
  "settings",
  "skills",
  "smile",
  "sms",
  "speaker",
  "sso",
  "status",
  "tag",
  "team",
  "text-style-bold",
  "text-style-italic",
  "text-style-strikethrough",
  "text-style-underline",
  "transfer",
  "trash",
  "true",
  "undo-arrow",
  "unlock",
  "upload",
  "user",
  "user-active",
  "user-defaut",
  "user-engaged",
  "video",
  "voip",
  "warning",
  "xml",
];

const iconStyles = {
  width: "80px",
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "1px",
}

const iconWrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
}

export const outlineIcons = () => {
  const story = [];

  outlineIconsName.forEach(name => {
    story.push(
      <div style={iconStyles}>
        <bds-icon theme="outline" size="xxx-large" name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return (<div style={iconWrapperStyles}>{story}</div>);
}

export const solidIcons = () => {
  const story = [];

  solidIconsName.forEach(name => {
    story.push(
      <div style={iconStyles}>
        <bds-icon theme="solid" size="xxx-large" name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>);
  });

  return (<div style={iconWrapperStyles}>{story}</div>);
}

export const iconDefault = () => (<bds-icon name={text('name', 'user')}></bds-icon>);

export const iconTheme = () => (<bds-icon name={text('name', 'user')} theme={text('theme', 'solid')}></bds-icon>);

export const iconSizes = () => (
  <>
    <bds-icon name={text('name', 'user')} size="xxx-large"></bds-icon>
    <bds-icon name={text('name', 'user')} size="xx-large"></bds-icon>
    <bds-icon name={text('name', 'user')} size="x-large"></bds-icon>
    <bds-icon name={text('name', 'user')} size="large"></bds-icon>
    <bds-icon name={text('name', 'user')} size="medium"></bds-icon>
    <bds-icon name={text('name', 'user')} size="small"></bds-icon>
    <bds-icon name={text('name', 'user')} size="x-small"></bds-icon>
    <bds-icon name={text('name', 'user')} size="xx-small"></bds-icon>
  </>
);

export const iconColors = () => (
  <>
    <bds-icon name={text('name', 'user')} size="xxx-large" color={text('color1', '#2CC3D5')}></bds-icon>
    <bds-icon name={text('name', 'user')} size="xxx-large" color={text('color2', '#87DDE8')}></bds-icon>
    <bds-icon name={text('name', 'user')} size="xxx-large" color={text('color3', '#2498A8')}></bds-icon>
    <bds-icon name={text('name', 'user')} size="xxx-large" theme="solid" color={text('color1', '#2CC3D5')}></bds-icon>
    <bds-icon name={text('name', 'user')} size="xxx-large" theme="solid" color={text('color2', '#87DDE8')}></bds-icon>
    <bds-icon name={text('name', 'user')} size="xxx-large" theme="solid" color={text('color3', '#2498A8')}></bds-icon>
  </>
);
