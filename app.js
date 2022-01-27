// app.js
App({
  // onLaunch()
  onLaunch: function (opts) {
    // console.log('lifeCycle: app onLuanch');
    // console.log(opts);
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  // onShow: function () {
  //   console.log('lifeCycle: app onShow');
  // },
  // onHide: function () {
  //   console.log('lifeCycle: app onHide');
  // },
  // onReady: function() {
  //   console.log('lifeCycle: app onReady');
  // },
  // onUnload: function() {
  //   console.log('lifeCycle: app onUnload');
  // },
  // onLoad: function() {
  //   console.log('lifeCycle: app onLoad');
  // }
})
