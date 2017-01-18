var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
    array:["天海新世纪号","歌诗达邮轮•大西洋号","歌诗达邮轮•幸运号","歌诗达邮轮•维多利亚号","歌诗达邮轮•赛琳娜号","海洋量子号","海洋水手号","蓝宝石公主号"],
    index:0
  },
  onLoad: function () {
      var that = this
      wx.request({
        url: 'https://service.huiyoulun.com/service/getNoteByName', 
        method: 'POST',
        data: {
           name:"天海新世纪号"
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            console.log(res.data)
            var article = res.data[0].post;
            WxParse.wxParse('article', 'html', article, that,5);
            wx.hideToast()
        },
        fail: function(err) {
            console.log(err)
        }
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var array = ["天海新世纪号","歌诗达邮轮•大西洋号","歌诗达邮轮•幸运号","歌诗达邮轮•维多利亚号","歌诗达邮轮•赛琳娜号","海洋量子号","海洋水手号","蓝宝石公主号"];
    var i = e.detail.value
    var that = this
    that.setData({
        index:i
    })
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 2000
    })
    wx.request({
        url: 'https://service.huiyoulun.com/service/getNoteByName', 
        method: 'POST',
        data: {
           name:array[i]
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            console.log(res.data)
            var article = res.data[0].post;
            WxParse.wxParse('article', 'html', article, that,5);
            wx.hideToast()
        },
        fail: function(err) {
            console.log(err)
        }
    })
  }
})