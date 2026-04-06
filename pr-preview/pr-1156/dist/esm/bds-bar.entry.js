import { r as registerInstance, h, H as Host } from './index-BALoTlPi.js';

const ChartBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '8ae07d370b82ec95ffeb3c300d4935e259b09a66', "data-bar": true, "data-data-key": this.dataKey, "data-color": this.color, "data-radius": this.radius, "data-stack-id": this.stackId, style: { display: 'none' } }));
    }
};

export { ChartBar as bds_bar };
//# sourceMappingURL=bds-bar.entry.js.map

//# sourceMappingURL=bds-bar.entry.js.map