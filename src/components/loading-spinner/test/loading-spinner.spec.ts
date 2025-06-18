import { newSpecPage } from '@stencil/core/testing';
import { BdsLoadingSpinner } from '../loading-spinner';

describe('bds-loading-spinner', () => {
    it('should render with default props', async () => {
        const page = await newSpecPage({
            components: [BdsLoadingSpinner],
            html: `<bds-loading-spinner></bds-loading-spinner>`,
        });

        expect(page.root).toBeTruthy();
        expect(page.root.variant).toBe('primary');
        expect(page.root.size).toBe('standard');
        expect(page.root.color).toBe('main');
        expect(page.root.dataTest).toBeNull();
    });

    it('should render with custom props', async () => {
        const page = await newSpecPage({
            components: [BdsLoadingSpinner],
            html: `<bds-loading-spinner variant="secondary" size="small" color="light" data-test="loading-test"></bds-loading-spinner>`,
        });

        expect(page.root.variant).toBe('secondary');
        expect(page.root.size).toBe('small');
        expect(page.root.color).toBe('light');
        expect(page.root.dataTest).toBe('loading-test');
    });

    it('should render spinner container with correct classes', async () => {
        const page = await newSpecPage({
            components: [BdsLoadingSpinner],
            html: `<bds-loading-spinner size="small"></bds-loading-spinner>`,
        });

        const spinnerContainer = page.root.shadowRoot.querySelector('.spinner_container');
        expect(spinnerContainer).toBeTruthy();
        expect(spinnerContainer.classList.contains('spinner_container')).toBe(true);
        expect(spinnerContainer.classList.contains('spinner_background_small')).toBe(true);
    });

    it('should render spinner background with correct classes', async () => {
        const page = await newSpecPage({
            components: [BdsLoadingSpinner],
            html: `<bds-loading-spinner size="standard" color="positive"></bds-loading-spinner>`,
        });

        const spinnerBackground = page.root.shadowRoot.querySelector('.spinner_background');
        expect(spinnerBackground).toBeTruthy();
        expect(spinnerBackground.classList.contains('spinner_background')).toBe(true);
        expect(spinnerBackground.classList.contains('spinner_background_standard')).toBe(true);
        expect(spinnerBackground.classList.contains('spinner_background_positive')).toBe(true);
    });

    it('should render spinner loading element with correct classes', async () => {
        const page = await newSpecPage({
            components: [BdsLoadingSpinner],
            html: `<bds-loading-spinner size="extra-small" color="negative"></bds-loading-spinner>`,
        });

        const spinnerLoading = page.root.shadowRoot.querySelector('.spinner_loading');
        expect(spinnerLoading).toBeTruthy();
        expect(spinnerLoading.classList.contains('spinner_loading')).toBe(true);
        expect(spinnerLoading.classList.contains('spinner_loading_extra-small')).toBe(true);
        expect(spinnerLoading.classList.contains('spinner_loading_negative')).toBe(true);
    });

    it('should apply data-test attribute to container', async () => {
        const page = await newSpecPage({
            components: [BdsLoadingSpinner],
            html: `<bds-loading-spinner data-test="spinner-test"></bds-loading-spinner>`,
        });

        const spinnerContainer = page.root.shadowRoot.querySelector('.spinner_container');
        expect(spinnerContainer.getAttribute('data-test')).toBe('spinner-test');
    });

    it('should not apply data-test attribute when not provided', async () => {
        const page = await newSpecPage({
            components: [BdsLoadingSpinner],
            html: `<bds-loading-spinner></bds-loading-spinner>`,
        });

        const spinnerContainer = page.root.shadowRoot.querySelector('.spinner_container');
        expect(spinnerContainer.getAttribute('data-test')).toBeNull();
    });

    describe('size variants', () => {
        it('should render with extra-small size', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner size="extra-small"></bds-loading-spinner>`,
            });

            const container = page.root.shadowRoot.querySelector('.spinner_container');
            const background = page.root.shadowRoot.querySelector('.spinner_background');
            const loading = page.root.shadowRoot.querySelector('.spinner_loading');

            expect(container.classList.contains('spinner_background_extra-small')).toBe(true);
            expect(background.classList.contains('spinner_background_extra-small')).toBe(true);
            expect(loading.classList.contains('spinner_loading_extra-small')).toBe(true);
        });

        it('should render with small size', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner size="small"></bds-loading-spinner>`,
            });

            const container = page.root.shadowRoot.querySelector('.spinner_container');
            const background = page.root.shadowRoot.querySelector('.spinner_background');
            const loading = page.root.shadowRoot.querySelector('.spinner_loading');

            expect(container.classList.contains('spinner_background_small')).toBe(true);
            expect(background.classList.contains('spinner_background_small')).toBe(true);
            expect(loading.classList.contains('spinner_loading_small')).toBe(true);
        });

        it('should render with standard size', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner size="standard"></bds-loading-spinner>`,
            });

            const container = page.root.shadowRoot.querySelector('.spinner_container');
            const background = page.root.shadowRoot.querySelector('.spinner_background');
            const loading = page.root.shadowRoot.querySelector('.spinner_loading');

            expect(container.classList.contains('spinner_background_standard')).toBe(true);
            expect(background.classList.contains('spinner_background_standard')).toBe(true);
            expect(loading.classList.contains('spinner_loading_standard')).toBe(true);
        });
    });

    describe('color variants', () => {
        it('should render with main color', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner color="main"></bds-loading-spinner>`,
            });

            const background = page.root.shadowRoot.querySelector('.spinner_background');
            const loading = page.root.shadowRoot.querySelector('.spinner_loading');

            expect(background.classList.contains('spinner_background_main')).toBe(true);
            expect(loading.classList.contains('spinner_loading_main')).toBe(true);
        });

        it('should render with light color', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner color="light"></bds-loading-spinner>`,
            });

            const background = page.root.shadowRoot.querySelector('.spinner_background');
            const loading = page.root.shadowRoot.querySelector('.spinner_loading');

            expect(background.classList.contains('spinner_background_light')).toBe(true);
            expect(loading.classList.contains('spinner_loading_light')).toBe(true);
        });

        it('should render with content color', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner color="content"></bds-loading-spinner>`,
            });

            const background = page.root.shadowRoot.querySelector('.spinner_background');
            const loading = page.root.shadowRoot.querySelector('.spinner_loading');

            expect(background.classList.contains('spinner_background_content')).toBe(true);
            expect(loading.classList.contains('spinner_loading_content')).toBe(true);
        });

        it('should render with positive color', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner color="positive"></bds-loading-spinner>`,
            });

            const background = page.root.shadowRoot.querySelector('.spinner_background');
            const loading = page.root.shadowRoot.querySelector('.spinner_loading');

            expect(background.classList.contains('spinner_background_positive')).toBe(true);
            expect(loading.classList.contains('spinner_loading_positive')).toBe(true);
        });

        it('should render with negative color', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner color="negative"></bds-loading-spinner>`,
            });

            const background = page.root.shadowRoot.querySelector('.spinner_background');
            const loading = page.root.shadowRoot.querySelector('.spinner_loading');

            expect(background.classList.contains('spinner_background_negative')).toBe(true);
            expect(loading.classList.contains('spinner_loading_negative')).toBe(true);
        });
    });

    describe('variant prop', () => {
        it('should render with primary variant', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner variant="primary"></bds-loading-spinner>`,
            });

            expect(page.root.variant).toBe('primary');
        });

        it('should render with secondary variant', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner variant="secondary"></bds-loading-spinner>`,
            });

            expect(page.root.variant).toBe('secondary');
        });

        it('should render with tertiary variant', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner variant="tertiary"></bds-loading-spinner>`,
            });

            expect(page.root.variant).toBe('tertiary');
        });

        it('should render with ghost variant', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner variant="ghost"></bds-loading-spinner>`,
            });

            expect(page.root.variant).toBe('ghost');
        });

        it('should render with delete variant', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner variant="delete"></bds-loading-spinner>`,
            });

            expect(page.root.variant).toBe('delete');
        });
    });

    describe('SVG content', () => {
        it('should have SVG content in loading element', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner></bds-loading-spinner>`,
            });

            const loadingElement = page.root.shadowRoot.querySelector('.spinner_loading');
            expect(loadingElement.innerHTML).toBeTruthy();
            expect(loadingElement.innerHTML).toContain('svg');
        });

        it('should use extra-small SVG for extra-small size', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner size="extra-small"></bds-loading-spinner>`,
            });

            const loadingElement = page.root.shadowRoot.querySelector('.spinner_loading');
            expect(loadingElement.innerHTML).toBeTruthy();
            expect(loadingElement.innerHTML).toContain('svg');
        });

        it('should use small SVG for small size', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner size="small"></bds-loading-spinner>`,
            });

            const loadingElement = page.root.shadowRoot.querySelector('.spinner_loading');
            expect(loadingElement.innerHTML).toBeTruthy();
            expect(loadingElement.innerHTML).toContain('svg');
        });

        it('should use standard SVG for standard size', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner size="standard"></bds-loading-spinner>`,
            });

            const loadingElement = page.root.shadowRoot.querySelector('.spinner_loading');
            expect(loadingElement.innerHTML).toBeTruthy();
            expect(loadingElement.innerHTML).toContain('svg');
        });
    });

    describe('formatSvg method', () => {
        let component;

        beforeEach(async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner></bds-loading-spinner>`,
            });
            component = page.rootInstance;
        });

        it('should remove width and height attributes from SVG', () => {
            const svgContent = '<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>';
            const result = component.formatSvg(svgContent);

            expect(result).not.toContain('width="24"');
            expect(result).not.toContain('height="24"');
            expect(result).toContain('viewBox="0 0 24 24"');
            expect(result).toContain('circle cx="12" cy="12" r="10"');
        });

        it('should handle SVG without width/height attributes', () => {
            const svgContent = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>';
            const result = component.formatSvg(svgContent);

            expect(result).toContain('viewBox="0 0 24 24"');
            expect(result).toContain('circle cx="12" cy="12" r="10"');
        });
    });

    describe('setSvgContent method', () => {
        it('should set SVG content during component lifecycle', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner></bds-loading-spinner>`,
            });

            const component = page.rootInstance;
            expect(component.svgContent).toBeTruthy();
            expect(component.svgContent).toContain('svg');
        });

        it('should update SVG content when size changes', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner size="small"></bds-loading-spinner>`,
            });

            const component = page.rootInstance;
            expect(component.svgContent).toBeTruthy();

            // Change size and trigger setSvgContent
            component.size = 'standard';
            component.setSvgContent();

            expect(component.svgContent).toBeTruthy();
            expect(component.svgContent).toContain('svg');
        });
    });

    describe('component lifecycle', () => {
        it('should call componentWillLoad', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner></bds-loading-spinner>`,
            });

            const component = page.rootInstance;
            expect(component.svgContent).toBeTruthy();
        });
    });

    describe('accessibility', () => {
        it('should render a proper container structure', async () => {
            const page = await newSpecPage({
                components: [BdsLoadingSpinner],
                html: `<bds-loading-spinner></bds-loading-spinner>`,
            });

            const container = page.root.shadowRoot.querySelector('.spinner_container');
            const background = page.root.shadowRoot.querySelector('.spinner_background');
            const loading = page.root.shadowRoot.querySelector('.spinner_loading');

            expect(container).toBeTruthy();
            expect(background).toBeTruthy();
            expect(loading).toBeTruthy();
        });
    });
});
