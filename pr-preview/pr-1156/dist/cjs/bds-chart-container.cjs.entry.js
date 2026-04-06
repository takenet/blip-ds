'use strict';

var index = require('./index-t1DDWEYz.js');

const chartContainerCss = ":host{display:block;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}";

const ChartContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'bb90810b2f222322e2bd56e09d8be754176fb5ca' }, index.h("slot", { key: '0ac289e948a70f0cdec975ee473e974aa1e50050' })));
    }
};
ChartContainer.style = chartContainerCss;

exports.bds_chart_container = ChartContainer;
//# sourceMappingURL=bds-chart-container.entry.cjs.js.map

//# sourceMappingURL=bds-chart-container.cjs.entry.js.map