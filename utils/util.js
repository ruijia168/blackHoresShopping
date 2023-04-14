const sumMoney =(arr)=>{
  let a = 2
  return a
}
function throttle(fn, interval) {
  let timer; // 维护一个 timer
  let delay = interval|| 500; // 设置间隔时间，如果interval不传，则默认500ms
  return function () {
    let _this = this;
    let args = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(function () {
      fn.apply(_this, args);
      timer = null; 
      // 在interval后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
    }, delay)
  }
}

function info_simplfy(str){
  if(str.length>11){
      str = str.slice(0,8);
      str = str + "..."
  }
  return str
}
module.exports = {
  sumMoney,
  throttle,
  info_simplfy
}
