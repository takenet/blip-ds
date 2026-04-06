import { r as registerInstance, h, H as Host } from './index-BALoTlPi.js';

const ChartLineItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Color of the line (hex, rgb, or CSS variable)
         */
        this.color = '#0d6efd';
        /**
         * Width of the line stroke (in pixels)
         */
        this.strokeWidth = 2;
        /**
         * Type of interpolation: linear or monotone (smooth)
         */
        this.curve = 'monotone';
        /**
         * Radius of data point circles (in pixels)
         */
        this.radius = 4;
        /**
         * Whether to show dots on data points
         */
        this.dot = true;
    }
    render() {
        return (h(Host, { key: '1d4717f65019f54267e390174fd06790e7bf6fc4', "data-line": true, "data-data-key": this.dataKey, "data-color": this.color, "data-stroke-width": this.strokeWidth, "data-curve": this.curve, "data-radius": this.radius, "data-dot": String(this.dot), style: { display: 'none' } }));
    }
};

export { ChartLineItem as bds_line };
//# sourceMappingURL=bds-line.entry.js.map

//# sourceMappingURL=bds-line.entry.js.map