// pages/homepage/create-page.js
Page({
    bindSubmit: function (e) {
        console.log("event", e)
        let service = e.detail.value
        const headers = wx.getStorageSync('headers')

        console.log(service)
      
        wx.request({
          url: `http://localhost:3000/api/v1/services`,
          method: 'POST',
          header: headers,
          data: { service: service },
            success() {
              wx.redirectTo({
                url: '/pages/category-modelling/category-modelling'
              });
            }
        });
      },

    //   deleteStory(e) {
    //     const data = e.currentTarget.dataset;
    //     wx.request({
    //       url: `http://localhost:3000/api/v1/services/${data.id}`,
    //       method: 'DELETE',
    //       success() {
    //         wx.redirectTo({
    //         url: '/pages/category-modelling/category-modelling'
    //       });
    //     }
    //   });
    // },
      
    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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