// pages/search/search.js
import util from'../../utils/util'
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchDisplay:"none",
    changeClassName:"checked_box",
    historyDisplay: "block",
    searchList:[]
  },
//搜索触发
searchBtn(){
  wx.navigateTo({
    url: '/pages/detail/detail',
  })
},
//显示搜索历史
showEmpty(){
  this.setData({
    historyDisplay : "block",
    searchDisplay:'none'
  })
},
//隐藏搜索历史
hideEmpty(){
  this.setData({
    historyDisplay : "none",
    searchDisplay:"block"
  })
},
//跳转搜索结果
toDetail(e){
  this.addSearchNames(util.info_simplfy(e.target.dataset.name))
  wx.navigateTo({
    url: `/pages/detail/detail?goods_id=${e.currentTarget.id}`,
  })
},
//实时搜索列表
//节流搜索
throttleSearch:
  util.throttle(function(e){
    // 函数执行
    wx.request({
      url: `https://api-hmugo-web.itheima.net/api/public/v1/goods/qsearch?query=${e.detail}`,
      method:"GET",
      success:(res)=>{
        console.log(res.data.message);
        this.setData({
          searchList : res.data.message
        })
      }
    })
	} ,1000),
  // console.log(sumMoney());

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this,{
      store,
      fields:["searchNames"],
      actions:["addSearchNames","deleteAllSearch"]
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