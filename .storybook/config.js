import { configure, addParameters } from '@storybook/html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);
