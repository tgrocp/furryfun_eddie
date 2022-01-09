// pages/profile-page/profile-page.js
Page({

    goToShow: function (e) {
        console.log(e)
        const id = e.currentTarget.dataset.id
        
    },
    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const app = getApp()
        const globalData = app.globalData
        this.setData(globalData)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        const page = this;
        // let images = getApp().globalData.modelling_services
        // page.setData({ images: images })
        wx.request({
          url: `${getApp().globalData.baseUrl}/pets`,
          method: 'GET',
          success(res) {
              console.log(res.data)
              page.setData({pets: res.data.pets})
           }
        })

        
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})