var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
  },
  onLoad: function () {
    var that = this;
    wx.request({
        url: 'https://service.huiyoulun.com/service/getStaticpageById', 
        method: 'POST',
        data: {
            'id':13
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            console.log(res.data[0].post)
            var article = res.data[0].post;
            //var article = '<h1>123</h1>';
            WxParse.wxParse('article', 'html', article, that,5);
        }
    })
  }
})

