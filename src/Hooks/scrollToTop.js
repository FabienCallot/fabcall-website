export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * It sets the height of the element to the current scroll position of the window
 */

export const currentHeight = (setitem) => {
  const handleHeightWindow = () => setitem(window.pageYOffset);
  window.addEventListener('scroll', handleHeightWindow);
  return;
};