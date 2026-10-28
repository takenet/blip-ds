import React, { useState } from 'react';
import { UaiButton, UaiInputPassword, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-input-password.mdx';

export default {
  title: 'UAI/Input Password',
  component: UaiInputPassword,
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

export const Playground = (args) => <UaiInputPassword {...args} />;

Playground.args = {
  label: 'Senha',
  placeholder: 'Digite sua senha',
  helperMessage: 'Use a senha da sua conta.',
  errorMessage: 'Revise a senha informada.',
  successMessage: 'Senha confirmada.',
  size: 'medium',
  autoComplete: 'new-password',
  openEyes: false,
  showStrength: false,
  strengthLevel: 'none',
  danger: false,
  success: false,
  disabled: false,
  readonly: false,
  required: false,
  maxlength: 128,
  minlength: 8,
};

Playground.argTypes = {
  label: { description: 'Rótulo acima do campo.', control: 'text' },
  placeholder: { description: 'Exemplo do texto esperado. Não substitui o rótulo.', control: 'text' },
  helperMessage: { description: 'Mensagem de ajuda abaixo do campo.', control: 'text' },
  errorMessage: { description: 'Mensagem exibida com `danger`.', control: 'text' },
  successMessage: { description: 'Mensagem exibida com `success`.', control: 'text' },
  size: {
    description: 'Altura do campo, compartilhada com os outros inputs UAI.',
    options: ['short', 'medium'],
    control: { type: 'select' },
  },
  autoComplete: {
    description: 'Dica de preenchimento automático, usada quando a senha está revelada.',
    options: ['off', 'current-password', 'new-password'],
    control: { type: 'select' },
  },
  openEyes: { description: 'Controla se a senha está visível.', control: 'boolean' },
  showStrength: { description: 'Mostra o indicador de força informado pelo consumidor.', control: 'boolean' },
  strengthLevel: {
    description: 'Nível visual informado pelo consumidor; não é calculado pelo componente.',
    options: ['none', 'low', 'medium', 'high'],
    control: { type: 'select' },
  },
  danger: { description: 'Estado de erro. Tem prioridade sobre `success`.', control: 'boolean' },
  success: { description: 'Estado de sucesso.', control: 'boolean' },
  disabled: { description: 'Desabilita o campo e o remove do formulário.', control: 'boolean' },
  readonly: { description: 'Permite selecionar e copiar, sem editar.', control: 'boolean' },
  required: { description: 'Bloqueia o envio do formulário com o campo vazio.', control: 'boolean' },
  minlength: { description: 'Quantidade mínima de caracteres.', control: 'number' },
  maxlength: { description: 'Quantidade máxima de caracteres.', control: 'number' },
};

export const States = () => (
  <div style={grid}>
    <UaiInputPassword label="Padrão" placeholder="Digite sua senha" helperMessage="Mensagem de ajuda" />
    <UaiInputPassword label="Preenchido" value="example-password" helperMessage="Mensagem de ajuda" />
    <UaiInputPassword label="Erro" value="example-password" danger errorMessage="Revise a senha informada." />
    <UaiInputPassword label="Sucesso" value="example-password" success successMessage="Senha confirmada." />
    <UaiInputPassword label="Desabilitado" value="example-password" disabled helperMessage="Mensagem de ajuda" />
    <UaiInputPassword label="Somente leitura" value="example-password" readonly helperMessage="Mensagem de ajuda" />
  </div>
);

export const Sizes = () => (
  <div style={column}>
    <UaiInputPassword label="Curta" size="short" placeholder="Campo curto" />
    <UaiInputPassword label="Média" size="medium" placeholder="Campo médio" />
  </div>
);

export const StrengthLevels = () => (
  <div style={grid}>
    {[
      ['none', 'Não informada'],
      ['low', 'Baixa'],
      ['medium', 'Média'],
      ['high', 'Alta'],
    ].map(([strengthLevel, description]) => (
      <div key={strengthLevel}>
        <div style={caption}>{description}</div>
        <UaiInputPassword
          label="Senha"
          value="example-password"
          showStrength
          strengthLevel={strengthLevel}
        />
      </div>
    ))}
  </div>
);

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
      <UaiInputPassword
        label="Senha"
        name="password"
        required
        minlength={8}
        requiredErrorMessage="Informe a senha."
        minlengthErrorMessage="Use pelo menos 8 caracteres."
        helperMessage="Use a senha da sua conta."
        autoComplete="new-password"
      />
      <UaiInputPassword label="Confirmação" inputName="confirmation" autoComplete="new-password" />
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
      <UaiInputPassword
        label="Senha"
        placeholder="Digite e pressione Enter"
        onUaiInputPasswordChange={add('uaiInputPasswordChange')}
        onUaiInputPasswordFocus={add('uaiInputPasswordFocus')}
        onUaiInputPasswordBlur={add('uaiInputPasswordBlur')}
        onUaiInputPasswordSubmit={add('uaiInputPasswordSubmit')}
      />
      <div style={caption}>
        {log.length ? log.map((item, index) => <div key={index}>{item}</div>) : 'Nenhum evento ainda.'}
      </div>
    </div>
  );
};

const usageSource = `import React, { useState } from 'react';
import { UaiButton, UaiInputPassword, UaiThemeProvider } from 'blip-ds-react/dist/components';
import 'blip-tokens/uai-icons/css';

// O componente não calcula a força: use a regra de senha do seu produto.
const getStrength = (password) => {
  if (!password) return 'none';
  if (password.length < 8) return 'low';
  if (password.length < 12) return 'medium';
  return 'high';
};

export function NewPasswordForm() {
  const [password, setPassword] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <UaiThemeProvider theme="light">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' }}>
        <UaiInputPassword
          label="Nova senha"
          name="password"
          autoComplete="new-password"
          helperMessage="Use pelo menos 8 caracteres."
          value={password}
          required
          minlength={8}
          requiredErrorMessage="Informe a senha."
          minlengthErrorMessage="Use pelo menos 8 caracteres."
          showStrength
          strengthLevel={getStrength(password)}
          onUaiInputPasswordChange={(event) => setPassword(event.detail.value)}
        />
        <UaiButton type="submit">Salvar senha</UaiButton>
        {saved && <span>Senha salva.</span>}
      </form>
    </UaiThemeProvider>
  );
}`;

// Same illustrative rule shown in the usage code; the component never evaluates the password.
const getStrength = (password) => {
  if (!password) return 'none';
  if (password.length < 8) return 'low';
  if (password.length < 12) return 'medium';
  return 'high';
};

/**
 * Exemplo completo em React: senha controlada com indicador de força calculado pelo consumidor.
 */
export const Usage = () => {
  const [password, setPassword] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <form onSubmit={handleSubmit} style={column}>
      <UaiInputPassword
        label="Nova senha"
        name="password"
        autoComplete="new-password"
        helperMessage="Use pelo menos 8 caracteres."
        value={password}
        required
        minlength={8}
        requiredErrorMessage="Informe a senha."
        minlengthErrorMessage="Use pelo menos 8 caracteres."
        showStrength
        strengthLevel={getStrength(password)}
        onUaiInputPasswordChange={(event) => setPassword(event.detail.value)}
      />
      <UaiButton type="submit">Salvar senha</UaiButton>
      {saved && <span style={caption}>Senha salva.</span>}
    </form>
  );
};

Usage.parameters = {
  docs: { source: { code: usageSource, language: 'jsx' } },
};
