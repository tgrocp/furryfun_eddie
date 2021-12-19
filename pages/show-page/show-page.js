// pages/show-page/show-page.js
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

        const page = this
        let images = getApp().globalData.modelling_services
        page.setData({ images: images })
        
        wx.request({
       
        //   url: `http://localhost:3000/api/v1/services/${parseInt(options.id)}`,
        url: `${getApp().globalData.baseUrl}/services/${parseInt(options.id)}`,
          method: 'GET',
          success (res) {
              console.log(res.data.modelling_service)
              page.setData({ service: res.data.modelling_service })
          }
       })
    },

    onReady: function () {

    },

    buttonClicked: function(e) {
        wx.navigateTo ({
            url: '/pages/service-page/service-page'
        })
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