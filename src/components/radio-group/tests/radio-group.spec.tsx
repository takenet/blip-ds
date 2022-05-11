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
});
