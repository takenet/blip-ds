import { newSpecPage } from '@stencil/core/dist/testing';
import { Text } from './text';

describe('bds-text', () => {
  const variantMock = 'fs-10';

  it('should render', async () => {
    const page = await newSpecPage({
      html: `<bds-text></bds-text>`,
      components: [Text]
    });

    expect(page.root.shadowRoot.querySelector(".text")).toBeTruthy();
    expect(page.root.querySelector(".text")).toBeFalsy();
    expect(page.root.shadowRoot.querySelector(".text__variant--fs-16")).toBeTruthy();
  });

  it('should render passed variant', async () => {
    const page = await newSpecPage({
      html: `<bds-text variant="${variantMock}"></bds-text>`,
      components: [Text]
    });

    expect(page.root.shadowRoot.querySelector(".text")).toBeTruthy();
    expect(page.root.querySelector(".text")).toBeFalsy();
    expect(page.root.shadowRoot.querySelector(".text__variant--fs-16")).toBeFalsy();
    expect(page.root.shadowRoot.querySelector(".text__variant--fs-10")).toBeTruthy();
  });
});