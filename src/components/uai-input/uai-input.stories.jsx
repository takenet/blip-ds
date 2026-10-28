import React, { useState } from 'react';
import { UaiButton, UaiInput, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-input.mdx';

export default {
  title: 'UAI/Input',
  component: UaiInput,
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
// Same as the UAI Core adornment: surface/muted, radius/md, spacing/xs and sizing/lg high.
const tag = {
  display: 'inline-flex',
  alignItems: 'center',
  height: 'var(--uai-sizing-lg)',
  padding: '0 var(--uai-spacing-xs)',
  borderRadius: 'var(--uai-radius-md)',
  background: 'var(--uai-surface-muted)',
  color: 'var(--uai-content-secondary)',
  fontFamily: 'var(--uai-font-family-sans)',
  fontSize: 'var(--uai-body-base-font-size)',
  lineHeight: 'var(--uai-body-base-line-height)',
};

/**
 * Teste todas as propriedades.
 */
export const Playground = (args) => <UaiInput {...args} />;

Playground.args = {
  label: 'Nome completo',
  placeholder: 'Ex.: Ana Souza',
  helperMessage: 'Use o nome que aparece no documento.',
  errorMessage: 'Informe o nome completo.',
  successMessage: 'Nome confirmado.',
  type: 'text',
  size: 'medium',
  icon: '',
  danger: false,
  success: false,
  disabled: false,
  readonly: false,
  required: false,
  counterLength: false,
  maxlength: 60,
};

Playground.argTypes = {
  label: { description: 'Rótulo acima do campo.', control: 'text' },
  placeholder: { description: 'Exemplo do texto esperado. Não substitui o rótulo.', control: 'text' },
  helperMessage: { description: 'Mensagem de ajuda abaixo do campo.', control: 'text' },
  errorMessage: { description: 'Mensagem exibida com `danger`.', control: 'text' },
  successMessage: { description: 'Mensagem exibida com `success`.', control: 'text' },
  type: {
    table: { defaultValue: { summary: 'text' } },
    description: 'Tipo de texto.',
    options: ['text', 'email', 'number', 'search'],
    control: { type: 'select' },
  },
  size: {
    table: { defaultValue: { summary: 'medium' } },
    description: 'Altura do campo.',
    options: ['short', 'medium'],
    control: { type: 'select' },
  },
  icon: { description: 'Nome de um UaiIcon exibido antes do texto, como `search`.', control: 'text' },
  danger: { description: 'Estado de erro. Tem prioridade sobre `success`.', control: 'boolean' },
  success: { description: 'Estado de sucesso.', control: 'boolean' },
  disabled: { description: 'Desabilita o campo e o remove do formulário.', control: 'boolean' },
  readonly: { description: 'Permite selecionar e copiar, sem editar.', control: 'boolean' },
  required: { description: 'Bloqueia o envio do formulário com o campo vazio.', control: 'boolean' },
  counterLength: { description: 'Mostra a quantidade de caracteres e o `maxlength`.', control: 'boolean' },
  maxlength: { description: 'Quantidade máxima de caracteres.', control: 'number' },
};

/**
 * Estados do campo, nos dois temas.
 */
export const States = () => (
  <div style={grid}>
    <UaiInput label="Padrão" placeholder="Digite aqui" helperMessage="Mensagem de ajuda" />
    <UaiInput label="Preenchido" value="Ana Souza" helperMessage="Mensagem de ajuda" />
    <UaiInput label="Erro" value="ana@" danger errorMessage="Informe um e-mail válido." />
    <UaiInput label="Sucesso" value="ana@blip.ai" success successMessage="E-mail confirmado." />
    <UaiInput label="Desabilitado" value="Ana Souza" disabled helperMessage="Mensagem de ajuda" />
    <UaiInput label="Somente leitura" value="Ana Souza" readonly helperMessage="Mensagem de ajuda" />
  </div>
);

/**
 * Tamanhos `short` e `medium` (padrão).
 */
export const Sizes = () => (
  <div style={column}>
    {['short', 'medium'].map((size) => (
      <div key={size}>
        <div style={caption}>size="{size}"</div>
        <UaiInput size={size} label="Nome" placeholder="Digite aqui" />
      </div>
    ))}
  </div>
);

/**
 * Busca, adornos e contador são composições do mesmo campo.
 */
export const SearchAndAdornments = () => {
  const [query, setQuery] = useState('Relatório de vendas');
  return (
    <div style={grid}>
      <UaiInput type="search" icon="search" aria-label="Buscar" placeholder="Buscar" />
      <UaiInput label="Valor" value="1.250,00">
        <span slot="inside-input-left" style={tag}>
          R$
        </span>
      </UaiInput>
      <UaiInput label="Busca salva" value={query} onUaiChange={(event) => setQuery(event.detail.value)}>
        <UaiButton
          slot="input-right"
          variant="text"
          color="content"
          size="compact"
          icon="close"
          aria-label="Limpar"
          onUaiClick={() => setQuery('')}
        />
      </UaiInput>
      <UaiInput label="Descrição curta" value="Campanha de outubro" counterLength maxlength={40} />
    </div>
  );
};

/**
 * O campo ocupa a largura do contêiner. Rótulo e mensagem quebram linha; o valor longo é truncado.
 */
export const Widths = () => (
  <div style={column}>
    <div style={{ width: 'var(--uai-width-menu)' }}>
      <UaiInput
        label="Rótulo longo que quebra em mais de uma linha"
        placeholder="Digite aqui"
        helperMessage="Mensagem de ajuda longa que também quebra em mais de uma linha"
      />
    </div>
    <UaiInput
      label="Valor longo"
      value="Este é um valor longo que não cabe na largura do campo e por isso aparece truncado no final"
    />
  </div>
);

/**
 * Formulário nativo: o valor é enviado pelo `name`, o reset volta ao valor inicial e `required` bloqueia o envio.
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
      <UaiInput label="Nome" name="nome" value="Ana Souza" required requiredErrorMessage="Informe o nome." />
      <UaiInput
        label="E-mail"
        name="email"
        type="email"
        required
        requiredErrorMessage="Informe o e-mail."
        emailErrorMessage="Informe um e-mail válido."
      />
      <div style={{ display: 'flex', gap: 'var(--uai-spacing-xs)' }}>
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
 * Eventos emitidos ao digitar, focar, sair e pressionar Enter.
 */
export const Events = () => {
  const [log, setLog] = useState([]);
  const add = (name) => (event) =>
    setLog((items) =>
      [`${name}${event.detail && event.detail.value !== undefined ? `: ${event.detail.value}` : ''}`, ...items].slice(
        0,
        6,
      ),
    );
  return (
    <div style={column}>
      <UaiInput
        label="Mensagem"
        placeholder="Digite e pressione Enter"
        onUaiChange={add('uaiChange')}
        onUaiFocus={add('uaiFocus')}
        onUaiOnBlur={add('uaiOnBlur')}
        onUaiSubmit={add('uaiSubmit')}
      />
      <div style={caption}>
        {log.length ? log.map((item, index) => <div key={index}>{item}</div>) : 'Nenhum evento ainda.'}
      </div>
    </div>
  );
};

const usageSource = `import React, { useState } from 'react';
import { UaiButton, UaiInput, UaiThemeProvider } from 'blip-ds-react/dist/components';
import 'blip-tokens/uai-icons/css';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sentTo, setSentTo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSentTo(email);
  };

  return (
    <UaiThemeProvider theme="light">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' }}>
        <UaiInput
          label="E-mail"
          name="email"
          type="email"
          placeholder="nome@empresa.com"
          helperMessage="Enviaremos as novidades para este e-mail."
          value={email}
          required
          requiredErrorMessage="Informe o e-mail."
          emailErrorMessage="Informe um e-mail válido."
          onUaiChange={(event) => setEmail(event.detail.value)}
        />
        <UaiButton type="submit">Assinar</UaiButton>
        {sentTo && <span>Inscrição feita para {sentTo}.</span>}
      </form>
    </UaiThemeProvider>
  );
}`;

/**
 * Exemplo completo em React: campo controlado com validação nativa dentro de um formulário.
 */
export const Usage = () => {
  const [email, setEmail] = useState('');
  const [sentTo, setSentTo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSentTo(email);
  };

  return (
    <form onSubmit={handleSubmit} style={column}>
      <UaiInput
        label="E-mail"
        name="email"
        type="email"
        placeholder="nome@empresa.com"
        helperMessage="Enviaremos as novidades para este e-mail."
        value={email}
        required
        requiredErrorMessage="Informe o e-mail."
        emailErrorMessage="Informe um e-mail válido."
        onUaiChange={(event) => setEmail(event.detail.value)}
      />
      <UaiButton type="submit">Assinar</UaiButton>
      {sentTo && <span style={caption}>Inscrição feita para {sentTo}.</span>}
    </form>
  );
};

Usage.parameters = {
  docs: { source: { code: usageSource, language: 'jsx' } },
};
