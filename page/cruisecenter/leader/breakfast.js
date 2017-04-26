// page/cruisecenter/leader/breakfast.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    wx.getStorage({
      key: 'leaderimg',
      success: function(res) {
          var d = res.data;
          var arr1 = d.split(';');
          that.setData({  
              img:arr1
          })
      } 
    })
    var that = this
    wx.getStorage({
      key: 'userId',
      success: function(res) {
          var id = res.data;
          wx.request({
                url: 'https://service.huiyoulun.com/service/getLogById', 
                method: 'POST',
                data: {
                    id:id
                },
                header: {
                    'content-type': 'application/json'
                },
                success: function(res1) {
                    var d = res1.data
                    that.setData({  
                        log:d
                    })
                },
                fail: function(err) {
                    console.log(err)
                }
          })
      } 
    })
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
  },
  showToast: function () {  
    var _this = this;  
    // toast时间  
    _this.data.count = parseInt(_this.data.count) ? parseInt(_this.data.count) : 3000;  
    // 显示toast  
    _this.setData({  
      isShowToast: true,  
    });  
    // 定时器关闭  
    setTimeout(function () {  
      _this.setData({  
        isShowToast: false  
      });  
    }, _this.data.count);  
  },
  getLunch:function(e){
    var name = e.currentTarget.dataset.name;
    var that = this
    wx.getStorage({
      key: 'userId',
      success: function(res) {
          var id = res.data;
          wx.request({
                url: 'https://service.huiyoulun.com/service/insertLeaderService', 
                method: 'POST',
                data: {
                    id:id,
                    name:name
                },
                header: {
                    'content-type': 'application/json'
                },
                success: function(res1) {
                    var d = res1.data
                    if(Number(d) == 200){
                        wx.showToast({
                          title: '领取成功',
                          icon: 'success',
                          duration: 2000
                        })
                        //更新记录
                        wx.request({
                              url: 'https://service.huiyoulun.com/service/getLogById', 
                              method: 'POST',
                              data: {
                                  id:id
                              },
                              header: {
                                  'content-type': 'application/json'
                              },
                              success: function(res1) {
                                  var d = res1.data
                                  that.setData({  
                                      log:d
                                  })
                              },
                              fail: function(err) {
                                  console.log(err)
                              }
                        })
                    }else{
                        that.setData({  
                          count: 1500,  
                          toastText: '您今天已领取，不能重复领取',  
                          isShowToast: true
                        });  
                        that.showToast();
                    }
                },
                fail: function(err) {
                    console.log(err)
                }
          })
      } 
    })
  },
})