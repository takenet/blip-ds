import { BdsButton } from '../dist/blip-ds-react';

const Button = () => {
  const isActive = () => {
    const buttonElement = document.querySelector('bds-button');
    buttonElement.isActive(true);
  };
  const setPositionDirection = () => {
    const buttonElement = document.querySelector('bds-button');
    buttonElement.setDirection('row');
    buttonElement.setPosition('first');
  };
  const setSize = () => {
    const buttonElement = document.querySelector('bds-button');
    buttonElement.setSize('short');
  };
  const setColor = () => {
    const buttonElement = document.querySelector('bds-button');
    buttonElement.setColor('positive');
  };
  const setVariant = () => {
    const buttonElement = document.querySelector('bds-button');
    buttonElement.setVariant('outline');
  };
  return (
    <>
      <button id="isActive" onClick={() => isActive()}>
        Botão anterior
      </button>
      <button id="setPositionDirection" onClick={() => setPositionDirection()}>
        Botão anterior
      </button>
      <button id="setSize" onClick={() => setSize()}>
        Botão anterior
      </button>
      <button id="setColor" onClick={() => setColor()}>
        Botão anterior
      </button>
      <button id="setVariant" onClick={() => setVariant()}>
        Botão anterior
      </button>
      <BdsButton
        color="primary"
        iconLeft="edit"
        iconRight="edit"
        iconTheme="outline"
        size="medium"
        type="button"
        typeIcon="icon"
        variant="solid"
        onBdsClick={cy.stub().as('bdsClick')}
      >
        Button
      </BdsButton>
    </>
  );
};

describe('Teste de Renderização Button', () => {
  // Teste de Renderização
  it('deve renderizar o button com o color correto', () => {
    cy.mount(<Button />);
    cy.get('bds-button').should('have.attr', 'color', 'primary');
  });
  it('deve renderizar o button com o icon-left correto', () => {
    cy.mount(<Button />);
    cy.get('bds-button').should('have.attr', 'icon-left', 'edit');
  });
  it('deve renderizar o button com o icon-right correto', () => {
    cy.mount(<Button />);
    cy.get('bds-button').should('have.attr', 'icon-right', 'edit');
  });
  it('deve renderizar o button com o icon-theme correto', () => {
    cy.mount(<Button />);
    cy.get('bds-button').should('have.attr', 'icon-theme', 'outline');
  });
  it('deve renderizar o button com o size correto', () => {
    cy.mount(<Button />);
    cy.get('bds-button').should('have.attr', 'size', 'medium');
  });
  it('deve renderizar o button com o type correto', () => {
    cy.mount(<Button />);
    cy.get('bds-button').should('have.attr', 'type', 'button');
  });
  it('deve renderizar o button com o type-icon correto', () => {
    cy.mount(<Button />);
    cy.get('bds-button').should('have.attr', 'type-icon', 'icon');
  });
  it('deve renderizar o button com o variant correto', () => {
    cy.mount(<Button />);
    cy.get('bds-button').should('have.attr', 'variant', 'solid');
  });
});

describe('Teste de Eventos Button', () => {
  // Teste de Evento bdsClick
  it('deve chamar o evento onBdsClick ao clicar', () => {
    cy.mount(<Button />);
    cy.get('bds-button').shadow().find('button').click();
    cy.get('@bdsClick').should('have.been.called');
  });
});

describe('Teste de Acessibilidade button', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o button usando a tecla Tab', () => {
    cy.mount(<Button />);
    cy.get('button[id=setVariant]').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-button').should('have.focus');
  });
  // Teste de Acessibilidade método isActive
  it('Verificar se o método isActive esta sendo correspondido', () => {
    cy.mount(<Button />);
    cy.get('button[id=isActive]').click();
    cy.get('bds-button').shadow().find('button').should('have.class', 'button--active');
  });
  // Teste de Acessibilidade método setPosition
  it('Verificar se o método setPosition esta sendo correspondido', () => {
    cy.mount(<Button />);
    cy.get('button[id=setPositionDirection]').click();
    cy.get('bds-button').shadow().find('button').should('have.class', 'button__position--row--first');
  });
  // Teste de Acessibilidade método setSize
  it('Verificar se o método setSize esta sendo correspondido', () => {
    cy.mount(<Button />);
    cy.get('button[id=setSize]').click();
    cy.get('bds-button').shadow().find('button').should('have.class', 'button__size--short');
  });
  // Teste de Acessibilidade método setColor
  it('Verificar se o método setColor esta sendo correspondido', () => {
    cy.mount(<Button />);
    cy.get('button[id=setColor]').click();
    cy.get('bds-button').shadow().find('button').should('have.class', 'button__color--positive');
  });
  // Teste de Acessibilidade método setVariant
  it('Verificar se o método setVariant esta sendo correspondido', () => {
    cy.mount(<Button />);
    cy.get('button[id=setVariant]').click();
    cy.get('bds-button').shadow().find('button').should('have.class', 'button__variant--outline');
  });
});
