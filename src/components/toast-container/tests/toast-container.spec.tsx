import { newSpecPage } from '@stencil/core/testing';
import { BdsToastContainer } from '../toast-container';

describe('bds-toast-container', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsToastContainer],
      html: `<bds-toast-container></bds-toast-container>`,
    });
  });

  it('should build', () => {
    expect(new BdsToastContainer()).toBeTruthy();
  });

  it('should render the component', async () => {
    expect(page).toMatchSnapshot();
  });
});
