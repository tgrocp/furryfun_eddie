
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
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        region: e.detail.value,
        city: true
      })
    },
  
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs'
      })
    },
 
    onLoad: function (options) {
      if (wx.getUserProfile) {
        this.setData({
          canIUseGetUserProfile: true
        })
      }
      
      let page = this;
        console.log(options)
        const petId = options.petId
        wx.request({
            url: `${getApp().globalData.baseUrl}/pets/${petId}`,
            method: 'GET',
            success(res) {
                console.log(res.data)
                page.setData({pets: res.data.pets})
              }
        })  
      },

    formSubmit: function (e) {
      const page = this;
      const petId = this.data.pets.id
      console.log(e)
      let pet = e.detail.value
      const headers = wx.getStorageSync('headers')
  
      wx.request({
        url: `${getApp().globalData.baseUrl}/pets/${petId}`,
        method: 'PUT',
        header: headers,
        data: { pet: pet },
        success() {

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
    chooseImageTap: function () {
      var that = this;
      wx.showActionSheet({
        itemList: ['Choose from the album'],
        itemColor: "#00000",
        success: function (res) {
          if (!res.cancel) {
            if (res.tapIndex == 0) {
              that.chooseWxImage('album')
            } else if (res.tapIndex == 1) {
              that.chooseWxImage('camera')
            }
          }
        }
      })
    },
    //选择图片
    chooseWxImage: function (type) {
      var that = this;
      var imgsPaths = that.data.imgs;
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: [type],
        success: function (res) {
          that.setData({uploadedImage: res.tempFilePaths[0]})
          console.log(res.tempFilePaths[0]);
          console.log(res)
          that.upImgs(res.tempFilePaths[0], 0) //调用上传方法
        }
      })
    },
  
    //上传服务器
    upImgs: function (imgurl, index) {
      var that = this;
      wx.uploadFile({
        url: 'https://xxxxxxxxxxxxxxxxxxxxxxxxxxxx',//
        filePath: imgurl,
        name: 'file',
        header: {
          'content-type': 'multipart/form-data'
        },
        formData: null,
        success: function (res) {
          console.log(res) //接口返回网络路径
          var data = JSON.parse(res.data)
          that.data.picPaths.push(data['msg'])
          that.setData({
            picPaths: that.data.picPaths
          })
          console.log(that.data.picPaths)
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