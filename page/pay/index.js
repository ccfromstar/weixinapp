// page/pay/index.js
var myDate = new Date(); //日期对象
var y = myDate.getFullYear(); 
var m = (((myDate.getMonth()+1)+"").length==1)?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1);
var d = (((myDate.getDate())+"").length==1)?"0"+(myDate.getDate()):(myDate.getDate());
var _today = y +"-"+ m +"-"+ d;

var _data = _today;
var _path = '虹桥枢纽到邮轮港(¥35)';

var mobile = '';

Page({
   data: {
    array:["虹桥枢纽到邮轮港(¥35)","邮轮港到虹桥枢纽(¥35)","往返程(¥60)"],
    index:0,
    date:_today,
    default_date:_today,
    isShowToast: false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  weixinpay:function(){
    if(mobile == ""){
     this.setData({  
      count: 1500,  
      toastText: '请填写手机号',  
      isShowToast: true
     });  
     this.showToast();  
     return false
    }
    WeixinPay()
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var array = ["虹桥枢纽到邮轮港(¥35)","邮轮港到虹桥枢纽(¥35)","往返程(¥60)"];
    var i = e.detail.value
    var that = this
    that.setData({
        index:i
    })
    _path = array[i]
  },
  bindDateChange:function(e){
    _data = e.detail.value
    this.setData({
      date:e.detail.value
    })
  },
  bindKeyInput: function(e) {
   mobile = e.detail.value
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
  }
})

function Rnd(upper,lower){
		var a = upper-lower;
		var random = (parseInt)(lower+Math.random()*a);
		return random;
}

function WeixinPay(){
   wx.login({
      success: function(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://service.huiyoulun.com/service/onLogin',
            method: 'POST',
            data: {
              code: res.code
            },
            success: function(res) {
                console.log(res);
                var openid = res.data.openid;
                wx.request({
                    url: 'https://service.huiyoulun.com/service/getPay', 
                    method: 'POST',
                    data: {
                      bookingNo:_today + Rnd(100,999),
                      total_fee:1,
                      openid:openid
                    },
                    header: {
                        'content-type': 'application/json'
                    },
                    success: function(res) {
                        console.log(res);
                        wx.requestPayment({
                          'timeStamp': '1414411784',
                          'nonceStr': 'ibuaiVcKdpRxkhJA',
                          'package': 'prepay_id='+res.data.prepay_id,
                          'signType': 'MD5',
                          'paySign': res.data._paySignjs,
                          'success':function(res){
                              console.log(res);
                              /*存储车票信息*/
                              wx.setStorage({
                                key:"data",
                                data:_data
                              })
                              wx.setStorage({
                                key:"path",
                                data:_path
                              })
                              wx.navigateTo({
                                url: 'result'
                              })
                          },
                          'fail':function(res){
                              console.log('fail:'+JSON.stringify(res));
                          }
                        })
                    },
                    fail: function(err) {
                        console.log(err)
                    }
                })
            },
            fail: function(err) {
                console.log(err)
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
}