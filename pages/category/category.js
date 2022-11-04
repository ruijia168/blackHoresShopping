// pages/category/category.js
Page({
  //获取导航
  getNav(){
    wx.showLoading({
      title: '等等哟...',
    })
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
      method:'GET',
      success:(res)=>{
       this.setData({navList:res.data.message})
      },
      complete:()=>{
        wx.hideLoading()
      }
    })
  },
  //获取导航内容
  getNavContent(e){
    this.setData({currentNav:e.detail})
  },
  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    navList:[],
    navListContent:[],
    currentNav:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNav()
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