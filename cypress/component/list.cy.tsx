import { BdsList, BdsListItem, BdsListItemContent, BdsTabGroup, BdsTabItem, BdsTypo } from '../dist/blip-ds-react';

type TypeList = 'checkbox' | 'radio' | 'switch' | 'default';

export interface Props {
  event?: boolean;
  typeList?: TypeList;
}

const List = (props: Props) => {
  const eventAvalible = props.event;
  const eventBdsListCheckboxChange = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail[0].value.toString();
    }
  };
  const eventBdsListRadioChange = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail.value.toString();
    }
  };
  const eventBdsListSwitchChange = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail[0].value.toString();
    }
  };
  return (
    <>
      <button>Botão anterior</button>
      <BdsList
        typeList={props.typeList ? props.typeList : 'default'}
        onBdsListCheckboxChange={(ev) => eventBdsListCheckboxChange(ev)}
        onBdsListRadioChange={(ev) => eventBdsListRadioChange(ev)}
        onBdsListSwitchChange={(ev) => eventBdsListSwitchChange(ev)}
      >
        <BdsListItem clickable value="01">
          <BdsListItemContent>
            <BdsTypo>Text of the item</BdsTypo>
          </BdsListItemContent>
        </BdsListItem>
        <BdsListItem clickable value="02">
          <BdsListItemContent>
            <BdsTypo>Text of the item</BdsTypo>
          </BdsListItemContent>
        </BdsListItem>
      </BdsList>
      {eventAvalible && <input id="event-test" />}
    </>
  );
};

describe('Teste de Renderização List', () => {
  // Teste de Renderização
  it('deve renderizar o List com o typeList correto', () => {
    cy.mount(<List event={false} typeList="default" />);
    cy.get('bds-list').should('have.attr', 'type-list', 'default');
  });
});

describe('Teste de Eventos List', () => {
  // Teste de Evento onBdsListCheckboxChange
  it('deve chamar o evento onBdsListCheckboxChange ao clicar', () => {
    cy.mount(<List event={true} typeList="checkbox" />);
    cy.get('bds-list').find('bds-list-item[value="01"]').click();
    cy.get('input#event-test').should('have.value', '01');
  });
  // Teste de Evento onBdsListRadioChange
  it('deve chamar o evento onBdsListRadioChange ao clicar', () => {
    cy.mount(<List event={true} typeList="radio" />);
    cy.get('bds-list').find('bds-list-item[value="01"]').click();
    cy.get('input#event-test').should('have.value', '01');
  });
  // Teste de Evento onBdsListSwitchChange
  it('deve chamar o evento onBdsListSwitchChange ao clicar', () => {
    cy.mount(<List event={true} typeList="switch" />);
    cy.get('bds-list').find('bds-list-item[value="01"]').click();
    cy.get('input#event-test').should('have.value', '01');
  });
});

describe('Teste de Acessibilidade List', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o List usando a tecla Tab', () => {
    cy.mount(<List event={false} />);
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-list').find('bds-list-item[value="01"]').should('have.focus');
  });
});
