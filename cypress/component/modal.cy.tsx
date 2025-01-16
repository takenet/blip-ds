import { BdsButton, BdsModal, BdsModalAction, BdsTypo } from '../dist/blip-ds-react';

export interface Props {
  event?: boolean;
}

const Modal = (props: Props) => {
  const eventAvalible = props.event;
  const eventBdsModalChanged = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail.modalStatus.toString();
    }
  };
  const toggle = () => {
    const dropdownElement = document.querySelector('bds-modal');
    dropdownElement.toggle();
  };
  return (
    <>
      <button id="toggle" onClick={() => toggle()}>
        toggle
      </button>
      <BdsModal
        onBdsModalChanged={(ev) => eventBdsModalChanged(ev)}
        outzoneClose={true}
        closeButton={true}
        size="fixed"
      >
        <BdsTypo variant="fs-14" bold="regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </BdsTypo>
        <BdsModalAction>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            <BdsButton icon="video" variant="secondary">
              Tutorial
            </BdsButton>
            <BdsButton>Ok, entendi</BdsButton>
          </div>
        </BdsModalAction>
      </BdsModal>
      {eventAvalible && <input id="event-test" />}
    </>
  );
};

describe('Teste de Eventos Modal', () => {
  // Teste de Evento onBdsModalChanged
  it('deve chamar o evento onBdsModalChanged ao clicar', () => {
    cy.mount(<Modal event={true} />);
    cy.get('button[id=toggle]').click();
    cy.get('input#event-test').should('have.value', 'opened');
  });
});

describe('Teste de Acessibilidade Modal', () => {
  // Teste de Acessibilidade método toggle
  it('Verificar se o método toggle esta sendo correspondido', () => {
    cy.mount(<Modal event={false} />);
    cy.get('button[id=toggle]').click();
    cy.get('bds-modal').shadow().find('.modal__dialog').should('have.class', 'modal__dialog--open');
  });
});
