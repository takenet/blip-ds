export interface MenuPosition {
  top: number;
  left: number;
}

export const getScrollParent = (node: HTMLElement) => {
  if (node === null) {
    return null;
  }

  if (node.classList.contains('element_scrolled') || node?.tagName == 'BODY') {
    return node;
  } else {
    return getScrollParent(node.offsetParent as HTMLElement);
  }
};

export function menuFixed({
  actionElement,
  menuElement,
  intoView,
}: {
  actionElement: HTMLElement;
  menuElement: HTMLElement;
  intoView: HTMLElement;
}): MenuPosition {
  const parentElement: HTMLElement = intoView.offsetParent as HTMLElement;
  const contentScrolled = !!intoView.classList.contains('element_scrolled');

  const positionTop = contentScrolled
    ? actionElement.offsetTop - intoView.scrollTop + parentElement.offsetTop
    : actionElement.offsetTop - window.scrollY;

  const positionLeft = contentScrolled ? actionElement.offsetLeft + parentElement.offsetLeft : actionElement.offsetLeft;

  const menupositionTop =
    menuElement?.offsetHeight > window.innerHeight - positionTop
      ? positionTop - menuElement?.offsetHeight - 16
      : positionTop + actionElement.offsetHeight + 16;
  const menupositionLeft =
    menuElement?.offsetWidth > window.innerWidth - positionLeft
      ? positionLeft + actionElement.offsetWidth - menuElement?.offsetWidth
      : positionLeft;

  const limitedHeightScreen = window.innerHeight - menuElement.offsetHeight;
  const limitedWidthScreen = window.innerWidth - menuElement.offsetWidth;

  const result = {
    top: menupositionTop < 8 ? 8 : menupositionTop > limitedHeightScreen ? limitedHeightScreen - 8 : menupositionTop,
    left: menupositionLeft < 0 ? 0 : menupositionLeft > limitedWidthScreen ? limitedWidthScreen : menupositionLeft,
  };

  return result;
}
