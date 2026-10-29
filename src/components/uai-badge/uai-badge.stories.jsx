import React, { useState } from 'react';
import { UaiBadge, UaiThemeProvider, UaiTypo } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-badge.mdx';

const colors = ['system', 'danger', 'warning', 'success', 'neutral'];
const shapes = ['circle', 'triangle', 'triangle-reverse', 'polygon', 'square'];
const row = { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--uai-spacing-lg)' };
const column = { display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' };
const item = { display: 'grid', justifyItems: 'center', gap: 'var(--uai-spacing-xs)' };
const caption = {
  color: 'var(--uai-content-secondary)',
};
const field = {
  fontFamily: 'var(--uai-font-family-sans)',
  fontSize: 'var(--uai-body-base-font-size)',
  lineHeight: 'var(--uai-body-base-line-height)',
  color: 'var(--uai-content-primary)',
  background: 'var(--uai-surface-paper)',
  padding: 'var(--uai-spacing-xs)',
  border: 'var(--uai-border-width-default) solid var(--uai-content-secondary)',
  borderRadius: 'var(--uai-radius-md)',
};

const Labeled = ({ label, children }) => (
  <div style={item}>
    {children}
    <UaiTypo tag="span" variant="caption" margin={false} style={caption}>
      {label}
    </UaiTypo>
  </div>
);

export default {
  title: 'UAI/Badge',
  component: UaiBadge,
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

export const Playground = (args) => <UaiBadge {...args} />;

Playground.args = {
  color: 'system',
  shape: 'circle',
  icon: null,
  number: undefined,
  animation: false,
  dataTest: null,
  ariaLabel: null,
};

Playground.argTypes = {
  color: {
    description:
      'Cor semântica. A API permanece string; valores desconhecidos usam system e avisam em desenvolvimento.',
    options: colors,
    control: 'select',
    table: { type: { summary: 'string' }, defaultValue: { summary: 'system' } },
  },
  shape: {
    description: 'Forma do status, ícone ou vazio. Números sempre usam cápsula.',
    options: shapes,
    control: 'select',
    table: { defaultValue: { summary: 'circle' } },
  },
  icon: {
    description: 'Nome UAI conhecido ou nome legado por fallbackBdsIcon. Zero suprime o ícone; outro número prevalece.',
    control: 'text',
    table: { type: { summary: 'string' }, defaultValue: { summary: 'null' } },
  },
  number: {
    description:
      'Zero mostra vazio, inclusive com ícone. A partir de 999, inclusive, mostra 999+. Omitir restaura status ou ícone.',
    control: 'number',
    table: { type: { summary: 'number' }, defaultValue: { summary: 'undefined' } },
  },
  animation: {
    description: 'Ativa pulso decorativo; movimento reduzido mantém a informação sem animação contínua.',
    control: 'boolean',
    table: { defaultValue: { summary: 'false' } },
  },
  dataTest: {
    description: 'Valor do atributo data-test no objeto visual interno, como no legado.',
    control: 'text',
    table: { type: { summary: 'string' }, defaultValue: { summary: 'null' } },
  },
  ariaLabel: {
    description: 'Descrição acessível opcional do indicador. Não cria região live nem adiciona foco.',
    control: 'text',
    table: { type: { summary: 'string' }, defaultValue: { summary: 'null' } },
  },
};

const scenarios = {
  status: { label: 'Status: número ausente', number: undefined, icon: null },
  icon: { label: 'Ícone: número ausente', number: undefined, icon: 'check' },
  empty: { label: 'Vazio: zero', number: 0, icon: null },
  zeroIcon: { label: 'Vazio: zero com ícone', number: 0, icon: 'check' },
  count: { label: 'Contagem: 998 com ícone', number: 998, icon: 'check' },
  cap: { label: 'Limite inclusivo: 999', number: 999, icon: null },
  aboveCap: { label: 'Acima do limite: 1000', number: 1000, icon: null },
  absent: { label: 'Status: número null', number: null, icon: null },
};

export const Usage = () => {
  const [scenario, setScenario] = useState('count');
  const current = scenarios[scenario];

  return (
    <div style={column}>
      <label style={column}>
        <UaiTypo tag="span" variant="caption" margin={false} style={caption}>
          Conteúdo do indicador
        </UaiTypo>
        <select style={field} value={scenario} onChange={(event) => setScenario(event.target.value)}>
          {Object.entries(scenarios).map(([value, entry]) => (
            <option key={value} value={value}>
              {entry.label}
            </option>
          ))}
        </select>
      </label>
      <div style={row}>
        <UaiTypo tag="span" variant="caption" margin={false} style={caption}>
          Indicador de tarefas
        </UaiTypo>
        <UaiBadge number={current.number} icon={current.icon} ariaLabel={current.label} />
      </div>
    </div>
  );
};

Usage.parameters = {
  docs: {
    source: {
      language: 'jsx',
      code: `import React, { useState } from 'react';
import { UaiBadge, UaiThemeProvider } from 'blip-ds-react/dist/components';
import 'blip-tokens/uai-icons/css';

export function TaskIndicator() {
  const [mode, setMode] = useState('number');
  const number = mode === 'empty' ? 0 : mode === 'number' ? 999 : undefined;

  return (
    <UaiThemeProvider theme="light">
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-md)' }}>
        <label>
          Conteúdo do indicador
          <select value={mode} onChange={(event) => setMode(event.target.value)}>
            <option value="number">Contagem</option>
            <option value="empty">Vazio, mesmo com ícone</option>
            <option value="icon">Ícone</option>
          </select>
        </label>
        <UaiBadge
          number={number}
          icon="check"
          ariaLabel={mode === 'number' ? '999 tarefas' : mode === 'empty' ? 'Nenhuma tarefa' : 'Tarefas concluídas'}
        />
      </div>
    </UaiThemeProvider>
  );
}`,
    },
  },
};

export const States = () => (
  <div style={row}>
    <Labeled label="Status">
      <UaiBadge ariaLabel="Indicador de status" />
    </Labeled>
    <Labeled label="Ícone">
      <UaiBadge icon="check" ariaLabel="Tarefa concluída" />
    </Labeled>
    <Labeled label="Número">
      <UaiBadge number={12} ariaLabel="12 tarefas" />
    </Labeled>
    <Labeled label="Vazio">
      <UaiBadge number={0} ariaLabel="Nenhuma tarefa" />
    </Labeled>
    <Labeled label="Zero com ícone">
      <UaiBadge number={0} icon="check" ariaLabel="Nenhuma tarefa" />
    </Labeled>
  </div>
);

export const Colors = () => (
  <div style={row}>
    {colors.map((color) => (
      <Labeled key={color} label={color}>
        <UaiBadge color={color} number={12} ariaLabel={`12 tarefas; cor ${color}`} />
      </Labeled>
    ))}
  </div>
);

export const Shapes = () => (
  <div style={column}>
    {shapes.map((shape) => (
      <div key={shape} style={column}>
        <UaiTypo tag="span" variant="caption" margin={false} style={caption}>
          {shape}
        </UaiTypo>
        <div style={row}>
          <Labeled label="Status">
            <UaiBadge shape={shape} ariaLabel={`Status; forma ${shape}`} />
          </Labeled>
          <Labeled label="Ícone">
            <UaiBadge shape={shape} icon="check" ariaLabel="Tarefa concluída" />
          </Labeled>
          <Labeled label="Vazio">
            <UaiBadge shape={shape} number={0} ariaLabel="Nenhuma tarefa" />
          </Labeled>
          <Labeled label="Cápsula">
            <UaiBadge shape={shape} number={12} ariaLabel="12 tarefas" />
          </Labeled>
        </div>
      </div>
    ))}
  </div>
);

export const NumberLimits = () => (
  <div style={row}>
    {[-1, 0, 1.5, 998, 999, 1000].map((number) => (
      <Labeled key={number} label={`number=${number}`}>
        <UaiBadge number={number} icon="check" ariaLabel={`Valor informado: ${number}`} />
      </Labeled>
    ))}
  </div>
);

export const Animation = () => (
  <div style={row}>
    <Labeled label="Status com pulso">
      <UaiBadge animation ariaLabel="Indicador de status" />
    </Labeled>
    <Labeled label="Ícone com pulso">
      <UaiBadge animation icon="check" ariaLabel="Tarefa concluída" />
    </Labeled>
    <Labeled label="Número com pulso">
      <UaiBadge animation number={12} ariaLabel="12 tarefas" />
    </Labeled>
    <Labeled label="Vazio com pulso">
      <UaiBadge animation number={0} ariaLabel="Nenhuma tarefa" />
    </Labeled>
  </div>
);
