// pages/show-page/confirmation.js
let app = getApp()
Page({

  onLoad:function(options){
    wx.getStorageInfo({
      success: (res) => {
        console.log(res)
      },
    })
  },

  data: {
    name: null,
    phone: null
  }, 

  formSubmit: function (e) {
    const name = e.detail.value.name;
    const phone = e.detail.value.phone

    let confirmation = {
      // id: id,
      name: name,
      phone: phone
    }
    console.log({confirmation})

    if ( name && phone ) {
      console.log('all have values')
      wx.request({
        url: `${getApp().globalData.baseUrl}/users`,
        method: 'PUT',
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