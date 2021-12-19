// pages/myaccount/myaccount.js
Page({
    goToMyOrders: function (e) {
        const id = e.currentTarget.dataset.id
        wx.navigateTo({
        url: `/pages/myaccount/my-orders?id=${id}`,
        })
     },

     goToMyServices: function (e) {
        const id = e.currentTarget.dataset.id
        wx.navigateTo({
        url: `/pages/myaccount/my-services?id=${id}`,
        })
     },

    onLoad: function (options) {
       
        const page = this;
        page.setData({ user: getApp().globalData.user })
        // console.log(page.data)
       
    },

    onReady: function () {

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