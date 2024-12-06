import { BdsBanner, BdsBannerLink, BdsButton } from '../dist/blip-ds-react';

const Banner = () => {
  const toogle = () => {
    const bannerElement = document.querySelector('bds-banner');
    bannerElement.toggle();
  };
  return (
    <>
      <button onClick={() => toogle()}>Botão anterior</button>
      <BdsBanner
        variant="system"
        buttonClose="true"
        context="outside"
        onBdsBannerClose={cy.stub().as('bdsBannerClose')}
        dtButtonClose="should-button-close"
      >
        Instabilidade na plataforma? Não se preocupe, já estamos resolvendo!
        <BdsBannerLink onBdsBannerLink={cy.stub().as('bdsBannerLink')}>Acompanhe aqui</BdsBannerLink>
      </BdsBanner>
    </>
  );
};

describe('Teste de Renderização Banner', () => {
  // Teste de Renderização
  it('deve renderizar o banner com o variant correto', () => {
    cy.mount(<Banner />);
    cy.get('bds-banner').should('have.attr', 'variant', 'system');
  });
  it('deve renderizar o banner com o button-close correto', () => {
    cy.mount(<Banner />);
    cy.get('bds-banner').should('have.attr', 'button-close', 'true');
  });
  it('deve renderizar o banner com o context correto', () => {
    cy.mount(<Banner />);
    cy.get('bds-banner').should('have.attr', 'context', 'outside');
  });
});

describe('Teste de Eventos Banner', () => {
  // Teste de Evento onBdsBannerClose
  it('deve chamar o evento onBdsBannerClose ao digitar', () => {
    cy.mount(<Banner />);
    cy.get('bds-banner')
      .shadow()
      .find('bds-button-icon[icon="close"]')
      .shadow()
      .find('[data-test="should-button-close"]')
      .click();
    cy.get('@bdsBannerClose').should('have.been.called');
  });
  // Teste de Evento bdsBannerLink
  it('deve chamar o evento onBdsBannerLink ao digitar', () => {
    cy.mount(<Banner />);
    cy.get('bds-banner').find('bds-banner-link').click();
    cy.get('@bdsBannerLink').should('have.been.called');
  });
});

describe('Teste de Acessibilidade banner', () => {
  // Teste de Acessibilidade método Toogle
  it('Verificar se o método toggle esta sendo correspondido', () => {
    cy.mount(<Banner />);
    cy.get('bds-banner')
      .shadow()
      .find('bds-button-icon[icon="close"]')
      .shadow()
      .find('[data-test="should-button-close"]')
      .click();
    cy.get('button').click();
    cy.get('bds-banner').should('not.have.class', 'banner--hide');
  });
});
