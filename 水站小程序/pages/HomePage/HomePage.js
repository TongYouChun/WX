// pages/HomePage/HomePage.js
Page({
  onShareAppMessage() {
  },
  /**
   * 页面的初始数据
   */
  data: {
    province: '',
    background: [
      'http://clubimg.club.vmall.com/data/attachment/forum/201812/21/215626ci9yvgddppv53slw.jpg', 
      'http://pic1.win4000.com/wallpaper/a/55349fb752abc.jpg',
       'http://pic1.win4000.com/wallpaper/8/589c2f0f014ba.jpg'
       ],


    ok:'e',
    text:'txt',
    txt:false,
    img:'/resources/Varieties.png',
    springWater:'te',
    YiBao:'',
    IceSpring: '',
    Wahaha:'',
    Nestle:'',
    Centenary:'',
    Watsons:'',
    Bit:'',
    ShuiYiFang:'',
    service:'te',
    SalesVolume:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  ThisWeek(e){
    if (e.currentTarget.dataset.gid == 1){
      this.setData({
        service: 'te',
        SalesVolume: ''
      })
    } else if (e.currentTarget.dataset.gid == 2) {
      this.setData({
        service: '',
        SalesVolume: 'te'
      })
    }
  },
  details () {
    wx.navigateTo({
      url: '/pages/details/details',
    })
  },
  Varieties () {
    if(this.data.txt == false){
      this.setData({
        text: 'text',
        img: '/resources/Varieties(1).png',
        txt: true
      })
    }else{
      this.setData({
        text: 'txt',
        txt: false,
        img: '/resources/Varieties.png'
      })
    }
      
  },
  Li (e){
      if (e.currentTarget.dataset.gid ==1) {
        this.setData({
          springWater: 'te',
          YiBao: '',
          IceSpring: '',
          Wahaha: '',
          Nestle: '',
          Centenary: '',
          Watsons: '',
          Bit: '',
          ShuiYiFang: ''
        })
      } else if (e.currentTarget.dataset.gid == 2) {
        this.setData({
          springWater: '',
          YiBao: 'te',
          IceSpring: '',
          Wahaha: '',
          Nestle: '',
          Centenary: '',
          Watsons: '',
          Bit: '',
          ShuiYiFang: ''
        })
      } else if (e.currentTarget.dataset.gid == 3) {
        this.setData({
          springWater: '',
          YiBao: '',
          IceSpring: 'te',
          Wahaha: '',
          Nestle: '',
          Centenary: '',
          Watsons: '',
          Bit: '',
          ShuiYiFang: ''
        })
    } else if (e.currentTarget.dataset.gid == 4) {
      this.setData({
        springWater: '',
        YiBao: '',
        IceSpring: '',
        Wahaha: 'te',
        Nestle: '',
        Centenary: '',
        Watsons: '',
        Bit: '',
        ShuiYiFang: ''
      })
    } else if (e.currentTarget.dataset.gid == 5) {
      this.setData({
        springWater: '',
        YiBao: '',
        IceSpring: '',
        Wahaha: '',
        Nestle: 'te',
        Centenary: '',
        Watsons: '',
        Bit: '',
        ShuiYiFang: ''
      })
    } else if (e.currentTarget.dataset.gid == 6) {
      this.setData({
        springWater: '',
        YiBao: '',
        IceSpring: '',
        Wahaha: '',
        Nestle: '',
        Centenary: 'te',
        Watsons: '',
        Bit: '',
        ShuiYiFang: ''
      })
    } else if (e.currentTarget.dataset.gid == 7) {
      this.setData({
        springWater: '',
        YiBao: '',
        IceSpring: '',
        Wahaha: '',
        Nestle: '',
        Centenary: '',
        Watsons: 'te',
        Bit: '',
        ShuiYiFang: ''
      })
    } else if (e.currentTarget.dataset.gid == 8) {
      this.setData({
        springWater: '',
        YiBao: '',
        IceSpring: '',
        Wahaha: '',
        Nestle: '',
        Centenary: '',
        Watsons: '',
        Bit: 'te',
        ShuiYiFang: ''
      })
    } else if (e.currentTarget.dataset.gid == 9) {
      this.setData({
        springWater: '',
        YiBao: '',
        IceSpring: '',
        Wahaha: '',
        Nestle: '',
        Centenary: '',
        Watsons: '',
        Bit: '',
        ShuiYiFang: 'te'
      })
    } 
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onLoad: function () {
    var that = this

    /**获取当前坐标 */
    wx.getLocation({
      success: function (res) {
        that.getDistrict(res.latitude, res.longitude)
        // console.log(res.latitude, res.longitude)
      }
    })
  },
  getDistrict(latitude, longitude) {
    var _this = this;
    let keys = 'MKPBZ-7IL64-5SLUC-DEDS7-SDPDT-HIBJ2';
    wx.request({
      url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${keys}`,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        // console.log(res)
        let province = res.data.result.address_component.district;
        _this.setData({
          province: province,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.request({
      url: ' http://149.129.79.215:8082/ncs-dd/',
      success (res) {
      }
    })
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