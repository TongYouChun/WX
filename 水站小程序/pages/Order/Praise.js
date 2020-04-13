// pages/Order/Praise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Anonymous:{
      img: '/resources/DormantName1.png',
      anonymous:true
    },
    //星星
    Store1: {
      img1: '/resources/Star2.png',
      img2: '/resources/Star2.png',
      img3: '/resources/Star2.png',
      img4: '/resources/Star2.png',
      img5: '/resources/Star2.png',
      text:''
    },
    Store2: {
      img1: '/resources/Star2.png',
      img2: '/resources/Star2.png',
      img3: '/resources/Star2.png',
      img4: '/resources/Star2.png',
      img5: '/resources/Star2.png',
      text:''
    },
    Store3: {
      img1:'/resources/Star2.png',
      img2: '/resources/Star2.png',
      img3: '/resources/Star2.png',
      img4: '/resources/Star2.png',
      img5: '/resources/Star2.png'
    }
  },
  //照相
  // api chooseImage success
  getLocalImage () {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        // 这里无论用户是从相册选择还是直接用相机拍摄，拍摄完成后的图片临时路径都会传递进来
        app.startOperating("保存中")
        var filePath = res.tempFilePaths[0];
        var session_key = wx.getStorageSync('session_key');
        // 这里顺道展示一下如何将上传上来的文件返回给后端，就是调用wx.uploadFile函数
        wx.uploadFile({
          url: app.globalData.url + '/home/upload/uploadFile/session_key/' + session_key,
          filePath: filePath,
          name: 'file',
          success: function (res) {
            app.stopOperating();
            // 下面的处理其实是跟我自己的业务逻辑有关
            var data = JSON.parse(res.data);
            if (parseInt(data.status) === 1) {
              app.showSuccess('文件保存成功');
            } else {
              app.showError("文件保存失败");
            }
          }
        })
      },
      fail: function (error) {
        console.error("调用本地相册文件时出错")
        console.warn(error)
      },
      complete: function () {

      }
    })
  },
  getLocalVideo () {
    var that = this;
    var session_key = wx.getStorageSync('session_key');
    wx.chooseVideo({
      maxDuration: 10,
      success: function (res1) {
        app.startOperating("上传中")
        // 这个就是最终拍摄视频的临时路径了
        var tempFilePath = res1.tempFilePath;
      },
      fail: function () {
        console.error("获取本地视频时出错");
      }
    })
  },
  //星星
  store1(e) {
    if (e.currentTarget.dataset.gid == 1) {
      this.setData({
        Store1: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star2.png',
          img3: '/resources/Star2.png',
          img4: '/resources/Star2.png',
          img5: '/resources/Star2.png',
          text: '非常差'
        }
      })
    } else if (e.currentTarget.dataset.gid == 2) {
      this.setData({
        Store1: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star1.png',
          img3: '/resources/Star2.png',
          img4: '/resources/Star2.png',
          img5: '/resources/Star2.png',
          text: '差'
        }
      })
    } else if (e.currentTarget.dataset.gid == 3) {
      this.setData({
        Store1: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star1.png',
          img3: '/resources/Star1.png',
          img4: '/resources/Star2.png',
          img5: '/resources/Star2.png',
          text: '一般'
        }
      })
    } else if (e.currentTarget.dataset.gid == 4) {
      this.setData({
        Store1: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star1.png',
          img3: '/resources/Star1.png',
          img4: '/resources/Star1.png',
          img5: '/resources/Star2.png',
          text: '好'
        }
      })
    } else if (e.currentTarget.dataset.gid == 5) {
      this.setData({
        Store1: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star1.png',
          img3: '/resources/Star1.png',
          img4: '/resources/Star1.png',
          img5: '/resources/Star1.png',
          text: '非常好'
        }
      })
    }
  },
  store2(e) {
    if (e.currentTarget.dataset.gid == 1) {
      this.setData({
        Store2: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star2.png',
          img3: '/resources/Star2.png',
          img4: '/resources/Star2.png',
          img5: '/resources/Star2.png',
          text: '非常差'
        }
      })
    } else if (e.currentTarget.dataset.gid == 2) {
      this.setData({
        Store2: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star1.png',
          img3: '/resources/Star2.png',
          img4: '/resources/Star2.png',
          img5: '/resources/Star2.png',
          text: '差'
        }
      })
    } else if (e.currentTarget.dataset.gid == 3) {
      this.setData({
        Store2: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star1.png',
          img3: '/resources/Star1.png',
          img4: '/resources/Star2.png',
          img5: '/resources/Star2.png',
          text: '一般'
        }
      })
    } else if (e.currentTarget.dataset.gid == 4) {
      this.setData({
        Store2: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star1.png',
          img3: '/resources/Star1.png',
          img4: '/resources/Star1.png',
          img5: '/resources/Star2.png',
          text: '好'
        }
      })
    } else if (e.currentTarget.dataset.gid == 5) {
      this.setData({
        Store2: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star1.png',
          img3: '/resources/Star1.png',
          img4: '/resources/Star1.png',
          img5: '/resources/Star1.png',
          text: '非常好'
        }
      })
    }
  },
  store3 (e) {
    if (e.currentTarget.dataset.gid == 1) {
      this.setData({
        Store3: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star2.png',
          img3: '/resources/Star2.png',
          img4: '/resources/Star2.png',
          img5: '/resources/Star2.png'
        }
      })
    } else if (e.currentTarget.dataset.gid == 2) {
      this.setData({
        Store3: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star1.png',
          img3: '/resources/Star2.png',
          img4: '/resources/Star2.png',
          img5: '/resources/Star2.png'
        }
      })
    } else if (e.currentTarget.dataset.gid == 3) {
      this.setData({
        Store3: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star1.png',
          img3: '/resources/Star1.png',
          img4: '/resources/Star2.png',
          img5: '/resources/Star2.png'
        }
      })
    } else if (e.currentTarget.dataset.gid == 4) {
      this.setData({
        Store3: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star1.png',
          img3: '/resources/Star1.png',
          img4: '/resources/Star1.png',
          img5: '/resources/Star2.png'
        }
      })
    } else if (e.currentTarget.dataset.gid == 5) {
      this.setData({
        Store3: {
          img1: '/resources/Star1.png',
          img2: '/resources/Star1.png',
          img3: '/resources/Star1.png',
          img4: '/resources/Star1.png',
          img5: '/resources/Star1.png',
        }
      })
    }
  },
  Anonymous () {
    if(this.data.Anonymous.anonymous){
      this.setData({
          Anonymous: {
            img: '/resources/DormantName.png',
            anonymous: false
          }
      })
    }else{
      this.setData({
        Anonymous: {
          img: '/resources/DormantName1.png',
          anonymous: true
        }
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