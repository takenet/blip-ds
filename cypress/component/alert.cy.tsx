import { BdsAlert, BdsAlertActions, BdsAlertBody, BdsAlertHeader, BdsButton } from '../dist/blip-ds-react';

describe('Teste de Renderização alert', () => {
  // Teste de Renderização
  it('deve renderizar o alert com o icon correto', () => {
    cy.mount(<BdsAlert icon="edit" />);
    cy.get('bds-alert').should('have.attr', 'icon', 'edit');
  });
});

const Alert = () => {
  const toogle = () => {
    const alertElement = document.querySelector('bds-alert');
    alertElement.toggle();
  };
  return (
    <>
      <button onClick={() => toogle()}>Botão anterior</button>
      <BdsAlert id="alert">
        <BdsAlertHeader variant="system" icon="info">
          Atenção!
        </BdsAlertHeader>
        <BdsAlertBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos
          error!
        </BdsAlertBody>
        <BdsAlertActions>
          <BdsButton variant="tertiary">Cancelar</BdsButton>
          <BdsButton variant="primary">Confirmar</BdsButton>
        </BdsAlertActions>
      </BdsAlert>
    </>
  );
};

describe('Teste de Acessibilidade alert', () => {
  // Teste de Acessibilidade método Toogle
  it('Verificar se o método toggle esta sendo correspondido', () => {
    cy.mount(<Alert />);
    cy.get('button').click();
    cy.get('bds-alert').should('have.attr', 'open');
  });
});
