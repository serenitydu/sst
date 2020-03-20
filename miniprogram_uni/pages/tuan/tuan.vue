<template>
<view class="tuanPage">
  <scroll-view class="scrollpage1" scroll-y :style="'height: ' + height + 'px; '" :scroll-into-view="toView">

    <view class="page_intend">
      <view class="AVcontainer">
        <image :src="avtUrl" class="authorimg"></image>
        <view class="AVcontainer1">
          <view>{{author}}</view>
          <view class="date">{{date}}</view>
        </view>
      </view>
      <!--图片-->
      <view class="loopads" :style="'width: ' + width + 'px; height: ' + loopht + 'px; position:relative; top:20rpx;'">
        <swiper class="swiper" autoplay="true" interval="5000" duration="1000" :style="'width: ' + width + 'px; height: ' + loopht + 'px;'">  
          <block v-for="(item, index) in coll.img" :key="index">  
            <swiper-item>  
              <image :src="item" mode="aspectFill" :style="'width: ' + (width*0.94) + 'px; height: ' + (loopht*0.94) + 'px; border-radius: 15rpx;'"></image>
            </swiper-item>  
          </block>  
        </swiper>
      </view>

      <view :style="'width: ' + width + '; height: ' + bothht + 'px;'">
        <view class="titleAndPrice">
          <view class="sectitle">
            ${{coll.price}}
          </view>
          <view class="title">{{coll.name}}</view>
        </view>
        <view class="layer" style="width:100%; height:3%; background-color:#f7f7f7"></view>
        <view class="des">
          {{coll.description}}
        </view>

        <view class="viewBorder" style="position:flex; width:100%; height:50rpx;">
          <view>
            <image src="../../static/icons/view.png" mode="aspectFill" class="tag_icon"></image>
          </view>
          <view class="text_skewing">100</view>
        </view>

        <view class="layer" style="position:relative; top: 25rpx;width:100%; height:3%; background-color:#f7f7f7"></view>
      </view>
    </view>
  </scroll-view>

  <view class="atc">
    <view class="img" :style="'background:' + (cost!=0?'#FFD161':'#E7E7E7') + ';'">
      <image src="../../static/icons/trolley.png" style="width:60rpx; height:60rpx;"></image>
    </view>
    <button class="adtocart" hover-class="btn_hover">加入购物车</button>
  </view>

</view>
</template>

<script>
var comid = "";
var winwd = 0;
var winht = 0;

export default {
  data() {
    return {
      avtUrl: "",
      author: "",
      date: "",
      width: 0,
      height: 0,
      loopht: 0,
      desht: 0,
      name: "",
      des: "",
      price: 0,
      currency: "¥",
      loopimgs1: [],
      sliderht: 0,
      botht: 0,
      botbutwd: 0,
      botbutht: 0,
      botbutedge: 0,
      bothht: "",
      coll: ""
    };
  },

  components: {},
  props: {},

  onLoad() {
    var that = this;
    this.updateTuanInfoFromDB();
    var tmp = []; //取得全局App({..})实例

    comid = getApp().globalData.var1; //取得全局变量需要的值

    console.log('comdi' + comid);
    wx.getSystemInfo({
      success: function (res) {
        winwd = res.windowWidth;
        winht = res.windowHeight;
      }
    });
    this.setData({
      width: winwd,
      height: winht,
      loopht: winht * 0.4,
      desht: winwd * 0.28,
      sliderht: winht - winwd * 0.4 * 0.4,
      bothht: winht * 0.6,
      botht: winwd * 0.4 * 0.4,
      botbutwd: winwd * 0.4,
      botbutht: winwd * 0.4 * 0.4,
      botbutedge: winwd * 0.05
    });
    var iiii = comid;
    uni.request({
    	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
    	method:'POST',
      // 传给云函数的参数
      data: {
        target: 'secondHand',
        iddd: iiii,
        mode: 1
      },
      success: function (res) {
        console.log(res.data.Items[0]);
        that.setData({
          coll: res.data.Items[0],
          date: res.data.Items[0].date,
          avtUrl: res.data.Items[0].authorAva,
          author: res.data.Items[0].authorName
        });
      }
    });
  },

  methods: {
    updateTuanInfoFromDB() {
      var tmpInfo;
	  tmpInfo=getApp().globalData.itemInfo;
      this.setData({
        name: tmpInfo.name,
        des: tmpInfo.description,
        price: tmpInfo.price,
        loopimgs1: tmpInfo.img,
        currency: tmpInfo.currency
      });
    },

    buynow() {
      wx.navigateTo({
        url: '../payment/payment'
      });
    },

    atc() {},

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
@import "./tuan.css";
</style>