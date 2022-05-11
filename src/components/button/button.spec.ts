import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('bds-button', () => {
  const getPage = async ({ icon, arrow, loading } = { icon: '', arrow: false, loading: null }): Promise<SpecPage> => {
    const getButtonElement = (): string => {
      if (icon) {
        return `<bds-button icon=${icon}>click</bds-button>`;
      }

      if (arrow) {
        return `<bds-button arrow>click</bds-button>`;
      }

      if (loading) {
        return `<bds-button bds-loading=${loading}></bds-button>`;
      }

      return `<bds-button>click</bds-button>`;
    };

    return await newSpecPage({
      html: getButtonElement(),
      components: [Button],
    });
  };

  it('should render', async () => {
    const page = await getPage();

    expect(page.root.shadowRoot.querySelector('button')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.button')).toBeTruthy();
  });
});
