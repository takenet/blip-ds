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

export function getParentsUntil(element: HTMLElement, stopSelector: string): HTMLElement[] {
  const parents: HTMLElement[] = [element];

  while (element && !element.matches(stopSelector)) {
    element = element.parentElement;
    parents.push(element);
  }

  return parents;
}

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

export const getItems = (itenslenght: number) => {
  const items = [];
  let item = 1;

  while (item <= itenslenght) {
    const newItem = {
      id: item,
      label: `Frame - ${item}`,
    };
    items.push(newItem);
    item++;
  }
  return items;
};

export const getHighestItem = (items) => {
  var maxoffsetHeight = Math.max.apply(
    null,
    items.map((a) => a.offsetHeight),
  );
  var output = items.filter((a) => a.offsetHeight == maxoffsetHeight).map((a) => a.offsetHeight);
  return output;
};

export const gapChanged = (gap: string) => {
  let spaceGap;
  switch (gap) {
    case 'none':
      spaceGap = 0;
      break;
    case 'half':
      spaceGap = 4;
      break;
    case '1':
      spaceGap = 8;
      break;
    case '2':
      spaceGap = 16;
      break;
    case '3':
      spaceGap = 24;
      break;
    case '4':
      spaceGap = 32;
      break;
    case '5':
      spaceGap = 40;
      break;
    case '6':
      spaceGap = 48;
      break;
    case '7':
      spaceGap = 56;
      break;
    case '8':
      spaceGap = 64;
      break;
    case '9':
      spaceGap = 72;
      break;
    case '10':
      spaceGap = 80;
      break;
    case '11':
      spaceGap = 88;
      break;
    case '12':
      spaceGap = 96;
      break;
    default:
      spaceGap = 0;
  }
  return spaceGap;
};
