import { newSpecPage } from '@stencil/core/testing';
import { SelectOption } from '../select-option';

describe('bds-select-option', () => {
  it('should create component', () => {
    const component = new SelectOption();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new SelectOption();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  // Comprehensive unit tests start here
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test-value">Option Text</bds-select-option>',
    });

    expect(page.root).toEqualHtml(`
      <bds-select-option type-option="default" value="test-value">
        <mock:shadow-root>
          <div class="select-option" data-event="click" data-value="test-value" id="bds-select-option-test-value" role="button">
            <div style="align-self: center;">
              <slot name="input-left"></slot>
            </div>
            <div class="select-option__container">
              <bds-typo class="select-option__container--value" variant="fs-14">
                <slot></slot>
              </bds-typo>
            </div>
          </div>
        </mock:shadow-root>
        Option Text
      </bds-select-option>
    `);
  });

  it('should render with selected state', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" selected>Selected Option</bds-select-option>',
    });

    const selectOption = page.root.shadowRoot.querySelector('.select-option');
    expect(selectOption).toHaveClass('select-option--selected');
  });

  it('should render with disabled state', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" disabled>Disabled Option</bds-select-option>',
    });

    const selectOption = page.root.shadowRoot.querySelector('.select-option');
    expect(selectOption).toHaveClass('select-option--disabled');
  });

  it('should render with invisible state', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" invisible>Invisible Option</bds-select-option>',
    });

    const selectOption = page.root.shadowRoot.querySelector('.select-option');
    expect(selectOption).toHaveClass('select-option--invisible');
  });

  it('should render with title text', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" title-text="Option Title">Option Text</bds-select-option>',
    });

    const titleElement = page.root.shadowRoot.querySelector('.select-option__container--value[variant="fs-16"]');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toBe('Option Title');
  });

  it('should render with status text', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" status="Active">Option Text</bds-select-option>',
    });

    const statusElement = page.root.shadowRoot.querySelector('.select-option__container--status');
    expect(statusElement).toBeTruthy();
    expect(statusElement.textContent).toBe('Active');
  });

  it('should render with bulk option', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" bulk-option="10 items">Option Text</bds-select-option>',
    });

    const bulkElement = page.root.shadowRoot.querySelector('.select-option__container--bulk');
    expect(bulkElement).toBeTruthy();
    expect(bulkElement.textContent).toBe('10 items');
  });

  it('should render with custom slot alignment', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" slot-align="flex-start">Option Text</bds-select-option>',
    });

    const slotContainer = page.root.shadowRoot.querySelector('div[style*="align-self"]') as HTMLElement;
    expect(slotContainer.style.alignSelf).toBe('flex-start');
  });

  it('should render with data-test attribute', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" data-test="option-test">Option Text</bds-select-option>',
    });

    const selectOption = page.root.shadowRoot.querySelector('.select-option');
    expect(selectOption.getAttribute('data-test')).toBe('option-test');
  });

  // Checkbox type tests
  it('should render as checkbox type', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" type-option="checkbox">Checkbox Option</bds-select-option>',
    });

    const container = page.root.shadowRoot.querySelector('.select-option__container');
    expect(container).toHaveClass('select-option__container__checkbox');
    
    const checkbox = page.root.shadowRoot.querySelector('bds-checkbox');
    expect(checkbox).toBeTruthy();
  });

  it('should render checkbox with checked state', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" type-option="checkbox" checked>Checked Option</bds-select-option>',
    });

    const checkbox = page.root.shadowRoot.querySelector('bds-checkbox');
    expect(checkbox.getAttribute('checked')).toBe('');
  });

  // Event handling tests
  it('should emit optionSelected event when clicked (default type)', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test-value">Option Text</bds-select-option>',
    });

    const component = page.rootInstance;
    let selectedEmitted = false;
    let emittedData = null;

    page.root.addEventListener('optionSelected', (event: CustomEvent) => {
      selectedEmitted = true;
      emittedData = event.detail;
    });

    component.onClickSelectOption();

    expect(selectedEmitted).toBe(true);
    expect(emittedData.value).toBe('test-value');
  });

  it('should not emit optionSelected when disabled', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" disabled>Disabled Option</bds-select-option>',
    });

    const component = page.rootInstance;
    let selectedEmitted = false;

    page.root.addEventListener('optionSelected', () => {
      selectedEmitted = true;
    });

    component.onClickSelectOption();

    expect(selectedEmitted).toBe(false);
  });

  it('should not emit optionSelected for checkbox type', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" type-option="checkbox">Checkbox Option</bds-select-option>',
    });

    const component = page.rootInstance;
    let selectedEmitted = false;

    page.root.addEventListener('optionSelected', () => {
      selectedEmitted = true;
    });

    component.onClickSelectOption();

    expect(selectedEmitted).toBe(false);
  });

  it('should emit optionChecked event for checkbox type', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test-checkbox" type-option="checkbox">Checkbox Option</bds-select-option>',
    });

    const component = page.rootInstance;
    let checkedEmitted = false;
    let emittedData = null;

    page.root.addEventListener('optionChecked', (event: CustomEvent) => {
      checkedEmitted = true;
      emittedData = event.detail;
    });

    const mockEvent = {
      target: {
        name: 'test-checkbox',
        checked: true
      }
    } as any;

    component.optionHandle(mockEvent);

    expect(checkedEmitted).toBe(true);
    expect(emittedData.value).toBe('test-checkbox');
    expect(emittedData.checked).toBe(true);
  });

  // Method tests
  it('should toggle checked state with toggle method', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" type-option="checkbox">Checkbox Option</bds-select-option>',
    });

    const component = page.rootInstance;
    expect(component.checked).toBe(false);

    await component.toggle();
    expect(component.checked).toBe(true);

    await component.toggle();
    expect(component.checked).toBe(false);
  });

  it('should mark as checked with toMark method', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" type-option="checkbox">Checkbox Option</bds-select-option>',
    });

    const component = page.rootInstance;
    expect(component.checked).toBe(false);

    await component.toMark();
    expect(component.checked).toBe(true);
  });

  it('should unmark with markOff method', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" type-option="checkbox" checked>Checkbox Option</bds-select-option>',
    });

    const component = page.rootInstance;
    expect(component.checked).toBe(true);

    await component.markOff();
    expect(component.checked).toBe(false);
  });

  // Keyboard interaction tests
  it('should handle Enter key to select option', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test">Option Text</bds-select-option>',
    });

    const component = page.rootInstance;
    let selectedEmitted = false;

    page.root.addEventListener('optionSelected', () => {
      selectedEmitted = true;
    });

    const enterEvent = {
      key: 'Enter',
      target: page.root.shadowRoot.querySelector('.select-option')
    } as any;

    component.attachOptionKeyboardListeners(enterEvent);

    expect(selectedEmitted).toBe(true);
  });

  it('should handle ArrowDown key navigation', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test">Option Text</bds-select-option>',
    });

    const component = page.rootInstance;

    // Mock the DOM structure for navigation
    const mockEvent = {
      key: 'ArrowDown',
      target: {
        parentElement: {
          nextElementSibling: {
            hasAttribute: () => false,
            firstElementChild: {
              focus: jest.fn()
            }
          }
        }
      },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    } as any;

    component.attachOptionKeyboardListeners(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });

  it('should handle ArrowUp key navigation', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test">Option Text</bds-select-option>',
    });

    const component = page.rootInstance;

    // Mock the DOM structure for navigation
    const mockEvent = {
      key: 'ArrowUp',
      target: {
        parentElement: {
          previousElementSibling: {
            hasAttribute: () => false,
            firstElementChild: {
              focus: jest.fn()
            }
          }
        }
      },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    } as any;

    component.attachOptionKeyboardListeners(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockEvent.target.parentElement.previousElementSibling.firstElementChild.focus).toHaveBeenCalled();
  });

  it('should not navigate to invisible options', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test">Option Text</bds-select-option>',
    });

    const component = page.rootInstance;

    // Mock navigation to invisible option
    const mockEvent = {
      key: 'ArrowDown',
      target: {
        parentElement: {
          nextElementSibling: {
            hasAttribute: (attr: string) => attr === 'invisible',
          }
        }
      },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    } as any;

    component.attachOptionKeyboardListeners(mockEvent);

    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    expect(mockEvent.stopPropagation).not.toHaveBeenCalled();
  });

  // Checkbox toggle behavior tests
  it('should call toggle on checkbox when clicked (checkbox type)', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" type-option="checkbox">Checkbox Option</bds-select-option>',
    });

    const component = page.rootInstance;
    
    // Mock the checkbox toggle method
    const mockCheckbox = {
      toggle: jest.fn()
    };
    component.nativeInput = mockCheckbox as any;

    component.checkedCurrent();

    expect(mockCheckbox.toggle).toHaveBeenCalled();
  });

  it('should not call toggle for default type', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test">Default Option</bds-select-option>',
    });

    const component = page.rootInstance;
    
    // Mock the checkbox toggle method
    const mockCheckbox = {
      toggle: jest.fn()
    };
    component.nativeInput = mockCheckbox as any;

    component.checkedCurrent();

    expect(mockCheckbox.toggle).not.toHaveBeenCalled();
  });

  // Watch tests
  it('should update typeOption when changed', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test">Option Text</bds-select-option>',
    });

    const component = page.rootInstance;
    expect(component.typeOption).toBe('default');

    component.typeOption = 'checkbox';
    component.changeSelectionType();

    expect(component.typeOption).toBe('checkbox');
  });

  // Container class tests
  it('should apply fill_space class when status is present', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" status="Active">Option Text</bds-select-option>',
    });

    const container = page.root.shadowRoot.querySelector('.select-option__container');
    expect(container).toHaveClass('select-option__container__fill_space');
  });

  it('should apply overflow class to text when status is present', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" status="Active">Option Text</bds-select-option>',
    });

    const textElement = page.root.shadowRoot.querySelector('.select-option__container__overflow');
    expect(textElement).toBeTruthy();
  });

  it('should set noWrap on text when status is present', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: '<bds-select-option value="test" status="Active">Option Text</bds-select-option>',
    });

    const textElement = page.root.shadowRoot.querySelector('.select-option__container--value');
    expect(textElement).toBeTruthy();
    
    // Check the specific class applied when status is present
    expect(textElement.classList.contains('select-option__container__overflow')).toBe(true);
  });

  // Complex scenarios
  it('should render with all props combined', async () => {
    const page = await newSpecPage({
      components: [SelectOption],
      html: `
        <bds-select-option 
          value="complex-test" 
          selected 
          title-text="Complex Option"
          status="Premium"
          bulk-option="5 items"
          slot-align="flex-end"
          data-test="complex-option"
        >
          Complex Option Text
        </bds-select-option>
      `,
    });

    const selectOption = page.root.shadowRoot.querySelector('.select-option');
    expect(selectOption).toHaveClass('select-option--selected');
    expect(selectOption.getAttribute('data-test')).toBe('complex-option');

    const titleElement = page.root.shadowRoot.querySelector('.select-option__container--value[variant="fs-16"]');
    expect(titleElement.textContent).toBe('Complex Option');

    const statusElement = page.root.shadowRoot.querySelector('.select-option__container--status');
    expect(statusElement.textContent).toBe('Premium');

    const bulkElement = page.root.shadowRoot.querySelector('.select-option__container--bulk');
    expect(bulkElement.textContent).toBe('5 items');
  });
});
