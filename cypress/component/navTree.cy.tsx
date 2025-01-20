import { BdsNavTree, BdsNavTreeItem } from '../dist/blip-ds-react';

export interface Props {
  event?: boolean;
}

const NavTree = (props: Props) => {
  const eventAvalible = props.event;
  const eventBdsToggleChange = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail.value.toString();
    }
  };
  const toggle = () => {
    const dropdownElement = document.querySelector('bds-nav-tree');
    dropdownElement.toggle();
  };
  return (
    <>
      <button id="toggle" onClick={() => toggle()}>
        toggle
      </button>
      <BdsNavTree
        onBdsToogleChange={(ev) => eventBdsToggleChange(ev)}
        colapse="single"
        icon="heart"
        text="Título"
        secondaryText="Breve Descrição"
      >
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição">
          <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
          <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
          <BdsNavTreeItem text="Título" secondaryText="Breve Descrição">
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
            <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
          </BdsNavTreeItem>
          <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
          <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        </BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
        <BdsNavTreeItem text="Título" secondaryText="Breve Descrição"></BdsNavTreeItem>
      </BdsNavTree>
      {eventAvalible && <input id="event-test" />}
    </>
  );
};

describe('Teste de Renderização NavTree', () => {
  // Teste de Renderização
  it('deve renderizar o NavTree com o colapse correto', () => {
    cy.mount(<NavTree event={false} />);
    cy.get('bds-nav-tree').should('have.attr', 'colapse', 'single');
  });
  // Teste de Renderização
  it('deve renderizar o NavTree com o text correto', () => {
    cy.mount(<NavTree event={false} />);
    cy.get('bds-nav-tree').should('have.attr', 'text', 'Título');
  });
  // Teste de Renderização
  it('deve renderizar o NavTree com o icon correto', () => {
    cy.mount(<NavTree event={false} />);
    cy.get('bds-nav-tree').should('have.attr', 'icon', 'heart');
  });
  // Teste de Renderização
  it('deve renderizar o NavTree com o secondary-text correto', () => {
    cy.mount(<NavTree event={false} />);
    cy.get('bds-nav-tree').should('have.attr', 'secondary-text', 'Breve Descrição');
  });
});

describe('Teste de Eventos NavTree', () => {
  // Teste de Evento onBdsToggleChange
  it('deve chamar o evento onBdsToggleChange ao clicar', () => {
    cy.mount(<NavTree event={true} />);
    cy.get('bds-nav-tree').shadow().find('.nav_main').click();
    cy.get('input#event-test').should('have.value', 'true');
  });
});

describe('Teste de Acessibilidade NavTree', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o navTree usando a tecla Tab', () => {
    cy.mount(<NavTree event={false} />);
    cy.get('button[id=toggle]').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-nav-tree').should('have.focus');
  });
  // Teste de Acessibilidade método toggle
  it('Verificar se o método toggle esta sendo correspondido', () => {
    cy.mount(<NavTree event={false} />);
    cy.get('button[id=toggle]').click();
    cy.get('bds-nav-tree').shadow().find('.nav_main').should('have.class', 'nav_main_active');
  });
});
