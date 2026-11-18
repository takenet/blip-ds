import { isTag } from '../tag-name';

describe('isTag', () => {
  it('compares the element with the registered name of the tag', () => {
    const tab = document.createElement('uai-tab-item');
    expect(isTag(tab, 'uai-tab-item')).toBe(true);
    expect(isTag(tab, 'uai-tab-group')).toBe(false);
  });

  it('is false without an element', () => {
    expect(isTag(null, 'uai-tab-item')).toBe(false);
    expect(isTag(undefined, 'uai-tab-item')).toBe(false);
  });
});
