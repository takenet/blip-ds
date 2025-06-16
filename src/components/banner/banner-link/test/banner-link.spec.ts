import { BannerLink } from '../banner-link';

describe('bds-banner-link', () => {
  it('should create component', () => {
    const component = new BannerLink();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new BannerLink();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });
});
