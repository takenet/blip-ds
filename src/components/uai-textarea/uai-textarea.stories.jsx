import React, { useState } from 'react';
import { UaiButton, UaiTextarea, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-textarea.mdx';

export default {
  title: 'UAI/Textarea',
  component: UaiTextarea,
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

export const Playground = (args) => <UaiTextarea {...args} />;

Playground.args = {
  label: 'Descrição',
  placeholder: 'Escreva aqui',
  helperMessage: 'Inclua os detalhes importantes.',
  errorMessage: 'Revise o conteúdo informado.',
  successMessage: 'Conteúdo confirmado.',
  size: 'medium',
  autoResize: true,
  resizable: false,
  danger: false,
  success: false,
  disabled: false,
  readonly: false,
  required: false,
  counterLength: false,
  maxlength: 500,
};

Playground.argTypes = {
  label: { description: 'Rótulo acima do campo.', control: 'text' },
  placeholder: { description: 'Exemplo do texto esperado. Não substitui o rótulo.', control: 'text' },
  helperMessage: { description: 'Mensagem de ajuda abaixo do campo.', control: 'text' },
  errorMessage: { description: 'Mensagem exibida com `danger`.', control: 'text' },
  successMessage: { description: 'Mensagem exibida com `success`.', control: 'text' },
  size: {
    description: 'Altura mínima do controle; short inicia com uma linha e medium com três.',
    options: ['short', 'medium'],
    control: { type: 'select' },
  },
  rows: { description: 'Quantidade inicial de linhas; quando definida, prevalece sobre o default de size.', control: 'number' },
  autoResize: { description: 'Aumenta a altura conforme o conteúdo.', control: 'boolean' },
  resizable: { description: 'Permite redimensionar quando `autoResize` é false.', control: 'boolean' },
  minHeight: { description: 'Altura mínima opcional, em pixels.', control: 'number' },
  maxHeight: { description: 'Altura máxima opcional, em pixels.', control: 'number' },
  danger: { description: 'Estado de erro. Tem prioridade sobre `success`.', control: 'boolean' },
  success: { description: 'Estado de sucesso.', control: 'boolean' },
  disabled: { description: 'Desabilita o campo e o remove do formulário.', control: 'boolean' },
  readonly: { description: 'Permite selecionar e copiar, sem editar.', control: 'boolean' },
  required: { description: 'Bloqueia o envio do formulário com o campo vazio.', control: 'boolean' },
  counterLength: { description: 'Mostra a quantidade de caracteres e o `maxlength`.', control: 'boolean' },
  maxlength: { description: 'Quantidade máxima de caracteres.', control: 'number' },
};

export const States = () => (
  <div style={grid}>
    <UaiTextarea label="Padrão" placeholder="Escreva aqui" helperMessage="Mensagem de ajuda" />
    <UaiTextarea label="Preenchido" value="Detalhes do pedido" helperMessage="Mensagem de ajuda" />
    <UaiTextarea label="Erro" value="Conteúdo incompleto" danger errorMessage="Revise o conteúdo informado." />
    <UaiTextarea label="Sucesso" value="Informações confirmadas" success successMessage="Conteúdo confirmado." />
    <UaiTextarea label="Desabilitado" value="Conteúdo indisponível" disabled helperMessage="Mensagem de ajuda" />
    <UaiTextarea label="Somente leitura" value="Conteúdo para consulta" readonly helperMessage="Mensagem de ajuda" />
  </div>
);

export const Heights = () => (
  <div style={column}>
    <div>
      <div style={caption}>Tamanhos compartilhados</div>
      <UaiTextarea label="Curto" size="short" />
      <UaiTextarea label="Médio" size="medium" />
    </div>
    <div>
      <div style={caption}>Altura fluida com três linhas iniciais</div>
      <UaiTextarea label="Descrição" rows={3} />
    </div>
    <div>
      <div style={caption}>Altura limitada e rolagem interna</div>
      <UaiTextarea label="Observações" rows={3} maxHeight={160} />
    </div>
    <div>
      <div style={caption}>Redimensionamento manual</div>
      <UaiTextarea label="Anotações" autoResize={false} resizable />
    </div>
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
      <UaiTextarea
        label="Descrição"
        name="description"
        rows={3}
        required
        requiredErrorMessage="Informe a descrição."
        helperMessage="Descreva os detalhes necessários."
      />
      <UaiTextarea label="Observações" inputName="notes" rows={2} />
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
      <UaiTextarea
        label="Mensagem"
        placeholder="Escreva e pressione Enter"
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
