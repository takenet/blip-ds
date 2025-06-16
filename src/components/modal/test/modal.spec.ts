import { BdsModal } from '../modal';

describe('bds-modal', () => {
  it('should create component', () => {
    const component = new BdsModal();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsModal();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
