import React from 'react';
import readme from './readme.md';

export default {
  title: 'Components/Theme provider',
  parameters: {
    notes: { markdown: readme },
  },
};

const paper = {
    height: '200px',
    padding: '20px',
    width: '100%',
}

const contextPaper = {
    height: '350px',
    width: 'auto',
}

export const darkTheme = () => {
  return (
    <>
      <bds-theme-provider theme="dark">
        <bds-grid xxs="12">
          <bds-paper style={paper}>
            <bds-grid direction="column" gap="2">
              <bds-typo variant="fs-32" bold="bold">Dark theme</bds-typo>
              <bds-input-chips chips='["chip1", "chip2"]'></bds-input-chips>
              <bds-avatar name="Michael Scott" size="standard" upload="false">
              </bds-avatar>
            </bds-grid>
          </bds-paper>
        </bds-grid>
      </bds-theme-provider>
    </>
  );
};

export const lightTheme = () => {
    return (
      <>
        <bds-theme-provider theme="light">
          <bds-grid xxs="12">
            <bds-paper style={paper}>
              <bds-grid direction="column" gap="2">
                <bds-typo variant="fs-32" bold="bold">Light theme</bds-typo>
                <bds-input-chips chips='["chip1", "chip2"]'></bds-input-chips>
                <bds-avatar name="Michael Scott" size="standard" upload="false">
                </bds-avatar>
              </bds-grid>
            </bds-paper>
          </bds-grid>
        </bds-theme-provider>
      </>
    );
  };

  export const insideContextTheme = () => {
    return (
      <>
       <bds-grid container xxs="12" justify-content="center">
      <bds-theme-provider theme="dark">
        <bds-paper style={contextPaper}>
          <bds-grid direction="column" gap="2" padding="2">
            <bds-typo variant="fs-32" bold="bold">Outside dark theme</bds-typo>
            
            <bds-grid xxs="12" gap="2" justify-content="center">
              <bds-radio-group>
              <bds-typo bold="bold">Radio group</bds-typo>
              <bds-radio value="radio1" label="Radio 1"></bds-radio>
              <bds-radio value="radio2" label="Radio 2"></bds-radio>
              <bds-radio value="radio3" label="Radio 3"></bds-radio>
            </bds-radio-group>
            <bds-grid xxs="9">
              <bds-theme-provider theme="light">
                <bds-paper class="light">
                  <bds-grid direction="column" gap="2" padding="2">
                    <bds-typo variant="fs-32" bold="bold">Inside light theme</bds-typo>
                    <bds-input-phone-number label="Phone number"></bds-input-phone-number>
                    <bds-loading-bar size="default" text="Texto para aplicar no componente" percent="48">
                    </bds-loading-bar>
                  </bds-grid>
                </bds-paper>
              </bds-theme-provider>
            </bds-grid>
              
            </bds-grid>
          </bds-grid>

        </bds-paper>
      </bds-theme-provider>

    </bds-grid>
      </>
    );
  };