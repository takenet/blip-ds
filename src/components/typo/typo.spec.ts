import { newSpecPage } from '@stencil/core/testing';
import { Typo } from './typo';

describe('bds-typo', () => {
  const variantMock = 'fs-10';

  it('should render', async () => {
    const page = await newSpecPage({
      html: `<bds-typo>Test</bds-typo>`,
      components: [Typo]
    });

    expect(page.root.shadowRoot.querySelector(".typo")).toBeTruthy();
    expect(page.root.querySelector(".typo")).toBeFalsy();
    expect(page.root.shadowRoot.querySelector("p")).toBeTruthy();
    expect(page.root.shadowRoot.querySelector(".typo__variant--fs-16")).toBeTruthy();
    expect(page.root.shadowRoot.querySelector(".typo--no-wrap")).toBeFalsy();
    expect(page.root.shadowRoot.querySelector(".typo--paragraph")).toBeFalsy();
  });

  it('should render passed variant', async () => {
    const page = await newSpecPage({
      html: `<bds-typo variant="${variantMock}">Test</bds-typo>`,
      components: [Typo]
    });

    expect(page.root.shadowRoot.querySelector(".typo")).toBeTruthy();
    expect(page.root.querySelector(".typo")).toBeFalsy();
    expect(page.root.shadowRoot.querySelector(".typo__variant--fs-16")).toBeFalsy();
    expect(page.root.shadowRoot.querySelector(".typo__variant--fs-10")).toBeTruthy();
  });

  it('should render passed noWrap', async () => {
    const page = await newSpecPage({
      html: `<bds-typo no-wrap="${true}">Test</bds-typo>`,
      components: [Typo]
    });

    expect(page.root.shadowRoot.querySelector(".typo--no-wrap")).toBeTruthy();
  });

  it('should render passed paragraph', async () => {
    const page = await newSpecPage({
      html: `<bds-typo paragraph="${true}">Test</bds-typo>`,
      components: [Typo]
    });

    expect(page.root.shadowRoot.querySelector(".typo--paragraph")).toBeTruthy();
  });

  it('should render passed tag', async () => {
    const page = await newSpecPage({
      html: `<bds-typo tag="h1">Test</bds-typo>`,
      components: [Typo]
    });

    expect(page.root.shadowRoot.querySelector("p")).toBeFalsy();
    expect(page.root.shadowRoot.querySelector("h1")).toBeTruthy();
  });
});