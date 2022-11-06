// pages/showSearch/showSearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      currentId : 0,
      goods:[],
      page:1,
      total:0
  },
//获取搜索结果
getResult(){
  wx.showLoading({
    title: '马上哟',
  })
  wx.request({
    url: `https://api-hmugo-web.itheima.net/api/public/v1/goods/search?cid=${this.data.currentId}&pagenum=${this.data.page}`,
    method:"GET",
    success:(res)=>{
      var data = res.data.message
      this.setData({
        goods:[...this.data.goods,...data.goods],
        total:data.total
      })
    },
    complete:()=>{
      wx.hideLoading()
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({currentId:options.cid})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getResult()
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

    this.setData({
      page:this.data.page + 1
    })
    this.getResult()
    if(this.data.total===this.data.goods.length)
      return wx.showToast({
        title: '数据加载完毕',
        icon:'none'
      })
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})