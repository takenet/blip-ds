import React from 'react';
import { useEffect } from 'react';
import readme from './readme.md';
import { BdsAccordion, BdsAccordionBody, BdsAccordionHeader, BdsTypo } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Accordion',
  tags: ['autodocs'],
  parameters: {
    notes: { markdown: readme },
    docs: {
      canvas: { sourceState: 'shown'},
      source: { type: 'code'}
    }
  },
};

const paragraph =
  'Um accordion é uma lista de cabeçalhos empilhados verticalmente que revelam ou ocultam seções de conteúdo associados.';

export const accordionProps = (args) => {
  return (
    <BdsAccordion start-open={args.startOpen}>
      <bds-accordion-header
        accordion-title={args.accordionTitle}
        icon={args.icon}
        avatar-name={args.avatarName}
        avatar-thumb={args.avatarThumb}
      ></bds-accordion-header>
      <bds-accordion-body>
        <bds-typo variant="fs-16">{paragraph}</bds-typo>
      </bds-accordion-body>
    </BdsAccordion>
  );
};

accordionProps.argTypes = {
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
};

accordionProps.args = {
  accordionTitle: 'Título do accordion',
  avatarName: '',
  avatarThumb: '',
  icon: '',
  startOpen: false,
};

export const accordionMethod = () => {
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

export const accordionEvent = () => {
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
    <bds-grid style={{minHeight: "200px"}}>
      <BdsAccordion id="accEvent">
      <BdsAccordionHeader accordion-title="Título do accordion"></BdsAccordionHeader>
      <BdsAccordionBody>
        <BdsTypo variant="fs-16">{paragraph}</BdsTypo>
      </BdsAccordionBody>
    </BdsAccordion>
    </bds-grid>
  );
};

export const accordionGroupProps = (args) => {
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
accordionGroupProps.argTypes = {
  ...accordionProps.argTypes,
  collapse: {
    table: {
      defaultValue: { summary: 'single' },
    },
    description: 'Escolha o comportamento de abertura do accordion.',
    options: ['single', 'multiple'],
    control: 'select',
  },
};
accordionGroupProps.args = {
  accordionTitle: 'Título do accordion',
  avatarName: '',
  avatarThumb: '',
  collapse: 'single',
  icon: '',
  startOpen: false,
};

export const accordionGroupMethod = () => {
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

export const accordionGroupEvent = () => {
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
    <bds-grid direction="column" gap="2" style={{minHeight: "420px"}}>
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






// discontinued examples





export const accordionDefault = (args) => {
  return (
    <bds-grid padding="2" justify-content="center">
      <bds-accordion>
        <bds-accordion-header
          accordion-title={args.title}
          icon={args.icon}
          avatar-name={args.avatarName}
          avatar-thumb={args.avatarThumb}
        ></bds-accordion-header>
        <bds-accordion-body>
          <bds-typo variant="fs-16">{args.content}</bds-typo>
        </bds-accordion-body>
      </bds-accordion>
    </bds-grid>
  );
};

accordionDefault.args = {
  title: 'Título do accordion',
  icon: '',
  avatarName: '',
  avatarThumb: '',
  content: paragraph,
};

const groupTemplate = (args) => {
  return (
    <bds-accordion-group collapse={args.collapse}>
      <bds-accordion>
        <bds-accordion-header
          accordion-title={args.title}
          icon={args.icon}
          avatar-name={args.avatarName}
          avatar-thumb={args.avatarThumb}
        ></bds-accordion-header>
        <bds-accordion-body>
          <bds-typo variant="fs-16">{args.content}</bds-typo>
        </bds-accordion-body>
      </bds-accordion>
      <bds-accordion>
        <bds-accordion-header
          accordion-title="Title accordion"
          icon="tag"
          avatar-name=""
          avatar-thumb=""
        ></bds-accordion-header>
        <bds-accordion-body>
          <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
          </bds-typo>
        </bds-accordion-body>
      </bds-accordion>
      <bds-accordion>
        <bds-accordion-header
          accordion-title="Title accordion"
          icon="tag"
          avatar-name="Lucas Murta"
          avatar-thumb=""
        ></bds-accordion-header>
        <bds-accordion-body>
          <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
          </bds-typo>
        </bds-accordion-body>
      </bds-accordion>
      <bds-accordion>
        <bds-accordion-header
          accordion-title="Title accordion"
          icon="tag"
          avatar-name="Lucas Murta"
          avatar-thumb="https://lh3.googleusercontent.com/a-/AOh14GjdktWC7a1mjzKctkwNnpYz2djl9guEkLYEaYhh=s288-p-rw-no"
        ></bds-accordion-header>
        <bds-accordion-body>
          <bds-typo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
            scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex est
            at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
            egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
          </bds-typo>
        </bds-accordion-body>
      </bds-accordion>
    </bds-accordion-group>
  );
};

export const AccordionSingle = groupTemplate.bind({});
AccordionSingle.args = {
  collapse: 'single',
  title: 'Title accordion',
  icon: '',
  avatarName: '',
  avatarThumb: '',
  content: paragraph,
};

export const AccordionMultiple = groupTemplate.bind({});
AccordionMultiple.args = {
  collapse: 'multiple',
  title: 'Title accordion',
  icon: '',
  avatarName: '',
  avatarThumb: '',
  content: paragraph,
};

const container = {
  marginTop: '2px',
  maxWidth: '480px',
  margin: '0 auto',
};

const inner = {
  position: 'relative',
  padding: '16px',
  marginBottom: '24px',
};

const btAction = {
  position: 'absolute',
  top: '24px',
  right: '100%',
  padding: '16px',
  marginBottom: '8px',
};

const btmargin = {
  display: 'block',
  marginBottom: '8px',
};

export const ToggleAccordion = () => {
  const btToggle = async (id) => {
    const acc = document.getElementById(id);
    await acc.toggle();
  };
  return (
    <div style={container}>
      <bds-paper style={inner} elevation="primary">
        <div style={btAction}>
          <bds-button onClick={() => btToggle('accsingle')} variant="primary" size="short">
            Toggle
          </bds-button>
        </div>
        <bds-accordion id="accsingle">
          <bds-accordion-header
            accordion-title="Title accordion"
            icon="tag"
            avatar-name="Lucas Murta"
          ></bds-accordion-header>
          <bds-accordion-body>
            <bds-typo variant="fs-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
              scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex
              est at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio ac
              egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
            </bds-typo>
          </bds-accordion-body>
        </bds-accordion>
      </bds-paper>
    </div>
  );
};

export const ToggleGroupAccordion = () => {
  const btToggle = async (id) => {
    const acc = document.getElementById(id);
    await acc.toggle();
  };
  return (
    <div style={container}>
      <bds-paper style={inner} elevation="primary">
        <div style={btAction}>
          <bds-button style={btmargin} onClick={() => btToggle('acc1')} variant="primary" size="short">
            1
          </bds-button>
          <bds-button style={btmargin} onClick={() => btToggle('acc2')} variant="primary" size="short">
            2
          </bds-button>
          <bds-button style={btmargin} onClick={() => btToggle('acc3')} variant="primary" size="short">
            3
          </bds-button>
          <bds-button style={btmargin} onClick={() => btToggle('acc4')} variant="primary" size="short">
            4
          </bds-button>
        </div>
        <bds-accordion-group>
          <bds-accordion id="acc1">
            <bds-accordion-header
              accordion-title="Title accordion"
              icon=""
              avatar-name=""
              avatar-thumb=""
            ></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
                scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex
                est at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio
                ac egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>
          <bds-accordion id="acc2">
            <bds-accordion-header
              accordion-title="Title accordion"
              icon="tag"
              avatar-name=""
              avatar-thumb=""
            ></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
                scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex
                est at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio
                ac egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>
          <bds-accordion id="acc3">
            <bds-accordion-header
              accordion-title="Title accordion"
              icon="tag"
              avatar-name="Lucas Murta"
              avatar-thumb=""
            ></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
                scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex
                est at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio
                ac egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>
          <bds-accordion id="acc4">
            <bds-accordion-header
              accordion-title="Title accordion"
              icon="tag"
              avatar-name="Lucas Murta"
              avatar-thumb="https://lh3.googleusercontent.com/a-/AOh14GjdktWC7a1mjzKctkwNnpYz2djl9guEkLYEaYhh=s288-p-rw-no"
            ></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur leo ligula, ac auctor tortor
                scelerisque sit amet. Mauris aliquam, nunc et ornare tincidunt, dui risus lobortis tortor, ut dapibus ex
                est at erat. Vestibulum at lacinia enim, non auctor leo. Vestibulum quis felis quam. Morbi ornare, odio
                ac egestas tempor, tellus odio imperdiet nunc, eget efficitur lorem ligula eget dolor.
              </bds-typo>
            </bds-accordion-body>
          </bds-accordion>
        </bds-accordion-group>
      </bds-paper>
    </div>
  );
};
