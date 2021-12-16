const app = getApp()
// this means that i am calling the app.js file 

Page({

    onShow: function () {

    },
  
    onHide: function () {

    },

    onUnload: function () {

    },

    onPullDownRefresh: function () {

    },

  data: {
  },
  onLoad: function (options) {

  },
  onReady: function () {
  },

  onShow: function () {
    const page = this
    const auth = wx.getStorageSync('auth')
    const header = {
      'X-User-Email': auth.email,
      'X-User-Token': auth.token
    }
    wx.request({
      url: `${getApp().globalData.baseUrl}/services`,
      success(res){
        console.log(res.data)
        page.setData(res.data)
      }
    })
  },
})