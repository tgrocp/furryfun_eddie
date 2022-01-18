// pages/show-page/successfully-booked.js
Page({

  data: {
   
  },

  onLoad: function (options) {
    let page = this;
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
    

      wx.request({
        url: `${getApp().globalData.baseUrl}/bookings/${options.bookId}`,
        method: 'GET', 
        success (res) {
          console.log(res)
          page.setData({ pet: res.data.bookings.pet, date: res.data.bookings.time })
        }
      })
    },

    goToModelling() {
      wx.switchTab({
        url: '/pages/category-modelling/category-modelling',
      })
    },
    goToProfile() {
      wx.switchTab({
        url: '/pages/profile-page/profile-page',
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