const sumMoney =(arr)=>{
  let a = 2
  return a
}
const throttle=(fn,delay)=>{
  let timer = null
  return function(){
      let context = this ; 
      let args = arguments;
      if(!timer){
        timer = setTimeout(
          function(){
            fn.apply(context,args)
            timer = null
          },delay
        )
      }
  }
}
module.exports = {
  sumMoney
}
