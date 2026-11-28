import React, { useState } from 'react';
import { UaiButton, UaiInputDate, UaiInputTime, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-input-time.mdx';

export default {
  title: 'UAI Components/Input Time',
  component: UaiInputTime,
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
const row = { display: 'flex', gap: 'var(--uai-spacing-md)', alignItems: 'flex-start' };
const caption = {
  fontFamily: 'monospace',
  fontSize: 'var(--uai-caption-font-size)',
  color: 'var(--uai-content-secondary)',
};

/**
 * Teste todas as propriedades.
 */
export const Playground = (args) => <UaiInputTime {...args} />;

Playground.args = {
  label: '',
  value: '',
  min: '',
  max: '',
  minuteStep: 5,
  language: 'pt_BR',
  placeholder: '',
  size: 'medium',
  helperMessage: 'Clique para escolher ou digite só os números.',
  errorMessage: 'Informe um horário válido.',
  successMessage: 'Horário confirmado.',
  requiredErrorMessage: 'Informe o horário.',
  timeErrorMessage: '',
  minErrorMessage: '',
  maxErrorMessage: '',
  icon: '',
  danger: false,
  success: false,
  disabled: false,
  readonly: false,
  required: false,
};

Playground.argTypes = {
  label: {
    description: 'Rótulo acima do campo. Sem valor, usa o texto padrão do idioma ("Horário", "Time" ou "Hora").',
    control: 'text',
  },
  value: { description: 'Horário em `HH:mm`, de `00:00` a `23:59`. Vazio enquanto incompleto.', control: 'text' },
  min: { description: 'Horário mínimo aceito, em `HH:mm`. Também desabilita os itens antes dele no painel.', control: 'text' },
  max: { description: 'Horário máximo aceito, em `HH:mm`. Também desabilita os itens depois dele no painel.', control: 'text' },
  minuteStep: {
    table: { defaultValue: { summary: 5 } },
    description: 'Intervalo dos minutos oferecidos no painel, de 1 a 30. Digitando, qualquer minuto é aceito.',
    control: { type: 'number', min: 1, max: 30 },
  },
  language: {
    table: { defaultValue: { summary: 'pt_BR' } },
    description: 'Idioma dos textos padrão.',
    options: ['pt_BR', 'en_US', 'es_ES'],
    control: { type: 'select' },
  },
  placeholder: { description: 'Texto de exemplo. Sem valor, mostra `hh:mm`.', control: 'text' },
  size: {
    table: { defaultValue: { summary: 'medium' } },
    description: 'Altura do campo.',
    options: ['short', 'medium'],
    control: { type: 'select' },
  },
  helperMessage: { description: 'Mensagem de ajuda abaixo do campo.', control: 'text' },
  errorMessage: { description: 'Mensagem exibida com `danger`.', control: 'text' },
  successMessage: { description: 'Mensagem exibida com `success`.', control: 'text' },
  requiredErrorMessage: { description: 'Mensagem quando `required` e vazio.', control: 'text' },
  timeErrorMessage: { description: 'Mensagem quando o horário está incompleto.', control: 'text' },
  minErrorMessage: { description: 'Mensagem quando o horário é anterior a `min`.', control: 'text' },
  maxErrorMessage: { description: 'Mensagem quando o horário é posterior a `max`.', control: 'text' },
  icon: { description: 'Nome de um UaiIcon exibido antes do texto.', control: 'text' },
  danger: { description: 'Estado de erro. Tem prioridade sobre `success`.', control: 'boolean' },
  success: { description: 'Estado de sucesso.', control: 'boolean' },
  disabled: {
    description: 'Desabilita o campo e o botão do seletor e remove o valor do formulário.',
    control: 'boolean',
  },
  readonly: { description: 'Permite selecionar e copiar, sem editar. Esconde o botão do seletor.', control: 'boolean' },
  required: { description: 'Bloqueia o envio do formulário sem um horário.', control: 'boolean' },
};

/**
 * Estados do campo, nos dois temas.
 */
export const States = () => (
  <div style={grid}>
    <UaiInputTime label="Padrão" helperMessage="Mensagem de ajuda" />
    <UaiInputTime label="Preenchido" value="09:30" helperMessage="Mensagem de ajuda" />
    <UaiInputTime label="Erro" value="09:30" danger errorMessage="Fora do horário de atendimento." />
    <UaiInputTime label="Sucesso" value="09:30" success successMessage="Horário confirmado." />
    <UaiInputTime label="Desabilitado" value="09:30" disabled helperMessage="Mensagem de ajuda" />
    <UaiInputTime label="Somente leitura" value="09:30" readonly helperMessage="Mensagem de ajuda" />
  </div>
);

/**
 * Tamanhos `short` e `medium`.
 */
export const Sizes = () => (
  <div style={grid}>
    <UaiInputTime label="Short" size="short" value="08:00" />
    <UaiInputTime label="Medium" size="medium" value="08:00" />
  </div>
);

/**
 * `min` e `max` em `HH:mm`. Fora da faixa, o campo mostra a mensagem padrão com o limite.
 */
export const Range = () => (
  <div style={grid}>
    <UaiInputTime label="Abertura" min="08:00" max="18:00" value="07:30" helperMessage="Das 08:00 às 18:00." />
    <UaiInputTime label="Fechamento" min="08:00" max="18:00" value="12:00" helperMessage="Das 08:00 às 18:00." />
  </div>
);

/**
 * Data e horário lado a lado, como no retorno de uma pausa.
 */
export const DateAndTime = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  return (
    <div style={column}>
      <div style={row}>
        <UaiInputDate label="Data do retorno" value={date} onUaiChange={(event) => setDate(event.detail.value)} />
        <UaiInputTime label="Horário do retorno" value={time} onUaiChange={(event) => setTime(event.detail.value)} />
      </div>
      <span style={caption}>
        value: {date || '—'} {time || '—'}
      </span>
    </div>
  );
};

/**
 * Dentro de um formulário: o valor vai em `HH:mm` com o `name`.
 */
export const Form = () => {
  const [sent, setSent] = useState('');
  return (
    <form
      style={column}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(new FormData(event.currentTarget).get('abertura') || '');
      }}
    >
      <UaiInputTime label="Abertura" name="abertura" required requiredErrorMessage="Informe a abertura." />
      <UaiButton type="submit">Salvar</UaiButton>
      {sent && <span style={caption}>Enviado: {sent}</span>}
    </form>
  );
};

const usageSource = `import React, { useState } from 'react';
import { UaiButton, UaiInputTime } from 'blip-ds-react/dist/components';

export function OpeningHours() {
  const [opening, setOpening] = useState('08:00');
  const [saved, setSaved] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSaved(opening);
      }}
    >
      <UaiInputTime
        label="Abertura"
        name="abertura"
        min="06:00"
        max="12:00"
        value={opening}
        required
        helperMessage="Das 06:00 às 12:00."
        onUaiChange={(event) => setOpening(event.detail.value)}
      />
      <UaiButton type="submit">Salvar</UaiButton>
      {saved && <span>Abre às {saved}.</span>}
    </form>
  );
}`;

/**
 * Um horário controlado por estado, limitado por `min` e `max`, com validação nativa e envio.
 */
export const Usage = () => {
  const [opening, setOpening] = useState('08:00');
  const [saved, setSaved] = useState('');
  return (
    <form
      style={column}
      onSubmit={(event) => {
        event.preventDefault();
        setSaved(opening);
      }}
    >
      <UaiInputTime
        label="Abertura"
        name="abertura"
        min="06:00"
        max="12:00"
        value={opening}
        required
        helperMessage="Das 06:00 às 12:00."
        onUaiChange={(event) => setOpening(event.detail.value)}
      />
      <UaiButton type="submit">Salvar</UaiButton>
      {saved && <span style={caption}>Abre às {saved}.</span>}
    </form>
  );
};

Usage.parameters = {
  docs: { source: { code: usageSource, language: 'jsx' } },
};
