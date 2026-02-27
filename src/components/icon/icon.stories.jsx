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
  const iconProps = Object.fromEntries(
    Object.entries(args).filter(([, value]) => value !== undefined && value !== null && value !== ''),
  );
  return <bds-icon {...iconProps}></bds-icon>;
};

Properties.args = {
  size: 'medium',
  name: 'info',
  theme: 'outline',
  color: '',
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
  color: {
    table: {
      defaultValue: { summary: '' },
    },
    control: 'text',
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

export const SolidIconCustomization = () => {
  const [layer0Color, setLayer0Color] = useState('#333333');

  const folderPreviewStyle = {
    fontSize: '4rem',
    '--icon-layer-0': layer0Color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '120px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    padding: '1rem',
  };

  const colorInputStyle = {
    height: '60px',
    width: '100%',
    cursor: 'pointer',
  };

  const codeBlockStyle = {
    background: '#f5f5f5',
    padding: '8px',
    display: 'block',
    marginTop: '8px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '12px',
  };

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid direction="column" gap="2">
        <bds-typo variant="fs-16" weight="700">
          Solid Icon Customization with CSS Variables
        </bds-typo>
        <bds-typo variant="fs-14">
          Multi-color solid icons can be customized using CSS custom properties. Each layer is assigned a variable{' '}
          <code style={{ background: '#f5f5f5', padding: '2px 6px' }}> --icon-layer-N</code> where N is the layer index.
        </bds-typo>
      </bds-grid>

      <bds-divider></bds-divider>

      <bds-grid direction="column" gap="3">
        <bds-grid direction="column" gap="2">
          <bds-typo variant="fs-14" weight="700">
            Default Folder Icon
          </bds-typo>
          <div style={{ fontSize: '3rem' }}>
            <bds-icon name="folder-open" theme="solid" size="xxx-large"></bds-icon>
          </div>
        </bds-grid>

        <bds-grid direction="column" gap="2">
          <bds-typo variant="fs-14" weight="700">
            Customized Colors (Gold & Orange)
          </bds-typo>
          <div
            style={{
              fontSize: '3rem',
              '--icon-layer-0': '#FFD700',
            }}
          >
            <bds-icon name="folder-open" theme="solid" size="xxx-large"></bds-icon>
          </div>
          <bds-typo variant="fs-10" color="on-surface-variant">
            <code style={{ background: '#f5f5f5', padding: '4px 8px', borderRadius: '4px' }}>
              --icon-layer-0: #FFD700
            </code>
          </bds-typo>
        </bds-grid>
      </bds-grid>

      <bds-divider></bds-divider>

      <bds-grid direction="column" gap="2">
        <bds-typo variant="fs-14" weight="700">
          Color Variations
        </bds-typo>
        <bds-grid gap="2">
          <bds-grid direction="column" gap="2" sm="6" md="3">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  '--icon-layer-0': '#9370DB',
                }}
              >
                <bds-icon name="folder-open" theme="solid" size="xxx-large"></bds-icon>
              </div>
              <bds-typo variant="fs-10">Purple & Pink</bds-typo>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  '--icon-layer-0': '#228B22',
                }}
              >
                <bds-icon name="folder-open" theme="solid" size="xxx-large"></bds-icon>
              </div>
              <bds-typo variant="fs-10">Green & Lime</bds-typo>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  '--icon-layer-0': '#FF6B6B',
                }}
              >
                <bds-icon name="folder-open" theme="solid" size="xxx-large"></bds-icon>
              </div>
              <bds-typo variant="fs-10">Red & Light Red</bds-typo>
            </div>
          </bds-grid>
        </bds-grid>
      </bds-grid>

      <bds-divider></bds-divider>

      <bds-grid direction="column" gap="2">
        <bds-typo variant="fs-14" weight="700">
          Interactive Color Customization
        </bds-typo>
        <bds-typo variant="fs-12" color="on-surface-variant">
          Adjust the colors below to customize each layer of the icon in real-time.
        </bds-typo>
      </bds-grid>

      <bds-grid gap="3">
        <bds-grid direction="column" gap="2" sm="6">
          <bds-typo variant="fs-14" weight="700">
            Layer 0 (Back)
          </bds-typo>
          <input
            type="color"
            value={layer0Color}
            onChange={(e) => setLayer0Color(e.target.value)}
            style={colorInputStyle}
          />
          <bds-typo variant="fs-12">{layer0Color}</bds-typo>
        </bds-grid>
      </bds-grid>

      <bds-grid direction="column" gap="2">
        <bds-typo variant="fs-14" weight="700">
          Preview
        </bds-typo>
        <div style={folderPreviewStyle}>
          <bds-icon name="folder-open" theme="solid" size="xxx-large"></bds-icon>
        </div>
      </bds-grid>

      <bds-card>
        <bds-typo variant="fs-12" color="on-surface-variant">
          <strong>CSS Applied:</strong>
          <br />
          <code style={codeBlockStyle}>--icon-layer-0: {layer0Color};</code>
        </bds-typo>
      </bds-card>

      <bds-divider></bds-divider>

      <bds-grid direction="column" gap="2">
        <bds-typo variant="fs-16" weight="700">
          Backward Compatibility
        </bds-typo>
        <bds-typo variant="fs-14">
          This feature is 100% backward compatible. All existing icon usage patterns continue to work exactly as before.
        </bds-typo>
      </bds-grid>

      <bds-grid gap="3">
        <bds-grid direction="column" gap="2" sm="6" md="3">
          <bds-typo variant="fs-14" weight="700">
            Outline Icon with Color
          </bds-typo>
          <bds-typo variant="fs-12" color="on-surface-variant">
            Original behavior preserved
          </bds-typo>
          <bds-icon name="folder-open" theme="outline" size="xxx-large"></bds-icon>
        </bds-grid>

        <bds-grid direction="column" gap="2" sm="6" md="3">
          <bds-typo variant="fs-14" weight="700">
            Outline Icon Inherits Color
          </bds-typo>
          <bds-typo variant="fs-12" color="on-surface-variant">
            Uses currentColor
          </bds-typo>
          <bds-icon color="#FF6B6B" name="folder-open" theme="outline" size="xxx-large"></bds-icon>
        </bds-grid>

        <bds-grid direction="column" gap="2" sm="6" md="3">
          <bds-typo variant="fs-14" weight="700">
            Single-Color Solid
          </bds-typo>
          <bds-typo variant="fs-12" color="on-surface-variant">
            Uses currentColor
          </bds-typo>
          <bds-icon name="folder-open" theme="solid" size="xxx-large"></bds-icon>
        </bds-grid>

        <bds-grid direction="column" gap="2" sm="6" md="3">
          <bds-typo variant="fs-14" weight="700">
            Multi-Color Solid (NEW)
          </bds-typo>
          <bds-typo variant="fs-12" color="on-surface-variant">
            CSS variable customizable
          </bds-typo>
          <div
            style={{
              fontSize: '2rem',
              '--icon-layer-0': '#FFD700',
            }}
          >
            <bds-icon name="folder-open" theme="solid" size="xxx-large"></bds-icon>
          </div>
        </bds-grid>
      </bds-grid>
    </bds-grid>
  );
};

SolidIconCustomization.parameters = {
  docs: {
    description: {
      story:
        'Learn how to customize multi-color solid icons using CSS custom properties. This feature allows you to override individual layers of an icon while maintaining backward compatibility.',
    },
  },
};
