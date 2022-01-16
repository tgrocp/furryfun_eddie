// pages/show-page/confirmation.js
let app = getApp()
Page({
  onLoad:function(options){
    let page = this;
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
    },
  })
  },


  formSubmit: function (e) {
    console.log(e.detail.value)
    console.log(this.data.id)
    // console.log('form发生了submit事件，携带数据为：', e.detail.value);
    let name = e.detail.value.name;
    let phone = parseInt(e.detail.value.phone);
    let id = this.data.id;

    let user = {
      id: id,
      user_name: name,
      phone_number: phone
    }
    console.log(user)

    // wx.request({
    //   url: `${getApp().globalData.baseUrl}/users/${id}`,
    //   method: 'GET',
    // })

    if ( name && phone ) {
      console.log('all have values')
      wx.request({
        url: `${getApp().globalData.baseUrl}/users/${id}`,
        method: 'PUT',
        data: {user},
        success() {
          wx.redirectTo({
            url: '/pages/show-page/successfully-booked'
          });
        }
      })
    } else {
      wx.showToast({
        title: 'Please fill the form',
        icon: "none",
        duration:2000,
      })
    }
  }
})