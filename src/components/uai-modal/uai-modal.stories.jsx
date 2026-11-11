import React from 'react';
import { UaiButton, UaiModal, UaiModalAction, UaiThemeProvider, UaiTypo } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-modal.mdx';

export default {
  title: 'UAI/Modal',
  component: UaiModal,
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

const TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const Content = ({ onClose }) => (
  <>
    <UaiTypo variant="body-base">{TEXT}</UaiTypo>
    <UaiModalAction slot="footer">
      <UaiButton variant="outline" onClick={onClose}>
        Cancelar
      </UaiButton>
      <UaiButton onClick={onClose}>Salvar</UaiButton>
    </UaiModalAction>
  </>
);

export const Usage = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <UaiButton onClick={() => setOpen(true)}>Editar dados</UaiButton>
      <UaiModal
        open={open}
        heading="Editar dados"
        onUaiModalChanged={(event) => setOpen(event.detail.modalStatus === 'opened')}
      >
        <UaiTypo variant="body-base">Altere as informações e salve para aplicar.</UaiTypo>
        <UaiModalAction slot="footer">
          <UaiButton variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </UaiButton>
          <UaiButton onClick={() => setOpen(false)}>Salvar</UaiButton>
        </UaiModalAction>
      </UaiModal>
    </>
  );
};

export const Playground = (args) => {
  const ref = React.useRef(null);
  return (
    <>
      <UaiButton onClick={() => ref.current?.toggle()}>Abrir modal</UaiButton>
      <UaiModal ref={ref} heading="Título" {...args}>
        <Content onClose={() => ref.current?.toggle()} />
      </UaiModal>
    </>
  );
};
Playground.args = {
  open: false,
  closeButton: true,
  outzoneClose: true,
  enterClose: true,
  escapeClose: true,
  size: 'fixed',
};
Playground.argTypes = {
  width: { control: { type: 'number', min: 20, step: 1 }, description: 'Largura do painel em rem. Padrão: 41.' },
  size: { options: ['dynamic', 'fixed'], control: 'select', table: { defaultValue: { summary: 'fixed' } } },
  open: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
  closeButton: { control: 'boolean', table: { defaultValue: { summary: 'true' } } },
  outzoneClose: { control: 'boolean', table: { defaultValue: { summary: 'true' } } },
  enterClose: { control: 'boolean', table: { defaultValue: { summary: 'true' } } },
  escapeClose: { control: 'boolean', table: { defaultValue: { summary: 'true' } } },
};

const SizeExample = ({ size }) => {
  const ref = React.useRef(null);
  return (
    <>
      <UaiButton variant="outline" onClick={() => ref.current?.toggle()}>
        {`Abrir ${size}`}
      </UaiButton>
      <UaiModal ref={ref} size={size} heading="Título">
        <Content onClose={() => ref.current?.toggle()} />
      </UaiModal>
    </>
  );
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 'var(--uai-spacing-md)' }}>
    {['fixed', 'dynamic'].map((size) => (
      <SizeExample key={size} size={size} />
    ))}
  </div>
);

// Opened on load, for the visual regression tests. The docs page does not render it, so it never opens over the docs.
export const Opened = () => (
  <UaiModal open heading="Título">
    <Content />
  </UaiModal>
);

export const Events = () => {
  const ref = React.useRef(null);
  const [status, setStatus] = React.useState('nenhum');
  return (
    <>
      <UaiButton onClick={() => ref.current?.toggle()}>Abrir modal</UaiButton>
      <UaiTypo variant="body-base">{`Último evento uaiModalChanged: ${status}`}</UaiTypo>
      <UaiModal ref={ref} heading="Título" onUaiModalChanged={(event) => setStatus(event.detail.modalStatus)}>
        <Content onClose={() => ref.current?.toggle()} />
      </UaiModal>
    </>
  );
};

export const Methods = () => {
  const ref = React.useRef(null);
  return (
    <>
      <UaiButton onClick={() => ref.current?.toggle()}>Abrir modal</UaiButton>
      <UaiModal ref={ref} heading="Título">
        <Content onClose={() => ref.current?.toggle()} />
      </UaiModal>
    </>
  );
};
