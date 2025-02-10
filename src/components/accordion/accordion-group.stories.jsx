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
    <bds-accordion-group collapse={args.collapse} divisor={args.divisor}>
      <bds-accordion start-open={args.startOpen}>
        <bds-accordion-header
          accordion-title="Titulo do accordion"
        ></bds-accordion-header>
        <bds-accordion-body>
          <bds-typo variant="fs-16">{paragraph}</bds-typo>
        </bds-accordion-body>
      </bds-accordion>
      <bds-accordion start-open={args.startOpen}>
        <bds-accordion-header
          accordion-title="Titulo do accordion"
        ></bds-accordion-header>
        <bds-accordion-body>
          <bds-typo variant="fs-16">{paragraph}</bds-typo>
        </bds-accordion-body>
      </bds-accordion>
    </bds-accordion-group>
  );
};
Properties.argTypes = {
  collapse: {
    table: {
      defaultValue: { summary: 'single' },
    },
    description: 'Escolha o estado do componente.',
    options: ['single' , 'multiple'],
    control: 'select',
  },
  divisor: {
    table: {
      defaultValue: { summary: 'true' },
    },
    description: 'Escolha se o accordion terá um linha dividindo os accordions.',
    control: 'boolean',
  },
};

Properties.args = {
  collapse: 'single',
  divisor: true,
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
