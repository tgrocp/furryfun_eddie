// pages/show-page/show-page.js
let app = getApp()
Page({
    onLoad: function (options) {
        console.log(options)
        const page = this;
        wx.request({
          url: `${getApp().globalData.baseUrl}/pets/${parseInt(options.id)}`,
          method: 'GET', 
          success (res) {
            page.setData({ pet: res.data.pets})
          }
       })
    },

    onShareAppMessage: function (res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '自定义转发标题',
        path: 'pages/show-page/show-page',
        success: function(res) {
          // 转发成功
        },
        fail: function(res) {
          // 转发失败
        }
      }
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
      url: `${getApp().globalData.baseUrl}/users/${userId}/bookings`,
      method: 'POST',
      data: booking,
      success() {
          // redirect to index page when done
          wx.redirectTo({
            url: '/pages/show-page/confirmation',
          })
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