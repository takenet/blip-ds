import { newSpecPage } from '@stencil/core/testing';
import { BdsModalCloseButton } from './modal-close-button';

describe('bds-modal-close-button', () => {
  const variantMock = 'warning';
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsModalCloseButton],
      html: `<bds-modal-close-button></bds-modal-close-button>`,
    });
  });

  it('should render the component', async () => {
    expect(page.root).toEqualHtml(`
      <bds-modal-close-button active="">
        <mock:shadow-root>
          <div class="modal__close__button-icon modal__close__button-icon--active">
            <bds-icon name="close" size="medium"></bds-icon>
          </div>
        </mock:shadow-root>
      </bds-modal-close-button>
    `);
  });

  it('should render with shadow dom', async () => {
    expect(page.root.shadowRoot.querySelector('.modal__close__button-icon')).toBeTruthy();
    expect(page.root.querySelector('.modal__close__button-icon')).toBeFalsy();
  });

});
