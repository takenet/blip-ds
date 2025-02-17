import { BdsAutocomplete, BdsSelectOption } from '../dist/blip-ds-react';

export interface Props {
  event?: boolean;
  selectionType?: 'single' | 'multiple';
}

const Autocomplete = (props: Props) => {
  const eventAvalible = props.event;
  const selectionType = props.selectionType;

  const eventChange = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail.value;
    }
  };
  const eventInput = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.target.value;
    }
  };
  const eventSelectedChange = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail.innerText;
    }
  };
  const eventMultiselectedChange = (event: CustomEvent) => {
    if (eventAvalible) {
      setTimeout(() => {
        const input = document.getElementById('event-test') as HTMLInputElement;
        const value = event.detail.value.map((item) => item.label);
        input.value = value[0].toString();
      }, 50);
    }
  };
  return (
    <>
      <button>Botão anterior</button>
      <BdsAutocomplete
        label="Label"
        icon="edit"
        value=""
        disabled={false}
        placeholder="Digite aqui..."
        helperMessage="Mensagem de ajuda"
        dataTest="bds-autocomplete"
        selectionType={selectionType}
        onBdsChange={(ev) => eventChange(ev)}
        onBdsInput={(ev) => eventInput(ev)}
        onBdsBlur={cy.stub().as('bdsBlur')}
        onBdsFocus={cy.stub().as('bdsFocus')}
        onBdsSelectedChange={(ev) => eventSelectedChange(ev)}
        onBdsMultiselectedChange={(ev) => eventMultiselectedChange(ev)}
      >
        <BdsSelectOption value="1">Millie Bobby</BdsSelectOption>
        <BdsSelectOption value="2">Finn Wolfhard</BdsSelectOption>
        <BdsSelectOption value="3">David Harbour</BdsSelectOption>
        <BdsSelectOption value="4">Gaten Matarazzo</BdsSelectOption>
        <BdsSelectOption value="5">Caleb McLaughlin</BdsSelectOption>
        <BdsSelectOption value="6">Noah Schnapp</BdsSelectOption>
      </BdsAutocomplete>
      {eventAvalible && <input type="text" id="event-test" />}
    </>
  );
};

describe('Teste de Renderização Input', () => {
  // Teste de Renderização
  it('deve renderizar o input com o label correto', () => {
    cy.mount(<Autocomplete />);
    cy.get('bds-autocomplete').should('have.attr', 'label', 'Label');
  });
  it('deve renderizar o input com o icon correto', () => {
    cy.mount(<Autocomplete />);
    cy.get('bds-autocomplete').should('have.attr', 'icon', 'edit');
  });
  it('deve renderizar o input com o placeholder correto', () => {
    cy.mount(<Autocomplete />);
    cy.get('bds-autocomplete').should('have.attr', 'placeholder', 'Digite aqui...');
  });
  it('deve renderizar o input com o helperMessage correto', () => {
    cy.mount(<Autocomplete />);
    cy.get('bds-autocomplete').should('have.attr', 'helper-message', 'Mensagem de ajuda');
  });
});

describe('Teste de Interação Input', () => {
  // Teste de Interação de Focus
  it('deve permitir que o usuário focalize o input', () => {
    cy.mount(<Autocomplete />);
    cy.get('bds-autocomplete').click();
    cy.get('bds-autocomplete').should('have.focus');
  });

  // Teste de Interação de Digitação
  it('deve permitir que o usuário digite no input', () => {
    cy.mount(<Autocomplete />);

    cy.get('bds-autocomplete').shadow().find('[data-test="bds-autocomplete"]').type('Hello, Cypress!');
    cy.get('bds-autocomplete').shadow().find('[data-test="bds-autocomplete"]').should('have.value', 'Hello, Cypress!');
  });
});

describe('Teste de Eventos Input', () => {
  // Teste de Evento onChange
  it('deve chamar o evento onChange ao digitar', () => {
    cy.mount(<Autocomplete event={true} />);
    cy.get('bds-autocomplete').shadow().find('[data-test="bds-autocomplete"]').type('Cypress');
    cy.get('input#event-test').should('have.value', 'Cypress');
  });
  // Teste de Evento onInput
  it('deve chamar o evento onInput ao digitar', () => {
    cy.mount(<Autocomplete event={true} />);
    cy.get('bds-autocomplete').shadow().find('[data-test="bds-autocomplete"]').type('Cypress');
    cy.get('input#event-test').should('have.value', 'Cypress');
  });
  // Teste de Evento onBlur
  it('deve chamar o evento onBlur', () => {
    cy.mount(<Autocomplete event={true} />);
    cy.get('bds-autocomplete').shadow().find('[data-test="bds-autocomplete"]').type('Cypress');
    cy.realPress('Tab');
    cy.get('@bdsBlur').should('have.been.called');
  });
  // Teste de Evento onFocus
  it('deve chamar o evento onFocus', () => {
    cy.mount(<Autocomplete event={true} />);
    cy.get('bds-autocomplete').click();
    cy.get('@bdsFocus').should('have.been.called');
  });
  // Teste de Evento onSelectedChange
  it('deve chamar o evento onSelectedChange', () => {
    cy.mount(<Autocomplete event={true} />);
    cy.get('bds-autocomplete').click().find('bds-select-option[value="1"]').click();
    cy.get('input#event-test').should('have.value', 'Millie Bobby');
  });

  // Teste de Evento onMultiSelectedChange
  it('deve chamar o evento onMultiSelectedChange', () => {
    cy.mount(<Autocomplete event={true} selectionType="multiple" />);
    cy.get('bds-autocomplete').click().find('bds-select-option[value="1"]').click();
    cy.get('bds-autocomplete').click();
    cy.get('input#event-test').should('have.value', 'Millie Bobby');
  });
});

describe('Teste de Acessibilidade Input', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o input usando a tecla Tab', () => {
    cy.mount(
      <>
        <Autocomplete />
      </>,
    );
    cy.get('button').first().focus();
    cy.wait(50);
    cy.realPress('Tab');
    cy.wait(50);
    cy.get('bds-autocomplete').should('have.focus');
  });
});
