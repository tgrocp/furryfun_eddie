const app = getApp()
// this means that i am calling the app.js file 

Page({

    onShow: function () {

    },
  
    onHide: function () {

    },

    onUnload: function () {

    },

    onPullDownRefresh: function () {

    },

  data: {
  },
  onLoad: function (options) {

  },
  onReady: function () {
  },

// bindSubmit: function (e) {
//   let name = e.detail.value.name;
//   let title = e.detail.value.title;
//   let description = e.detail.value.description;
//   let service = {
//     name: name,
//     title: title,
//     description: description, 
//   }

//   wx.request({
//     url: `http://localhost:3000/api/v1/services`,
//     method: 'POST',
//     data: service,
//       success() {
//         wx.redirectTo({
//           url: '/pages/index/index'
//         });
//       }
//   });
// },

  onShow: function () {
    const page = this
    const auth = wx.getStorageSync('auth')
    const header = {
      'X-User-Email': auth.email,
      'X-User-Token': auth.token
    }
    wx.request({
      url: `${getApp().globalData.baseUrl}/services`,
      success(res){
        console.log("services", res.data)
        page.setData(res.data)
      }
    })
  },
})

Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})