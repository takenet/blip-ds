import React, { useEffect } from 'react';
import DocumentationTemplate from './modal.mdx';
import { BdsButton, BdsModal, BdsModalAction, BdsTypo } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Modal',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '720px';
    el[0].style.height = '500px';
    el[0].style.position = 'relative';
  }
  return (
    <bds-modal
      open={args.open}
      enter-close={args.enterClose}
      outzone-close={args.outzoneClose}
      close-button={args.CloseButton}
      size={args.size}
    >
      <bds-typo variant="fs-14" bold="regular">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </bds-typo>
      <bds-modal-action>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', width: '100%' }}>
          <bds-button icon="video" variant="secondary">
            Tutorial
          </bds-button>
          <bds-button>Ok, entendi</bds-button>
        </div>
      </bds-modal-action>
    </bds-modal>
  );
};

Properties.args = {
  closeButton: true,
  open: true,
  outzoneClose: true,
  enterClose: true,
  size: 'dynamic',
};
Properties.argTypes = {
  closeButton: {
    table: {
      defaultValue: { summary: 'true' },
    },

    control: 'boolean',
  },
  open: {
    table: {
      defaultValue: { summary: 'true' },
    },

    control: 'boolean',
  },
  outzoneClose: {
    table: {
      defaultValue: { summary: 'true' },
    },

    control: 'boolean',
  },
  enterClose: {
    table: {
      defaultValue: { summary: 'true' },
    },

    control: 'boolean',
  },
  size: {
    table: {
      defaultValue: { summary: 'dynamic' },
    },

    options: ['dynamic', 'fixed'],
    control: 'select',
  },
};

export const Events = () => {
  useEffect(() => {
    const modal = document.getElementById('modal');
    modal.addEventListener('bdsModalChanged', () => {
      console.log('Evento bdsModalChanged funcionando');
    });
  });
  return (
    <bds-modal open={true} outzone-close={true} close-button={true} id="modal">
      <bds-typo variant="fs-14" bold="regular">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </bds-typo>
      <bds-modal-action>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', width: '100%' }}>
          <bds-button icon="video" variant="secondary">
            Tutorial
          </bds-button>
          <bds-button>Ok, entendi</bds-button>
        </div>
      </bds-modal-action>
    </bds-modal>
  );
};

export const Methods = () => {
  const btToggle = async (id) => {
    const acc = document.getElementById(id);
    await acc.toggle();
  };
  return (
    <>
      <bds-button onClick={() => btToggle('modal')} variant="primary" size="short">
        Abrir Modal
      </bds-button>
      <bds-modal open={true} outzone-close={true} close-button={true} id="modal">
        <bds-typo variant="fs-14" bold="regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </bds-typo>
        <bds-modal-action>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', width: '100%' }}>
            <bds-button icon="video" variant="secondary">
              Tutorial
            </bds-button>
            <bds-button>Ok, entendi</bds-button>
          </div>
        </bds-modal-action>
      </bds-modal>
    </>
  );
};

export const FrameworkReact = (args) => {
  return (
    <BdsModal open={args.open} outzone-close={args.outzoneClose} close-button={args.CloseButton} size={args.size}>
      <BdsTypo variant="fs-14" bold="regular">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </BdsTypo>
      <BdsModalAction>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', width: '100%' }}>
          <BdsButton icon="video" variant="secondary">
            Tutorial
          </BdsButton>
          <BdsButton>Ok, entendi</BdsButton>
        </div>
      </BdsModalAction>
    </BdsModal>
  );
};
