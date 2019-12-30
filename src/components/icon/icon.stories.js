import { withKnobs, text } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Icon',
  decoratos: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const name = text("name", "user");
const themeSolid = text("theme", "solid");

const solidIcons = [
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
  "integration",
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

const outlineIcons = [
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
  "undo",
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

export const allIcons = () => {
  let story = '';

  solidIcons.forEach(name => {
    story += /*html*/`
     <bds-icon theme="solid" size="xxx-large" name="${name}" title="${name}"></bds-icon>
    `;
  });

  story += '<br />';

  outlineIcons.forEach(name => {
    story += /*html*/`
     <bds-icon theme="outline" size="xxx-large" name="${name}" title="${name}"></bds-icon>
    `;
  });

  return story;
}

export const iconDefault = () => `<bds-icon name="${name}"></bds-icon>`;

export const iconTheme = () => /*html*/`
  <bds-icon name="${name}" theme="${themeSolid}"></bds-icon>
`;

export const iconSizes = () => /*html*/`
  <bds-icon name="${name}" size="xxx-large"></bds-icon>
  <bds-icon name="${name}" size="xx-large"></bds-icon>
  <bds-icon name="${name}" size="x-large"></bds-icon>
  <bds-icon name="${name}" size="large"></bds-icon>
  <bds-icon name="${name}" size="medium"></bds-icon>
  <bds-icon name="${name}" size="small"></bds-icon>
  <bds-icon name="${name}" size="x-small"></bds-icon>
  <bds-icon name="${name}" size="xx-small"></bds-icon>
  <bds-icon name="${name}" size="xxx-small"></bds-icon>
`;

export const iconColors = () => /*html*/`
  <bds-icon name="${name}" size="xxx-large" color="${text("color1", "#2CC3D5")}"></bds-icon>
  <bds-icon name="${name}" size="xxx-large" color="${text("color2", "#87DDE8")}"></bds-icon>
  <bds-icon name="${name}" size="xxx-large" color="${text("color3", "#2498A8")}"></bds-icon>
  <bds-icon name="${name}" size="xxx-large" theme="solid" color="${text("color1", "#2CC3D5")}"></bds-icon>
  <bds-icon name="${name}" size="xxx-large" theme="solid" color="${text("color2", "#87DDE8")}"></bds-icon>
  <bds-icon name="${name}" size="xxx-large" theme="solid" color="${text("color3", "#2498A8")}"></bds-icon>
`;
