import { Component, ComponentInterface, Host, Prop, State, Watch, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiSparklineVariant = 'neutral' | 'positive' | 'negative';
export type UaiSparklineLanguage = 'pt_BR' | 'en_US' | 'es_ES';

const TAG = 'uai-sparkline';
const VARIANTS: readonly UaiSparklineVariant[] = ['neutral', 'positive', 'negative'];
const LANGUAGES: readonly UaiSparklineLanguage[] = ['pt_BR', 'en_US', 'es_ES'];

const VIEWBOX_WIDTH = 310;
const VIEWBOX_HEIGHT = 68;
const PADDING_Y = 6;

let instanceCounter = 0;

interface SparklinePoint {
  x: number;
  y: number;
}

const TEXTS: Record<
  UaiSparklineLanguage,
  {
    empty: string;
    neutral: string;
    positive: string;
    negative: string;
  }
> = {
  pt_BR: {
    empty: 'Gráfico de tendência sem dados',
    neutral: 'Gráfico de tendência neutra',
    positive: 'Gráfico de tendência positiva',
    negative: 'Gráfico de tendência negativa',
  },
  en_US: {
    empty: 'Trend sparkline with no data',
    neutral: 'Neutral trend sparkline',
    positive: 'Positive trend sparkline',
    negative: 'Negative trend sparkline',
  },
  es_ES: {
    empty: 'Gráfico de tendencia sin datos',
    neutral: 'Gráfico de tendencia neutra',
    positive: 'Gráfico de tendencia positiva',
    negative: 'Gráfico de tendencia negativa',
  },
};

const roundCoord = (value: number): number => Math.round(value * 100) / 100;

const parseNumericData = (input: number[] | string | undefined): number[] => {
  let raw: unknown = input;
  if (typeof input === 'string') {
    const trimmed = input.trim();
    if (!trimmed) return [];
    try {
      raw = JSON.parse(trimmed);
    } catch {
      return [];
    }
  }
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item) => item !== null && item !== '' && typeof item !== 'boolean')
    .map((item) => Number(item))
    .filter((num) => Number.isFinite(num));
};

const buildLinearPath = (points: SparklinePoint[]): string => {
  if (!points.length) return '';
  return points
    .map((pt, idx) => `${idx === 0 ? 'M' : 'L'} ${roundCoord(pt.x)} ${roundCoord(pt.y)}`)
    .join(' ');
};

const buildMonotoneSmoothPath = (points: SparklinePoint[]): string => {
  const n = points.length;
  if (n === 0) return '';
  if (n === 1) return `M ${roundCoord(points[0].x)} ${roundCoord(points[0].y)}`;
  if (n === 2) return buildLinearPath(points);

  const dx: number[] = [];
  const dy: number[] = [];
  const slopes: number[] = [];

  for (let i = 0; i < n - 1; i++) {
    const deltaX = points[i + 1].x - points[i].x;
    const deltaY = points[i + 1].y - points[i].y;
    dx.push(deltaX);
    dy.push(deltaY);
    slopes.push(deltaX === 0 ? 0 : deltaY / deltaX);
  }

  const tangents: number[] = [slopes[0]];
  for (let i = 1; i < n - 1; i++) {
    if (slopes[i - 1] * slopes[i] <= 0) {
      tangents.push(0);
    } else {
      tangents.push((slopes[i - 1] + slopes[i]) / 2);
    }
  }
  tangents.push(slopes[n - 2]);

  for (let i = 0; i < n - 1; i++) {
    if (slopes[i] === 0) {
      tangents[i] = 0;
      tangents[i + 1] = 0;
    } else {
      const alpha = tangents[i] / slopes[i];
      const beta = tangents[i + 1] / slopes[i];
      const hypot = Math.hypot(alpha, beta);
      if (hypot > 3) {
        const scale = 3 / hypot;
        tangents[i] = scale * alpha * slopes[i];
        tangents[i + 1] = scale * beta * slopes[i];
      }
    }
  }

  let d = `M ${roundCoord(points[0].x)} ${roundCoord(points[0].y)}`;
  for (let i = 0; i < n - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const seg = dx[i] / 3;
    const cp1x = p0.x + seg;
    const cp1y = p0.y + tangents[i] * seg;
    const cp2x = p1.x - seg;
    const cp2y = p1.y - tangents[i + 1] * seg;
    d += ` C ${roundCoord(cp1x)} ${roundCoord(cp1y)}, ${roundCoord(cp2x)} ${roundCoord(cp2y)}, ${roundCoord(p1.x)} ${roundCoord(p1.y)}`;
  }

  return d;
};

/**
 * Compact responsive trend sparkline rendered in SVG without axes.
 * Use inside KPI and summary cards to illustrate directional variation; pair with a visible metric and `label`;
 * avoid using color alone to communicate positive or negative status.
 *
 * @part chart - The sparkline container with accessible image semantics.
 */
@Component({
  tag: 'uai-sparkline',
  styleUrl: 'uai-sparkline.scss',
  shadow: true,
})
export class UaiSparkline implements ComponentInterface {
  @State() private revision = 0;

  private readonly gradientId = `uai-sparkline-grad-${++instanceCounter}`;

  /** Numeric series as an array of numbers or a JSON-encoded array string. */
  @Prop() data?: number[] | string = [];

  /** Semantic color variant (`neutral`, `positive`, or `negative`). Legacy aliases `green` and `red` map to `positive` and `negative`. */
  @Prop() variant?: UaiSparklineVariant = 'neutral';

  /** Renders a monotone smooth cubic curve when `true`, or straight segments when `false`. */
  @Prop() smooth?: boolean = true;

  /** Displays the subtle vertical gradient area under the curve for every variant, including flat `neutral` trends. */
  @Prop() showArea?: boolean = true;

  /** Accessible description announced for the sparkline. Falls back to a localized summary when omitted. */
  @Prop() label?: string = '';

  /** Locale used for fallback accessible announcements (`pt_BR`, `en_US`, or `es_ES`). */
  @Prop() language?: UaiSparklineLanguage = 'pt_BR';

  /** Optional test identifier placed on the chart container. */
  @Prop() dataTest?: string = null;

  @Watch('data')
  protected handleDataChange(): void {
    this.revision += 1;
  }

  private resolveVariant(): UaiSparklineVariant {
    const raw = String(this.variant ?? 'neutral').toLowerCase();
    if (raw === 'green') return 'positive';
    if (raw === 'red') return 'negative';
    const match = VARIANTS.find((candidate) => candidate === raw);
    if (match) return match;
    warnLegacyValue(TAG, 'variant', this.variant, 'neutral');
    return 'neutral';
  }

  private resolveLanguage(): UaiSparklineLanguage {
    if ((this.language as string) === 'es_MX') return 'es_ES';
    const match = LANGUAGES.find((candidate) => candidate === this.language);
    if (match) return match;
    warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
    return 'pt_BR';
  }

  render(): HTMLElement {
    const variant = this.resolveVariant();
    const language = this.resolveLanguage();
    const values = parseNumericData(this.data);
    const texts = TEXTS[language];

    const customLabel = (this.label || '').trim();
    const accessibleLabel = customLabel || (values.length === 0 ? texts.empty : texts[variant]);

    let linePath = '';
    let areaPath = '';
    let isConstant = true;

    const closeArea = (path: string): string => `${path} L ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT} L 0 ${VIEWBOX_HEIGHT} Z`;

    if (values.length === 1) {
      const centerY = VIEWBOX_HEIGHT / 2;
      linePath = `M 0 ${roundCoord(centerY)} L ${VIEWBOX_WIDTH} ${roundCoord(centerY)}`;
      areaPath = closeArea(linePath);
    } else if (values.length > 1) {
      const min = Math.min(...values);
      const max = Math.max(...values);
      const range = max - min;
      isConstant = range === 0;

      if (isConstant) {
        const centerY = VIEWBOX_HEIGHT / 2;
        linePath = `M 0 ${roundCoord(centerY)} L ${VIEWBOX_WIDTH} ${roundCoord(centerY)}`;
        areaPath = closeArea(linePath);
      } else {
        const usableHeight = VIEWBOX_HEIGHT - PADDING_Y * 2;
        const points: SparklinePoint[] = values.map((val, idx) => ({
          x: (idx / (values.length - 1)) * VIEWBOX_WIDTH,
          y: PADDING_Y + (1 - (val - min) / range) * usableHeight,
        }));
        linePath = this.smooth !== false ? buildMonotoneSmoothPath(points) : buildLinearPath(points);
        areaPath = closeArea(linePath);
      }
    }

    const renderArea = Boolean(this.showArea && areaPath);

    return (
      <Host>
        <div
          class={{
            sparkline: true,
            [`sparkline--${variant}`]: true,
          }}
          role="img"
          aria-label={accessibleLabel}
          part="chart"
          data-test={this.dataTest}
        >
          <svg
            key={`sparkline-${this.revision}`}
            class="sparkline__svg"
            viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {renderArea && (
              <defs>
                <linearGradient id={this.gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="currentColor" stop-opacity="1" />
                  <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
                </linearGradient>
              </defs>
            )}
            {renderArea && <path class="sparkline__area" d={areaPath} fill={`url(#${this.gradientId})`} />}
            {linePath && (
              <path
                class="sparkline__line"
                d={linePath}
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                vector-effect="non-scaling-stroke"
              />
            )}
          </svg>
        </div>
      </Host>
    );
  }
}
