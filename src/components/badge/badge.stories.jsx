import React from 'react';

import readme from './readme.md';

export default {
  title: 'Badge',
  parameters: {
    notes: { markdown: readme },
  },
};
const mixBadge = {
  display: 'inline-flex',
  position: 'relative',
};
const badge = {
  display: 'flex',
  position: 'absolute',
  right: '-8px',
  top: '-8px',
};
const badgeStatus = {
    display: 'flex',
    position: 'absolute',
    right: '0',
    top: '0',
  };

export const shapeBadge = () => (
  <bds-grid direction="column" gap="3"  padding="4" align-items="center" justify-content="center">
    <bds-grid gap="4" margin="3" align-items="center">
      <bds-badge shape="circle" color="system" icon="info"></bds-badge>
      <bds-badge shape="triangle" color="danger" icon="info"></bds-badge>
      <bds-badge shape="triangle-reverse" icon="info" color="warning"></bds-badge>
      <bds-badge shape="polygon" color="success" icon="info"></bds-badge>
      <bds-badge shape="square" color="neutral" icon="info"></bds-badge>
    </bds-grid>
  </bds-grid>
);

export const typeBadge = () => (
    <bds-grid direction="column" gap="3" padding="4" align-items="center" justify-content="center">
      <bds-grid gap="4" margin="3" align-items="center">
        <bds-grid direction="column" align-items="center" gap="4">
            <bds-badge shape="circle" color="system"></bds-badge>
            <bds-typo bold="bold">Status</bds-typo>
        </bds-grid>
        <bds-grid direction="column" align-items="center" gap="2">
           <bds-badge shape="circle" color="system" icon="info"></bds-badge> 
           <bds-typo bold="bold">Icon</bds-typo>
        </bds-grid>
        <bds-grid direction="column" align-items="center" gap="2">
           <bds-badge shape="circle" color="system" text={1234}></bds-badge> 
           <bds-typo bold="bold">Number</bds-typo>
        </bds-grid>
        
      </bds-grid>
    </bds-grid>
  );

export const exampleBadge = () => (
  <bds-grid gap="4" padding="4" align-items="center" justify-content="center">
    <bds-grid style={mixBadge}>
      <bds-icon name="bell" size="large"></bds-icon>
      <div style={badge}>
        <bds-badge shape="circle" color="system" animation text={1}></bds-badge>
      </div>
    </bds-grid>
    <bds-grid style={mixBadge}>
      <bds-icon name="bell" size="large"></bds-icon>
      <div style={badge}>
        <bds-badge shape="circle" color="system" animation icon="info"></bds-badge>
      </div>
    </bds-grid>
    <bds-grid style={mixBadge}>
      <bds-icon name="bell" size="large"></bds-icon>
      <div style={badgeStatus}>
        <bds-badge shape="circle" color="system" animation></bds-badge>
      </div>
    </bds-grid>
  </bds-grid>
);
