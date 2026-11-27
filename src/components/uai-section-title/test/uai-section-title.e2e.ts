import { newE2EPage } from '@stencil/core/testing';

const withTheme = (content: string, theme = 'light') =>
  `<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`;

describe('uai-section-title e2e', () => {
  it('applies Figma typography and padding tokens', async () => {
    const page = await newE2EPage({
      html: withTheme(
        '<uai-section-title heading="Desempenho" description="Indicadores consolidados do período"></uai-section-title>',
      ),
    });

    const result = await page.evaluate(() => {
      const root = document.querySelector('uai-section-title').shadowRoot;
      const tokens = getComputedStyle(document.querySelector('uai-theme-provider'));
      const token = (name: string) => tokens.getPropertyValue(name).trim();
      const toRgb = (value: string) => {
        const probe = document.createElement('div');
        probe.style.color = value;
        document.body.appendChild(probe);
        const rgb = getComputedStyle(probe).color;
        probe.remove();
        return rgb;
      };
      const toPx = (value: string) => {
        const probe = document.createElement('div');
        probe.style.width = value;
        document.body.appendChild(probe);
        const px = getComputedStyle(probe).width;
        probe.remove();
        return px;
      };
      const container = getComputedStyle(root.querySelector('.section-title'));
      const heading = getComputedStyle(root.querySelector('.section-title__heading'));
      const description = getComputedStyle(root.querySelector('.section-title__description'));
      return {
        background: container.backgroundColor,
        paddingTop: container.paddingTop === toPx(token('--uai-spacing-xs')),
        paddingLeft: container.paddingLeft === toPx(token('--uai-spacing-md')),
        headingFontSize: heading.fontSize === toPx(token('--uai-heading-md-font-size')),
        headingLineHeight: heading.lineHeight === toPx(token('--uai-heading-md-line-height')),
        headingFontWeight: heading.fontWeight === token('--uai-font-weight-medium'),
        headingColor: heading.color === toRgb(token('--uai-content-primary')),
        descFontSize: description.fontSize === toPx(token('--uai-body-base-font-size')),
        descLineHeight: description.lineHeight === toPx(token('--uai-body-base-line-height')),
        descFontWeight: description.fontWeight === token('--uai-font-weight-regular'),
        descColor: description.color === toRgb(token('--uai-content-secondary')),
      };
    });

    expect(result).toEqual({
      background: 'rgba(0, 0, 0, 0)',
      paddingTop: true,
      paddingLeft: true,
      headingFontSize: true,
      headingLineHeight: true,
      headingFontWeight: true,
      headingColor: true,
      descFontSize: true,
      descLineHeight: true,
      descFontWeight: true,
      descColor: true,
    });
  });

  it('aligns slot="actions" to the trailing edge without overlapping the heading', async () => {
    const page = await newE2EPage({
      html: withTheme(
        '<uai-section-title heading="Conversas ativas"><button id="act" slot="actions">Filtrar</button></uai-section-title>',
      ),
    });

    const positions = await page.evaluate(() => {
      const root = document.querySelector('uai-section-title').shadowRoot;
      const headingRect = root.querySelector('.section-title__heading').getBoundingClientRect();
      const actionRect = document.querySelector('#act').getBoundingClientRect();
      return {
        headingRight: headingRect.right,
        actionLeft: actionRect.left,
      };
    });

    expect(positions.actionLeft).toBeGreaterThanOrEqual(positions.headingRight);
  });

  it('omits the actions wrapper when empty and renders it when actions are added later', async () => {
    const page = await newE2EPage({
      html: withTheme('<uai-section-title heading="Canais"></uai-section-title>'),
    });

    const hasWrapper = () =>
      page.evaluate(() => Boolean(document.querySelector('uai-section-title').shadowRoot.querySelector('.section-title__actions')));

    expect(await hasWrapper()).toBe(false);

    await page.evaluate(() => {
      const action = document.createElement('button');
      action.setAttribute('slot', 'actions');
      action.textContent = 'Exportar';
      document.querySelector('uai-section-title').appendChild(action);
    });
    await page.waitForChanges();

    expect(await hasWrapper()).toBe(true);
  });
});
