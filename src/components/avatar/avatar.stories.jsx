import React, { useEffect } from 'react';
import DocumentationTemplate from './avatar.mdx';
import { BdsAvatar } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Avatar Single',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-avatar
      name={args.name}
      thumbnail={args.thumbnail}
      open-upload={args.openUpload}
      size={args.size}
      bg-color={args.bgColor}
      type={args.type}
      shape={args.shape}
      upload={args.upload}
    >
      {args.type === 'icon' && (
        <bds-avatar-icon name={args.iconName} theme={args.theme} color={args.color}></bds-avatar-icon>
      )}
    </bds-avatar>
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
    options: ['micro', 'extra-small', 'small', 'standard', 'large', 'extra-large'],
    control: 'select',
  },
  bgColor: {
    table: {
      defaultValue: { summary: 'surface-2' },
    },
    description: 'Defina a cor de fundo do avatar.',
    options: [
      'brand',
      'primary',
      'secondary',
      'surface-0',
      'surface-1',
      'surface-2',
      'surface-3',
      'surface-4',
      'surface-positive',
      'surface-negative',
      'surface-primary',
      'content-default',
      'content-disable',
      'content-ghost',
      'content-bright',
      'content-din',
      'info',
      'system',
      'focus',
      'success',
      'warning',
      'error',
      'delete',
      'positive',
      'negative',
      'extended-blue',
      'extended-blue-bright',
      'extended-ocean',
      'extended-ocean-bright',
      'extended-green',
      'extended-green-bright',
      'extended-yellow',
      'extended-yellow-bright',
      'extended-orange',
      'extended-orange-bright',
      'extended-red',
      'extended-red-bright',
      'extended-pink',
      'extended-pink-bright',
      'extended-gray',
      'extended-gray-bright',
    ],
    control: 'select',
  },
  type: {
    table: {
      defaultValue: { summary: 'user' },
    },
    description: 'Defina o tipo do avatar.',
    options: ['user', 'icon'],
    control: 'select',
  },
  shape: {
    table: {
      defaultValue: { summary: 'circle' },
    },
    description: 'Defina o formato do avatar.',
    options: ['circle', 'square'],
    control: 'select',
  },
  iconName: {
    table: {
      defaultValue: { summary: 'user-default' },
    },
    description: 'Defina o nome do ícone.',
    control: 'text',
  },
  theme: {
    table: {
      defaultValue: { summary: 'outline' },
    },
    description: 'Defina o tema do ícone.',
    options: ['outline', 'solid'],
    control: 'select',
  },
  color: {
    table: {
      defaultValue: { summary: 'inherit' },
    },
    description: 'Defina a cor do ícone.',
    options: [
      'brand',
      'primary',
      'secondary',
      'surface-0',
      'surface-1',
      'surface-2',
      'surface-3',
      'surface-4',
      'surface-positive',
      'surface-negative',
      'surface-primary',
      'content-default',
      'content-disable',
      'content-ghost',
      'content-bright',
      'content-din',
      'info',
      'system',
      'focus',
      'success',
      'warning',
      'error',
      'delete',
      'positive',
      'negative',
      'extended-blue',
      'extended-blue-bright',
      'extended-ocean',
      'extended-ocean-bright',
      'extended-green',
      'extended-green-bright',
      'extended-yellow',
      'extended-yellow-bright',
      'extended-orange',
      'extended-orange-bright',
      'extended-red',
      'extended-red-bright',
      'extended-pink',
      'extended-pink-bright',
      'extended-gray',
      'extended-gray-bright',
    ],
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
};

Properties.args = {
  name: 'Michael Scott',
  size: 'standard',
  bgColor: 'surface-2',
  type: 'user',
  shape: 'circle',
  iconName: 'user-default',
  theme: 'outline',
  color: 'content-default',
  thumbnail: '',
  upload: false,
  openUpload: false,
};

export const Methods = () => {
  const setAvatarName = async (id, name) => {
    const avatar = document.getElementById(id);
    avatar.name = name;
  };

  const setAvatarThumbnail = async (id, thumbnail) => {
    const avatar = document.getElementById(id);
    avatar.thumbnail = thumbnail;
  };

  const setAvatarSize = async (id, size) => {
    const avatar = document.getElementById(id);
    avatar.size = size;
  };

  return (
    <bds-grid direction="column" gap="2">
      <bds-grid gap="2">
        <bds-button onClick={() => setAvatarName('avatar', 'John Doe')} variant="primary" size="short">
          Set Name
        </bds-button>
        <bds-button
          onClick={() =>
            setAvatarThumbnail(
              'avatar',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s'
            )
          }
          variant="primary"
          size="short"
        >
          Set Thumbnail
        </bds-button>
        <bds-button onClick={() => setAvatarSize('avatar', 'large')} variant="primary" size="short">
          Set Size
        </bds-button>
      </bds-grid>
      <bds-avatar id="avatar" name="Michael Scott" size="standard" thumbnail=""></bds-avatar>
    </bds-grid>
  );
};

export const Events = () => {
  useEffect(() => {
    const avatar = document.getElementById('avatar');
    avatar.addEventListener('bdsClickAvatar', () => {
      console.log('Evento Click funcionando');
    });
  });
  return <bds-avatar id="avatar" name="Michael Scott" thumbnail="" size="standard" upload="true"></bds-avatar>;
};

export const FrameworkReact = () => (
  <BdsAvatar id="avatar" name="Michael Scott" thumbnail="" size="standard" upload="true"></BdsAvatar>
);