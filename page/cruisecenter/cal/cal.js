var myDate = new Date(); //日期对象
var y = myDate.getFullYear(); 
var m = (((myDate.getMonth()+1)+"").length==1)?"0"+(myDate.getMonth()+1):(myDate.getMonth()+1);
var d = (((myDate.getDate())+"").length==1)?"0"+(myDate.getDate()):(myDate.getDate());
var _today = y +"-"+ m +"-"+ d;

var res = [
  {
    "id": 2,
    "datestart": "2016-09-01",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-鹿儿岛-上海"
  },
  {
    "id": 3,
    "datestart": "2016-09-02",
    "cruiseName": "海洋水手号",
    "txtLine": "上海-福冈-济州-上海"
  },
  {
    "id": 4,
    "datestart": "2016-09-02",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-鹿儿岛-上海"
  },
  {
    "id": 5,
    "datestart": "2016-09-03",
    "cruiseName": "歌诗达赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 6,
    "datestart": "2016-09-03",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-釜山-长崎-上海"
  },
  {
    "id": 7,
    "datestart": "2016-09-04",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-上海"
  },
  {
    "id": 8,
    "datestart": "2016-09-05",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 9,
    "datestart": "2016-09-06",
    "cruiseName": "海洋水手号",
    "txtLine": "上海-福冈-福冈-济州-上海"
  },
  {
    "id": 10,
    "datestart": "2016-09-06",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-北九州-济州-上海"
  },
  {
    "id": 11,
    "datestart": "2016-09-07",
    "cruiseName": "歌诗达赛琳娜号",
    "txtLine": "上海-济州-釜山-福冈-上海"
  },
  {
    "id": 12,
    "datestart": "2016-09-07",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-佐世保-上海"
  },
  {
    "id": 13,
    "datestart": "2016-09-08",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-釜山-长崎-上海"
  },
  {
    "id": 14,
    "datestart": "2016-09-10",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-长崎-济州-上海"
  },
  {
    "id": 15,
    "datestart": "2016-09-10",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 16,
    "datestart": "2016-09-11",
    "cruiseName": "海洋水手号",
    "txtLine": "上海-仁川-上海"
  },
  {
    "id": 17,
    "datestart": "2016-09-11",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 18,
    "datestart": "2016-09-12",
    "cruiseName": "歌诗达赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 19,
    "datestart": "2016-09-13",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-长崎-釜山-上海"
  },
  {
    "id": 20,
    "datestart": "2016-09-14",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-福冈-济州-上海"
  },
  {
    "id": 21,
    "datestart": "2016-09-14",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 22,
    "datestart": "2016-09-15",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-长崎-鹿儿岛-上海"
  },
  {
    "id": 23,
    "datestart": "2016-09-16",
    "cruiseName": "歌诗达赛琳娜号",
    "txtLine": "上海-济州-上海"
  },
  {
    "id": 24,
    "datestart": "2016-09-16",
    "cruiseName": "海洋水手号",
    "txtLine": "上海-仁川-上海"
  },
  {
    "id": 25,
    "datestart": "2016-09-18",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 26,
    "datestart": "2016-09-18",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-福冈-上海"
  },
  {
    "id": 27,
    "datestart": "2016-09-19",
    "cruiseName": "歌诗达赛琳娜号",
    "txtLine": "上海-福冈-济州-上海"
  },
  {
    "id": 28,
    "datestart": "2016-09-19",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-鹿儿岛-上海"
  },
  {
    "id": 29,
    "datestart": "2016-09-20",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-上海"
  },
  {
    "id": 30,
    "datestart": "2016-09-21",
    "cruiseName": "辉煌号",
    "txtLine": "上海-佐世保济州-上海"
  },
  {
    "id": 31,
    "datestart": "2016-09-21",
    "cruiseName": "海洋水手号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 32,
    "datestart": "2016-09-22",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 33,
    "datestart": "2016-09-22",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-高知-宫崎-上海"
  },
  {
    "id": 34,
    "datestart": "2016-09-23",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-釜山-福冈-上海"
  },
  {
    "id": 35,
    "datestart": "2016-09-23",
    "cruiseName": "歌诗达赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 36,
    "datestart": "2016-09-24",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-博多-上海"
  },
  {
    "id": 37,
    "datestart": "2016-09-26",
    "cruiseName": "海洋水手号",
    "txtLine": "上海-高知-长崎-釜山-济州-上海"
  },
  {
    "id": 38,
    "datestart": "2016-09-26",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 39,
    "datestart": "2016-09-27",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-熊本-上海"
  },
  {
    "id": 40,
    "datestart": "2016-09-27",
    "cruiseName": "歌诗达赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 41,
    "datestart": "2016-09-28",
    "cruiseName": "歌诗达维多利亚号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 42,
    "datestart": "2016-09-28",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-鹿儿岛-佐世保-济州-上海"
  },
  {
    "id": 43,
    "datestart": "2016-09-29",
    "cruiseName": "千禧年号",
    "txtLine": "上海-境港-金泽-京都-上海"
  },
  {
    "id": 44,
    "datestart": "2016-09-29",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-博多-上海"
  },
  {
    "id": 45,
    "datestart": "2016-09-30",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 65,
    "datestart": "2016-10-01",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-福冈-济州-上海"
  },
  {
    "id": 66,
    "datestart": "2016-10-01",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-熊本-宫崎-上海"
  },
  {
    "id": 67,
    "datestart": "2016-10-02",
    "cruiseName": "维多利亚号",
    "txtLine": "上海-福冈-济州-上海"
  },
  {
    "id": 68,
    "datestart": "2016-10-02",
    "cruiseName": "海洋水手号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 69,
    "datestart": "2016-10-03",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 70,
    "datestart": "2016-10-03",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 71,
    "datestart": "2016-10-04",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 72,
    "datestart": "2016-10-05",
    "cruiseName": "千禧年号",
    "txtLine": "上海-鹿儿岛-济州-上海"
  },
  {
    "id": 73,
    "datestart": "2016-10-05",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 74,
    "datestart": "2016-10-06",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-仁川-上海"
  },
  {
    "id": 75,
    "datestart": "2016-10-06",
    "cruiseName": "维多利亚号",
    "txtLine": "上海-细岛-大板-上海"
  },
  {
    "id": 76,
    "datestart": "2016-10-07",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-福冈-济州-上海"
  },
  {
    "id": 77,
    "datestart": "2016-10-07",
    "cruiseName": "海洋水手号",
    "txtLine": "上海-冲绳-香港"
  },
  {
    "id": 78,
    "datestart": "2016-10-08",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-福冈-济州-上海"
  },
  {
    "id": 79,
    "datestart": "2016-10-08",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 80,
    "datestart": "2016-10-09",
    "cruiseName": "千禧年号",
    "txtLine": "上海-釜山-上海"
  },
  {
    "id": 81,
    "datestart": "2016-10-09",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-仁川-上海"
  },
  {
    "id": 82,
    "datestart": "2016-10-10",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-冲绳-上海"
  },
  {
    "id": 83,
    "datestart": "2016-10-11",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-长崎-鹿儿岛-上海"
  },
  {
    "id": 84,
    "datestart": "2016-10-12",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-上海"
  },
  {
    "id": 85,
    "datestart": "2016-10-12",
    "cruiseName": "维多利亚号",
    "txtLine": "上海-冲绳"
  },
  {
    "id": 86,
    "datestart": "2016-10-13",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-博多-济州-上海"
  },
  {
    "id": 87,
    "datestart": "2016-10-13",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-上海"
  },
  {
    "id": 88,
    "datestart": "2016-10-13",
    "cruiseName": "黄金公主号",
    "txtLine": "基隆-上海-釜山"
  },
  {
    "id": 89,
    "datestart": "2016-10-14",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-釜山-熊本-上海"
  },
  {
    "id": 90,
    "datestart": "2016-10-15",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 91,
    "datestart": "2016-10-15",
    "cruiseName": "钻石公主号",
    "txtLine": "釜山-上海-香港"
  },
  {
    "id": 92,
    "datestart": "2016-10-16",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-佐世保-济州-上海"
  },
  {
    "id": 93,
    "datestart": "2016-10-16",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 94,
    "datestart": "2016-10-17",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 95,
    "datestart": "2016-10-19",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-广岛-高知-上海"
  },
  {
    "id": 96,
    "datestart": "2016-10-19",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 97,
    "datestart": "2016-10-20",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-釜山-上海"
  },
  {
    "id": 98,
    "datestart": "2016-10-20",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-仁川-上海"
  },
  {
    "id": 99,
    "datestart": "2016-10-22",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 100,
    "datestart": "2016-10-23",
    "cruiseName": "千禧年号",
    "txtLine": "上海-冲绳-上海"
  },
  {
    "id": 101,
    "datestart": "2016-10-23",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 102,
    "datestart": "2016-10-24",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-福冈-釜山-上海"
  },
  {
    "id": 103,
    "datestart": "2016-10-24",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 104,
    "datestart": "2016-10-25",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 105,
    "datestart": "2016-10-27",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-福冈-济州-上海"
  },
  {
    "id": 106,
    "datestart": "2016-10-27",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-博多-上海"
  },
  {
    "id": 107,
    "datestart": "2016-10-28",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 108,
    "datestart": "2016-10-29",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-长崎-福冈-上海"
  },
  {
    "id": 109,
    "datestart": "2016-10-29",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 110,
    "datestart": "2016-10-31",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 111,
    "datestart": "2016-10-31",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-博多-上海"
  },
  {
    "id": 128,
    "datestart": "2016-11-01",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-长崎-济州-上海"
  },
  {
    "id": 129,
    "datestart": "2016-11-03",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-釜山-长崎-上海"
  },
  {
    "id": 130,
    "datestart": "2016-11-03",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 131,
    "datestart": "2016-11-04",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 132,
    "datestart": "2016-11-05",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 133,
    "datestart": "2016-11-05",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-福冈-济州-上海"
  },
  {
    "id": 134,
    "datestart": "2016-11-07",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-长崎-鹿儿岛-上海"
  },
  {
    "id": 135,
    "datestart": "2016-11-07",
    "cruiseName": "钻石公主号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 136,
    "datestart": "2016-11-08",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-鹿儿岛-上海"
  },
  {
    "id": 137,
    "datestart": "2016-11-08",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-高知-宫崎-上海"
  },
  {
    "id": 138,
    "datestart": "2016-11-09",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-上海"
  },
  {
    "id": 139,
    "datestart": "2016-11-10",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 140,
    "datestart": "2016-11-12",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 141,
    "datestart": "2016-11-12",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-佐世保-上海"
  },
  {
    "id": 142,
    "datestart": "2016-11-13",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 143,
    "datestart": "2016-11-13",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-福冈-上海"
  },
  {
    "id": 144,
    "datestart": "2016-11-14",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 145,
    "datestart": "2016-11-16",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 146,
    "datestart": "2016-11-16",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-福冈-长崎-济州-上海"
  },
  {
    "id": 147,
    "datestart": "2016-11-17",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-仁川-上海"
  },
  {
    "id": 148,
    "datestart": "2016-11-17",
    "cruiseName": "钻石公主号",
    "txtLine": "上海-济州-釜山-鹿儿岛-上海"
  },
  {
    "id": 149,
    "datestart": "2016-11-18",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-鹿儿岛-上海"
  },
  {
    "id": 150,
    "datestart": "2016-11-19",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-博多-上海"
  },
  {
    "id": 151,
    "datestart": "2016-11-20",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 152,
    "datestart": "2016-11-21",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-福冈-上海"
  },
  {
    "id": 153,
    "datestart": "2016-11-21",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-长崎-鹿儿岛-上海"
  },
  {
    "id": 154,
    "datestart": "2016-11-22",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-上海"
  },
  {
    "id": 155,
    "datestart": "2016-11-24",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-长崎-济州-上海"
  },
  {
    "id": 156,
    "datestart": "2016-11-24",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 157,
    "datestart": "2016-11-25",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-长崎-釜山-上海"
  },
  {
    "id": 158,
    "datestart": "2016-11-25",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 159,
    "datestart": "2016-11-26",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-长崎-济州-上海"
  },
  {
    "id": 160,
    "datestart": "2016-11-28",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 161,
    "datestart": "2016-11-28",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-福冈-济州-上海"
  },
  {
    "id": 162,
    "datestart": "2016-11-29",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-鹿儿岛-上海"
  },
  {
    "id": 163,
    "datestart": "2016-11-30",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-仁川-上海"
  },
  {
    "id": 164,
    "datestart": "2016-11-30",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 191,
    "datestart": "2016-12-02",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 192,
    "datestart": "2016-12-03",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-福冈-济州-上海"
  },
  {
    "id": 193,
    "datestart": "2016-12-03",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-冲绳-上海"
  },
  {
    "id": 194,
    "datestart": "2016-12-04",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-长崎-釜山-上海"
  },
  {
    "id": 195,
    "datestart": "2016-12-04",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-福冈-长崎-上海"
  },
  {
    "id": 196,
    "datestart": "2016-12-06",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 197,
    "datestart": "2016-12-07",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 198,
    "datestart": "2016-12-08",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-博多-上海"
  },
  {
    "id": 199,
    "datestart": "2016-12-09",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 200,
    "datestart": "2016-12-09",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-釜山-长崎-上海"
  },
  {
    "id": 201,
    "datestart": "2016-12-10",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 202,
    "datestart": "2016-12-11",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 203,
    "datestart": "2016-12-12",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-长崎-上海"
  },
  {
    "id": 204,
    "datestart": "2016-12-12",
    "cruiseName": "海洋之梦号",
    "txtLine": "神户-上海-新加坡"
  },
  {
    "id": 205,
    "datestart": "2016-12-13",
    "cruiseName": "海洋之梦号",
    "txtLine": "神户-上海-新加坡"
  },
  {
    "id": 206,
    "datestart": "2016-12-13",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 207,
    "datestart": "2016-12-14",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-上海"
  },
  {
    "id": 208,
    "datestart": "2016-12-14",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-釜山-长崎-上海"
  },
  {
    "id": 209,
    "datestart": "2016-12-15",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 210,
    "datestart": "2016-12-17",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 211,
    "datestart": "2016-12-17",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-冲绳-济州-上海"
  },
  {
    "id": 212,
    "datestart": "2016-12-18",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 213,
    "datestart": "2016-12-19",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-福冈-长崎-上海"
  },
  {
    "id": 214,
    "datestart": "2016-12-19",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 215,
    "datestart": "2016-12-21",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 216,
    "datestart": "2016-12-22",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-福冈-长崎-上海"
  },
  {
    "id": 217,
    "datestart": "2016-12-22",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-冲绳-上海"
  },
  {
    "id": 218,
    "datestart": "2016-12-23",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 219,
    "datestart": "2016-12-24",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-长崎-釜山-上海"
  },
  {
    "id": 220,
    "datestart": "2016-12-25",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 221,
    "datestart": "2016-12-26",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-博多-上海"
  },
  {
    "id": 222,
    "datestart": "2016-12-27",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 223,
    "datestart": "2016-12-27",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-仁川-上海"
  },
  {
    "id": 224,
    "datestart": "2016-12-29",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-釜山-熊本-上海"
  },
  {
    "id": 225,
    "datestart": "2016-12-29",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-仁川-上海"
  },
  {
    "id": 226,
    "datestart": "2016-12-30",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 227,
    "datestart": "2016-12-31",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 228,
    "datestart": "2016-12-31",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-釜山-福冈-上海"
  },
  {
    "id": 380,
    "datestart": "2017-01-02",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-上海"
  },
  {
    "id": 381,
    "datestart": "2017-01-03",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-鹿儿岛-上海"
  },
  {
    "id": 382,
    "datestart": "2017-01-03",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-高知-宫崎-上海"
  },
  {
    "id": 383,
    "datestart": "2017-01-04",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 384,
    "datestart": "2017-01-05",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-佐世保-福冈-上海"
  },
  {
    "id": 385,
    "datestart": "2017-01-05",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 386,
    "datestart": "2017-01-07",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-博多-上海"
  },
  {
    "id": 387,
    "datestart": "2017-01-08",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 388,
    "datestart": "2017-01-08",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-福冈-釜山-上海"
  },
  {
    "id": 389,
    "datestart": "2017-01-10",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-佐世保-上海"
  },
  {
    "id": 390,
    "datestart": "2017-01-10",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-博多-上海"
  },
  {
    "id": 391,
    "datestart": "2017-01-12",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-长崎-鹿儿岛上海"
  },
  {
    "id": 392,
    "datestart": "2017-01-13",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-熊本-上海"
  },
  {
    "id": 393,
    "datestart": "2017-01-14",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-鹿儿岛-福冈-济州-上海"
  },
  {
    "id": 394,
    "datestart": "2017-01-15",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 395,
    "datestart": "2017-01-17",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-釜山-长崎-上海"
  },
  {
    "id": 396,
    "datestart": "2017-01-17",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 397,
    "datestart": "2017-01-19",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 398,
    "datestart": "2017-01-19",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 399,
    "datestart": "2017-01-21",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 400,
    "datestart": "2017-01-22",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-长崎-福冈-上海"
  },
  {
    "id": 401,
    "datestart": "2017-01-23",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-上海"
  },
  {
    "id": 402,
    "datestart": "2017-01-23",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-长崎-博多-上海"
  },
  {
    "id": 403,
    "datestart": "2017-01-24",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-长崎-上海"
  },
  {
    "id": 404,
    "datestart": "2017-01-25",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-釜山-福冈-上海"
  },
  {
    "id": 405,
    "datestart": "2017-01-26",
    "cruiseName": "千禧年号",
    "txtLine": "上海-长崎-上海"
  },
  {
    "id": 406,
    "datestart": "2017-01-26",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-济州-那霸-上海"
  },
  {
    "id": 407,
    "datestart": "2017-01-27",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-长崎-上海"
  },
  {
    "id": 408,
    "datestart": "2017-01-28",
    "cruiseName": "蓝宝石公主号",
    "txtLine": "上海-济州-釜山-博多-上海"
  },
  {
    "id": 409,
    "datestart": "2017-01-28",
    "cruiseName": "天海新世纪号",
    "txtLine": "上海-济州-福冈-上海"
  },
  {
    "id": 410,
    "datestart": "2017-01-30",
    "cruiseName": "歌诗达幸运号",
    "txtLine": "上海-济州-釜山-福冈-上海"
  },
  {
    "id": 411,
    "datestart": "2017-01-31",
    "cruiseName": "赛琳娜号",
    "txtLine": "上海-那霸-鹿儿岛-上海"
  },
  {
    "id": 412,
    "datestart": "2017-01-31",
    "cruiseName": "海洋量子号",
    "txtLine": "上海-长崎-上海"
  }
];

Page({
  data: {
    date:_today,
    default_date:_today
  },
  onLoad: function () {
    var that = this
    /*获取航线*/
    var data = []
    for(var i in res){
        if(res[i].datestart == _today){
            data.push({
                datestart: res[i].datestart,
                cruiseName: res[i].cruiseName,
                txtLine: res[i].txtLine
            });
        }
    }
    that.setData({
        list:data
    })
    
    wx.request({
        url: 'https://service.huiyoulun.com/service/getCalByKey', 
        method: 'POST',
        data: {
            date:_today
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            console.log(res.data)
            that.setData({
                list:res.data
            })
        },
        fail: function(err) {
            console.log(err)
        }
    })
  },
  bindDateChange:function(e){
    this.setData({
      date:e.detail.value
    })
    var that = this
    /*获取航线*/
    var data = []
    for(var i in res){
        if(res[i].datestart == e.detail.value){
            data.push({
                datestart: res[i].datestart,
                cruiseName: res[i].cruiseName,
                txtLine: res[i].txtLine
            });
        }
    }
    that.setData({
        list:data
    })
    /*
    wx.request({
        url: 'https://service.huiyoulun.com/service/getCalByKey', 
        method: 'POST',
        data: {
            date:e.detail.value
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            console.log(res.data)
            that.setData({
                list:res.data
            })
        }
    })*/
  }
})