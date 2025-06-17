import { newSpecPage } from '@stencil/core/testing';
import { ButtonGroup } from '../button-group';
import { Grid } from '../../grid/grid';

describe('bds-button-group', () => {
  let mockButton: any;

  beforeEach(() => {
    // Mock button methods
    mockButton = {
      setVariant: jest.fn(),
      setColor: jest.fn(),
      setSize: jest.fn(),
      setDirection: jest.fn(),
      isActive: jest.fn(),
      setPosition: jest.fn(),
      setAttribute: jest.fn(),
      addEventListener: jest.fn(),
      classList: {
        add: jest.fn(),
        remove: jest.fn(),
      },
      id: 'test-button',
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [ButtonGroup, Grid],
      html: `<bds-button-group></bds-button-group>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.size).toBe('medium');
    expect(page.root.direction).toBe('row');
    expect(page.root.color).toBe('primary');
    expect(page.root.multiple).toBe(false);

    const gridElement = page.root.shadowRoot.querySelector('bds-grid');
    expect(gridElement).toBeTruthy();
    expect(gridElement.direction).toBe('row');
  });

  it('should render with custom properties', async () => {
    const page = await newSpecPage({
      components: [ButtonGroup, Grid],
      html: `<bds-button-group size="large" direction="column" color="content" multiple="true"></bds-button-group>`,
    });

    expect(page.root.size).toBe('large');
    expect(page.root.direction).toBe('column');
    expect(page.root.color).toBe('content');
    expect(page.root.multiple).toBe(true);

    const gridElement = page.root.shadowRoot.querySelector('bds-grid');
    expect(gridElement.direction).toBe('column');
  });

  it('should have correct host class', async () => {
    const page = await newSpecPage({
      components: [ButtonGroup, Grid],
      html: `<bds-button-group></bds-button-group>`,
    });

    expect(page.root.classList.contains('button_group')).toBe(true);
  });

  it('should render slot for buttons', async () => {
    const page = await newSpecPage({
      components: [ButtonGroup, Grid],
      html: `
        <bds-button-group>
          <div>Slot content</div>
        </bds-button-group>
      `,
    });

    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  describe('componentDidLoad', () => {
    it('should setup buttons on component load', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      componentInstance.buttons = [mockButton];
      
      const setupButtonsSpy = jest.spyOn(componentInstance, 'setupButtons');
      componentInstance.componentDidLoad();

      expect(setupButtonsSpy).toHaveBeenCalled();
    });
  });

  describe('componentDidUpdate', () => {
    it('should call setupButtons on update', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      const setupButtonsSpy = jest.spyOn(componentInstance, 'setupButtons');
      
      componentInstance.componentDidUpdate();

      expect(setupButtonsSpy).toHaveBeenCalled();
    });
  });

  describe('property watchers', () => {
    it('should call setupButtons when size changes', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      const setupButtonsSpy = jest.spyOn(componentInstance, 'setupButtons');
      
      componentInstance.handlePropChanges();

      expect(setupButtonsSpy).toHaveBeenCalled();
    });
  });

  describe('setupButtons', () => {
    it('should configure buttons correctly', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      componentInstance.buttons = [mockButton, { ...mockButton, id: 'button2' }];
      
      componentInstance.setupButtons();

      expect(mockButton.setAttribute).toHaveBeenCalledWith('data-index', '0');
      expect(mockButton.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
      expect(mockButton.setVariant).toHaveBeenCalledWith('outline');
    });
  });

  describe('activateButton method', () => {
    it('should activate button at valid index', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      componentInstance.buttons = [mockButton];
      
      const selectButtonSpy = jest.spyOn(componentInstance, 'selectButton');
      
      await componentInstance.activateButton(0);

      expect(selectButtonSpy).toHaveBeenCalledWith(0);
    });

    it('should not activate button at invalid index', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      componentInstance.buttons = [mockButton];
      
      const selectButtonSpy = jest.spyOn(componentInstance, 'selectButton');
      
      await componentInstance.activateButton(-1);
      await componentInstance.activateButton(1);

      expect(selectButtonSpy).not.toHaveBeenCalled();
    });
  });

  describe('selectButton single mode', () => {
    it('should select single button and clear others', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group multiple="false"></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      const updateButtonStatesSpy = jest.spyOn(componentInstance, 'updateButtonStates');
      
      componentInstance.selectButton(0);

      expect(componentInstance.activeIndexes.has(0)).toBe(true);
      expect(componentInstance.activeIndexes.size).toBe(1);
      expect(updateButtonStatesSpy).toHaveBeenCalledWith(0);
    });

    it('should deselect button if already selected in single mode', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group multiple="false"></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      componentInstance.activeIndexes.add(0);
      
      componentInstance.selectButton(0);

      expect(componentInstance.activeIndexes.has(0)).toBe(false);
      expect(componentInstance.activeIndexes.size).toBe(0);
    });
  });

  describe('selectButton multiple mode', () => {
    it('should select multiple buttons', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group multiple="true"></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      
      componentInstance.selectButton(0);
      componentInstance.selectButton(1);

      expect(componentInstance.activeIndexes.has(0)).toBe(true);
      expect(componentInstance.activeIndexes.has(1)).toBe(true);
      expect(componentInstance.activeIndexes.size).toBe(2);
    });

    it('should deselect button if already selected in multiple mode', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group multiple="true"></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      componentInstance.activeIndexes.add(0);
      
      componentInstance.selectButton(0);

      expect(componentInstance.activeIndexes.has(0)).toBe(false);
    });
  });

  describe('updateButtonStates', () => {
    it('should update active button states correctly', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group></bds-button-group>`,
      });

      const mockButton2 = { ...mockButton, id: 'button2' };
      const componentInstance = page.rootInstance;
      componentInstance.buttons = [mockButton, mockButton2];
      componentInstance.activeIndexes.add(0);
      
      const buttonSelectedSpy = jest.spyOn(componentInstance.buttonSelected, 'emit');
      
      componentInstance.updateButtonStates(0);

      expect(mockButton.isActive).toHaveBeenCalledWith(true);
      expect(mockButton.setVariant).toHaveBeenCalledWith('solid');
      expect(mockButton.classList.add).toHaveBeenCalledWith('active');
      expect(buttonSelectedSpy).toHaveBeenCalledWith('test-button');

      expect(mockButton2.isActive).toHaveBeenCalledWith(false);
      expect(mockButton2.setVariant).toHaveBeenCalledWith('outline');
      expect(mockButton2.classList.remove).toHaveBeenCalledWith('active');
    });
  });

  describe('updateButtonPosition', () => {
    it('should set first button position', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      componentInstance.buttons = [mockButton, { ...mockButton }, { ...mockButton }];
      
      componentInstance.updateButtonPosition(0);

      expect(mockButton.setPosition).toHaveBeenCalledWith('first');
    });

    it('should set last button position', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      const lastButton = { ...mockButton };
      componentInstance.buttons = [mockButton, { ...mockButton }, lastButton];
      
      componentInstance.updateButtonPosition(2);

      expect(lastButton.setPosition).toHaveBeenCalledWith('last');
    });

    it('should set middle button position', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      const middleButton = { ...mockButton };
      componentInstance.buttons = [mockButton, middleButton, { ...mockButton }];
      
      componentInstance.updateButtonPosition(1);

      expect(middleButton.setPosition).toHaveBeenCalledWith('middle');
    });
  });

  describe('updateButtonDirection', () => {
    it('should set button direction to row', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group direction="row"></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      componentInstance.buttons = [mockButton];
      
      componentInstance.updateButtonDirection(0);

      expect(mockButton.setDirection).toHaveBeenCalledWith('row');
    });

    it('should set button direction to column', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group direction="column"></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      componentInstance.buttons = [mockButton];
      
      componentInstance.updateButtonDirection(0);

      expect(mockButton.setDirection).toHaveBeenCalledWith('column');
    });
  });

  describe('updateButtonSize', () => {
    it('should set button size to medium', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group size="medium"></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      componentInstance.buttons = [mockButton];
      
      componentInstance.updateButtonSize(0);

      expect(mockButton.setSize).toHaveBeenCalledWith('medium');
    });

    it('should set button size to large', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group size="large"></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      componentInstance.buttons = [mockButton];
      
      componentInstance.updateButtonSize(0);

      expect(mockButton.setSize).toHaveBeenCalledWith('large');
    });
  });

  describe('updateButtonColor', () => {
    it('should set button color', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group color="content"></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      componentInstance.buttons = [mockButton];
      
      componentInstance.updateButtonColor(0);

      expect(mockButton.setColor).toHaveBeenCalledWith('content');
    });
  });

  describe('buttonSelected event', () => {
    it('should emit buttonSelected event', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group></bds-button-group>`,
      });

      const componentInstance = page.rootInstance;
      const buttonSelectedSpy = jest.spyOn(componentInstance.buttonSelected, 'emit');
      
      componentInstance.buttons = [mockButton];
      componentInstance.activeIndexes.add(0);
      componentInstance.updateButtonStates(0);

      expect(buttonSelectedSpy).toHaveBeenCalledWith('test-button');
    });
  });

  describe('different size variations', () => {
    const sizes = ['medium', 'large'];

    sizes.forEach(size => {
      it(`should render with ${size} size`, async () => {
        const page = await newSpecPage({
          components: [ButtonGroup, Grid],
          html: `<bds-button-group size="${size}"></bds-button-group>`,
        });

        expect(page.root.size).toBe(size);
      });
    });
  });

  describe('different direction variations', () => {
    const directions = ['row', 'column'];

    directions.forEach(direction => {
      it(`should render with ${direction} direction`, async () => {
        const page = await newSpecPage({
          components: [ButtonGroup, Grid],
          html: `<bds-button-group direction="${direction}"></bds-button-group>`,
        });

        expect(page.root.direction).toBe(direction);

        const gridElement = page.root.shadowRoot.querySelector('bds-grid');
        expect(gridElement.direction).toBe(direction);
      });
    });
  });

  describe('different color variations', () => {
    const colors = ['primary', 'content', 'positive', 'negative'];

    colors.forEach(color => {
      it(`should render with ${color} color`, async () => {
        const page = await newSpecPage({
          components: [ButtonGroup, Grid],
          html: `<bds-button-group color="${color}"></bds-button-group>`,
        });

        expect(page.root.color).toBe(color);
      });
    });
  });

  describe('multiple selection property', () => {
    it('should handle multiple=true', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group multiple="true"></bds-button-group>`,
      });

      expect(page.root.multiple).toBe(true);
    });

    it('should handle multiple=false', async () => {
      const page = await newSpecPage({
        components: [ButtonGroup, Grid],
        html: `<bds-button-group multiple="false"></bds-button-group>`,
      });

      expect(page.root.multiple).toBe(false);
    });
  });
});
