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

const logoIntegration = ['blip-instagram', 'blip-whatsapp'];

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
