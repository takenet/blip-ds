import React from 'react';
import {
  UaiButton,
  UaiModal,
  UaiThemeProvider,
  UaiToast,
  UaiToastContainer,
} from '../../../blip-ds-react/dist/components';
import { showToast } from '../../../blip-ds-react/dist/toast';
import DocumentationTemplate from './uai-toast.mdx';

export default {
  title: 'UAI Components/Toast',
  component: UaiToast,
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

const column = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--uai-spacing-md)',
  maxWidth: 'calc(var(--uai-width-dialog) + var(--uai-spacing-4xl))',
};
const row = { display: 'flex', flexWrap: 'wrap', gap: 'var(--uai-spacing-xs)' };
const VARIANTS = ['system', 'info', 'success', 'warning', 'error'];
const POSITIONS = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
const HEADING = 'Título curto e objetivo, sem ponto final';
const MESSAGE = 'Texto curto, preferencialmente 1 linha.';

// The toasts of the static stories are shown in place, in a column, outside a container.
export const Playground = (args) => <UaiToast {...args} />;
Playground.args = {
  variant: 'system',
  heading: HEADING,
  message: MESSAGE,
  open: true,
  closable: true,
  closeLabel: 'Fechar',
  actionLabel: '',
  duration: 0,
};
Playground.argTypes = {
  variant: { control: 'select', options: VARIANTS },
  heading: { control: 'text' },
  message: { control: 'text' },
  open: { control: 'boolean' },
  closable: { control: 'boolean' },
  closeLabel: { control: 'text' },
  actionLabel: { control: 'text' },
  duration: { control: 'number' },
};

export const Variants = () => (
  <div style={column}>
    {VARIANTS.map((variant) => (
      <UaiToast key={variant} variant={variant} heading={HEADING} message={MESSAGE} open />
    ))}
  </div>
);

export const Content = () => (
  <div style={column}>
    <UaiToast variant="success" message="Alterações salvas." open />
    <UaiToast variant="info" message="Mensagem arquivada." actionLabel="Desfazer" open />
    <UaiToast variant="warning" heading="Conexão instável" open>
      Algumas mensagens podem atrasar. <a href="https://status.blip.ai">Ver status</a>
    </UaiToast>
    <UaiToast variant="error" message="Não foi possível salvar." closable={false} open />
  </div>
);

export const ShowToast = () => (
  <div style={row}>
    {VARIANTS.map((variant) => (
      <UaiButton
        key={variant}
        variant="outline"
        color="content"
        onClick={() =>
          showToast({ variant, heading: `Toast ${variant}`, message: MESSAGE, duration: 5000, position: 'bottom-left' })
        }
      >
        {variant}
      </UaiButton>
    ))}
  </div>
);

/**
 * Pilha: com mais de um toast, os mais antigos ficam atrás do mais novo, espiando e menores. Passe o mouse (ou o foco)
 * para abrir a pilha; o tempo de todos pausa enquanto ela está aberta. A linha na base mostra o tempo que falta.
 */
export const Stack = () => {
  let count = 0;
  const fire = (position) => {
    const variant = VARIANTS[count % VARIANTS.length];
    count += 1;
    showToast({ variant, heading: `Notificação ${count}`, message: MESSAGE, duration: 8000, position });
  };
  return (
    <div style={row}>
      <UaiButton variant="solid" color="primary" onClick={() => fire('bottom-right')}>
        Mostrar toast (embaixo)
      </UaiButton>
      <UaiButton variant="outline" color="content" onClick={() => fire('top-right')}>
        Mostrar toast (em cima)
      </UaiButton>
    </div>
  );
};

export const Positions = () => (
  <div style={row}>
    {POSITIONS.map((position) => (
      <UaiButton
        key={position}
        variant="outline"
        color="content"
        onClick={() => showToast({ variant: 'info', message: `Posição ${position}`, duration: 4000, position })}
      >
        {position}
      </UaiButton>
    ))}
  </div>
);

export const WithAction = () => {
  const [archived, setArchived] = React.useState(0);
  const archive = async () => {
    setArchived((count) => count + 1);
    const toast = await showToast({
      variant: 'system',
      message: 'Conversa arquivada.',
      actionLabel: 'Desfazer',
      duration: 6000,
    });
    toast.addEventListener('uaiToastAction', () => setArchived((count) => count - 1));
  };
  return (
    <div style={row}>
      <UaiButton onClick={archive}>Arquivar conversa</UaiButton>
      <span>Arquivadas: {archived}</span>
    </div>
  );
};

export const Declarative = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <UaiButton onClick={() => setOpen(true)}>Salvar</UaiButton>
      <UaiToastContainer position="bottom-right">
        <UaiToast
          variant="success"
          heading="Salvo"
          message="Alterações salvas."
          duration={4000}
          open={open}
          onUaiToastClose={() => setOpen(false)}
        />
      </UaiToastContainer>
    </>
  );
};

export const OverAModal = () => {
  const [open, setOpen] = React.useState(false);
  const save = () => {
    showToast({ variant: 'success', message: 'Contato salvo.', duration: 4000 });
    setOpen(false);
  };
  return (
    <>
      <UaiButton onClick={() => setOpen(true)}>Abrir modal</UaiButton>
      <UaiModal
        open={open}
        heading="Editar contato"
        onUaiModalChanged={(event) => event.detail.modalStatus === 'closed' && setOpen(false)}
      >
        <p>Copiar mostra o toast com o modal aberto; Salvar mostra o toast e fecha o modal.</p>
        <UaiButton
          slot="footer"
          variant="outline"
          color="content"
          onClick={() => showToast({ variant: 'info', message: 'Link copiado.', duration: 4000 })}
        >
          Copiar link
        </UaiButton>
        <UaiButton slot="footer" onClick={save}>
          Salvar
        </UaiButton>
      </UaiModal>
    </>
  );
};
