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
              // wx.setStorageSync('user', res.data.user)
              // wx.setStorageSync('headers', res.data.headers)
              app.globalData.header = res.data.headers
              app.globalData.user = res.data.user
              // console.log(res.data.user)
              // console.log(app.globalData)
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