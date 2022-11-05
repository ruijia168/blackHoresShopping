const sumMoney =(arr)=>{
  let sum = 0
  for(let i =0 ;i<arr.length;i++){
    sum += arr[i].goods_price
  }
  return sum
}

module.exports = {
  sumMoney
}
