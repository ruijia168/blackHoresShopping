// pages/custom/custom.js


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
//登录回调
btnEvent(){
  wx.getUserProfile({
    desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (file) => {
      console.log(file)
      wx.login({
        success: (res) => {
          console.log(res);
          wx.request({
            url: 'code获取openid的接口',
            data: {
              code: res.code
            },
            success: (open) => {
              console.log(open.data);
              wx.request({
                url: 'https://api-hmugo-web.itheima.net/api/public/v1/users/wxlogin',
                data: {
                  encryptedData:file.encryptedData,
                  rawData: file.rawData,
                  iv: file.iv,
                  signature:file.signature,
                  code:res.code
                },
                method:"POST",
                success(data) {
                  console.log(data);
                }
              })
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