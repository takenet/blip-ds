import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { UaiPageHeader } from '../uai-page-header';
import { UaiBreadcrumb } from '../../uai-breadcrumb/uai-breadcrumb';
import { UaiTypo } from '../../uai-typo/uai-typo';

const components = [UaiPageHeader, UaiBreadcrumb, UaiTypo];

describe('uai-page-header', () => {
  it('defaults to a primary h1 without breadcrumb or invented actions', async () => {
    const page = await newSpecPage({
      components,
      template: () => <uai-page-header title="Reports" items={[{ label: 'Ignored' }]} />,
    });
    expect(page.rootInstance.level).toBe('primary');
    const title = page.root.shadowRoot.querySelector('uai-typo');
    expect(title.tag).toBe('h1');
    expect(title.variant).toBe('title-md');
    expect(title.textContent).toBe('Reports');
    expect(page.root.shadowRoot.querySelector('uai-breadcrumb')).toBeNull();
    expect(page.root.shadowRoot.querySelector('uai-button')).toBeNull();
    expect(page.root.shadowRoot.querySelector('slot').name).toBe('actions');
  });

  it('passes breadcrumb props without using title as a secondary fallback', async () => {
    const items = [{ label: 'Home' }, { label: 'Current' }];
    const labels = { edit: 'Rename' };
    const page = await newSpecPage({
      components,
      template: () => (
        <uai-page-header
          level="secondary"
          title="Ignored"
          items={items}
          wrapItems={false}
          editable
          language="en_US"
          labels={labels}
        >
          <uai-button slot="actions" disabled>
            Save
          </uai-button>
        </uai-page-header>
      ),
    });
    const breadcrumb = page.root.shadowRoot.querySelector('uai-breadcrumb');
    expect(breadcrumb.items).toBe(items);
    expect(breadcrumb.wrapItems).toBe(false);
    expect(breadcrumb.editable).toBe(true);
    expect(breadcrumb.language).toBe('en_US');
    expect(breadcrumb.labels).toBe(labels);
    expect(breadcrumb.currentHeadingLevel).toBe(1);
    expect(page.root.shadowRoot.textContent).not.toContain('Ignored');
    expect(page.root.querySelector('uai-button').hasAttribute('disabled')).toBe(true);
    page.root.items = [];
    await page.waitForChanges();
    expect(breadcrumb.items).toEqual([]);
  });

  it('does not reemit breadcrumb events', async () => {
    const page = await newSpecPage({ components, html: '<uai-page-header level="secondary" />' });
    const handler = jest.fn();
    page.root.addEventListener('uaiBreadcrumbItemEdit', handler);
    const detail = { index: 0, oldValue: 'Old', value: 'New' };
    page.root.shadowRoot
      .querySelector('uai-breadcrumb')
      .dispatchEvent(new CustomEvent('uaiBreadcrumbItemEdit', { detail, bubbles: true, composed: true }));
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe(detail);
  });
});
