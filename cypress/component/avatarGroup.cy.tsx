import { BdsAvatarGroup } from '../dist/blip-ds-react';

const users = [
  { id: '1', name: 'Michael Scott' },
  { id: '2', name: 'Dwight Schrute' },
  { id: '3', name: 'Jim Halpert' },
  { id: '4', name: 'Pam Beesly' },
  { id: '5', name: 'Ryan Howard' },
  { id: '6', name: 'Andy Bernard' },
];

describe('Teste de Renderização avatar group', () => {
  // Teste de Renderização
  it('deve renderizar o avatar com o users correto', () => {
    cy.mount(<BdsAvatarGroup users={JSON.stringify(users)} />);
    cy.get('bds-avatar-group').should('have.attr', 'users', JSON.stringify(users));
  });
});

describe('Teste de Eventos avatar group', () => {
  // Teste de Evento onBdsClickAvatar
  it('deve chamar o evento onBdsClickAvatar ao clicar no componente', () => {
    cy.mount(
      <BdsAvatarGroup users={JSON.stringify(users)} canClick onBdsClickAvatar={cy.stub().as('bdsClickAvatar')} />,
    );
    cy.get('bds-avatar-group').click();
    cy.get('@bdsClickAvatar').should('have.been.called');
  });
});

describe('Teste de Acessibilidade avatar group', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o avatar usando a tecla Tab', () => {
    cy.mount(
      <>
        <button>Botão anterior</button>
        <BdsAvatarGroup users={JSON.stringify(users)} />
      </>,
    );
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-avatar-group').should('have.focus');
  });
});
