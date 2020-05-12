import { newSpecPage } from "@stencil/core/testing";
import { ToastContainer } from "../toast-container";

describe("bds-toast", () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [ToastContainer],
      html: `<bds-toast-container></bds-toast-container>`,
    });
  });

  it("should render the component", async () => {
    expect(page).toMatchSnapshot();
  });
});