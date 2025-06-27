import { r as registerInstance, c as createEvent, h, a as getElement } from './index-C3J6Z5OX.js';
import { a as getItems, b as getHighestItem, c as gapChanged } from './position-element-DJObw-Em.js';

const carouselCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;position:relative}.carousel{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:1920px;position:relative}.carousel_slide{width:100%;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 48px}.carousel_slide::after{content:\"\";position:absolute;inset:-8px;border:2px solid transparent;border-radius:4px;pointer-events:none}.carousel_slide:focus-visible{outline:none}.carousel_slide:focus-visible::after{border-color:var(--color-focus, rgb(194, 38, 251))}.carousel_slide_fullwidth{padding:0}.carousel_slide_frame{width:100%;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-transition:height ease-in-out 0.5s;-moz-transition:height ease-in-out 0.5s;transition:height ease-in-out 0.5s}.carousel_slide_frame_loading{opacity:0;pointer-events:none}.carousel_slide_frame *{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.carousel_slide_frame *[slot=loop]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;right:0;-webkit-transition:right ease-in-out 0.75s;-moz-transition:right ease-in-out 0.75s;transition:right ease-in-out 0.75s}.carousel_slide_frame_repeater{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;right:0;-webkit-transition:right ease-in-out 0.75s;-moz-transition:right ease-in-out 0.75s;transition:right ease-in-out 0.75s}.carousel_slide_loading{opacity:0;pointer-events:none;position:absolute;inset:0}.carousel_slide_loading_visible{opacity:1;pointer-events:all}.carousel_loading_bar{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 60px;margin-top:8px}.carousel_loading_bar_fullwidth{padding:0 4px}.carousel_buttons{position:absolute;width:100%;height:0px;top:calc(50% - 20px);left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}.carousel_buttons_fullwidth{padding:0 8px}.carousel_bullets{position:relative;margin-top:8px}.carousel_bullets_inside{position:absolute;bottom:0px;width:100%;margin:0;padding:0px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.carousel_bullets_card{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-inline-flexbox;display:inline-flex;gap:8px}.carousel_bullets_card_inside{border-top-left-radius:8px;border-top-right-radius:8px;padding:8px;background-color:var(--color-surface-0, rgb(255, 255, 255))}.carousel_bullets_item{width:16px;height:16px;border:2px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-radius:50%;position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg);cursor:pointer}.carousel_bullets_item::before{content:\"\";position:absolute;inset:4px;border-radius:50%}.carousel_bullets_item::after{content:\"\";position:absolute;inset:-8px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);border:2px solid transparent;border-radius:4px}.carousel_bullets_item:focus-visible{outline:none}.carousel_bullets_item:focus-visible::after{border-color:var(--color-focus, rgb(194, 38, 251))}.carousel_bullets_item_active::before{background-color:var(--color-primary, rgb(30, 107, 241))}.carousel_bullets_item_conclude{position:absolute;inset:-2px;border-radius:50%;border:2px solid var(--color-content-disable, rgb(89, 89, 89))}.carousel_bullets_item_loader{position:absolute;inset:-2px;border-radius:50%;border:2px solid var(--color-primary, rgb(30, 107, 241));-webkit-animation:l18 linear;animation:l18 linear}@-webkit-keyframes l18{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}75%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}100%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}}@keyframes l18{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}75%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}100%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}}";

const BdsCarousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsChangeCarousel = createEvent(this, "bdsChangeCarousel");
        this.itemsElement = null;
        this.bulletElement = null;
        this.bulletElements = [];
        this.itemActivated = 1;
        this.seconds = 0;
        this.isWhole = 0;
        this.heightCarousel = 240;
        this.framePressed = false;
        this.autoplayState = 'running';
        /**
         * Autoplay. Prop to Enable component autoplay.
         */
        this.autoplay = false;
        /**
         * AutoplayTimeout. Prop to Choose the Autoplay time in milliseconds, ex: 5000.
         */
        this.autoplayTimeout = 5000;
        /**
         * AutoplayHoverPause. Prop to Enable it if you will have the function to pause autoplay when on hover.
         */
        this.autoplayHoverPause = false;
        /**
         * autoHeight. Prop to Enable it if you want the component to adjust its height relative to the active items..
         */
        this.autoHeight = false;
        /**
         * Bullet. Prop to Enable component bullets navigation.
         */
        this.bullets = 'outside';
        /**
         * Bullet. Prop to Enable component bullets navigation.
         */
        this.bulletsPosition = 'center';
        /**
         * InfiniteLoop. Prop to Enable if the component will have infinite loop.
         */
        this.infiniteLoop = false;
        /**
         * arrows. Prop to select type of arrows in component. Are available "outside" | "inside" | "none".
         */
        this.arrows = 'outside';
        /**
         * SlidePerPage. Prop to Choose the number of slide per page you will have available in the carousel.
         */
        this.slidePerPage = 1;
        /**
         * Gap. Prop to Select the gap distance between items.
         */
        this.gap = 'none';
        /**
         * Grab. Prop to enable function of grab in carousel.
         */
        this.grab = true;
        /**
         * Loading state. Indicates if the component is in a loading state.
         */
        this.loading = false;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtSlideContent is the data-test to slide action.
         */
        this.dtSlideContent = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonPrev is the data-test to button prev.
         */
        this.dtButtonPrev = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonNext is the data-test to button next.
         */
        this.dtButtonNext = null;
        this.secondsLimit = this.autoplayTimeout / 1000;
        this.setInternalItens = (ItensElement) => {
            const floor = Math.floor(ItensElement.length / this.slidePerPage);
            const numberOfColumns = ItensElement.length / this.slidePerPage;
            const newItens = getItems(numberOfColumns);
            this.internalItens = newItens;
            this.isWhole = ItensElement.length - this.slidePerPage * floor;
        };
        this.startCountSeconds = () => {
            if (this.autoplay) {
                this.incrementSeconds = setInterval(() => {
                    this.seconds += 0.1;
                }, 100);
            }
        };
        this.updateHeight = (itemsElement) => {
            const elementActive = itemsElement[this.itemActivated * this.slidePerPage - this.slidePerPage];
            let heightFrame = 240;
            if (this.slidePerPage > 1) {
                const getVisibleItens = this.isWhole > 0 && this.itemActivated == this.internalItens.length
                    ? itemsElement.slice(this.internalItens.length - this.internalItens.length - this.slidePerPage, this.itemActivated * this.slidePerPage)
                    : itemsElement.slice(this.itemActivated * this.slidePerPage - this.slidePerPage, this.itemActivated * this.slidePerPage);
                heightFrame = getHighestItem(getVisibleItens)[0];
            }
            else {
                heightFrame = elementActive.offsetHeight;
            }
            this.frame.style.height = `${heightFrame}px`;
        };
        this.refFrame = (el) => {
            this.frame = el;
        };
        this.refThemeProviderArrows = (el) => {
            this.themeProviderArrows = el;
        };
        this.refFrameRepeater = (el) => {
            this.frameRepeater = el;
        };
        this.refBulletElement = (el) => {
            if (el) {
                this.bulletElement = el; // Keep the current behavior
                this.bulletElements.push(el); // Store all bullet elements
            }
        };
        this.onMouseOver = () => {
            if (this.autoplayHoverPause) {
                this.pauseAutoplay();
            }
        };
        this.onMouseOut = () => {
            if (this.autoplayHoverPause) {
                this.runAutoplay();
            }
        };
        this.onMouseDown = (ev) => {
            if (this.grab) {
                this.framePressed = true;
                const offsetFrame = this.frame.offsetLeft + this.element.offsetLeft;
                this.startX = ev.pageX - offsetFrame;
                this.endX = ev.pageX - offsetFrame;
                this.frame.style.cursor = 'grabbing';
            }
        };
        this.onMouseEnter = () => {
            if (this.grab) {
                this.frame.style.cursor = 'grab';
            }
        };
        this.onMouseUp = () => {
            if (this.grab) {
                this.framePressed = false;
                this.frame.style.cursor = 'grab';
                this.boundItems();
                if (this.autoplayHoverPause) {
                    this.pauseAutoplay();
                }
            }
        };
        this.onMouseMove = (ev) => {
            if (this.grab) {
                if (!this.framePressed)
                    return;
                ev.preventDefault();
                const offsetFrame = this.frame.offsetLeft + this.element.offsetLeft;
                this.endX = ev.pageX - offsetFrame;
            }
        };
        this.boundItems = () => {
            if (this.endX < this.startX) {
                this.nextSlide();
                this.seconds = 0;
            }
            else if (this.endX > this.startX) {
                this.prevSlide();
                this.seconds = 0;
            }
        };
        this.setKeydownNavigation = (ev) => {
            if (ev.key === 'Tab') {
                if (this.bulletElements.length > 0) {
                    this.bulletElements[0].focus();
                }
                else if (this.bulletElement) {
                    this.bulletElement.focus();
                }
            }
            if (ev.key === 'ArrowRight') {
                this.nextSlide();
            }
            if (ev.key === 'ArrowLeft') {
                this.prevSlide();
            }
        };
    }
    componentWillLoad() {
        this.itemsElement = this.element.getElementsByTagName('bds-carousel-item');
        this.setInternalItens(Array.from(this.itemsElement));
        if (this.bullets == true) {
            this.bullets = 'outside';
        }
        if (this.bullets == false) {
            this.bullets = 'none';
        }
    }
    componentDidRender() {
        if (!this.loading) {
            if (this.gap != 'none') {
                this.frame.style.width = `calc(100% + ${gapChanged(this.gap)}px)`;
                this.frame.style.marginLeft = `-${gapChanged(this.gap) / 2}px`;
            }
            for (let i = 0; i < this.itemsElement.length; i++) {
                const widthFrame = this.frame.offsetWidth >= 1920 ? 1920 : this.frame.offsetWidth;
                this.itemsElement[i].style.width = `${widthFrame / this.slidePerPage}px`;
                this.itemsElement[i].style.padding = `0 ${gapChanged(this.gap) / 2}px`;
            }
            if (this.autoHeight)
                this.updateHeight(Array.from(this.itemsElement));
        }
        if (this.arrows == 'inside') {
            const firstItemActived = (this.itemActivated - 1) * (this.itemsElement.length / this.internalItens.length) + 1;
            this.themeProviderArrows.theme =
                this.slidePerPage <= 1
                    ? this.itemsElement[this.itemActivated - 1].theme
                    : this.itemsElement[Math.round(firstItemActived)].theme;
        }
    }
    componentDidLoad() {
        this.startCountSeconds();
    }
    itemActivatedChanged() {
        const currentItemSelected = this.internalItens.find((item) => item.id === this.itemActivated);
        const slideFrame = !this.frame ? 0 : this.frame.offsetWidth * (this.itemActivated - 1);
        if (this.frameRepeater) {
            if (currentItemSelected.isWhole) {
                const isWholeWidth = this.itemsElement[1].offsetWidth * (this.slidePerPage - this.isWhole);
                this.frameRepeater.style.right = `${slideFrame - isWholeWidth}px`;
            }
            else {
                this.frameRepeater.style.right = `${slideFrame}px`;
            }
        }
        this.bdsChangeCarousel.emit({ value: currentItemSelected });
    }
    autoplayTimeoutChanged() {
        this.secondsLimit = this.autoplayTimeout / 1000;
    }
    secondsChanged() {
        if (this.seconds >= this.secondsLimit) {
            this.nextSlide();
            this.seconds = 0;
        }
    }
    isWholeChanged() {
        if (this.internalItens != undefined) {
            if (this.isWhole > 0) {
                const newItem = {
                    id: this.internalItens?.length + 1,
                    label: `Frame - ${this.internalItens?.length + 1}`,
                    isWhole: true,
                };
                this.internalItens = [...this.internalItens, newItem];
            }
        }
    }
    async buildCarousel() {
        this.itemsElement = this.element.getElementsByTagName('bds-carousel-item');
        this.loading = true;
        setTimeout(() => (this.setInternalItens(Array.from(this.itemsElement)), (this.loading = false), this.setActivated(1)), 1000);
    }
    async nextSlide() {
        if (this.itemActivated == this.internalItens.length) {
            if (this.infiniteLoop || this.autoplay) {
                this.itemActivated = 1;
            }
            else {
                this.itemActivated = this.itemActivated;
            }
        }
        else {
            this.itemActivated = this.itemActivated + 1;
        }
        clearInterval(this.incrementSeconds);
        this.seconds = 0;
        this.startCountSeconds();
    }
    async prevSlide() {
        if (this.itemActivated == 1) {
            if (this.infiniteLoop || this.autoplay) {
                this.itemActivated = this.internalItens.length;
            }
            else {
                this.itemActivated = this.itemActivated;
            }
        }
        else {
            this.itemActivated = this.itemActivated - 1;
        }
        clearInterval(this.incrementSeconds);
        this.seconds = 0;
        this.startCountSeconds();
    }
    async setActivated(item) {
        this.itemActivated = item;
        clearInterval(this.incrementSeconds);
        this.seconds = 0;
        this.startCountSeconds();
        this.autoplayState = 'running';
    }
    async pauseAutoplay() {
        clearInterval(this.incrementSeconds);
        this.autoplayState = 'paused';
    }
    async runAutoplay() {
        this.startCountSeconds();
        this.autoplayState = 'running';
    }
    render() {
        // Reset bullet elements array at start of render
        this.bulletElements = [];
        const ThemeOrDivArrows = this.arrows == 'inside' ? 'bds-theme-provider' : 'div';
        const justifybulletsPosition = this.bulletsPosition == 'center'
            ? 'center'
            : this.bulletsPosition == 'right'
                ? 'flex-end'
                : this.bulletsPosition == 'left' && 'flex-start';
        return (h("div", { key: '3fef27f621f5e29c96b712a640cde809bb64871b', class: { carousel: true } }, h("div", { key: 'ca8b92158e455f540a15d88b9f5c1011905577dc', class: {
                carousel_slide: true,
                carousel_slide_fullwidth: this.arrows != 'outside',
                [`carousel_slide_state_${this.autoplayState}`]: this.autoplay,
            }, tabindex: "0", onKeyDown: (ev) => this.setKeydownNavigation(ev), "data-test": this.dtSlideContent }, h("div", { key: '2728df7b11e32216669f6673bb802fa9ec45ca4f', ref: (el) => this.refFrame(el), class: { carousel_slide_frame: true, carousel_slide_frame_loading: this.loading }, onMouseOver: () => this.onMouseOver(), onMouseOut: () => this.onMouseOut(), onMouseDown: (ev) => this.onMouseDown(ev), onMouseEnter: () => this.onMouseEnter(), onMouseUp: () => this.onMouseUp(), onMouseMove: (ev) => this.onMouseMove(ev) }, h("div", { key: '50deeb720de3ecef867a5c547c30c9e77f041076', ref: (el) => this.refFrameRepeater(el), class: { carousel_slide_frame_repeater: true } }, h("slot", { key: '5648ef6d97bd9397bea40ecdc2339e3a4fab2a19' }))), h("bds-grid", { key: 'b6fa556f8ff9058af027f53b04b00ccce4c3f3e9', class: { carousel_slide_loading: true, carousel_slide_loading_visible: this.loading } }, h("bds-skeleton", { key: 'b0811b187a6634df8e91f47f84141b6cb03fd786', height: "100%", shape: "square", width: "100%" })), this.arrows != 'none' && !this.loading && (h(ThemeOrDivArrows, { key: 'ebb89ba46b089601e474ed6c791c87a9289e4e0f', ref: (el) => this.refThemeProviderArrows(el), class: {
                carousel_buttons: true,
                carousel_buttons_fullwidth: this.arrows != 'outside',
            } }, h("bds-button", { key: 'f8b48068aa8bc7a79ae440844a89058548ee04bf', variant: "text", iconLeft: "arrow-left", color: "content", onBdsClick: () => this.prevSlide(), disabled: !this.infiniteLoop && this.itemActivated <= 1, dataTest: this.dtButtonPrev }), h("bds-button", { key: '88484956a768e802d83afd2763db880a701a8446', variant: "text", iconLeft: "arrow-right", color: "content", onBdsClick: () => this.nextSlide(), disabled: !this.infiniteLoop && this.itemActivated >= this.internalItens.length, dataTest: this.dtButtonNext })))), this.internalItens.length > 1 && this.bullets != 'none' && (h("div", { key: 'ac6773fe2063f449a2b0b515a0de79c60a83766f', class: {
                carousel_bullets: true,
                carousel_bullets_inside: this.bullets == 'inside',
            } }, this.loading && this.bullets != 'inside' ? (h("bds-grid", { xxs: "12", gap: "1", "justify-content": justifybulletsPosition, padding: this.arrows === 'outside' ? 'x-7' : 'none' }, h("bds-skeleton", { height: "16px", width: "16px", shape: "circle" }), h("bds-skeleton", { height: "16px", width: "16px", shape: "circle" }), h("bds-skeleton", { height: "16px", width: "16px", shape: "circle" }))) : (this.internalItens && (h("bds-grid", { xxs: "12", "justify-content": justifybulletsPosition, padding: this.arrows === 'outside' ? 'x-7' : 'none' }, h("div", { class: {
                carousel_bullets_card: true,
                carousel_bullets_card_inside: this.bullets == 'inside',
            } }, this.internalItens.map((item, index) => (h("div", { key: index, ref: (el) => this.refBulletElement(el), class: {
                carousel_bullets_item: true,
                carousel_bullets_item_active: item.id == this.itemActivated,
            }, tabindex: "0", onClick: () => this.setActivated(item.id) }, item.id < this.itemActivated && this.autoplay && (h("div", { class: { carousel_bullets_item_conclude: true } })), item.id == this.itemActivated && this.autoplay && (h("div", { class: { carousel_bullets_item_loader: true }, style: {
                animationDuration: `${this.autoplayTimeout / 1000 - 0.1}s`,
                animationPlayState: this.autoplayState,
            } }))))))))))), h("slot", { key: '9d595528598ac97a0fca9ff8a5e9b4aef8bd20f4', name: "after" })));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "itemActivated": ["itemActivatedChanged"],
        "autoplayTimeout": ["autoplayTimeoutChanged"],
        "seconds": ["secondsChanged"],
        "isWhole": ["isWholeChanged"]
    }; }
};
BdsCarousel.style = carouselCss;

export { BdsCarousel as bds_carousel };
//# sourceMappingURL=bds-carousel.entry.js.map

//# sourceMappingURL=bds-carousel.entry.js.map