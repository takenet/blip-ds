import { newSpecPage } from '@stencil/core/testing';
import { BdsLoadingSpinner } from '../loading-spinner';

describe('toast spinner tests', () => {
  const getLoadingSpinner = async () => {
    return await newSpecPage({
      components: [BdsLoadingSpinner],
      html: `<bds-loading-spinner></bds-loading-spinner>`,
    });
  };

  const getLightLoadingSpinner = async () => {
    return await newSpecPage({
      components: [BdsLoadingSpinner],
      html: `<bds-loading-spinner variant="primary"></bds-loading-spinner>`,
    });
  };

  it('should render the component', () => {
    expect(new BdsLoadingSpinner()).toBeTruthy();
  });

  it('should add the color prop', async () => {
    const page = await getLoadingSpinner();

    const spinner = await page.doc.querySelector('bds-loading-spinner');
    spinner.variant = 'primary';

    await page.waitForChanges();

    expect(await page.root.shadowRoot.querySelector('.sk-child--primary')).toBeTruthy();
    expect(await page.root.shadowRoot.querySelector('.sk-child--secondary')).toBeFalsy();
    expect(await page.root.shadowRoot.querySelector('.sk-child--ghost')).toBeFalsy();
  });

  it('should change the color prop', async () => {
    const page = await getLightLoadingSpinner();

    const spinner = await page.doc.querySelector('bds-loading-spinner');

    let spinnerClasses = await page.root.shadowRoot.querySelector('.sk-child');

    expect(spinnerClasses).toHaveClass('sk-child--primary');
    expect(spinnerClasses).not.toHaveClass('sk-child--secondary');

    spinner.variant = 'secondary';

    await page.waitForChanges();

    spinnerClasses = await page.root.shadowRoot.querySelector('.sk-child');

    expect(spinnerClasses).not.toHaveClass('sk-child--ghost');
    expect(spinnerClasses).not.toHaveClass('sk-child--primary');
    expect(spinnerClasses).toHaveClass('sk-child--secondary');
  });
});
