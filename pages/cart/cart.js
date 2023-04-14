// pages/cart/cart.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: true,
    goods_list:[],
  },
//复选框的绑定
onChange(event) {
  this.setData({
    checked: event.detail,
  });
},
//获取购物车的商品信息
getGoodsInfo(){
  for(var i =0 ;i<store.goodsId.length;i++){
      this.getInfo(store.goodsId[i])
  }
},
getInfo(id){
  wx.request({
    url: `https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=${id}`,
    method:'GET',
    success:(res)=>{
     this.setData({
       goodPic:res.data.message.pics,
       goods_list:[...this.data.goods_list,res.data.message]
     })
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this,{
      store,
      fields:["goodsId","goodsNum"],
      actions:["addNum"]
    }
    )
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      goods_list:[]
    })
    this.getGoodsInfo()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
      
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})