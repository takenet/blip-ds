export interface Position {
  top: number;
  left: number;
}

export type reference = 'top' | 'bottom' | 'left' | 'right';

export interface BreakPostion {
  x: reference | string;
  y: reference | string;
}

export const getScrollParent = (node: HTMLElement) => {
  if (node === null) {
    return null;
  }

  if (node.classList.contains('element_scrolled') || node?.tagName === 'BODY') {
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
  const body = intoView ? intoView : document.body;
  const parentElement: HTMLElement = body.offsetParent as HTMLElement;
  const contentScrolled = !!body.classList.contains('element_scrolled');

  const positionTop = contentScrolled
    ? actionElement.offsetTop - body.scrollTop + parentElement.offsetTop
    : actionElement.offsetTop - window.scrollY;

  const positionLeft = contentScrolled ? actionElement.offsetLeft + parentElement.offsetLeft : actionElement.offsetLeft;

  const changedpositionTop =
    changedElement?.offsetHeight > window.innerHeight - positionTop
      ? positionTop - changedElement?.offsetHeight - 16
      : positionTop + actionElement?.offsetHeight + 16;
  const changedpositionLeft =
    changedElement?.offsetWidth > window.innerWidth - positionLeft
      ? positionLeft + actionElement?.offsetWidth - changedElement?.offsetWidth
      : positionLeft;

  const limitedHeightScreen = window.innerHeight - changedElement?.offsetHeight;
  const limitedWidthScreen = window.innerWidth - changedElement?.offsetWidth;

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

export function positionAbsoluteElement({
  actionElement,
  changedElement,
  intoView,
}: {
  actionElement: HTMLElement;
  changedElement: HTMLElement;
  intoView: HTMLElement;
}): BreakPostion {
  const body = intoView ? intoView : document.body;
  const numberHeignt = body.offsetHeight < changedElement.offsetHeight ? window.screen.height : body.offsetHeight;
  const numberWidth = body.offsetWidth < changedElement.offsetWidth ? window.screen.width : body.offsetWidth;
  const heightTop = numberHeignt - actionElement.offsetTop;
  const widthLeft = numberWidth - actionElement.offsetLeft;

  const result = {
    y: heightTop < changedElement.offsetHeight + actionElement.offsetHeight ? 'top' : 'bottom',
    x: widthLeft < changedElement.offsetWidth ? 'right' : 'left',
  };

  return result;
}
