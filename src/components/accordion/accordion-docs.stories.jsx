import readme from './readme.md';

export default {
  title: 'Accordion Live Code',
  parameters: {
    notes: { markdown: readme },
  },
};

export const accordionDocs = (args) => {
  return (
    <bds-accordion start-open={args.startOpen}>
      <bds-accordion-header
        accordion-title={args.accordionTitle}
        icon={args.icon}
        avatar-name={args.avatarName}
        avatar-thumb={args.avatarThumb}
      ></bds-accordion-header>
      <bds-accordion-body>
        <bds-typo>{args.accordionText}</bds-typo>
      </bds-accordion-body>
    </bds-accordion>
  );
};

accordionDocs.argTypes = {
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

accordionDocs.args = {
  accordionTitle: 'Título do accordion',
  accordionText: `Um accordion é uma lista de cabeçalhos empilhados verticalmente que revelam ou ocultam 
  seções de conteúdo associados.`,
  avatarName: '',
  avatarThumb: '',
  icon: '',
  startOpen: false,
};