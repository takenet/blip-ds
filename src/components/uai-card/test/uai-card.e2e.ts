import { newE2EPage } from '@stencil/core/testing';

describe('uai-card e2e', () => {
  it('Scenario: Superfície estática usa tokens e o foco vai direto para a ação interna', async () => {
    const page = await newE2EPage({
      html: `
        <meta charset="utf-8" />
        <uai-theme-provider theme="light">
          <uai-card heading="Receita estimada">
            <button id="action-btn" slot="actions" type="button">Opções</button>
            <span>R$ 184.420</span>
          </uai-card>
        </uai-theme-provider>
      `,
    });

    await page.keyboard.press('Tab');
    const focusedId = await page.evaluate(() => document.activeElement && document.activeElement.id);
    expect(focusedId).toBe('action-btn');

    const matchesTokens = await page.evaluate(() => {
      const surface = document.querySelector('uai-card').shadowRoot.querySelector('.card');
      const tokens = getComputedStyle(document.querySelector('uai-theme-provider'));
      const probe = document.createElement('div');
      probe.style.backgroundColor = tokens.getPropertyValue('--uai-surface-paper').trim();
      probe.style.borderColor = tokens.getPropertyValue('--uai-border-default').trim();
      document.body.appendChild(probe);
      const expected = getComputedStyle(probe);
      const styles = getComputedStyle(surface);
      const result = {
        background: styles.backgroundColor === expected.backgroundColor,
        border: styles.borderTopColor === expected.borderColor.split(' ')[0] || styles.borderTopColor === expected.borderTopColor,
        cursor: styles.cursor,
      };
      probe.remove();
      return result;
    });
    expect(matchesTokens).toEqual({ background: true, border: true, cursor: 'auto' });
  });
});
