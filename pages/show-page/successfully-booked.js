// pages/show-page/successfully-booked.js
Page({

  data: {
   
  },

  onLoad: function (options) {
    wx.getStorage({
      key: "user",
      success: (res) => {
        const name = res.data.user_name
        const phone = res.data.phone_number
        const id = res.data.id
        
        page.setData({
          name: name,
          phone: phone,
          id: id
        })
      }
  });
  
    console.log(options)
    let page = this;

      wx.request({
        url: `${getApp().globalData.baseUrl}/bookings/${options.bookId}`,
        method: 'GET', 
        success (res) {
          console.log(res)
          page.setData({ pet: res.data.bookings.pet, date: res.data.bookings.date })
          // // wx.reLaunch({
          // //   url: '/pages/show-page/successfully-booked',
          // })
        }
      })
    },


  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})