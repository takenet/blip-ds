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
    {"id": "1", "name": "Michael Scott", "thumbnail": "https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/92152d262175be2384854d0b286e84df"},
    {"id": "2", "name": "Dwight Schrute", "thumbnail": "https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/15d6d90235aabcee62fbc26c3f1a31b2"},
    {"id": "3", "name": "Jim Halpert", "thumbnail": "https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/ca23c3552d5e36d447d6f9eef5d9d5bc"},
    {"id": "4", "name": "Pam Beesly", "thumbnail": "https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/a6adb1435e4267d983e5fd246302003a"},
    {"id": "5", "name": "Ryan Howard", "thumbnail": "https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/ae4cfce3c2e6db162d1f7f137062dcd2"},
    {"id": "6", "name": "Andy Bernard", "thumbnail": "https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/25617c2e17f7bcbe847c7e4730ef5b03"}
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
      thumbnail={text('thumbnail', 'https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/92152d262175be2384854d0b286e84df')}
      size={select('sizes',sizes)}
      button={boolean('button',false)}
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
      thumbnail={'https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/92152d262175be2384854d0b286e84df'}
      size={'extra-small'}
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name={'Dwight Schrute'}
      thumbnail={'https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/ca23c3552d5e36d447d6f9eef5d9d5bc'}
      size={'small'}
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name={'Jim Halpert'}
      thumbnail={'https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/15d6d90235aabcee62fbc26c3f1a31b2'}
      size={'standard'}
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name={'Pam Beesly'}
      thumbnail={'https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/a6adb1435e4267d983e5fd246302003a'}
      size={'large'}
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name={'Ryan Howard'}
      thumbnail={'https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/ae4cfce3c2e6db162d1f7f137062dcd2'}
      size={'extra-large'}
      style={avatarSize}
    >
    </bds-avatar>
  </div>
);

export const buttonAvatar = () => (
  <div style={content}>
    <bds-avatar
      name="Michael Scott"
      thumbnail="https://blip.university/wp-content/uploads/bb-platform-previews/b9014e776e469ca6dae702955bf32e95/92152d262175be2384854d0b286e84df"
      size="extra-large"
      button="true"
      style={avatarSize}
    >
    </bds-avatar>
    <bds-avatar
      name="Michael Scott"
      thumbnail=""
      size="extra-large"
      button="true"
      style={avatarSize}
    >
    </bds-avatar>
  </div>
);
