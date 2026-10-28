import React, { useRef, useState } from 'react';
import { UaiButton, UaiInputDate, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-input-date.mdx';

export default {
  title: 'UAI/Input Date',
  component: UaiInputDate,
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
const row = { display: 'flex', gap: 'var(--uai-spacing-xs)' };
const caption = {
  fontFamily: 'monospace',
  fontSize: 'var(--uai-caption-font-size)',
  color: 'var(--uai-content-secondary)',
};

/**
 * Teste todas as propriedades.
 */
export const Playground = (args) => <UaiInputDate {...args} />;

Playground.args = {
  label: '',
  value: '',
  min: '',
  max: '',
  language: 'pt_BR',
  placeholder: '',
  size: 'medium',
  helperMessage: 'Digite só os números; as barras entram sozinhas.',
  errorMessage: 'Informe uma data válida.',
  successMessage: 'Data confirmada.',
  requiredErrorMessage: 'Informe a data.',
  dateErrorMessage: 'Essa data não existe.',
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
    description: 'Rótulo acima do campo. Sem valor, usa o texto padrão do idioma ("Data", "Date" ou "Fecha").',
    control: 'text',
  },
  value: {
    description: 'Data em ISO `YYYY-MM-DD`. É exibida no formato do idioma e enviada em ISO no formulário.',
    control: 'text',
  },
  min: { description: 'Data mínima aceita, em ISO `YYYY-MM-DD`. Também limita o calendário.', control: 'text' },
  max: { description: 'Data máxima aceita, em ISO `YYYY-MM-DD`. Também limita o calendário.', control: 'text' },
  language: {
    table: { defaultValue: { summary: 'pt_BR' } },
    description: 'Idioma do formato de exibição (`dd/mm/aaaa` ou `mm/dd/yyyy`) e dos textos padrão.',
    options: ['pt_BR', 'en_US', 'es_ES'],
    control: { type: 'select' },
  },
  placeholder: {
    description: 'Texto de exemplo. Sem valor, mostra o formato do idioma ("dd/mm/aaaa", "mm/dd/yyyy").',
    control: 'text',
  },
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
  dateErrorMessage: { description: 'Mensagem quando a data está incompleta ou não existe.', control: 'text' },
  minErrorMessage: { description: 'Mensagem quando a data é anterior a `min`.', control: 'text' },
  maxErrorMessage: { description: 'Mensagem quando a data é posterior a `max`.', control: 'text' },
  icon: { description: 'Nome de um UaiIcon exibido antes do texto.', control: 'text' },
  danger: { description: 'Estado de erro. Tem prioridade sobre `success`.', control: 'boolean' },
  success: { description: 'Estado de sucesso.', control: 'boolean' },
  disabled: {
    description: 'Desabilita o campo e o botão de calendário e remove o valor do formulário.',
    control: 'boolean',
  },
  readonly: {
    description: 'Permite selecionar e copiar, sem editar. Esconde o botão de calendário.',
    control: 'boolean',
  },
  required: { description: 'Bloqueia o envio do formulário sem uma data.', control: 'boolean' },
};

/**
 * Estados do campo, nos dois temas.
 */
export const States = () => (
  <div style={grid}>
    <UaiInputDate label="Padrão" helperMessage="Mensagem de ajuda" />
    <UaiInputDate label="Preenchido" value="2026-12-25" helperMessage="Mensagem de ajuda" />
    <UaiInputDate label="Erro" value="2026-12-25" danger errorMessage="Escolha um dia útil." />
    <UaiInputDate label="Sucesso" value="2026-12-25" success successMessage="Data confirmada." />
    <UaiInputDate label="Desabilitado" value="2026-12-25" disabled helperMessage="Mensagem de ajuda" />
    <UaiInputDate label="Somente leitura" value="2026-12-25" readonly helperMessage="Mensagem de ajuda" />
  </div>
);

/**
 * O foco aparece no contorno do campo e, no botão de calendário, como anel próprio.
 * Use os botões para focar e tirar o foco por código (`setFocus()` e `removeFocus()`).
 */
export const Focus = () => {
  const field = useRef(null);
  return (
    <div style={column}>
      <UaiInputDate ref={field} label="Foco" value="2026-12-25" helperMessage="Mensagem de ajuda" />
      <div style={row}>
        <UaiButton variant="outline" color="content" onUaiClick={() => field.current.setFocus()}>
          Focar o campo
        </UaiButton>
        <UaiButton variant="text" color="content" onUaiClick={() => field.current.removeFocus()}>
          Tirar o foco
        </UaiButton>
      </div>
    </div>
  );
};

/**
 * Tamanhos `short` e `medium` (padrão).
 */
export const Sizes = () => (
  <div style={column}>
    {['short', 'medium'].map((size) => (
      <div key={size}>
        <div style={caption}>size="{size}"</div>
        <UaiInputDate size={size} label="Data" />
      </div>
    ))}
  </div>
);

/**
 * O mesmo `value` ISO nos três idiomas, sem `label` nem `placeholder`: muda o formato exibido e os textos padrão.
 */
export const Languages = () => (
  <div style={grid}>
    {['pt_BR', 'en_US', 'es_ES'].map((language) => (
      <div key={language} style={column}>
        <div style={caption}>language="{language}"</div>
        <UaiInputDate language={language} value="2026-12-25" />
        <UaiInputDate language={language} />
      </div>
    ))}
  </div>
);

/**
 * `min` e `max` limitam a digitação válida e o calendário. Saia do campo com uma data fora do intervalo para ver a
 * mensagem; sem `minErrorMessage` ou `maxErrorMessage`, aparece o texto padrão com o limite.
 */
export const Range = () => (
  <div style={grid}>
    <UaiInputDate
      label="Check-in em 2026"
      min="2026-01-01"
      max="2026-12-31"
      value="2025-12-31"
      helperMessage="Entre 01/01/2026 e 31/12/2026."
    />
    <UaiInputDate
      label="Com mensagens próprias"
      min="2026-01-01"
      max="2026-12-31"
      value="2027-01-15"
      minErrorMessage="O check-in começa em 01/01/2026."
      maxErrorMessage="O check-in termina em 31/12/2026."
    />
  </div>
);

/**
 * Formulário nativo: com `name`, envia a data em ISO. Sem data válida, nada é enviado. O reset volta à data inicial.
 */
export const Form = () => {
  const [sent, setSent] = useState(null);
  return (
    <form
      style={column}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))));
      }}
    >
      <UaiInputDate
        name="birth"
        label="Data de nascimento"
        value="1990-05-20"
        max="2026-01-01"
        required
        requiredErrorMessage="Informe a data de nascimento."
        dateErrorMessage="Essa data não existe."
        maxErrorMessage="A data precisa ser anterior a 01/01/2026."
      />
      <div style={row}>
        <UaiButton type="submit">Enviar</UaiButton>
        <UaiButton type="reset" variant="outline" color="content">
          Restaurar
        </UaiButton>
      </div>
      <div style={caption}>{sent ? `Enviado: ${sent}` : 'Nada enviado ainda.'}</div>
    </form>
  );
};

/**
 * Eventos emitidos ao digitar, escolher no calendário, focar e sair. `uaiChange` traz a data em ISO.
 */
export const Events = () => {
  const [log, setLog] = useState([]);
  const add = (name) => (event) => {
    const detail = event.detail && event.detail.value !== undefined ? `: "${event.detail.value}"` : '';
    setLog((items) => [`${name}${detail}`, ...items].slice(0, 6));
  };
  return (
    <div style={column}>
      <UaiInputDate
        label="Data"
        onUaiChange={add('uaiChange')}
        onUaiInput={add('uaiInput')}
        onUaiFocus={add('uaiFocus')}
        onUaiOnBlur={add('uaiOnBlur')}
      />
      <div style={caption}>
        {log.length ? log.map((item, index) => <div key={index}>{item}</div>) : 'Nenhum evento ainda.'}
      </div>
    </div>
  );
};

const usageSource = `import React, { useState } from 'react';
import { UaiButton, UaiInputDate, UaiThemeProvider } from 'blip-ds-react/dist/components';
import 'blip-tokens/uai-icons/css';

export function ScheduleForm() {
  const [date, setDate] = useState('');
  const [sent, setSent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(new FormData(event.currentTarget).get('visit'));
  };

  return (
    <UaiThemeProvider theme="light">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' }}>
        <UaiInputDate
          name="visit"
          label="Data da visita"
          helperMessage="Atendemos de janeiro a junho de 2026."
          value={date}
          min="2026-01-01"
          max="2026-06-30"
          required
          requiredErrorMessage="Informe a data da visita."
          minErrorMessage="Escolha uma data a partir de 01/01/2026."
          maxErrorMessage="Escolha uma data até 30/06/2026."
          onUaiChange={(event) => setDate(event.detail.value)}
        />
        <UaiButton type="submit">Agendar</UaiButton>
        {sent && <span>Agendado para: {sent}</span>}
      </form>
    </UaiThemeProvider>
  );
}`;

/**
 * Formulário de agendamento com a data controlada por estado e limitada por `min` e `max`. O valor enviado é ISO.
 */
export const Usage = () => {
  const [date, setDate] = useState('');
  const [sent, setSent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(new FormData(event.currentTarget).get('visit'));
  };

  return (
    <form onSubmit={handleSubmit} style={column}>
      <UaiInputDate
        name="visit"
        label="Data da visita"
        helperMessage="Atendemos de janeiro a junho de 2026."
        value={date}
        min="2026-01-01"
        max="2026-06-30"
        required
        requiredErrorMessage="Informe a data da visita."
        minErrorMessage="Escolha uma data a partir de 01/01/2026."
        maxErrorMessage="Escolha uma data até 30/06/2026."
        onUaiChange={(event) => setDate(event.detail.value)}
      />
      <UaiButton type="submit">Agendar</UaiButton>
      {sent && <span style={caption}>Agendado para: {sent}</span>}
    </form>
  );
};

Usage.parameters = {
  docs: { source: { code: usageSource, language: 'jsx' } },
};
