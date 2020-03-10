import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('bds-button', () => {
    const getPage = async ({ icon, arrow } = { icon: '', arrow: false }): Promise<SpecPage> => {
        const getButtonElement = (): string => {
            if (icon) {
                return `<bds-button icon=${icon}>click</bds-button>`;
            }

            if (arrow) {
                return `<bds-button arrow>click</bds-button>`;
            }

            return `<bds-button>click</bds-button>`;
        }

        return await (newSpecPage({
            html: getButtonElement(),
            components: [Button]
        }))
    };

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
        const page = await getPage({ icon: 'file-new', arrow: false });

        expect(page.root.shadowRoot.querySelector(".button__icon")).toBeTruthy();
        expect(page.root.shadowRoot.querySelector("bds-icon")).toBeTruthy();
    });

    it('should render without arrow', async () => {
        const page = await getPage({ icon: '', arrow: false });

        expect(page.root.shadowRoot.querySelector(".button__arrow")).toBeFalsy();
    });

    it('should render the arrow passed by prop', async () => {
        const page = await getPage({ icon: '', arrow: true });

        expect(page.root.shadowRoot.querySelector(".button__arrow")).toBeTruthy();
    });


})