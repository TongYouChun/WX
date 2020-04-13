// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    markers: [{
      iconPath: "/resources/dingwei.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 30
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/dingwei1.png',
      position: {
        left: 0,
        top: 250 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    //收藏
    heart:{
      img: '/resources/follow.png',
      he: true,
    },
    commodity: 'commodity',
    evaluate: 'eva',
    introduce: 'int',
    product: true,
    comment: false,
    details: false,
    //商品参数
    Price:210,
    number: 0,
    prohibit: 'prohibit',
    Price1: 210,
    number1: 0,
    prohibit1: 'prohibit',
    Shu: 0,
    cash: 0,

    whole: 'te',
    Newest: '',
  },
  //收藏
  heart () {
    if (this.data.heart.he) {
      this.setData({
        heart: {
          img: '/resources/follow1.png',
          he: false,
        } 
      }) 
    }else{
      this.setData({
        heart: {
          img: '/resources/follow.png',
          he: true,
        }
      }) 
    }
    
  },
  Comment(e) {
    if (e.currentTarget.dataset.gid == 1) {
      this.setData({
        whole: 'te',
        Newest: ''
      })
    } else if (e.currentTarget.dataset.gid == 2) {
      this.setData({
        whole: '',
        Newest: 'te'
      })
    }
  },
  reduce () {
    if(this.data.number>0){
      this.setData({
        prohibit: '',
        number: this.data.number - 1,
        Shu: this.data.number - 1 + this.data.number1,
        cash: this.data.Price * this.data.number - this.data.Price + this.data.Price1 * this.data.number1
        
      })
    };
    if (this.data.number === 0){
      this.setData ({
        prohibit: 'prohibit'
      })
    }
  },
  reduce1() {
    if (this.data.number1 > 0) {
      this.setData({
        prohibit1: '',
        number1: this.data.number1 - 1,
        Shu: this.data.number + this.data.number1-1,
        cash: this.data.Price * this.data.number + this.data.Price1 * this.data.number1 - this.data.Price
      })
    };
    if (this.data.number1 === 0) {
      this.setData({
        prohibit1: 'prohibit'
      })
    };
  },
  plus () {
    this.setData({
      prohibit: '',
      number: this.data.number + 1,
      Shu: this.data.number+1 + this.data.number1,
      cash: this.data.Price * this.data.number + this.data.Price + this.data.Price1 * this.data.number1
    })
    if (this.data.number === 0) {
      this.setData({
        prohibit: 'prohibit'
      })
    }
  },
  plus1() {
    this.setData({
      prohibit1: '',
      number1: this.data.number1 + 1,
      Shu: this.data.number + this.data.number1+1,
      cash: this.data.Price * this.data.number + this.data.Price1 * this.data.number1+ this.data.Price1
    })
    if (this.data.number1 === 0) {
      this.setData({
        prohibit1: 'prohibit'
      })
    }
  },
  commodity () {
    this.setData({
      commodity: 'commodity',
      evaluate: 'eva',
      introduce: 'int',
      product: true,
      Comment: false,
      details: false,
    })
  },
  evaluate () {
    this.setData({
      commodity: 'com',
      evaluate: 'evaluate',
      introduce: 'int',
      product: false,
      Comment: true,
      details: false,
    })
  },
  introduce () {
    this.setData({
      commodity: 'com',
      evaluate: 'eva',
      introduce: 'introduce',
      product: false,
      Comment: false,
      details: true,
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