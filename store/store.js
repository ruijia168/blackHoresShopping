//在这个js文件中，创建store的实例对象
import {observable,action} from 'mobx-miniprogram'

export const store = observable({
  //数据字段
  goodsId:[],
  goodId:null,
  goodsNum:null,
  searchNames:[],
  addSearchNames:action(function(data){
    this.searchNames = [...this.searchNames,data]
  }),
  deleteAllSearch:action(function(){
    this.searchNames = []
  }),
  updateGoodsId:action(function(newId){
    this.goodId = newId
  }),
  addGoods:action(function(newId){
    this.goodsId = [...this.goodsId,newId]
  }),
  addNum:action(function(step){
    this.goodsNum += step
  })
})