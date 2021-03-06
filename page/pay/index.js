// page/pay/index.js
var myDate = new Date(); //日期对象
var y = myDate.getFullYear(); 
var m = (((myDate.getMonth()+1)+"").length==1)?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1);
var d = (((myDate.getDate())+"").length==1)?"0"+(myDate.getDate()):(myDate.getDate());
var _today = y +"-"+ m +"-"+ d;

var _data = _today;

var mobile = '';
var name = '';
var num = 0;
var arrP = [];
var arrL = [];
var arrProduct = [];
var unitprice = 35;
var line = '';
var product = '';

Page({
   data: {
    index:0,
    indexYL:0,
    date:_today,
    default_date:_today,
    isShowToast: false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var arr1 = []
    var arr2 = []
    var that = this
    wx.request({
        url: 'https://service.huiyoulun.com/service/getCal', 
        method: 'POST',
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            var d = res.data
            for(var i in d){
              arr1.push(d[i].datestart+" "+d[i].cruiseName)
              arrL.push(d[i].datestart+" "+d[i].cruiseName)
            }           
            line = arrL[0]
            that.setData({  
              arrayYL:arr1
            })
            wx.request({
                url: 'https://service.huiyoulun.com/service/getTT', 
                method: 'POST',
                header: {
                    'content-type': 'application/json'
                },
                success: function(res) {
                    var d = res.data
                    for(var i in d){
                      arr2.push(d[i].name+" ¥"+d[i].price+" (原价¥"+d[i].original_price+")")
                      arrProduct.push(d[i].name+" ¥"+d[i].price+" (原价¥"+d[i].original_price+")")
                      arrP.push(d[i].price);
                    }     
                    product = arrProduct[0]      
                    that.setData({  
                      array:arr2
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
    if(name == ""){
      this.setData({  
        count: 1500,  
        toastText: '请填写姓名',  
        isShowToast: true
      });  
      this.showToast();  
      return false
    }else if(mobile == ""){
      this.setData({  
        count: 1500,  
        toastText: '请填写手机号',  
        isShowToast: true
      });  
      this.showToast();  
      return false
    }else if(num == "" || num == "0"){
      this.setData({  
        count: 1500,  
        toastText: '请填写大于0的人数',  
        isShowToast: true
      });  
      this.showToast();  
      return false
    }
    WeixinPay()
  },
  bindPickerChange: function(e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var i = e.detail.value
    var that = this
    that.setData({
        index:i
    })
    unitprice = arrP[i]
    product = arrProduct[i]
  },
  bindPickerChangeYL: function(e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var i = e.detail.value
    var that = this
    that.setData({
        indexYL:i
    })
    line = arrL[i]
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
  bindKeyInputName: function(e) {
   name = e.detail.value
  },
  bindKeyInputNum: function(e) {
   num = e.detail.value
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
                //console.log(unitprice);
                //console.log(num);
                var openid = res.data.openid;
                wx.request({
                    url: 'https://service.huiyoulun.com/service/getPay', 
                    method: 'POST',
                    data: {
                      bookingNo:_today + Rnd(100,999),
                      //total_fee:num,
                      total_fee:unitprice*num*100,
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
                              //生成购票记录
                              wx.request({
                                  url: 'https://service.huiyoulun.com/service/insertTTBooking', 
                                  method: 'POST',
                                  data: {
                                    name:name,
                                    mobile:mobile,
                                    num:num,
                                    line:line,
                                    product:product,
                                    price:unitprice*num
                                  },
                                  header: {
                                      'content-type': 'application/json'
                                  },
                                  success: function(res) {
                                      
                                  },
                                  fail: function(err) {
                                      console.log(err)
                                  }
                              })
                              /*
                              //存储车票信息
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
                              })*/
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