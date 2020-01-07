import { newSpecPage } from '@stencil/core/dist/testing';
import { Button } from './button';

describe('bds-button', () => {
    it('should render', async () => {
        const page = await (newSpecPage({
            html: `<bds-button>click</bds-button>`,
            components: [Button]
        }));

        expect(page.root.shadowRoot.querySelector("button")).toBeTruthy();
        expect(page.root.shadowRoot.querySelector(".button")).toBeTruthy();
    });

    it('should render with default props', async () => {
        const page = await (newSpecPage({
            html: `<bds-button>click</bds-button>`,
            components: [Button]
        }));

        expect(page.root.shadowRoot.querySelector("button")).toBeTruthy();
        expect(page.root.shadowRoot.querySelector(".button__primary")).toBeTruthy();
        expect(page.root.shadowRoot.querySelector(".button--size-standard")).toBeTruthy();
        expect(page.root.shadowRoot.querySelector("disabled")).toBeFalsy();
    });

})