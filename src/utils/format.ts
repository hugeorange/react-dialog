// 纯数字格式化为电话号码格式
export const formatPhoneNumber = (phoneNumberString = '') => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return '';
};

/*
 * remove all char to digit only 0-9
 */
export const formatDigitOnly = (inputText: string | number) => {
  if (!inputText) {
    return '';
  }
  return inputText.toString().replace(/\D/g, '');
};

// A function to format text to look like a phone number
export function inputPhoneFormat(value: string) {
  // Strip all characters from the input except digits
  let input = value.replace(/\D/g, '');

  // Trim the remaining input to ten characters, to preserve phone number format
  input = input.substring(0, 10);

  // Based upon the length of the string, we add formatting as necessary
  const size = input.length;
  if (size === 0) {
    return input;
  } else if (size < 4) {
    input = '(' + input;
  } else if (size < 7) {
    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6);
  } else {
    input =
      '(' +
      input.substring(0, 3) +
      ') ' +
      input.substring(3, 6) +
      '-' +
      input.substring(6, 10);
  }
  return input;
}

/**
 * 判断变量是否是数字
 * @param str
 * @returns
 */
export const isNumber = (str: number | string | undefined): boolean => {
  if (str === undefined || str === null || str === '') {
    return false;
  }
  return !isNaN(Number(str));
};

export const formatAmount = (value: string) => {
  let parts = value.split('.');
  let integerPart = parts[0];
  let formattedInteger = integerPart.replace(/\d(?=(\d{3})+$)/g, '$&,');
  // 如果原始字符串包含小数部分，则加上小数部分
  if (parts.length > 1) {
    return formattedInteger + '.' + parts[1];
  } else {
    return formattedInteger;
  }
};
