import React, {useEffect} from 'react';
import DocumentationTemplate from './avatar.mdx';
import { BdsAvatar } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Avatar Single',
  parameters: {
    docs: {
      page: DocumentationTemplate
    }
  },
};


export const Properties = (args) => {
  return (
    <bds-avatar name={args.name} thumbnail={args.thumbnail} size={args.size} upload={args.upload}></bds-avatar>
  );
};

Properties.argTypes = {
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

Properties.args = {
  name: "Michael Scott",
  size: "standard",
  thumbnail:"",
  upload: false,
}

export const Events = () => {
  useEffect(() => {
    const avatar = document.getElementById('avatar');
    avatar.addEventListener('bdsClickAvatar', () => {
      console.log('Evento Click funcionando');
    });
  });
  return (
    <bds-avatar id="avatar" name="Michael Scott" thumbnail="" size="standard" upload="true"></bds-avatar>
  );
};

export const FrameworkReact = () => (
    <BdsAvatar id="avatar" name="Michael Scott" thumbnail="" size="standard" upload="true"></BdsAvatar>
  )