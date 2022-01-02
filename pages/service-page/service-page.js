// pages/service-page/service-page.js
Page({

    /**
     * Page initial data
     */
    data: {

    },

  //   buttonClicked:function(e) {
  //     wx.navigateTo({
  //       url: '/pages/myaccount/myaccount',
  //     })
  // },
bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
    let time = e.detail.value.time;
    let booking = {
      time:time,
    }
    wx.request({
      url: `http://localhost:3000/api/v1/services/${parseInt(e.mark.serviceId)}/bookings`,
      method: 'POST',
      data: booking,
      success() {
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/show-page/show-page'
        });
      }
    });
  },
    
    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
      // wx.request({
      //   url: `http://localhost:3000/api/v1/services/${parseInt(serviceId)}/bookings`,
      //   method: 'POST',
      //   data: booking,
      //   success() {
      //     // redirect to index page when done
      //     wx.redirectTo({
      //       url: '/pages/show-page/show-page'
      //     });
      //   }
      // });
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

    bindTimeChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          time: e.detail.value
        })
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