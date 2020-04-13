//index.js
//获取应用实例
const app = getApp()

Page({
  HomePage() {
    wx.switchTab({
      url: '/pages/HomePage/HomePage',
    })
    console.log(1)
  }
})
