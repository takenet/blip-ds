import React, { useEffect, useState } from 'react';
import DocumentationTemplate from './icon.mdx';
import { BdsIcon } from '../../../blip-ds-react/dist/components';
import { OutlineIcons, SolidIcons } from 'blip-tokens/icons';

export default {
  title: 'Components/Icon',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const solidIconsName = SolidIcons;

const outlineIconsName = OutlineIcons;

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
  // Filter out undefined, null, and empty string values to prevent them from being passed as props,
  // which avoids rendering unwanted or invalid attributes on the component.
  const iconProps = Object.fromEntries(Object.entries(args).filter(([, value]) => value !== undefined && value !== null && value !== ''));
  return <bds-icon {...iconProps}></bds-icon>;
};

Properties.args = {
  size: 'medium',
  name: 'info',
  theme: 'outline',
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
  theme: {
    table: {
      defaultValue: { summary: 'outline' },
    },
    options: ['outline', 'solid'],
    control: 'select',
  },
  name: {
    table: {
      defaultValue: { summary: 'info' },
    },
    control: 'text',
  },
  type: {
    table: {
      defaultValue: { summary: 'icon' },
    },
    description: 'Define o tipo do ícone como emoji ou logo. (opcional)',
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
