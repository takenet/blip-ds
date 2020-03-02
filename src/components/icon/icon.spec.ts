import { Icon } from './icon';

describe('bds-icon', () => {
  const icon = new Icon();

  it('builds', () => {
    expect(icon).toBeTruthy();
  });

  it('should render with default theme', () => {
    expect(icon.theme).toBe('outline');
  });

  it('should render with default sizes', () => {
    expect(icon.size).toBe('medium');
  });
});



