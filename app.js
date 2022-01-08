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
    baseUrl: 'http://localhost:3000/api/v1',
    // baseUrl: "https://furryfun.herokuapp.com/api/v1",
    // modelling_services: [
    //   {
    //     "image": "/images/Golden-retriever.jpg"
    //   },
    //   {
    //     "image": "/images/Chinese-rural-dog.jpg"
    //   },
    //   {
    //     "image": "/images/British-shorthair.jpg"
    //   },
    //   {
    //     "image": "/images/Alpaca.jpg"
    //   }
    // ]
  }
})