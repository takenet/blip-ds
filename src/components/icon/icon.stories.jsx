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
  'payment-card-cvc',
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
  'google',
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

const zeroHeightStyles = {
  width: '120px',
  height: '64px',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
  flexDirection: 'row',
}

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

const zeroHeightIconStyles ={
  padding: '5px',
}

const iconWrapperStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

export const allOutlineIcons = () => {
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

export const allSolidIcons = () => {
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

export const allEmojis = () => {
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

export const allLogos = () => {
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

export const iconColors = () => (
  <>
    <bds-icon style={zeroHeightIconStyles} name={text('name', 'info')} size="xxx-large" color={text('color1', '#2CC3D5')}></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name={text('name', 'info')} size="xxx-large" color={text('color2', '#87DDE8')}></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name={text('name', 'info')} size="xxx-large" color={text('color3', '#2498A8')}></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name={text('name', 'info')} size="xxx-large" theme="solid" color={text('color1', '#2CC3D5')}></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name={text('name', 'info')} size="xxx-large" theme="solid" color={text('color2', '#87DDE8')}></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name={text('name', 'info')} size="xxx-large" theme="solid" color={text('color3', '#2498A8')}></bds-icon>
  </>
);

export const iconOutline = () => (
  <div style={zeroHeightStyles}>
    <bds-icon style={zeroHeightIconStyles} name="arrow-right" theme="outline" size="xxx-large" aria-label="seta para a direita" ></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="email" theme="outline" size="xxx-large" aria-label="Ícone de email"></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="info" theme="outline" size="xxx-large" aria-label="Ícone de informações"></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="home" theme="outline" size="xxx-large" aria-label="Voltar para página principal"></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="add" theme="outline" size="xxx-large" aria-label="Ícone de mais para adicionar elemento"></bds-icon>
  </div>
);

export const iconSolid = () => (
  <div style={zeroHeightStyles}>
    <bds-icon style={zeroHeightIconStyles} name="arrow-right" theme="solid" size="xxx-large" aria-label="seta para a direita" ></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="email" theme="solid" size="xxx-large" aria-label="Ícone de email"></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="info" theme="solid" size="xxx-large" aria-label="Ícone de informações"></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="warning" theme="solid" size="xxx-large" aria-label="Ícone de atenção"></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="add" theme="solid" size="xxx-large" aria-label="Ícone de mais para adicionar elemento"></bds-icon>
  </div>
);

export const iconSize = () => (
  <div style={zeroHeightStyles}>
    <bds-icon style={zeroHeightIconStyles} name="info" size="xxx-large"></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="info" size="xx-large"></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="info" size="x-large" ></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="info" size="large" ></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="info" size="medium"></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="info" size="small" ></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="info" size="x-small"></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="info" size="xx-small"></bds-icon>
    <bds-icon style={zeroHeightIconStyles} name="info" size="xxx-small"></bds-icon>
  </div>
);

export const iconEmoji = () => (
  <>
    <div style={zeroHeightStyles}>
      <bds-icon style={zeroHeightIconStyles} name="nerd-face" size="xxx-large" type="emoji" aria-label="emoji de nerd" ></bds-icon>
      <bds-icon style={zeroHeightIconStyles} name="smiling-face" size="xxx-large" type="emoji" aria-label="emoji sorrindo"></bds-icon>
      <bds-icon style={zeroHeightIconStyles} name="beaming-face" size="xxx-large" type="emoji" aria-label="emoji radiante"></bds-icon>
      <bds-icon style={zeroHeightIconStyles} name="neutral-face" size="xxx-large" type="emoji" aria-label="emoji neutro"></bds-icon>
      <bds-icon style={zeroHeightIconStyles} name="winking-face" size="xxx-large" type="emoji" aria-label="emoji piscando"></bds-icon>
    </div>
  </>

);

export const iconLogo = () => (
  <>
    <div style={zeroHeightStyles}>
      <bds-icon name="gbm" size="xxx-large" type="logo" aria-label="logo da gbm"></bds-icon>
    </div>
  </>

);
