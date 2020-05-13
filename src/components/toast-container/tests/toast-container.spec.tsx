import { newSpecPage } from "@stencil/core/testing";
import { BdsToastContainer } from "../toast-container";

describe("bds-toast-container", () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsToastContainer],
      html: `<bds-toast-container></bds-toast-container>`,
    });
  });

  it("should build", () => {
    expect(new BdsToastContainer()).toBeTruthy();
  });

  it("should render the component", async () => {
    expect(page).toMatchSnapshot();
    expect(page.root).toMatchSnapshot();
  });

  it("should match html", async () => {
    expect(page.root).toEqualHtml(`
      <bds-toast-container>
        <mock:shadow-root>
        <div>
          <slot />
        </div>
        </mock:shadow-root>
      </bds-toast-container>
    `)
  })
});