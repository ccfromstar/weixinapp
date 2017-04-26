// page/cruisecenter/leader/send.js
var arr = [];
var line = '';
var userid = '';
Page({
  data:{
    index:0
  },
  onLoad:function(options){
    var that = this
    //获取领队编号
    wx.getStorage({
      key: 'hasUserInfo',
      success: function(res) {
          that.setData({  
              hasUserInfo:res.data
          })
          if(res.data){
              wx.getStorage({
                key: 'userId',
                success: function(res) {
                     userid = res.data
                    
                } 
              })
          }
      } 
    })
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
        url: 'https://service.huiyoulun.com/service/getSend', 
        method: 'POST',
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            var d = res.data
            for(var i in d){
              arr.push(d[i].name+",人数:"+d[i].num+",天数:"+d[i].numday+",价格:"+d[i].price+",备注:"+d[i].remark)
            }           
            line = arr[0]
            that.setData({  
              array:arr
            })
        },
        fail: function(err) {
            console.log(err)
        }
    })
  },
  bindPickerChange: function(e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var i = e.detail.value
    var that = this
    that.setData({
        index:i
    })
    line = arr[i]
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
  send: function() {
    var that = this
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
        url: 'https://service.huiyoulun.com/service/insertApply', 
        method: 'POST',
        header: {
            'content-type': 'application/json'
        },
        data: {
            line: line,
            no: userid
        },
        success: function(res) {
            var d = res.data
            if(d == "200"){
              that.setData({  
                count: 2500,  
                toastText: '提交成功，之后会有短信通知您是否申请成功',  
                isShowToast: true
              });  
              that.showToast();
            }else if(d == "500"){
              that.setData({  
                count: 2500,  
                toastText: '对不起，您已经申请过这个团次了',  
                isShowToast: true
              });  
              that.showToast();
            }else if(d == "300"){
              that.setData({  
                count: 2500,  
                toastText: '对不起，该团次申请人数已满',  
                isShowToast: true
              });  
              that.showToast();
            }
        },
        fail: function(err) {
            console.log(err)
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
  }
})