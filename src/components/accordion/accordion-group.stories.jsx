import React from 'react';
import { useEffect } from 'react';
import DocumentationTemplate from './accordion-group.mdx';
import {
  BdsAccordion,
  BdsAccordionGroup,
  BdsAccordionBody,
  BdsAccordionHeader,
  BdsTypo,
} from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Accordion Group',
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
    <bds-accordion-group collapse={args.collapse}>
      <bds-accordion start-open={args.startOpen}>
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
      <bds-accordion start-open={args.startOpen}>
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
    </bds-accordion-group>
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
  accordionText: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Coloque o texto de exemplo aqui.',
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
};

Properties.args = {
  accordionTitle: 'Título do accordion',
  accordionText: `Um accordion é uma lista de cabeçalhos empilhados verticalmente que revelam ou ocultam 
  seções de conteúdo associados.`,
  avatarName: '',
  avatarThumb: '',
  icon: '',
  startOpen: false,
};

export const Methods = () => {
  const handleOpen = async (id) => {
    const acc = document.getElementById(id);
    await acc.openAll();
  };

  const handleClose = async (id) => {
    const acc = document.getElementById(id);
    await acc.closeAll();
  };

  return (
    <bds-grid>
      <bds-grid direction="column" gap="2">
        <bds-grid gap="2">
          <bds-button onClick={() => handleOpen('gp')} variant="primary" size="short">
            OpenAll
          </bds-button>
          <bds-button onClick={() => handleClose('gp')} variant="primary" size="short">
            CloseAll
          </bds-button>
        </bds-grid>
        <bds-accordion-group id="gp" collapse="multiple">
          <bds-accordion id="primeiro-accordion">
            <bds-accordion-header accordion-title="Título do accordion"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">{paragraph}</bds-typo>
            </bds-accordion-body>
          </bds-accordion>
          <bds-accordion id="segundo-accordion">
            <bds-accordion-header accordion-title="Título do accordion"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">{paragraph}</bds-typo>
            </bds-accordion-body>
          </bds-accordion>
        </bds-accordion-group>
      </bds-grid>
    </bds-grid>
  );
};

export const Events = () => {
  useEffect(() => {
    const accGroupEvent = document.getElementById('accGroupEvent');
    accGroupEvent.addEventListener('bdsAccordionCloseAll', () => {
      console.log('Evento do accordion group funcionando');
    });
  });
  const handleCloseAll = (id) => {
    const close = document.getElementById(id);
    close.closeAll();
  };
  return (
    <bds-grid direction="column" gap="2">
      <bds-button onClick={() => handleCloseAll('accGroupEvent')} variant="primary" size="short">
        Close All
      </bds-button>
      <bds-accordion-group id="accGroupEvent" collapse="multiple">
        <bds-accordion>
          <bds-accordion-header accordion-title="Título do accordion"></bds-accordion-header>
          <bds-accordion-body>
            <bds-typo variant="fs-16">{paragraph}</bds-typo>
          </bds-accordion-body>
        </bds-accordion>
        <bds-accordion>
          <bds-accordion-header accordion-title="Título do accordion"></bds-accordion-header>
          <bds-accordion-body>
            <bds-typo variant="fs-16">{paragraph}</bds-typo>
          </bds-accordion-body>
        </bds-accordion>
      </bds-accordion-group>
    </bds-grid>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsAccordionGroup collapse="multiple">
      <BdsAccordion>
        <BdsAccordionHeader accordion-title="Título do accordion"></BdsAccordionHeader>
        <BdsAccordionBody>
          <BdsTypo variant="fs-16">{paragraph}</BdsTypo>
        </BdsAccordionBody>
      </BdsAccordion>
      <BdsAccordion>
        <BdsAccordionHeader accordion-title="Título do accordion"></BdsAccordionHeader>
        <BdsAccordionBody>
          <BdsTypo variant="fs-16">{paragraph}</BdsTypo>
        </BdsAccordionBody>
      </BdsAccordion>
    </BdsAccordionGroup>
  );
};
