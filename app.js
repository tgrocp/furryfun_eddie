// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    models: [
      {
      "id": 1,
      "title": "two year old Golden retriver",
      "name": "momo",
      "description": "many-many year of professional modeling",
      "photo": "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00518-1011.jpg"
      },

      {
      "id" :2,
      "title":"three years old another dog",
      "name":"kim",
      "description":"kim has so many year expirience with pet modeling"            
      },

      {
      "id" :3,
      title:"four years old french bulldog",
      name:"Leo",
      description:"kim has so many year expirience with pet modeling"            
      }
  ]    
  }
})
