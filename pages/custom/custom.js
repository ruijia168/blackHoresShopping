// pages/custom/custom.js


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
//登录回调
btnEvent(){
  let code = null
  wx.getUserProfile({
    desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (file) => {
      const {encryptedData,rawData,iv,signature} = file
      wx.login({
        success: (res) => {
          code = res.code
          console.log(code);
          const loginParams = {encryptedData,rawData,iv,signature,code}
          wx.request({
            url: 'https://api-hmugo-web.itheima.net/api/public/v1/users/wxlogin',
            method:"POST",
            data:loginParams,
            success:(data)=>{
              console.log(data);
            }
          })
        }
      })
      
    }
  })

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   
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