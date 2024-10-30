import React, { useState, useEffect } from 'react';

export default {
  title: 'Snippets/Button Group',
};

export const SimpleButtonGroup = (args) => (
  <bds-button-group>
    <bds-button icon-left="builder-publish-bot"></bds-button>
    <bds-button icon-left="search"></bds-button>
    <bds-button icon-left="email"></bds-button>
    <bds-button icon-left="bell"></bds-button>
    <bds-button icon-left="settings-general"></bds-button>
  </bds-button-group>
);

export const InteractiveButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState('');

  useEffect(() => {
    const buttonGroup = document.getElementById('button-group');

    buttonGroup.addEventListener('buttonSelected', (obj) => {
      setSelectedButton(obj.detail);
    });

    return () => {
      buttonGroup.removeEventListener('buttonSelected', (obj) => {
        setSelectedButton('');
      });
    };
  }, []);

  return (
    <div>
      <bds-button-group id="button-group">
        <bds-button icon-left="builder-publish-bot" id="bot-builder-publish"></bds-button>
        <bds-button icon-left="search" id="bot-search"></bds-button>
        <bds-button icon-left="email" id="bot-email"></bds-button>
        <bds-button icon-left="bell" id="bot-bell"></bds-button>
        <bds-button icon-left="settings-general" id="bot-settings"></bds-button>
      </bds-button-group>
      <bds-grid padding="y-3">
        <bds-typo>
          <strong>Botão selecionado:</strong> {selectedButton}
        </bds-typo>
      </bds-grid>
    </div>
  );
};

const DATA = [
  { id: 1, name: 'Group 1' },
  { id: 2, name: 'Group 2' },
  { id: 3, name: 'Group 3' },
];

export const CompleteButtonGroup = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupSelection = (group) => {
    setSelectedGroup(group);
  };

  return (
    <bds-card height="fit-content" width="500px">
      <bds-card-header align="center">
        <bds-card-title text="Selecione um Grupo"></bds-card-title>
      </bds-card-header>
      <bds-card-content>
        <bds-button-group>
          {DATA.map((group) => (
            <bds-button
              key={group.id}
              onClick={() => handleGroupSelection(group.name)}
              variant={group.name === selectedGroup ? 'solid' : 'outline'}
            >
              {group.name}
            </bds-button>
          ))}
        </bds-button-group>
      </bds-card-content>
      <bds-card-footer align="center">
        <bds-typo variant="fs-14">Grupo selecionado: {selectedGroup}</bds-typo>
      </bds-card-footer>
    </bds-card>
  );
};

const DATAGroup = [
  { id: 1, category: 'Tecnologia', items: ['Laptop', 'Smartphone', 'Tablet'] },
  { id: 2, category: 'Moda', items: ['Roupas', 'Calçados', 'Acessórios'] },
  { id: 3, category: 'Esportes', items: ['Bola', 'Raquete', 'Tênis'] },
];

export const FilterButtonGroup = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filteredItems = DATAGroup.find((data) => data.category === selectedCategory)?.items || [];

  return (
    <bds-card height="fit-content" width="500px">
      <bds-card-header align="center">
        <bds-card-title text="Selecione uma Categoria"></bds-card-title>
      </bds-card-header>
      <bds-card-content>
        <bds-button-group>
          {DATAGroup.map((data) => (
            <bds-button
              key={data.id}
              onClick={() => setSelectedCategory(data.category)}
              variant={data.category === selectedCategory ? 'solid' : 'outline'}
            >
              {data.category}
            </bds-button>
          ))}
        </bds-button-group>
        <bds-grid margin="t-2" direction="column">
          <bds-typo bold="bold">Itens da Categoria: {selectedCategory}</bds-typo>
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>
                <bds-typo>{item}</bds-typo>
              </li>
            ))}
          </ul>
        </bds-grid>
      </bds-card-content>
    </bds-card>
  );
};

const THEMES = [
  { id: 1, name: 'Light Theme', class: 'light' },
  { id: 2, name: 'Dark Theme', class: 'dark' },
];

export const ThemeSelector = () => {
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0].class);

  const applyTheme = (themeClass) => {
    setSelectedTheme(themeClass);
  };

  useEffect(() => {
    const buttonGroup = document.getElementById('button-group-theme');
    if (buttonGroup) {
      buttonGroup.addEventListener('buttonSelected', (event) => {
        console.log('Botão selecionado:', event.detail);
      });

      buttonGroup.activateButton(0);
    }
  }, []);

  return (
    <bds-card height="fit-content" width="500px">
      <bds-card-header align="center">
        <bds-card-title text="Selecione um Tema"></bds-card-title>
      </bds-card-header>
      <bds-card-content>
        <bds-button-group id="button-group-theme">
          {THEMES.map((theme) => (
            <bds-button
              key={theme.id}
              onClick={() => applyTheme(theme.class)}
              variant={theme.class === selectedTheme ? 'solid' : 'outline'}
            >
              {theme.name}
            </bds-button>
          ))}
        </bds-button-group>
        <bds-theme-provider theme={selectedTheme}>
          <bds-paper>
            <bds-grid direction="column" margin="y-4" padding="2">
              <bds-typo variant="fs-24" bold="bold">
                Conteúdo com tema aplicado
              </bds-typo>
              <bds-typo>Este conteúdo será estilizado conforme o tema selecionado.</bds-typo>
            </bds-grid>
          </bds-paper>
        </bds-theme-provider>
      </bds-card-content>
    </bds-card>
  );
};

const OPTIONS = [
  { id: 1, label: 'Opção A' },
  { id: 2, label: 'Opção B' },
  { id: 3, label: 'Opção C' },
  { id: 4, label: 'Opção D' },
];

export const MultiSelectButtonGroup = () => {
  const [selectedOptions, setSelectedOptions] = useState(new Set());

  const toggleOption = (optionId) => {
    const newSelectedOptions = new Set(selectedOptions);
    if (newSelectedOptions.has(optionId)) {
      newSelectedOptions.delete(optionId);
    } else {
      newSelectedOptions.add(optionId);
    }
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <bds-card height="fit-content" width="500px">
      <bds-card-header align="center">
        <bds-card-title text="Selecione Opções Múltiplas"></bds-card-title>
      </bds-card-header>
      <bds-card-content>
        <bds-button-group multiple={true}>
          {OPTIONS.map((option) => (
            <bds-button
              key={option.id}
              onClick={() => toggleOption(option.id)}
              variant={selectedOptions.has(option.id) ? 'solid' : 'outline'}
            >
              {option.label}
            </bds-button>
          ))}
        </bds-button-group>
        <div style={{ marginTop: '1rem' }}>
          <bds-typo bold="bold">Opções Selecionadas:</bds-typo>
          <ul>
            {OPTIONS.filter((option) => selectedOptions.has(option.id)).map((option) => (
              <li key={option.id}>
                <bds-typo>{option.label}</bds-typo>
              </li>
            ))}
          </ul>
        </div>
      </bds-card-content>
    </bds-card>
  );
};
