// pages/homepage/create-page.js
let app = getApp()

Page({
  
  data: {
    city: false,
    region: ['', '', ''],
    customItem: '全部',

    imgs: [],//本地图片地址数组
    picPaths: [],//网络路径

    userInfo: {},//user
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为fals
  },

  bindRegionChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      region: e.detail.value.join("-"),
      city: true
    })
  },

  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  formSubmit: function (e) {
    console.log(e)
    let pet = e.detail.value
    const userId = app.globalData.user.id
    pet = {...pet, 
      location: this.data.region, 
      user_id: userId
    }
    console.log(pet)
    const headers = wx.getStorageSync('headers')
    console.log(pet)
    console.log(this.data.tempFilePaths)
    const photoFile = this.data.tempFilePaths
    const upImgs = this.upImgs
    console.log(upImgs)
    wx.request({
      url: `${getApp().globalData.baseUrl}/users/${userId}/pets`,
      method: 'POST',
      header: headers,
      data: { pet: pet },
      success(res) {
        console.log(res)
        const petId = res.data.pet.id
        
        wx.uploadFile({
          url: `${app.globalData.baseUrl}/update_photo`,
          filePath: photoFile,
          name: 'petPhoto',
          success(res) {
            wx.showToast({
              title: 'uploaded',
              icon: 'success'
            })
          }, fail(e){ 
            console.log(e)
          }
        })
        console.log("end")
        wx.switchTab({
          url: '/pages/category-modelling/category-modelling'
        });
      }
  });
 },

  radioChange: function (e) {
    let gender = e.detail.value
    console.log(gender)
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
 

  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  //选择图片tap
  chooseImageTap() {
    const page = this 
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths[0]
        page.setData({tempFilePaths})
        // console.log(tempFilePaths)
      }
    })
  },

  //上传服务器
  upImgs(imgurl, id) {
    console.log("update Status")
    wx.uploadFile({
      url: `${app.globalData.baseUrl}/pets/${id}/update_photo`,
      filePath: imgurl,
      name: 'petPhoto',
      success(res) {
        console.log(res.data)
        wx.showToast({
          title: 'uploaded',
          icon: 'success'
        })
      }
    })
  },

 
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