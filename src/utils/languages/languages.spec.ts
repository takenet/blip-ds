import { normalizeLanguage, termTranslate, monthTranslate, dayTranslate, messageTranslate } from './index';

describe('normalizeLanguage', () => {
  describe('canonical codes', () => {
    it('should return pt_BR unchanged', () => {
      expect(normalizeLanguage('pt_BR')).toBe('pt_BR');
    });

    it('should return en_US unchanged', () => {
      expect(normalizeLanguage('en_US')).toBe('en_US');
    });

    it('should return es_ES unchanged', () => {
      expect(normalizeLanguage('es_ES')).toBe('es_ES');
    });
  });

  describe('legacy aliases (backward compatibility)', () => {
    it('should map es_MX to es_ES', () => {
      expect(normalizeLanguage('es_MX')).toBe('es_ES');
    });
  });

  describe('short-form aliases', () => {
    it('should map pt to pt_BR', () => {
      expect(normalizeLanguage('pt')).toBe('pt_BR');
    });

    it('should map en to en_US', () => {
      expect(normalizeLanguage('en')).toBe('en_US');
    });

    it('should map es to es_ES', () => {
      expect(normalizeLanguage('es')).toBe('es_ES');
    });
  });

  describe('language-family fallback', () => {
    it('should map any es_* locale to es_ES', () => {
      expect(normalizeLanguage('es_AR')).toBe('es_ES');
      expect(normalizeLanguage('es_CO')).toBe('es_ES');
    });

    it('should map any en_* locale to en_US', () => {
      expect(normalizeLanguage('en_GB')).toBe('en_US');
      expect(normalizeLanguage('en_AU')).toBe('en_US');
    });

    it('should map any pt_* locale to pt_BR', () => {
      expect(normalizeLanguage('pt_PT')).toBe('pt_BR');
    });
  });

  describe('unknown / invalid', () => {
    it('should default to pt_BR for unknown locale', () => {
      expect(normalizeLanguage('fr_FR')).toBe('pt_BR');
      expect(normalizeLanguage('')).toBe('pt_BR');
      expect(normalizeLanguage(null as any)).toBe('pt_BR');
      expect(normalizeLanguage(undefined as any)).toBe('pt_BR');
    });
  });
});

describe('termTranslate', () => {
  it('should translate terms for pt_BR', () => {
    expect(termTranslate('pt_BR', 'conclude')).toContain('Concluir');
  });

  it('should translate terms for en_US', () => {
    expect(termTranslate('en_US', 'conclude')).toContain('Conclude');
  });

  it('should translate terms for es_ES', () => {
    expect(termTranslate('es_ES', 'conclude')).toContain('Finalizar');
  });

  it('should translate terms for legacy es_MX (maps to es_ES)', () => {
    expect(termTranslate('es_MX', 'conclude')).toContain('Finalizar');
  });

  it('should translate terms for short form pt (maps to pt_BR)', () => {
    expect(termTranslate('pt', 'conclude')).toContain('Concluir');
  });
});

describe('monthTranslate', () => {
  it('should translate months for pt_BR', () => {
    expect(monthTranslate('pt_BR', 'january')).toContain('Janeiro');
  });

  it('should translate months for en_US', () => {
    expect(monthTranslate('en_US', 'january')).toContain('January');
  });

  it('should translate months for es_ES', () => {
    expect(monthTranslate('es_ES', 'january')).toContain('Enero');
  });

  it('should translate months for legacy es_MX', () => {
    expect(monthTranslate('es_MX', 'january')).toContain('Enero');
  });
});

describe('dayTranslate', () => {
  it('should translate days for pt_BR', () => {
    expect(dayTranslate('pt_BR', 'monday')).toContain('Segunda');
  });

  it('should translate days for en_US', () => {
    expect(dayTranslate('en_US', 'monday')).toContain('Monday');
  });

  it('should translate days for es_ES', () => {
    expect(dayTranslate('es_ES', 'monday')).toContain('Lunes');
  });
});

describe('messageTranslate', () => {
  it('should translate messages for pt_BR', () => {
    expect(messageTranslate('pt_BR', 'endDateIsEmpty')).toContain('Selecione a data final');
  });

  it('should translate messages for en_US', () => {
    expect(messageTranslate('en_US', 'endDateIsEmpty')).toContain('Select the end date');
  });

  it('should translate messages for es_ES', () => {
    expect(messageTranslate('es_ES', 'endDateIsEmpty')).toContain('Selecciona la fecha de finalización');
  });
});
