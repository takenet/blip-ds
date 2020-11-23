import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Stepper',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const styles = {
  width: '720px',
};

const paperStyles = {
  marginTop: '16px',
  marginBottom: '16px',
  padding: '16px',
};

export const step = () => {
  const [step, setStep] = useState(0);

  const handleNextStep = async () => {
    const stepperComponent = document.querySelector('bds-stepper');

    const activeStep = await stepperComponent.getActiveStep();

    stepperComponent.setActiveStep(activeStep + 1);

    stepperComponent.setCompletedStep(activeStep);

    setStep(activeStep + 1);
  };

  const getStepContentByIndex = (index) => {
    const content = {
      0: 'Step one',
      1: 'Step two',
      2: 'Step three',
    };

    return content[index];
  };
  return (
    <>
      <div style={styles}>
        <bds-stepper>
          <bds-step active="true">Step one 1</bds-step>
          <bds-step>Step two 2</bds-step>
          <bds-step>Step three 3</bds-step>
        </bds-stepper>
        <bds-paper elevation="secondary" style={paperStyles}>
          {getStepContentByIndex(step)}
          {step === 3 && 'Finished!'}
        </bds-paper>
        {(step == 0 || step == 1) && <bds-button onClick={handleNextStep}>Next step</bds-button>}
        {step == 2 && <bds-button onClick={handleNextStep}>Finish</bds-button>}
      </div>
    </>
  );
};
