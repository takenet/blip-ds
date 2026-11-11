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

export const Playground = (args) => {
  const ref = React.useRef(null);
  return (
    <>
      <UaiButton onClick={() => ref.current?.toggle()}>Abrir modal</UaiButton>
      <UaiModal ref={ref} heading="Titulo" {...args}>
        <Content onClose={() => ref.current?.toggle()} />
      </UaiModal>
    </>
  );
};
Playground.args = { open: false, closeButton: true, outzoneClose: true, enterClose: true, size: 'fixed' };
Playground.argTypes = {
  width: { control: { type: 'number', min: 20, step: 1 }, description: 'Largura do painel em rem. Padrão: 41.' },
  size: { options: ['dynamic', 'fixed'], control: 'select', table: { defaultValue: { summary: 'fixed' } } },
  open: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
  closeButton: { control: 'boolean', table: { defaultValue: { summary: 'true' } } },
  outzoneClose: { control: 'boolean', table: { defaultValue: { summary: 'true' } } },
  enterClose: { control: 'boolean', table: { defaultValue: { summary: 'true' } } },
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 'var(--uai-spacing-md)' }}>
    {['fixed', 'dynamic'].map((size) => {
      const ref = React.createRef();
      return (
        <React.Fragment key={size}>
          <UaiButton variant="outline" onClick={() => ref.current?.toggle()}>
            {`Abrir ${size}`}
          </UaiButton>
          <UaiModal ref={ref} size={size} heading="Titulo">
            <Content onClose={() => ref.current?.toggle()} />
          </UaiModal>
        </React.Fragment>
      );
    })}
  </div>
);

export const Events = () => {
  const ref = React.useRef(null);
  const [status, setStatus] = React.useState('nenhum');
  return (
    <>
      <UaiButton onClick={() => ref.current?.toggle()}>Abrir modal</UaiButton>
      <UaiTypo variant="body-base">{`Último evento uaiModalChanged: ${status}`}</UaiTypo>
      <UaiModal ref={ref} heading="Titulo" onUaiModalChanged={(event) => setStatus(event.detail.modalStatus)}>
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
      <UaiModal ref={ref} heading="Titulo">
        <Content onClose={() => ref.current?.toggle()} />
      </UaiModal>
    </>
  );
};
