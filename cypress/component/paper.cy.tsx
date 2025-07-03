import { BdsPaper } from '../dist/blip-ds-react';

export interface Props {
  event?: boolean;
}

const Paper = (props: Props) => {
  return (
    <>
      <BdsPaper
        elevation="static"
        border={true}
        height="200px"
        width="200px"
        bgColor="surface-1"
        borderColor="border-1"
      ></BdsPaper>
    </>
  );
};

describe('Teste de Renderização Paper', () => {
  // Teste de Renderização
  it('deve renderizar o Paper com o elevation correto', () => {
    cy.mount(<Paper event={false} />);
    cy.get('bds-paper').should('have.attr', 'elevation', 'static');
  });
  // Teste de Renderização
  it('deve renderizar o Paper com o border correto', () => {
    cy.mount(<Paper event={false} />);
    cy.get('bds-paper').should('have.attr', 'border', 'true');
  });
  // Teste de Renderização
  it('deve renderizar o Paper com o height correto', () => {
    cy.mount(<Paper event={false} />);
    cy.get('bds-paper').should('have.attr', 'height', '200px');
  });
  // Teste de Renderização
  it('deve renderizar o Paper com o width correto', () => {
    cy.mount(<Paper event={false} />);
    cy.get('bds-paper').should('have.attr', 'width', '200px');
  });
  // Teste de Renderização
  it('deve renderizar o Paper com o bgColor correto', () => {
    cy.mount(<Paper event={false} />);
    cy.get('bds-paper').should('have.attr', 'bg-color', 'surface-1');
  });
  // Teste de Renderização
  it('deve renderizar o Paper com o borderColor correto', () => {
    cy.mount(<Paper event={false} />);
    cy.get('bds-paper').should('have.attr', 'border-color', 'border-1');
  });
});
