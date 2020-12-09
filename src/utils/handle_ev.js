// 触发一次后，如果再次点击将从新计时
export function debrance(fn, wait) {
  let timer = null;
  let preTime = new Date().getTime();

  return function() {
    const context = this,
      args = arguments,
      nowTime = new Date().getTime();

    clearTimeout(timer);

    if (nowTime - preTime > wait) {
      // 立即触发
      fn.apply(context, args);
      preTime = nowTime;
    } else {
      preTime = nowTime;
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, wait);
    }
  };
}

// 在单位时间内只能触发一次
export function throttle(fn, wait) {
  let timer = null;
  let preTime = new Date().getTime();

  return function() {
    const context = this,
      args = arguments,
      nowTime = new Date().getTime();

    clearTimeout(timer);

    if (nowTime - preTime > wait) {
      // 立即触发
      fn.apply(context, args);
      preTime = nowTime;
    } else {
      preTime = nowTime;
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, wait);
    }
  };
}
