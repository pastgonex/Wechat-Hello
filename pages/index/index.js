// index.js

const { raceData } = require("./raceData")

// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World from Ever Ni',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    // 默认值
    // 拷贝过来的好处是， 可以使用调试工具来修改了_(:з」∠)_
    setting: {
      skew: 0,
      rotate: 0,
      showLocation: false,
      showScale: false,
      subKey: '',
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    },
    location: {
      latitude: 29.756825521115363,
      longitude: 121.87222114786053,
    },
    scale: 19,
    markers: [
      {
        iconPath: "../../resources/car.png",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50,
      }, {
        iconPath: "../../resources/car.png",
        id: 1,
        latitude: 23.099994,
        longitude: 114.324520,
        width: 50,
        height: 50
      }, {
        iconPath: "../../resources/car.png",
        id: 2,
        latitude: 29.756825521115363,
        longitude: 121.87222114786053,
        width: 20,
        height: 20
      },
    ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      // url: '../logs/logs?color=skyblue'
      url: '../logs/logs'
    })
    // wx.redirectTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad() {
    console.log(raceData)
    // console.log('lifeCycle: index onLoad');
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onBtnTap: function () {
    this.setData({
      motto: 'button clicked'
    })
  },
  //   onShow: function () {
  //     console.log('lifeCycle: index onShow');
  //   },
  //   onHide: function () {
  //     console.log('lifeCycle: index onHide');
  //   },

  pathIndex: 0,
  translateMarker: function(ctx) {
    this.pathIndex++
    // console.log(this.pathIndex)
    if (this.pathIndex >= raceData.path.length) {
      return 
    }
    ctx.translateMarker({
      markerId: 2,
      destination: {
        latitude: raceData.path[this.pathIndex].lat,
        longitude: raceData.path[this.pathIndex].lng,
      },
      duration: 100,
      success: () => this.translateMarker(ctx),
    })
  },
  onReady: function () {
    // console.log('lifeCycle: index onReady');
    const ctx = wx.createMapContext('map', this)
    this.translateMarker(ctx)
  },
  //   onUnload: function () {
  //     console.log('lifeCycle: index onUnload');
  //   }
})
