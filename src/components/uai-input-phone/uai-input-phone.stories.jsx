import React, { useRef, useState } from 'react';
import { UaiButton, UaiInputPhone, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-input-phone.mdx';

export default {
  title: 'UAI/Input Phone',
  component: UaiInputPhone,
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
export const Playground = (args) => <UaiInputPhone {...args} />;

Playground.args = {
  label: '',
  text: '',
  value: '+55',
  language: 'pt_BR',
  placeholder: '11 99999-0000',
  size: 'medium',
  helperMessage: 'Informe o número com DDD.',
  errorMessage: 'Informe um número válido.',
  successMessage: 'Número confirmado.',
  requiredErrorMessage: 'Informe o telefone.',
  numberErrorMessage: 'Use apenas números, espaços e os caracteres + - ( ) .',
  icon: '',
  danger: false,
  success: false,
  disabled: false,
  readonly: false,
  required: false,
};

Playground.argTypes = {
  label: {
    description: 'Rótulo acima do campo. Sem valor, usa o texto padrão do idioma ("Telefone").',
    control: 'text',
  },
  text: { description: 'Número digitado, sem o código do país e sem máscara.', control: 'text' },
  value: {
    table: { defaultValue: { summary: '+55' } },
    description: 'Código discável do país selecionado, como `+55` ou `+1`.',
    control: 'text',
  },
  language: {
    table: { defaultValue: { summary: 'pt_BR' } },
    description: 'Idioma da lista de países e dos textos padrão.',
    options: ['pt_BR', 'en_US', 'es_ES'],
    control: { type: 'select' },
  },
  placeholder: { description: 'Exemplo do número esperado. Não substitui o rótulo.', control: 'text' },
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
  numberErrorMessage: { description: 'Mensagem quando o número tem caracteres inválidos.', control: 'text' },
  icon: { description: 'Nome de um UaiIcon exibido antes do prefixo.', control: 'text' },
  danger: { description: 'Estado de erro. Tem prioridade sobre `success`.', control: 'boolean' },
  success: { description: 'Estado de sucesso.', control: 'boolean' },
  disabled: { description: 'Desabilita o campo e o prefixo e remove o valor do formulário.', control: 'boolean' },
  readonly: { description: 'Permite selecionar e copiar, sem editar nem trocar o país.', control: 'boolean' },
  required: { description: 'Bloqueia o envio do formulário com o número vazio.', control: 'boolean' },
};

/**
 * Estados do campo, nos dois temas.
 */
export const States = () => (
  <div style={grid}>
    <UaiInputPhone label="Padrão" placeholder="11 99999-0000" helperMessage="Mensagem de ajuda" />
    <UaiInputPhone label="Preenchido" text="11 99999-0000" helperMessage="Mensagem de ajuda" />
    <UaiInputPhone label="Erro" text="11 9999" danger errorMessage="Informe um número válido." />
    <UaiInputPhone label="Sucesso" text="11 99999-0000" success successMessage="Número confirmado." />
    <UaiInputPhone label="Desabilitado" text="11 99999-0000" disabled helperMessage="Mensagem de ajuda" />
    <UaiInputPhone label="Somente leitura" text="11 99999-0000" readonly helperMessage="Mensagem de ajuda" />
  </div>
);

/**
 * O foco aparece no contorno do campo. Use o botão para focar o campo por código (`setFocus()`).
 */
export const Focus = () => {
  const field = useRef(null);
  return (
    <div style={column}>
      <UaiInputPhone ref={field} label="Foco" text="11 99999-0000" helperMessage="Mensagem de ajuda" />
      <div style={row}>
        <UaiButton variant="outline" color="content" onUaiClick={() => field.current.setFocus()}>
          Focar o campo
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
        <UaiInputPhone size={size} label="Telefone" placeholder="11 99999-0000" />
      </div>
    ))}
  </div>
);

/**
 * Seletor de país: o prefixo abre a lista de países. `changeCountry()` troca o país por código.
 * Países sem bandeira publicada mostram só o código.
 */
export const Countries = () => {
  const field = useRef(null);
  return (
    <div style={grid}>
      <div style={column}>
        <UaiInputPhone ref={field} label="Telefone" placeholder="Número" />
        <div style={row}>
          <UaiButton
            variant="outline"
            color="content"
            size="short"
            onUaiClick={() => field.current.changeCountry('+1', 'US / USA', 'united-states-flag')}
          >
            Estados Unidos
          </UaiButton>
          <UaiButton
            variant="outline"
            color="content"
            size="short"
            onUaiClick={() => field.current.changeCountry('+55', 'BR / BRA', 'brazil-flag')}
          >
            Brasil
          </UaiButton>
        </div>
      </div>
      <UaiInputPhone label="Sem bandeira publicada" value="+298" text="123456" />
    </div>
  );
};

/**
 * Textos padrão nos três idiomas, sem `label`.
 */
export const Languages = () => (
  <div style={grid}>
    {['pt_BR', 'en_US', 'es_ES'].map((language) => (
      <div key={language}>
        <div style={caption}>language="{language}"</div>
        <UaiInputPhone language={language} placeholder="11 99999-0000" />
      </div>
    ))}
  </div>
);

/**
 * Formulário nativo: com `name`, envia uma entrada "<código> <número>". O reset volta ao número e código iniciais.
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
      <UaiInputPhone
        name="phone"
        text="11 99999-0000"
        required
        requiredErrorMessage="Informe o telefone."
        numberErrorMessage="Use apenas números, espaços e os caracteres + - ( ) ."
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
 * Eventos emitidos ao digitar, trocar o país, fechar a lista, focar e sair.
 */
export const Events = () => {
  const [log, setLog] = useState([]);
  const add = (name) => (event) => {
    const detail =
      event.detail && event.detail.code !== undefined ? `: ${event.detail.code} ${event.detail.value}` : '';
    setLog((items) => [`${name}${detail}`, ...items].slice(0, 6));
  };
  return (
    <div style={column}>
      <UaiInputPhone
        label="Telefone"
        placeholder="Digite ou troque o país"
        onUaiPhoneNumberChange={add('uaiPhoneNumberChange')}
        onUaiInput={add('uaiInput')}
        onUaiCancel={add('uaiCancel')}
        onUaiFocus={add('uaiFocus')}
        onUaiBlur={add('uaiBlur')}
      />
      <div style={caption}>
        {log.length ? log.map((item, index) => <div key={index}>{item}</div>) : 'Nenhum evento ainda.'}
      </div>
    </div>
  );
};

const usageSource = `import React, { useState } from 'react';
import { UaiButton, UaiInputPhone, UaiThemeProvider } from 'blip-ds-react/dist/components';
import 'blip-tokens/uai-icons/css';

export function ContactForm() {
  const [phone, setPhone] = useState({ code: '+55', value: '' });
  const [sent, setSent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(new FormData(event.currentTarget).get('phone'));
  };

  return (
    <UaiThemeProvider theme="light">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' }}>
        <UaiInputPhone
          name="phone"
          label="Celular"
          placeholder="11 99999-0000"
          helperMessage="Usaremos este número para falar com você."
          value={phone.code}
          text={phone.value}
          required
          requiredErrorMessage="Informe o celular."
          numberErrorMessage="Use apenas números, espaços e + - ( ) ."
          onUaiPhoneNumberChange={(event) => setPhone(event.detail)}
        />
        <UaiButton type="submit">Enviar</UaiButton>
        {sent && <span>Enviado: {sent}</span>}
      </form>
    </UaiThemeProvider>
  );
}`;

/**
 * Formulário de contato com o telefone controlado por estado. O valor enviado é "<código> <número>".
 */
export const Usage = () => {
  const [phone, setPhone] = useState({ code: '+55', value: '' });
  const [sent, setSent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(new FormData(event.currentTarget).get('phone'));
  };

  return (
    <form onSubmit={handleSubmit} style={column}>
      <UaiInputPhone
        name="phone"
        label="Celular"
        placeholder="11 99999-0000"
        helperMessage="Usaremos este número para falar com você."
        value={phone.code}
        text={phone.value}
        required
        requiredErrorMessage="Informe o celular."
        numberErrorMessage="Use apenas números, espaços e + - ( ) ."
        onUaiPhoneNumberChange={(event) => setPhone(event.detail)}
      />
      <UaiButton type="submit">Enviar</UaiButton>
      {sent && <span style={caption}>Enviado: {sent}</span>}
    </form>
  );
};

Usage.parameters = {
  docs: { source: { code: usageSource, language: 'jsx' } },
};
