// pages/show-page/successfully-booked.js
Page({

  /**
   * Page initial data
   */
  data: {
   
  },

  /**
   * Lifecycle function--Called when page load
   */
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
        }
      })
    },


  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})