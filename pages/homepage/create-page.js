// pages/homepage/create-page.js
Page({
    
    



    bindSubmit: function (e) {
        console.log("event", e)
        let service = e.detail.value
        const headers = wx.getStorageSync('headers')

        console.log(service)
      
        wx.request({
          url: `http://localhost:3000/api/v1/services`,
          method: 'POST',
          header: headers,
          data: { service: service },
            success() {
              wx.redirectTo({
                url: '/pages/category-modelling/category-modelling'
              });
            }
        });
      },

      radioChange: function(e) {
       let gender=e.detail.value
       console.log(gender)
      },
      
      bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
         index: e.detail.value
        })
        },
    /**
     * 页面的初始数据
     */


      getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
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


    data: {
        city:false,
        region: ['', '', ''],
        customItem: '全部',

        imgs: [],//本地图片地址数组
        picPaths:[],//网络路径
      
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
          city:true
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

//选择图片tap
  chooseImageTap: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择'],
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
        console.log(res.tempFilePaths[0]);
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

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

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

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})