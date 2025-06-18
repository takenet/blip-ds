import { newSpecPage } from '@stencil/core/testing';
import { BdsMenuExibition } from '../menu-exibition';

describe('bds-menu-exibition', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [BdsMenuExibition],
      html: `<bds-menu-exibition></bds-menu-exibition>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.avatarName).toBeNull();
    expect(page.root.avatarThumbnail).toBeNull();
    expect(page.root.avatarSize).toBe('standard');
    expect(page.root.value).toBeNull();
    expect(page.root.subtitle).toBeNull();
    expect(page.root.description).toBeNull();
    expect(page.root.disabled).toBe(false);
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [BdsMenuExibition],
      html: `<bds-menu-exibition 
               avatar-name="John Doe" 
               avatar-thumbnail="https://example.com/avatar.jpg" 
               avatar-size="small" 
               value="Test Value" 
               subtitle="Test Subtitle" 
               description="Test Description" 
               disabled="true">
             </bds-menu-exibition>`,
    });

    expect(page.root.avatarName).toBe('John Doe');
    expect(page.root.avatarThumbnail).toBe('https://example.com/avatar.jpg');
    expect(page.root.avatarSize).toBe('small');
    expect(page.root.value).toBe('Test Value');
    expect(page.root.subtitle).toBe('Test Subtitle');
    expect(page.root.description).toBe('Test Description');
    expect(page.root.disabled).toBe(true);
  });

  it('should render basic menu exhibition structure', async () => {
    const page = await newSpecPage({
      components: [BdsMenuExibition],
      html: `<bds-menu-exibition value="Test Value"></bds-menu-exibition>`,
    });

    const menuexibitionDiv = page.root.shadowRoot.querySelector('.menuexibition');
    expect(menuexibitionDiv).toBeTruthy();
    
    const contentDiv = page.root.shadowRoot.querySelector('.content-item');
    expect(contentDiv).toBeTruthy();
  });

  it('should apply disabled class when disabled is true', async () => {
    const page = await newSpecPage({
      components: [BdsMenuExibition],
      html: `<bds-menu-exibition disabled="true"></bds-menu-exibition>`,
    });

    const menuexibitionDiv = page.root.shadowRoot.querySelector('.menuexibition');
    expect(menuexibitionDiv.classList.contains('menuexibition__disabled')).toBe(true);
  });

  it('should not apply disabled class when disabled is false', async () => {
    const page = await newSpecPage({
      components: [BdsMenuExibition],
      html: `<bds-menu-exibition disabled="false"></bds-menu-exibition>`,
    });

    const menuexibitionDiv = page.root.shadowRoot.querySelector('.menuexibition');
    expect(menuexibitionDiv.classList.contains('menuexibition__disabled')).toBe(false);
  });

  it('should render value when provided', async () => {
    const page = await newSpecPage({
      components: [BdsMenuExibition],
      html: `<bds-menu-exibition value="Test Value"></bds-menu-exibition>`,
    });

    const titleElement = page.root.shadowRoot.querySelector('.title-item');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toBe('Test Value');
  });

  it('should render subtitle when provided', async () => {
    const page = await newSpecPage({
      components: [BdsMenuExibition],
      html: `<bds-menu-exibition subtitle="Test Subtitle"></bds-menu-exibition>`,
    });

    const subtitleElement = page.root.shadowRoot.querySelector('.subtitle-item');
    expect(subtitleElement).toBeTruthy();
    expect(subtitleElement.textContent).toBe('Test Subtitle');
  });

  it('should render description when provided', async () => {
    const page = await newSpecPage({
      components: [BdsMenuExibition],
      html: `<bds-menu-exibition description="Test Description"></bds-menu-exibition>`,
    });

    const descriptionElement = page.root.shadowRoot.querySelector('.description-item');
    expect(descriptionElement).toBeTruthy();
    expect(descriptionElement.textContent).toBe('Test Description');
  });

  it('should not render value when not provided', async () => {
    const page = await newSpecPage({
      components: [BdsMenuExibition],
      html: `<bds-menu-exibition></bds-menu-exibition>`,
    });

    const titleElement = page.root.shadowRoot.querySelector('.title-item');
    expect(titleElement).toBeNull();
  });

  it('should not render subtitle when not provided', async () => {
    const page = await newSpecPage({
      components: [BdsMenuExibition],
      html: `<bds-menu-exibition></bds-menu-exibition>`,
    });

    const subtitleElement = page.root.shadowRoot.querySelector('.subtitle-item');
    expect(subtitleElement).toBeNull();
  });

  it('should not render description when not provided', async () => {
    const page = await newSpecPage({
      components: [BdsMenuExibition],
      html: `<bds-menu-exibition></bds-menu-exibition>`,
    });

    const descriptionElement = page.root.shadowRoot.querySelector('.description-item');
    expect(descriptionElement).toBeNull();
  });

  describe('Avatar rendering', () => {
    it('should render avatar when avatarName is provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition avatar-name="John Doe"></bds-menu-exibition>`,
      });

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      expect(avatarElement).toBeTruthy();
      expect(avatarElement.getAttribute('name')).toBe('John Doe');
    });

    it('should render avatar when avatarThumbnail is provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition avatar-thumbnail="https://example.com/avatar.jpg"></bds-menu-exibition>`,
      });

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      expect(avatarElement).toBeTruthy();
      expect(avatarElement.getAttribute('thumbnail')).toBe('https://example.com/avatar.jpg');
    });

    it('should render avatar when both avatarName and avatarThumbnail are provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition 
                 avatar-name="John Doe" 
                 avatar-thumbnail="https://example.com/avatar.jpg">
               </bds-menu-exibition>`,
      });

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      expect(avatarElement).toBeTruthy();
      expect(avatarElement.getAttribute('name')).toBe('John Doe');
      expect(avatarElement.getAttribute('thumbnail')).toBe('https://example.com/avatar.jpg');
    });

    it('should not render avatar when neither avatarName nor avatarThumbnail are provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition value="Test"></bds-menu-exibition>`,
      });

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      expect(avatarElement).toBeNull();
    });

    it('should apply correct avatar size', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition avatar-name="John" avatar-size="small"></bds-menu-exibition>`,
      });

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      expect(avatarElement.getAttribute('size')).toBe('small');
    });

    it('should default to standard avatar size', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition avatar-name="John"></bds-menu-exibition>`,
      });

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      expect(avatarElement.getAttribute('size')).toBe('standard');
    });
  });

  describe('Avatar size variants', () => {
    it('should render with extra-small avatar size', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition avatar-name="John" avatar-size="extra-small"></bds-menu-exibition>`,
      });

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      expect(avatarElement.getAttribute('size')).toBe('extra-small');
    });

    it('should render with small avatar size', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition avatar-name="John" avatar-size="small"></bds-menu-exibition>`,
      });

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      expect(avatarElement.getAttribute('size')).toBe('small');
    });

    it('should render with standard avatar size', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition avatar-name="John" avatar-size="standard"></bds-menu-exibition>`,
      });

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      expect(avatarElement.getAttribute('size')).toBe('standard');
    });
  });

  describe('Typography elements', () => {
    it('should render title with correct variant and tag', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition value="Test Title"></bds-menu-exibition>`,
      });

      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      expect(titleElement.getAttribute('variant')).toBe('fs-16');
      expect(titleElement.getAttribute('tag')).toBe('span');
    });

    it('should render subtitle with correct variant and tag', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition subtitle="Test Subtitle"></bds-menu-exibition>`,
      });

      const subtitleElement = page.root.shadowRoot.querySelector('.subtitle-item');
      expect(subtitleElement.getAttribute('variant')).toBe('fs-10');
      expect(subtitleElement.getAttribute('tag')).toBe('span');
    });

    it('should render description with correct variant and tag', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition description="Test Description"></bds-menu-exibition>`,
      });

      const descriptionElement = page.root.shadowRoot.querySelector('.description-item');
      expect(descriptionElement.getAttribute('variant')).toBe('fs-10');
      expect(descriptionElement.getAttribute('tag')).toBe('span');
    });
  });

  describe('Complex scenarios', () => {
    it('should render all content elements together', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition 
                 avatar-name="John Doe" 
                 value="Main Title" 
                 subtitle="Subtitle Text" 
                 description="Description Text">
               </bds-menu-exibition>`,
      });

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      const subtitleElement = page.root.shadowRoot.querySelector('.subtitle-item');
      const descriptionElement = page.root.shadowRoot.querySelector('.description-item');

      expect(avatarElement).toBeTruthy();
      expect(titleElement).toBeTruthy();
      expect(subtitleElement).toBeTruthy();
      expect(descriptionElement).toBeTruthy();

      expect(titleElement.textContent).toBe('Main Title');
      expect(subtitleElement.textContent).toBe('Subtitle Text');
      expect(descriptionElement.textContent).toBe('Description Text');
    });

    it('should render only content without avatar', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition 
                 value="Main Title" 
                 subtitle="Subtitle Text" 
                 description="Description Text">
               </bds-menu-exibition>`,
      });

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      const subtitleElement = page.root.shadowRoot.querySelector('.subtitle-item');
      const descriptionElement = page.root.shadowRoot.querySelector('.description-item');

      expect(avatarElement).toBeNull();
      expect(titleElement).toBeTruthy();
      expect(subtitleElement).toBeTruthy();
      expect(descriptionElement).toBeTruthy();
    });

    it('should render only avatar without content', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition avatar-name="John Doe"></bds-menu-exibition>`,
      });

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      const subtitleElement = page.root.shadowRoot.querySelector('.subtitle-item');
      const descriptionElement = page.root.shadowRoot.querySelector('.description-item');

      expect(avatarElement).toBeTruthy();
      expect(titleElement).toBeNull();
      expect(subtitleElement).toBeNull();
      expect(descriptionElement).toBeNull();
    });

    it('should render with disabled state and all content', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition 
                 avatar-name="John Doe" 
                 value="Main Title" 
                 subtitle="Subtitle Text" 
                 description="Description Text" 
                 disabled="true">
               </bds-menu-exibition>`,
      });

      const menuexibitionDiv = page.root.shadowRoot.querySelector('.menuexibition');
      expect(menuexibitionDiv.classList.contains('menuexibition__disabled')).toBe(true);

      const avatarElement = page.root.shadowRoot.querySelector('.avatar-item');
      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      
      expect(avatarElement).toBeTruthy();
      expect(titleElement).toBeTruthy();
    });
  });

  describe('Component structure', () => {
    it('should have proper DOM structure', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition 
                 avatar-name="John" 
                 value="Title">
               </bds-menu-exibition>`,
      });

      // Check main container
      const container = page.root.shadowRoot.querySelector('.menuexibition');
      expect(container).toBeTruthy();

      // Check avatar is before content
      const avatar = page.root.shadowRoot.querySelector('.avatar-item');
      const content = page.root.shadowRoot.querySelector('.content-item');
      
      expect(avatar).toBeTruthy();
      expect(content).toBeTruthy();
      
      // Check that avatar comes before content in DOM order
      const containerChildren = Array.from(container.children);
      const avatarIndex = containerChildren.indexOf(avatar);
      const contentIndex = containerChildren.indexOf(content);
      expect(avatarIndex).toBeLessThan(contentIndex);
    });

    it('should have content container even without text content', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition></bds-menu-exibition>`,
      });

      const contentDiv = page.root.shadowRoot.querySelector('.content-item');
      expect(contentDiv).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should provide proper semantic structure', async () => {
      const page = await newSpecPage({
        components: [BdsMenuExibition],
        html: `<bds-menu-exibition value="Title" subtitle="Subtitle"></bds-menu-exibition>`,
      });

      // Check that typography elements use proper semantic tags
      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      const subtitleElement = page.root.shadowRoot.querySelector('.subtitle-item');

      expect(titleElement.getAttribute('tag')).toBe('span');
      expect(subtitleElement.getAttribute('tag')).toBe('span');
    });
  });
});
