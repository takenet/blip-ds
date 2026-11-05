import React, { useRef, useState } from 'react';
import { UaiButton, UaiPaper, UaiStep, UaiStepper, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-stepper.mdx';

export default {
  title: 'UAI/Stepper',
  component: UaiStepper,
  subcomponents: { UaiStep },
  tags: ['autodocs'],
  parameters: { docs: { page: DocumentationTemplate } },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <div style={{ maxWidth: 'calc(var(--uai-sizing-5xl) * 8)' }}>
          <Story />
        </div>
      </UaiThemeProvider>
    ),
  ],
};

const STEPS = [
  { heading: 'Dados', description: 'Informe os dados básicos para começar.' },
  { heading: 'Revisão', description: 'Confira as informações antes de continuar.' },
  { heading: 'Confirmação', description: 'Finalize o processo e receba o comprovante.' },
];

export const Playground = (args) => (
  <UaiStepper orientation={args.orientation}>
    <UaiStep completed heading={STEPS[0].heading} description={STEPS[0].description} />
    <UaiStep active heading={STEPS[1].heading} description={STEPS[1].description} />
    <UaiStep heading={STEPS[2].heading} description={STEPS[2].description} />
  </UaiStepper>
);
Playground.args = { orientation: 'horizontal' };
Playground.argTypes = { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } };

export const Vertical = () => (
  <UaiStepper orientation="vertical">
    <UaiStep completed heading={STEPS[0].heading} description={STEPS[0].description} />
    <UaiStep active heading={STEPS[1].heading} description={STEPS[1].description} />
    <UaiStep heading={STEPS[2].heading} description={STEPS[2].description} />
    <UaiStep heading="Concluído" description="Tudo pronto." />
  </UaiStepper>
);

export const States = () => (
  <UaiStepper>
    <UaiStep completed heading="Concluída" description="Etapa finalizada." />
    <UaiStep active heading="Ativa" description="Etapa em andamento." />
    <UaiStep heading="Pendente" description="Etapa ainda não iniciada." />
    <UaiStep disabled heading="Desabilitada" description="Etapa indisponível." />
  </UaiStepper>
);

export const Controlled = () => {
  const stepper = useRef(null);
  const [current, setCurrent] = useState(0);

  const go = async (next, complete) => {
    if (complete) await stepper.current.setCompletedStep(current);
    await stepper.current.setActiveStep(next);
    setCurrent(next);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' }}>
      <UaiStepper ref={stepper}>
        {STEPS.map((step, index) => (
          <UaiStep key={step.heading} active={index === 0} heading={step.heading} description={step.description} />
        ))}
      </UaiStepper>
      <UaiPaper elevation="none" border style={{ padding: 'var(--uai-spacing-md)' }}>
        {current < STEPS.length ? `Etapa: ${STEPS[current].heading}` : 'Concluído!'}
      </UaiPaper>
      <div style={{ display: 'flex', gap: 'var(--uai-spacing-xs)' }}>
        {current > 0 && current < STEPS.length && (
          <UaiButton variant="secondary" onClick={() => go(current - 1)}>
            Voltar
          </UaiButton>
        )}
        {current < STEPS.length - 1 && <UaiButton onClick={() => go(current + 1, true)}>Próxima etapa</UaiButton>}
        {current === STEPS.length - 1 && (
          <UaiButton
            onClick={async () => {
              await stepper.current.setCompletedStep(current);
              setCurrent(STEPS.length);
            }}
          >
            Concluir
          </UaiButton>
        )}
      </div>
    </div>
  );
};
