import { newSpecPage } from '@stencil/core/testing';
import { CardColor } from './card-color';

describe('bds-card-color', () => {
  const nameMock = 'Main BLiP';
  const variableMock = 'color-primary-main';
  const hexMock = '#2cc3d5';

  it('should render', async () => {
    const page = await newSpecPage({
      html: `<bds-card-color name="${nameMock}" variable="${variableMock}"></bds-card-color>`,
      components: [CardColor]
    });

    expect(page.root.shadowRoot.querySelector(".card-color")).toBeTruthy();
    expect(page.root.querySelector(".card-color")).toBeFalsy();
    expect(page.root.shadowRoot.querySelector(".color__description__value")).toBeFalsy();
  });

  it('should render with HEX', async () => {
    const page = await newSpecPage({
      html: `<bds-card-color name="${nameMock}" variable="${variableMock}" hex="${hexMock}"></bds-card-color>`,
      components: [CardColor]
    });

    expect(page.root.shadowRoot.querySelector(".card-color")).toBeTruthy();
    expect(page.root.querySelector(".card-color")).toBeFalsy();
    expect(page.root.shadowRoot.querySelector(".card-color__description__value")).toBeTruthy();
  });

  it('should render props', async () => {
    const page = await newSpecPage({
      html: `<bds-card-color name="${nameMock}" variable="${variableMock}"></bds-card-color>`,
      components: [CardColor]
    });

    expect(page.root.shadowRoot.querySelector('.card-color__description__name__text').textContent).toBe(nameMock);
    expect(page.root.shadowRoot.querySelector('.card-color--color').textContent).toBe(`$${variableMock}`);
  })

  it('should render props with HEX', async () => {
    const page = await newSpecPage({
      html: `<bds-card-color name="${nameMock}" variable="${variableMock}" hex="${hexMock}"></bds-card-color>`,
      components: [CardColor]
    });

    expect(page.root.shadowRoot.querySelector('.card-color__description__value__text').textContent).toBe(hexMock);
  })

});