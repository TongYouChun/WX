// pages/Order/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logistics: 'te',
    Determine: 'Determine',
    waitFor: false,
    Delivery1: true,
    delivery: false,
    complete: true,
    Sign: false,
    Tips: true,
  },
  // 退单
  retreat() {
    console.log("退单")
  },
  // 查看物流
  logistics() {
    if (this.data.logistics === 'te') {
      console.log(查看物流)
    }
  },
  Determine() {
    if (this.data.Determine === 'Determine') {
      // this.setData({
      //   Sign: true,
      // })
      wx.navigateTo({
        url: '/pages/Order/Success',
      })
    }
  },
  Sign() {
    this.setData({
      Sign: false,
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