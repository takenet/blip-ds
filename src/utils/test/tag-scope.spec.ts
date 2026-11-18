// The active prefix is module state, so every test loads a fresh copy of the module.
const load = (): typeof import('../tag-scope') => {
  let module: typeof import('../tag-scope');
  jest.isolateModules(() => {
    module = require('../tag-scope');
  });
  return module;
};

describe('tag scope', () => {
  it('derives a valid custom element prefix from the build', () => {
    const { TAG_SCOPE_PREFIX } = load();
    expect(TAG_SCOPE_PREFIX).toMatch(/^ds-[0-9a-f]{8}$/);
  });

  it('renames only the blip-ds tags', () => {
    const transform = load().createTagTransformer('ds-1a2b3c4d');
    expect(transform('uai-button')).toBe('ds-1a2b3c4d-uai-button');
    expect(transform('bds-button')).toBe('ds-1a2b3c4d-bds-button');
    for (const tag of ['div', 'slot', 'slot-fb', 'my-uai-button', 'uaibutton']) expect(transform(tag)).toBe(tag);
  });

  it('installs the transformer of the release prefix by default and returns the prefix', () => {
    const { scopeTags, getTagScope, TAG_SCOPE_PREFIX } = load();
    const setter = jest.fn();
    expect(getTagScope()).toBeUndefined();
    expect(scopeTags(undefined, setter)).toBe(TAG_SCOPE_PREFIX);
    expect(getTagScope()).toBe(TAG_SCOPE_PREFIX);
    expect(setter).toHaveBeenCalledTimes(1);
    expect(setter.mock.calls[0][0]('uai-select')).toBe(`${TAG_SCOPE_PREFIX}-uai-select`);
  });

  it('accepts a custom prefix', () => {
    const setter = jest.fn();
    expect(load().scopeTags('solutions-v2', setter)).toBe('solutions-v2');
    expect(setter.mock.calls[0][0]('uai-icon')).toBe('solutions-v2-uai-icon');
  });

  it.each(['', 'Ds', '1ds', 'ds_1', 'ds-', '-ds', 'ds--1', 'ds 1'])('rejects the invalid prefix "%s"', (prefix) => {
    const setter = jest.fn();
    expect(() => load().scopeTags(prefix, setter)).toThrow(/Invalid tag prefix/);
    expect(setter).not.toHaveBeenCalled();
  });

  it('is idempotent with the same prefix and throws with another one', () => {
    const { scopeTags } = load();
    const setter = jest.fn();
    scopeTags('ds-a', setter);
    expect(scopeTags('ds-a', setter)).toBe('ds-a');
    expect(setter).toHaveBeenCalledTimes(1);
    expect(() => scopeTags('ds-b', setter)).toThrow(/already scoped with "ds-a"/);
    expect(setter).toHaveBeenCalledTimes(1);
  });
});
