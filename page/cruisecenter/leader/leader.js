var leaderno = ''
var myDate = new Date(); //日期对象
myDate.setDate(myDate.getDate()+2);
var y = myDate.getFullYear(); 
var m = (((myDate.getMonth()+1)+"").length==1)?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1);
var d = (((myDate.getDate())+"").length==1)?"0"+(myDate.getDate()):(myDate.getDate());
var _today = y +"-"+ m +"-"+ d;

var _data = _today;

var re = /^1\d{10}$/; 

var mobile = '';
var name = '';
var num = 0;
var arrP = [];
var arrL = [];
var arrProduct = [];
var unitprice = 30;
var line = '';
var product = '';
var clause = ''; //购票条款
var date1 = _today;
var date2 = '';

var app = getApp()
Page({
  data: {
    hasUserInfo: false,
    index:0,
    indexYL:0,
    date:_today,
    default_date:_today,
    isShowToast: false,
    showReturn: false,
    date1:_today,
    date2:'',
    default_date:_today
  },
  onLoad:function(options){
    var that = this
    wx.getStorage({
      key: 'hasUserInfo',
      success: function(res) {
          that.setData({  
              hasUserInfo:res.data
          })
          if(res.data){
              wx.getStorage({
                key: 'userName',
                success: function(res) {
                    that.setData({  
                        userName:res.data
                    })
                } 
              })
          }
      } 
    })
    leaderno = ''
    // 页面初始化 options为页面跳转所带来的参数
    var arr1 = []
    var arr2 = []
    wx.request({
        url: 'https://service.huiyoulun.com/service/getSHship', 
        method: 'POST',
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            var d = res.data
            for(var i in d){
              arr1.push(d[i].cname+" "+d[i].sname)
              arrL.push(d[i].cname+" "+d[i].sname)
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
                      arr2.push(d[i].name+" (结算价¥"+d[i].leader_price+")")
                      arrProduct.push(d[i].name+" ¥"+d[i].original_price)
                      arrP.push(d[i].leader_price);
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
  checkboxChange: function(e) {
    clause = e.detail.value
  },
  weixinpay_leader:function(){
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
    }else if(!re.test(mobile)){
      this.setData({  
        count: 1500,  
        toastText: '手机号格式错误',  
        isShowToast: true
      });  
      this.showToast();  
      return false
    }else if(num == "" || num == "0" || num != "1"){
      this.setData({  
        count: 1500,  
        toastText: '领队预订人数只能填写1人',  
        isShowToast: true
      });  
      this.showToast();  
      return false
    }else if(clause != "1"){
      this.setData({  
        count: 1500,  
        toastText: '请勾选同意购票条款',  
        isShowToast: true
      });  
      this.showToast();  
      return false
    }
    WeixinPay_leader()
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
    }else if(clause != "1"){
      this.setData({  
        count: 1500,  
        toastText: '请勾选同意购票条款',  
        isShowToast: true
      });  
      this.showToast();  
      return false
    }else if(!re.test(mobile)){
      this.setData({  
        count: 1500,  
        toastText: '手机号格式错误',  
        isShowToast: true
      });  
      this.showToast();  
      return false
    }
    WeixinPay()
  },
  bindDateChange1:function(e){
    this.setData({
      date1:e.detail.value
    })
    date1 = e.detail.value
  },
  bindDateChange2:function(e){
    this.setData({
      date2:e.detail.value
    })
    date2 = e.detail.value
  },
  bindPickerChange: function(e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var i = e.detail.value
    var that = this
    that.setData({
        index:i
    })
    if(i > 5){
      //往返程
      that.setData({
        showReturn:true,
        date2:_today
      })
    }else{
      //单程
      that.setData({
        showReturn:false,
        date2:''
      })
    }
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
  getUserInfo: function () {
    var that = this

    if (that.hasUserInfo === false) {
      wx.login({
        success: _getUserInfo
      })
    } else {
      _getUserInfo()
    }

    function _getUserInfo() {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
          that.update()
        }
      })
    }
  },
  login: function () {
    var that = this
    if(leaderno == ''){
      this.setData({  
        count: 1500,  
        toastText: '请输入领队证号',  
        isShowToast: true
      });  
      this.showToast();  
      return false
    }
    wx.request({
        url: 'https://service.huiyoulun.com/service/leaderlogin', 
        method: 'POST',
        data: {
            leaderno:leaderno
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            var d = res.data
            if(!d[0]){
              that.setData({  
                count: 1500,  
                toastText: '您输入的领队证号有误',  
                isShowToast: true
              });  
              that.showToast();
              return false
            }       
            that.setData({
              hasUserInfo: true,
              userName: d[0].name,
              userId: d[0].id
            })
            wx.setStorage({
              key:"hasUserInfo",
              data:true
            })
            wx.setStorage({
              key:"userName",
              data:d[0].name
            })
            wx.setStorage({
              key:"userId",
              data:d[0].id
            })
        },
        fail: function(err) {
            console.log(err)
        }
    })
  },
  clear: function () {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  },
  bindKeyInputNo: function(e) {
   leaderno = e.detail.value
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

function WeixinPay_leader(){
    //生成购票记录
    /*
                              wx.request({
                                  url: 'https://service.huiyoulun.com/service/insertLeaderBooking', 
                                  method: 'POST',
                                  data: {
                                    name:name,
                                    mobile:mobile,
                                    num:num,
                                    line:line,
                                    product:product,
                                    price:unitprice*num,
                                    date1:date1,
                                    date2:date2
                                  },
                                  header: {
                                      'content-type': 'application/json'
                                  },
                                  success: function(res) {
                                      wx.showToast({
                                        title: '预订成功',
                                        icon: 'success',
                                        duration: 2000
                                      })
                                  },
                                  fail: function(err) {
                                      console.log(err)
                                  }
                              })
    */
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
                              //生成购票记录
                              wx.request({
                                  url: 'https://service.huiyoulun.com/service/insertLeaderBooking', 
                                  method: 'POST',
                                  data: {
                                    name:name,
                                    mobile:mobile,
                                    num:num,
                                    line:line,
                                    product:product,
                                    price:unitprice*num,
                                    date1:date1,
                                    date2:date2
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
                                    price:unitprice*num,
                                    date1:date1,
                                    date2:date2
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
