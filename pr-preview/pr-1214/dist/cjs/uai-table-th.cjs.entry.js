'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableThCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;padding:var(--uai-spacing-sm, 0.75rem) var(--uai-spacing-md, 1rem)}:host([justify-content=center]){-ms-flex-pack:center;justify-content:center}:host([justify-content=right]){-ms-flex-pack:end;justify-content:flex-end}.th__button{display:-ms-inline-flexbox;display:inline-flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;max-width:100%;margin:0;padding:0 var(--uai-spacing-2xs, 0.25rem);border:0;border-radius:var(--uai-radius-sm, 0.25rem);background:transparent;color:inherit;font:inherit;cursor:pointer}.th__button:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.th__icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;opacity:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.th__icon{-webkit-transition:none;transition:none}}.th__icon--active{opacity:1}.th__icon--descending{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.th__button:hover .th__icon,.th__button:focus-visible .th__icon{opacity:1}`;

const DIRECTIONS = ['none', 'ascending', 'descending'];
const NEXT = {
    none: 'ascending',
    ascending: 'descending',
    descending: 'ascending',
};
const UaiTableTh = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiTableSort = index.createEvent(this, "uaiTableSort");
        /** Turns the title into a button that asks for sorting. Use only when the consumer sorts on uaiTableSort; pair with sortDirection; avoid it without a handler. */
        this.sortable = false;
        /** Current sort of the column, sets aria-sort. Use none, ascending or descending; pair with sortable; avoid setting it on several columns. */
        this.sortDirection = 'none';
        /** Horizontal alignment of the title. Use right for numbers and center for controls; avoid mixing alignments in one column. */
        this.justifyContent = 'left';
        /** Accessible name of the sort button when the title is not enough. Use a short action; pair with sortable; avoid repeating the direction. */
        this.sortLabel = null;
        this.onSort = () => {
            const current = DIRECTIONS.find((candidate) => candidate === this.sortDirection) || 'none';
            this.uaiTableSort.emit(NEXT[current]);
        };
    }
    render() {
        const direction = DIRECTIONS.find((candidate) => candidate === this.sortDirection) || 'none';
        const title = (index.h("uai-typo", { key: '24a74605cd5f0daa9579febd31f28964197130c2', tag: "span", variant: "body-lg", bold: "semibold", margin: false }, index.h("slot", { key: '756e6f93753d0c559ee5125570b9e12af571869a' })));
        return (index.h(index.Host, { key: 'd9705aabe55b64dcde8d1c57dba74f1baa1a48d4', role: "columnheader", "aria-sort": this.sortable ? direction : undefined }, this.sortable ? (index.h("button", { type: "button", class: "th__button", "aria-label": this.sortLabel, onClick: this.onSort }, title, index.h("uai-icon", { class: {
                th__icon: true,
                'th__icon--active': direction !== 'none',
                'th__icon--descending': direction === 'descending',
            }, name: "arrow-down", size: "small", color: direction === 'none' ? 'content-secondary' : 'content-primary' }))) : (title)));
    }
};
UaiTableTh.style = uaiTableThCss();

exports.uai_table_th = UaiTableTh;
