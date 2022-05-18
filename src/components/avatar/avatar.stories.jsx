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
    {"id": "1", "name": "Michael Scott"},
    {"id": "2", "name": "Dwight Schrute"},
    {"id": "3", "name": "Jim Halpert"},
    {"id": "4", "name": "Pam Beesly"},
    {"id": "5", "name": "Ryan Howard"},
    {"id": "6", "name": "Andy Bernard"}
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
      thumbnail={text('thumbnail', '')}
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
      thumbnail={''}
      size={'extra-small'}
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name={'Dwight Schrute'}
      thumbnail={''}
      size={'small'}
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name={'Jim Halpert'}
      thumbnail={''}
      size={'standard'}
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name={'Pam Beesly'}
      thumbnail={''}
      size={'large'}
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name={'Ryan Howard'}
      thumbnail={''}
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
      thumbnail="https://zeroheight-uploads.s3-accelerate.amazonaws.com/a99f3428329d87fdaafcb6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJXTVUC4XZENV3LPQ%2F20220518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220518T143322Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c0e869b52ebdd546df1b0647a4c5ae8b942b9185b314cc3ccc843efe8fa2a80a"
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
