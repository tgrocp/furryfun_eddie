Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      "pagePath": "pages/landing/landing",
      "iconPath": "/icons/home.png",
      "selectedIconPath": "/icons/home.png"
    }, {
      "pagePath": "pages/homepage/create-page",
      "iconPath": "/icons/plus.png",
      "selectedIconPath": "/icons/plus.png"
    }, {
      "pagePath": "pages/profile-page/profile-page",
      "iconPath": "/icons/user.png",
      "selectedIconPath": "/icons/user.png"
      
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = `../../${data.path}`
      wx.switchTab({url})
      console.log(url)
      this.setData({
        selected: data.index
      })
    }
  }
})
