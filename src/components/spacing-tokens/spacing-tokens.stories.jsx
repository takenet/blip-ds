import React from 'react';
import DocumentationTemplate from './spacing-tokens.mdx';

export default {
  title: 'Tokens/Spacing',
  parameters: {
    docs: {
      page: DocumentationTemplate,
      autodocs: false
    }
  },
};

const spacingTokens = [
  { token: '--space-0', value: '0px', usage: 'Sem espaçamento' },
  { token: '--space-0-5', value: '4px', usage: 'Espaçamento extra pequeno' },
  { token: '--space-1', value: '8px', usage: 'Espaçamento pequeno' },
  { token: '--space-2', value: '16px', usage: 'Espaçamento médio' },
  { token: '--space-3', value: '24px', usage: 'Espaçamento médio-grande' },
  { token: '--space-4', value: '32px', usage: 'Espaçamento grande' },
  { token: '--space-5', value: '40px', usage: 'Espaçamento extra-grande' },
  { token: '--space-6', value: '48px', usage: 'Espaçamento extra-grande' },
  { token: '--space-7', value: '56px', usage: 'Espaçamento extra-grande' },
  { token: '--space-8', value: '64px', usage: 'Espaçamento extra-grande' },
  { token: '--space-9', value: '72px', usage: 'Espaçamento extra-grande' },
  { token: '--space-10', value: '80px', usage: 'Espaçamento extra-grande' },
  { token: '--space-11', value: '88px', usage: 'Espaçamento extra-grande' },
  { token: '--space-12', value: '96px', usage: 'Espaçamento extra-grande' },
];

export const spacingReference = () => (
  <div>
    <bds-typo variant="fs-20" bold="true" style={{ marginBottom: 'var(--space-4)' }}>
      Tokens de Espaçamento
    </bds-typo>
    <div style={{ display: 'grid', gap: 'var(--space-2)' }}>
      {spacingTokens.map((spacing) => (
        <div 
          key={spacing.token}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: 'var(--space-2)', 
            border: '1px solid var(--color-border-2)',
            borderRadius: '8px',
            backgroundColor: 'var(--color-surface-1)'
          }}
        >
          <div style={{ minWidth: '120px', marginRight: 'var(--space-3)' }}>
            <bds-typo variant="fs-14" bold="true">{spacing.token}</bds-typo>
          </div>
          <div style={{ minWidth: '60px', marginRight: 'var(--space-3)' }}>
            <bds-typo variant="fs-14">{spacing.value}</bds-typo>
          </div>
          <div style={{ 
            width: spacing.value, 
            height: '16px', 
            backgroundColor: 'var(--color-primary)',
            marginRight: 'var(--space-3)',
            minWidth: '1px'
          }}></div>
          <div style={{ flex: 1 }}>
            <bds-typo variant="fs-14" style={{ color: 'var(--color-content-ghost)' }}>
              {spacing.usage}
            </bds-typo>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const utilityClassesDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
    <div>
      <bds-typo variant="fs-20" bold="true" style={{ marginBottom: 'var(--space-3)' }}>
        Classes Utilitárias de Margin
      </bds-typo>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <div className="m-2" style={{ backgroundColor: '#e3f2fd', border: '2px dashed #1976d2', textAlign: 'center' }}>
          <bds-typo variant="fs-14">m-2 (16px margin em todos os lados)</bds-typo>
        </div>
        <div className="mx-4" style={{ backgroundColor: '#f3e5f5', border: '2px dashed #7b1fa2', textAlign: 'center' }}>
          <bds-typo variant="fs-14">mx-4 (32px margin horizontal)</bds-typo>
        </div>
        <div className="my-3" style={{ backgroundColor: '#e8f5e8', border: '2px dashed #388e3c', textAlign: 'center' }}>
          <bds-typo variant="fs-14">my-3 (24px margin vertical)</bds-typo>
        </div>
      </div>
    </div>

    <div>
      <bds-typo variant="fs-20" bold="true" style={{ marginBottom: 'var(--space-3)' }}>
        Classes Utilitárias de Padding
      </bds-typo>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <div className="p-3" style={{ backgroundColor: '#fff3e0', border: '2px solid #f57c00' }}>
          <div style={{ backgroundColor: '#fff', border: '1px dashed #f57c00', textAlign: 'center', padding: 'var(--space-1)' }}>
            <bds-typo variant="fs-14">p-3 (24px padding em todos os lados)</bds-typo>
          </div>
        </div>
        <div className="px-4 py-2" style={{ backgroundColor: '#fce4ec', border: '2px solid #e91e63' }}>
          <div style={{ backgroundColor: '#fff', border: '1px dashed #e91e63', textAlign: 'center', padding: 'var(--space-1)' }}>
            <bds-typo variant="fs-14">px-4 py-2 (32px padding horizontal, 16px padding vertical)</bds-typo>
          </div>
        </div>
      </div>
    </div>
  </div>
);