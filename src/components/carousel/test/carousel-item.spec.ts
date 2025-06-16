import { BdsCarouselItem } from '../carousel-item';

describe('bds-carousel-item', () => {
  it('should create component', () => {
    const component = new BdsCarouselItem();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BdsCarouselItem();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
