// pages/My/My.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  RedEnvelopes () {
    wx.navigateTo({
      url: '/pages/My/RedEnvelopes',
    })
  },
  // 积分
  integral () {
    wx.navigateTo({
      url: '/pages/My/integral',
    })
  },
  // 历史订单
  History () {
    wx.navigateTo({
      url: '/pages/My/History',
    })
  },
  address () {
    wx.navigateTo({
      url: '/pages/My/address',
    })
  },
  // 收藏
  Collection () {
    wx.navigateTo({
      url: '/pages/My/Collection',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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