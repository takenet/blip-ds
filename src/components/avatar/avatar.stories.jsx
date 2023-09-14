import React from 'react';
import DocumentationTemplate from './avatar.mdx';

export default {
  title: 'Components/Avatar',
  parameters: {
    docs: {
      page: DocumentationTemplate
    }
  },
};

const users = [
  { id: '1', name: 'Michael Scott' },
  { id: '2', name: 'Dwight Schrute' },
  { id: '3', name: 'Jim Halpert' },
  { id: '4', name: 'Pam Beesly' },
  { id: '5', name: 'Ryan Howard' },
  { id: '6', name: 'Andy Bernard' },
];

export const SingleProperties = (args) => {
  return (
    <bds-avatar name={args.name} thumbnail={args.thumbnail} size={args.size} upload={args.upload}></bds-avatar>
  );
};

SingleProperties.argTypes = {
  name: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o nome do usuário.',
    control: 'text',
  },
  thumbnail: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o link ou caminho da imagem.',
    control: 'text',
  },
  size: {
    table: {
      defaultValue: { summary: 'standard' },
    },
    description: 'Defina o tamanho dos avatares.',
    options: ['micro' ,'extra-small' , 'small' , 'standard' , 'large', 'extra-large' ],
    control: 'select',
  },
  upload: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o avatar será clicável.',
    control: 'boolean',
  },
}

SingleProperties.args = {
  name: "Michael Scott",
  size: "standard",
  thumbnail:"",
  upload: false,
}

export const GroupProperties = (args) => {
  return (
      <bds-avatar-group can-click={args.canClick} size={args.size} users={JSON.stringify(users)}></bds-avatar-group>
  );
};

GroupProperties.argTypes = {
  canClick: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o grupo de avatares são clicáveis.',
    control: 'boolean',
  },
  size: {
    table: {
      defaultValue: { summary: 'standard' },
    },
    description: 'Defina o tamanho dos avatares.',
    options: ['micro' ,'extra-small' , 'small' , 'standard' , 'large', 'extra-large' ],
    control: 'select',
  },
  users: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Array de objetos para definir os valores do grupo de avatares.',
    control: 'text',
  },
}

GroupProperties.args = {
  canClick: false,
  size: 'standard',
  users: `${JSON.stringify(users)}`
}
