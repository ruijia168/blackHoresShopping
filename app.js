<<<<<<< HEAD
// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.setTabBarStyle({
      selectedColor: "pink",
      borderStyle: 'white'
    })
  },
  globalData: {
<<<<<<< HEAD
    userInfo: null,
  },
});
=======
>>>>>>> dev-gjj
=======
    userInfo: null
  }
})
>>>>>>> 6dce0c38b35769477c3851e55050402d5914d3b9
