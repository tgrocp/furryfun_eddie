let app = getApp()

Page({
  data: {
    hasUserInfo: false
  },

  getUserProfile(){
    const page = this
    wx.getUserProfile({
      desc:'show the users information',
      success:(res)=>{
        console.log(res)
        const userId = app.globalData.user.id
        wx.request({
          url: `${app.globalData.baseUrl}/users/${userId}`,
          method: 'PUT',
          data:{
            userInfo: res.userInfo
          },
          success: (res) => {
            console.log(res)
            page.setData({
              user:res.data.currentUser,
              hasUserInfo: true
            }
            )
          }
        })
        this.goToModelling()
    }
  })
},

  goToModelling() {
    wx.switchTab({
      url: '/pages/category-modelling/category-modelling',
    })
  },

  onLoad: function (options) {

  },
  onReady: function () {
  },

  onShow: function () {
    const page = this
    console.log(page)
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
