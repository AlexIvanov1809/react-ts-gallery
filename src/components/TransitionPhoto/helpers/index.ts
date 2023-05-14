type RefT = React.MutableRefObject<HTMLDivElement | null>;

const getPhotoByRef = (ref: RefT, index: number): HTMLElement | null => {
  return ref.current!.querySelector(`img:nth-of-type(${index + 1})`);
};

const hidePhoto = (element: HTMLElement | null) => {
  if (!element) {
    return;
  }
  element.dataset.active = 'false';

  if (element.previousSibling) {
    // @ts-ignore
    element.previousSibling.dataset.active = 'false';
  }

  if (element.nextSibling) {
    // @ts-ignore
    element.nextSibling.dataset.active = 'false';
  }
};

const showPhoto = (element: HTMLElement | null) => {
  if (!element) {
    return;
  }

  element.dataset.active = 'true';

  if (element.previousSibling) {
    // @ts-ignore
    element.previousSibling.dataset.active = 'prepared';
  }

  if (element.nextSibling) {
    // @ts-ignore
    element.nextSibling.dataset.active = 'prepared';
  }
};

export { getPhotoByRef, hidePhoto, showPhoto };
