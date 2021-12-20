// pages/show-page/show-page.js
Page({

    deleteModel(e) {
        console.log("clickon")
        const id = e.currentTarget.dataset.id;
        const header = getApp().globalData.header;
        console.log(getApp().globalData)
        wx.request({
            url: `http://localhost:3000/api/v1/services/${parseInt(id)}`,
            method: 'DELETE',
            header: header,
            success() {
                wx.redirectTo({
                    url: '/pages/category-modelling/category-modelling'
                  });
                }
              });
            },
    
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