import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { UaiNavbarContent } from '../uai-navbar-content';

describe('uai-navbar-content', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [UaiNavbarContent],
      html: '<uai-navbar-content></uai-navbar-content>',
    });
  });

  it('renders a slot with the NavbarContent class', () => {
    expect(page.root).toEqualHtml(`
      <uai-navbar-content class="NavbarContent">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uai-navbar-content>
    `);
  });

});
