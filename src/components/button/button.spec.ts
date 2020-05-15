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

  it('should render', async () => {
    const page = await getPage();

    expect(page.root.shadowRoot.querySelector('button')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.button')).toBeTruthy();
  });

  it('should render with default props', async () => {
    const page = await getPage();

    expect(page.root.shadowRoot.querySelector('button')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.button__primary')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.button--size-standard')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('disabled')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('.button__content')).not.toHaveClass('hide');
  });

  it('should render without icon', async () => {
    const page = await getPage();

    expect(page.root.shadowRoot.querySelector('.button__icon')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('bds-icon')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('.button__content')).not.toHaveClass('hide');
  });

  it('should render the icon passed by prop', async () => {
    const page = await getPage({ icon: 'file-new', arrow: false, loading: null });

    expect(page.root.shadowRoot.querySelector('.button__icon')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('bds-icon')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('button').innerHTML).not.toContain('</bds-loading-spinner>');
  });

  it('should render without arrow', async () => {
    const page = await getPage({ icon: '', arrow: false, loading: null });

    expect(page.root.shadowRoot.querySelector('.button__arrow')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('button').innerHTML).not.toContain('</bds-loading-spinner>');
  });

  it('should render the arrow passed by prop', async () => {
    const page = await getPage({ icon: '', arrow: true, loading: null });

    expect(page.root.shadowRoot.querySelector('.button__arrow')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('button').innerHTML).not.toContain('</bds-loading-spinner>');
  });

  it('should render the loading spinner', async () => {
    const page = await getPage({ icon: '', arrow: false, loading: 'light' });

    expect(page.root.shadowRoot.querySelector('button').innerHTML).toContain('</bds-loading-spinner>');
    expect(page.root.shadowRoot.querySelector('.button__content')).toHaveClass('hide');
  });
});
