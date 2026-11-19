import React, { useRef, useState } from 'react';
import { UaiButton, UaiRichText, UaiThemeProvider, UaiTypo } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-rich-text.mdx';
import colors from './uai-rich-text-colors.json';
import features from './uai-rich-text-features.json';

export default {
  title: 'UAI/Rich Text',
  component: UaiRichText,
  tags: ['autodocs'],
  parameters: { docs: { page: DocumentationTemplate } },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <Story />
      </UaiThemeProvider>
    ),
  ],
};

// Every feature on, as props: <UaiRichText {...ALL} />. Each feature is off by default.
const ALL = Object.fromEntries(features.groups.flat().map((feature) => [feature, true]));

const column = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--uai-spacing-md)',
  maxWidth: 'var(--uai-width-content)',
};

const PAGE = `
<h1>Central de ajuda</h1>
<p>Bem-vindo à <strong>central de ajuda</strong> do Blip. Aqui você encontra <em>respostas rápidas</em>, guias e
<a href="https://www.blip.ai">links úteis</a>. Textos podem ter <span style="color: ${colors.text[2].value}">cor</span> e
<span style="color: ${colors.text[0].value}; background-color: ${colors.highlight[2].value}">destaque</span>.</p>
<h2>Primeiros passos</h2>
<ol><li><p>Crie o seu bot.</p></li><li><p>Conecte um canal.</p></li><li><p>Publique.</p></li></ol>
<blockquote><p>Dica: use <code>Ctrl + Z</code> para desfazer.</p></blockquote>
<h3>Planos</h3>
<table><tbody>
<tr><th><p>Plano</p></th><th><p>Mensagens</p></th><th><p>Suporte</p></th></tr>
<tr><td><p>Básico</p></td><td><p>10 mil</p></td><td><p>E-mail</p></td></tr>
<tr><td><p>Pro</p></td><td><p>100 mil</p></td><td><p>Chat</p></td></tr>
</tbody></table>
<p style="text-align: center">Texto centralizado.</p>
<img src="https://cdn.blip.ai/blip-tokens/2.6.0/logos/blip-chat.svg" alt="Logo do Blip Chat">
<hr>
<ul><li><p>Item de lista</p></li><li><p>Outro item</p></li></ul>
`;

export const Playground = (args) => <UaiRichText {...args} />;
Playground.args = {
  label: 'Conteúdo da página',
  helperMessage: 'Formate o texto com a barra de ferramentas.',
  placeholder: 'Escreva aqui...',
  value: PAGE,
  ...ALL,
  maxHeight: 480,
  disabled: false,
  readonly: false,
  required: false,
  danger: false,
};
Playground.argTypes = {
  value: { control: 'text' },
  ...Object.fromEntries(
    features.groups
      .flat()
      .map((feature) => [feature, { control: 'boolean', table: { defaultValue: { summary: 'false' } } }]),
  ),
};

export const Empty = () => <UaiRichText {...ALL} label="Descrição" placeholder="Escreva aqui..." />;

export const States = () => (
  <div style={column}>
    <UaiRichText {...ALL} label="Com erro" danger errorMessage="Revise o conteúdo." value="<p>Texto com erro.</p>" />
    <UaiRichText {...ALL} label="Com sucesso" success successMessage="Conteúdo salvo." value="<p>Texto salvo.</p>" />
    <UaiRichText {...ALL} label="Somente leitura" readonly value="<p>Este texto não pode ser editado.</p>" />
    <UaiRichText {...ALL} label="Desabilitado" disabled value="<p>Campo desabilitado.</p>" />
  </div>
);

export const SomeFeatures = () => (
  <div style={column}>
    <UaiRichText
      label="Texto básico e listas"
      bold
      italic
      underline
      bulletList
      orderedList
      value="<p>Só o que foi ligado aparece na barra.</p>"
    />
    <UaiRichText
      label="Sem formatação (nenhum recurso ligado)"
      value="<p>Sem barra: o campo só aceita texto em parágrafos.</p>"
    />
  </div>
);

export const InAForm = () => {
  const [submitted, setSubmitted] = useState('');
  return (
    <form
      style={column}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(String(new FormData(event.currentTarget).get('page') || ''));
      }}
    >
      <UaiRichText {...ALL} name="page" label="Conteúdo" required placeholder="Obrigatório" />
      <div>
        <UaiButton type="submit">Salvar</UaiButton>
      </div>
      <UaiTypo variant="body-sm">{submitted ? `Enviado: ${submitted}` : 'Nada enviado ainda.'}</UaiTypo>
    </form>
  );
};

export const Events = () => {
  const [last, setLast] = useState('nenhum');
  return (
    <div style={column}>
      <UaiRichText
        {...ALL}
        label="Eventos"
        value="<p>Edite e saia do campo.</p>"
        onUaiInput={() => setLast('uaiInput')}
        onUaiChange={(event) => setLast(`uaiChange: ${event.detail.value}`)}
      />
      <UaiTypo variant="body-sm">{`Último evento: ${last}`}</UaiTypo>
    </div>
  );
};

export const Methods = () => {
  const ref = useRef(null);
  const [html, setHtml] = useState('');
  return (
    <div style={column}>
      <UaiRichText {...ALL} ref={ref} label="Métodos" value="<p>Conteúdo inicial.</p>" />
      <div style={{ display: 'flex', gap: 'var(--uai-spacing-xs)' }}>
        <UaiButton variant="outline" onClick={async () => setHtml(await ref.current?.getContent())}>
          getContent()
        </UaiButton>
        <UaiButton variant="outline" onClick={() => ref.current?.clear()}>
          clear()
        </UaiButton>
        <UaiButton variant="outline" onClick={() => ref.current?.setFocus()}>
          setFocus()
        </UaiButton>
      </div>
      <UaiTypo variant="body-sm">{html || '—'}</UaiTypo>
    </div>
  );
};
