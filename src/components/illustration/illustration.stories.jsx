import React, { useState, useEffect } from 'react';
import { BdsIllustration } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './illustration.mdx';

export default {
  title: 'Components/illustration',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const defaults = [
  'accessibility-1',
  'accessibility-2',
  'accessibility-3',
  'accessibility-4',
  'accessibility-5',
  'accessibility-6',
  'attendance-1',
  'attendance-2',
  'attendance-3',
  'attendance-4',
  'agent-1',
  'agent-2',
  'agent-flat-1',
  'agent-flat-2',
  'agent-flat-3',
  'agent-flat-4',
  'atention',
  'automation',
  'blip-chat',
  'blip-chat-health',
  'blip-chat-logistic',
  'blip-chat-marketing',
  'blip-chat-sales',
  'blip-ideas-blue-bg',
  'blip-ideas',
  'blip-sales',
  'blip-sales-1',
  'boy-computer',
  'chat-bank',
  'chat-sales',
  'cookie',
  'collaboration-1',
  'collaboration-2',
  'collaboration-3',
  'delivery-chat',
  'delete',
  'exchange-person',
  'ecossystem-1',
  'error',
  'faq',
  'girl-email',
  'girl-tablet',
  'loading-error',
  'management',
  'message-template-1',
  'message-template-2',
  'newsletter',
  'organizations',
  'plataform-1',
  'professional-1',
  'professional-2',
  'professional-3',
  'professional-4',
  'professional-5',
  'professional-6',
  'professional-7',
  'professional-8',
  'rating-1',
  'rh-hunting',
  'ringtones',
  'robot-flat',
  'robot',
  'robot-2',
  'robot-3',
  'robot-4',
  'robot-5',
  'robots',
  'search',
  'search-1',
  'search-2',
  'segmentos',
  'settings-1',
  'stilingue-1',
  'stilingue-2',
  'stilingue-3',
  'stilingue-4',
  'solicitation',
  'solutions-agent',
  'surprise',
  'talking',
  'tangram',
  'team-work',
  'time-1',
  'user-1',
  'user-2',
  'user-3',
  'user-4',
  'user-plataform',
  'warning',
  'webhook',
  'welcome-blip',
  'whatsapp-web',
  'whatsapp',
  'error',
  'search-2',
  'time-2',
  'time',
  'robot-6',
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
  'ai-blipinho',
  'bag',
  'bone',
  'cap',
  'coffee',
  'gift',
  'headphones',
  'heart',
  'hi',
  'message',
  'phone',
  'raised-eyebrow',
  'skate',
  'sport',
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
  'blip-academy-black',
  'blip-academy-blue-black',
  'blip-academy-blue-white',
  'blip-academy-white',
  'blip-assist-white-horizontal',
  'blip-assist-blue-white-horizontal',
  'blip-assist-black-horizontal',
  'blip-assist-blue-black-horizontal',
  'blip-blog-blue-black',
  'blip-blog-blue-white',
  'blip-builder-black',
  'blip-builder-blue-black',
  'blip-builder-blue-white',
  'blip-builder-white',
  'blip-docs-black',
  'blip-docs-blue-black',
  'blip-docs-blue-white',
  'blip-docs-white',
  'blip-ecosystem-black',
  'blip-ecosystem-blue-black',
  'blip-ecosystem-blue-white',
  'blip-ecosystem-white',
  'blip-foods-black',
  'blip-foods-blue-black',
  'blip-foods-blue-white',
  'blip-foods-white',
  'blip-go-black',
  'blip-go-blue-black',
  'blip-go-blue-white',
  'blip-go-white',
  'go-persona-horizontal-black',
  'go-persona-horizontal-white',
  'go-persona-horizontal-white-black',
  'go-persona-horizontal-white-blue',
  'go-persona-vertical-black',
  'go-persona-vertical-white',
  'go-persona-vertical-white-black',
  'go-persona-vertical-white-blue',
  'blip-news-black',
  'blip-news-blue-black',
  'blip-news-blue-white',
  'blip-news-white',
  'blip-packs-black',
  'blip-packs-blue-black',
  'blip-packs-blue-white',
  'blip-packs-white',
  'blip-packspace-black',
  'blip-packspace-blue-black',
  'blip-packspace-blue-white',
  'blip-packspace-white',
  'blip-partner-black',
  'blip-partner-blue-black',
  'blip-partner-blue-white',
  'blip-partner-white',
  'blip-payments-black',
  'blip-payments-blue-black',
  'blip-payments-blue-white',
  'blip-payments-white',
  'blip-purpose-black',
  'blip-purpose-blue-black',
  'blip-purpose-blue-white',
  'blip-purpose-white',
  'blip-shop-black',
  'blip-shop-blue-black',
  'blip-shop-blue-white',
  'blip-shop-white',
  'blip-status-black',
  'blip-status-blue-black',
  'blip-status-blue-white',
  'blip-status-white',
  'blip-store-black',
  'blip-store-blue-black',
  'blip-store-blue-white',
  'blip-store-white',
  'blip-think-black',
  'blip-think-blue-black',
  'blip-think-blue-white',
  'blip-think-white',
  'blip-time-black',
  'blip-time-blue-black',
  'blip-time-blue-white',
  'blip-time-white',
  'blip-tools-black',
  'blip-tools-blue-black',
  'blip-tools-blue-white',
  'blip-tools-white',
  'blip-trust-black',
  'blip-trust-blue-black',
  'blip-trust-blue-white',
  'blip-trust-white',
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
  'sti-blue-horizontal',
  'sti-blue-symbol',
  'sti-blue-vertical',
  'sti-white-horizontal',
  'sti-white-vertical',
  'sti-white-vertical-symbol',
];

const emptyStates = [
  'agent-1',
  'agent-2',
  'box',
  'clock',
  'column-chart',
  'glad',
  'letter-search-question',
  'robot',
  'robot-1',
  'broken-image',
  'image-not-found',
];

const logoIntegration = ['blip-instagram', 'blip-messenger', 'blip-whatsapp'];

const segmented = ['cart-selected', 'catalog-option', 'item-overview', 'send-catalog'];

const smartphone = ['blip-chat-1', 'blip-chat-2', 'blip-chat-3', 'digital-scanning-1', 'digital-scanning-2'];

const spots = [
  'star',
  'check',
  'air-ballon',
  'analytics-satisfaction',
  'avatar',
  'binoculars',
  'bot-list',
  'bill-1',
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
  'greeting-1',
  'greeting-2',
  'hand-1',
  'hand-2',
  'hand-3',
  'hand-4',
  'hand-5',
  'hand-6',
  'idea',
  'information-security',
  'letter-1',
  'letter-cancel-error',
  'letter-check-okay',
  'letter-close',
  'letter-empty',
  'letter-error-empty',
  'letter-invite-blip',
  'letter-search-attention',
  'letter-search-avatars',
  'letter-search-question',
  'lock-1',
  'lock-2',
  'map',
  'message-notification',
  'new-feature',
  'notification-1',
  'paper-plane',
  'password',
  'pie-chart',
  'pizza',
  'profile-1',
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

const illustrationProps = {
  width: '250px',
  margin: 'auto',
};

const illustrationWrapperStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

export const Properties = (args) => {
  return <bds-illustration style={illustrationProps} type={args.type} name={args.name}></bds-illustration>;
};

Properties.args = {
  type: 'default',
  name: 'agent-1',
};

Properties.argTypes = {
  type: {
    table: {
      defaultValue: { summary: 'default' },
    },
    options: [
      'default',
      'screens',
      'blip-solid',
      'blip-outline',
      'logo-integration',
      'brand',
      'empty-states',
      'segmented',
      'smartphone',
      'spots',
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
  return <BdsIllustration style={illustrationProps} type="default" name="agent-1"></BdsIllustration>;
};

export const IllustrationsDefault = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIllustation, setFilteredIllustration] = useState([]);
  const defaultArray = [];

  useEffect(() => {
    const illustrationDefault = document.getElementById('illustration-default');
    illustrationDefault.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = defaults.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIllustration(filtered);
  }, [searchValue]);

  filteredIllustation.forEach((name) => {
    defaultArray.push(
      <div key={name} style={illustrationStyles}>
        <bds-illustration type="default" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="illustration-default" placeholder="search illustration"></bds-input>
      </bds-grid>
      <div style={illustrationWrapperStyles}>{defaultArray}</div>
    </bds-grid>
  );
};

export const IllustrationsScreens = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIllustation, setFilteredIllustration] = useState([]);
  const defaultArray = [];

  useEffect(() => {
    const illustrationScreens = document.getElementById('illustration-screens');
    illustrationScreens.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = screens.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIllustration(filtered);
  }, [searchValue]);

  filteredIllustation.forEach((name) => {
    defaultArray.push(
      <div key={name} style={illustrationStyles}>
        <bds-illustration type="screens" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="illustration-screens" placeholder="search illustration"></bds-input>
      </bds-grid>
      <div style={illustrationWrapperStyles}>{defaultArray}</div>
    </bds-grid>
  );
};

export const IllustrationsBlipSolid = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIllustation, setFilteredIllustration] = useState([]);
  const defaultArray = [];

  useEffect(() => {
    const illustrationBlipSolid = document.getElementById('illustration-blip-solid');
    illustrationBlipSolid.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = blipSolid.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIllustration(filtered);
  }, [searchValue]);

  filteredIllustation.forEach((name) => {
    defaultArray.push(
      <div key={name} style={illustrationStyles}>
        <bds-illustration type="blip-solid" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="illustration-blip-solid" placeholder="search illustration"></bds-input>
      </bds-grid>
      <div style={illustrationWrapperStyles}>{defaultArray}</div>
    </bds-grid>
  );
};

export const IllustrationsBlipOutline = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIllustation, setFilteredIllustration] = useState([]);
  const defaultArray = [];

  useEffect(() => {
    const illustrationBlipOutline = document.getElementById('illustration-blip-outline');
    illustrationBlipOutline.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = blipOutline.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIllustration(filtered);
  }, [searchValue]);

  filteredIllustation.forEach((name) => {
    defaultArray.push(
      <div key={name} style={illustrationStyles}>
        <bds-illustration type="blip-outline" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="illustration-blip-outline" placeholder="search illustration"></bds-input>
      </bds-grid>
      <div style={illustrationWrapperStyles}>{defaultArray}</div>
    </bds-grid>
  );
};

export const IllustrationsBrand = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIllustation, setFilteredIllustration] = useState([]);
  const defaultArray = [];

  useEffect(() => {
    const illustrationBrand = document.getElementById('illustration-brand');
    illustrationBrand.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = brand.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIllustration(filtered);
  }, [searchValue]);

  filteredIllustation.forEach((name) => {
    defaultArray.push(
      <div key={name} style={illustrationStyles}>
        <bds-illustration type="brand" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="illustration-brand" placeholder="search illustration"></bds-input>
      </bds-grid>
      <div style={illustrationWrapperStyles}>{defaultArray}</div>
    </bds-grid>
  );
};

export const IllustrationsLogoIntegration = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIllustation, setFilteredIllustration] = useState([]);
  const defaultArray = [];

  useEffect(() => {
    const illustrationLogoIntegration = document.getElementById('illustration-logo-integration');
    illustrationLogoIntegration.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = logoIntegration.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIllustration(filtered);
  }, [searchValue]);

  filteredIllustation.forEach((name) => {
    defaultArray.push(
      <div key={name} style={illustrationStyles}>
        <bds-illustration type="logo-integration" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="illustration-logo-integration" placeholder="search illustration"></bds-input>
      </bds-grid>
      <div style={illustrationWrapperStyles}>{defaultArray}</div>
    </bds-grid>
  );
};

export const IllustrationsEmptyStates = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIllustation, setFilteredIllustration] = useState([]);
  const defaultArray = [];

  useEffect(() => {
    const illustrationEmptyStates = document.getElementById('illustration-empty-states');
    illustrationEmptyStates.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = emptyStates.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIllustration(filtered);
  }, [searchValue]);

  filteredIllustation.forEach((name) => {
    defaultArray.push(
      <div key={name} style={illustrationStyles}>
        <bds-illustration type="empty-states" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="illustration-empty-states" placeholder="search illustration"></bds-input>
      </bds-grid>
      <div style={illustrationWrapperStyles}>{defaultArray}</div>
    </bds-grid>
  );
};

export const IllustrationsSegmented = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIllustation, setFilteredIllustration] = useState([]);
  const defaultArray = [];

  useEffect(() => {
    const illustrationLogoIntegration = document.getElementById('illustration-segmented');
    illustrationLogoIntegration.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = segmented.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIllustration(filtered);
  }, [searchValue]);

  filteredIllustation.forEach((name) => {
    defaultArray.push(
      <div key={name} style={illustrationStyles}>
        <bds-illustration type="segmented" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="illustration-segmented" placeholder="search illustration"></bds-input>
      </bds-grid>
      <div style={illustrationWrapperStyles}>{defaultArray}</div>
    </bds-grid>
  );
};

export const IllustrationsSmartphone = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIllustation, setFilteredIllustration] = useState([]);
  const defaultArray = [];

  useEffect(() => {
    const illustrationLogoIntegration = document.getElementById('illustration-smartphone');
    illustrationLogoIntegration.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = smartphone.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIllustration(filtered);
  }, [searchValue]);

  filteredIllustation.forEach((name) => {
    defaultArray.push(
      <div key={name} style={illustrationStyles}>
        <bds-illustration type="smartphone" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="illustration-smartphone" placeholder="search illustration"></bds-input>
      </bds-grid>
      <div style={illustrationWrapperStyles}>{defaultArray}</div>
    </bds-grid>
  );
};

export const IllustrationsSpots = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredIllustation, setFilteredIllustration] = useState([]);
  const defaultArray = [];

  useEffect(() => {
    const illustrationLogoIntegration = document.getElementById('illustration-spots');
    illustrationLogoIntegration.addEventListener('bdsInput', (event) => {
      setSearchValue(event.target.value);
    });
  }, []);

  useEffect(() => {
    // Aqui você pode filtrar os ícones com base no valor de pesquisa.
    const filtered = spots.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredIllustration(filtered);
  }, [searchValue]);

  filteredIllustation.forEach((name) => {
    defaultArray.push(
      <div key={name} style={illustrationStyles}>
        <bds-illustration type="spots" name={name}></bds-illustration>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>,
    );
  });

  return (
    <bds-grid direction="column" gap="3">
      <bds-grid md="6" align-items="center" gap="3">
        <bds-input id="illustration-spots" placeholder="search illustration"></bds-input>
      </bds-grid>
      <div style={illustrationWrapperStyles}>{defaultArray}</div>
    </bds-grid>
  );
};
