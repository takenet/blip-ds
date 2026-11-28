import { r as registerInstance, h, H as Host, g as getElement } from './index-B3G05Lxx.js';

const uaiListItemContentCss = () => `.sc-uai-list-item-content-h{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}`;

const UaiListItemContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Flex direction of the content. Use column for stacked text; pair with gap. Avoid reverse directions for reading order. */
        this.direction = 'column';
        /** Main-axis alignment. Use flex-start by default; pair with direction. Avoid space-around in narrow rows. */
        this.justifyContent = 'flex-start';
        /** Wrapping of the content. Use wrap by default; pair with gap. Avoid nowrap with long content. */
        this.flexWrap = 'wrap';
        /** Cross-axis alignment. Use flex-start by default; pair with direction. Avoid stretch with icons. */
        this.alignItems = 'flex-start';
    }
    render() {
        return (h(Host, { key: '4c97397e3809bf317ee925f8a81ad4e21e476ced', class: { list_item_content: true } }, h("uai-grid", { key: '61d6c6e82285d0ce9d73ef294fe096546f32f35b', direction: this.direction, flexWrap: this.flexWrap, justifyContent: this.justifyContent, alignItems: this.alignItems, gap: this.gap }, h("slot", { key: 'a9cd0dc5d5271854c6be3f946fff645b9b047561' }))));
    }
    get hostElement() { return getElement(this); }
};
UaiListItemContent.style = uaiListItemContentCss();

export { UaiListItemContent as uai_list_item_content };
