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
    const page = await getTooltipWithButton('top');

    expect(page.body.querySelector('bds-tooltip')).toBeTruthy();
    expect(page.body.querySelector('bds-button')).toBeTruthy();
  });

  it('it should test all position props', async () => {
    const positions = [
      'top',
      'top-left',
      'top-right',
      'left',
      'left-top',
      'left-bottom',
      'bottom',
      'bottom-right',
      'bottom-left',
      'right',
      'right-top',
      'right-bottom',
    ];

    for (const position of positions) {
      const page = await getTooltipWithButton(position as TooltipPostionType);

      const tooltip = page.body.querySelector('bds-tooltip');

      expect(tooltip.position).toBe(position);

      const tip = page.body.querySelector('.tooltip__tip');

      expect(tip.classList.contains(`tooltip__tip--${position}`)).toBeTruthy();
    }
  });

  it('should render text on tooltipText prop', async () => {
    const page = await getTooltipWithButton('top');

    const tooltip = page.body.querySelector('bds-tooltip');

    const tooltipText = page.body.querySelectorAll('bds-typo')[1];

    expect(tooltip.tooltipText).toBe('Tooltip text test');
    expect(tooltipText.innerText).toBe('Tooltip text test');
  });
});
