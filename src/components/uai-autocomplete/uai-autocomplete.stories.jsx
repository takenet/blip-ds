import React, { useState } from 'react';
import { UaiAutocomplete, UaiButton, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-autocomplete.mdx';

export default {
  title: 'UAI/Autocomplete',
  component: UaiAutocomplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <Story />
      </UaiThemeProvider>
    ),
  ],
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(var(--uai-width-panel), 1fr))',
  gap: 'var(--uai-spacing-lg)',
  alignItems: 'start',
};
const column = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--uai-spacing-md)',
  maxWidth: 'var(--uai-width-dialog)',
};
const caption = {
  fontFamily: 'monospace',
  fontSize: 'var(--uai-caption-font-size)',
  color: 'var(--uai-content-secondary)',
};

const CITIES = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'bh', label: 'Belo Horizonte' },
  { value: 'poa', label: 'Porto Alegre' },
  { value: 'cwb', label: 'Curitiba' },
  { value: 'rec', label: 'Recife' },
  { value: 'ssa', label: 'Salvador' },
  { value: 'for', label: 'Fortaleza' },
  { value: 'bsb', label: 'Brasília' },
  { value: 'man', label: 'Manaus', disabled: true },
];

/**
 * Teste todas as propriedades.
 */
export const Playground = (args) => <UaiAutocomplete {...args} />;

Playground.args = {
  label: 'Cidade',
  options: CITIES,
  value: '',
  selectionType: 'single',
  selectionTitle: '',
  selectedAll: true,
  placeholder: 'Buscar cidade',
  icon: '',
  size: 'medium',
  optionsPosition: 'auto',
  clearIconOnFocus: false,
  loading: false,
  language: 'pt_BR',
  helperMessage: 'Digite para buscar.',
  errorMessage: 'Escolha uma cidade atendida.',
  successMessage: 'Cidade atendida.',
  danger: false,
  success: false,
  disabled: false,
  required: false,
};

Playground.argTypes = {
  label: { description: 'Rótulo acima do campo. Sem rótulo visível, use `aria-label`.', control: 'text' },
  options: { description: 'Opções `{ value, label, icon?, disabled?, checked? }`.', control: 'object' },
  value: { description: 'Valor escolhido, com `selectionType="single"`.', control: 'text' },
  selectionType: {
    table: { defaultValue: { summary: 'single' } },
    description: 'Uma opção (`single`) ou várias (`multiple`, com caixas de seleção).',
    options: ['single', 'multiple'],
    control: { type: 'select' },
  },
  selectionTitle: { description: 'Título acima das opções de uma escolha múltipla.', control: 'text' },
  selectedAll: { description: 'Na escolha múltipla, mostra "Selecionar todos" no topo.', control: 'boolean' },
  placeholder: { description: 'Texto de exemplo com o campo vazio.', control: 'text' },
  icon: { description: 'Nome de um UaiIcon antes do texto, como `search`.', control: 'text' },
  size: {
    table: { defaultValue: { summary: 'medium' } },
    description: 'Altura do campo.',
    options: ['short', 'medium'],
    control: { type: 'select' },
  },
  optionsPosition: {
    table: { defaultValue: { summary: 'auto' } },
    description: 'Lado da lista: onde houver espaço (`auto`), acima (`top`) ou abaixo (`bottom`).',
    options: ['auto', 'top', 'bottom'],
    control: { type: 'select' },
  },
  clearIconOnFocus: { description: 'Mostra o botão de limpar só com o campo em foco.', control: 'boolean' },
  loading: { description: 'Mostra na lista que as opções estão carregando.', control: 'boolean' },
  language: {
    table: { defaultValue: { summary: 'pt_BR' } },
    description: 'Idioma dos textos padrão.',
    options: ['pt_BR', 'en_US', 'es_ES'],
    control: { type: 'select' },
  },
  helperMessage: { description: 'Mensagem de ajuda abaixo do campo.', control: 'text' },
  errorMessage: { description: 'Mensagem exibida com `danger`.', control: 'text' },
  successMessage: { description: 'Mensagem exibida com `success`.', control: 'text' },
  danger: { description: 'Estado de erro. Tem prioridade sobre `success`.', control: 'boolean' },
  success: { description: 'Estado de sucesso.', control: 'boolean' },
  disabled: { description: 'Desabilita o campo e remove o valor do formulário.', control: 'boolean' },
  required: { description: 'Exige uma escolha para o formulário ser válido.', control: 'boolean' },
};

/**
 * Estados do campo, nos dois temas.
 */
export const States = () => (
  <div style={grid}>
    <UaiAutocomplete label="Padrão" options={CITIES} placeholder="Buscar cidade" helperMessage="Mensagem de ajuda" />
    <UaiAutocomplete label="Preenchido" options={CITIES} value="sp" helperMessage="Mensagem de ajuda" />
    <UaiAutocomplete label="Erro" options={CITIES} value="sp" danger errorMessage="Cidade fora da área." />
    <UaiAutocomplete label="Sucesso" options={CITIES} value="sp" success successMessage="Cidade atendida." />
    <UaiAutocomplete label="Desabilitado" options={CITIES} value="sp" disabled helperMessage="Mensagem de ajuda" />
    <UaiAutocomplete label="Com ícone" options={CITIES} icon="search" placeholder="Buscar cidade" />
  </div>
);

/**
 * Escolha múltipla: as opções viram caixas de seleção, "Selecionar todos" fica no topo e o campo mostra quantas estão
 * marcadas. A marcação vem de `checked` nas opções.
 */
export const Multiple = () => {
  const [checked, setChecked] = useState(['sp', 'rj']);
  return (
    <div style={column}>
      <UaiAutocomplete
        label="Cidades atendidas"
        selectionType="multiple"
        selectionTitle="Capitais"
        placeholder="Buscar cidade"
        options={CITIES.map((city) => ({ ...city, checked: checked.includes(city.value) }))}
        onUaiMultiselectedChange={(event) => setChecked(event.detail.value.map((option) => option.value))}
      />
      <span style={caption}>checked: {checked.join(', ') || '—'}</span>
    </div>
  );
};

/**
 * Lista carregando e busca sem resultados.
 */
export const ListStates = () => (
  <div style={grid}>
    <UaiAutocomplete label="Carregando" options={[]} loading placeholder="Abra para ver" />
    <UaiAutocomplete label="Sem opções" options={[]} placeholder="Abra para ver" />
  </div>
);

/**
 * Tamanhos `short` e `medium`.
 */
export const Sizes = () => (
  <div style={grid}>
    <UaiAutocomplete label="Short" size="short" options={CITIES} value="sp" />
    <UaiAutocomplete label="Medium" size="medium" options={CITIES} value="sp" />
  </div>
);

const usageSource = `import React, { useState } from 'react';
import { UaiAutocomplete, UaiButton } from 'blip-ds-react/dist/components';

const CITIES = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'bh', label: 'Belo Horizonte' },
];

export function DeliveryCity() {
  const [city, setCity] = useState(null);
  const [saved, setSaved] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSaved(new FormData(event.currentTarget).get('cidade'));
      }}
    >
      <UaiAutocomplete
        label="Cidade de entrega"
        name="cidade"
        placeholder="Buscar cidade"
        options={CITIES}
        value={city}
        required
        onUaiChange={(event) => setCity(event.detail.value)}
      />
      <UaiButton type="submit">Salvar</UaiButton>
      {saved && <span>Entrega em {saved}.</span>}
    </form>
  );
}`;

/**
 * Uma cidade controlada por estado, obrigatória, enviada no formulário pelo `name`.
 */
export const Usage = () => {
  const [city, setCity] = useState(null);
  const [saved, setSaved] = useState('');
  return (
    <form
      style={column}
      onSubmit={(event) => {
        event.preventDefault();
        setSaved(new FormData(event.currentTarget).get('cidade'));
      }}
    >
      <UaiAutocomplete
        label="Cidade de entrega"
        name="cidade"
        placeholder="Buscar cidade"
        options={CITIES}
        value={city}
        required
        onUaiChange={(event) => setCity(event.detail.value)}
      />
      <UaiButton type="submit">Salvar</UaiButton>
      {saved && <span style={caption}>Entrega em {saved}.</span>}
    </form>
  );
};

Usage.parameters = {
  docs: { source: { code: usageSource, language: 'jsx' } },
};
