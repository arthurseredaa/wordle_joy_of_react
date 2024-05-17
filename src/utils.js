export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

// https://github.com/lukeed/clsx/blob/master/src/lite.js
export function clsx() {
  let i = 0,
    tmp,
    str = "",
    len = arguments.length;

  for (; i < len; i++) {
    if ((tmp = arguments[i])) {
      if (typeof tmp === "string") {
        str += (str && " ") + tmp;
      }
    }
  }
  return str;
}
