'use strict';

var index = require('./index-t1DDWEYz.js');

const ChartPieConfig = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '5c897dc10930fc0aee1b561537c108fc87080655', "data-pie-config": true, "data-inner-radius": this.innerRadius, "data-pad-angle": this.padAngle, "data-corner-radius": this.cornerRadius, style: { display: 'none' } }));
    }
};

exports.bds_pie_config = ChartPieConfig;
//# sourceMappingURL=bds-pie-config.entry.cjs.js.map

//# sourceMappingURL=bds-pie-config.cjs.entry.js.map