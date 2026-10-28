import React from 'react';
import DocumentationTemplate from './uai-grid.mdx';
import { UaiGrid } from '../../../blip-ds-react/dist/components';

export default {
  title: 'UAI/Grid',
  component: UaiGrid,
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const cellStyle = {
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  padding: 'var(--uai-spacing-md)',
  width: '100%',
};

const spans = ['unset', 'auto', ...Array.from({ length: 12 }, (_, index) => String(index + 1))];
const spacing = ['none', 'half', ...Array.from({ length: 12 }, (_, index) => String(index + 1))];
const directionalSpacing = [
  ...spacing,
  ...['l', 'r', 't', 'b', 'x', 'y'].flatMap((side) => spacing.map((value) => `${side}-${value}`)),
];
const backgrounds = [
  'unset',
  '$color-brand', '$color-primary', '$color-secondary',
  '$color-surface-0', '$color-surface-1', '$color-surface-2', '$color-surface-3', '$color-surface-4',
  '$color-surface-positive', '$color-surface-negative', '$color-surface-primary',
  '$color-content-default', '$color-content-disable', '$color-content-ghost', '$color-content-bright', '$color-content-din',
  '$color-border-1', '$color-border-2', '$color-border-3',
  '$color-info', '$color-system', '$color-focus', '$color-success', '$color-warning', '$color-error', '$color-delete',
  '$color-shadow-0', '$color-shadow-1', '$color-hover', '$color-pressed', '$color-positive', '$color-negative',
];

const columnControl = (description) => ({
  description,
  type: { name: 'string', required: false },
  options: spans,
  mapping: { unset: undefined },
  control: { type: 'select', labels: { unset: 'Não definido' } },
  table: { category: 'Itens' },
});

/**
 * Ajuste o contêiner e os itens. Os spans e offsets são aplicados a cada item de exemplo.
 */
export const Playground = ({
  itemCount,
  xxs, xs, sm, md, lg, xg,
  xxsOffset, xsOffset, smOffset, mdOffset, lgOffset, xgOffset,
  ...containerProps
}) => {
  const itemProps = { xxs, xs, sm, md, lg, xg, xxsOffset, xsOffset, smOffset, mdOffset, lgOffset, xgOffset };

  return (
    <div style={{ width: '100%' }}>
      <UaiGrid {...containerProps}>
        {Array.from({ length: itemCount }, (_, index) => (
          <UaiGrid key={index} {...itemProps}>
            <div style={{ ...cellStyle, backgroundColor: 'var(--uai-surface-contrast)', color: 'var(--uai-content-primary)' }}>
              Item {index + 1}
            </div>
          </UaiGrid>
        ))}
      </UaiGrid>
    </div>
  );
};

Playground.args = {
  itemCount: 3,
  container: true,
  containerFluid: false,
  direction: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  height: 'auto',
  gap: 'none',
  padding: 'none',
  margin: 'none',
  bgColor: '$color-surface-1',
  xxs: '3',
  xs: 'unset',
  sm: 'unset',
  md: 'unset',
  lg: 'unset',
  xg: 'unset',
  xxsOffset: 'unset',
  xsOffset: 'unset',
  smOffset: 'unset',
  mdOffset: 'unset',
  lgOffset: 'unset',
  xgOffset: 'unset',
};

Playground.argTypes = {
  itemCount: {
    description: 'Quantidade de itens neste exemplo. Não é uma propriedade do componente.',
    control: { type: 'number', min: 1, max: 12, step: 1 },
    table: { category: 'Exemplo' },
  },
  container: {
    description: 'Centraliza e limita a largura ao token width/content. Desative para testar containerFluid.',
    control: 'boolean',
    table: { category: 'Contêiner' },
  },
  containerFluid: {
    description: 'Usa o contêiner fluido. Desative container ao usar esta opção.',
    control: 'boolean',
    table: { category: 'Contêiner' },
  },
  direction: {
    description: 'Direção do eixo principal.',
    options: ['row', 'row-reverse', 'column', 'column-reverse'],
    control: 'select',
    table: { category: 'Contêiner' },
  },
  flexWrap: {
    description: 'Quebra dos itens quando não cabem na linha.',
    options: ['unset', 'wrap', 'wrap-reverse'],
    mapping: { unset: undefined },
    control: { type: 'select', labels: { unset: 'Não definido' } },
    table: { category: 'Contêiner' },
  },
  justifyContent: {
    description: 'Distribuição dos itens no eixo principal.',
    options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch'],
    control: 'select',
    table: { category: 'Contêiner' },
  },
  alignItems: {
    description: 'Alinhamento dos itens no eixo transversal.',
    options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    control: 'select',
    table: { category: 'Contêiner' },
  },
  height: {
    description: 'Altura CSS do contêiner. Defina uma altura para observar o alinhamento vertical.',
    type: { name: 'string', required: false },
    control: 'text',
    table: { category: 'Contêiner' },
  },
  gap: {
    description: 'Espaçamento adicional entre os itens. Pode causar quebra mesmo quando os spans somam 12.',
    options: spacing,
    control: 'select',
    table: { category: 'Contêiner' },
  },
  padding: {
    description: 'Espaçamento interno do contêiner.',
    options: directionalSpacing,
    control: 'select',
    table: { category: 'Contêiner' },
  },
  margin: {
    description: 'Margem externa do contêiner.',
    options: directionalSpacing.filter((value) => value !== 'b-12'),
    control: 'select',
    table: { category: 'Contêiner' },
  },
  bgColor: {
    description: 'Nome de cor compatível com BDS, mapeado para um token UAI.',
    options: backgrounds,
    mapping: { unset: undefined },
    control: { type: 'select', labels: { unset: 'Sem cor' } },
    table: { category: 'Contêiner' },
  },
  xxs: columnControl('Span base de cada item, em uma grade de 12 colunas.'),
  xs: columnControl('Span de cada item a partir do breakpoint xs.'),
  sm: columnControl('Span de cada item a partir do breakpoint sm.'),
  md: columnControl('Span de cada item a partir do breakpoint md.'),
  lg: columnControl('Span de cada item a partir do breakpoint lg.'),
  xg: columnControl('Span de cada item a partir do breakpoint xg.'),
  xxsOffset: columnControl('Deslocamento base à esquerda de cada item.'),
  xsOffset: columnControl('Deslocamento à esquerda a partir do breakpoint xs.'),
  smOffset: columnControl('Deslocamento à esquerda a partir do breakpoint sm.'),
  mdOffset: columnControl('Deslocamento à esquerda a partir do breakpoint md.'),
  lgOffset: columnControl('Deslocamento à esquerda a partir do breakpoint lg.'),
  xgOffset: columnControl('Deslocamento à esquerda a partir do breakpoint xg.'),
};

export const EqualColumns = () => (
  <UaiGrid container flexWrap="wrap">
    <UaiGrid xxs="4" bgColor="$color-surface-2">
      <div style={cellStyle}>Column 1</div>
    </UaiGrid>
    <UaiGrid xxs="4" bgColor="$color-surface-2">
      <div style={cellStyle}>Column 2</div>
    </UaiGrid>
    <UaiGrid xxs="4" bgColor="$color-surface-2">
      <div style={cellStyle}>Column 3</div>
    </UaiGrid>
  </UaiGrid>
);

export const ResponsiveColumns = () => (
  <UaiGrid container flexWrap="wrap">
    <UaiGrid xxs="12" md="4" bgColor="$color-surface-2">
      <div style={cellStyle}>Column 1 · xxs=12 / md=4</div>
    </UaiGrid>
    <UaiGrid xxs="12" md="4" bgColor="$color-surface-2">
      <div style={cellStyle}>Column 2 · xxs=12 / md=4</div>
    </UaiGrid>
    <UaiGrid xxs="12" md="4" bgColor="$color-surface-2">
      <div style={cellStyle}>Column 3 · xxs=12 / md=4</div>
    </UaiGrid>
  </UaiGrid>
);

export const NestedGrid = () => (
  <UaiGrid container flexWrap="wrap">
    <UaiGrid xxs="8" flexWrap="wrap" bgColor="$color-surface-1">
      <UaiGrid xxs="6" bgColor="$color-surface-2">
        <div style={cellStyle}>Nested column A</div>
      </UaiGrid>
      <UaiGrid xxs="6" bgColor="$color-surface-2">
        <div style={cellStyle}>Nested column B</div>
      </UaiGrid>
    </UaiGrid>
    <UaiGrid xxs="4" bgColor="$color-surface-1">
      <div style={cellStyle}>Aside</div>
    </UaiGrid>
  </UaiGrid>
);

export const FluidContainer = () => (
  <UaiGrid containerFluid flexWrap="wrap">
    <UaiGrid xxs="4" bgColor="$color-surface-2">
      <div style={cellStyle}>1/3</div>
    </UaiGrid>
    <UaiGrid xxs="4" bgColor="$color-surface-2">
      <div style={cellStyle}>1/3</div>
    </UaiGrid>
    <UaiGrid xxs="4" bgColor="$color-surface-2">
      <div style={cellStyle}>1/3</div>
    </UaiGrid>
  </UaiGrid>
);
