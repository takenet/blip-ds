import { newSpecPage } from '@stencil/core/testing';
import { BdsAvatar } from '../avatar';

describe('bds-avatar', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [BdsAvatar],
      html: `<bds-avatar></bds-avatar>`,
    });

    // Test default property values
    expect(page.root.name).toBe(null);
    expect(page.root.thumbnail).toBe(null);
    expect(page.root.size).toBe('standard');
    expect(page.root.color).toBe('colorLetter');
    expect(page.root.upload).toBe(false);
    expect(page.root.openUpload).toBe(false);
    expect(page.root.ellipsis).toBe(null);
    expect(page.root.dataTest).toBe(null);

    // Test default render shows user-default icon for empty avatar
    expect(page.root.shadowRoot.querySelector('bds-icon[name="user-default"]')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.avatar__size--standard')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.avatar__color--surface')).toBeTruthy();
  });

  it('should render with name initials', async () => {
    const page = await newSpecPage({
      components: [BdsAvatar],
      html: `<bds-avatar name="John Doe"></bds-avatar>`,
    });

    const typoElement = page.root.shadowRoot.querySelector('bds-typo');
    expect(typoElement).toBeTruthy();
    expect(typoElement.textContent).toBe('JD');
    expect(typoElement.getAttribute('variant')).toBe('fs-20'); // standard size
  });

  it('should render with single name initial', async () => {
    const page = await newSpecPage({
      components: [BdsAvatar],
      html: `<bds-avatar name="John"></bds-avatar>`,
    });

    const typoElement = page.root.shadowRoot.querySelector('bds-typo');
    expect(typoElement.textContent).toBe('J');
  });

  it('should render with multiple names using first and last', async () => {
    const page = await newSpecPage({
      components: [BdsAvatar],
      html: `<bds-avatar name="John Michael Doe Smith"></bds-avatar>`,
    });

    const typoElement = page.root.shadowRoot.querySelector('bds-typo');
    expect(typoElement.textContent).toBe('JS'); // First (John) and Last (Smith)
  });

  it('should render with thumbnail image', async () => {
    const page = await newSpecPage({
      components: [BdsAvatar],
      html: `<bds-avatar thumbnail="https://example.com/avatar.jpg"></bds-avatar>`,
    });

    const imageDiv = page.root.shadowRoot.querySelector('.avatar__btn__img') as HTMLElement;
    expect(imageDiv).toBeTruthy();
    expect(imageDiv.style.backgroundImage).toBe('url(https://example.com/avatar.jpg)');
  });

  it('should render ellipsis count when provided', async () => {
    const page = await newSpecPage({
      components: [BdsAvatar],
      html: `<bds-avatar ellipsis="5"></bds-avatar>`,
    });

    const typoElement = page.root.shadowRoot.querySelector('bds-typo');
    expect(typoElement.textContent).toBe('+5');
  });

  describe('size variations', () => {
    const sizeTestCases = [
      { size: 'micro', typoSize: 'fs-12', iconSize: 'xx-small' },
      { size: 'extra-small', typoSize: 'fs-14', iconSize: 'x-small' },
      { size: 'small', typoSize: 'fs-16', iconSize: 'medium' },
      { size: 'standard', typoSize: 'fs-20', iconSize: 'x-large' },
      { size: 'large', typoSize: 'fs-24', iconSize: 'xxx-large' },
      { size: 'extra-large', typoSize: 'fs-32', iconSize: 'xxx-large' },
    ];

    sizeTestCases.forEach(({ size, typoSize, iconSize }) => {
      it(`should render with ${size} size`, async () => {
        const page = await newSpecPage({
          components: [BdsAvatar],
          html: `<bds-avatar size="${size}" name="John Doe"></bds-avatar>`,
        });

        expect(page.root.shadowRoot.querySelector(`.avatar__size--${size}`)).toBeTruthy();
        
        const typoElement = page.root.shadowRoot.querySelector('bds-typo');
        expect(typoElement.getAttribute('variant')).toBe(typoSize);
      });

      it(`should render with ${size} size for icon avatar`, async () => {
        const page = await newSpecPage({
          components: [BdsAvatar],
          html: `<bds-avatar size="${size}"></bds-avatar>`,
        });

        const iconElement = page.root.shadowRoot.querySelector('bds-icon');
        expect(iconElement.getAttribute('size')).toBe(iconSize);
      });
    });
  });

  describe('color variations', () => {
    const validColors = ['system', 'success', 'warning', 'error', 'info', 'surface'];

    validColors.forEach(color => {
      it(`should render with ${color} color`, async () => {
        const page = await newSpecPage({
          components: [BdsAvatar],
          html: `<bds-avatar color="${color}" name="John"></bds-avatar>`,
        });

        expect(page.root.color).toBe(color);
        expect(page.root.shadowRoot.querySelector(`.avatar__color--${color}`)).toBeTruthy();
      });
    });

    it('should use colorLetter for automatic color selection', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar name="Alice"></bds-avatar>`,
      });

      // Alice starts with "A" which maps to "system" color
      expect(page.root.shadowRoot.querySelector('.avatar__color--system')).toBeTruthy();
    });
  });

  describe('upload functionality', () => {
    it('should render upload overlay when upload is true', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar upload="true" name="John"></bds-avatar>`,
      });

      expect(page.root.shadowRoot.querySelector('.upload')).toBeTruthy();
      expect(page.root.shadowRoot.querySelector('bds-icon[name="upload"]')).toBeTruthy();
    });

    it('should render upload overlay when openUpload is true', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar open-upload="true"></bds-avatar>`,
      });

      expect(page.root.shadowRoot.querySelector('.upload')).toBeTruthy();
      expect(page.root.shadowRoot.querySelector('bds-icon[name="upload"]')).toBeTruthy();
    });

    it('should render file input for upload functionality', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar upload="true"></bds-avatar>`,
      });

      const fileInput = page.root.shadowRoot.querySelector('input[type="file"]') as HTMLInputElement;
      expect(fileInput).toBeTruthy();
      expect(fileInput.getAttribute('accept')).toBe('image/*');
      expect(fileInput.style.display).toBe('none');
    });

    it('should have upload class when upload or openUpload is enabled', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar upload="true"></bds-avatar>`,
      });

      expect(page.root.shadowRoot.querySelector('.upload')).toBeTruthy();
    });
  });

  describe('event handling', () => {
    it('should emit bdsClickAvatar event on click', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar></bds-avatar>`,
      });

      const clickHandler = jest.fn();
      page.root.addEventListener('bdsClickAvatar', clickHandler);

      const avatarDiv = page.root.shadowRoot.querySelector('.avatar') as HTMLElement;
      avatarDiv.click();

      expect(clickHandler).toHaveBeenCalled();
    });

    it('should update thumbnail when image is uploaded', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar open-upload="true"></bds-avatar>`,
      });

      expect(page.rootInstance.thumbnail).toBe(null);
      
      // Update thumbnail directly to test the property change
      page.rootInstance.thumbnail = 'data:image/jpeg;base64,mockdata';
      await page.waitForChanges();

      expect(page.rootInstance.thumbnail).toBe('data:image/jpeg;base64,mockdata');
      expect(page.root.shadowRoot.querySelector('.avatar__btn__img')).toBeTruthy();
    });
  });

  describe('accessibility and data attributes', () => {
    it('should render with data-test attribute', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar data-test="avatar-test"></bds-avatar>`,
      });

      const avatarDiv = page.root.shadowRoot.querySelector('.avatar');
      expect(avatarDiv.getAttribute('data-test')).toBe('avatar-test');
    });

    it('should have tabindex for keyboard accessibility', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar></bds-avatar>`,
      });

      const avatarDiv = page.root.shadowRoot.querySelector('.avatar');
      expect(avatarDiv.getAttribute('tabindex')).toBe('0');
    });

    it('should handle keyboard events for upload', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar open-upload="true"></bds-avatar>`,
      });

      const clickHandler = jest.fn();
      page.root.addEventListener('bdsClickAvatar', clickHandler);

      const avatarDiv = page.root.shadowRoot.querySelector('.avatar');
      
      // Test Enter key
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      avatarDiv.dispatchEvent(enterEvent);
      expect(clickHandler).toHaveBeenCalled();

      // Test Space key
      const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
      avatarDiv.dispatchEvent(spaceEvent);
      expect(clickHandler).toHaveBeenCalledTimes(2);
    });
  });

  describe('edge cases', () => {
    it('should handle null thumbnail gracefully', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar thumbnail=""></bds-avatar>`,
      });

      // Should fall back to default icon when thumbnail is empty
      expect(page.root.shadowRoot.querySelector('bds-icon[name="user-default"]')).toBeTruthy();
    });

    it('should prioritize ellipsis over other content', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar ellipsis="3" name="John" thumbnail="test.jpg"></bds-avatar>`,
      });

      const typoElement = page.root.shadowRoot.querySelector('bds-typo');
      expect(typoElement.textContent).toBe('+3');
      expect(page.root.shadowRoot.querySelector('.avatar__btn__img')).toBeFalsy();
    });

    it('should handle property changes after initial render', async () => {
      const page = await newSpecPage({
        components: [BdsAvatar],
        html: `<bds-avatar></bds-avatar>`,
      });

      // Change to name display
      page.root.name = 'John Doe';
      await page.waitForChanges();

      const typoElement = page.root.shadowRoot.querySelector('bds-typo');
      expect(typoElement.textContent).toBe('JD');

      // Change to thumbnail display
      page.root.thumbnail = 'test.jpg';
      await page.waitForChanges();

      const imageDiv = page.root.shadowRoot.querySelector('.avatar__btn__img');
      expect(imageDiv).toBeTruthy();
    });
  });
});
