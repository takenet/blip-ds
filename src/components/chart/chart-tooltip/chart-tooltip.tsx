import { Component, Host, h, Prop, State, Method, Element } from '@stencil/core';

interface TooltipEntry {
  color: string;
  name: string;
  value: string | number;
}

@Component({
  tag: 'bds-chart-tooltip',
  styleUrl: 'chart-tooltip.scss',
})
export class ChartTooltip {
  @Element() el: HTMLElement;

  @Prop() labelKey?: string;
  @Prop() nameKey?: string;
  @Prop() indicator: 'dot' | 'line' | 'dashed' = 'dot';
  @Prop() hideLabel: boolean = false;
  @Prop() hideIndicator: boolean = false;

  @State() visible: boolean = false;
  @State() x: number = 0;
  @State() y: number = 0;
  @State() label: string = '';
  @State() content: string = '';
  @State() entries: TooltipEntry[] = [];

  private portalElement: HTMLDivElement;
  private portalWrapper: HTMLDivElement;

  componentDidLoad() {
    this.initializePortal();
  }

  componentDidUpdate() {
    this.updatePortalContent();
  }

  disconnectedCallback() {
    if (this.portalElement && this.portalElement.parentNode) {
      this.portalElement.parentNode.removeChild(this.portalElement);
    }
  }

  private initializePortal() {
    if (!document.getElementById('bds-chart-tooltip-portal')) {
      this.portalElement = document.createElement('div');
      this.portalElement.id = 'bds-chart-tooltip-portal';
      document.body.appendChild(this.portalElement);
    } else {
      this.portalElement = document.getElementById(
        'bds-chart-tooltip-portal'
      ) as HTMLDivElement;
    }

    this.portalWrapper = document.createElement('div');
    this.portalWrapper.className = 'bds-chart-tooltip-wrapper';
    this.portalElement.appendChild(this.portalWrapper);

    this.updatePortalContent();
  }

  private updatePortalContent() {
    if (!this.portalWrapper) return;

    let innerHtml: string;

    if (this.entries.length > 0) {
      const labelHtml = this.label ? `<span class="label">${this.label}</span>` : '';
      const entriesHtml = this.entries.map(entry => {
        const indicatorStyle = `background:${entry.color};`;
        const indicatorHtml = this.hideIndicator
          ? ''
          : `<span class="indicator indicator-${this.indicator}" style="${indicatorStyle}"></span>`;
        return `<div class="entry">${indicatorHtml}<span class="entry-name">${entry.name}</span><span class="entry-value">${entry.value}</span></div>`;
      }).join('');
      innerHtml = `${labelHtml}<div class="entries">${entriesHtml}</div>`;
    } else {
      // Legacy single-content fallback
      const parts: string[] = [];
      if (this.label) parts.push(`<span class="label">${this.label}</span>`);
      if (!this.hideIndicator) parts.push(`<span class="indicator indicator-${this.indicator}"></span>`);
      if (this.content) parts.push(`<span class="content">${this.content}</span>`);
      innerHtml = parts.join('');
    }

    this.portalWrapper.style.left = `${this.x}px`;
    this.portalWrapper.style.top = `${this.y}px`;
    this.portalWrapper.style.opacity = this.visible ? '1' : '0';
    this.portalWrapper.style.pointerEvents = 'none';

    const tooltipDiv = this.portalWrapper.querySelector('.chart-tooltip');
    if (tooltipDiv) {
      tooltipDiv.innerHTML = innerHtml;
    } else {
      this.portalWrapper.innerHTML = `<div class="chart-tooltip">${innerHtml}</div>`;
    }
  }

  @Method()
  async setTooltipState(state: {
    visible?: boolean;
    x?: number;
    y?: number;
    label?: string;
    content?: string;
    entries?: TooltipEntry[];
  }) {
    if (state.visible !== undefined) this.visible = state.visible;
    if (state.x !== undefined) this.x = state.x;
    if (state.y !== undefined) this.y = state.y;
    if (state.label !== undefined) this.label = String(state.label);
    if (state.content !== undefined) this.content = String(state.content);
    if (state.entries !== undefined) this.entries = state.entries;
  }

  render() {
    return <Host style={{ display: 'none' }}></Host>;
  }
}

