const app = getApp()

Page({
  data: {
    hasUserInfo: false
  },

  goToModelling() {
    wx.switchTab({
      url: '/pages/category-modelling/category-modelling',
    })
  },

  onLoad: function (options) {

  },
  onReady: function () {
  },

  onShow: function () {
    const page = this
    console.log(page)
    const auth = wx.getStorageSync('auth')
    const header = {
      'X-User-Email': auth.email,
      'X-User-Token': auth.token
    }
    wx.request({
      url: `${getApp().globalData.baseUrl}/services`,
      success(res){
        console.log("services", res.data)
        page.setData(res.data)
      }
    })
  },
})



