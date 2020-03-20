<template>
<view>
<view class="test1" @tap="btap">测试payment</view>
<input placeholder="输入地址" @input="bindKeyInput" class="input"></input>
<view class="test2" @tap="mapTap">测试地图</view>
<view class="inputDisp">路径长度：{{dist}}   路径时间：{{dur}}   路径起点：{{start}} 路径终点：{{end}}</view>
<view class="test3" @tap="testRemove">测试删除图片</view>
</view>
</template>

<script>
//测试用页面
wx.cloud.init({
  traceUser: true,
  env: 'tempsqu-ennf2'
});
var util = require("../../utils/util.js");

export default {
  data() {
    return {
      dest: "",
      start: "",
      end: "",
      dist: "",
      dur: ""
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(util);
    console.log(util.formatTime2(new Date()));
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    btap: function (e) {
      //util.sendRandom("6143165220");
      //this.ppl(); 
      //this.getCredential();
      //pull user's posts
      wx.cloud.callFunction({
        name: 'managePost',
        data: {
          mode: 2,
          dbname: 'commuList'
        },
        success: function (res) {
          console.log(res);
        },
        fail: function (res) {
          console.log(res);
        }
      });
    },
    bindKeyInput: function (e) {
      this.setData({
        dest: e.detail.value
      });
    },
    mapTap: function (e) {
      var that = this;
      wx.request({
        url: 'https://maps.googleapis.com/maps/api/directions/json?origin=645 Jasonway Ave&destination=' + this.dest + '&key=AIzaSyBN4EcKh9xONylRy2pWlCRhtW4LBK5Voh0',
        success: function (res) {
          console.log(res.data.routes[0].legs[0]);
          that.setData({
            start: res.data.routes[0].legs[0].start_address,
            end: res.data.routes[0].legs[0].end_address,
            dist: res.data.routes[0].legs[0].distance.text,
            dur: res.data.routes[0].legs[0].duration.text
          });
        }
      });
    },
    getCredential: function () {
      wx.request({
        url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
        header: {
          'Accept': 'application/json',
          'Accept-Language': 'en_US',
          'ARV7xeYoeL8VHdLVvy7opowqLakr511XC6wkm6QvaQt7TJjEMzbPNffwdcMkPmbR9KxjU-hs6c06wjkX': 'EFRlwR-qe68pptB_NOHMU2_Q7gfSnTDaSwKPI8a_v-jn8a6iDr7rbDp_E6vFJEF5IHUHkVfSVyb96OwP',
          'grant_type': 'client_credentials'
        },
        success: function (res) {
          console.log(res);
        },
        fail: function (res) {
          console.log(res);
        }
      });
    },
    //test paypal request

    /*
    "name": "hat",
                    "description": "Brown hat.",
                    "quantity": "5",
                    "price": "5",
                    "tax": "0.01",
                    "sku": "1",
                    "currency": "USD"
    */
    ppl: function () {// pplPay: function (accToken, itemList, shipping, discount, invoicNum) {
    },
    testRemove: function () {
      var actionMode = 3; //util.giveExp(2000)

      util.removePost('890198e15d3d365504a826541eda2c74'); //util.updateUserDateRecord(actionMode);
    },
    //pay with paypal, return a redirect url to paypal experience

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
    pplPay: function (accToken, itemList, shipping, discount, invoicNum) {
      //access token
      var tkn = 'Bearer ' + accToken; //total

      var subT = 0.00;
      var total = 0.00;
      var totalTax = 0.00; //

      for (var i = 0; i < itemList.length; i++) {
        var quanti = parseFloat(itemList[i].quantity);
        var price = parseFloat(itemList[i].price);
        var tax = parseFloat(itemList[i].price);
        subT += quanti * price;
        totalTax += tax;
      }

      total = subT + parseFloat(shipping) + totalTax - parseFloat(parseFloat(discount).toFixed(2));
      total = parseFloat(total.toFixed(2));
      subT = parseFloat(subT.toFixed(2));
      totalTax = parseFloat(totalTax.toFixed(2));
      console.log(subT + "   " + total + "  " + totalTax);
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
                "subtotal": subT.toString(),
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
          getApp().globalData.payLink = res.data.links[1].href; //return res.data.links[1].href;

          wx.navigateTo({
            url: '../testPage/testThird'
          });
        }
      });
    },
    setData: function (obj, callback) {
      let that = this;
      let keys = [];
      let val, data;
      Object.keys(obj).forEach(function (key) {
        keys = key.split('.');
        val = obj[key];
        data = that.$data;
        keys.forEach(function (key2, index) {
          if (index + 1 == keys.length) {
            that.$set(data, key2, val);
          } else {
            if (!data[key2]) {
              that.$set(data, key2, {});
            }
          }

          data = data[key2];
        });
      });
      callback && callback();
    }
  }
};
</script>
<style>
@import "./test.css";
</style>