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
    <bds-modal open={boolean('open', true)} close-button={boolean('close-button', false)}>
      <bds-modal-action>
        <bds-button icon="video" variant="secondary">Tutorial</bds-button>
        <bds-button>Ok, entendi</bds-button>
      </bds-modal-action>
    </bds-modal>
  </>
);

export const informativeModal = () => (
  <>
    <bds-modal open={boolean('open', true)} close-button={boolean('close-button', false)}>
      <div style={{ display: 'flex', alignItems: 'center', height: '288px' }}>
        <div style={{ paddingRight: '20px' }}>
          <img src="https://picsum.photos/200/210?random=2" />
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
      <bds-modal-action>
        <bds-button icon="video" variant="secondary">Tutorial</bds-button>
        <bds-button>Ok, entendi</bds-button>
      </bds-modal-action>
    </bds-modal>
  </>
);

export const newsModal = () => (
  <>
    <bds-modal open={boolean('open', true)} close-button={boolean('close-button', false)}>
      <div style={{ display: 'flex', alignItems: 'center', height: '288px' }}>
        <div style={{ paddingRight: '20px' }}>
          <iframe width="280" height="168" src="https://www.youtube.com/embed/tDfDzUiG-oY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <bds-chip variant="watermelon" style={{ marginBottom: '5px' }}>Novidades!</bds-chip>
          <bds-typo variant="fs-20" bold="semi-bold">
            Oi, Marcelo!
            conheça os BLiPspaces
          </bds-typo>
          <bds-typo variant="fs-14" bold="regular">
            Workspaces são espaços de trabalho onde equipes podem se comunicar e trabalhar com projetos em comum. Agrupar os chatbots em workspaces também facilita a administração e governança de seus projetos e equipes.
            Vamos organizar os seus BLiPspaces? 😃
          </bds-typo>
        </div>
      </div>
      <div style={{ display: 'flex', position: 'absolute', left: '32px', bottom: '32px' }}>
        <bds-typo variant="fs-10" bold="regular">
          Conheça mais sobre os BLiPspaces aqui
        </bds-typo>
      </div>
      <bds-modal-action>
        <bds-button variant="secondary">Button label</bds-button>
        <bds-button>Ok, entendi</bds-button>
      </bds-modal-action>
    </bds-modal>
  </>
);

export const warningModal = () => (
  <>
    <bds-modal open={boolean('open', true)} close-button={boolean('close-button', false)}>
      <div style={{ display: 'flex', alignItems: 'center', height: '288px' }}>
        <div style={{ paddingRight: '20px' }}>
          <img src="https://picsum.photos/200/210?random=2" />
        </div>
        <div>
          <bds-typo style={{ color: 'rgba(246, 167, 33, 1)' }} variant="fs-20" bold="semi-bold">
            Atenção!
          </bds-typo>
          <bds-typo variant="fs-14" bold="regular">
            Você está movendo os chatbots selecionados para o workspace Unilever. Todos os membros com acesso a eles e suas permissões também serão movidos.
            Esta ação não pode ser desfeita!
          </bds-typo>
          <div style={{ paddingTop: '20px' }}>
            <bds-typo variant="fs-14" bold="regular">Para confirmar, digite <bds-typo style={{ color: '#21CC79' }} variant="fs-14" bold="regular" tag="span">Unilever</bds-typo> no campo abaixo.</bds-typo>
          </div>

          <div style={{ width: '312px', padding: '8px' }}>
            <bds-input></bds-input>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', position: 'absolute', left: '32px', bottom: '32px' }}>
        <bds-typo variant="fs-10" bold="regular">
          Conheça mais sobre os BLiPspaces aqui
        </bds-typo>
      </div>
      <bds-modal-action>
        <bds-button variant="secondary">Button label</bds-button>
        <bds-button>Ok, entendi</bds-button>
      </bds-modal-action>
    </bds-modal>
  </>
);

export const InviteModal = () => (
  <>
    <bds-modal open={boolean('open', true)} close-button={boolean('close-button', false)}>
      <div style={{ height: '204px', margin: 'auto' }}>
        <div style={{ display: 'flex', height: '76px', paddingBottom: '24px' }}>
          <div style={{ paddingRight: '20px' }}>
            <img width="89px" height="76px" src="https://picsum.photos/200/210?random=2" />
          </div>
          <div>
            <bds-typo tag="h4" variant="fs-20" bold="semi-bold">
              Convidar pessoas
          </bds-typo>
          <div style={{width:'326px'}}>
            <bds-typo variant="fs-14" bold="regular">
              Convide os membros do seu time para participar deste workspace:
          </bds-typo>
          </div>
            
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '398px', paddingRight: '8px' }}>
            <bds-input placeholder="E-mail dos convidados" icon="user-default"></bds-input>
          </div>
          <div style={{ width: '186px' }}>
            <bds-select placeholder="Tipo de permissão">
              <bds-select-option value="1">Visualização</bds-select-option>
              <bds-select-option value="2">Edição</bds-select-option>
              <bds-select-option value="3">Administrador</bds-select-option>
            </bds-select>
          </div>
        </div>
        <div style={{width:'398px', display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:'8px'}}>
          <bds-typo variant="fs-12">ou</bds-typo>
          <bds-button icon="info" variant="secondary">Importar vários</bds-button>
          <bds-typo variant="fs-10">Veja a formatação da tabela aqui</bds-typo>
        </div>
      </div>
      <bds-modal-action>
        <bds-button variant="secondary">Button label</bds-button>
        <bds-button>Ok, entendi</bds-button>
      </bds-modal-action>
    </bds-modal>
  </>
);
