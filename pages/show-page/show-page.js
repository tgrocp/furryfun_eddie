// pages/show-page/show-page.js
Page({
    onLoad: function (options) {
        // console.log(options)
        const page = this;
        let images = getApp().globalData.modelling_services
        let models = page.setData({ images: images })
        
        wx.request({
          url: `${getApp().globalData.baseUrl}/pets/${parseInt(options.id)}`,
          method: 'GET', 
          success (res) {
            page.setData({ pet: res.data.pets })
          }
       })
    },

  bindDateChange: function(e) {
    console.log(e)
    const data = e.currentTarget.dataset;
    const time = e.detail.value;
    let booking = {
      time: time
    }

    wx.request({
      url: `http://localhost:3000/api/v1/pets/${data.id}/bookings`,
      method: 'POST',
      data: booking,
      success() {
          // redirect to index page when done
        wx.redirectTo({
          url: "/pages/show-page/confirmation"
        });
      }
    });
  },  

    onReady: function () {

    },

    // buttonClicked: function(e) {
    //   console.log(e)
    //   wx.navigateTo ({
    //     url: '/pages/service-page/service-page'
    //   })
    // },

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