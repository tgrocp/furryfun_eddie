Page({ 
    goToShow: function (e) {
        const id = e.currentTarget.dataset.id
        wx.navigateTo({
        url: `/pages/show-page/show-page?id=${id}`,
        })
    },

    onLoad() {
        const page = this;
        let images = getApp().globalData.modelling_services
        page.setData({ images: images })
        wx.request({
            url: `${getApp().globalData.baseUrl}/services`,
            method: 'GET',
            success(res) {
                console.log(res.data)
               page.setData({services: res.data.modelling_services})
               }
           })
       },

    //    buttonClicked: function(e) {
    //     wx.navigateTo ({
    //         url: '/pages/service-page/service-page'
    //     })
    //     },
   

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

Component({
    pageLifetimes: {
      show() {
        if (typeof this.getTabBar === 'function' &&
          this.getTabBar()) {
          this.getTabBar().setData({
            selected: 1
          })
        }
      }
    }
  })
  