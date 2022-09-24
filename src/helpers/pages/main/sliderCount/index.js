/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
export const countSlider = ({ width, setCount }) => {
  if (width >= 1300) {
    setCount(6);
  }

  if (width <= 1350 && width >= 1180) {
    setCount(5);
  }
  if (width <= 1180 && width >= 790) {
    setCount(4);
  }
  if (width <= 790 && width >= 610) {
    setCount(3);
  }
  if (width <= 610 && width >= 405) {
    setCount(2);
  }
  if (width <= 405) {
    setCount(1);
  }
};
