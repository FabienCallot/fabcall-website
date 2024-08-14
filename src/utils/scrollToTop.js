/**
 * Scroll to the top of the page.
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * It takes a function as an argument and returns a function that sets the argument to the current
 * height of the window
 * @param setitem - This is the function that will be called when the window is scrolled.
 * @returns the current height of the window.
 */
export const currentHeight = (setitem) => {
  const handleHeightWindow = () => setitem(window.pageYOffset);
  window.addEventListener("scroll", handleHeightWindow);
  return;
};
