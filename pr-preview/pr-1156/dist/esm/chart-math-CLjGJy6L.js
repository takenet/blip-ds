const DEFAULT_CHART_MARGIN = {
    top: 20,
    right: 20,
    bottom: 32,
    left: 36,
};

const DEFAULT_LEGEND_PALETTE = [
    '#0d6efd', '#05b96c', '#ff6b6b', '#ffc107', '#9c27b0',
    '#00bcd4', '#ff9800', '#4caf50', '#e91e63', '#607d8b',
];
/**
 * Builds a Map from unique category string values to palette colors.
 * Cycles through palette if categories exceed palette size.
 */
function buildCategoryColorMap(data, categoryKey, palette = DEFAULT_LEGEND_PALETTE) {
    const points = normalizeChartData(data);
    const seen = new Set();
    const ordered = [];
    for (const p of points) {
        const val = String(p[categoryKey]);
        if (!seen.has(val)) {
            seen.add(val);
            ordered.push(val);
        }
    }
    const map = new Map();
    if (!palette.length)
        return map;
    ordered.forEach((cat, i) => {
        map.set(cat, palette[i % palette.length]);
    });
    return map;
}
/**
 * Format a value using tickFormatter string.
 * Examples: "toFixed,2" | "uppercase" | "slice,0,3" | "round,1"
 */
function formatTick(value, formatter) {
    if (!formatter)
        return String(value);
    const parts = formatter.split(',').map(s => s.trim());
    const fn = parts[0];
    const args = parts.slice(1);
    let result = String(value);
    switch (fn) {
        case 'toFixed': {
            const decimals = parseInt(args[0] || '0', 10);
            return Number(value).toFixed(decimals);
        }
        case 'round': {
            const decimals = parseInt(args[0] || '0', 10);
            const factor = Math.pow(10, decimals);
            return (Math.round(Number(value) * factor) / factor).toString();
        }
        case 'uppercase':
            return result.toUpperCase();
        case 'lowercase':
            return result.toLowerCase();
        case 'slice': {
            const start = parseInt(args[0] || '0', 10);
            const end = args[1] ? parseInt(args[1], 10) : undefined;
            return result.slice(start, end);
        }
        default:
            return result;
    }
}
/**
 * Linear scale: maps domain to range linearly
 */
function createLinearScale(domain, range) {
    const [minDomain, maxDomain] = [Math.min(...domain), Math.max(...domain)];
    const [minRange, maxRange] = range;
    return (value) => {
        if (maxDomain === minDomain)
            return (minRange + maxRange) / 2;
        return minRange + ((value - minDomain) / (maxDomain - minDomain)) * (maxRange - minRange);
    };
}
/**
 * Band scale: maps categorical values to fixed-width bands
 */
function createBandScale(domain, range, padding = 0.5) {
    const [minRange, maxRange] = range;
    const totalWidth = maxRange - minRange;
    const bandCount = domain.length;
    const bandWidth = totalWidth / (bandCount + padding * (bandCount - 1));
    const paddingWidth = bandWidth * padding;
    return (value) => {
        const index = domain.indexOf(String(value));
        if (index === -1)
            return minRange;
        return minRange + index * (bandWidth + paddingWidth);
    };
}
function getBandWidth(domain, range, padding = 0.5) {
    const [minRange, maxRange] = range;
    const totalWidth = maxRange - minRange;
    const bandCount = domain.length;
    return totalWidth / (bandCount + padding * (bandCount - 1));
}
/**
 * Generate SVG path string for a line chart (monotone curve)
 */
function generateLinePathMonotone(points, tension = 0.4) {
    if (points.length === 0)
        return '';
    if (points.length === 1) {
        const p = points[0];
        return `M${p.x},${p.y}`;
    }
    let path = `M${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1];
        const p1 = points[i];
        const p2 = points[i + 1];
        // Catmull-Rom tangent approximation
        const t1x = p2 ? (p2.x - p0.x) / 2 : 0;
        const t1y = p2 ? (p2.y - p0.y) / 2 : 0;
        // Control points
        const c1x = p0.x + t1x * tension;
        const c1y = p0.y + t1y * tension;
        const c2x = p1.x - t1x * tension;
        const c2y = p1.y - t1y * tension;
        path += `C${c1x},${c1y},${c2x},${c2y},${p1.x},${p1.y}`;
    }
    return path;
}
/**
 * Generate SVG path string for a line chart (linear)
 */
function generateLinePathLinear(points) {
    if (points.length === 0)
        return '';
    let path = `M${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
        path += `L${points[i].x},${points[i].y}`;
    }
    return path;
}
function normalizeChartData(data) {
    if (Array.isArray(data)) {
        return data;
    }
    if (typeof data === 'string' && data.trim().length > 0) {
        try {
            const parsed = JSON.parse(data);
            return Array.isArray(parsed) ? parsed : [];
        }
        catch (_a) {
            return [];
        }
    }
    return [];
}
/**
 * Returns a "nice" round tick step >= rawStep.
 * e.g. rawStep=35.75 → 50, rawStep=12 → 20, rawStep=7 → 10
 */
function niceTickStep(rawStep) {
    if (rawStep <= 0)
        return 1;
    const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const normalized = rawStep / magnitude; // value between 1 and 10
    let nice;
    if (normalized <= 1)
        nice = 1;
    else if (normalized <= 2)
        nice = 2;
    else if (normalized <= 5)
        nice = 5;
    else
        nice = 10;
    return nice * magnitude;
}
function calculateLineChartLayout(data, xKey, yKey, width, height, curve = 'monotone', margin = DEFAULT_CHART_MARGIN, tickCount = 5) {
    const innerWidth = Math.max(0, width - margin.left - margin.right);
    const innerHeight = Math.max(0, height - margin.top - margin.bottom);
    const points = normalizeChartData(data);
    if (points.length === 0) {
        return { margin, innerWidth, innerHeight, path: '', dots: [], xLabels: [], yLabels: [], yGridLines: [], xGridLines: [] };
    }
    const xDomain = points.map((p) => String(p[xKey]));
    const yValues = points.map((p) => { var _a; return (_a = Number(p[yKey])) !== null && _a !== void 0 ? _a : 0; });
    const yMin = 0;
    const yMax = Math.max(...yValues, 1);
    // Compute nice tick step so the domain always covers yMax and ticks are round numbers.
    // e.g. yMax=143 → rawStep=35.75 → niceStep=50 → niceMax=200, ticks: 0,50,100,150,200
    const rawTickStep = yMax / (tickCount - 1);
    const tickStep = niceTickStep(rawTickStep);
    const niceMax = tickStep * (tickCount - 1);
    // Use niceMax as scale domain so the top tick aligns with the top of the chart area
    const xScale = createBandScale(xDomain, [0, innerWidth], 0.5);
    const yScale = createLinearScale([yMin, niceMax], [innerHeight, 0]);
    // Get band width for positioning points at center
    const bandWidth = getBandWidth(xDomain, [0, innerWidth], 0.5);
    // Convert points to coordinates
    const coordinates = points.map((p) => {
        var _a;
        return ({
            x: xScale(String(p[xKey])) + bandWidth / 2,
            y: yScale((_a = Number(p[yKey])) !== null && _a !== void 0 ? _a : 0),
            datum: p,
        });
    });
    // Generate path
    const pathFn = curve === 'linear' ? generateLinePathLinear : generateLinePathMonotone;
    const path = pathFn(coordinates.map((c) => ({ x: c.x, y: c.y })));
    // Generate X labels and grid lines (at band centers)
    const xLabels = xDomain.map((label) => ({
        x: xScale(label) + bandWidth / 2,
        label,
    }));
    const xGridLines = xDomain.map((label) => ({
        x: xScale(label) + bandWidth / 2,
    }));
    // Generate Y labels and grid lines — all tickCount ticks, always including niceMax
    const yLabels = [];
    const yGridLines = [];
    for (let i = 0; i < tickCount; i++) {
        const value = i * tickStep;
        const y = yScale(value);
        yLabels.push({ y, label: String(value) });
        yGridLines.push(y);
    }
    return { margin, innerWidth, innerHeight, path, dots: coordinates, xLabels, yLabels, yGridLines, xGridLines };
}
function calculateBarChartLayout(data, xKey, series, width, height, margin = DEFAULT_CHART_MARGIN, tickCount = 5, vertical = false, align = 'left') {
    const innerWidth = Math.max(0, width - margin.left - margin.right);
    const innerHeight = Math.max(0, height - margin.top - margin.bottom);
    const points = normalizeChartData(data);
    if (points.length === 0) {
        return { margin, innerWidth, innerHeight, vertical, bars: [], groups: [], xLabels: [], yLabels: [], yGridLines: [], xGridLines: [] };
    }
    const columns = [];
    const stackIndex = new Map();
    for (const s of series) {
        if (s.stackId) {
            if (!stackIndex.has(s.stackId)) {
                stackIndex.set(s.stackId, columns.length);
                columns.push({ stackId: s.stackId, series: [s] });
            }
            else {
                columns[stackIndex.get(s.stackId)].series.push(s);
            }
        }
        else {
            columns.push({ stackId: null, series: [s] });
        }
    }
    const xDomain = points.map((p) => String(p[xKey]));
    const valueMax = Math.max(...points.map(p => Math.max(...columns.map(col => Math.max(...col.series.map(s => Number(p[s.dataKey]) || 0))))), 1);
    const rawTickStep = valueMax / (tickCount - 1);
    const tickStep = niceTickStep(rawTickStep);
    const niceMax = tickStep * (tickCount - 1);
    if (vertical) {
        // Horizontal bar chart: categories on Y axis, values on X axis
        const bandScale = createBandScale(xDomain, [0, innerHeight], 0.3);
        const valueScale = createLinearScale([0, niceMax], [0, innerWidth]);
        const bandWidth = getBandWidth(xDomain, [0, innerHeight], 0.3);
        const N = columns.length;
        const gapBetween = N > 1 ? 8 : 0;
        const totalInnerGap = gapBetween * (N - 1);
        const colHeight = (bandWidth - totalInnerGap) / N;
        const bars = points.flatMap((p, groupIndex) => {
            const bandStart = bandScale(String(p[xKey]));
            return columns.flatMap((col, ci) => {
                const colY = bandStart + ci * (colHeight + gapBetween);
                const sorted = [...col.series].sort((a, b) => (Number(p[b.dataKey]) || 0) - (Number(p[a.dataKey]) || 0));
                return sorted.map(s => {
                    const value = Number(p[s.dataKey]) || 0;
                    const barWidth = Math.max(0, valueScale(value));
                    const x = align === 'right'
                        ? innerWidth - barWidth
                        : align === 'center'
                            ? (innerWidth - barWidth) / 2
                            : 0; // left
                    return {
                        x,
                        y: colY,
                        width: barWidth,
                        height: colHeight,
                        datum: p,
                        dataKey: s.dataKey,
                        groupIndex,
                    };
                });
            });
        });
        const groups = points.map(p => ({
            centerX: innerWidth / 2,
            centerY: bandScale(String(p[xKey])) + bandWidth / 2,
            datum: p,
        }));
        // xLabels: category labels rendered on Y axis (x field = band center on Y)
        const xLabels = xDomain.map(label => ({
            x: bandScale(label) + bandWidth / 2,
            label,
        }));
        // yLabels: value ticks rendered on X axis (y field = X position)
        const yLabels = [];
        const yGridLines = [];
        for (let i = 0; i < tickCount; i++) {
            const value = i * tickStep;
            const pos = valueScale(value);
            yLabels.push({ y: pos, label: String(value) });
            yGridLines.push(pos);
        }
        // xGridLines: horizontal lines at each category center
        const xGridLines = xDomain.map(label => ({
            x: bandScale(label) + bandWidth / 2,
        }));
        return { margin, innerWidth, innerHeight, vertical, bars, groups, xLabels, yLabels, yGridLines, xGridLines };
    }
    // Default: column chart (categories on X, values on Y)
    const xScale = createBandScale(xDomain, [0, innerWidth], 0.3);
    const yScale = createLinearScale([0, niceMax], [innerHeight, 0]);
    const bandWidth = getBandWidth(xDomain, [0, innerWidth], 0.3);
    const N = columns.length;
    const gapBetween = N > 1 ? 8 : 0;
    const totalInnerGap = gapBetween * (N - 1);
    const colWidth = (bandWidth - totalInnerGap) / N;
    const bars = points.flatMap((p, groupIndex) => {
        const bandStart = xScale(String(p[xKey]));
        const totalGroupWidth = N * colWidth + (N - 1) * gapBetween;
        const bandOffset = align === 'center'
            ? (bandWidth - totalGroupWidth) / 2
            : align === 'right'
                ? bandWidth - totalGroupWidth
                : 0; // left
        return columns.flatMap((col, ci) => {
            const colX = bandStart + bandOffset + ci * (colWidth + gapBetween);
            const sorted = [...col.series].sort((a, b) => (Number(p[b.dataKey]) || 0) - (Number(p[a.dataKey]) || 0));
            return sorted.map(s => {
                const value = Number(p[s.dataKey]) || 0;
                const yTop = yScale(value);
                const yBottom = yScale(0);
                return {
                    x: colX,
                    y: yTop,
                    width: colWidth,
                    height: Math.max(0, yBottom - yTop),
                    datum: p,
                    dataKey: s.dataKey,
                    groupIndex,
                };
            });
        });
    });
    const groups = points.map((p) => ({
        centerX: xScale(String(p[xKey])) + bandWidth / 2,
        centerY: innerHeight / 2,
        datum: p,
    }));
    const xLabels = xDomain.map((label) => ({
        x: xScale(label) + bandWidth / 2,
        label,
    }));
    const xGridLines = xDomain.map((label) => ({
        x: xScale(label) + bandWidth / 2,
    }));
    const yLabels = [];
    const yGridLines = [];
    for (let i = 0; i < tickCount; i++) {
        const value = i * tickStep;
        const y = yScale(value);
        yLabels.push({ y, label: String(value) });
        yGridLines.push(y);
    }
    return { margin, innerWidth, innerHeight, vertical, bars, groups, xLabels, yLabels, yGridLines, xGridLines };
}
function calculateGridsAndLabels(data, xKey, yKey, width, height) {
    const points = normalizeChartData(data);
    const margin = DEFAULT_CHART_MARGIN;
    const innerWidth = Math.max(0, width - margin.left - margin.right);
    const innerHeight = Math.max(0, height - margin.top - margin.bottom);
    if (points.length === 0) {
        return { xGridLines: [], yGridLines: [], margin };
    }
    const xDomain = points.map((p) => String(p[xKey]));
    const yValues = points.map((p) => { var _a; return (_a = Number(p[yKey])) !== null && _a !== void 0 ? _a : 0; });
    const yMin = 0;
    const yMax = Math.max(...yValues, 1);
    // Create scales
    const xScale = createBandScale(xDomain, [0, innerWidth], 0.5);
    const yScale = createLinearScale([yMin, yMax], [innerHeight, 0]);
    // Get band width for positioning points at center
    const bandWidth = getBandWidth(xDomain, [0, innerWidth], 0.5);
    // X grid lines (vertical) - one for each category at the center
    const xGridLines = xDomain.map((label) => {
        const x = xScale(label) + bandWidth / 2;
        return { x, label };
    });
    // Y grid lines (horizontal) - auto-ticked values
    const tickCount = Math.min(5, Math.max(3, Math.ceil(yMax / 20)));
    const tickStep = Math.ceil(yMax / (tickCount - 1));
    const yGridLines = [];
    for (let i = 0; i < tickCount; i++) {
        const value = i * tickStep;
        if (value <= yMax) {
            const y = yScale(value);
            yGridLines.push({ y, label: String(value) });
        }
    }
    return { xGridLines, yGridLines, margin };
}
/**
 * Calculates cell positions, sizes, and opacity for a heatmap/matrix chart.
 *
 * - X axis = columns (unique xKey values, ordered by first appearance)
 * - Y axis = rows    (unique yKey values, ordered by first appearance)
 * - Opacity = linear scale: min value → 0.1, max value → 1.0
 * - Duplicate (x, y) pairs: last entry in data wins
 */
function calculateHeatmapLayout(data, xKey, yKey, valueKey, width, height, margin = DEFAULT_CHART_MARGIN, cellPadding = 2) {
    const points = normalizeChartData(data);
    if (points.length === 0) {
        return { cells: [], xLabels: [], yLabels: [] };
    }
    // Extract unique domains ordered by first appearance
    const xSeen = new Set();
    const ySeen = new Set();
    const xDomain = [];
    const yDomain = [];
    for (const p of points) {
        const xVal = String(p[xKey]);
        const yVal = String(p[yKey]);
        if (!xSeen.has(xVal)) {
            xSeen.add(xVal);
            xDomain.push(xVal);
        }
        if (!ySeen.has(yVal)) {
            ySeen.add(yVal);
            yDomain.push(yVal);
        }
    }
    const innerWidth = Math.max(0, width - margin.left - margin.right);
    const innerHeight = Math.max(0, height - margin.top - margin.bottom);
    const cellWidth = xDomain.length > 0
        ? (innerWidth - cellPadding * (xDomain.length - 1)) / xDomain.length
        : 0;
    const cellHeight = yDomain.length > 0
        ? (innerHeight - cellPadding * (yDomain.length - 1)) / yDomain.length
        : 0;
    // Build value map — last entry wins for duplicates
    const valueMap = new Map();
    const datumMap = new Map();
    for (const p of points) {
        const key = `${String(p[xKey])}::${String(p[yKey])}`;
        valueMap.set(key, Number(p[valueKey]) || 0);
        datumMap.set(key, p);
    }
    // Opacity scale: min → 0.1, max → 1.0
    const allValues = Array.from(valueMap.values());
    const minVal = Math.min(...allValues);
    const maxVal = Math.max(...allValues);
    const range = maxVal - minVal;
    const getOpacity = (value) => {
        if (range === 0)
            return 1.0;
        return (value - minVal) / range * 0.9 + 0.1;
    };
    // Generate one cell per (x, y) combination
    const cells = xDomain.flatMap((xCat, xi) => yDomain.map((yCat, yi) => {
        var _a, _b;
        const key = `${xCat}::${yCat}`;
        const value = (_a = valueMap.get(key)) !== null && _a !== void 0 ? _a : 0;
        const datum = (_b = datumMap.get(key)) !== null && _b !== void 0 ? _b : { [xKey]: xCat, [yKey]: yCat, [valueKey]: value };
        return {
            x: xi * (cellWidth + cellPadding),
            y: yi * (cellHeight + cellPadding),
            width: Math.max(0, cellWidth),
            height: Math.max(0, cellHeight),
            opacity: getOpacity(value),
            datum,
        };
    }));
    const xLabels = xDomain.map((label, xi) => ({
        x: xi * (cellWidth + cellPadding) + cellWidth / 2,
        label,
    }));
    const yLabels = yDomain.map((label, yi) => ({
        y: yi * (cellHeight + cellPadding) + cellHeight / 2,
        label,
    }));
    return { cells, xLabels, yLabels };
}
/**
 * Generates the SVG `d` attribute for a single donut/pie slice.
 *
 * @param startAngle  - Start angle in radians (−π/2 = 12 o'clock)
 * @param endAngle    - End angle in radians
 * @param outerRadius - Outer arc radius in pixels
 * @param innerRadius - Inner arc radius in pixels (0 = full wedge / pie)
 * @param padAngle    - Gap between slices in radians (split evenly on each side)
 */
function generateDonutPath(startAngle, endAngle, outerRadius, innerRadius, padAngle = 0.02) {
    const halfPad = padAngle / 2;
    const adjStart = startAngle + halfPad;
    const adjEnd = endAngle - halfPad;
    if (adjEnd <= adjStart)
        return '';
    const largeArc = (adjEnd - adjStart) > Math.PI ? 1 : 0;
    const ox1 = outerRadius * Math.cos(adjStart);
    const oy1 = outerRadius * Math.sin(adjStart);
    const ox2 = outerRadius * Math.cos(adjEnd);
    const oy2 = outerRadius * Math.sin(adjEnd);
    if (innerRadius <= 0) {
        return [
            `M 0 0`,
            `L ${ox1} ${oy1}`,
            `A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${ox2} ${oy2}`,
            'Z',
        ].join(' ');
    }
    const ix1 = innerRadius * Math.cos(adjEnd);
    const iy1 = innerRadius * Math.sin(adjEnd);
    const ix2 = innerRadius * Math.cos(adjStart);
    const iy2 = innerRadius * Math.sin(adjStart);
    return [
        `M ${ox1} ${oy1}`,
        `A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${ox2} ${oy2}`,
        `L ${ix1} ${iy1}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix2} ${iy2}`,
        'Z',
    ].join(' ');
}
/**
 * Calculates the full layout for a pie or donut chart.
 *
 * @param data           - Array of data objects or JSON string
 * @param labelKey       - Field name for slice labels (e.g., "label")
 * @param valueKey       - Field name for slice values (e.g., "value")
 * @param width          - Available width in pixels
 * @param height         - Available height in pixels
 * @param innerRadiusPct - Inner radius as % of outer (0 = pie, 60 = donut)
 * @param palette        - Color palette for slices
 */
function calculatePieLayout(data, labelKey, valueKey, width, height, innerRadiusPct = 60, palette = DEFAULT_LEGEND_PALETTE) {
    const points = normalizeChartData(data);
    const centerX = width / 2;
    const centerY = height / 2;
    if (points.length === 0) {
        return { slices: [], outerRadius: 0, innerRadius: 0, centerX, centerY };
    }
    const outerRadius = Math.min(width, height) / 2 * 0.85;
    const innerRadius = outerRadius * (innerRadiusPct / 100);
    const total = points.reduce((sum, p) => sum + (Number(p[valueKey]) || 0), 0);
    let currentAngle = -Math.PI / 2; // start at 12 o'clock
    const slices = points.map((p, i) => {
        var _a;
        const value = Number(p[valueKey]) || 0;
        const percentage = total > 0 ? (value / total) * 100 : 0;
        const sliceAngle = total > 0 ? (value / total) * 2 * Math.PI : 0;
        const startAngle = currentAngle;
        const endAngle = currentAngle + sliceAngle;
        currentAngle = endAngle;
        return {
            label: String((_a = p[labelKey]) !== null && _a !== void 0 ? _a : ''),
            value,
            percentage,
            startAngle,
            endAngle,
            color: palette[i % palette.length],
            datum: p,
        };
    });
    return { slices, outerRadius, innerRadius, centerX, centerY };
}

export { DEFAULT_LEGEND_PALETTE as D, calculateHeatmapLayout as a, buildCategoryColorMap as b, calculateBarChartLayout as c, calculateGridsAndLabels as d, calculateLineChartLayout as e, formatTick as f, calculatePieLayout as g, generateDonutPath as h };
//# sourceMappingURL=chart-math-CLjGJy6L.js.map

//# sourceMappingURL=chart-math-CLjGJy6L.js.map