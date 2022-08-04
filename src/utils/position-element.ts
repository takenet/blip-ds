export interface Position {
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

export function positionElement({
  actionElement,
  changedElement,
  intoView,
}: {
  actionElement: HTMLElement;
  changedElement: HTMLElement;
  intoView: HTMLElement;
}): Position {
  const parentElement: HTMLElement = intoView.offsetParent as HTMLElement;
  const contentScrolled = !!intoView.classList.contains('element_scrolled');

  const positionTop = contentScrolled
    ? actionElement.offsetTop - intoView.scrollTop + parentElement.offsetTop
    : actionElement.offsetTop - window.scrollY;

  const positionLeft = contentScrolled ? actionElement.offsetLeft + parentElement.offsetLeft : actionElement.offsetLeft;

  const changedpositionTop =
    changedElement?.offsetHeight > window.innerHeight - positionTop
      ? positionTop - changedElement?.offsetHeight - 16
      : positionTop + actionElement.offsetHeight + 16;
  const changedpositionLeft =
    changedElement?.offsetWidth > window.innerWidth - positionLeft
      ? positionLeft + actionElement.offsetWidth - changedElement?.offsetWidth
      : positionLeft;

  const limitedHeightScreen = window.innerHeight - changedElement.offsetHeight;
  const limitedWidthScreen = window.innerWidth - changedElement.offsetWidth;

  const result = {
    top:
      changedpositionTop < 8
        ? 8
        : changedpositionTop > limitedHeightScreen
        ? limitedHeightScreen - 8
        : changedpositionTop,
    left:
      changedpositionLeft < 0 ? 0 : changedpositionLeft > limitedWidthScreen ? limitedWidthScreen : changedpositionLeft,
  };

  return result;
}
