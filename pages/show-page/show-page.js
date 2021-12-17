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
        // const id =options.id
        // const app =getApp()
        // const globalData = app.globalData
        // const models =globalData.models
        
        // let model = models.filter(model => model.id ==id)
        // const page = this
        // page.setData(model[0])
        const page = this
        wx.request({
          url: `http://localhost:3000/api/v1/services/${parseInt(options.id)}`,
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