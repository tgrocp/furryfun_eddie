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
        const id =options.id
        const app =getApp()
        const globalData = app.globalData
        const models =globalData.models
        
        let model = models.filter(model => model.id ==id)
        const page = this
        page.setData(model[0])
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function () {

    },


    buttonClicked: function(e) {
        wx.navigateTo ({
            url: '/pages/service-page/service-page'
        })
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