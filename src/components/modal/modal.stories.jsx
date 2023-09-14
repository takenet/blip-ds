import React from 'react';
import readme from './readme.md';

export default {
  title: 'Components/Modal',
  parameters: {
    notes: { markdown: readme },
  },
};

export const DefaultModal = () => (
  <>
    <bds-modal open={true} outzone-close={false} close-button={true}>
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

export const DynamicModal = () => (
  <>
    <bds-modal open={true} close-button={true} size="dynamic">
      <div style={{ display: 'flex', alignItems: 'center', width: '600px' }}>
        <div>
          <bds-typo variant="fs-20" bold="semi-bold">
            Leia atentamente todo o termo de uso:
          </bds-typo>
          <bds-typo variant="fs-14" bold="regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </bds-typo>
        </div>
      </div>
      <bds-modal-action>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', width: '100%' }}>
          <bds-button variant="secondary">Recuso</bds-button>
          <bds-button>Aceito</bds-button>
        </div>
      </bds-modal-action>
    </bds-modal>
  </>
);

export const InformativeModal = () => (
  <>
    <bds-modal open={true} close-button={true}>
      <div style={{ margin: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '24px' }}>
          <div style={{ paddingRight: '20px', width: '200px', height: '200px' }}>
            <bds-illustration type="spots" name="ticket"></bds-illustration>
          </div>
          <div style={{ width: 'calc(100% - 200px)' }}>
            <div style={{ display: 'flex', width: 'auto', marginBottom: '16px' }}>
              <bds-typo variant="fs-20" bold="semi-bold">
                O que é o Histórico de tickets?
              </bds-typo>
            </div>
            <div style={{ display: 'flex', width: '100%', marginBottom: '16px' }}>
              <bds-typo variant="fs-14" bold="regular">
                É o local onde você pode acessar todo o histórico dos tickets abertos. Além disso, é possível salvar os
                dados de atendimento em planilhas de acordo com os filtros escolhidos. Você também consegue exportar
                documentos em PDF com a transcrição completa de cada conversa.
              </bds-typo>
            </div>
          </div>
        </div>
      </div>
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

export const NewsModal = () => (
  <>
    <bds-modal open={true} close-button={true}>
      <div style={{ display: 'flex', alignItems: 'center', height: '288px' }}>
        <div style={{ paddingRight: '20px' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            width="280"
            height="168"
            src="https://www.youtube.com/embed/tDfDzUiG-oY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <bds-chip-tag color="info" style={{ marginBottom: '5px' }}>
            Novidades!
          </bds-chip-tag>
          <bds-typo variant="fs-20" bold="semi-bold">
            Oi, Usuário! conheça os BLiPspaces
          </bds-typo>
          <bds-typo variant="fs-14" bold="regular">
            Workspaces são espaços de trabalho onde equipes podem se comunicar e trabalhar com projetos em comum. Vamos
            organizar os seus BLiPspaces? 😃
          </bds-typo>
        </div>
      </div>
      <bds-modal-action>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', width: '100%' }}>
          <bds-button variant="secondary">Button label</bds-button>
          <bds-button>Ok, entendi</bds-button>
        </div>
      </bds-modal-action>
    </bds-modal>
  </>
);

export const WarningModal = () => (
  <>
    <bds-modal open={true} close-button={true}>
      <div style={{ margin: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '24px' }}>
          <div style={{ paddingRight: '20px', width: '200px', height: '200px' }}>
            <bds-illustration type="spots" name="letter-invite-blip"></bds-illustration>
          </div>
          <div style={{ width: 'calc(100% - 200px)' }}>
            <bds-typo variant="fs-14" bold="regular" style={{ marginBottom: '16px', display: 'block' }}>
              Você está movendo os chatbots selecionados para o workspace Unilever. Para confirmar, digite Unilever no
              campo abaixo.
            </bds-typo>
            <bds-banner variant="warning" button-close="true" style={{ marginBottom: '16px' }}>
              Todos as informações aqui são sigilosas. Tenha cuidado, não divulgue está tela!
            </bds-banner>
            <bds-input placeholder="Digite Unilever para confirmar"></bds-input>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', position: 'absolute', left: '32px', bottom: '32px' }}>
        <bds-typo variant="fs-10" bold="regular">
          Conheça mais sobre os BLiPspaces aqui
        </bds-typo>
      </div>

      <bds-modal-action>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', width: '100%' }}>
          <bds-button variant="secondary">Button label</bds-button>
          <bds-button>Ok, entendi</bds-button>
        </div>
      </bds-modal-action>
    </bds-modal>
  </>
);

export const InviteModal = () => (
  <>
    <bds-modal open={true} close-button={true}>
      <div style={{ margin: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '24px' }}>
          <div style={{ paddingRight: '20px', width: '200px', height: '200px' }}>
            <bds-illustration type="spots" name="letter-invite-blip"></bds-illustration>
          </div>
          <div style={{ width: 'calc(100% - 200px)' }}>
            <bds-typo tag="h4" variant="fs-20" bold="semi-bold">
              Convidar pessoas
            </bds-typo>
            <div style={{ width: 'auto', marginBottom: '16px' }}>
              <bds-typo variant="fs-14" bold="regular">
                Convide os membros do seu time para participar deste workspace:
              </bds-typo>
            </div>
            <div style={{ display: 'flex', gap: '8px', width: 'auto', marginBottom: '16px' }}>
              <bds-input placeholder="E-mail dos convidados" icon="user-default"></bds-input>
              <bds-select placeholder="Tipo de permissão">
                <bds-select-option value="1">Visualização</bds-select-option>
                <bds-select-option value="2">Edição</bds-select-option>
                <bds-select-option value="3">Administrador</bds-select-option>
              </bds-select>
            </div>
            <div style={{ display: 'flex', gap: '8px', width: 'auto', alignItems: 'center' }}>
              <bds-typo variant="fs-12">ou</bds-typo>
              <bds-button icon="info" variant="secondary">
                Importar vários
              </bds-button>
            </div>
          </div>
        </div>
      </div>
      <bds-modal-action>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', width: '100%' }}>
          <bds-button variant="secondary">Button label</bds-button>
          <bds-button>Ok, entendi</bds-button>
        </div>
      </bds-modal-action>
    </bds-modal>
  </>
);
