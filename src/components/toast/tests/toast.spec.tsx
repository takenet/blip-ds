import { newSpecPage } from "@stencil/core/testing";
import { BdsToast } from "../toast";
import { ToastContainer } from "../../toast-container/toast-container";


describe("bds-toast", () => {
  const getToast = async () => {
    return await newSpecPage({
      components: [BdsToast, ToastContainer],
      html: `
      <toast-container></toast-container>
      <bds-toast title="teste" toast-title="titulo" toast-text="texto" icon="close" action-type="button" buttona-action="close"></bds-toast>`,
    })
  };

  it("should render the component", async () => {
    const staticToastPage = await getToast();
    expect(staticToastPage.root).toMatchSnapshot();
  });
});
