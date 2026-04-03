import { buildCategoryColorMap, DEFAULT_LEGEND_PALETTE, calculateHeatmapLayout } from '../chart-math';

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
