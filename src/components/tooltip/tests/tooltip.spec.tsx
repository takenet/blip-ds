import { newSpecPage } from '@stencil/core/testing';
import { Tooltip, TooltipPostionType } from '../tooltip';
import { Button } from '../../button/button';

describe('bds-tooltip', () => {
  const getTooltipWithButton = async (position: TooltipPostionType) => {
    return await newSpecPage({
      components: [Tooltip, Button],
      html: `
        <bds-tooltip tooltip-text="Tooltip text test" position=${position}>
          <bds-button>Button text</bds-button>
        </bds-tooltip>`,
      supportsShadowDom: false,
    });
  };

  it('should build', async () => {
    const page = await getTooltipWithButton('top-center');

    expect(page.body.querySelector('bds-tooltip')).toBeTruthy();
    expect(page.body.querySelector('bds-button')).toBeTruthy();
  });
});
