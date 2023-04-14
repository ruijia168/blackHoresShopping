// pages/detail/detail.js
//引入store mobx
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      goodId:null,
      goodPic:null,
      goodInfo:null,
      isCollected:false,
      collect_color:null,
      isClick:false,
      // isClickFontSize:"已加入购物车"
  },
//获取商品的详细
getGoodInfo(){
  wx.request({
    url: `https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=${this.data.goodId}`,
    method:'GET',
    success:(res)=>{
     this.setData({
       goodPic:res.data.message.pics,
       goodInfo:res.data.message
     })
    }
  })
},
//收藏的回调
isCollected(){
  this.setData({
    isCollected: !this.data.isCollected,
    collect_color:this.data.isCollected ? "rgb(228, 228, 228)" : "rgb(255, 202, 40)"
  }) 
},
//加入购物车
addGood(){
  this.addGoods(this.data.goodId)
  this.addNum(1)
  this.setData({
    isClick:true
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.setData({
        goodId : options.goods_id
      })
      this.storeBindings = createStoreBindings(this,{
        store,
        fields:["goodsId","goodsNum"],
        actions:["addGoods","addNum"]
      }
      )
      this.getGoodInfo()
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