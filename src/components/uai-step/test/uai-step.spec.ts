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
});
