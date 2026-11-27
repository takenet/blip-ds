import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export interface UaiBarChartItem {
  label: string;
  value: number;
  formattedValue?: string;
}

export type UaiBarChartFormat = 'number' | 'currency' | 'percent';
export type UaiBarChartLanguage = 'pt_BR' | 'en_US' | 'es_ES';

const TAG = 'uai-bar-chart';
const FORMATS: readonly UaiBarChartFormat[] = ['number', 'currency', 'percent'];
const LANGUAGES: readonly UaiBarChartLanguage[] = ['pt_BR', 'en_US', 'es_ES'];
const TICK_COUNT = 5;
const GRID_VIEWBOX_WIDTH = 400;
const GRID_VIEWBOX_HEIGHT = 200;

const LOCALE_MAP: Record<UaiBarChartLanguage, string> = {
  pt_BR: 'pt-BR',
  en_US: 'en-US',
  es_ES: 'es-ES',
};

const TEXTS: Record<
  UaiBarChartLanguage,
  {
    empty: string;
    chartLabel: string;
  }
> = {
  pt_BR: {
    empty: 'Sem dados para exibir',
    chartLabel: 'Gráfico de barras horizontais',
  },
  en_US: {
    empty: 'No data available',
    chartLabel: 'Horizontal bar chart',
  },
  es_ES: {
    empty: 'Sin datos para mostrar',
    chartLabel: 'Gráfico de barras horizontales',
  },
};

const parseBarItems = (input: UaiBarChartItem[] | string | undefined): UaiBarChartItem[] => {
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
    .filter((entry): entry is Record<string, unknown> => Boolean(entry) && typeof entry === 'object')
    .map((entry) => {
      const numeric = Number(entry.value);
      return {
        label: String(entry.label ?? ''),
        value: Number.isFinite(numeric) ? Math.max(0, numeric) : 0,
        formattedValue: typeof entry.formattedValue === 'string' ? entry.formattedValue : undefined,
      };
    });
};

const computeNiceDomainMax = (maxDataValue: number, explicitMax?: number): number => {
  if (typeof explicitMax === 'number' && Number.isFinite(explicitMax) && explicitMax > 0) {
    return explicitMax;
  }
  if (!Number.isFinite(maxDataValue) || maxDataValue <= 0) {
    return 100;
  }
  const intervals = TICK_COUNT - 1;
  const rawStep = maxDataValue / intervals;
  const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const normalized = rawStep / magnitude;
  const niceSteps = [1, 2, 2.5, 5, 10];
  const chosenStep = (niceSteps.find((step) => step >= normalized) ?? 10) * magnitude;
  return chosenStep * intervals;
};

const extractCurrencySymbol = (locale: string, currency: string): string => {
  try {
    const parts = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      currencyDisplay: 'symbol',
      maximumFractionDigits: 0,
    }).formatToParts(0);
    return parts.find((part) => part.type === 'currency')?.value ?? currency;
  } catch {
    return currency;
  }
};

const formatCompactNumber = (value: number, locale: string): string => {
  const abs = Math.abs(value);
  const formatUnit = (scaled: number) =>
    new Intl.NumberFormat(locale, {
      maximumFractionDigits: Number.isInteger(scaled) ? 0 : 1,
    }).format(scaled);

  if (abs >= 1_000_000_000) return `${formatUnit(value / 1_000_000_000)}B`;
  if (abs >= 1_000_000) return `${formatUnit(value / 1_000_000)}M`;
  if (abs >= 1_000) return `${formatUnit(value / 1_000)}k`;
  return formatUnit(value);
};

const formatTickValue = (
  value: number,
  format: UaiBarChartFormat,
  locale: string,
  currency: string,
): string => {
  if (value === 0) {
    return format === 'percent' ? '0%' : '0';
  }
  const compact = formatCompactNumber(value, locale);
  if (format === 'percent') return `${compact}%`;
  if (format === 'currency') {
    const symbol = extractCurrencySymbol(locale, currency);
    return `${symbol}${compact}`;
  }
  return compact;
};

const formatFullValue = (
  value: number,
  format: UaiBarChartFormat,
  locale: string,
  currency: string,
): string => {
  if (format === 'percent') {
    const formatted = new Intl.NumberFormat(locale, {
      maximumFractionDigits: Number.isInteger(value) ? 0 : 2,
    }).format(value);
    return `${formatted}%`;
  }
  if (format === 'currency') {
    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        maximumFractionDigits: Number.isInteger(value) ? 0 : 2,
      }).format(value);
    } catch {
      return `${currency} ${value}`;
    }
  }
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: Number.isInteger(value) ? 0 : 2,
  }).format(value);
};

/**
 * Responsive horizontal bar chart for comparing ranked categories against a shared numeric domain.
 * Use inside analytics cards and panels; pair with `seriesLabel` and `format` so axis ticks and keyboard tooltips remain clear;
 * avoid overcrowding with excessive categories when a paginated table is more appropriate.
 *
 * @part chart - The outer chart container.
 * @part bars - The list container holding interactive bar items.
 * @part tooltip - The floating inspection tooltip shown on hover or keyboard focus.
 * @part legend - The bottom series legend container.
 * @part empty - The empty state message when `data` has no items.
 */
@Component({
  tag: 'uai-bar-chart',
  styleUrl: 'uai-bar-chart.scss',
  shadow: true,
})
export class UaiBarChart implements ComponentInterface {
  @Element() el!: HTMLElement;

  @State() activeIndex: number | null = null;

  /** Category items as an array of `{ label, value, formattedValue? }` or a JSON-encoded array string. */
  @Prop() data?: UaiBarChartItem[] | string = [];

  /** Series name displayed in the bottom legend (for example, `ROI`). */
  @Prop() seriesLabel?: string = '';

  /** Controls whether the bottom legend is shown when `seriesLabel` is provided. */
  @Prop() showLegend?: boolean = true;

  /** Value formatting mode applied to horizontal axis ticks and tooltips (`number`, `currency`, or `percent`). */
  @Prop() format?: UaiBarChartFormat = 'number';

  /** ISO 4217 currency code used when `format` is `currency`. */
  @Prop() currency?: string = 'BRL';

  /** Optional explicit upper bound for the horizontal domain; computed automatically when omitted. */
  @Prop() maxValue?: number;

  /** Locale used for number formatting and fallback copy (`pt_BR`, `en_US`, or `es_ES`). */
  @Prop() language?: UaiBarChartLanguage = 'pt_BR';

  /** Optional custom message displayed when `data` is empty. */
  @Prop() emptyText?: string;

  /** Optional test identifier placed on the chart container. */
  @Prop() dataTest?: string = null;

  /** Emitted when a bar is hovered or focused, or `null` when inspection is cleared. */
  @Event() uaiBarHover!: EventEmitter<UaiBarChartItem | null>;

  /** Emitted when a bar is activated by pointer click or keyboard (`Enter` or `Space`). */
  @Event() uaiBarClick!: EventEmitter<UaiBarChartItem>;

  private resolveFormat(): UaiBarChartFormat {
    const match = FORMATS.find((candidate) => candidate === this.format);
    if (match) return match;
    warnLegacyValue(TAG, 'format', this.format, 'number');
    return 'number';
  }

  private resolveLanguage(): UaiBarChartLanguage {
    if ((this.language as string) === 'es_MX') return 'es_ES';
    const match = LANGUAGES.find((candidate) => candidate === this.language);
    if (match) return match;
    warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
    return 'pt_BR';
  }

  private activateBar(index: number, item: UaiBarChartItem): void {
    if (this.activeIndex === index) return;
    this.activeIndex = index;
    this.uaiBarHover.emit(item);
  }

  private clearActiveBar(): void {
    if (this.activeIndex === null) return;
    this.activeIndex = null;
    this.uaiBarHover.emit(null);
  }

  private handleBarBlur = (event: FocusEvent): void => {
    const nextTarget = event.relatedTarget as Node | null;
    if (nextTarget && this.el.shadowRoot?.contains(nextTarget)) {
      return;
    }
    this.clearActiveBar();
  };

  private handleBarKeyDown(event: KeyboardEvent, index: number, items: UaiBarChartItem[]): void {
    if (event.key === 'Escape') {
      if (this.activeIndex !== null) {
        event.preventDefault();
        event.stopPropagation();
        this.clearActiveBar();
      }
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.uaiBarClick.emit(items[index]);
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowDown') nextIndex = Math.min(items.length - 1, index + 1);
      else if (event.key === 'ArrowUp') nextIndex = Math.max(0, index - 1);
      else if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = items.length - 1;

      const bars = Array.from(this.el.shadowRoot?.querySelectorAll<HTMLElement>('.bar-chart__bar-item') ?? []);
      bars[nextIndex]?.focus?.();
      this.activateBar(nextIndex, items[nextIndex]);
    }
  }

  render(): HTMLElement {
    const items = parseBarItems(this.data);
    const format = this.resolveFormat();
    const language = this.resolveLanguage();
    const locale = LOCALE_MAP[language];
    const texts = TEXTS[language];
    const currencyCode = (this.currency || 'BRL').trim() || 'BRL';

    if (items.length === 0) {
      return (
        <Host>
          <div class="bar-chart bar-chart--empty" part="chart" data-test={this.dataTest}>
            <p class="bar-chart__empty" part="empty">
              {(this.emptyText || '').trim() || texts.empty}
            </p>
          </div>
        </Host>
      );
    }

    const rawMax = Math.max(0, ...items.map((item) => item.value));
    const domainMax = computeNiceDomainMax(rawMax, this.maxValue);
    const ticks = Array.from({ length: TICK_COUNT }, (_, idx) => (domainMax * idx) / (TICK_COUNT - 1));
    const legendText = (this.seriesLabel || '').trim();
    const shouldRenderLegend = Boolean(this.showLegend && legendText);

    const formattedValues = items.map(
      (item) => item.formattedValue ?? formatFullValue(item.value, format, locale, currencyCode),
    );
    const percentages = items.map((item) =>
      domainMax > 0 ? Math.min(100, Math.max(0, (item.value / domainMax) * 100)) : 0,
    );

    const activeItem = this.activeIndex !== null ? items[this.activeIndex] : null;
    const activeFormatted = this.activeIndex !== null ? formattedValues[this.activeIndex] : '';
    const activePct = this.activeIndex !== null ? percentages[this.activeIndex] : 0;
    const activeRowTopPct =
      this.activeIndex !== null ? ((this.activeIndex + 0.5) / items.length) * 100 : 0;
    const tooltipLeftPct = Math.min(85, Math.max(15, activePct));

    return (
      <Host>
        <div
          class="bar-chart"
          part="chart"
          role="region"
          aria-label={legendText ? `${texts.chartLabel}: ${legendText}` : texts.chartLabel}
          data-test={this.dataTest}
        >
          <div class="bar-chart__layout">
            <div class="bar-chart__categories" aria-hidden="true">
              {items.map((item, idx) => (
                <div
                  key={`${item.label}-${idx}`}
                  class="bar-chart__category"
                  onMouseEnter={() => this.activateBar(idx, item)}
                  onMouseLeave={() => this.clearActiveBar()}
                  onClick={() => this.uaiBarClick.emit(item)}
                >
                  {item.label}
                </div>
              ))}
            </div>

            <div class="bar-chart__plot">
              <svg
                class="bar-chart__grid"
                viewBox={`0 0 ${GRID_VIEWBOX_WIDTH} ${GRID_VIEWBOX_HEIGHT}`}
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {ticks.map((_, idx) => {
                  const x = (idx / (TICK_COUNT - 1)) * GRID_VIEWBOX_WIDTH;
                  return (
                    <line
                      key={`grid-${idx}`}
                      class="bar-chart__grid-line"
                      x1={x}
                      y1={0}
                      x2={x}
                      y2={GRID_VIEWBOX_HEIGHT}
                      stroke-width="1"
                      stroke-dasharray="4 4"
                      vector-effect="non-scaling-stroke"
                    />
                  );
                })}
              </svg>

              <div class="bar-chart__bars" role="list" part="bars">
                {items.map((item, idx) => {
                  const pct = percentages[idx];
                  const formatted = formattedValues[idx];
                  const isActive = this.activeIndex === idx;
                  const ariaText = legendText
                    ? `${item.label}, ${legendText}: ${formatted}`
                    : `${item.label}: ${formatted}`;

                  return (
                    <div
                      key={`${item.label}-${idx}`}
                      class={{
                        'bar-chart__bar-item': true,
                        'bar-chart__bar-item--active': isActive,
                      }}
                      role="listitem"
                      tabIndex={0}
                      aria-label={ariaText}
                      onMouseEnter={() => this.activateBar(idx, item)}
                      onMouseLeave={() => this.clearActiveBar()}
                      onFocus={() => this.activateBar(idx, item)}
                      onBlur={this.handleBarBlur}
                      onClick={() => this.uaiBarClick.emit(item)}
                      onKeyDown={(event) => this.handleBarKeyDown(event, idx, items)}
                    >
                      <div class="bar-chart__track">
                        <div class="bar-chart__fill" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {activeItem && (
                <div
                  class="bar-chart__tooltip"
                  part="tooltip"
                  role="status"
                  aria-live="polite"
                  style={{
                    left: `${tooltipLeftPct}%`,
                    top: `${activeRowTopPct}%`,
                  }}
                >
                  <span class="bar-chart__tooltip-label">{activeItem.label}</span>
                  <div class="bar-chart__tooltip-row">
                    <span class="bar-chart__swatch" aria-hidden="true" />
                    {legendText && <span class="bar-chart__tooltip-series">{legendText}</span>}
                    <span class="bar-chart__tooltip-value">{activeFormatted}</span>
                  </div>
                </div>
              )}
            </div>

            <div class="bar-chart__corner" aria-hidden="true" />

            <div class="bar-chart__x-axis" aria-hidden="true">
              {ticks.map((tick, idx) => (
                <span
                  key={`tick-${idx}`}
                  class={{
                    'bar-chart__tick': true,
                    'bar-chart__tick--start': idx === 0,
                    'bar-chart__tick--end': idx === ticks.length - 1,
                  }}
                  style={{ left: `${(idx / (ticks.length - 1)) * 100}%` }}
                >
                  {formatTickValue(tick, format, locale, currencyCode)}
                </span>
              ))}
            </div>
          </div>

          {shouldRenderLegend && (
            <div class="bar-chart__legend" part="legend">
              <span class="bar-chart__swatch" aria-hidden="true" />
              <span class="bar-chart__legend-label">{legendText}</span>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
