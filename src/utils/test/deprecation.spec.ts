import { warnDeprecated, warnLegacyValue, warnOnce, resetDeprecationWarnings } from '../deprecation';

describe('deprecation warnings', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => warn.mockRestore());

  it('warns once per page for a deprecated prop and gives the hint', () => {
    warnDeprecated('uai-button', 'groupIcon', 'Put the left icon and the label together in the default slot.');
    warnDeprecated('uai-button', 'groupIcon', 'Put the left icon and the label together in the default slot.');
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith(
      '[uai-button] "groupIcon" is deprecated. Put the left icon and the label together in the default slot.',
    );
  });

  it('says the prop has no effect when there is no hint', () => {
    warnDeprecated('uai-button', 'bdsLoadingColor');
    expect(warn).toHaveBeenCalledWith('[uai-button] "bdsLoadingColor" is deprecated. It has no effect.');
  });

  it('warnOnce deduplicates by tag and key', () => {
    warnOnce('uai-button', 'theme-root', 'No theme.');
    warnOnce('uai-button', 'theme-root', 'No theme.');
    warnOnce('uai-icon', 'theme-root', 'No theme.');
    expect(warn).toHaveBeenCalledTimes(2);
  });

  it('warns separately for different props and tags', () => {
    warnDeprecated('uai-button', 'groupIcon');
    warnDeprecated('uai-button', 'bdsLoadingColor');
    warnDeprecated('uai-input', 'groupIcon');
    expect(warn).toHaveBeenCalledTimes(3);
  });

  it('warns once for a legacy value and reports the fallback', () => {
    warnLegacyValue('uai-button', 'variant', 'primary', 'solid');
    warnLegacyValue('uai-button', 'variant', 'primary', 'solid');
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith('[uai-button] Unsupported variant "primary". Using "solid".');
  });
});
