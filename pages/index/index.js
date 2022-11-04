// index.js
// 获取应用实例
const app = getApp()
 //开启下拉刷新
 
Page({
  data: {
    swiperList:[],
    gridList:[],
    recommendList:[],
  },
 //获取轮播图
 getSwiperList(){
   wx.showLoading({
     title: '加载中，等等哟',
   })
   wx.request({
     url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
     method:"GET",
     success:(res)=>{
       this.setData({swiperList:res.data.message})
     },
     complete:()=>{
       wx.hideLoading()
     }
   })
 },
 //获取导航grid
 getGridList(){
  wx.request({
    url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
    method:"GET",
    success:(res)=>{
      this.setData({gridList:res.data.message})
    }
  })
 },
 //获取推荐列表
 getRecommend(){
      wx.request({
        url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
        method:'GET',
        success:(res)=>{
          this.setData({recommendList:res.data.message})
        }
      })
 },
  onLoad() {
    this.getSwiperList()
    this.getGridList()
    this.getRecommend()
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
