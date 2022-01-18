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
        currentData : 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const page = this;
        // let images = getApp().globalData.modelling_services
        // page.setData({ images: images })
        wx.getStorage({
            key: "user",
            success: (res) => {
              const name = res.data.user_name
              const phone = res.data.phone_number
              const id = res.data.id
              
              page.setData({
                name: name,
                phone: phone,
                id: id
              })
            }
        });

        wx.request({
            url: `${getApp().globalData.baseUrl}/pets`,
            method: 'GET',
            success(res) {
                console.log(res.data)
                page.setData({pets: res.data.pets})
              }
        });  
        
        let id = this.data.id;
        wx.request({
            url: `${getApp().globalData.baseUrl}/users/${id}/bookings`,
            method: 'GET',
            success(res) {
                console.log(res.data)
                page.setData({bookings: res.data.bookings})
              }
        });  
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    bindchange:function(e){
        const that  = this;
        that.setData({
          currentData: e.detail.current
        })
    },
    //点击切换，滑块index赋值
    checkCurrent:function(e){
      const that = this;
   
      if (that.data.currentData === e.target.dataset.current){
          return false;
      }else{
   
        that.setData({
          currentData: e.target.dataset.current
        })
      }
    },

    editFunction: function(e){
      console.log(e.target.dataset.id)
      const petId = e.target.dataset.id
      wx.redirectTo({
        url: `/pages/profile-page/edit-page?petId=${petId}`,
      })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // const page = this;
        // // let images = getApp().globalData.modelling_services
        // // page.setData({ images: images })
        // let id = this.data.id;
        // wx.request({
        //     url: `${getApp().globalData.baseUrl}/users/${id}/bookings`,
        //     method: 'GET',
        //     success(res) {
        //         console.log(res.data)
        //         page.setData({bookings: res.data.bookings})
        //       }
        // })  
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

    deleteFunction: function(e){
      const page = this;
      console.log(e)
      const petId = e.currentTarget.dataset.id;
      const userId = this.data.id;
      wx.request({
        url: `${getApp().globalData.baseUrl}/users/${userId}/pets/${petId}`,
        method: 'DELETE',
        success(){
          wx.reLaunch({
            url: '/pages/profile-page/profile-page',
          })
        },
      })
    },

    deleteFunction2: function(e){
      const page = this;
      console.log(e)
      const bookingId =  e.currentTarget.dataset.id;
      const userId = this.data.id;
      wx.request({
        url: `${getApp().globalData.baseUrl}/bookings/${bookingId}`,
        method: 'DELETE',
        success(){
          wx.reLaunch({
            url: '/pages/profile-page/profile-page',
          })
        },
      })
    },

    onPullDownRefresh: function () {

    },


    onReachBottom: function () {

    },

 
    onShareAppMessage: function () {

    }
})