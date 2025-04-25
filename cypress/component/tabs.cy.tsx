import { BdsTabGroup, BdsTabItem, BdsTypo } from '../dist/blip-ds-react';

export interface Props {
  event?: boolean;
}

const Tabs = (props: Props) => {
  const eventAvalible = props.event;
  const eventBdsTabChange = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail.numberElement.toString();
    }
  };
  return (
    <>
      <button>Botão anterior</button>
      <BdsTabGroup contentScrollable={true} align="left" onBdsTabChange={(ev) => eventBdsTabChange(ev)}>
        <BdsTabItem label="Basic settings">
          <BdsTypo variant="fs-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat. Integer
            arcu enim, placerat eget mauris sed, pretium congue augue.
          </BdsTypo>
        </BdsTabItem>
        <BdsTabItem label="Advanced settings">
          <BdsTypo variant="fs-16">
            Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In hac
            habitasse platea dictumst. Morbi non suscipit nisi.
          </BdsTypo>
        </BdsTabItem>
      </BdsTabGroup>
      {eventAvalible && <input id="event-test" />}
    </>
  );
};

describe('Teste de Renderização Tabs', () => {
  // Teste de Renderização
  it('deve renderizar o Tabs com o contentScrollable correto', () => {
    cy.mount(<Tabs event={false} />);
    cy.get('bds-tab-group').should('have.attr', 'content-scrollable', 'true');
  });
  // Teste de Renderização
  it('deve renderizar o Tabs com o align correto', () => {
    cy.mount(<Tabs event={false} />);
    cy.get('bds-tab-group').should('have.attr', 'align', 'left');
  });
});

describe('Teste de Eventos Tabs', () => {
  // Teste de Evento onBdsTabsChange
  it('deve chamar o evento onBdsTabsChange ao clicar', () => {
    cy.mount(<Tabs event={true} />);
    cy.get('bds-tab-group').shadow().find('.tab_group__header__itens__item__open').next().click();
    cy.get('input#event-test').should('have.value', '1');
  });
});

describe('Teste de Acessibilidade Tabs', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o Tabs usando a tecla Tab', () => {
    cy.mount(<Tabs event={false} />);
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-tab-group').shadow().find('.tab_group__header__itens__item__open').should('have.focus');
  });
});
