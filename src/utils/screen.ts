export const getDistanceFromPageBottom = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return window.innerHeight - rect.bottom;
};

// 获取元素距离四边的距离
export const getDomRect = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const width = window.innerWidth;
  const height = window.innerHeight;
  return {
    left: rect.left,
    right: width - rect.right,
    top: rect.top,
    bottom: height - rect.bottom,
  };
};
