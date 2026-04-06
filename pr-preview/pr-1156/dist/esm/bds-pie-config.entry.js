import { r as registerInstance, h, H as Host } from './index-BALoTlPi.js';

const ChartPieConfig = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Inner radius as a percentage of the outer radius (0 = pie, 60 = donut).
         * Default: 60
         */
        this.innerRadius = 60;
        /**
         * Gap between slices in radians.
         * Default: 0.02
         */
        this.padAngle = 0.02;
        /**
         * Corner radius of each slice end-cap in pixels (0 = sharp corners).
         * Default: 3
         */
        this.cornerRadius = 3;
    }
    render() {
        return (h(Host, { key: '5c897dc10930fc0aee1b561537c108fc87080655', "data-pie-config": true, "data-inner-radius": this.innerRadius, "data-pad-angle": this.padAngle, "data-corner-radius": this.cornerRadius, style: { display: 'none' } }));
    }
};

export { ChartPieConfig as bds_pie_config };
//# sourceMappingURL=bds-pie-config.entry.js.map

//# sourceMappingURL=bds-pie-config.entry.js.map