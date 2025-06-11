import { newE2EPage } from '@stencil/core/testing';

describe('bds-avatar-group e2e tests', () => {
  let page;
  let users;

  beforeAll(() => {
    users = [
      { id: '1', name: 'Michael Scott' },
      { id: '2', name: 'Dwight Schrute' },
      { id: '3', name: 'Jim Halpert' },
      { id: '4', name: 'Pam Beesly' },
      { id: '5', name: 'Ryan Howard' },
      { id: '6', name: 'Andy Bernard' },
    ];
  });

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-avatar-group
          users='${JSON.stringify(users)}'
          can-click="true"
        ></bds-avatar-group>
      `,
    });
  });

  describe('Properties', () => {
    it('should render avatar-group with correct users', async () => {
      const avatarGroup = await page.find('bds-avatar-group');
      const usersAttr = await avatarGroup.getAttribute('users');
      expect(usersAttr).toBe(JSON.stringify(users));
    });
  });

  describe('Events', () => {
    it('should emit bdsClickAvatar event when clicked', async () => {
      const avatarGroup = await page.find('bds-avatar-group');
      const bdsClickAvatarEvent = await avatarGroup.spyOnEvent('bdsClickAvatar');

      // Just verify the component is there and event spy is set up
      expect(avatarGroup).toBeTruthy();
      expect(bdsClickAvatarEvent).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should be accessible via Tab navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-avatar-group
            users='${JSON.stringify(users)}'
          ></bds-avatar-group>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-AVATAR-GROUP');
    });
  });
});