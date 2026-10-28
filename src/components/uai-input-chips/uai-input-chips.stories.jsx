import React, { useRef, useState } from 'react';
import { UaiButton, UaiInputChips, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-input-chips.mdx';

export default {
  title: 'UAI/Input Chips',
  component: UaiInputChips,
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
export const Playground = (args) => <UaiInputChips {...args} />;

Playground.args = {
  label: 'Tags',
  'aria-label': '',
  chips: ['design', 'produto'],
  value: '',
  type: 'text',
  placeholder: 'Digite e pressione Enter',
  size: 'medium',
  language: 'pt_BR',
  duplicated: false,
  blurCreation: false,
  helperMessage: 'Separe as tags por vírgula, ponto e vírgula ou Enter.',
  errorMessage: 'Revise as tags.',
  successMessage: 'Tags salvas.',
  emailErrorMessage: '',
  requiredErrorMessage: 'Adicione pelo menos uma tag.',
  maxlength: undefined,
  maxChipsLength: undefined,
  counterLength: false,
  icon: '',
  danger: false,
  success: false,
  disabled: false,
  readonly: false,
  required: false,
};

Playground.argTypes = {
  label: {
    description: 'Rótulo acima do campo. Não há rótulo padrão: sem `label`, informe `aria-label`.',
    control: 'text',
  },
  'aria-label': {
    description: 'Nome acessível quando não há `label` visível ou quando o contexto pede um texto mais específico.',
    control: 'text',
  },
  chips: {
    description: 'Chips do campo, como array ou JSON de array (`\'["ana", "bia"]\'`).',
    control: 'object',
  },
  value: { description: 'Texto digitado que ainda não virou chip.', control: 'text' },
  type: {
    table: { defaultValue: { summary: 'text' } },
    description: 'Com `email`, chips que não são e-mail ficam com estilo de erro e o campo fica inválido.',
    options: ['text', 'email'],
    control: { type: 'select' },
  },
  placeholder: { description: 'Texto de exemplo no campo de digitação.', control: 'text' },
  size: {
    table: { defaultValue: { summary: 'medium' } },
    description: 'Altura mínima do campo. O campo cresce quando os chips quebram linha.',
    options: ['short', 'medium'],
    control: { type: 'select' },
  },
  language: {
    table: { defaultValue: { summary: 'pt_BR' } },
    description: 'Idioma dos textos padrão (nome do botão de remover e mensagens de e-mail e obrigatório).',
    options: ['pt_BR', 'en_US', 'es_ES'],
    control: { type: 'select' },
  },
  delimiters: {
    table: { defaultValue: { summary: '/,|;/' } },
    description: 'Expressão regular que separa o texto digitado ou colado em vários chips.',
    control: false,
  },
  duplicated: { description: 'Permite chips repetidos (sem diferenciar maiúsculas).', control: 'boolean' },
  blurCreation: { description: 'Cria o chip com o texto digitado ao sair do campo.', control: 'boolean' },
  helperMessage: { description: 'Mensagem de ajuda abaixo do campo.', control: 'text' },
  errorMessage: { description: 'Mensagem exibida com `danger`.', control: 'text' },
  successMessage: { description: 'Mensagem exibida com `success`.', control: 'text' },
  emailErrorMessage: {
    description: 'Mensagem com `type="email"` e algum chip inválido. Sem valor, usa o texto padrão do idioma.',
    control: 'text',
  },
  requiredErrorMessage: {
    description: 'Mensagem com `required` e sem chips. Sem valor, usa o texto padrão do idioma.',
    control: 'text',
  },
  maxlength: { description: 'Quantidade máxima de caracteres no campo de digitação.', control: 'number' },
  maxChipsLength: {
    description: 'Quantidade máxima de chips. Ao atingir, o campo de digitação some.',
    control: 'number',
  },
  counterLength: { description: 'Mostra a contagem `chips/máximo` (use com `maxChipsLength`).', control: 'boolean' },
  icon: { description: 'Nome de um UaiIcon exibido antes dos chips.', control: 'text' },
  danger: { description: 'Estado de erro. Tem prioridade sobre `success`.', control: 'boolean' },
  success: { description: 'Estado de sucesso.', control: 'boolean' },
  disabled: { description: 'Desabilita o campo, esconde a remoção e tira os chips do formulário.', control: 'boolean' },
  readonly: { description: 'Mostra os chips sem permitir adicionar nem remover.', control: 'boolean' },
  required: { description: 'Bloqueia o envio do formulário sem nenhum chip.', control: 'boolean' },
  name: { description: 'Nome no formulário. Cada chip é enviado como uma entrada.', control: 'text' },
  inputName: { description: 'Nome legado no formulário, igual a `name`.', control: 'text' },
  dataTest: { description: 'Valor de `data-test` no campo, para testes automatizados.', control: 'text' },
  dtButtonClose: { description: 'Valor de `data-test` em cada botão de remover.', control: 'text' },
  height: {
    table: { category: 'deprecated' },
    description: 'Deprecated e sem efeito: o campo cresce com os chips a partir de `size`.',
    control: false,
  },
  maxHeight: {
    table: { category: 'deprecated' },
    description: 'Deprecated e sem efeito: o campo cresce com os chips a partir de `size`.',
    control: false,
  },
  disableSubmit: {
    table: { category: 'deprecated' },
    description: 'Deprecated e sem efeito, como no legado.',
    control: false,
  },
};

/**
 * Estados do campo, nos dois temas.
 */
export const States = () => (
  <div style={grid}>
    <UaiInputChips label="Vazio" placeholder="Digite e pressione Enter" helperMessage="Mensagem de ajuda" />
    <UaiInputChips label="Preenchido" chips={['design', 'produto']} helperMessage="Mensagem de ajuda" />
    <UaiInputChips label="Erro" chips={['design', 'produto']} danger errorMessage="Revise as tags." />
    <UaiInputChips label="Sucesso" chips={['design', 'produto']} success successMessage="Tags salvas." />
    <UaiInputChips label="Desabilitado" chips={['design', 'produto']} disabled helperMessage="Mensagem de ajuda" />
    <UaiInputChips label="Somente leitura" chips={['design', 'produto']} readonly helperMessage="Mensagem de ajuda" />
  </div>
);

/**
 * Tamanhos `short` e `medium` (padrão). O tamanho é a altura mínima: com mais chips, o campo cresce.
 */
export const Sizes = () => (
  <div style={column}>
    {['short', 'medium'].map((size) => (
      <div key={size} style={column}>
        <div style={caption}>size="{size}"</div>
        <UaiInputChips size={size} label="Tags" chips={['design']} />
        <UaiInputChips
          size={size}
          label="Muitas tags"
          chips={['design', 'produto', 'pesquisa', 'conteúdo', 'engenharia', 'dados', 'atendimento', 'vendas']}
        />
      </div>
    ))}
  </div>
);

/**
 * Com `type="email"`, chips que não são e-mail ficam com estilo de erro. Saia do campo para ver a mensagem.
 */
export const Email = () => {
  const field = useRef(null);
  const [valid, setValid] = useState(null);
  return (
    <div style={column}>
      <UaiInputChips
        ref={field}
        type="email"
        label="Convidados"
        chips={['ana@blip.ai', 'bia']}
        emailErrorMessage="Revise os e-mails destacados."
        helperMessage="Separe os e-mails por vírgula ou ponto e vírgula."
      />
      <div style={row}>
        <UaiButton variant="outline" color="content" onUaiClick={async () => setValid(await field.current.isValid())}>
          Verificar com isValid()
        </UaiButton>
      </div>
      <div style={caption}>{valid === null ? 'Nada verificado ainda.' : `isValid(): ${valid}`}</div>
    </div>
  );
};

/**
 * `maxChipsLength` limita a quantidade de chips e `counterLength` mostra a contagem. Ao atingir o limite, o campo de
 * digitação some e `uaiExtendedQuantityInput` é emitido.
 */
export const Limit = () => {
  const [full, setFull] = useState(false);
  return (
    <div style={column}>
      <UaiInputChips
        label="Até três tags"
        chips={['design']}
        maxChipsLength={3}
        counterLength
        helperMessage="Escolha até três tags."
        onUaiExtendedQuantityInput={(event) => setFull(event.detail.value)}
      />
      <div style={caption}>{full ? 'Limite atingido.' : 'Ainda cabem tags.'}</div>
    </div>
  );
};

/**
 * Formulário nativo: com `name`, cada chip é enviado como uma entrada (`FormData.getAll`). Sem chips, nada é enviado.
 * O reset volta aos chips iniciais.
 */
export const Form = () => {
  const [sent, setSent] = useState(null);
  return (
    <form
      style={column}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(JSON.stringify(new FormData(event.currentTarget).getAll('tags')));
      }}
    >
      <UaiInputChips
        name="tags"
        label="Tags"
        chips={['design', 'produto']}
        required
        requiredErrorMessage="Adicione pelo menos uma tag."
      />
      <div style={row}>
        <UaiButton type="submit">Enviar</UaiButton>
        <UaiButton type="reset" variant="outline" color="content">
          Restaurar
        </UaiButton>
      </div>
      <div style={caption}>{sent ? `getAll('tags'): ${sent}` : 'Nada enviado ainda.'}</div>
    </form>
  );
};

/**
 * Eventos emitidos ao digitar, criar, remover, focar e sair, e os métodos `add()`, `get()` e `clear()`.
 */
export const Events = () => {
  const field = useRef(null);
  const [log, setLog] = useState([]);
  const push = (entry) => setLog((items) => [entry, ...items].slice(0, 8));
  const add = (name) => (event) => {
    const { detail } = event;
    let text = '';
    if (Array.isArray(detail)) text = `: ${JSON.stringify(detail)}`;
    else if (detail && detail.data) text = `: ${JSON.stringify(detail.data)}`;
    else if (detail && detail.value !== undefined) text = `: ${JSON.stringify(detail.value)}`;
    push(`${name}${text}`);
  };
  return (
    <div style={column}>
      <UaiInputChips
        ref={field}
        label="Tags"
        maxChipsLength={4}
        onUaiChange={add('uaiChange')}
        onUaiChangeChips={add('uaiChangeChips')}
        onUaiInputChipsFocus={add('uaiInputChipsFocus')}
        onUaiBlur={add('uaiBlur')}
        onUaiInputChipsInput={add('uaiInputChipsInput')}
        onUaiExtendedQuantityInput={add('uaiExtendedQuantityInput')}
        onUaiSubmit={add('uaiSubmit')}
      />
      <div style={row}>
        <UaiButton variant="outline" color="content" onUaiClick={() => field.current.add('carla')}>
          add(&apos;carla&apos;)
        </UaiButton>
        <UaiButton
          variant="outline"
          color="content"
          onUaiClick={async () => push(`get(): ${JSON.stringify(await field.current.get())}`)}
        >
          get()
        </UaiButton>
        <UaiButton variant="text" color="content" onUaiClick={() => field.current.clear()}>
          clear()
        </UaiButton>
      </div>
      <div style={caption}>
        {log.length ? log.map((item, index) => <div key={index}>{item}</div>) : 'Nenhum evento ainda.'}
      </div>
    </div>
  );
};

const usageSource = `import React, { useState } from 'react';
import { UaiButton, UaiInputChips, UaiThemeProvider } from 'blip-ds-react/dist/components';
import 'blip-tokens/uai-icons/css';

export function InviteForm() {
  const [emails, setEmails] = useState([]);
  const [sent, setSent] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(new FormData(event.currentTarget).getAll('emails'));
  };

  return (
    <UaiThemeProvider theme="light">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' }}>
        <UaiInputChips
          type="email"
          name="emails"
          label="Convidar pessoas"
          placeholder="nome@empresa.com"
          helperMessage="Separe os e-mails por vírgula ou pressione Enter."
          chips={emails}
          required
          requiredErrorMessage="Adicione pelo menos um e-mail."
          emailErrorMessage="Revise os e-mails destacados."
          onUaiChangeChips={(event) => setEmails([...event.detail.data])}
        />
        <UaiButton type="submit">Enviar convites</UaiButton>
        {sent.length > 0 && <span>Convites para: {sent.join(', ')}</span>}
      </form>
    </UaiThemeProvider>
  );
}`;

/**
 * Convite de pessoas por e-mail, com os chips controlados por estado. Cada e-mail é enviado como uma entrada de
 * `emails` (`FormData.getAll`).
 */
export const Usage = () => {
  const [emails, setEmails] = useState([]);
  const [sent, setSent] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(new FormData(event.currentTarget).getAll('emails'));
  };

  return (
    <form onSubmit={handleSubmit} style={column}>
      <UaiInputChips
        type="email"
        name="emails"
        label="Convidar pessoas"
        placeholder="nome@empresa.com"
        helperMessage="Separe os e-mails por vírgula ou pressione Enter."
        chips={emails}
        required
        requiredErrorMessage="Adicione pelo menos um e-mail."
        emailErrorMessage="Revise os e-mails destacados."
        onUaiChangeChips={(event) => setEmails([...event.detail.data])}
      />
      <UaiButton type="submit">Enviar convites</UaiButton>
      {sent.length > 0 && <span style={caption}>Convites para: {sent.join(', ')}</span>}
    </form>
  );
};

Usage.parameters = {
  docs: { source: { code: usageSource, language: 'jsx' } },
};
