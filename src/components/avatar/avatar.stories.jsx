import React, {useEffect} from 'react';
import DocumentationTemplate from './avatar.mdx';
import { BdsAvatar } from '../../../blip-ds-react/dist/components';

export default {
  title: 'BDS Components/Avatar Single',
  parameters: {
    docs: {
      page: DocumentationTemplate
    }
  },
};


export const Properties = (args) => {
  return (
    <bds-avatar name={args.name} thumbnail={args.thumbnail} open-upload={args.openUpload} size={args.size} color={args.color} upload={args.upload}></bds-avatar>
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
  color: {
    table: {
      defaultValue: { summary: 'colorLetter' },
    },
    description: 'Defina a cor de fundo do avatar.',
    options: ['colorLetter', 'system', 'success', 'warning', 'error', 'info', 'surface' ],
    control: 'select',
  },
  upload: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o avatar será clicável.',
    control: 'boolean',
  },
  openUpload: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o clique de upload abrirá o seletor de arquivos.',
    control: 'boolean',
  },
}

Properties.args = {
  name: "Michael Scott",
  size: "standard",
  color: "colorLetter",
  thumbnail:"",
  upload: false,
  openUpload: false,
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