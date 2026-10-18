import {
  buildCategoryColorMap, DEFAULT_LEGEND_PALETTE,
  calculateHeatmapLayout, calculatePieLayout, generateDonutPath,
  formatTick, normalizeChartData, niceTickStep,
  createLinearScale, createBandScale,
  calculateLineChartLayout, calculateBarChartLayout,
  generateLinePathMonotone, generateLinePathLinear,
} from '../chart-math';

describe('buildCategoryColorMap', () => {
  const data = [
    { label: 'A', value: 10 },
    { label: 'B', value: 20 },
    { label: 'C', value: 30 },
  ];

  it('maps each unique category to a palette color', () => {
    const map = buildCategoryColorMap(data, 'label');
    expect(map.get('A')).toBe(DEFAULT_LEGEND_PALETTE[0]);
    expect(map.get('B')).toBe(DEFAULT_LEGEND_PALETTE[1]);
    expect(map.get('C')).toBe(DEFAULT_LEGEND_PALETTE[2]);
  });

  it('cycles palette when categories exceed palette size', () => {
    const manyData = DEFAULT_LEGEND_PALETTE.map((_, i) => ({ label: `item${i}`, value: i }));
    manyData.push({ label: 'overflow', value: 99 });
    const map = buildCategoryColorMap(manyData, 'label');
    expect(map.get('overflow')).toBe(DEFAULT_LEGEND_PALETTE[0]);
  });

  it('deduplicates repeated category values', () => {
    const duplicateData = [
      { label: 'A', value: 10 },
      { label: 'A', value: 20 },
      { label: 'B', value: 30 },
    ];
    const map = buildCategoryColorMap(duplicateData, 'label');
    expect(map.size).toBe(2);
  });

  it('returns empty map for empty data', () => {
    const map = buildCategoryColorMap([], 'label');
    expect(map.size).toBe(0);
  });

  it('accepts custom palette', () => {
    const customPalette = ['#aaa', '#bbb', '#ccc'];
    const map = buildCategoryColorMap(data, 'label', customPalette);
    expect(map.get('A')).toBe('#aaa');
    expect(map.get('B')).toBe('#bbb');
  });

  it('returns empty map when palette is empty', () => {
    const map = buildCategoryColorMap(data, 'label', []);
    expect(map.size).toBe(0);
  });
});

describe('calculateHeatmapLayout', () => {
  const data = [
    { x: 'Seg', y: '9h',  value: 10 },
    { x: 'Seg', y: '10h', value: 50 },
    { x: 'Ter', y: '9h',  value: 100 },
    { x: 'Ter', y: '10h', value: 50 },
  ];
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  it('returns correct cell count (xDomain × yDomain)', () => {
    const layout = calculateHeatmapLayout(data, 'x', 'y', 'value', 400, 300, margin, 2);
    expect(layout.cells.length).toBe(4);
  });

  it('scales opacity: min value → 0.1, max value → 1.0', () => {
    const layout = calculateHeatmapLayout(data, 'x', 'y', 'value', 400, 300, margin, 2);
    const minCell = layout.cells.find(c => (c.datum as any).value === 10);
    const maxCell = layout.cells.find(c => (c.datum as any).value === 100);
    expect(minCell.opacity).toBeCloseTo(0.1);
    expect(maxCell.opacity).toBeCloseTo(1.0);
  });

  it('returns opacity 1.0 for all cells when all values are equal', () => {
    const equalData = [
      { x: 'A', y: '1', value: 5 },
      { x: 'B', y: '1', value: 5 },
    ];
    const layout = calculateHeatmapLayout(equalData, 'x', 'y', 'value', 400, 300, margin, 2);
    layout.cells.forEach(c => expect(c.opacity).toBe(1.0));
  });

  it('returns empty layout for empty data', () => {
    const layout = calculateHeatmapLayout([], 'x', 'y', 'value', 400, 300, margin, 2);
    expect(layout.cells).toHaveLength(0);
    expect(layout.xLabels).toHaveLength(0);
    expect(layout.yLabels).toHaveLength(0);
  });

  it('last entry wins for duplicate (x, y) pairs', () => {
    const dupeData = [
      { x: 'A', y: '1', value: 10 },
      { x: 'A', y: '1', value: 99 },
    ];
    const layout = calculateHeatmapLayout(dupeData, 'x', 'y', 'value', 400, 300, margin, 2);
    expect(layout.cells).toHaveLength(1);
    expect((layout.cells[0].datum as any).value).toBe(99);
  });

  it('xLabels length equals unique x values count', () => {
    const layout = calculateHeatmapLayout(data, 'x', 'y', 'value', 400, 300, margin, 2);
    expect(layout.xLabels).toHaveLength(2);
  });

  it('yLabels length equals unique y values count', () => {
    const layout = calculateHeatmapLayout(data, 'x', 'y', 'value', 400, 300, margin, 2);
    expect(layout.yLabels).toHaveLength(2);
  });
});

// ─── PIE LAYOUT ──────────────────────────────────────────────────────────────

describe('calculatePieLayout', () => {
  const data = [
    { label: 'A', value: 50 },
    { label: 'B', value: 30 },
    { label: 'C', value: 20 },
  ];

  it('returns one slice per data point', () => {
    const layout = calculatePieLayout(data, 'label', 'value', 400, 300);
    expect(layout.slices.length).toBe(3);
  });

  it('calculates percentages correctly', () => {
    const layout = calculatePieLayout(data, 'label', 'value', 400, 300);
    expect(layout.slices[0].percentage).toBeCloseTo(50);
    expect(layout.slices[1].percentage).toBeCloseTo(30);
    expect(layout.slices[2].percentage).toBeCloseTo(20);
  });

  it('slices cover full circle (2π radians)', () => {
    const layout = calculatePieLayout(data, 'label', 'value', 400, 300);
    const lastSlice = layout.slices[layout.slices.length - 1];
    const firstSlice = layout.slices[0];
    const totalAngle = lastSlice.endAngle - firstSlice.startAngle;
    expect(totalAngle).toBeCloseTo(2 * Math.PI);
  });

  it('uses DEFAULT_LEGEND_PALETTE for slice colors', () => {
    const layout = calculatePieLayout(data, 'label', 'value', 400, 300);
    expect(layout.slices[0].color).toBe(DEFAULT_LEGEND_PALETTE[0]);
    expect(layout.slices[1].color).toBe(DEFAULT_LEGEND_PALETTE[1]);
  });

  it('returns empty slices for empty data', () => {
    const layout = calculatePieLayout([], 'label', 'value', 400, 300);
    expect(layout.slices).toHaveLength(0);
  });

  it('innerRadius respects innerRadiusPct', () => {
    const layout = calculatePieLayout(data, 'label', 'value', 400, 300, 60);
    expect(layout.innerRadius).toBeCloseTo(layout.outerRadius * 0.6);
  });

  it('centerX and centerY are half of width/height', () => {
    const layout = calculatePieLayout(data, 'label', 'value', 400, 300);
    expect(layout.centerX).toBe(200);
    expect(layout.centerY).toBe(150);
  });
});

describe('generateDonutPath', () => {
  it('returns a non-empty string for a valid slice', () => {
    const path = generateDonutPath(0, Math.PI / 2, 100, 60, 0.02);
    expect(typeof path).toBe('string');
    expect(path.length).toBeGreaterThan(0);
  });

  it('returns empty string when adjustedEnd <= adjustedStart (too thin)', () => {
    const path = generateDonutPath(0, 0.01, 100, 60, 1);
    expect(path).toBe('');
  });

  it('uses large-arc flag for slices > 180°', () => {
    const path = generateDonutPath(0, Math.PI * 1.5, 100, 60, 0);
    expect(path).toContain(' 1 ');
  });

  it('does NOT use large-arc flag for slices < 180°', () => {
    const path = generateDonutPath(0, Math.PI * 0.5, 100, 60, 0);
    expect(path).toMatch(/A \S+ \S+ 0 0 1/);
  });
});

// ─── NORMALIZE CHART DATA ─────────────────────────────────────────────────────

describe('normalizeChartData', () => {
  it('returns array as-is when given an array', () => {
    const data = [{ label: 'A', value: 1 }];
    expect(normalizeChartData(data)).toBe(data);
  });

  it('parses valid JSON string into array', () => {
    const result = normalizeChartData('[{"label":"A","value":1}]');
    expect(result).toHaveLength(1);
    expect(result[0].label).toBe('A');
  });

  it('returns empty array for invalid JSON', () => {
    expect(normalizeChartData('not json')).toEqual([]);
  });

  it('returns empty array for empty string', () => {
    expect(normalizeChartData('')).toEqual([]);
  });

  it('returns empty array for JSON that is not an array', () => {
    expect(normalizeChartData('{"label":"A"}')).toEqual([]);
  });
});

// ─── FORMAT TICK ─────────────────────────────────────────────────────────────

describe('formatTick', () => {
  it('returns string value when no formatter', () => {
    expect(formatTick(42)).toBe('42');
    expect(formatTick('hello')).toBe('hello');
  });

  it('formats with toFixed', () => {
    expect(formatTick(3.14159, 'toFixed,2')).toBe('3.14');
  });

  it('formats with round', () => {
    expect(formatTick(3.567, 'round,1')).toBe('3.6');
  });

  it('formats with uppercase', () => {
    expect(formatTick('hello', 'uppercase')).toBe('HELLO');
  });

  it('formats with lowercase', () => {
    expect(formatTick('WORLD', 'lowercase')).toBe('world');
  });

  it('formats with slice', () => {
    expect(formatTick('January', 'slice,0,3')).toBe('Jan');
  });

  it('returns original for unknown formatter', () => {
    expect(formatTick('test', 'unknown')).toBe('test');
  });
});

// ─── NICE TICK STEP ───────────────────────────────────────────────────────────

describe('niceTickStep', () => {
  it('returns 1 for rawStep <= 0', () => {
    expect(niceTickStep(0)).toBe(1);
    expect(niceTickStep(-5)).toBe(1);
  });

  it('rounds up to nice values', () => {
    expect(niceTickStep(35.75)).toBe(50);
    expect(niceTickStep(12)).toBe(20);
    expect(niceTickStep(7)).toBe(10);
    expect(niceTickStep(1)).toBe(1);
    expect(niceTickStep(1.5)).toBe(2);
    expect(niceTickStep(3)).toBe(5);
  });
});

// ─── LINEAR SCALE ─────────────────────────────────────────────────────────────

describe('createLinearScale', () => {
  it('maps domain min to range min and domain max to range max', () => {
    const scale = createLinearScale([0, 100], [0, 200]);
    expect(scale(0)).toBe(0);
    expect(scale(100)).toBe(200);
    expect(scale(50)).toBe(100);
  });

  it('returns midpoint when domain is flat', () => {
    const scale = createLinearScale([5, 5], [0, 100]);
    expect(scale(5)).toBe(50);
  });

  it('supports inverted range (SVG Y-axis)', () => {
    const scale = createLinearScale([0, 100], [200, 0]);
    expect(scale(0)).toBe(200);
    expect(scale(100)).toBe(0);
    expect(scale(50)).toBe(100);
  });
});

// ─── BAND SCALE ──────────────────────────────────────────────────────────────

describe('createBandScale', () => {
  it('returns range start for first element', () => {
    const scale = createBandScale(['A', 'B', 'C'], [0, 300], 0);
    expect(scale('A')).toBe(0);
  });

  it('returns range start for unknown value', () => {
    const scale = createBandScale(['A', 'B'], [0, 200], 0);
    expect(scale('Z')).toBe(0);
  });

  it('positions bands evenly', () => {
    const scale = createBandScale(['A', 'B'], [0, 200], 0);
    const posA = scale('A');
    const posB = scale('B');
    expect(posB - posA).toBe(100);
  });
});

// ─── GENERATE LINE PATH ───────────────────────────────────────────────────────

describe('generateLinePathLinear', () => {
  it('returns empty string for no points', () => {
    expect(generateLinePathLinear([])).toBe('');
  });

  it('returns M command for single point', () => {
    const path = generateLinePathLinear([{ x: 10, y: 20 }]);
    expect(path).toBe('M10,20');
  });

  it('uses L commands for subsequent points', () => {
    const path = generateLinePathLinear([{ x: 0, y: 0 }, { x: 10, y: 10 }, { x: 20, y: 5 }]);
    expect(path).toContain('M0,0');
    expect(path).toContain('L10,10');
    expect(path).toContain('L20,5');
  });
});

describe('generateLinePathMonotone', () => {
  it('returns empty string for no points', () => {
    expect(generateLinePathMonotone([])).toBe('');
  });

  it('returns M command for single point', () => {
    const path = generateLinePathMonotone([{ x: 5, y: 10 }]);
    expect(path).toBe('M5,10');
  });

  it('uses C (cubic bezier) commands for multiple points', () => {
    const path = generateLinePathMonotone([{ x: 0, y: 0 }, { x: 10, y: 10 }]);
    expect(path).toContain('M0,0');
    expect(path).toContain('C');
  });
});

// ─── CALCULATE LINE CHART LAYOUT ─────────────────────────────────────────────

describe('calculateLineChartLayout', () => {
  const data = [
    { label: 'Jan', value: 10 },
    { label: 'Fev', value: 50 },
    { label: 'Mar', value: 30 },
  ];
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  it('returns empty layout for empty data', () => {
    const layout = calculateLineChartLayout([], 'label', 'value', 400, 300, 'linear', margin);
    expect(layout.path).toBe('');
    expect(layout.dots).toHaveLength(0);
    expect(layout.xLabels).toHaveLength(0);
  });

  it('returns one dot per data point', () => {
    const layout = calculateLineChartLayout(data, 'label', 'value', 400, 300, 'linear', margin);
    expect(layout.dots).toHaveLength(3);
  });

  it('returns xLabels matching unique x domain', () => {
    const layout = calculateLineChartLayout(data, 'label', 'value', 400, 300, 'linear', margin);
    expect(layout.xLabels).toHaveLength(3);
    expect(layout.xLabels.map(l => l.label)).toEqual(['Jan', 'Fev', 'Mar']);
  });

  it('generates non-empty path string', () => {
    const layout = calculateLineChartLayout(data, 'label', 'value', 400, 300, 'linear', margin);
    expect(layout.path.length).toBeGreaterThan(0);
  });

  it('works with monotone curve', () => {
    const layout = calculateLineChartLayout(data, 'label', 'value', 400, 300, 'monotone', margin);
    expect(layout.path).toContain('C');
  });
});

// ─── CALCULATE BAR CHART LAYOUT ──────────────────────────────────────────────

describe('calculateBarChartLayout', () => {
  const data = [
    { label: 'Jan', value: 10 },
    { label: 'Fev', value: 50 },
  ];
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const series = [{ dataKey: 'value' }];

  it('returns empty layout for empty data', () => {
    const layout = calculateBarChartLayout([], 'label', series, 400, 300, margin);
    expect(layout.bars).toHaveLength(0);
    expect(layout.groups).toHaveLength(0);
  });

  it('returns one bar per data point for single series', () => {
    const layout = calculateBarChartLayout(data, 'label', series, 400, 300, margin);
    expect(layout.bars).toHaveLength(2);
  });

  it('returns one group per data point', () => {
    const layout = calculateBarChartLayout(data, 'label', series, 400, 300, margin);
    expect(layout.groups).toHaveLength(2);
  });

  it('returns double bars for two series', () => {
    const twoSeries = [{ dataKey: 'a' }, { dataKey: 'b' }];
    const multiData = [
      { label: 'Jan', a: 10, b: 20 },
      { label: 'Fev', a: 30, b: 15 },
    ];
    const layout = calculateBarChartLayout(multiData, 'label', twoSeries, 400, 300, margin);
    expect(layout.bars).toHaveLength(4);
  });

  it('stacks bars with same stackId into one column', () => {
    const stackedSeries = [
      { dataKey: 'a', stackId: 's1' },
      { dataKey: 'b', stackId: 's1' },
    ];
    const stackData = [
      { label: 'Jan', a: 10, b: 20 },
    ];
    const layout = calculateBarChartLayout(stackData, 'label', stackedSeries, 400, 300, margin);
    // 1 group, 1 column (stacked), 2 bars
    expect(layout.bars).toHaveLength(2);
  });

  it('vertical=true produces bars with non-zero width', () => {
    const layout = calculateBarChartLayout(data, 'label', series, 400, 300, margin, 5, true);
    layout.bars.forEach(bar => expect(bar.width).toBeGreaterThan(0));
  });
});
