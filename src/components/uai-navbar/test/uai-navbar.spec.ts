import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { UaiNavbar } from '../uai-navbar';

describe('uai-navbar', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [UaiNavbar],
      html: '<uai-navbar></uai-navbar>',
    });
  });

  it('renders with the UAI surface paper background by default', () => {
    expect(page.root).toEqualHtml(`
      <uai-navbar class="vertical">
        <mock:shadow-root>
          <div class="navbar navbar__justify-content__space-between navbar__orientation__vertical navbar__background-color__surface-paper">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </uai-navbar>
    `);
  });

  it('applies properties and data-test independently', async () => {
    const customPage = await newSpecPage({
      components: [UaiNavbar],
      html: '<uai-navbar orientation="horizontal" background-color="surface-muted" justify-content="center" data-test="uai-navbar"></uai-navbar>',
    });
    const navbar = customPage.root.shadowRoot.querySelector('.navbar');

    expect(customPage.root).toHaveClass('horizontal');
    expect(navbar).toHaveClass('navbar__orientation__horizontal');
    expect(navbar).toHaveClass('navbar__background-color__surface-muted');
    expect(navbar).toHaveClass('navbar__justify-content__center');
    expect(navbar.getAttribute('data-test')).toBe('uai-navbar');
  });
});
