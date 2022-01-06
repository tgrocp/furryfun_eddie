// pages/show-page/confirmation.js
Page({
  /**
   * Page initial data
   */
  data: {
    name: null,
    phone: null,
  }, 

  formSubmit: function (e) {
    console.log(e)
    // console.log('form发生了submit事件，携带数据为：', e.detail.value);
    let name = e.detail.value.name;
    let phone = e.detail.value.phone

    let confirmation = {
      id: id,
      name: name,
      phone: phone
    }
    console.log({confirmation})

    if ( name && phone ) {
      console.log('all have values')
      wx.request({
        url: `${getApp().globalData.baseUrl}/users`,
        method: 'POST',
        data: confirmation,
        success() {
          wx.redirectTo({
            url: '/pages/show-page/successfully-booked'
          });
        }
      })

    } else {
      wx.showToast({
        title: 'Please fill the form',
        icon: "none",
        duration:2000,
      })
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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

  
})