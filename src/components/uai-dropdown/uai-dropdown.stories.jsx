import React from 'react';
import { UaiButton, UaiDropdown, UaiInput, UaiThemeProvider, UaiTypo } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-dropdown.mdx';

export default {
  title: 'UAI/Dropdown',
  component: UaiDropdown,
  tags: ['autodocs'],
  parameters: { docs: { page: DocumentationTemplate } },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <div style={{ minHeight: 'calc(var(--uai-width-panel) * 2)' }}>
          <Story />
        </div>
      </UaiThemeProvider>
    ),
  ],
};

const BRANCHES = [
  'Main',
  'nome-da-branch-6',
  'nome-da-branch-5',
  'nome-da-branch-4',
  'nome-da-branch-3',
  'nome-da-branch-2',
];

// Items are plain text buttons: there is no uai-list yet. The check marks the selected one.
const Items = ({ selected, onSelect }) =>
  BRANCHES.map((branch) => (
    <UaiButton
      key={branch}
      variant="text"
      color="content"
      fullWidth
      justifyContent="space-between"
      iconRight={branch === selected ? 'check' : undefined}
      onClick={() => onSelect?.(branch)}
    >
      {branch}
    </UaiButton>
  ));

const Header = () => (
  <>
    <UaiTypo slot="header" variant="title-md" bold="semibold" tag="h2" margin={false}>
      Branchs e versões
    </UaiTypo>
    <UaiInput slot="header" icon="search" placeholder="Buscar" />
  </>
);

const Footer = ({ onClose }) => (
  <>
    <UaiButton slot="footer" variant="text" color="content" onClick={onClose}>
      Gerenciar
    </UaiButton>
    <UaiButton slot="footer" onClick={onClose}>
      Criar Branch
    </UaiButton>
  </>
);

export const Usage = () => {
  const [selected, setSelected] = React.useState('Main');
  const ref = React.useRef(null);
  const close = () => ref.current?.setClose();
  return (
    <UaiDropdown ref={ref} label="Branchs e versões">
      <UaiButton slot="activator" variant="outline">
        {selected}
      </UaiButton>
      <Header />
      <Items
        selected={selected}
        onSelect={(branch) => {
          setSelected(branch);
          close();
        }}
      />
      <Footer onClose={close} />
    </UaiDropdown>
  );
};

export const Playground = (args) => {
  const ref = React.useRef(null);
  return (
    <UaiDropdown ref={ref} {...args}>
      <UaiButton slot="activator" variant="outline">
        Abrir dropdown
      </UaiButton>
      <Header />
      <Items selected="Main" />
      <Footer onClose={() => ref.current?.setClose()} />
    </UaiDropdown>
  );
};
Playground.args = { open: false, position: 'auto', label: 'Branchs e versões' };
Playground.argTypes = {
  position: {
    options: ['auto', 'bottom-left', 'bottom-right', 'top-left', 'top-right'],
    control: 'select',
    table: { defaultValue: { summary: 'auto' } },
  },
  open: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
  width: { control: { type: 'number', min: 14, step: 1 }, description: 'Largura do painel em rem. Padrão: 21.' },
  activeMode: { table: { disable: true } },
};

const Example = ({ title, children, ...props }) => (
  <UaiDropdown label={title} {...props}>
    <UaiButton slot="activator" variant="outline">
      {title}
    </UaiButton>
    {children}
  </UaiDropdown>
);

export const Structure = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--uai-spacing-md)' }}>
    <Example title="Só o corpo">
      <Items selected="Main" />
    </Example>
    <Example title="Com header">
      <Header />
      <Items selected="Main" />
    </Example>
    <Example title="Com footer">
      <Items selected="Main" />
      <Footer />
    </Example>
    <Example title="Header, corpo e footer">
      <Header />
      <Items selected="Main" />
      <Footer />
    </Example>
  </div>
);

export const Positions = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--uai-spacing-md)',
      paddingTop: 'calc(var(--uai-width-panel) * 2)',
    }}
  >
    {['bottom-left', 'bottom-right', 'top-left', 'top-right'].map((position) => (
      <Example key={position} title={position} position={position}>
        <Items selected="Main" />
      </Example>
    ))}
  </div>
);

// Opened on load, for the visual regression tests. The docs page does not render it, so it never opens over the docs.
export const Opened = () => (
  <UaiDropdown open label="Branchs e versões">
    <UaiButton slot="activator" variant="outline">
      Main
    </UaiButton>
    <Header />
    <Items selected="Main" />
    <Footer />
  </UaiDropdown>
);

export const Events = () => {
  const [status, setStatus] = React.useState('nenhum');
  return (
    <>
      <UaiTypo variant="body-base">{`Último evento uaiToggle: ${status}`}</UaiTypo>
      <UaiDropdown onUaiToggle={(event) => setStatus(String(event.detail.value))}>
        <UaiButton slot="activator" variant="outline">
          Abrir dropdown
        </UaiButton>
        <Items selected="Main" />
      </UaiDropdown>
    </>
  );
};

export const Methods = () => {
  const ref = React.useRef(null);
  return (
    <>
      <UaiButton onClick={() => ref.current?.toggle()}>Alternar de fora</UaiButton>
      <UaiDropdown ref={ref}>
        <UaiButton slot="activator" variant="outline">
          Abrir dropdown
        </UaiButton>
        <Items selected="Main" />
      </UaiDropdown>
    </>
  );
};
