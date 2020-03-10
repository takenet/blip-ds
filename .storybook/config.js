import { configure, addParameters, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import centered from '@storybook/addon-centered/react';

// import { withTests } from "@storybook/addon-jest";

// import results from "../jest-test-results.json";

addDecorator(centered);
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// addDecorator(
//   withTests({
//     results,
//     filesExt: ".spec.ts"
//   })
// );

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.jsx$/), module);
