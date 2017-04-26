// page/pay/result.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    wx.getStorage({
      key: 'data',
      success: function(res) {
          console.log(res.data)
          that.setData({
            data:res.data
          })
      } 
    })
    wx.getStorage({
      key: 'path',
      success: function(res) {
          console.log(res.data)
          that.setData({
            path:res.data
          })
      } 
    })
    //设置产品基本情况默认打开状态
    var id = 'view', data = {};
    data[id + 'Show'] = !this.data[id + 'Show'];
    this.setData(data);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})