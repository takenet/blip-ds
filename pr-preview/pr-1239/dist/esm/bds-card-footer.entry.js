import { r as registerInstance, h } from './index-DUwG7Zwx.js';

const cardFooterCss = () => `:host{width:100%}`;

const CardFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'flex-end';
    }
    render() {
        return (h("bds-grid", { key: '2da58e4e3268c34f9011fd5c5456581ce2702c85', xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, h("slot", { key: 'b88611e9875c7fc44966c1773107b65a9d141259' })));
    }
};
CardFooter.style = cardFooterCss();

export { CardFooter as bds_card_footer };
