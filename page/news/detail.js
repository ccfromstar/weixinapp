var WxParse = require('../wxParse/wxParse.js');
var pageData = {},
    type = [
        'view', 'content', 'form', 'interact', 'nav', 'media', 'map', 'canvas'
    ];

pageData.widgetsToggle = function (e) {
    var id = e.currentTarget.id, data = {};
    for (var i = 0, len = type.length; i < len; ++i) {
        //data[type[i] + 'Show'] = false;
    }
    data[id + 'Show'] = !this.data[id + 'Show'];
    this.setData(data);
};

pageData.onLoad = function(options) {
    var that = this
    var id = options.id
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 2000
    })
    wx.request({
        url: 'https://service.huiyoulun.com/service/getNewsById', 
        method: 'POST',
        data: {
           id:id
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            var news = res.data;
            /*日期格式化*/
            for(var i in news){
                var o = news[i].publishAt;
                news[i].publishAt = o.substring(0,10);
            }
            var article = news[0].post;
            article = article.replace(/src="\/upload/g,'src="http://www.cruisesh.com/upload');
            WxParse.wxParse('article', 'html', article, that,5);
            that.setData({
                news:news
            })
            wx.hideToast()
        },
        fail: function(err) {
            console.log(err)
        }
    })
    //设置新闻默认打开状态
    var id = 'view', data = {};
    data[id + 'Show'] = !this.data[id + 'Show'];
    this.setData(data);
}

Page(pageData);