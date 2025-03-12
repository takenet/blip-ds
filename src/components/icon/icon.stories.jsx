import React, { useEffect, useState } from 'react';
import DocumentationTemplate from './icon.mdx';
import { BdsIcon } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Icon',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const solidIconsName = [
  'checkbox',
  'toggle',
  'radiobutton',
  'bottom-sheet',
  'text-variable',
  'user-favorite',
  'audio-closed',
  'phone-keyboard',
  'video-calling',
  'video-closed',
  'video-ended',
  'voip-call',
  'voip-calling',
  'voip-ended',
  'voip-finish',
  'voip-new',
  'voip-receiving',
  'ai',
  'add',
  'agent-rule',
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
  'automation',
  'bag',
  'barcode',
  'bill',
  'blip-chat',
  'blip-forum',
  'builder-http',
  'builder-java-script',
  'builder-redirect',
  'builder-tracking',
  'builder-variable',
  'catalog',
  'cart-shop',
  'checkball',
  'contact',
  'command',
  'dolar',
  'email',
  'emoji',
  'emoji-negative',
  'emoji-neutral',
  'error',
  'euro',
  'faq',
  'favorite',
  'filter-table',
  'folder-save',
  'folder',
  'gift',
  'heart',
  'http',
  'info',
  'javascript',
  'level-up',
  'mark',
  'message-ballon',
  'message-unread',
  'organize-blocks',
  'organize-list',
  'pause',
  'piggy-bank',
  'pin',
  'pix',
  'play',
  'qrcode',
  'question',
  'real',
  'redirect',
  'robot',
  'robot-2',
  'robot-3',
  'robot-4',
  'robot-5',
  'sale',
  'save',
  'send',
  'sms',
  'sparkle-ai',
  'store',
  'openfinance',
  'target',
  'ticket',
  'tracking',
  'unpin',
  'variable',
  'verified',
  'video',
  'voip',
  'whatsapp',
  'wallet',
  'warning',
];

const outlineIconsName = [
  'message-error',
  'message-read',
  'checkbox',
  'toggle',
  'radiobutton',
  'bottom-sheet',
  'text-variable',
  'user-favorite',
  'audio-closed',
  'phone-keyboard',
  'video-calling',
  'video-closed',
  'video-ended',
  'voip-call',
  'voip-calling',
  'voip-ended',
  'voip-finish',
  'voip-new',
  'voip-receiving',
  '123',
  'ab',
  'add-persistent-menu',
  'add',
  'agent',
  'ai',
  'air-balloon',
  'airplane',
  'align-center',
  'align-left',
  'align-right',
  'arrow-ball-down',
  'arrow-ball-left',
  'arrow-ball-right',
  'arrow-ball-up',
  'arrow-down',
  'arrow-first',
  'arrow-last',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'attach',
  'attention',
  'audio',
  'automation',
  'avatar-user',
  'backspace',
  'bag',
  'barcode',
  'bell',
  'bill',
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
  'cart-shop',
  'catalog',
  'channels',
  'chart-bar',
  'chart-column',
  'chart-line',
  'chart-pizza',
  'check',
  'checkball',
  'chip',
  'clock',
  'close',
  'cloud-2',
  'cloud',
  'code',
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
  'dolar',
  'double-check',
  'download',
  'dynamic-content',
  'edit',
  'email',
  'emoji',
  'emoji-negative',
  'emoji-neutral',
  'error',
  'euro',
  'external-file',
  'eye-closed',
  'eye-open',
  'exit',
  'false',
  'facebook',
  'faq',
  'favorite',
  'file-csv',
  'file-doc',
  'file-empty-file',
  'file-gif',
  'file-image-broken',
  'file-image',
  'file-image-expired',
  'file-video-expired',
  'file-java-script',
  'file-json',
  'file-name-csv',
  'file-name-doc',
  'file-name-pdf',
  'file-name-ppt',
  'file-name-txt',
  'file-name-xls',
  'file-name-zip',
  'file-new',
  'file-pdf',
  'file-ppt',
  'file-txt-1',
  'file-txt',
  'filter',
  'folder',
  'guide',
  'gift',
  'h-1',
  'h-2',
  'h-3',
  'h-4',
  'h-5',
  'h-6',
  'heart',
  'home',
  'info',
  'instagram',
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
  'localization-ask',
  'localization-send',
  'lock',
  'logout',
  'mail',
  'mark',
  'megaphone',
  'menu-dot',
  'menu-hamburger',
  'message-active',
  'message-ballon',
  'message-received',
  'message-sent',
  'message-talk',
  'message-total',
  'message-unread',
  'messenger',
  'monitoring',
  'more-options-horizontal',
  'more-options-vertical',
  'mouse',
  'move',
  'notebook',
  'notes',
  'order-elements',
  'ordered-list',
  'ordering-aleatory',
  'ordering-ascending',
  'ordering-descending',
  'openfinance',
  'paste',
  'paint',
  'paperplane',
  'pause',
  'payment-card',
  'payment-card-cvc',
  'piggy-bank',
  'pin',
  'pix',
  'play',
  'plugin',
  'plus',
  'primeiro-acesso',
  'priorization',
  'qrcode',
  'question',
  'quote',
  'redo',
  'refresh',
  'refresh-all',
  'reply',
  'resources',
  'restore',
  'real',
  'robot',
  'robot-2',
  'robot-3',
  'robot-4',
  'robot-5',
  'sale',
  'save-disk',
  'save-flag',
  'scissor',
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
  'sparkle-ai',
  'speaker',
  'sso',
  'status',
  'store',
  'tag',
  'target',
  'team',
  'text-style-bold',
  'text-style-italic',
  'text-style-strikethrough',
  'text-style-underline',
  'ticket',
  'time-passed',
  'transfer',
  'trash',
  'trophy',
  'true',
  'typing',
  'undo',
  'unlock',
  'unordered-list',
  'unpin',
  'unstyled',
  'upload',
  'user-active',
  'user-default',
  'user-engaged',
  'verified',
  'video-broken',
  'video',
  'voip',
  'whatsapp',
  'wallet',
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
  'adlingo',
  'alexa',
  'apple',
  'blip-chat',
  'bot-analytics',
  'business-chat',
  'buscape',
  'chatbase',
  'dashbot',
  'dialogflow',
  'email',
  'facebook',
  'foursquare',
  'gbm',
  'github',
  'google-assistant',
  'google-rcs',
  'google',
  'google-plus',
  'hangouts',
  'hubspot',
  'infopib',
  'instagram',
  'instagram-2',
  'instagram-reels',
  'instagram-storys',
  'mailgun',
  'mercado-livre',
  'messenger',
  'meta',
  'microsoft-luis',
  'microsoft-teams',
  'pag-seguro',
  'pipedrive',
  'pix',
  'open-finance',
  'rd',
  'reclame-aqui',
  'salesforce',
  'skype',
  'slack',
  'sms',
  'stripe',
  'sugar',
  'telegram',
  'twitter',
  'vine',
  'voip',
  'we-chat',
  'webhook',
  'whatsapp',
  'whatsapp-2',
  'workplace',
  'wikipedia',
  'youtube',
  'linkedin',
  'tiktok',
  'tumblr',
  'google-play',
  'google-meu-negocio',
  'cielo',
  'zapier',
];

const iconStyles = {
  width: '70px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '1px',
};

const iconWrapperStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
};

export const Properties = (args) => {
  return <bds-icon theme="outline" size={args.size} name={args.name}></bds-icon>;
};

Properties.args = {
  size: 'medium',
  name: 'info',
};

Properties.argTypes = {
  size: {
    table: {
      defaultValue: { summary: 'medium' },
    },
    description: 'Defina qual a interação para abrir o componente.',
    options: [
      'brand',
      'xxx-large',
      'xx-large',
      'x-large',
      'large',
      'medium',
      'small',
      'x-small',
      'xx-small',
      'xxx-small',
    ],
    control: 'select',
  },
  name: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
};

export const FrameworkReact = () => {
  return <BdsIcon theme="outline" size="brand" name="info"></BdsIcon>;
};

export const AllOutlineIcons = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIcons, setFilteredIcons] = useState([]);
  const story = [];

  useEffect(() => {
    const iconOutline = document.getElementById('icon-outline');
    iconOutline.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = outlineIconsName.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIcons(filtered);
  }, [searchValue]);

  filteredIcons.forEach((name) => {
    story.push(
      <div key={name} style={iconStyles}>
        <bds-icon theme="outline" size="xxx-large" name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="icon-outline" placeholder="search icon"></bds-input>
      </bds-grid>

      <div style={iconWrapperStyles}>{story}</div>
    </bds-grid>
  );
};

export const AllSolidIcons = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIcons, setFilteredIcons] = useState([]);
  const story = [];

  useEffect(() => {
    const iconOutline = document.getElementById('icon-solid');
    iconOutline.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = solidIconsName.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIcons(filtered);
  }, [searchValue]);

  filteredIcons.forEach((name) => {
    story.push(
      <div key={name} style={iconStyles}>
        <bds-icon theme="solid" size="xxx-large" name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="icon-solid" placeholder="search icon"></bds-input>
      </bds-grid>

      <div style={iconWrapperStyles}>{story}</div>
    </bds-grid>
  );
};

export const AllEmojis = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIcons, setFilteredIcons] = useState([]);
  const story = [];

  useEffect(() => {
    const emoji = document.getElementById('emoji');
    emoji.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = emojiNames.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIcons(filtered);
  }, [searchValue]);

  filteredIcons.forEach((name) => {
    story.push(
      <bds-grid height="80px" gap="1" key={name} style={iconStyles}>
        <bds-icon type="emoji" size="xxx-large" name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </bds-grid>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="emoji" placeholder="search icon"></bds-input>
      </bds-grid>

      <div style={iconWrapperStyles}>{story}</div>
    </bds-grid>
  );
};

export const AllLogos = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIcons, setFilteredIcons] = useState([]);
  const story = [];

  useEffect(() => {
    const logos = document.getElementById('logos');
    logos.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = logoNames.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIcons(filtered);
  }, [searchValue]);

  filteredIcons.forEach((name) => {
    story.push(
      <bds-grid height="80px" gap="1" key={name} style={iconStyles}>
        <bds-icon type="logo" size="xxx-large" name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </bds-grid>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="logos" placeholder="search icon"></bds-input>
      </bds-grid>

      <div style={iconWrapperStyles}>{story}</div>
    </bds-grid>
  );
};
