import React from 'react';
import { withKnobs, text, object, select, boolean, number } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Avatar',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}

const avatarSize = {
  marginRight: "8px",
}

export const avatarGroup = () => {
  const sizes = [
    'extra-small',
    'small',
    'standard'
  ]
  const users = [
    {"id": "1", "name": "Michael Scott", "thumbnail": "https://gcdn.pbrd.co/images/9Kt8iMvR10Lf.jpg?o=1"},
    {"id": "2", "name": "Dwight Schrute", "thumbnail": "https://gcdn.pbrd.co/images/XAlbTPDwjZ2d.jpg?o=1"},
    {"id": "3", "name": "Jim Halpert", "thumbnail": "https://gcdn.pbrd.co/images/tK0Ygb0KAHUm.jpg?o=1"},
    {"id": "4", "name": "Pam Beesly", "thumbnail": "https://gcdn.pbrd.co/images/8NZSnCGfB9BD.jpg?o=1"},
    {"id": "5", "name": "Ryan Howard", "thumbnail": "https://gcdn.pbrd.co/images/6wwIWI1EzzVq.jpg?o=1"},
    {"id": "6", "name": "Andy Bernard", "thumbnail": "https://gcdn.pbrd.co/images/5dPYFWixftY4.jpg?o=1"}
  ]
  const arrayUsers = object("users",users);
  return (
  <div style={content}>
    <bds-avatar-group
      size={select('sizes',sizes)}
      users={JSON.stringify(arrayUsers)}
    >
    </bds-avatar-group>
  </div>
  );
};

export const defaultAvatar = () => {
  const sizes = [
    'extra-small',
    'small',
    'standard',
    'large',
    'extra-large'
  ]
  return (
  <div style={content}>
    <bds-avatar
      name={text('name', 'Michael Scott')}
      thumbnail={text('thumbnail', 'https://gcdn.pbrd.co/images/9Kt8iMvR10Lf.jpg?o=1')}
      size={select('sizes',sizes)}
      upload={boolean('upload',false)}
      ellipsis={number('ellipsis',null)}
    >
    </bds-avatar>
  </div>
  );
};

export const sizeAvatar = () => (
  <div style={content}>
    <bds-avatar
      name={'Michael Scott'}
      thumbnail={'https://gcdn.pbrd.co/images/9Kt8iMvR10Lf.jpg?o=1'}
      size={'extra-small'}
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name={'Dwight Schrute'}
      thumbnail={'https://gcdn.pbrd.co/images/XAlbTPDwjZ2d.jpg?o=1'}
      size={'small'}
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name={'Jim Halpert'}
      thumbnail={'https://gcdn.pbrd.co/images/tK0Ygb0KAHUm.jpg?o=1'}
      size={'standard'}
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name={'Pam Beesly'}
      thumbnail={'https://gcdn.pbrd.co/images/8NZSnCGfB9BD.jpg?o=1'}
      size={'large'}
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name={'Ryan Howard'}
      thumbnail={'https://gcdn.pbrd.co/images/6wwIWI1EzzVq.jpg?o=1'}
      size={'extra-large'}
      style={avatarSize}
    >
    </bds-avatar>
  </div>
);

export const uploadAvatar = () => (
  <div style={content}>
    <bds-avatar
      name="Michael Scott"
      thumbnail="https://gcdn.pbrd.co/images/9Kt8iMvR10Lf.jpg?o=1"
      size="extra-large"
      upload="true"
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name="Michael Scott"
      thumbnail=""
      size="extra-large"
      upload="true"
      style={avatarSize}
    >
    </bds-avatar>
  </div>
);
