import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Icon',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const solidIconsName = [
  'add',
  'arrow-ball-down',
  'arrow-ball-left',
  'arrow-ball-right',
  'arrow-ball-up',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'attention',
  'audio',
  'blip-forum',
  'builder-http',
  'builder-java-script',
  'builder-redirect',
  'builder-tracking',
  'builder-variable',
  'checkball',
  'email',
  'error',
  'favorite',
  'filter-table',
  'folder-save',
  'folder',
  'info',
  'level-up',
  'organize-blocks',
  'organize-list',
  'question',
  'save',
  'send',
  'sms',
  'video',
  'voip',
  'warning',
];

const outlineIconsName = [
  'ab',
  'add-persistent-menu',
  'add',
  'agent',
  'ai',
  'air-balloon',
  'airplane',
  'arrow-ball-down',
  'arrow-ball-left',
  'arrow-ball-right',
  'arrow-ball-up',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'attach',
  'attention',
  'audio',
  'avatar-user',
  'barcode',
  'bell',
  'blip-ideas',
  'blip-tutorials',
  'book',
  'bug-report',
  'builder-carrousel',
  'builder-menu',
  'builder-new-state',
  'builder-publish-bot',
  'builder-quick-reply',
  'builder-router',
  'builder-test-bot',
  'builder-text-message',
  'business',
  'button',
  'calendar',
  'camera',
  'channels',
  'chart-bar',
  'chart-column',
  'chart-line',
  'chart-pizza',
  'checkball',
  'clock',
  'close',
  'cloud-2',
  'cloud',
  'company',
  'conections',
  'contact',
  'cookie',
  'copy',
  'custom-channel',
  'data-security',
  'date-time',
  'debug',
  'delete',
  'deslike',
  'download',
  'edit',
  'email',
  'emoji',
  'error',
  'external-file',
  'eye-closed',
  'eye-open',
  'false',
  'faq',
  'favorite',
  'file-csv',
  'file-doc',
  'file-empty-file',
  'file-gif',
  'file-image-broken',
  'file-image',
  'file-java-script',
  'file-json',
  'file-new',
  'file-pdf',
  'file-ppt',
  'file-txt-1',
  'file-txt',
  'filter',
  'folder',
  'guide',
  'home',
  'info',
  'integration',
  'integrations-channels',
  'keyboard',
  'less',
  'library',
  'like',
  'link',
  'list',
  'loading',
  'localization',
  'lock',
  'logout',
  'mail',
  'megaphone',
  'menu-dot',
  'menu-hamburger',
  'message-active',
  'message-ballon',
  'message-received',
  'message-sent',
  'message-talk',
  'message-total',
  'messenger',
  'monitoring',
  'more-options-horizontal',
  'more-options-vertical',
  'mouse',
  'move',
  'notebook',
  'notes',
  'order-elements',
  'paint',
  'paperplane',
  'payment-card',
  'pix',
  'plugin',
  'plus',
  'primeiro-acesso',
  'question',
  'redo',
  'refresh',
  'resources',
  'restore',
  'robot',
  'save-disk',
  'save-flag',
  'screen-fill',
  'screen-full',
  'search',
  'send',
  'service-queue',
  'settings-adjusments',
  'settings-builder',
  'settings-general',
  'share',
  'site',
  'skills',
  'smartphone',
  'sms',
  'speaker',
  'sso',
  'status',
  'tag',
  'target',
  'team',
  'text-style-bold',
  'text-style-italic',
  'text-style-strikethrough',
  'text-style-underline',
  'ticket',
  'transfer',
  'trash',
  'trophy',
  'true',
  'undo',
  'unlock',
  'upload',
  'user-active',
  'user-default',
  'user-engaged',
  'video-broken',
  'video',
  'voip',
  'warning',
  'xml',
];

const emojiNames = [
  'beaming-face',
  'confounded-face',
  'crying-face',
  'dizzy-face',
  'expressionless-face',
  'face-blowing-a-kiss',
  'face-with-mask',
  'face-with-open-mouth',
  'face-with-tears-of-joy',
  'face-with-tongue',
  'face-without-mouth',
  'fearful-face',
  'grinning-face',
  'grinning-face-with-big-eyes',
  'grinning-face-with-smilling-eyes',
  'grinning-face-with-sweat',
  'hushed-face',
  'kissing-face-with-smilling-eyes',
  'loudly-cring-face',
  'nerd-face',
  'neutral-face',
  'perservering-face',
  'pouting-face',
  'relieved-face',
  'sleeping-face',
  'slightly-frowning-face',
  'slightly-smiling-face',
  'smiling-face',
  'smiling-face-with-halo',
  'smiling-face-with-heart-eyes',
  'smiling-face-with-smiling-eyes',
  'smiling-face-with-sunglasses',
  'smirking-face',
  'squirting-face-with-tongue',
  'winking-face',
  'winking-face-with-tongue',
];

const logoNames = [
  'gbm',
];

const iconStyles = {
  width: '80px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '1px',
};

const emojiStyles = {
  width: '120px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '1px',
  textAlign: 'center',
};

const logoStyles = {
  width: '120px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '1px',
  textAlign: 'center',
};

const iconWrapperStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

export const outlineIcons = () => {
  const story = [];

  outlineIconsName.forEach((name) => {
    story.push(
      <div style={iconStyles}>
        <bds-icon theme="outline" size="xxx-large" name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={iconWrapperStyles}>{story}</div>;
};

export const solidIcons = () => {
  const story = [];

  solidIconsName.forEach((name) => {
    story.push(
      <div style={iconStyles}>
        <bds-icon theme="solid" size="xxx-large" name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={iconWrapperStyles}>{story}</div>;
};

export const emojis = () => {
  const story = [];

  emojiNames.forEach((name) => {
    story.push(
      <div style={emojiStyles}>
        <bds-icon type="emoji" size={text('size', 'x-large')} name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={iconWrapperStyles}>{story}</div>;
};

export const logos = () => {
  const story = [];

  logoNames.forEach((name) => {
    story.push(
      <div style={logoStyles}>
        <bds-icon type="logo" name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={iconWrapperStyles}>{story}</div>;
};

export const iconDefault = () => <bds-icon name={text('name', 'user')}></bds-icon>;

export const iconTheme = () => <bds-icon name={text('name', 'user')} theme={text('theme', 'solid')}></bds-icon>;

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
