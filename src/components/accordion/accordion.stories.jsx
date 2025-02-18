import React from 'react';
import { useEffect } from 'react';
import DocumentationTemplate from './accordion.mdx';
import { BdsAccordion, BdsAccordionBody, BdsAccordionHeader, BdsTypo } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const paragraph =
  'Um accordion é uma lista de cabeçalhos empilhados verticalmente que revelam ou ocultam seções de conteúdo associados.';

export const Properties = (args) => {
  return (
    <bds-accordion start-open={args.startOpen} divisor={args.divisor}>
      <bds-accordion-header
        accordion-title={args.accordionTitle}
        icon={args.icon}
        avatar-name={args.avatarName}
        avatar-thumb={args.avatarThumb}
      ></bds-accordion-header>
      <bds-accordion-body>
        <bds-typo variant="fs-16">{paragraph}</bds-typo>
      </bds-accordion-body>
    </bds-accordion>
  );
};

Properties.argTypes = {
  accordionTitle: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Coloque o titulo do cabeçalho.',
    control: 'text',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o ícone que será utilizado no botão (Apenas outline).',
    control: 'text',
  },
  avatarName: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o nome aplicado no avatar.',
    control: 'text',
  },
  avatarThumb: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Insira o link da imagem.',
    control: 'text',
  },
  startOpen: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Escolha se o accordion será iniciado aberto.',
    control: 'boolean',
  },
  divisor: {
    table: {
      defaultValue: { summary: 'true' },
    },
    description: 'Escolha se o accordion terá a linha inferior.',
    control: 'boolean',
  },
};

Properties.args = {
  accordionTitle: 'Título do accordion',
  avatarName: '',
  avatarThumb: '',
  icon: '',
  startOpen: false,
  divisor: true,
};

export const Methods = () => {
  const btToggle = async (id) => {
    const acc = document.getElementById(id);
    await acc.toggle();
  };
  const btOpen = async (id) => {
    const acc = document.getElementById(id);
    await acc.open();
  };
  const btClose = async (id) => {
    const acc = document.getElementById(id);
    await acc.close();
  };
  return (
    <bds-grid direction="column" gap="2">
      <bds-grid gap="2">
        <bds-button onClick={() => btToggle('accordion')} variant="primary" size="short">
          Toggle
        </bds-button>
        <bds-button onClick={() => btOpen('accordion')} variant="primary" size="short">
          Open
        </bds-button>
        <bds-button onClick={() => btClose('accordion')} variant="primary" size="short">
          Close
        </bds-button>
      </bds-grid>
      <bds-accordion id="accordion">
        <bds-accordion-header
          accordion-title="Título do accordion"
          icon=""
          avatar-name=""
          avatar-thumb=""
        ></bds-accordion-header>
        <bds-accordion-body>
          <bds-typo variant="fs-16">{paragraph}</bds-typo>
        </bds-accordion-body>
      </bds-accordion>
    </bds-grid>
  );
};

export const Events = () => {
  useEffect(() => {
    const accToggle = document.getElementById('accEvent');
    accToggle.addEventListener('bdsToggle', () => {
      console.log('Evento toggle funcionando');
    });
    const accOpen = document.getElementById('accEvent');
    accOpen.addEventListener('bdsAccordionOpen', () => {
      console.log('Evento Open funcionando');
    });
    const accClose = document.getElementById('accEvent');
    accClose.addEventListener('bdsAccordionClose', () => {
      console.log('Evento Close funcionando');
    });
  });
  return (
    <bds-accordion id="accEvent">
      <bds-accordion-header accordion-title="Título do accordion (Veja o resultado do evento na aba Actions)"></bds-accordion-header>
      <bds-accordion-body>
        <bds-typo variant="fs-16">{paragraph}</bds-typo>
      </bds-accordion-body>
    </bds-accordion>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsAccordion>
      <BdsAccordionHeader accordion-title="Título do accordion"></BdsAccordionHeader>
      <BdsAccordionBody>
        <BdsTypo variant="fs-16">{paragraph}</BdsTypo>
      </BdsAccordionBody>
    </BdsAccordion>
  );
};
