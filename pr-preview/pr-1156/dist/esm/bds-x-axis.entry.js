import { r as registerInstance, h, H as Host } from './index-BALoTlPi.js';

const ChartXAxis = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Key from data object to use for X-axis labels
         */
        this.dataKey = 'label';
        /**
         * Show tick lines
         */
        this.tickLine = true;
        /**
         * Color of tick lines and axis line
         */
        this.lineColor = 'var(--color-border-1)';
        /**
         * Color of axis labels
         */
        this.labelColor = 'var(--color-content-default)';
        /**
         * Margin between tick and label (in pixels)
         */
        this.tickMargin = 10;
        /**
         * Show axis line
         */
        this.axisLine = true;
        /**
         * Number of ticks to display on the Y-axis (default: 5)
         * Note: This applies only to numeric axes with calculated scales
         */
        this.tickCount = 5;
        /**
         * Show X-axis labels
         */
        this.show = true;
    }
    render() {
        return (h(Host, { key: 'c8bfa39640de514a1b7fcbcb51f679e1deb0dd63', "data-x-axis": true, "data-data-key": this.dataKey, "data-tick-line": this.tickLine, "data-line-color": this.lineColor, "data-label-color": this.labelColor, "data-tick-margin": this.tickMargin, "data-axis-line": this.axisLine, "data-tick-formatter": this.tickFormatter, "data-tick-count": this.tickCount, style: { display: 'none' } }));
    }
};

export { ChartXAxis as bds_x_axis };
//# sourceMappingURL=bds-x-axis.entry.js.map

//# sourceMappingURL=bds-x-axis.entry.js.map