import React, { useEffect, useRef, useState } from 'react';
import { UaiButton, UaiInputEditable, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-input-editable.mdx';

export default {
  title: 'UAI/Input Editable',
  component: UaiInputEditable,
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
const row = { display: 'flex', flexWrap: 'wrap', gap: 'var(--uai-spacing-xs)' };
const caption = {
  fontFamily: 'monospace',
  fontSize: 'var(--uai-caption-font-size)',
  color: 'var(--uai-content-secondary)',
};

// Editing is internal state: the field always starts in reading mode and `edit()` opens the editing mode.
// The examples open in editing mode without keeping the focus, so the docs page does not jump to them.
const useEditOnMount = () => {
  const field = useRef(null);
  useEffect(() => {
    const scroll = { x: window.scrollX, y: window.scrollY };
    customElements
      .whenDefined('uai-input-editable')
      .then(() => field.current && field.current.edit())
      .then(() =>
        requestAnimationFrame(() => {
          field.current?.shadowRoot?.activeElement?.blur();
          window.scrollTo(scroll.x, scroll.y);
        }),
      );
  }, []);
  return field;
};

const EditingField = (props) => {
  const field = useEditOnMount();
  return <UaiInputEditable ref={field} {...props} />;
};

/**
 * Teste todas as propriedades.
 */
export const Playground = (args) => <UaiInputEditable {...args} />;

Playground.args = {
  value: 'Projeto Alfa',
  label: 'Nome do projeto',
  'aria-label': '',
  placeholder: 'Digite o nome do projeto',
  size: 'standard',
  language: 'pt_BR',
  minlength: 3,
  maxlength: 40,
  helperMessage: 'Use até 40 caracteres.',
  errorMessage: 'Revise o nome.',
  successMessage: 'Nome salvo.',
  requiredErrorMessage: 'Informe o nome do projeto.',
  minlengthErrorMessage: 'Use pelo menos 3 caracteres.',
  danger: false,
  success: false,
  disabled: false,
};

Playground.argTypes = {
  value: { description: 'Valor salvo, exibido no modo de leitura.', control: 'text' },
  label: {
    description: 'Rótulo do campo. Também compõe o nome do botão de editar (`"Editar <label>"`).',
    control: 'text',
  },
  'aria-label': {
    description: 'Nome acessível quando não há `label` visível ou quando o contexto pede um texto mais específico.',
    control: 'text',
  },
  placeholder: { description: 'Texto de exemplo no campo em edição.', control: 'text' },
  size: {
    table: { defaultValue: { summary: 'standard' } },
    description: 'Altura do campo. `medium` é sinônimo de `standard`. A fonte é sempre `body/base`.',
    options: ['short', 'standard', 'tall'],
    control: { type: 'select' },
  },
  language: {
    table: { defaultValue: { summary: 'pt_BR' } },
    description: 'Idioma dos textos padrão (nomes dos botões e mensagens de obrigatório e mínimo).',
    options: ['pt_BR', 'en_US', 'es_ES'],
    control: { type: 'select' },
  },
  minlength: { description: 'Quantidade mínima de caracteres para salvar.', control: 'number' },
  maxlength: { description: 'Quantidade máxima de caracteres no campo em edição.', control: 'number' },
  helperMessage: { description: 'Mensagem de ajuda abaixo do campo.', control: 'text' },
  errorMessage: { description: 'Mensagem exibida com `danger`.', control: 'text' },
  successMessage: { description: 'Mensagem exibida com `success`.', control: 'text' },
  requiredErrorMessage: {
    description: 'Mensagem ao tentar salvar vazio. Sem valor, usa o texto padrão do idioma.',
    control: 'text',
  },
  minlengthErrorMessage: {
    description:
      'Mensagem ao tentar salvar com menos de `minlength` caracteres. Sem valor, usa o texto padrão do idioma.',
    control: 'text',
  },
  danger: { description: 'Estado de erro. Tem prioridade sobre `success` e impede salvar.', control: 'boolean' },
  success: { description: 'Estado de sucesso.', control: 'boolean' },
  disabled: {
    description: 'Desabilita o campo, esconde o botão de editar e tira o valor do formulário.',
    control: 'boolean',
  },
  name: { description: 'Nome no formulário. Só o valor salvo é enviado.', control: 'text' },
  inputName: { description: 'Nome legado no formulário, igual a `name`.', control: 'text' },
  dataTest: { description: 'Valor de `data-test` no campo, para testes automatizados.', control: 'text' },
  dtButtonEdit: { description: 'Valor de `data-test` no botão de editar.', control: 'text' },
  dtButtonConfirm: { description: 'Valor de `data-test` no botão de salvar.', control: 'text' },
  dtButtonClose: { description: 'Valor de `data-test` no botão de cancelar.', control: 'text' },
  expand: {
    table: { category: 'deprecated' },
    description: 'Deprecated e sem efeito: o campo ocupa a largura do contêiner.',
    control: false,
  },
};

const usageSource = `import React, { useState } from 'react';
import { UaiInputEditable, UaiThemeProvider } from 'blip-ds-react/dist/components';
import 'blip-tokens/uai-icons/css';

export function ProjectTitle() {
  const [title, setTitle] = useState('Projeto Alfa');
  const [saved, setSaved] = useState('');

  const handleSave = (event) => {
    setTitle(event.detail.value);
    setSaved(event.detail.value);
  };

  return (
    <UaiThemeProvider theme="light">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' }}>
        <UaiInputEditable
          label="Nome do projeto"
          value={title}
          minlength={3}
          maxlength={40}
          helperMessage="Use entre 3 e 40 caracteres."
          requiredErrorMessage="Informe o nome do projeto."
          minlengthErrorMessage="Use pelo menos 3 caracteres."
          onUaiInputEditableSave={handleSave}
        />
        {saved && <span>Salvo: {saved}</span>}
      </div>
    </UaiThemeProvider>
  );
}`;

/**
 * Renomear um projeto, com o valor controlado por estado. Ao salvar, o estado recebe o valor novo.
 */
export const Usage = () => {
  const [title, setTitle] = useState('Projeto Alfa');
  const [saved, setSaved] = useState('');

  const handleSave = (event) => {
    setTitle(event.detail.value);
    setSaved(event.detail.value);
  };

  return (
    <div style={column}>
      <UaiInputEditable
        label="Nome do projeto"
        value={title}
        minlength={3}
        maxlength={40}
        helperMessage="Use entre 3 e 40 caracteres."
        requiredErrorMessage="Informe o nome do projeto."
        minlengthErrorMessage="Use pelo menos 3 caracteres."
        onUaiInputEditableSave={handleSave}
      />
      {saved && <span style={caption}>Salvo: {saved}</span>}
    </div>
  );
};

Usage.parameters = {
  docs: { source: { code: usageSource, language: 'jsx' } },
};

/**
 * Leitura e edição com feedback padrão, de erro e de sucesso, e o campo desabilitado. Os campos em edição são
 * abertos com `edit()`.
 */
export const States = () => (
  <div style={column}>
    <div style={caption}>Leitura</div>
    <div style={grid}>
      <UaiInputEditable label="Padrão" value="Projeto Alfa" helperMessage="Mensagem de ajuda" />
      <UaiInputEditable label="Erro" value="Projeto Alfa" danger errorMessage="Revise o nome." />
      <UaiInputEditable label="Sucesso" value="Projeto Alfa" success successMessage="Nome salvo." />
      <UaiInputEditable label="Desabilitado" value="Projeto Alfa" disabled helperMessage="Mensagem de ajuda" />
    </div>
    <div style={caption}>Edição</div>
    <div style={grid}>
      <EditingField label="Padrão" value="Projeto Alfa" helperMessage="Mensagem de ajuda" />
      <EditingField label="Erro" value="Projeto Alfa" danger errorMessage="Revise o nome." />
      <EditingField label="Sucesso" value="Projeto Alfa" success successMessage="Nome salvo." />
    </div>
  </div>
);

/**
 * Tamanhos `short`, `standard` (padrão) e `tall`. O tamanho muda só a altura; a fonte é sempre `body/base`.
 */
export const Sizes = () => (
  <div style={column}>
    {['short', 'standard', 'tall'].map((size) => (
      <div key={size} style={column}>
        <div style={caption}>size="{size}"</div>
        <UaiInputEditable size={size} label="Nome do projeto" value="Projeto Alfa" />
      </div>
    ))}
  </div>
);

/**
 * O campo abre em edição com `ref.current.edit()`. Enter salva, Esc cancela e o foco volta ao botão de editar.
 */
export const Editing = () => {
  const field = useEditOnMount();
  return (
    <div style={column}>
      <UaiInputEditable
        ref={field}
        label="Nome do projeto"
        value="Projeto Alfa"
        helperMessage="Enter salva e Esc cancela."
      />
      <div style={row}>
        <UaiButton variant="outline" color="content" onUaiClick={() => field.current.edit()}>
          edit()
        </UaiButton>
      </div>
    </div>
  );
};

/**
 * Salvar é recusado com o campo vazio ou com menos de `minlength` caracteres: o campo continua em edição e mostra a
 * mensagem. Apague parte do texto e tente salvar.
 */
export const Validation = () => (
  <div style={column}>
    <UaiInputEditable
      label="Sigla do projeto"
      value="ALFA"
      minlength={3}
      maxlength={6}
      helperMessage="Use de 3 a 6 caracteres."
      requiredErrorMessage="Informe a sigla."
      minlengthErrorMessage="Use pelo menos 3 caracteres."
    />
  </div>
);

/**
 * Formulário nativo: com `name`, só o valor salvo é enviado; um rascunho em edição não entra no envio. O reset volta
 * ao valor inicial e sai da edição.
 */
export const Form = () => {
  const [sent, setSent] = useState(null);
  return (
    <form
      style={column}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(JSON.stringify(new FormData(event.currentTarget).get('title')));
      }}
    >
      <UaiInputEditable name="title" label="Nome do projeto" value="Projeto Alfa" />
      <div style={row}>
        <UaiButton type="submit">Enviar</UaiButton>
        <UaiButton type="reset" variant="outline" color="content">
          Restaurar
        </UaiButton>
      </div>
      <div style={caption}>{sent ? `get('title'): ${sent}` : 'Nada enviado ainda.'}</div>
    </form>
  );
};

/**
 * Eventos emitidos ao editar, digitar, salvar, cancelar, focar e sair, e os métodos `edit()`, `save()`, `cancel()` e
 * `setFocus()`.
 */
export const Events = () => {
  const field = useRef(null);
  const [log, setLog] = useState([]);
  const push = (entry) => setLog((items) => [entry, ...items].slice(0, 8));
  const add = (name) => (event) => {
    const { detail } = event;
    const text = detail && detail.value !== undefined ? `: ${JSON.stringify(detail)}` : '';
    push(`${name}${text}`);
  };
  return (
    <div style={column}>
      <UaiInputEditable
        ref={field}
        label="Nome do projeto"
        value="Projeto Alfa"
        onUaiInputEditableSave={add('uaiInputEditableSave')}
        onUaiChange={add('uaiChange')}
        onUaiInput={add('uaiInput')}
        onUaiCancel={add('uaiCancel')}
        onUaiFocus={add('uaiFocus')}
        onUaiBlur={add('uaiBlur')}
      />
      <div style={row}>
        <UaiButton variant="outline" color="content" onUaiClick={() => field.current.edit()}>
          edit()
        </UaiButton>
        <UaiButton variant="outline" color="content" onUaiClick={() => field.current.save()}>
          save()
        </UaiButton>
        <UaiButton variant="outline" color="content" onUaiClick={() => field.current.cancel()}>
          cancel()
        </UaiButton>
        <UaiButton variant="text" color="content" onUaiClick={() => field.current.setFocus()}>
          setFocus()
        </UaiButton>
      </div>
      <div style={caption}>
        {log.length ? log.map((item, index) => <div key={index}>{item}</div>) : 'Nenhum evento ainda.'}
      </div>
    </div>
  );
};
