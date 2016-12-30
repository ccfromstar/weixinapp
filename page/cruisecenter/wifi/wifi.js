var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
  },
  onLoad: function () {
    wx.request({
        url: 'http://www.cruisesh.com/static/getByName', //仅为示例，并非真实的接口地址
        data: {
            name: 'WIFI租赁'
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            console.log(res.data)
            var article = res.data;
            var that = this;
            WxParse.wxParse('article', 'html', article, that,5);
        }
    })
  }
})

