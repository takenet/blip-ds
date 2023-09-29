import React, { useState } from 'react';
import DocumentationTemplate from './stepper.mdx';
import { BdsStepper, BdsStep, BdsPaper, BdsButton } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Stepper',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
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

export const Properties = () => {
  const [step, setStep] = useState(0);

  const handleNextStep = async () => {
    const stepperComponent = document.querySelector('bds-stepper');

    const activeStep = await stepperComponent.getActiveStep();

    stepperComponent.setActiveStep(activeStep + 1);

    stepperComponent.setCompletedStep(activeStep);

    setStep(activeStep + 1);
  };

  const handlePreviousStep = async () => {
    const stepperComponent = document.querySelector('bds-stepper');

    const activeStep = await stepperComponent.getActiveStep();

    stepperComponent.setActiveStep(activeStep - 1);

    setStep(activeStep - 1);
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
        <div style={{ display: 'flex' }}>
          {(step == 1 || step == 2) && (
            <bds-button style={{ marginRight: '8px' }} onClick={handlePreviousStep}>
              Previous step
            </bds-button>
          )}
          {(step == 0 || step == 1) && <bds-button onClick={handleNextStep}>Next step</bds-button>}
          {step == 2 && <bds-button onClick={handleNextStep}>Finish</bds-button>}
        </div>
      </div>
    </>
  );
};

Properties.argTypes = {
  active: {
    table: {
      defaultValue: { summary: 'false' },
    },
  },
  completed: {
    table: {
      defaultValue: { summary: 'false' },
    },
  },
  disabled: {
    table: {
      defaultValue: { summary: 'true' },
    },
  },
  index: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
  },
  last: {
    table: {
      defaultValue: { summary: 'false' },
    },
  },
  pointer: {
    table: {
      defaultValue: { summary: 'false' },
    },
  },
}

export const Methods = () => {
  const [step, setStep] = useState(0);

  const handleNextStep = async () => {
    const stepperComponent = document.querySelector('bds-stepper');

    const activeStep = await stepperComponent.getActiveStep();

    stepperComponent.setActiveStep(activeStep + 1);

    stepperComponent.setCompletedStep(activeStep);

    setStep(activeStep + 1);
  };

  const handlePreviousStep = async () => {
    const stepperComponent = document.querySelector('bds-stepper');

    const activeStep = await stepperComponent.getActiveStep();

    stepperComponent.setActiveStep(activeStep - 1);

    setStep(activeStep - 1);
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
        <div style={{ display: 'flex' }}>
          {(step == 1 || step == 2) && (
            <bds-button style={{ marginRight: '8px' }} onClick={handlePreviousStep}>
              Previous step
            </bds-button>
          )}
          {(step == 0 || step == 1) && <bds-button onClick={handleNextStep}>Next step</bds-button>}
          {step == 2 && <bds-button onClick={handleNextStep}>Finish</bds-button>}
        </div>
      </div>
    </>
  );
};

export const FrameworkReact = () => {
  const [step, setStep] = useState(0);

  const handleNextStep = async () => {
    const stepperComponent = document.querySelector('bds-stepper');

    const activeStep = await stepperComponent.getActiveStep();

    stepperComponent.setActiveStep(activeStep + 1);

    stepperComponent.setCompletedStep(activeStep);

    setStep(activeStep + 1);
  };

  const handlePreviousStep = async () => {
    const stepperComponent = document.querySelector('bds-stepper');

    const activeStep = await stepperComponent.getActiveStep();

    stepperComponent.setActiveStep(activeStep - 1);

    setStep(activeStep - 1);
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
        <BdsStepper>
          <BdsStep active="true">Step one 1</BdsStep>
          <BdsStep>Step two 2</BdsStep>
          <BdsStep>Step three 3</BdsStep>
        </BdsStepper>
        <BdsPaper elevation="secondary" style={paperStyles}>
          {getStepContentByIndex(step)}
          {step === 3 && 'Finished!'}
        </BdsPaper>
        <div style={{ display: 'flex' }}>
          {(step == 1 || step == 2) && (
            <BdsButton style={{ marginRight: '8px' }} onClick={handlePreviousStep}>
              Previous step
            </BdsButton>
          )}
          {(step == 0 || step == 1) && <BdsButton onClick={handleNextStep}>Next step</BdsButton>}
          {step == 2 && <BdsButton onClick={handleNextStep}>Finish</BdsButton>}
        </div>
      </div>
    </>
  );
};