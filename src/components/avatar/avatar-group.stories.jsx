import React, {useEffect} from 'react';
import DocumentationTemplate from './avatar-group.mdx';
import { BdsAvatarGroup } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Avatar Group',
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

export const Properties = (args) => {
  return (
      <bds-avatar-group can-click={args.canClick} size={args.size} users={JSON.stringify(users)}></bds-avatar-group>
  );
};

Properties.argTypes = {
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

Properties.args = {
  canClick: false,
  size: 'standard',
  users: `${JSON.stringify(users)}`
}

export const Events = () => {
    useEffect(() => {
        const avatarGroup = document.getElementById('avatar-group');
        avatarGroup.addEventListener('bdsClickAvatarGroup', () => {
          console.log('Evento Click funcionando');
        });
      });
    return (
        <bds-avatar-group id="avatar-group" can-click={true} size='standard' users={JSON.stringify(users)}></bds-avatar-group>
    );
  };

  export const FrameworkReact = () => (
        <BdsAvatarGroup id="avatar-group" can-click={true} size='standard' users={JSON.stringify(users)}></BdsAvatarGroup>
    )