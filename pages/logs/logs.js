// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  // onLoad() {}
  onLoad: function (opts) {
    console.log('lifeCycle: logs onLoad');
    console.log(opts);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      }),
      logColor: opts.color,
    })
  },
  onShow: function () {
    console.log('lifeCycle: logs onShow');
  },
  onHide: function () {
    console.log('lifeCycle: logs onHide');
  },
  onReady: function() {
    console.log('lifeCycle: logs onReady');
  },
  onUnload: function() {
    console.log('lifeCycle: logs onUnload');
  },
  onLogTap: function() {
    // wx.navigateTo({ // 将当前页面Hide起来
    //   url: '../test2/test2',
    // })
    wx.redirectTo({ // 将当前页面清掉
      url: '../test2/test2',
    })
  }
})