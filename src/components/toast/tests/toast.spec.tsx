import { newSpecPage } from "@stencil/core/testing";
import { BdsToast } from "../toast";

jest.useFakeTimers()

describe("bds-toast", () => {
  const getToastWithoutShadowDom = async () => {
    return await newSpecPage({
      components: [BdsToast],
      html: `
      <bds-toast toast-title="titulo" toast-text="texto" icon="close" action-type="button" button-action="close" button-text="cancel" variant="system" duration="0" show="true"></bds-toast>`,
      supportsShadowDom: false
    })
  }

  const getToast = async () => {
    return await newSpecPage({
      components: [BdsToast],
      html: `
      <bds-toast toast-title="titulo" toast-text="texto" icon="close" action-type="button" button-action="close" button-text="cancel" variant="system" duration="0" show="true"></bds-toast>`,
    });
  }

  const getToastCustomAction = async () => {
    return await newSpecPage({
      components: [BdsToast],
      html: `
      <bds-toast toast-title="titulo" toast-text="texto" icon="close" action-type="button" button-action="custom" button-text="cancel" variant="system" duration="0" show="true"></bds-toast>`,
    });
  };

  const getToastIconActionType = async () => {
    return await newSpecPage({
      components: [BdsToast],
      html: `
      <bds-toast toast-title="titulo" toast-text="texto" icon="close" action-type="icon" button-action="close" button-text="cancel" variant="system" duration="0" show="true"></bds-toast>`,
    });
  };


  it("should render the component and match the snapshot", async () => {
    const page = await getToast();
    expect(page).toMatchSnapshot();
    expect(page.root).toMatchSnapshot();
  });

  it('should render the component in the shadow dom', async () => {
    const page = await getToast();
    expect(page.root.shadowRoot.querySelector(".toast")).toBeTruthy();
    expect(page.root.querySelector(".toast")).toBeFalsy();
  });

  it('should render without shadow dom', async () => {
    const page = await getToastWithoutShadowDom();
    expect(page.root.querySelector(".toast")).toBeTruthy();
    expect(page.root.shadowRoot).toBeFalsy();
  });

  it('should execute a custom action on button click', async () => {
    const page = await getToastCustomAction();
    const toast = page.body.querySelector('bds-toast');
    const _callback = jest.fn();
    page.doc.addEventListener('toastButtonClick', _callback);

    await page.waitForChanges();

    toast.shadowRoot.querySelector('button').click();

    await page.waitForChanges();

    expect(_callback).toHaveBeenCalled();
  });

  it('should close the toast clicking in the icon', async () => {
    const page = await getToastIconActionType();
    const toast = page.body.querySelector('bds-toast');

    toast.shadowRoot.querySelector('button').click();

    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('.toast').classList.contains('show')).toBe(false);
    expect(page.root.shadowRoot.querySelector('.toast').classList.contains('hide')).toBe(true);

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 400);

    setTimeout(() => {
      expect(page.body.querySelector('bds-toast')).toBeFalsy();
    }, 400);
  })
});
