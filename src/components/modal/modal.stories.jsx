import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Modal',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const defaultModal = () => (
  <>
    <bds-modal open={boolean('open', true)}>
      <div style={{ display: 'flex', alignItems: 'center', height: '343px' }}>
        <div style={{paddingRight: '20px'}}>
          <img src="https://picsum.photos/200/210?random=2"/>
        </div>
        <div>
          <bds-typo variant="fs-20" bold="semi-bold">
            O que é o Histórico de tickets?
          </bds-typo>
          <bds-typo variant="fs-14" bold="regular">
          É o local onde você pode acessar todo o histórico dos tickets abertos. Além disso, é possível salvar os dados de atendimento em planilhas de acordo com os filtros escolhidos. Você também consegue exportar documentos em PDF com a transcrição completa de cada conversa.
          </bds-typo>
        </div>
      </div>
      <div style={{ display: 'flex', position: 'absolute', left: '32px', bottom: '32px' }}>
        <bds-typo variant="fs-10" bold="regular">
        Em caso de dúvidas acesse nosso help center.
        </bds-typo>
      </div>
      <bds-modal-buttons>
        <bds-button icon="video" variant="secondary">Tutorial</bds-button>
        <bds-button>Ok, entendi</bds-button>
      </bds-modal-buttons>
    </bds-modal>
  </>
);