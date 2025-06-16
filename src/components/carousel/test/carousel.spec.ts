import { BdsCarousel } from '../carousel';

describe('bds-carousel', () => {
  it('should create component', () => {
    const component = new BdsCarousel();
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    const component = new BdsCarousel();
    expect(component.infiniteLoop).toBe(false);
    expect(component.arrows).toBe('outside');
    expect(component.autoplay).toBe(false);
  });
});
