// pages/category-index/category-index.js
Page({

    /**
     * Page initial data
     */
    data: {
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
            "title":"three years old cat",
            "name":"kim",
            "description":"kim has so many year expirience with pet modeling",
            "photo": "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
            },

            {
            "id" :3,
            title:"four years old french bulldog",
            name:"Leo",
            description:"kim has so many year expirience with pet modeling"            
            },

        ]    
        },

        onClick: function (e) {
            const id = e.currentTarget.dataset.id
            wx.navigateTo({
              url: `/pages/show-page/show-page?id=${id}`,
            })
        },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        const page = this
        const app = getApp()
        const globalData = app.globalData
        page.setData(globalData)
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function () {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function () {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function () {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function () {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function () {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function () {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function () {

    }
})