import { BdsImage } from '../dist/blip-ds-react';

const Image = () => {
  const loadImage = async () => {
    const buttonElement = document.querySelector('bds-image');
    await buttonElement.loadImage();
  };
  return (
    <>
      <button id="loadImage" onClick={() => loadImage()}>
        Botão anterior
      </button>
      <BdsImage
        src="https://picsum.photos/300/200"
        alt="Example of a image"
        width="300px"
        height="200px"
        objectFit="cover"
        brightness={1}
      />
    </>
  );
};

describe('Teste de Renderização Image', () => {
  // Teste de Renderização src
  it('deve renderizar o button com o src correto', () => {
    cy.mount(<Image />);
    cy.get('bds-image').should('have.attr', 'src', 'https://picsum.photos/300/200');
  });
  // Teste de Renderização alt
  it('deve renderizar o button com o alt correto', () => {
    cy.mount(<Image />);
    cy.get('bds-image').should('have.attr', 'alt', 'Example of a image');
  });
  // Teste de Renderização width
  it('deve renderizar o button com o width correto', () => {
    cy.mount(<Image />);
    cy.get('bds-image').should('have.attr', 'width', '300px');
  });
  // Teste de Renderização height
  it('deve renderizar o button com o height correto', () => {
    cy.mount(<Image />);
    cy.get('bds-image').should('have.attr', 'height', '200px');
  });
  // Teste de Renderização object-fit
  it('deve renderizar o button com o object-fit correto', () => {
    cy.mount(<Image />);
    cy.get('bds-image').should('have.attr', 'object-fit', 'cover');
  });
  // Teste de Renderização brightness
  it('deve renderizar o button com o brightness correto', () => {
    cy.mount(<Image />);
    cy.get('bds-image').should('have.attr', 'brightness', '1');
  });
});

describe('Teste de Acessibilidade Dropdown', () => {
  // Teste de Acessibilidade método loadImage
  it('Verificar se o método loadImage esta sendo correspondido', () => {
    cy.mount(<Image />);
    cy.get('button[id=loadImage]').click();
    cy.get('bds-image').shadow().find('bds-skeleton');
  });
});
