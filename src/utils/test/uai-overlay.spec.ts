import { computeOverlayLayout, UaiOverlayLayoutInput } from '../uai-overlay';

// Gap and margin stand in for spacing/2xs and spacing/xs resolved to pixels.
const GAP = 4;
const MARGIN = 8;
const viewport = { width: 1000, height: 800 };

const rect = (left: number, top: number, width: number, height: number) => ({
  left,
  top,
  width,
  height,
  right: left + width,
  bottom: top + height,
});

const layout = (overrides: Partial<UaiOverlayLayoutInput>) =>
  computeOverlayLayout({
    trigger: rect(100, 100, 200, 40),
    panel: { width: 240, height: 300 },
    viewport,
    gap: GAP,
    margin: MARGIN,
    ...overrides,
  });

describe('computeOverlayLayout', () => {
  it('opens below the trigger, aligned to its start, at the gap distance', () => {
    expect(layout({})).toEqual(
      expect.objectContaining({ side: 'bottom', align: 'start', top: 100 + 40 + GAP, left: 100 }),
    );
  });

  describe('trigger near the right edge', () => {
    it('aligns to the end of a trigger in the right half of the viewport', () => {
      const result = layout({ trigger: rect(700, 100, 200, 40) });
      expect(result.align).toBe('end');
      expect(result.left).toBe(900 - 240);
    });

    it('aligns to the end when the panel does not fit from the trigger start', () => {
      const result = layout({ trigger: rect(300, 100, 100, 40), panel: { width: 700, height: 100 } });
      expect(result.align).toBe('end');
    });

    it('keeps the panel at the margin distance from the viewport edges', () => {
      const result = layout({ trigger: rect(950, 100, 40, 40), panel: { width: 400, height: 100 } });
      expect(result.left).toBeGreaterThanOrEqual(MARGIN);
      expect(result.left + 400).toBeLessThanOrEqual(viewport.width - MARGIN);

      const start = layout({ trigger: rect(2, 100, 40, 40), panel: { width: 400, height: 100 } });
      expect(start.left).toBe(MARGIN);
    });
  });

  describe('vertical flip', () => {
    it('opens above when there is not enough space below and more space above', () => {
      const result = layout({ trigger: rect(100, 700, 200, 40) });
      expect(result.side).toBe('top');
      expect(result.top).toBe(700 - GAP - 300);
    });

    it('stays below when the space above is not larger', () => {
      const result = layout({ trigger: rect(100, 380, 200, 40), panel: { width: 240, height: 500 } });
      expect(result.side).toBe('bottom');
      expect(result.maxHeight).toBe(800 - 420 - GAP - MARGIN);
    });

    it('limits the height to the space on the chosen side', () => {
      const result = layout({ trigger: rect(100, 700, 200, 40), panel: { width: 240, height: 900 } });
      expect(result.maxHeight).toBe(700 - GAP - MARGIN);
      expect(result.top).toBe(MARGIN);
    });
  });

  describe('width', () => {
    it('is at least the trigger width when requested', () => {
      expect(layout({ matchTriggerWidth: true, panel: { width: 120, height: 100 } }).minWidth).toBe(200);
      expect(layout({ panel: { width: 120, height: 100 } }).minWidth).toBe(0);
    });

    it('never exceeds the viewport minus twice the margin', () => {
      const result = layout({ panel: { width: 2000, height: 100 } });
      expect(result.maxWidth).toBe(viewport.width - 2 * MARGIN);
      expect(result.left).toBe(MARGIN);
    });
  });
});
