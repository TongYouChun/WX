// pages/My/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xinxi:{
      Consignee: '张三',
      contact:18755668934,
      section:['合肥市','肥东','不知道哪路',],
      detailed:'合肥市肥东不知道哪路小区'
    },
    zhengze: false,
    address:true,
    AddTo: false,
    Edit:false,
    xiaoshi: true,
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    region: ['', '', ''],
    customItem: '全部'
  },
  formSubmit (e) {
    var haoma = /^1[3456789]\d{9}$/;
    var xingming = /^[A-Za-z\u4e00-\u9fa5]+$/;
    var diqu = /^.+$/;
    var xiangxi = /^.+$/;
    if (!xingming.test(e.detail.value.Consignee)) {
      wx.showToast({
        title: "收货人只能输入中文和字母",
        icon: 'none'
      })
      this.setData({
        zhengze: false,
      })
    } else if (!haoma.test(e.detail.value.contact)) {
      wx.showToast({
        title: "手机号码格式不正确",
        icon: 'none'
      })
      this.setData({
        zhengze: false,
      })
    } else if (!diqu.test(e.detail.value.section[2])){
      wx.showToast({
        title: '请选择城市/区县信息',
        icon: 'none'
      })
      this.setData({
        zhengze: false,
      })
    } else if (!xiangxi.test(e.detail.value.detailed)){
      wx.showToast({
        title: '详情地区不能为空',
        icon: 'none'
      })
      this.setData({
        zhengze: false,
      })
    } else {
      this.setData({
        zhengze: true,
        xinxi: {
          Consignee: e.detail.value.Consignee,
          contact: e.detail.value.contact,
          section: e.detail.value.section,
          detailed: e.detail.value.detailed
        },
      })
    }
  },
  bindRegionChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value,
      xiaoshi:false
    })
  },
  // 编辑
  edit (){
    this.setData({
      address: false,
      Edit: true,
    })
  },
  modify () {
    if (this.data.zhengze){
      this.setData({
        address: true,
        Edit: false,
      })
    }
  },
  delete () {
    this.setData({
    address: true,
    Edit: false,
    })
  },
  // 微信添加
  WeChat () {
    wx.getSetting({//先获取用户当前的设置
      success(res) {
        if (!res.authSetting['scope.address']) {
          wx.authorize({
            scope: 'scope.address',
            success(res) {
              console.log(res.errMsg);//用户授权后执行方法
            },
            fail(res) {
              //用户拒绝授权后执行
            }
          })
        }
      }
    })
    var that = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.address']) {
          wx.openSetting({
          })
        } else {
          //打开选择地址
          wx.chooseAddress({
            success: function (res) {
              that.setData({
                address: res,
                noAddress: false
              });
            }
          })
        }
      },
      fail(res) {
        console.log('调用失败')
      }

    })
    console.log(2)
  },
  // 手动添加
  Manual (){
    this.setData({
      address:false,
      AddTo:true
    })
  },
  AddTo (){
    if (this.data.zhengze) {
      this.setData({
        address: true,
        Edit: false,
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