import { BdsModalAction } from '../modal-action';

describe('bds-modal-action', () => {
  it('should create component', () => {
    const component = new BdsModalAction();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsModalAction();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
