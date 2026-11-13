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

  describe('preferred side and alignment', () => {
    it('keeps the automatic behavior when no preference is given', () => {
      expect(layout({ side: undefined, align: undefined })).toEqual(layout({}));
    });

    it('opens above when asked to and there is room', () => {
      const result = layout({ trigger: rect(100, 500, 200, 40), side: 'top' });
      expect(result.side).toBe('top');
      expect(result.top).toBe(500 - GAP - 300);
    });

    it('opens below when asked to even if the automatic choice would be above', () => {
      const result = layout({ trigger: rect(100, 600, 200, 40), panel: { width: 240, height: 100 }, side: 'bottom' });
      expect(result.side).toBe('bottom');
    });

    it('flips to the other side when the preferred one does not fit and has less room', () => {
      expect(layout({ trigger: rect(100, 700, 200, 40), side: 'bottom' }).side).toBe('top');
      expect(layout({ trigger: rect(100, 20, 200, 40), side: 'top' }).side).toBe('bottom');
    });

    it('keeps the preferred side when it does not fit but has more room', () => {
      const result = layout({ trigger: rect(100, 200, 200, 40), panel: { width: 240, height: 700 }, side: 'bottom' });
      expect(result.side).toBe('bottom');
    });

    it('aligns to the end of the trigger when asked to, even in the left half', () => {
      const result = layout({ trigger: rect(300, 100, 200, 40), panel: { width: 240, height: 100 }, align: 'end' });
      expect(result.align).toBe('end');
      expect(result.left).toBe(500 - 240);
    });

    it('aligns to the start of the trigger when asked to, even in the right half', () => {
      const result = layout({ trigger: rect(600, 100, 200, 40), align: 'start' });
      expect(result.align).toBe('start');
      expect(result.left).toBe(600);
    });

    it('moves to the other edge when the preferred alignment would leave the viewport', () => {
      expect(layout({ trigger: rect(850, 100, 100, 40), align: 'start' }).align).toBe('end');
      expect(layout({ trigger: rect(0, 100, 100, 40), align: 'end' }).align).toBe('start');
    });
  });
});
