App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    const app = this

    wx.login({
      success: res => {
        console.log("code", res.code)
        wx.request({
          url: `${app.globalData.baseUrl}/login`,
          method: 'POST',
          data: {
            code: res.code
          },
          success: res => {
            console.log(res)
            const user = res.data.currentUser
            app.globalData.user = user
            wx.setStorageSync('user', user)
          }
        })
      }
    })
  },

  globalData: {
    userInfo: null,
    baseUrl: 'https://furry-fun.wogengapp.cn/api/v1',
    // baseUrl: 'http://localhost:3000/api/v1',
    // baseUrl: "https://furryfun.herokuapp.com/api/v1",
  }
})