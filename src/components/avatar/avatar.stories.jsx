import React from 'react';
import readme from './readme.md';

export default {
  title: 'Avatar',
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
  flexWrap: 'wrap'
};

const avatarSize = {
  marginRight: '8px',
};

export const avatarGroup = () => {
  const users = [
    { id: '1', name: 'Michael Scott' },
    { id: '2', name: 'Dwight Schrute' },
    { id: '3', name: 'Jim Halpert' },
    { id: '4', name: 'Pam Beesly' },
    { id: '5', name: 'Ryan Howard' },
    { id: '6', name: 'Andy Bernard' },
  ];
  return (
    <div style={content}>
      <bds-avatar-group size="standard" users={JSON.stringify(users)}></bds-avatar-group>
      <bds-avatar-group can-click size="standard" users={JSON.stringify(users)}></bds-avatar-group>
    </div>
  );
};

export const defaultAvatar = () => {
  const sizes = ['extra-small', 'small', 'standard', 'large', 'extra-large'];
  return (
    <div style={content}>
      <bds-avatar name="Michael Scott" thumbnail="" size="standard" upload={false} ellipsis={null}></bds-avatar>
    </div>
  );
};

export const sizeAvatar = () => (
  <div style={content}>
    <bds-avatar name={'Michael Scott'} thumbnail={''} size={'extra-small'} style={avatarSize}></bds-avatar>
    <bds-avatar name={'Dwight Schrute'} thumbnail={''} size={'small'} style={avatarSize}></bds-avatar>
    <bds-avatar name={'Jim Halpert'} thumbnail={''} size={'standard'} style={avatarSize}></bds-avatar>
    <bds-avatar name={'Pam Beesly'} thumbnail={''} size={'large'} style={avatarSize}></bds-avatar>
    <bds-avatar name={'Ryan Howard'} thumbnail={''} size={'extra-large'} style={avatarSize}></bds-avatar>
  </div>
);

export const uploadAvatar = () => (
  <div style={content}>
    <bds-avatar
      name="Michael Scott"
      thumbnail="https://www.w3schools.com/howto/img_avatar.png"
      size="extra-large"
      upload="true"
      style={avatarSize}
    ></bds-avatar>
    <bds-avatar name="Michael Scott" thumbnail="" size="extra-large" upload="true" style={avatarSize}></bds-avatar>
  </div>
);
