'use strict';

var index = require('./index-t1DDWEYz.js');

const ChartYAxis = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Key from data object to use for Y-axis scale
         */
        this.dataKey = 'value';
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
         * Increase to show more ticks (e.g., 10 for 20, 25, 30, 35, 40...)
         */
        this.tickCount = 5;
        /**
         * Show Y-axis labels
         */
        this.show = true;
    }
    render() {
        return (index.h(index.Host, { key: 'fd16befc52a9c304ff3678e3987ebaff318ab2d8', "data-y-axis": true, "data-data-key": this.dataKey, "data-tick-line": this.tickLine, "data-line-color": this.lineColor, "data-label-color": this.labelColor, "data-tick-margin": this.tickMargin, "data-axis-line": this.axisLine, "data-tick-formatter": this.tickFormatter, "data-tick-count": this.tickCount, "data-show": this.show, style: { display: 'none' } }));
    }
};

exports.bds_y_axis = ChartYAxis;
//# sourceMappingURL=bds-y-axis.entry.cjs.js.map

//# sourceMappingURL=bds-y-axis.cjs.entry.js.map