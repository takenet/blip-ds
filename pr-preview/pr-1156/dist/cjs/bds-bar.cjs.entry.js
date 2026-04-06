'use strict';

var index = require('./index-t1DDWEYz.js');

const ChartBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Color of the bar (hex, rgb, or CSS variable)
         */
        this.color = '#0d6efd';
        /**
         * Border radius of bar corners (in pixels)
         */
        this.radius = 4;
    }
    render() {
        return (index.h(index.Host, { key: '8ae07d370b82ec95ffeb3c300d4935e259b09a66', "data-bar": true, "data-data-key": this.dataKey, "data-color": this.color, "data-radius": this.radius, "data-stack-id": this.stackId, style: { display: 'none' } }));
    }
};

exports.bds_bar = ChartBar;
//# sourceMappingURL=bds-bar.entry.cjs.js.map

//# sourceMappingURL=bds-bar.cjs.entry.js.map