import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('tooltip e2e tests', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-radio-group>
            <bds-radio value="radio1"></bds-radio>
            <bds-radio value="radio2"></bds-radio>
            <bds-radio value="radio3"></bds-radio>
        </bds-radio-group>
        `,
    });
  });
});
