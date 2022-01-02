Page({ 
    goToShow: function (e) {
        console.log("hihihihi")
        console.log(e)
        const id = e.currentTarget.dataset.id
        wx.navigateTo({
        url: `/pages/show-page/show-page?id=${id}`,
        })
    },

    onShow() {
        const page = this;
        let images = getApp().globalData.modelling_services
        page.setData({ images: images })
        wx.request({
          url: `${getApp().globalData.baseUrl}/pets`,
          method: 'GET',
          success(res) {
              console.log(res.data)
              page.setData({pets: res.data.pets})
           }
        })
      },
})

  