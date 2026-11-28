import React, { useState } from 'react';
import { UaiList, UaiListItem, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-list.mdx';

export default {
  title: 'UAI/List',
  component: UaiList,
  subcomponents: { UaiListItem },
  tags: ['autodocs'],
  parameters: { docs: { page: DocumentationTemplate } },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <div style={{ padding: 'var(--uai-spacing-xl)', maxWidth: 'var(--uai-width-content)' }}>
          <Story />
        </div>
      </UaiThemeProvider>
    ),
  ],
};

const people = [
  { value: '01', text: 'Ana Souza', secondaryText: 'Atendente', avatarName: 'Ana Souza' },
  { value: '02', text: 'Bruno Lima', secondaryText: 'Supervisor', avatarName: 'Bruno Lima' },
  { value: '03', text: 'Carla Dias', secondaryText: 'Administradora', avatarName: 'Carla Dias' },
];

const settings = [
  { value: '01', text: 'Notificações', secondaryText: 'Push e e-mail', icon: 'bell', checked: true },
  { value: '02', text: 'Modo silencioso', secondaryText: 'Fora do horário', icon: 'bell' },
  { value: '03', text: 'Resumo diário', secondaryText: 'Às 8h', icon: 'bell', checked: true },
];

const column = { display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' };

export const Playground = (args) => (
  <UaiListItem {...args} />
);
Playground.args = {
  text: 'Título do item',
  secondaryText: 'Texto secundário',
  icon: 'file-txt-1',
  typeList: 'default',
  size: 'standard',
  clickable: true,
  active: false,
  borderRadius: false,
  checked: false,
  chips: '["Chip", "Tag"]',
  actionsButtons: '["copy", "settings-general", "more-options-horizontal"]',
};
Playground.argTypes = {
  typeList: { control: 'select', options: ['default', 'checkbox', 'radio', 'switch'] },
  size: { control: 'select', options: ['tall', 'standard', 'short'] },
};

export const TypeLists = () => (
  <div style={column}>
    <UaiList data={JSON.stringify([
      { value: '01', text: 'Relatório mensal', secondaryText: 'Atualizado há 2 h', icon: 'file-txt-1', actionsButtons: ['copy', 'settings-general', 'more-options-horizontal'] },
      { value: '02', text: 'Maria Oliveira', secondaryText: 'WhatsApp', avatarName: 'Maria Oliveira', chips: ['Chip', 'Tag'] },
      { value: '03', text: 'Item só com texto', secondaryText: 'Sem avatar nem ícone' },
    ])} />
    <UaiList typeList="checkbox" data={JSON.stringify(settings)} />
    <UaiList typeList="radio" value="02" data={JSON.stringify(people)} />
    <UaiList typeList="switch" data={JSON.stringify(settings)} />
  </div>
);

export const States = () => (
  <div style={column}>
    <UaiListItem text="Padrão" secondaryText="Sem clique" icon="file-txt-1" />
    <UaiListItem text="Clicável" secondaryText="Hover, pressed e foco" icon="file-txt-1" clickable />
    <UaiListItem text="Ativo" secondaryText="Overlay, ícone sólido e negrito" icon="file-txt-1" clickable active />
    <UaiListItem text="Com borda arredondada" icon="file-txt-1" clickable active borderRadius />
    <UaiListItem text="Checkbox marcado" typeList="checkbox" checked />
    <UaiListItem text="Radio marcado" typeList="radio" checked />
    <UaiListItem text="Switch ligado" typeList="switch" checked />
  </div>
);

export const Sizes = () => (
  <div style={column}>
    {['tall', 'standard', 'short'].map((size) => (
      <UaiListItem key={size} size={size} text={size} secondaryText="Texto secundário" icon="file-txt-1" clickable />
    ))}
  </div>
);

export const Chips = () => (
  <UaiListItem
    text="Contato"
    secondaryText="Chips acima de 30 caracteres são cortados e mostram o texto completo no tooltip"
    chips={JSON.stringify(['Cliente', 'Um rótulo bem longo que passa de trinta caracteres'])}
  />
);

export const Usage = () => {
  const [selected, setSelected] = useState('02');
  return (
    <UaiList
      typeList="radio"
      value={selected}
      data={JSON.stringify(people)}
      onUaiListRadioChange={(event) => setSelected(event.detail.value)}
    />
  );
};
Usage.parameters = {
  docs: {
    source: {
      code: `const [selected, setSelected] = useState('02');

<UaiThemeProvider theme="light">
  <UaiList
    typeList="radio"
    value={selected}
    data={JSON.stringify(people)}
    onUaiListRadioChange={(event) => setSelected(event.detail.value)}
  />
</UaiThemeProvider>`,
    },
  },
};
