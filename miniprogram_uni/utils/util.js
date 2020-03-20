// 在下面设置商户号
const mchid = ''; // 在下面设置密钥
// 特别注意：此项设置应该仅供测试，生产环境下请在后端完成签名，切忌在小程序内暴露商户密钥

const secret = 'sk_test_Iw0PWUCxhxBlsdz3x2NTsVtb00ZiYitB6y';

const getRandomNumber = (minNum = 100000, maxNum = 999999) => parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);

const getSign = obj => {
  /*
   * 签名算法
   * 
   * 由于密钥不应该在小程序内出现，因此生产环境下的小程序不应该包含此参数
   */
  let keys = Object.keys(obj);
  keys.sort();
  let params = [];
  keys.forEach(e => {
    if (obj[e] != null) {
      params.push(e + '=' + obj[e]);
    }
  });
  params.push('key=' + secret);
  let paramStr = params.join('&');

  const md5Util = require("./md5.js");

  let signResult = md5Util.md5(paramStr).toUpperCase();
  return signResult;
};

const getOrderParams = () => {
  /*
   * 用于获取小程序支付的参数
   * 
   * 本函数仅用于【模拟后端】，在生产环境下订单号的生成、签名等过程应当在后端完成，
   * 由后端直接包装好 orderParams 返回并传递给小程序
   * 
   */
  // 支付参数
  const totalFee = 100; // 支付金额，单位为分

  const body = '小程序支付测试'; // 订单标题

  let nonce = getRandomNumber(); // 随机数

  let timestamp = Date.now();
  let outTradeNo = 'TEST-WXA-' + timestamp + '-' + nonce; // 商户端订单号

  let notifyUrl = null; // 异步通知地址

  let attach = null; // 异步通知附加数据

  let paramsObject = {
    mchid,
    total_fee: totalFee,
    out_trade_no: outTradeNo,
    body,
    attach,
    notify_url: notifyUrl,
    nonce
  };
  let sign = getSign(paramsObject);
  paramsObject.sign = sign;
  return paramsObject;
};

module.exports = {
  getOrderParams,
  hex_sha256,
  sendRandom,
  formatTime,
  lvlFromExp,
  cloudRemove,
  removePost,
  giveExp,
  formatTime2,
  updateUserDateRecord,
  searchByTags,
  searchByTagsCom,
  searchByTagsSH
}; //given a list, search all results that have given tags

function searchByTags(oList, tagList) {
  var resList = [];
  var originalList = oList;
  
  if (tagList.includes("")){
	  return oList;
  }
  
  for (var i = 0; i < oList.length; i++) {
    var tmptg = originalList[i].tags;

    for (var j = 0; j < tmptg.length; j++) {
      tmptg[j] = tmptg[j].toLowerCase();
    }

    originalList[i].tags = tmptg;
  }

  var taglen = tagList.length;

  for (var i = 0; i < originalList.length; i++) {
    var count = 0;
    var tmpEntry = originalList[i];

    for (var j = 0; j < taglen; j++) {
      if (tmpEntry.tags.includes(tagList[j])) {
        count++;
      }
    }

    if (count == taglen) {
      //add
      resList.push(tmpEntry);
    }
  }

  return resList;
} //given a list, search all results that have given title, second hand


function searchByTagsSH(originalList, searchName) {
  var resList = [];

  for (var i = 0; i < originalList.length; i++) {
    var tmpEntry = originalList[i];

    if (tmpEntry.name.toLowerCase().includes(searchName.toLowerCase())) {
      resList.push(tmpEntry);
    }
  }

  return resList;
} //given a list, search all results that have given title, community


function searchByTagsCom(originalList, searchName) {
  var resList = [];

  for (var i = 0; i < originalList.length; i++) {
    var tmpEntry = originalList[i];

    if (tmpEntry.detail.toLowerCase().includes(searchName.toLowerCase())) {
      resList.push(tmpEntry);
    }
  }

  return resList;
} //update user's last action date
// actionmode: indicate which record to be updated
//   1: update last post
//   2: update last signup
//   3: update last response


function updateUserDateRecord(actionMode) {
  var that = this;
  var currentUnixTime = Date.parse(new Date()) / 1000;
  var unixTimeStamp = currentUnixTime.toString();
  var currentTimeSet = that.formatTime2(new Date());
  console.log(unixTimeStamp);
  console.log(that.formatTime(new Date(currentUnixTime * 1000)));
  uni.request({
  	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/allaboutactionrec',
  	method: 'POST',
    data: {
	  mode:1,
      openId: getApp().globalData.openId
    },
    success: function (res) {
      if (res.data.Count == 0) {
        //add userinfo into it
        uni.request({
			url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/allaboutactionrec',
			method: 'POST',
          data: {
            mode: 3,
            lastRespon: [currentUnixTime],
            lastSignup: currentUnixTime,
            lastPost: currentUnixTime,
			openId: getApp().globalData.openId
          },
          success: function (res) {
            console.log("added");
            if (actionMode != 3) that.giveExp(500);else that.giveExp(100);
          }
        });
      } else {
        var actionRecords = res.data.Items[0];

        if (actionMode == 1) {
          //update last post
          var recordTimeSet = that.formatTime2(new Date(actionRecords.lastPost * 1000));

          if (currentTimeSet.year > recordTimeSet.year || currentTimeSet.year == recordTimeSet.year && currentTimeSet.month > recordTimeSet.month || currentTimeSet.year == recordTimeSet.year && currentTimeSet.month == recordTimeSet.month && currentTimeSet.day > recordTimeSet.day) {
            uni.request({
              url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/allaboutactionrec',
              method: 'POST',
              data: {
                mode: 2,
                lastRespon: actionRecords.lastRespon,
                lastSignup: actionRecords.lastSignup,
                lastPost: currentUnixTime,
				openId: getApp().globalData.openId
              },
              success: function (res) {
                console.log("updated last post");
                that.giveExp(500);
              }
            });
          } else {
            console.log(currentTimeSet);
            console.log(recordTimeSet);
            console.log(currentUnixTime);
            console.log(actionRecords.lastPost);
            console.log('not a new day');
          }
        } else if (actionMode == 2) {
          //update last Signup
          var recordTimeSet = that.formatTime2(new Date(actionRecords.lastSignup * 1000));

          if (currentTimeSet.year > recordTimeSet.year || currentTimeSet.year == recordTimeSet.year && currentTimeSet.month > recordTimeSet.month || currentTimeSet.year == recordTimeSet.year && currentTimeSet.month == recordTimeSet.month && currentTimeSet.day > recordTimeSet.day) {
            uni.request({
              url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/allaboutactionrec',
              method: 'POST',
              data: {
                mode: 2,
                lastRespon: actionRecords.lastRespon,
                lastSignup: currentUnixTime,
                lastPost: actionRecords.lastPost,
				openId: getApp().globalData.openId
              },
              success: function (res) {
                console.log("updated last Signup");
                that.giveExp(500);
              }
            });
          } else {
            console.log(currentTimeSet);
            console.log(recordTimeSet);
            console.log('not a new day');
          }
        } else if (actionMode == 3) {
          var recordTimeSet = that.formatTime2(new Date(actionRecords.lastRespon[0] * 1000));
          console.log(recordTimeSet);
          console.log(currentTimeSet);

          if (actionRecords.lastRespon.length < 5 || currentTimeSet.year > recordTimeSet.year || currentTimeSet.year == recordTimeSet.year && currentTimeSet.month > recordTimeSet.month || currentTimeSet.year == recordTimeSet.year && currentTimeSet.month == recordTimeSet.month && currentTimeSet.day > recordTimeSet.day) {
            var resRespon = actionRecords.lastRespon;

            if (actionRecords.lastRespon.length > 4) {
              resRespon.shift();
              resRespon.push(currentUnixTime);
            } else {
              resRespon.push(currentUnixTime);
            } //update last response


            uni.request({
              url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/allaboutactionrec',
              method: 'POST',
              data: {
                mode: 2,
                lastRespon: resRespon,
                lastSignup: actionRecords.lastSignup,
                lastPost: actionRecords.lastPost,
				openId: getApp().globalData.openId
              },
              success: function (res) {
                console.log("updated last response");
                that.giveExp(100);
              }
            });
          } else {
            console.log(currentTimeSet.month >= recordTimeSet.month);
            console.log('not a new day');
          }
        }
      }
    }
  });
}
/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2 Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 * Also http://anmar.eu.org/projects/jssha2/
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */


var hexcase = 0;
/* hex output format. 0 - lowercase; 1 - uppercase        */

var b64pad = "";
/* base-64 pad character. "=" for strict RFC compliance   */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */

function hex_sha256(s) {
  return rstr2hex(rstr_sha256(str2rstr_utf8(s)));
}

function b64_sha256(s) {
  return rstr2b64(rstr_sha256(str2rstr_utf8(s)));
}

function any_sha256(s, e) {
  return rstr2any(rstr_sha256(str2rstr_utf8(s)), e);
}

function hex_hmac_sha256(k, d) {
  return rstr2hex(rstr_hmac_sha256(str2rstr_utf8(k), str2rstr_utf8(d)));
}

function b64_hmac_sha256(k, d) {
  return rstr2b64(rstr_hmac_sha256(str2rstr_utf8(k), str2rstr_utf8(d)));
}

function any_hmac_sha256(k, d, e) {
  return rstr2any(rstr_hmac_sha256(str2rstr_utf8(k), str2rstr_utf8(d)), e);
}
/*
 * Calculate the sha256 of a raw string
 */


function rstr_sha256(s) {
  return binb2rstr(binb_sha256(rstr2binb(s), s.length * 8));
}
/*
 * Calculate the HMAC-sha256 of a key and some data (raw strings)
 */


function rstr_hmac_sha256(key, data) {
  var bkey = rstr2binb(key);
  if (bkey.length > 16) bkey = binb_sha256(bkey, key.length * 8);
  var ipad = Array(16),
      opad = Array(16);

  for (var i = 0; i < 16; i++) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = binb_sha256(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
  return binb2rstr(binb_sha256(opad.concat(hash), 512 + 256));
}
/*
 * Convert a raw string to a hex string
 */


function rstr2hex(input) {
  try {
    hexcase;
  } catch (e) {
    hexcase = 0;
  }

  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var output = "";
  var x;

  for (var i = 0; i < input.length; i++) {
    x = input.charCodeAt(i);
    output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
  }

  return output;
}
/*
 * Convert a raw string to a base-64 string
 */


function rstr2b64(input) {
  try {
    b64pad;
  } catch (e) {
    b64pad = '';
  }

  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var output = "";
  var len = input.length;

  for (var i = 0; i < len; i += 3) {
    var triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);

    for (var j = 0; j < 4; j++) {
      if (i * 8 + j * 6 > input.length * 8) output += b64pad;else output += tab.charAt(triplet >>> 6 * (3 - j) & 0x3F);
    }
  }

  return output;
}
/*
 * Convert a raw string to an arbitrary string encoding
 */


function rstr2any(input, encoding) {
  var divisor = encoding.length;
  var remainders = Array();
  var i, q, x, quotient;
  /* Convert to an array of 16-bit big-endian values, forming the dividend */

  var dividend = Array(Math.ceil(input.length / 2));

  for (i = 0; i < dividend.length; i++) {
    dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1);
  }
  /*
   * Repeatedly perform a long division. The binary array forms the dividend,
   * the length of the encoding is the divisor. Once computed, the quotient
   * forms the dividend for the next step. We stop when the dividend is zero.
   * All remainders are stored for later use.
   */


  while (dividend.length > 0) {
    quotient = Array();
    x = 0;

    for (i = 0; i < dividend.length; i++) {
      x = (x << 16) + dividend[i];
      q = Math.floor(x / divisor);
      x -= q * divisor;
      if (quotient.length > 0 || q > 0) quotient[quotient.length] = q;
    }

    remainders[remainders.length] = x;
    dividend = quotient;
  }
  /* Convert the remainders to the output string */


  var output = "";

  for (i = remainders.length - 1; i >= 0; i--) output += encoding.charAt(remainders[i]);
  /* Append leading zero equivalents */


  var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));

  for (i = output.length; i < full_length; i++) output = encoding[0] + output;

  return output;
}
/*
 * Encode a string as utf-8.
 * For efficiency, this assumes the input is valid utf-16.
 */


function str2rstr_utf8(input) {
  var output = "";
  var i = -1;
  var x, y;

  while (++i < input.length) {
    /* Decode utf-16 surrogate pairs */
    x = input.charCodeAt(i);
    y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;

    if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
      x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
      i++;
    }
    /* Encode output as utf-8 */


    if (x <= 0x7F) output += String.fromCharCode(x);else if (x <= 0x7FF) output += String.fromCharCode(0xC0 | x >>> 6 & 0x1F, 0x80 | x & 0x3F);else if (x <= 0xFFFF) output += String.fromCharCode(0xE0 | x >>> 12 & 0x0F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);else if (x <= 0x1FFFFF) output += String.fromCharCode(0xF0 | x >>> 18 & 0x07, 0x80 | x >>> 12 & 0x3F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
  }

  return output;
}
/*
 * Encode a string as utf-16
 */


function str2rstr_utf16le(input) {
  var output = "";

  for (var i = 0; i < input.length; i++) output += String.fromCharCode(input.charCodeAt(i) & 0xFF, input.charCodeAt(i) >>> 8 & 0xFF);

  return output;
}

function str2rstr_utf16be(input) {
  var output = "";

  for (var i = 0; i < input.length; i++) output += String.fromCharCode(input.charCodeAt(i) >>> 8 & 0xFF, input.charCodeAt(i) & 0xFF);

  return output;
}
/*
 * Convert a raw string to an array of big-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function rstr2binb(input) {
  var output = Array(input.length >> 2);

  for (var i = 0; i < output.length; i++) output[i] = 0;

  for (var i = 0; i < input.length * 8; i += 8) output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << 24 - i % 32;

  return output;
}
/*
 * Convert an array of big-endian words to a string
 */


function binb2rstr(input) {
  var output = "";

  for (var i = 0; i < input.length * 32; i += 8) output += String.fromCharCode(input[i >> 5] >>> 24 - i % 32 & 0xFF);

  return output;
}
/*
 * Main sha256 function, with its support functions
 */


function sha256_S(X, n) {
  return X >>> n | X << 32 - n;
}

function sha256_R(X, n) {
  return X >>> n;
}

function sha256_Ch(x, y, z) {
  return x & y ^ ~x & z;
}

function sha256_Maj(x, y, z) {
  return x & y ^ x & z ^ y & z;
}

function sha256_Sigma0256(x) {
  return sha256_S(x, 2) ^ sha256_S(x, 13) ^ sha256_S(x, 22);
}

function sha256_Sigma1256(x) {
  return sha256_S(x, 6) ^ sha256_S(x, 11) ^ sha256_S(x, 25);
}

function sha256_Gamma0256(x) {
  return sha256_S(x, 7) ^ sha256_S(x, 18) ^ sha256_R(x, 3);
}

function sha256_Gamma1256(x) {
  return sha256_S(x, 17) ^ sha256_S(x, 19) ^ sha256_R(x, 10);
}

function sha256_Sigma0512(x) {
  return sha256_S(x, 28) ^ sha256_S(x, 34) ^ sha256_S(x, 39);
}

function sha256_Sigma1512(x) {
  return sha256_S(x, 14) ^ sha256_S(x, 18) ^ sha256_S(x, 41);
}

function sha256_Gamma0512(x) {
  return sha256_S(x, 1) ^ sha256_S(x, 8) ^ sha256_R(x, 7);
}

function sha256_Gamma1512(x) {
  return sha256_S(x, 19) ^ sha256_S(x, 61) ^ sha256_R(x, 6);
}

var sha256_K = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998);

function binb_sha256(m, l) {
  var HASH = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
  var W = new Array(64);
  var a, b, c, d, e, f, g, h;
  var i, j, T1, T2;
  /* append padding */

  m[l >> 5] |= 0x80 << 24 - l % 32;
  m[(l + 64 >> 9 << 4) + 15] = l;

  for (i = 0; i < m.length; i += 16) {
    a = HASH[0];
    b = HASH[1];
    c = HASH[2];
    d = HASH[3];
    e = HASH[4];
    f = HASH[5];
    g = HASH[6];
    h = HASH[7];

    for (j = 0; j < 64; j++) {
      if (j < 16) W[j] = m[j + i];else W[j] = safe_add(safe_add(safe_add(sha256_Gamma1256(W[j - 2]), W[j - 7]), sha256_Gamma0256(W[j - 15])), W[j - 16]);
      T1 = safe_add(safe_add(safe_add(safe_add(h, sha256_Sigma1256(e)), sha256_Ch(e, f, g)), sha256_K[j]), W[j]);
      T2 = safe_add(sha256_Sigma0256(a), sha256_Maj(a, b, c));
      h = g;
      g = f;
      f = e;
      e = safe_add(d, T1);
      d = c;
      c = b;
      b = a;
      a = safe_add(T1, T2);
    }

    HASH[0] = safe_add(a, HASH[0]);
    HASH[1] = safe_add(b, HASH[1]);
    HASH[2] = safe_add(c, HASH[2]);
    HASH[3] = safe_add(d, HASH[3]);
    HASH[4] = safe_add(e, HASH[4]);
    HASH[5] = safe_add(f, HASH[5]);
    HASH[6] = safe_add(g, HASH[6]);
    HASH[7] = safe_add(h, HASH[7]);
  }

  return HASH;
}

function safe_add(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xFFFF;
} //send message to dial Dial


function sendRandom(dial) {
  var currentUnixTime = Date.parse(new Date()) / 1000;
  var unixTimeStamp = currentUnixTime.toString();
  var randomNum = Math.floor(Math.random() * 1000000);
  console.log(randomNum);
  var dialS = dial;
  var signsms = this.hex_sha256("appkey=9af7c74b29d7d97aec74d151c240f943&random=" + randomNum + "&time=" + unixTimeStamp + "&mobile=" + dialS);
  console.log(signsms);
  uni.request({
    url: 'https://yun.tim.qq.com/v5/tlssmssvr/sendsms?sdkappid=1400232308&random=' + randomNum,
    method: "POST",
    data: {
      "ext": "",
      "extend": "",
      "params": [randomNum],
      "sig": signsms,
      "sign": 'Squirrel Town',
      "tel": {
        "mobile": dialS,
        "nationcode": '1'
      },
      "time": currentUnixTime,
      "tpl_id": 376617
    },
    success: function (res) {
      console.log(res);
    }
  });
}

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return [month, day, year].map(formatNumber).join('/');
}

function formatTime2(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return {
    year: year,
    month: month,
    day: day
  };
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

function lvlFromExp(exp) {
  var remExp = exp;
  var nextLvl = 1000;
  var resLvl = 1;

  while (remExp >= nextLvl) {
    remExp -= nextLvl;
    nextLvl = nextLvl * 1.5;
    resLvl++;
  }

  return {
    resLvl: resLvl,
    expToNext: nextLvl,
    remExp: remExp
  };
}

function cloudRemove(strList) {
  wx.cloud.deleteFile({
    fileList: strList,
    success: res => {
      // handle success
      console.log(res);
    },
    fail: err => {
      // handle error
      console.log("failed");
      console.log(res);
    }
  });
}

function removePost(commuListId, tmpXiaoneiId, imgs) {
  var that = this;
  wx.cloud.callFunction({
    name: 'deleteWithId',
    data: {
      dbname: 'xiaonei',
      id: tmpXiaoneiId
    },
    success: function (res) {
      wx.cloud.callFunction({
        name: 'deleteWithId',
        data: {
          dbname: 'commuList',
          id: commuListId
        },
        success: function (res) {
          console.log("Succc");
          that.cloudRemove(imgs);
        },
        fail: function (res) {
          console.log("disanceng");
          console.log(res);
        }
      });
    },
    fail: function (res) {
      console.log(res);
    }
  });
}

function giveExp(amount) {
  uni.request({
  	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser',
  	method: 'POST',
	data:{
		openId:getApp().globalData.openId
	},
    success: function (res) {
	  console.log(res);
      if (res.data.length == 0) {
        wx.cloud.callFunction({
          name: 'applyExp',
          data: {
            mode: 2,
            amount: amount,
			openId:getApp().globalData.openId
          },
          success: function (res) {
            console.log("added");
          },
          fail: function (res) {
            console.log("failed to add");
            console.log(res);
          }
        });
      } else {
       uni.request({
       	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/applyexp',
       	method: 'POST',
          data: {
            mode: 1,
            amount: amount,
			openId:getApp().globalData.openId
          },
          success: function (res) {
            console.log("updated");
          },
          fail: function (res) {
            console.log("failed to update");
            console.log(res);
          }
        });
      }
    }
  });
} //pay with paypal, return a redirect url to paypal experience

/*
* item format:
*"items": [
              {
                "name": "hat",
                "description": "Brown hat.",
                "quantity": "5",
                "price": "5",
                "tax": "0.01",
                "sku": "1",
                "currency": "USD"
              },

* shipping address example:
"shipping_address": {
              "recipient_name": "boss Zhao",
              "line1": "645 jsway ave",
              "line2": "???",
              "city": "Columbus",
              "country_code": "US",
              "postal_code": "43214",
              "phone": "011862212345678",
              "state": "OH"
            }
*/


function pplPay(accToken, itemList, shipping, discount, invoicNum) {
  //access token
  var tkn = 'Bearer ' + accToken; //total

  var subT = 0.00;
  var total = 0.00;
  var totalTax = 0.00; //

  for (var i = 0; i < itemList.length; i++) {
    var quanti = parseFloat(itemList[i].quantity).toFixed(0);
    var price = parseFloat(itemList[i].price).toFixed(2);
    var tax = parseFloat(itemList[i].price).toFixed(2);
    subT += quanti * price;
    totalTax += tax;
  }

  total = subT + parseFloat(shipping).toFixed(0);
  wx.request({
    //test link, change later
    url: 'https://api.sandbox.paypal.com/v1/payments/payment',
    header: {
      'Content-Type': 'application/json',
      'Authorization': tkn
    },
    method: "POST",
    data: {
      "intent": "sale",
      "payer": {
        "payment_method": "paypal"
      },
      "transactions": [{
        "amount": {
          "total": total.toString(),
          "currency": "USD",
          "details": {
            "subtotal": subtotal.toString(),
            "tax": totalTax.toString(),
            "shipping": shipping.toString(),
            "discount": discount.toString()
          }
        },
        "description": "测试的松鼠小镇paypal支付.",
        //what is this
        "custom": "EBAY_EMS_90048630024435",
        "invoice_number": invoicNum.toString(),
        "payment_options": {
          "allowed_payment_method": "INSTANT_FUNDING_SOURCE"
        },
        //what is this
        "soft_descriptor": "ECHI5786786",
        "item_list": {
          "items": itemList
        }
      }],
      "note_to_payer": "Contact us for any questions on your order.",
      "redirect_urls": {
        //change later
        "return_url": "https://example.com/return",
        "cancel_url": "https://example.com/cancel"
      }
    },
    success: function (res) {
      console.log(res);
      console.log(res.data.links[1].href);
      app.globalData.payLink = res.data.links[1].href; //return res.data.links[1].href;

      wx.navigateTo({
        url: '../testPage/testThird'
      });
    }
  });
}