var pageData = {}
/*
var res = [
  {
    "id": 1934,
    "startDate": "2017-01-10",
    "title": "1月10日蓝宝石公主号5晚6天日韩游",
    "productfeature": "公主邮轮，尊享公主礼遇！英式下午茶，世界领导人晚宴，海上小火锅。公主邮轮带您游遍日韩，超值价位，赶快抢购！",
    "startLocation": "上海",
    "price": 1799,
    "cruiseArea": "日韩",
    "img":"http://7xs3pn.com1.z0.glb.clouddn.com/o_1aqdljvac102k1sarn7411ovov5e.jpg"
  },
  {
    "id": 1935,
    "startDate": "2017-01-13",
    "title": "1月13日海洋量子号4晚5天日本游",
    "productfeature": "1月份唯一特价，抢到就是赚到，熊本部长等着您！\r\n星海传奇，声韵奥德赛，19个国际餐厅，超大免税店，让您满载而归！",
    "startLocation": "上海",
    "price": 3288,
    "cruiseArea": "日本",
    "img":"http://7xs3pn.com1.z0.glb.clouddn.com/o_1aqe2p3bsk1k1t19v0sfpj10jsc.jpg"
  },
  {
    "id": 1937,
    "startDate": "2017-01-06",
    "title": "1月6日新世纪号4晚5天日本游",
    "productfeature": "天海邮轮，与快乐同行，海上微信，让您沟通无忧，饕餮美食，尊享假期！",
    "startLocation": "上海",
    "price": 1799,
    "cruiseArea": "日本",
    "img":"http://7xs3pn.com1.z0.glb.clouddn.com/o_1b19597k713171vm2187o1fbs1v5ec.png"
  },
  {
    "id": 1938,
    "startDate": "2017-02-04",
    "title": "2月4日海洋量子号5晚6天日本游",
    "productfeature": "错峰出行，纯日航线，疯狂买买买！全亚洲最大、最新、最好玩的海洋量子号，为数不多的纯日航线，带上孩子和爱人，一起纵情碧海蓝天!",
    "startLocation": "上海",
    "price": 5199,
    "cruiseArea": "日本",
    "img":"http://7xs3pn.com1.z0.glb.clouddn.com/o_1aqe2p3bsk1k1t19v0sfpj10jsc.jpg"
  },
  {
    "id": 1939,
    "startDate": "2017-02-09",
    "title": "2月9日海洋量子号4晚5天日本游",
    "productfeature": "冬日好去处，长崎泡温泉，全新岸上游，品质有保证！全新重金打造的海洋量子号，一天来自未来的邮轮，值得您和家人度过完美的假期！",
    "startLocation": "上海",
    "price": 3088,
    "cruiseArea": "日本",
    "img":"http://7xs3pn.com1.z0.glb.clouddn.com/o_1aqe2p3bsk1k1t19v0sfpj10jsc.jpg"
  },
  {
    "id": 1940,
    "startDate": "2017-02-23",
    "title": "2月23日海洋量子号4晚5天韩国游",
    "productfeature": "超值性价比，量子伴您行！首尔乐天免税店，超大店面，超全商品，超低价格，不买都不行！\r\n北极星，甲板跳伞，海上碰碰车，最新科技打造来自未来的邮轮—海洋量子号！",
    "startLocation": "上海",
    "price": 3099,
    "cruiseArea": "韩国",
    "img":"http://7xs3pn.com1.z0.glb.clouddn.com/o_1aqe2p3bsk1k1t19v0sfpj10jsc.jpg"
  }
];

pageData.data = {
    items:res
} 
Page(pageData)
*/
Page({
  data: {
    
  },
  onLoad: function () {
    var that = this
    wx.request({
        url: 'https://service.huiyoulun.com/service/getProduct', 
        method: 'POST',
        data: {
           
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            //console.log(res.data)
            var d = res.data;
            for(var i in d){
              var t = d[i].title;
              /*
              if(t.indexOf("量子") != -1){
                  d[i].img = "http://7xs3pn.com1.z0.glb.clouddn.com/o_1aqe2p3bsk1k1t19v0sfpj10jsc.jpg";
              }else if(t.indexOf("蓝宝石") != -1){
                  d[i].img = "http://7xs3pn.com1.z0.glb.clouddn.com/o_1aqdljvac102k1sarn7411ovov5e.jpg";
              }else if(t.indexOf("新世纪") != -1){
                  d[i].img = "http://7xs3pn.com1.z0.glb.clouddn.com/o_1b19597k713171vm2187o1fbs1v5ec.png";
              }else if(t.indexOf("大西洋") != -1){
                  d[i].img = "http://7xs3pn.com1.z0.glb.clouddn.com/o_1aqdnjfk91ve12s21adv1an4qeqc.jpg";
              }else if(t.indexOf("喜悦") != -1){
                  d[i].img = "http://7xs3pn.com1.z0.glb.clouddn.com/o_1atqje9ocsuedpp3pk10hfvdc.jpg";
              }else if(t.indexOf("处女") != -1){
                  d[i].img = "http://oh4xjldea.bkt.clouddn.com/o_1b667prm967nsok10pj14d2ijta.jpg/imptrip_img";
              }else if(t.indexOf("水手") != -1){
                  d[i].img = "http://7xs3pn.com1.z0.glb.clouddn.com/o_1aqdqa44i1ugng1l1801nk5rcpc.jpg";
              }*/
                                if(t.indexOf('水手') != -1){
									d[i].img = 'http://oo15kg1a4.bkt.clouddn.com/o_1aqdqa44i1ugng1l1801nk5rcpc.jpg';
								}else if(t.indexOf('蓝宝石') != -1){
									d[i].img = 'http://oo15kg1a4.bkt.clouddn.com/o_1aqdljvac102k1sarn7411ovov5e.jpg';
								}else if(t.indexOf('量子') != -1){
									d[i].img = 'http://oo15kg1a4.bkt.clouddn.com/o_1aqe2p3bsk1k1t19v0sfpj10jsc.jpg';
								}else if(t.indexOf('新世纪') != -1){
									d[i].img = 'http://oo15kg1a4.bkt.clouddn.com/o_1b19597k713171vm2187o1fbs1v5ec.png';
								}else if(t.indexOf('大西洋') != -1){
									d[i].img = 'http://oo15kg1a4.bkt.clouddn.com/o_1aqdnjfk91ve12s21adv1an4qeqc.jpg';
								}else if(t.indexOf('喜悦') != -1){
                                    d[i].img = 'http://oo15kg1a4.bkt.clouddn.com/o_1atqje9ocsuedpp3pk10hfvdc.jpg';
                                }else if(t.indexOf('处女') != -1){
                                    d[i].img = 'http://oo15kg1a4.bkt.clouddn.com/imptrip_img.jpg';
                                }	
            }
            that.setData({
                items:d
            })
        },
        fail: function(err) {
            console.log(err)
        }
    })
  }
})