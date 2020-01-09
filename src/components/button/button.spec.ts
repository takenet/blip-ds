import { newSpecPage, SpecPage } from '@stencil/core/dist/testing';
import { Button } from './button';

describe('bds-button', () => {
    const getPage = async (icon?: string): Promise<SpecPage> => (
        await (newSpecPage({
            html: icon ? `<bds-button icon=${icon}>click</bds-button>` : `<bds-button>click</bds-button>`,
            components: [Button]
        })));

    it('should render', async () => {
        const page = await getPage();

        expect(page.root.shadowRoot.querySelector("button")).toBeTruthy();
        expect(page.root.shadowRoot.querySelector(".button")).toBeTruthy();
    });

    it('should render', async () => {
        const page = await getPage();

        expect(page.root.shadowRoot.querySelector("button")).toBeTruthy();
        expect(page.root.shadowRoot.querySelector(".button")).toBeTruthy();
    });

    it('should render with default props', async () => {
        const page = await getPage();

        expect(page.root.shadowRoot.querySelector("button")).toBeTruthy();
        expect(page.root.shadowRoot.querySelector(".button__primary")).toBeTruthy();
        expect(page.root.shadowRoot.querySelector(".button--size-standard")).toBeTruthy();
        expect(page.root.shadowRoot.querySelector("disabled")).toBeFalsy();
    });

    it('should render without icon', async () => {
        const page = await getPage();

        expect(page.root.shadowRoot.querySelector(".button__icon")).toBeFalsy();
        expect(page.root.shadowRoot.querySelector("bds-icon")).toBeFalsy();
    });


    it('should render the icon passed by prop', async () => {
        const page = await getPage('file-new');

        expect(page.root.shadowRoot.querySelector(".button__icon")).toBeTruthy();
        expect(page.root.shadowRoot.querySelector("bds-icon")).toBeTruthy();
    });


})