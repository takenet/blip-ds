import {
  addDays,
  addMonths,
  clampIso,
  dateForKey,
  longDate,
  monthNames,
  monthWeeks,
  outOfRange,
  parseIso,
  weekdayNames,
} from '../uai-calendar';

const key = (name: string, shiftKey = false) => ({ key: name, shiftKey }) as KeyboardEvent;

describe('uai-calendar dates', () => {
  it('parses only ISO dates that exist', () => {
    expect(parseIso('2026-12-25')).toEqual({ year: 2026, month: 11, day: 25 });
    expect(parseIso('2026-02-29')).toBeNull();
    expect(parseIso('25/12/2026')).toBeNull();
  });

  it('adds days across months and years', () => {
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01');
    expect(addDays('2026-03-01', -1)).toBe('2026-02-28');
  });

  it('adds months keeping the day within the target month', () => {
    expect(addMonths('2026-01-31', 1)).toBe('2026-02-28');
    expect(addMonths('2028-01-31', 1)).toBe('2028-02-29');
    expect(addMonths('2026-12-15', 1)).toBe('2027-01-15');
    expect(addMonths('2026-03-15', -12)).toBe('2025-03-15');
  });

  it('clamps a date within min and max, and tells when it is out of them', () => {
    expect(clampIso('2026-01-01', '2026-02-01', '2026-03-01')).toBe('2026-02-01');
    expect(clampIso('2026-04-01', '2026-02-01', '2026-03-01')).toBe('2026-03-01');
    expect(clampIso('2026-02-15', null, null)).toBe('2026-02-15');
    expect(outOfRange('2026-01-31', '2026-02-01')).toBe(true);
    expect(outOfRange('2026-02-01', '2026-02-01')).toBe(false);
  });

  it('lays out a month in weeks starting on Sunday', () => {
    const weeks = monthWeeks(2026, 0); // January 2026 starts on a Thursday.

    expect(weeks).toHaveLength(5);
    expect(weeks[0]).toEqual([null, null, null, null, '2026-01-01', '2026-01-02', '2026-01-03']);
    expect(weeks[4]).toEqual(['2026-01-25', '2026-01-26', '2026-01-27', '2026-01-28', '2026-01-29', '2026-01-30', '2026-01-31']);
  });
});

describe('uai-calendar keys', () => {
  it.each([
    ['ArrowLeft', false, '2026-01-14'],
    ['ArrowRight', false, '2026-01-16'],
    ['ArrowUp', false, '2026-01-08'],
    ['ArrowDown', false, '2026-01-22'],
    ['Home', false, '2026-01-11'],
    ['End', false, '2026-01-17'],
    ['PageUp', false, '2025-12-15'],
    ['PageDown', false, '2026-02-15'],
    ['PageDown', true, '2027-01-15'],
  ])('moves from 15 Jan 2026 with %s (shift %s) to %s', (name, shift, expected) => {
    expect(dateForKey('2026-01-15', key(name, shift))).toBe(expected);
  });

  it('ignores other keys', () => {
    expect(dateForKey('2026-01-15', key('a'))).toBeNull();
  });
});

describe('uai-calendar texts', () => {
  it('names the weekdays from Sunday and the months in the language', () => {
    expect(weekdayNames('pt_BR').map((day) => day.short)).toEqual(['D', 'S', 'T', 'Q', 'Q', 'S', 'S']);
    expect(weekdayNames('en_US').map((day) => day.short)).toEqual(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
    expect(monthNames('pt_BR')[11]).toEqual({ short: 'Dez', long: 'dezembro' });
    expect(monthNames('en_US')[0].short).toBe('Jan');
  });

  it('reads the full date', () => {
    expect(longDate('2026-01-15', 'pt_BR')).toBe('quinta-feira, 15 de janeiro de 2026');
  });
});
