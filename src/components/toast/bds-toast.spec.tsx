import { newSpecPage } from "@stencil/core/testing";
import { ToastContainer } from "../toast-container/toast-container";
import { BdsToast } from "./toast";

describe("bds-toast", () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsToast],
      html: `<toast-container><bds-toast></bds-alert></toast-container>`,
    });
  });

  it("should render the component", async () => {
    expect(page.root).toEqualHtml(`
      <bds-toast>
          <mock:shadow-root>
            <div class="show toast toast--action--icon toast--system">
              <div class="toast__content"></div>
              <div class="toast__action toast__action__icon">
                <bds-icon-button icon="close" size="standard" variant="secondary_white"></bds-icon-button>
              </div>
            </div>
          </mock:shadow-root>
      </bds-toast>`);
  });

  test.skip("Shold open and close the toast", async () => {
    const container = page.doc.querySelector("toast-container");
    const toast = page.doc.querySelector("bds-toast");

    console.log("*** container elements: ", container);
    console.log(
      "*** toast elements: ",
      container.querySelector("bds-toast").length
    );

    // open the toast
    toast.open();
    expect(container.childElementCount).toEqual(2);

    //Close the toast
    toast.close(toast);
    expect(container.childElementCount).toEqual(1);
  });
});
