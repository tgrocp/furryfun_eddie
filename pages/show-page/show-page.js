// pages/show-page/show-page.js
let app = getApp()
Page({
    onLoad: function (options) {
        console.log(options)
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
    console.log(e.detail.value)
    const data = e.currentTarget.dataset;
    const time = e.detail.value;
    const userId = app.globalData.user.id
    let booking = {
      time: time,
      pet_id: data.id,
      user_id: userId
    }

    wx.request({
      url: `${getApp().globalData.baseUrl}/pets/${data.id}/bookings`,
      method: 'POST',
      data: booking,
      success() {
          // redirect to index page when done
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