import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Radio } from '../../radio/radio';
import { RadioGroup } from '../radio-group';

describe('bds-radio-group', () => {
  let page: SpecPage;
  const getRadioGroupWithRadios = async () => {
    return await newSpecPage({
      components: [RadioGroup, Radio],
      html: `
        <bds-radio-group>
            <bds-radio value="radio1"></bds-radio>
            <bds-radio value="radio2"></bds-radio>
            <bds-radio value="radio3"></bds-radio>
        </bds-radio-group>`,
      supportsShadowDom: false,
      autoApplyChanges: true,
    });
  };

  beforeEach(async () => {
    page = await getRadioGroupWithRadios();
  });

  it('should build', async () => {
    expect(page.body.querySelector('bds-radio-group')).toBeTruthy();
    expect(page.body.querySelector('bds-radio')).toBeTruthy();
  });

  it('should build outside shadow dom', async () => {
    expect(page.body.shadowRoot).toBeFalsy();
  });

  it('should emit bdsChange event on radio select', async () => {
    const _callback = jest.fn();
    page.doc.addEventListener('bdsRadioGroupChange', _callback);

    page.body.querySelector('bds-radio').click();

    expect(_callback).toHaveBeenCalled();
  });

  it('should set prop value on radio click', async () => {
    (page.body.querySelector('bds-radio[value="radio1"]') as HTMLBdsRadioElement).click();

    expect(page.root.value).toBe('radio1');
  });

  it('should keep last radio clicked stored on the value', async () => {
    (page.body.querySelector('bds-radio[value="radio1"]') as HTMLBdsRadioElement).click();
    (page.body.querySelector('bds-radio[value="radio2"]') as HTMLBdsRadioElement).click();

    expect(page.root.value).toBe('radio2');
  });
});
