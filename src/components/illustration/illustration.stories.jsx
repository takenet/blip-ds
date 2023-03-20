import React from 'react';

import readme from './readme.md';

export default {
  title: 'illustration',
  parameters: {
    notes: { markdown: readme },
  },
};

const defaults = [
  'agent-1',
  'agent-2',
  'agent-flat-1',
  'agent-flat-2',
  'agent-flat-3',
  'agent-flat-4',
  'blip-chat-health',
  'blip-chat-logistic',
  'blip-chat-marketing',
  'blip-chat-sales',
  'blip-ideas-blue-bg',
  'blip-ideas',
  'blip-sales',
  'boy-computer',
  'chat-bank',
  'chat-sales',
  'delivery-chat',
  'exchange-person',
  'faq',
  'girl-email',
  'girl-tablet',
  'loading-error',
  'management',
  'message-template-1',
  'message-template-2',
  'newsletter',
  'organizations',
  'rh-hunting',
  'ringtones',
  'robot-flat',
  'robot',
  'robots',
  'search',
  'segmentos',
  'solicition',
  'solutions-agent',
  'suprise',
  'talking',
  'tangram',
  'team-work',
  'user-1',
  'user-2',
  'user-3',
  'user-4',
  'user-plataform',
  'webhook',
  'welcome-blip',
  'whatsapp-web',
  'whatsapp',
];

const screens = [
  'dashboard',
  'screen-home',
  'screen-control-panel',
  'screen-builder',
  'screen-desk',
  'screen-users',
  'screen-report',
  'screen-blipchat',
  'screen-whatsapp',
  'screen-home-off',
  'screen-control-panel-off',
  'screen-builder-off',
  'screen-desk-off',
  'screen-users-off',
  'screen-report-off',
  'screen-blipchat-off',
  'screen-whatsapp-off',
];

const blipSolid = [
  'agent',
  'baby',
  'bored',
  'bunny',
  'cry',
  'curious',
  'developer',
  'embaresed',
  'fortune-teller',
  'friendly',
  'happy',
  'laughing',
  'lol',
  'lovely',
  'naughty',
  'party',
  'playful-1',
  'playful-2',
  'playful-3',
  'poker-face',
  'rised-eyebrow',
  'sad',
  'satisfact',
  'serene',
  'sherlock',
  'shy',
  'sleepy',
  'smart',
  'smiley',
  'thug-life',
  'wink',
  'worker',
  'wow',
];

const blipOutline = [
  'agent',
  'bored',
  'cry',
  'curious',
  'embaresed',
  'friendly',
  'happy',
  'laughing',
  'lol',
  'lovely',
  'naughty',
  'party',
  'playful-1',
  'playful-2',
  'playful-3',
  'poker-face',
  'rised-eyebrow',
  'sad',
  'satisfact',
  'search',
  'sherlock',
  'shy',
  'sleepy',
  'smart',
  'smiley',
  'thug-life',
  'wink',
  'worker',
  'wow',
];

const brand = [
  'take-blip-black-horizontal',
  'take-blip-black-vertical',
  'take-blip-blue-black-horizontal',
  'take-blip-blue-black-vertical',
  'take-blip-blue-white-horizontal',
  'take-blip-blue-white-vertical',
  'take-blip-white-horizontal',
  'take-blip-white-vertical',
  'blip-ballon-blue',
  'blip-ballon-blue-black-horizontal',
  'blip-ballon-blue-black-vertical',
  'blip-ballon-white',
  'blip-ballon-blue-white-horizontal',
  'blip-ballon-blue-white-vertical',
  'blip-ballon-white-horizontal',
  'blip-ballon-white-vertical',
  'blip-desk-black-horizontal',
  'blip-desk-blue-black-horizontal',
  'blip-desk-white-horizontal',
  'blip-desk-blue-white-horizontal',
  'blip-community-black-horizontal',
  'blip-community-blue-black-horizontal',
  'blip-community-white-horizontal',
  'blip-community-blue-white-horizontal',
  'blip-ideas-black-horizontal',
  'blip-ideas-blue-black-horizontal',
  'blip-ideas-white-horizontal',
  'blip-ideas-blue-white-horizontal',
  'blip-chat-black-horizontal',
  'blip-chat-blue-black-horizontal',
  'blip-chat-white-horizontal',
  'blip-chat-blue-white-horizontal',
  'blip-support-black-horizontal',
  'blip-support-blue-black-horizontal',
  'blip-support-white-horizontal',
  'blip-support-blue-white-horizontal',
  'blip-help-center-black-horizontal',
  'blip-help-center-blue-black-horizontal',
  'blip-help-center-white-horizontal',
  'blip-help-center-blue-white-horizontal',
];

const logoIntegration = ['blip-instagram', 'blip-messenger', 'blip-whatsapp'];

const spots = [
  'air-ballon',
  'analytics-satisfaction',
  'avatar',
  'binoculars',
  'bot-list',
  'clock-1',
  'clock-2',
  'column-chart',
  'connectivity',
  'empty',
  'folder-1',
  'folder-2',
  'folder-3',
  'folder-4',
  'folder-5',
  'folder-6',
  'folder-7',
  'glad',
  'hand-1',
  'hand-2',
  'hand-3',
  'hand-4',
  'hand-5',
  'hand-6',
  'idea',
  'information-security',
  'letter-cancel-error',
  'letter-check-okay',
  'letter-close',
  'letter-empty',
  'letter-error-empty',
  'letter-invite-blip',
  'letter-search-avatars',
  'letter-search-question',
  'lock-1',
  'lock-2',
  'map',
  'message-notification',
  'new-feature',
  'paper-plane',
  'password',
  'pie-chart',
  'pizza',
  'rocket',
  'send-ticket',
  'speak-bubble',
  'ticket',
];

const illustrationStyles = {
  width: '200px',
  height: '150px',
  margin: '24px',
  textAlign: 'center',
};

const illustrationWrapperStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

export const IllustrationsDefault = () => {
  const defaultArray = [];

  defaults.forEach((name) => {
    defaultArray.push(
      <div style={illustrationStyles}>
        <bds-illustration type="default" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;
};

export const IllustrationsScreens = () => {
  const defaultArray = [];

  screens.forEach((name) => {
    defaultArray.push(
      <div style={illustrationStyles}>
        <bds-illustration type="screens" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;
};

export const IllustrationsBlipSolid = () => {
  const defaultArray = [];

  blipSolid.forEach((name) => {
    defaultArray.push(
      <div style={illustrationStyles}>
        <bds-illustration type="blip-solid" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;
};

export const IllustrationsBlipOutline = () => {
  const defaultArray = [];

  blipOutline.forEach((name) => {
    defaultArray.push(
      <div style={illustrationStyles}>
        <bds-illustration type="blip-outline" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;
};

export const IllustrationsBrand = () => {
  const defaultArray = [];

  brand.forEach((name) => {
    defaultArray.push(
      <div style={illustrationStyles}>
        <bds-illustration type="brand" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;
};

export const IllustrationsLogoIntegration = () => {
  const defaultArray = [];

  logoIntegration.forEach((name) => {
    defaultArray.push(
      <div style={illustrationStyles}>
        <bds-illustration type="logo-integration" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;
};

export const IllustrationsSpots = () => {
  const defaultArray = [];

  spots.forEach((name) => {
    defaultArray.push(
      <div style={illustrationStyles}>
        <bds-illustration type="spots" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;
};
