import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Switch } from '../bds-switch';

describe('bds-switch', () => {
  const getPage = async (
    { size, disabled, checked, name } = { size: '', disabled: null, checked: null, name: '' }
  ): Promise<SpecPage> => {
    const getSwitchElement = (): string => {
      if (size != null && size != '' && disabled && checked) {
        return `<bds-switch name=${name} size=${size} disabled=${disabled} checked=${checked}></bds-switch>`;
      }

      if (size != null && size != '' && disabled) {
        return `<bds-switch name=${name} size=${size} disabled=${disabled} ></bds-switch>`;
      }

      if (size != null && size != '' && checked) {
        return `<bds-switch name=${name} size=${size}  checked=${checked}></bds-switch>`;
      }

      if (disabled && checked) {
        return `<bds-switch  name=${name} disabled=${disabled} checked=${checked}></bds-switch>`;
      }

      if (size != null && size != '') {
        return `<bds-switch name=${name} size=${size}></bds-switch>`;
      }

      if (disabled) {
        return `<bds-switch name=${name} disabled=${disabled}></bds-switch>`;
      }

      if (checked) {
        return `<bds-switch name=${name} checked=${checked}></bds-switch>`;
      }

      return `<bds-switch name=${name} ></bds-switch>`;
    };

    return await newSpecPage({
      html: getSwitchElement(),
      components: [Switch],
    });
  };

  it('should render ', async () => {
    const page = await getPage();

    expect(page.root.shadowRoot.querySelector('.switch')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.switch--size-standard')).toBeTruthy();
  });

  it('should render with default props', async () => {
    const page = await getPage();

    expect(page.root.shadowRoot.querySelector('.switch')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.switch--size-standard')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('checked')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('disabled')).toBeFalsy();
  });

  it('should render the size passed by prop', async () => {
    const page = await getPage({ size: 'short', disabled: null, checked: null, name: null });

    expect(page.root.shadowRoot.querySelector('.switch')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.switch--size-short')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('checked')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('disabled')).toBeFalsy();
  });

  it('should render the disabled=true passed by prop', async () => {
    const page = await getPage({ size: 'short', disabled: true, checked: null, name: null });
    expect(page.root.shadowRoot.querySelector('.switch')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.switch--size-short')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.slider--deselected-disabled')).toBeTruthy();
  });

  it('should render the checked=true passed by prop', async () => {
    const page = await getPage({ size: null, disabled: true, checked: true, name: null });
    expect(page.root.shadowRoot.querySelector('.switch')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.switch--size-standard')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.slider--selected-disabled')).toBeTruthy();
  });

  it('should render the checked=false passed by prop', async () => {
    const page = await getPage({ size: null, disabled: false, checked: false, name: null });
    expect(page.root.shadowRoot.querySelector('.switch')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.switch--size-standard')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.slider--deselected')).toBeTruthy();
  });

  it('should be able to set check', async () => {
    const page = await getPage({ size: null, disabled: false, checked: false, name: null });
    page.root.shadowRoot.querySelectorAll('input')[0].click();
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.slider--selected')).toBeTruthy();
  });
});
