import { BdsModalCloseButton } from '../modal-close-button';

describe('bds-modal-close-button', () => {
  it('should create component', () => {
    const component = new BdsModalCloseButton();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsModalCloseButton();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
