import React, { useEffect } from 'react';
import DocumentationTemplate from './autocomplete.mdx';
import { BdsAutocomplete, BdsSelectOption } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Autocomplete',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.height = '300px';
    el[0].style.position = 'relative';
    el[0].style.background = 'none';
  }
  return (
    <bds-autocomplete
      label={args.label}
      icon={args.icon}
      value={args.value}
      disabled={args.disabled}
      placeholder={args.placeholder}
      selection-type={args.selectionType}
      selection-title={args.selectionTitle}
      selected-all={args.selectedAll}
      options-position={args.optionsPosition}
      danger={args.danger}
      error-message={args.errorMessage}
      helper-message={args.helperMessage}
      success-message={args.successMessage}
      success={args.success}
      options={args.options}
      search-only-title={args.searchOnlyTitle}
      clear-icon-on-focus={args.clearIconOnFocus}
      data-test={args.dataTest}
      loading={args.loading}
    >
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>
  );
};

Properties.argTypes = {
  label: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Coloque o texto que será exibido como rótulo do componente.',
    control: 'text',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o ícone que será utilizado no botão (Apenas ícones no estilo outline).',
    control: 'text',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o componente estará desabilitado (não interativo).',
    control: 'boolean',
  },
  selectionType: {
    table: {
      defaultValue: { summary: 'single' },
    },
    description: 'Defina o tipo de seleção dos itens. "single" permite selecionar um item por vez, "multiple" permite múltiplas seleções.',
    options: ['single', 'multiple'],
    control: 'select',
  },
  selectedAll: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Define se aparece a opção de selecionar todos.',
    control: 'boolean',
  },
  selectionTitle: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Texto do título exibido ao selecionar múltiplos itens.',
    control: 'text',
  },
  placeholder: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Texto exibido como uma dica no campo de entrada quando não há valor.',
    control: 'text',
  },
  errorMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Mensagem de erro exibida quando o valor não é válido.',
    control: 'text',
  },
  helperMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Mensagem de ajuda exibida abaixo do campo, explicando o que o usuário deve fazer.',
    control: 'text',
  },
  successMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Mensagem exibida quando a ação no campo é bem-sucedida.',
    control: 'text',
  },
  success: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Define se o estado do componente é de sucesso.',
    control: 'boolean',
  },
  danger: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Define se o componente deve exibir um estilo de alerta (perigo).',
    control: 'boolean',
  },
  options: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'As opções de seleção para o autocomplete, podem ser passadas como um array de objetos JSON ou como componentes filhos `bds-select-option`.',
    control: 'object',
  },
  searchOnlyTitle: {
    table: {
      defaultValue: { summary: 'true' },
    },
    description: 'Define se a busca deve ser realizada apenas pelo título das opções.',
    control: 'boolean',
  },
  clearIconOnFocus: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Se verdadeiro, o ícone de limpeza aparecerá apenas quando o campo estiver focado.',
    control: 'boolean',
  },
  dataTest: {
    table: {
      defaultValue: { summary: 'null' },
    },
    description: 'Atributo para fins de teste automatizado do componente.',
    control: 'text',
  },
  loading: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Define se o componente está em estado de carregamento.',
    control: 'boolean',
  },
};

Properties.args = {
  label: 'Label',
  icon: '',
  disabled: false,
  placeholder: 'Selecione uma opção',
  selectionType: 'single',
  selectedAll: true,
  selectionTitle: 'Selection Title',
  errorMessage: '',
  helperMessage: '',
  successMessage: '',
  success: false,
  danger: false,
  options: '[{"value": "1", "label": "Millie Bobby"}, {"value": "2", "label": "Finn Wolfhard"}, {"value": "3", "label": "David Harbour"}, {"value": "4", "label": "Gaten Matarazzo"}, {"value": "5", "label": "Caleb McLaughlin"}, {"value": "6", "label": "Noah Schnapp"}]',
  searchOnlyTitle: true,
  clearIconOnFocus: false,
  dataTest: '',
  loading: false,
};



export const Events = () => {
  useEffect(() => {
    const autocomplete = document.getElementById('autocomplete');
    autocomplete.addEventListener('bdsMultiselectedChange', () => {
      console.log('Evento Multiselected Change funcionando');
    });
    autocomplete.addEventListener('bdsBlur', () => {
      console.log('Evento Blur funcionando');
    });
    autocomplete.addEventListener('bdsCancel', () => {
      console.log('Evento Cancel funcionando');
    });
    autocomplete.addEventListener('bdsChange', () => {
      console.log('Evento Change funcionando');
    });
    autocomplete.addEventListener('bdsFocus', () => {
      console.log('Evento Focus funcionando');
    });
    autocomplete.addEventListener('bdsInput', () => {
      console.log('Evento Input funcionando');
    });
    autocomplete.addEventListener('bdsSelectedChange', () => {
      console.log('Evento Selected Change funcionando');
    });
  });
  return (
    <>
      <bds-autocomplete id="autocomplete" label="label" icon="email" value="" disabled={false} placeholder="Select">
        <bds-select-option value="1">Millie Bobby</bds-select-option>
        <bds-select-option value="2">Finn Wolfhard</bds-select-option>
        <bds-select-option value="3">David Harbour</bds-select-option>
        <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
        <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
        <bds-select-option value="6">Noah Schnapp</bds-select-option>
      </bds-autocomplete>
    </>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsAutocomplete label="label" icon="email" value="" disabled={false} placeholder="Select">
      <BdsSelectOption value="1">Millie Bobby</BdsSelectOption>
      <BdsSelectOption value="2">Finn Wolfhard</BdsSelectOption>
      <BdsSelectOption value="3">David Harbour</BdsSelectOption>
      <BdsSelectOption value="4">Gaten Matarazzo</BdsSelectOption>
      <BdsSelectOption value="5">Caleb McLaughlin</BdsSelectOption>
      <BdsSelectOption value="6">Noah Schnapp</BdsSelectOption>
    </BdsAutocomplete>
  );
};
