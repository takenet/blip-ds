import { newSpecPage } from '@stencil/core/testing';
import { AvatarGroup } from '../avatar-group';
import { BdsAvatar } from '../../avatar/avatar';

describe('bds-avatar-group', () => {
  const mockUsers = [
    { id: '1', name: 'John Doe', thumbnail: 'https://example.com/john.jpg' },
    { id: '2', name: 'Jane Smith', thumbnail: 'https://example.com/jane.jpg' },
    { id: '3', name: 'Bob Johnson', thumbnail: 'https://example.com/bob.jpg' },
    { id: '4', name: 'Alice Brown', thumbnail: 'https://example.com/alice.jpg' },
    { id: '5', name: 'Charlie Wilson', thumbnail: 'https://example.com/charlie.jpg' },
  ];

  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [AvatarGroup, BdsAvatar],
      html: `<bds-avatar-group></bds-avatar-group>`,
    });

    // Test default property values
    expect(page.root.size).toBe('standard');
    expect(page.root.users).toBeUndefined();
    expect(page.root.canClick).toBeUndefined();

    // Should render the container with correct classes
    expect(page.root.shadowRoot.querySelector('.avatar__group')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.avatar__group__size--standard')).toBeTruthy();
    
    // Should show slot when no users are provided
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should render avatars from users array', async () => {
    const usersJson = JSON.stringify(mockUsers);
    const page = await newSpecPage({
      components: [AvatarGroup, BdsAvatar],
      html: `<bds-avatar-group users='${usersJson}'></bds-avatar-group>`,
    });

    // Should render bds-avatar elements
    const avatars = page.root.shadowRoot.querySelectorAll('bds-avatar');
    expect(avatars.length).toBe(5);

    // Check first avatar properties
    expect(avatars[0].getAttribute('name')).toBe('John Doe');
    expect(avatars[0].getAttribute('thumbnail')).toBe('https://example.com/john.jpg');
    expect(avatars[0].getAttribute('size')).toBe('standard');
    expect(avatars[0].getAttribute('color')).toBe('system'); // First color in rotation
  });

  it('should render avatars from JSON string users', async () => {
    const usersJson = JSON.stringify(mockUsers);
    const page = await newSpecPage({
      components: [AvatarGroup, BdsAvatar],
      html: `<bds-avatar-group users='${usersJson}'></bds-avatar-group>`,
    });

    const avatars = page.root.shadowRoot.querySelectorAll('bds-avatar');
    expect(avatars.length).toBe(5);
    expect(avatars[0].getAttribute('name')).toBe('John Doe');
  });

  it('should handle invalid JSON gracefully', async () => {
    const page = await newSpecPage({
      components: [AvatarGroup, BdsAvatar],
      html: `<bds-avatar-group users='invalid json'></bds-avatar-group>`,
    });

    // Should fall back to slot when JSON is invalid
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
    expect(page.root.shadowRoot.querySelectorAll('bds-avatar').length).toBe(0);
  });

  describe('size variations', () => {
    const sizeTestCases = ['extra-small', 'small', 'standard'];

    sizeTestCases.forEach(size => {
      it(`should render with ${size} size`, async () => {
        const usersJson = JSON.stringify(mockUsers);
        const page = await newSpecPage({
          components: [AvatarGroup, BdsAvatar],
          html: `<bds-avatar-group size="${size}" users='${usersJson}'></bds-avatar-group>`,
        });

        expect(page.root.shadowRoot.querySelector(`.avatar__group__size--${size}`)).toBeTruthy();
        
        // All avatars should have the same size
        const avatars = page.root.shadowRoot.querySelectorAll('bds-avatar');
        avatars.forEach(avatar => {
          expect(avatar.getAttribute('size')).toBe(size);
        });
      });
    });
  });

  describe('avatar overflow handling', () => {
    it('should show ellipsis avatar when more than 5 users', async () => {
      const manyUsers = [
        ...mockUsers,
        { id: '6', name: 'David Miller', thumbnail: 'https://example.com/david.jpg' },
        { id: '7', name: 'Eva Garcia', thumbnail: 'https://example.com/eva.jpg' },
      ];

      const usersJson = JSON.stringify(manyUsers);
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group users='${usersJson}'></bds-avatar-group>`,
      });

      const avatars = page.root.shadowRoot.querySelectorAll('bds-avatar');
      expect(avatars.length).toBe(6); // First 5 + ellipsis

      // Last avatar should have ellipsis
      const lastAvatar = avatars[avatars.length - 1];
      expect(lastAvatar.getAttribute('ellipsis')).toBe('2'); // 7 total - 5 shown = 2 leftovers
      expect(lastAvatar.getAttribute('color')).toBe('surface');
    });

    it('should limit display to 6 avatars maximum', async () => {
      const manyUsers = Array.from({ length: 10 }, (_, i) => ({
        id: String(i + 1),
        name: `User ${i + 1}`,
        thumbnail: `https://example.com/user${i + 1}.jpg`
      }));

      const usersJson = JSON.stringify(manyUsers);
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group users='${usersJson}'></bds-avatar-group>`,
      });

      const avatars = page.root.shadowRoot.querySelectorAll('bds-avatar');
      expect(avatars.length).toBe(6); // Never more than 6
    });
  });

  describe('color rotation', () => {
    it('should apply colors in rotation', async () => {
      const usersJson = JSON.stringify(mockUsers);
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group users='${usersJson}'></bds-avatar-group>`,
      });

      const avatars = page.root.shadowRoot.querySelectorAll('bds-avatar');
      const expectedColors = ['system', 'success', 'warning', 'error', 'info'];

      avatars.forEach((avatar, index) => {
        expect(avatar.getAttribute('color')).toBe(expectedColors[index]);
      });
    });
  });

  describe('click functionality', () => {
    it('should emit bdsClickAvatarGroup event when clicked and canClick is true', async () => {
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group can-click="true"></bds-avatar-group>`,
      });

      const clickHandler = jest.fn();
      page.root.addEventListener('bdsClickAvatarGroup', clickHandler);

      const groupDiv = page.root.shadowRoot.querySelector('.avatar__group');
      groupDiv.click();

      expect(clickHandler).toHaveBeenCalled();
    });

    it('should apply click class when canClick is true', async () => {
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group can-click="true"></bds-avatar-group>`,
      });

      expect(page.root.shadowRoot.querySelector('.avatar__group__click--true')).toBeTruthy();
    });

    it('should render focus element when canClick is true', async () => {
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group can-click="true"></bds-avatar-group>`,
      });

      expect(page.root.shadowRoot.querySelector('.focus')).toBeTruthy();
    });

    it('should not render focus element when canClick is false', async () => {
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group></bds-avatar-group>`,
      });

      expect(page.root.shadowRoot.querySelector('.focus')).toBeFalsy();
    });
  });

  describe('keyboard accessibility', () => {
    it('should have tabindex for keyboard navigation', async () => {
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group></bds-avatar-group>`,
      });

      const groupDiv = page.root.shadowRoot.querySelector('.avatar__group');
      expect(groupDiv.getAttribute('tabindex')).toBe('0');
    });

    it('should handle keyboard events when canClick is true', async () => {
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group can-click="true"></bds-avatar-group>`,
      });

      const clickHandler = jest.fn();
      page.root.addEventListener('bdsClickAvatarGroup', clickHandler);

      // Test Enter key
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      page.rootInstance.handleClickKey(enterEvent);
      expect(clickHandler).toHaveBeenCalled();

      // Test Space key
      const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
      page.rootInstance.handleClickKey(spaceEvent);
      expect(clickHandler).toHaveBeenCalledTimes(2);
    });

    it('should not handle keyboard events when canClick is false', async () => {
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group></bds-avatar-group>`,
      });

      const clickHandler = jest.fn();
      page.root.addEventListener('bdsClickAvatarGroup', clickHandler);

      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      page.rootInstance.handleClickKey(enterEvent);
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe('slot functionality', () => {
    it('should render slot when no users are provided', async () => {
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group><span>Custom content</span></bds-avatar-group>`,
      });

      expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
      expect(page.root.shadowRoot.querySelectorAll('bds-avatar').length).toBe(0);
    });
  });

  describe('edge cases', () => {
    it('should handle empty users array', async () => {
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group users='[]'></bds-avatar-group>`,
      });

      expect(page.root.shadowRoot.querySelectorAll('bds-avatar').length).toBe(0);
      expect(page.root.shadowRoot.querySelector('slot')).toBeFalsy(); // Empty array means users were provided but empty
    });

    it('should handle null users gracefully', async () => {
      const page = await newSpecPage({
        components: [AvatarGroup, BdsAvatar],
        html: `<bds-avatar-group></bds-avatar-group>`,
      });

      expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
    });
  });

  describe('internal methods', () => {
    it('should return correct color from avatarBgColor method', () => {
      const component = new AvatarGroup();
      
      expect(component.avatarBgColor(0)).toBe('system');
      expect(component.avatarBgColor(1)).toBe('success');
      expect(component.avatarBgColor(2)).toBe('warning');
      expect(component.avatarBgColor(3)).toBe('error');
      expect(component.avatarBgColor(4)).toBe('info');
    });
  });
});
