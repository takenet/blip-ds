import React from 'react';
import { defineCustomElements } from '../dist/esm/loader';
import { BdsInput } from '../dist/blip-ds-react';

defineCustomElements(window);

describe('Input Component', () => {
  // Teste de Renderização
  it('deve renderizar o input com o placeholder correto', () => {
    cy.mount(<BdsInput placeholder="Digite aqui..." />);
    cy.get('bds-input').should('have.attr', 'placeholder', 'Digite aqui...');
  });

  // Teste de Interação de (Digitação)
  // it('deve permitir que o usuário digite no input', () => {
  //   const handleChange = cy.stub();
  //   cy.mount(<BdsInput value="" onBdsInput={() => handleChange} />);

  //   cy.get('bds-input').type('Hello, Cypress!');
  //   cy.get('bds-input').should('have.value', 'Hello, Cypress!');
  // });

  // Teste de Evento onChange
  // it('deve chamar o evento onChange ao digitar', () => {
  //   const handleChange = cy.stub();
  //   cy.mount(<BdsInput value="" onBdsChange={() => handleChange} />);

  //   cy.get('bds-input').type('Cypress');
  //   expect(handleChange).to.have.been.called;
  // });

  // Teste de Acessibilidade com Tab
  // it('deve ser possível navegar para o input usando a tecla Tab', () => {
  //   cy.mount(
  //     <>
  //       <button>Botão anterior</button>
  //       <BdsInput />
  //     </>,
  //   );

  //   // Simula navegação por tab
  //   cy.get('button').first().focus(); // Foca no botão anterior
  //   cy.tab(); // Move para o input com Tab
  //   cy.get('bds-input').should('have.focus'); // Verifica se o input está focado
  // });

  // Teste de Acessibilidade - Verificar se não há violações => Opcional <=
  // it('deve garantir que não há violações de acessibilidade', () => {
  //   cy.mount(<BdsInput />);
  //   cy.injectAxe(); // Injeta as ferramentas de acessibilidade
  //   cy.checkA11y(); // Verifica se há violações de acessibilidade
  // });
});
