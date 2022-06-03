import React from 'react';
import readme from './readme.md';

export default {
  title: 'Tabs',
  parameters: {
    notes: { markdown: readme },
  },
};

const styles = {
  width: '720px',
};

const paperStyles = {
  marginTop: '2px',
  marginBottom: '10px',
  padding: '5px',
};

export const tabs = () => {
  return (
    <>
      <div style={styles}>
        <bds-paper elevation="secondary" style={paperStyles}>
          <bds-tabs>
            <bds-tab group="tab1" label="Basic settings"></bds-tab>
            <bds-tab group="tab2" label="Advanced settings"></bds-tab>
            <bds-tab group="tab3" label="Very advanced settings"></bds-tab>
          </bds-tabs>
          <bds-tab-panel group="tab1">Basic settings</bds-tab-panel>
          <bds-tab-panel group="tab2">Advanced settings</bds-tab-panel>
          <bds-tab-panel group="tab3">Very advanced settings</bds-tab-panel>
        </bds-paper>
      </div>
    </>
  );
};

export const scrollableTabs = () => {
  return (
    <>
      <div style={styles}>
        <bds-paper elevation="secondary" style={paperStyles}>
          <bds-tabs>
            <bds-tab group="tab1" label="Basic settings"></bds-tab>
            <bds-tab group="tab2" label="Advanced settings"></bds-tab>
            <bds-tab group="tab3" label="Very advanced settings"></bds-tab>
            <bds-tab group="tab4" label="Personal settings"></bds-tab>
            <bds-tab group="tab5" label="Common settings"></bds-tab>
          </bds-tabs>
          <bds-tab-panel group="tab1">Basic settings</bds-tab-panel>
          <bds-tab-panel group="tab2">Advanced settings</bds-tab-panel>
          <bds-tab-panel group="tab3">Very advanced settings</bds-tab-panel>
          <bds-tab-panel group="tab4">Personal settings</bds-tab-panel>
          <bds-tab-panel group="tab5">Common settings</bds-tab-panel>
        </bds-paper>
      </div>
    </>
  );
};
