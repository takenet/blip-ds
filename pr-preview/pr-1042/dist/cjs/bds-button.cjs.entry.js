'use strict';

var index = require('./index-ljSeaagN.js');

const buttonCss = ":host{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host(.block){width:100%;display:-ms-flexbox;display:flex}:host(.group){width:auto}:host:focus-visible{outline:none}.button{border:none;margin:0;padding:0;width:auto;overflow:visible;outline:none;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;border-radius:8px;border-style:solid;border-left-width:1px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;gap:4px;padding:0 16px}.button::-moz-focus-inner{border:0;padding:0}.button__size--short{height:32px}.button__size--standard{height:40px}.button__size--medium{height:40px}.button__size--large{height:56px}.button__only-icon--medium{padding:8px;gap:0}.button__only-icon--large{padding:8px 16px;gap:0}.button__only-icon--short{padding:0px;width:32px;gap:0}.button--block,.button--group{width:100%}.button bds-loading-spinner{max-height:100%;position:absolute}.button *{pointer-events:none}.button__color--primary.button__variant--solid,.button__color--primary.button__variant--primary{background-color:var(--color-surface-primary, rgb(30, 107, 241));border-color:transparent}.button__color--primary.button__variant--solid .typo_buttom,.button__color--primary.button__variant--solid .icon_buttom,.button__color--primary.button__variant--primary .typo_buttom,.button__color--primary.button__variant--primary .icon_buttom{color:var(--color-content-bright, rgb(255, 255, 255));z-index:1}.button__color--primary.button__variant--solid--disabled,.button__color--primary.button__variant--primary--disabled{opacity:50%;pointer-events:none}.button__color--primary.button__variant--solid:hover::before,.button__color--primary.button__variant--primary:hover::before{background-color:var(--color-surface-primary, rgb(30, 107, 241));-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;-webkit-filter:brightness(0.88);filter:brightness(0.88)}.button__color--primary.button__variant--solid:active::before,.button__color--primary.button__variant--solid--active::before,.button__color--primary.button__variant--primary:active::before,.button__color--primary.button__variant--primary--active::before{-webkit-filter:brightness(0.76);filter:brightness(0.76)}.button__color--primary.button__variant--outline,.button__color--primary.button__variant--tertiary{background-color:transparent;border-color:var(--color-primary, rgb(30, 107, 241))}.button__color--primary.button__variant--outline .typo_buttom,.button__color--primary.button__variant--outline .icon_buttom,.button__color--primary.button__variant--tertiary .typo_buttom,.button__color--primary.button__variant--tertiary .icon_buttom{color:var(--color-primary, rgb(30, 107, 241));z-index:1}.button__color--primary.button__variant--outline--disabled,.button__color--primary.button__variant--tertiary--disabled{opacity:50%;pointer-events:none}.button__color--primary.button__variant--outline:hover::before,.button__color--primary.button__variant--tertiary:hover::before{background-color:var(--color-surface-primary, rgb(30, 107, 241));-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;opacity:0.08}.button__color--primary.button__variant--outline:active::before,.button__color--primary.button__variant--outline--active::before,.button__color--primary.button__variant--tertiary:active::before,.button__color--primary.button__variant--tertiary--active::before{opacity:0.24}.button__color--primary.button__variant--text,.button__color--primary.button__variant--secondary{background-color:transparent;border-color:transparent}.button__color--primary.button__variant--text .typo_buttom,.button__color--primary.button__variant--text .icon_buttom,.button__color--primary.button__variant--secondary .typo_buttom,.button__color--primary.button__variant--secondary .icon_buttom{color:var(--color-primary, rgb(30, 107, 241));z-index:1}.button__color--primary.button__variant--text--disabled,.button__color--primary.button__variant--secondary--disabled{opacity:50%;pointer-events:none}.button__color--primary.button__variant--text:hover::before,.button__color--primary.button__variant--secondary:hover::before{background-color:var(--color-primary, rgb(30, 107, 241));-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;opacity:0.08}.button__color--primary.button__variant--text:active::before,.button__color--primary.button__variant--text--active::before,.button__color--primary.button__variant--secondary:active::before,.button__color--primary.button__variant--secondary--active::before{opacity:0.24}.button__color--content.button__variant--solid,.button__color--content.button__variant--primary{background-color:var(--color-content-default, rgb(40, 40, 40));border-color:transparent}.button__color--content.button__variant--solid .typo_buttom,.button__color--content.button__variant--solid .icon_buttom,.button__color--content.button__variant--primary .typo_buttom,.button__color--content.button__variant--primary .icon_buttom{color:var(--color-surface-0, rgb(255, 255, 255));z-index:1}.button__color--content.button__variant--solid--disabled,.button__color--content.button__variant--primary--disabled{opacity:50%;pointer-events:none}.button__color--content.button__variant--solid:hover::before,.button__color--content.button__variant--primary:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;-webkit-filter:brightness(0.88);filter:brightness(0.88)}.button__color--content.button__variant--solid:active::before,.button__color--content.button__variant--solid--active::before,.button__color--content.button__variant--primary:active::before,.button__color--content.button__variant--primary--active::before{-webkit-filter:brightness(0.76);filter:brightness(0.76)}.button__color--content.button__variant--outline,.button__color--content.button__variant--tertiary{background-color:transparent;border-color:var(--color-content-default, rgb(40, 40, 40))}.button__color--content.button__variant--outline .typo_buttom,.button__color--content.button__variant--outline .icon_buttom,.button__color--content.button__variant--tertiary .typo_buttom,.button__color--content.button__variant--tertiary .icon_buttom{color:var(--color-content-default, rgb(40, 40, 40));z-index:1}.button__color--content.button__variant--outline--disabled,.button__color--content.button__variant--tertiary--disabled{opacity:50%;pointer-events:none}.button__color--content.button__variant--outline:hover::before,.button__color--content.button__variant--tertiary:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;opacity:0.08}.button__color--content.button__variant--outline:active::before,.button__color--content.button__variant--outline--active::before,.button__color--content.button__variant--tertiary:active::before,.button__color--content.button__variant--tertiary--active::before{opacity:0.24}.button__color--content.button__variant--text,.button__color--content.button__variant--secondary{background-color:transparent;border-color:transparent}.button__color--content.button__variant--text .typo_buttom,.button__color--content.button__variant--text .icon_buttom,.button__color--content.button__variant--secondary .typo_buttom,.button__color--content.button__variant--secondary .icon_buttom{color:var(--color-content-default, rgb(40, 40, 40));z-index:1}.button__color--content.button__variant--text--disabled,.button__color--content.button__variant--secondary--disabled{opacity:50%;pointer-events:none}.button__color--content.button__variant--text:hover::before,.button__color--content.button__variant--secondary:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;opacity:0.08}.button__color--content.button__variant--text:active::before,.button__color--content.button__variant--text--active::before,.button__color--content.button__variant--secondary:active::before,.button__color--content.button__variant--secondary--active::before{opacity:0.24}.button__color--negative.button__variant--solid,.button__color--negative.button__variant--primary,.button__color--negative.button__variant--delete{background-color:var(--color-surface-negative, rgb(138, 0, 0));border-color:transparent}.button__color--negative.button__variant--solid .typo_buttom,.button__color--negative.button__variant--solid .icon_buttom,.button__color--negative.button__variant--primary .typo_buttom,.button__color--negative.button__variant--primary .icon_buttom,.button__color--negative.button__variant--delete .typo_buttom,.button__color--negative.button__variant--delete .icon_buttom{color:var(--color-content-bright, rgb(255, 255, 255));z-index:1}.button__color--negative.button__variant--solid--disabled,.button__color--negative.button__variant--primary--disabled,.button__color--negative.button__variant--delete--disabled{opacity:50%;pointer-events:none}.button__color--negative.button__variant--solid:hover::before,.button__color--negative.button__variant--primary:hover::before,.button__color--negative.button__variant--delete:hover::before{background-color:var(--color-surface-negative, rgb(138, 0, 0));-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;-webkit-filter:brightness(0.88);filter:brightness(0.88)}.button__color--negative.button__variant--solid:active::before,.button__color--negative.button__variant--solid--active::before,.button__color--negative.button__variant--primary:active::before,.button__color--negative.button__variant--primary--active::before,.button__color--negative.button__variant--delete:active::before,.button__color--negative.button__variant--delete--active::before{-webkit-filter:brightness(0.76);filter:brightness(0.76)}.button__color--negative.button__variant--outline,.button__color--negative.button__variant--tertiary,.button__color--negative.button__variant--delete{background-color:transparent;border-color:var(--color-negative, #e60f0f)}.button__color--negative.button__variant--outline .typo_buttom,.button__color--negative.button__variant--outline .icon_buttom,.button__color--negative.button__variant--tertiary .typo_buttom,.button__color--negative.button__variant--tertiary .icon_buttom,.button__color--negative.button__variant--delete .typo_buttom,.button__color--negative.button__variant--delete .icon_buttom{color:var(--color-negative, #e60f0f);z-index:1}.button__color--negative.button__variant--outline--disabled,.button__color--negative.button__variant--tertiary--disabled,.button__color--negative.button__variant--delete--disabled{opacity:50%;pointer-events:none}.button__color--negative.button__variant--outline:hover::before,.button__color--negative.button__variant--tertiary:hover::before,.button__color--negative.button__variant--delete:hover::before{background-color:var(--color-surface-negative, rgb(138, 0, 0));-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;opacity:0.08}.button__color--negative.button__variant--outline:active::before,.button__color--negative.button__variant--outline--active::before,.button__color--negative.button__variant--tertiary:active::before,.button__color--negative.button__variant--tertiary--active::before,.button__color--negative.button__variant--delete:active::before,.button__color--negative.button__variant--delete--active::before{opacity:0.24}.button__color--negative.button__variant--text,.button__color--negative.button__variant--secondary,.button__color--negative.button__variant--delete{background-color:transparent;border-color:transparent}.button__color--negative.button__variant--text .typo_buttom,.button__color--negative.button__variant--text .icon_buttom,.button__color--negative.button__variant--secondary .typo_buttom,.button__color--negative.button__variant--secondary .icon_buttom,.button__color--negative.button__variant--delete .typo_buttom,.button__color--negative.button__variant--delete .icon_buttom{color:var(--color-negative, #e60f0f);z-index:1}.button__color--negative.button__variant--text--disabled,.button__color--negative.button__variant--secondary--disabled,.button__color--negative.button__variant--delete--disabled{opacity:50%;pointer-events:none}.button__color--negative.button__variant--text:hover::before,.button__color--negative.button__variant--secondary:hover::before,.button__color--negative.button__variant--delete:hover::before{background-color:var(--color-negative, #e60f0f);-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;opacity:0.08}.button__color--negative.button__variant--text:active::before,.button__color--negative.button__variant--text--active::before,.button__color--negative.button__variant--secondary:active::before,.button__color--negative.button__variant--secondary--active::before,.button__color--negative.button__variant--delete:active::before,.button__color--negative.button__variant--delete--active::before{opacity:0.24}.button__color--positive.button__variant--solid,.button__color--positive.button__variant--primary{background-color:var(--color-surface-positive, rgb(1, 114, 62));border-color:transparent}.button__color--positive.button__variant--solid .typo_buttom,.button__color--positive.button__variant--solid .icon_buttom,.button__color--positive.button__variant--primary .typo_buttom,.button__color--positive.button__variant--primary .icon_buttom{color:var(--color-content-bright, rgb(255, 255, 255));z-index:1}.button__color--positive.button__variant--solid--disabled,.button__color--positive.button__variant--primary--disabled{opacity:50%;pointer-events:none}.button__color--positive.button__variant--solid:hover::before,.button__color--positive.button__variant--primary:hover::before{background-color:var(--color-surface-positive, rgb(1, 114, 62));-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;-webkit-filter:brightness(0.88);filter:brightness(0.88)}.button__color--positive.button__variant--solid:active::before,.button__color--positive.button__variant--solid--active::before,.button__color--positive.button__variant--primary:active::before,.button__color--positive.button__variant--primary--active::before{-webkit-filter:brightness(0.76);filter:brightness(0.76)}.button__color--positive.button__variant--outline,.button__color--positive.button__variant--tertiary{background-color:transparent;border-color:var(--color-positive, #10603b)}.button__color--positive.button__variant--outline .typo_buttom,.button__color--positive.button__variant--outline .icon_buttom,.button__color--positive.button__variant--tertiary .typo_buttom,.button__color--positive.button__variant--tertiary .icon_buttom{color:var(--color-positive, #10603b);z-index:1}.button__color--positive.button__variant--outline--disabled,.button__color--positive.button__variant--tertiary--disabled{opacity:50%;pointer-events:none}.button__color--positive.button__variant--outline:hover::before,.button__color--positive.button__variant--tertiary:hover::before{background-color:var(--color-surface-positive, rgb(1, 114, 62));-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;opacity:0.08}.button__color--positive.button__variant--outline:active::before,.button__color--positive.button__variant--outline--active::before,.button__color--positive.button__variant--tertiary:active::before,.button__color--positive.button__variant--tertiary--active::before{opacity:0.24}.button__color--positive.button__variant--text,.button__color--positive.button__variant--secondary{background-color:transparent;border-color:transparent}.button__color--positive.button__variant--text .typo_buttom,.button__color--positive.button__variant--text .icon_buttom,.button__color--positive.button__variant--secondary .typo_buttom,.button__color--positive.button__variant--secondary .icon_buttom{color:var(--color-positive, #10603b);z-index:1}.button__color--positive.button__variant--text--disabled,.button__color--positive.button__variant--secondary--disabled{opacity:50%;pointer-events:none}.button__color--positive.button__variant--text:hover::before,.button__color--positive.button__variant--secondary:hover::before{background-color:var(--color-positive, #10603b);-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;opacity:0.08}.button__color--positive.button__variant--text:active::before,.button__color--positive.button__variant--text--active::before,.button__color--positive.button__variant--secondary:active::before,.button__color--positive.button__variant--secondary--active::before{opacity:0.24}.button.button__variant--secondary{background-color:transparent;border-color:transparent}.button.button__variant--secondary .typo_buttom,.button.button__variant--secondary .icon_buttom{color:var(--color-content-default, rgb(40, 40, 40));z-index:1}.button.button__variant--secondary--disabled{opacity:50%;pointer-events:none}.button.button__variant--secondary:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;opacity:0.08}.button.button__variant--secondary:active::before,.button.button__variant--secondary--active::before{opacity:0.24}.button.button__variant--tertiary{background-color:transparent;border-color:var(--color-content-default, rgb(40, 40, 40))}.button.button__variant--tertiary .typo_buttom,.button.button__variant--tertiary .icon_buttom{color:var(--color-content-default, rgb(40, 40, 40));z-index:1}.button.button__variant--tertiary--disabled{opacity:50%;pointer-events:none}.button.button__variant--tertiary:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;opacity:0.08}.button.button__variant--tertiary:active::before,.button.button__variant--tertiary--active::before{opacity:0.24}.button__group{width:100%}.button__position--row--first{border-top-left-radius:10px;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:0;border-left-width:1px;border-top-width:1px;border-bottom-width:1px;border-right-width:1px}.button__position--row--middle{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-width:1px;border-bottom-width:1px;border-left-width:0;border-right-width:1px}.button__position--row--last{border-top-left-radius:0;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:10px;border-right-width:1px;border-top-width:1px;border-bottom-width:1px;border-left-width:0px}.button__position--column--first{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:0;border-left-width:1px;border-top-width:1px;border-bottom-width:1px;border-right-width:1px}.button__position--column--middle{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-width:0px;border-bottom-width:1px;border-left-width:1px;border-right-width:1px}.button__position--column--last{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-right-width:1px;border-top-width:0px;border-bottom-width:1px;border-left-width:1px}.button__arrow{color:inherit;background-color:inherit;height:24px;margin-left:2px}.button__content{height:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;z-index:1}.button::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;z-index:0;border-radius:8px}.button__position--row--first::before{border-top-left-radius:10px;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:0}.button__position--row--middle::before{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.button__position--row--last::before{border-top-left-radius:0;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:10px}.button__position--column--first::before{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:0}.button__position--column--middle::before{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.button__position--column--last::before{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.button .hide{cursor:not-allowed;opacity:0}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}.disabled{pointer-events:none}";

const Button = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsClick = index.createEvent(this, "bdsClick");
        this.group = false;
        /**
         * 	If true, the base button will be disabled.
         */
        this.block = false;
        /**
         * 	If true, the base button will be disabled.
         */
        this.disabled = false;
        this.color = 'primary';
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'tall', 'standard', 'short';
         */
        this.size = 'medium';
        /**
         * Variant. Entered as one of the variant. Can be one of:
         * 'primary', 'secondary', 'ghost', 'dashed';
         */
        this.variant = 'solid';
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.icon = null;
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.iconLeft = null;
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.iconRight = null;
        /**
         * The arrow button
         */
        this.arrow = false;
        /**
         * The type of the button. Can be one of:
         * 'button', 'submit', 'reset';
         */
        this.type = 'button';
        /**
         * The theme of the icon. Can be one of:
         * 'outline', 'solid';
         */
        this.iconTheme = 'outline';
        /**
         * The type of the icon. Can be one of:
         * 'icon', 'logo', 'emoji';
         */
        this.typeIcon = 'icon';
        /**
         * 	If true, shows the loading spinner
         */
        this.bdsLoading = false;
        /**
         * 	If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'
         */
        this.bdsLoadingVariant = 'primary';
        /**
         * 	If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'
         */
        this.bdsLoadingColor = 'main';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.handleClick = (ev) => {
            if (!this.disabled) {
                if (ev.key == 'Enter') {
                    this.bdsClick.emit(ev);
                }
                if (ev.type == 'click') {
                    this.bdsClick.emit(ev);
                }
                const form = this.el.closest('form');
                if (form) {
                    ev.preventDefault();
                    const fakeButton = document.createElement('button');
                    fakeButton.type = this.type;
                    fakeButton.style.display = 'none';
                    form.appendChild(fakeButton);
                    fakeButton.click();
                    fakeButton.remove();
                }
            }
        };
    }
    async isActive(value) {
        this.active = value;
    }
    async setPosition(position) {
        this.position = position;
        this.position ? (this.group = true) : false;
    }
    async setDirection(direction) {
        this.direction = direction;
    }
    async setSize(size) {
        this.size = size;
    }
    async setColor(color) {
        this.color = color;
    }
    async setVariant(variant) {
        this.variant = variant;
    }
    componentDidRender() {
        this.logSlotText();
        this.buttonLegacy();
    }
    buttonLegacy() {
        this.variant === 'facebook' ? this.setVariant('outline') : this.setVariant(this.variant);
        this.size === 'tall'
            ? this.setSize('large')
            : this.size === 'standard'
                ? this.setSize('medium')
                : this.setSize(this.size);
    }
    logSlotText() {
        const slot = this.el.shadowRoot.querySelector('slot');
        const onlyIconElement = this.el.shadowRoot.querySelector('button');
        if (slot) {
            const assignedNodes = slot.assignedNodes();
            let slotText = '';
            assignedNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    slotText += node.textContent;
                }
            });
            if (slotText === '' && this.size === 'medium') {
                onlyIconElement.classList.add('button__only-icon--medium');
            }
            if (slotText === '' && this.size === 'large') {
                onlyIconElement.classList.add('button__only-icon--large');
            }
            if (slotText === '' && this.size === 'short') {
                onlyIconElement.classList.add('button__only-icon--short');
            }
        }
    }
    renderLoadingSpinner() {
        if (this.variant === 'solid') {
            if (['primary', 'positive', 'negative'].includes(this.color)) {
                this.loadingColor = 'light';
            }
            else if (this.color === 'content') {
                this.loadingColor = 'content';
            }
        }
        else if (this.variant === 'outline' || this.variant === 'text') {
            this.loadingColor = this.color === 'positive' ? 'positive' : this.color === 'negative' ? 'negative' : 'main';
        }
        return index.h("bds-loading-spinner", { size: "extra-small", color: this.loadingColor });
    }
    render() {
        return (index.h(index.Host, { key: 'e9b4730d290ad95c63c29fff94c4abc8d66c5a85', class: { host: true, block: this.block, group: this.group } }, index.h("div", { key: '6e739d614a4fc948abfb538186c9fdf7629f0f74', tabindex: "0", onKeyDown: (ev) => this.handleClick(ev), class: "focus" }), index.h("button", { key: '32fcfa2824f056e2264477b7c50ef6cd965b98e2', onClick: (ev) => this.handleClick(ev), disabled: this.disabled, tabindex: "-1", "aria-disabled": this.disabled ? 'true' : 'false', "aria-live": "assertive", type: this.type, class: {
                button: true,
                'button--block': this.block,
                'button--group': this.group,
                [`button__position--${this.direction}--${this.position}`]: true,
                'button--active': this.active,
                [`button__variant--${this.variant === 'delete' ? 'solid' : this.variant}`]: true,
                [`button__${this.variant === 'delete' ? 'solid' : this.variant}`]: true,
                [`button__color--${this.variant === 'delete' ? 'negative' : this.color}`]: true,
                [`button__variant--${this.variant}--disabled`]: this.disabled,
                [`button__size--${this.size}`]: true,
            }, part: "button", "data-test": this.dataTest }, this.bdsLoading ? this.renderLoadingSpinner() : '', this.iconLeft || this.icon ? (index.h("bds-icon", { class: { icon_buttom: true, hide: this.bdsLoading }, name: this.icon ? this.icon : this.iconLeft, theme: this.iconTheme, type: this.typeIcon, color: "inherit", size: 'medium' })) : (''), index.h("bds-typo", { key: '189c95fa690eb50b419f582d861e92fc838f3054', class: { typo_buttom: true, button__content: true, hide: this.bdsLoading }, variant: "fs-14", lineHeight: "simple", bold: "bold" }, index.h("slot", { key: '5f09722a895c50a984b31cd7f952faec49e1621d' })), this.iconRight || this.arrow ? (index.h("bds-icon", { class: { icon_buttom: true, hide: this.bdsLoading }, name: this.arrow ? 'arrow-right' : this.iconRight, color: "inherit", theme: this.iconTheme, type: this.typeIcon })) : (''))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "bdsLoading": ["renderLoadingSpinner"]
    }; }
};
Button.style = buttonCss;

exports.bds_button = Button;
//# sourceMappingURL=bds-button.entry.cjs.js.map

//# sourceMappingURL=bds-button.cjs.entry.js.map