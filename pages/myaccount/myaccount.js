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
        wx.request({
          url: `http://localhost:3000/api/v1/users/${parseInt(options.id)}`,
          method: 'GET',
          sueecss(res) {
              console.log (res.data.user)
              page.setData({ user: res.data.user })
            }
        })  
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