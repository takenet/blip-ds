import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Icon',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const solidIconsName = [
  'add.svg',
  'arrow-ball-down.svg',
  'arrow-ball-left.svg',
  'arrow-ball-right.svg',
  'arrow-ball-up.svg',
  'arrow-down.svg',
  'arrow-left.svg',
  'arrow-right.svg',
  'arrow-up.svg',
  'attention.svg',
  'audio.svg',
  'blip-forum.svg',
  'builder-http.svg',
  'builder-java-script.svg',
  'builder-redirect.svg',
  'builder-tracking.svg',
  'builder-variable.svg',
  'checkball.svg',
  'email.svg',
  'error.svg',
  'favorite.svg',
  'filter-table.svg',
  'flags',
  'folder-save.svg',
  'folder.svg',
  'info.svg',
  'Level up.svg',
  'organize-blocks.svg',
  'organize-list.svg',
  'question.svg',
  'save.svg',
  'send.svg',
  'sms.svg',
  'video.svg',
  'voip.svg',
  'warning.svg',
];

const outlineIconsName = [
  'ab.svg',
  'add-persistent-menu.svg',
  'add.svg',
  'agent.svg',
  'AI.svg',
  'air-balloon.svg',
  'airplane.svg',
  'arrow-ball-down.svg',
  'arrow-ball-left.svg',
  'arrow-ball-right.svg',
  'arrow-ball-up.svg',
  'arrow-down.svg',
  'arrow-left.svg',
  'arrow-right.svg',
  'arrow-up.svg',
  'attach.svg',
  'attention.svg',
  'audio.svg',
  'avatar-user.svg',
  'bell.svg',
  'blip-ideas.svg',
  'blip-tutorials.svg',
  'book.svg',
  'bug-report.svg',
  'builder-carrousel.svg',
  'builder-menu.svg',
  'builder-new-state.svg',
  'builder-publish-bot.svg',
  'builder-quick-reply.svg',
  'builder-router.svg',
  'builder-test-bot.svg',
  'builder-text-message.svg',
  'business.svg',
  'button.svg',
  'calendar.svg',
  'camera.svg',
  'channels.svg',
  'chart-bar.svg',
  'chart-column.svg',
  'chart-line.svg',
  'chart-pizza.svg',
  'checkball.svg',
  'clock.svg',
  'close.svg',
  'cloud-2.svg',
  'cloud.svg',
  'company.svg',
  'conections.svg',
  'contact.svg',
  'cookie.svg',
  'copy.svg',
  'custom-channel.svg',
  'data-security.svg',
  'date-time.svg',
  'debug.svg',
  'deslike.svg',
  'download.svg',
  'edit.svg',
  'email.svg',
  'emoji.svg',
  'error.svg',
  'external-file.svg',
  'eye-closed.svg',
  'eye-open.svg',
  'false.svg',
  'faq.svg',
  'favorite.svg',
  'file-csv.svg',
  'file-doc.svg',
  'file-empty-file.svg',
  'file-gif.svg',
  'file-image broken.svg',
  'file-image.svg',
  'file-java-script.svg',
  'file-json.svg',
  'file-new.svg',
  'file-pdf.svg',
  'file-ppt.svg',
  'file-txt-1.svg',
  'file-txt.svg',
  'filter.svg',
  'folder.svg',
  'guide.svg',
  'home.svg',
  'info.svg',
  'integration.svg',
  'integrations channels.svg',
  'keyboard.svg',
  'less.svg',
  'library.svg',
  'like.svg',
  'link.svg',
  'list.svg',
  'loading.svg',
  'localization.svg',
  'lock.svg',
  'logout.svg',
  'mail.svg',
  'megaphone.svg',
  'menu-dot.svg',
  'menu-hamburger.svg',
  'message-active.svg',
  'message-ballon.svg',
  'message-received.svg',
  'message-sent.svg',
  'message-talk.svg',
  'message-total.svg',
  'messenger.svg',
  'monitoring.svg',
  'more-options-horizontal.svg',
  'more-options-vertical.svg',
  'mouse.svg',
  'move.svg',
  'notebook.svg',
  'notes.svg',
  'order-elements.svg',
  'paint.svg',
  'paperplane.svg',
  'payment-card.svg',
  'plugin.svg',
  'plus.svg',
  'primeiro-acesso.svg',
  'question.svg',
  'redo.svg',
  'refresh.svg',
  'resources.svg',
  'restore.svg',
  'robot.svg',
  'save-disk.svg',
  'save-flag.svg',
  'screen-fill.svg',
  'screen-full.svg',
  'search.svg',
  'send.svg',
  'service-queue.svg',
  'settings-adjusments.svg',
  'settings-builder.svg',
  'settings-general.svg',
  'share.svg',
  'Site.svg',
  'skills.svg',
  'smartphone.svg',
  'sms.svg',
  'speaker.svg',
  'sso.svg',
  'status.svg',
  'tag.svg',
  'target.svg',
  'team.svg',
  'text-style-bold.svg',
  'text-style-italic.svg',
  'text-style-strikethrough.svg',
  'text-style-underline.svg',
  'ticket.svg',
  'transfer.svg',
  'trash.svg',
  'trophy.svg',
  'true.svg',
  'undo.svg',
  'unlock.svg',
  'upload.svg',
  'user-active.svg',
  'user-default.svg',
  'user-engaged.svg',
  'video broken.svg',
  'video.svg',
  'voip.svg',
  'warning.svg',
  'xml.svg',
];

const emojiNames = [
  'beaming-face',
  'confounded-face',
  'crying-face',
  'dizzy-face',
  'expressionless-face',
  'face-blowing-a-kiss',
  'face-with-mask',
  'face-with-open-mouth',
  'face-with-tears-of-joy',
  'face-with-tongue',
  'face-without-mouth',
  'fearful-face',
  'grinning-face',
  'grinning-face-with-big-eyes',
  'grinning-face-with-smilling-eyes',
  'grinning-face-with-sweat',
  'hushed-face',
  'kissing-face-with-smilling-eyes',
  'loudly-cring-face',
  'nerd-face',
  'neutral-face',
  'perservering-face',
  'pouting-face',
  'relieved-face',
  'sleeping-face',
  'slightly-frowning-face',
  'slightly-smiling-face',
  'smiling-face',
  'smiling-face-with-halo',
  'smiling-face-with-heart-eyes',
  'smiling-face-with-smiling-eyes',
  'smiling-face-with-sunglasses',
  'smirking-face',
  'squirting-face-with-tongue',
  'winking-face',
  'winking-face-with-tongue',
];

const iconStyles = {
  width: '80px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '1px',
};

const emojiStyles = {
  width: '120px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '1px',
  textAlign: 'center',
};

const iconWrapperStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

export const outlineIcons = () => {
  const story = [];

  outlineIconsName.forEach((name) => {
    story.push(
      <div style={iconStyles}>
        <bds-icon theme="outline" size="xxx-large" name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={iconWrapperStyles}>{story}</div>;
};

export const solidIcons = () => {
  const story = [];

  solidIconsName.forEach((name) => {
    story.push(
      <div style={iconStyles}>
        <bds-icon theme="solid" size="xxx-large" name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={iconWrapperStyles}>{story}</div>;
};

export const emojis = () => {
  const story = [];

  emojiNames.forEach((name) => {
    story.push(
      <div style={emojiStyles}>
        <bds-icon type="emoji" size={text('size', 'x-large')} name={name}></bds-icon>
        <bds-typo variant="fs-10">{name}</bds-typo>
      </div>
    );
  });

  return <div style={iconWrapperStyles}>{story}</div>;
};

export const iconDefault = () => <bds-icon name={text('name', 'user')}></bds-icon>;

export const iconTheme = () => <bds-icon name={text('name', 'user')} theme={text('theme', 'solid')}></bds-icon>;

export const iconSizes = () => (
  <>
    <bds-icon name={text('name', 'user')} size="xxx-large"></bds-icon>
    <bds-icon name={text('name', 'user')} size="xx-large"></bds-icon>
    <bds-icon name={text('name', 'user')} size="x-large"></bds-icon>
    <bds-icon name={text('name', 'user')} size="large"></bds-icon>
    <bds-icon name={text('name', 'user')} size="medium"></bds-icon>
    <bds-icon name={text('name', 'user')} size="small"></bds-icon>
    <bds-icon name={text('name', 'user')} size="x-small"></bds-icon>
    <bds-icon name={text('name', 'user')} size="xx-small"></bds-icon>
  </>
);

export const iconColors = () => (
  <>
    <bds-icon name={text('name', 'user')} size="xxx-large" color={text('color1', '#2CC3D5')}></bds-icon>
    <bds-icon name={text('name', 'user')} size="xxx-large" color={text('color2', '#87DDE8')}></bds-icon>
    <bds-icon name={text('name', 'user')} size="xxx-large" color={text('color3', '#2498A8')}></bds-icon>
    <bds-icon name={text('name', 'user')} size="xxx-large" theme="solid" color={text('color1', '#2CC3D5')}></bds-icon>
    <bds-icon name={text('name', 'user')} size="xxx-large" theme="solid" color={text('color2', '#87DDE8')}></bds-icon>
    <bds-icon name={text('name', 'user')} size="xxx-large" theme="solid" color={text('color3', '#2498A8')}></bds-icon>
  </>
);
