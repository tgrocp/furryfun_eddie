App({
  onLaunch() {
    const app = this
    wx.login({
      success (res) {
        console.log("code", res.code)
        if (res.code) {
          wx.request({
            url: `${app.globalData.baseUrl}/login`,
            method: 'POST',
            data: {
            code: res.code
            },
            success(res){
              console.log(res.data)
              wx.setStorageSync('user', res.data.user)
              wx.setStorageSync('headers', res.data.headers)
            }
          })
        } else {
          console.log('Error' + res.errMsg)
        }
      },
      fail: function () {
        callback(false)
      },
    })
  },
  globalData: {
    baseUrl: 'http://localhost:3000/api/v1',
    // modelling_services: [
    //   {
    //     "images": "/images/Corgi.jpg"
    //   }
    // ]

  }
})