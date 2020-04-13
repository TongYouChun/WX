// pages/Order/Order.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 有无订单
    Order:true,
    Yes: false,
    ProductName: true,
    Evaluate: 'Evaluate',
    complete: '已评价',
    ProductName1: false,
    Evaluate1: '',
    complete1: '没有评价'
  },
  Delivery() {
    wx.navigateTo({
      url: '/pages/Order/details',
    })
  },
  // 评价
  Evaluate () {
    if (this.data.ProductName1 == false){
      wx.navigateTo({
        url: '/pages/Order/Praise',
      })
    }
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