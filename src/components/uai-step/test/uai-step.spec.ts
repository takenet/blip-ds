import { newSpecPage } from '@stencil/core/testing';
import { UaiStep } from '../uai-step';

const render = async (html: string) => {
  const page = await newSpecPage({ components: [UaiStep], html });
  return { page, root: page.root.shadowRoot };
};

describe('uai-step', () => {
  it('shows the number, the heading and the description', async () => {
    const { page, root } = await render('<uai-step index="1" heading="Revisão" description="Confira os dados"></uai-step>');
    expect(root.querySelector('.step__marker').textContent).toContain('2');
    expect(root.querySelector('.step__heading').textContent).toBe('Revisão');
    expect(root.querySelector('.step__description').textContent).toBe('Confira os dados');
    expect(page.root.getAttribute('role')).toBe('listitem');
  });

  it('offers slots that fall back to the props', async () => {
    const { root } = await render('<uai-step heading="Título"></uai-step>');
    expect(root.querySelector('slot[name="heading"]')).not.toBeNull();
    expect(root.querySelector('slot[name="description"]')).not.toBeNull();
  });

  it('shows a check instead of the number when completed', async () => {
    const { root } = await render('<uai-step completed heading="One"></uai-step>');
    expect(root.querySelector('uai-icon')).not.toBeNull();
    expect(root.querySelector('.step--completed')).not.toBeNull();
  });

  it('lets the active state win over completed', async () => {
    const { root } = await render('<uai-step active completed heading="One"></uai-step>');
    expect(root.querySelector('.step--active')).not.toBeNull();
    expect(root.querySelector('.step--completed')).toBeNull();
    expect(root.querySelector('uai-icon')).toBeNull();
  });

  it('exposes active and disabled state to assistive technology', async () => {
    const { page } = await render('<uai-step active disabled heading="One"></uai-step>');
    expect(page.root.getAttribute('aria-current')).toBe('step');
    expect(page.root.getAttribute('aria-disabled')).toBe('true');
  });

  it('draws the connector only in the vertical layout and not on the last step', async () => {
    const horizontal = await render('<uai-step heading="One"></uai-step>');
    expect(horizontal.root.querySelector('.step__line')).toBeNull();
    const vertical = await render('<uai-step orientation="vertical" heading="One"></uai-step>');
    expect(vertical.root.querySelector('.step__line')).not.toBeNull();
    const last = await render('<uai-step orientation="vertical" last heading="One"></uai-step>');
    expect(last.root.querySelector('.step__line')).toBeNull();
  });

  it('only shows the pointer on enabled steps', async () => {
    const { root } = await render('<uai-step pointer disabled heading="One"></uai-step>');
    expect(root.querySelector('.step--pointer')).toBeNull();
  });

  it('is a focusable button that announces its index when clickable', async () => {
    const { page, root } = await render('<uai-step pointer index="2" heading="One"></uai-step>');
    const content = root.querySelector('.step') as HTMLElement;
    expect(content.getAttribute('role')).toBe('button');
    expect(content.getAttribute('tabindex')).toBe('0');
    const selected = jest.fn();
    page.root.addEventListener('uaiStepSelect', (event: CustomEvent) => selected(event.detail));
    content.click();
    content.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    content.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    content.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
    expect(selected.mock.calls).toEqual([[2], [2], [2]]);
  });

  it('is neither a button nor selectable when disabled or not clickable', async () => {
    for (const html of ['<uai-step pointer disabled heading="One"></uai-step>', '<uai-step heading="One"></uai-step>']) {
      const { page, root } = await render(html);
      const selected = jest.fn();
      page.root.addEventListener('uaiStepSelect', selected);
      (root.querySelector('.step') as HTMLElement).click();
      expect(root.querySelector('.step').getAttribute('role')).toBeNull();
      expect(selected).not.toHaveBeenCalled();
    }
  });
});
