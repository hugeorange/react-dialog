export function hexToHSL(hex: string): {
  h: number;
  s: number;
  l: number;
  hsl: string;
} {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }

  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l, hsl: 'hsl(' + h + ',' + s + '%,' + l + '%)' };
}

/**
 * 根据传入的主色 primary base 派生出其他四个颜色，并将其设置到 root 上
 * @param params 十六进制颜色色值
 *
 * 转换规则
 * primary base 转为 hsl
 * h 保持不变
 * s 70
 * l darker 48、 dark 40
 * 
 *  // --primary-base: hsl(227.94deg 100% 60%);

    // --primary-darker hsl(228.07deg 69.8% 48.04%);

    // --primary-dark  hsl(228.17deg 69.61% 40%);
 */
export const setRootPrimaryColor = (hex: string) => {
  const { h } = hexToHSL(hex);

  const primaryDarker = `hsl(${h}deg 70%, 48%)`;
  const primaryDark = `hsl(${h}deg 70%, 40%)`;
  const primaryBase = hex;
  const primaryAlpha16 = `${hex}28`;
  const primaryAlpha10 = `${hex}19`;

  const root = document.querySelector(':root') as HTMLElement;
  root!.style.setProperty('--primary-base', primaryBase);
  root!.style.setProperty('--primary-darker', primaryDarker);
  root!.style.setProperty('--primary-dark', primaryDark);
  root!.style.setProperty('--primary-alpha-16', primaryAlpha16);
  root!.style.setProperty('--primary-alpha-10', primaryAlpha10);
};
