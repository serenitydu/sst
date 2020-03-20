<template>
<scroll-view scroll-y class="bkg">
  <block v-for="(item, index) in lists" :key="index">  
    <view class="box" :data-ind="index" @tap="clickAt">
      <image :src="item.authorImg" class="authImg" mode="aspectFill"></image>
      <view class="userNm">{{item.author}}</view>
      <view class="reply">{{item.text}}</view>
      <view class="comdate">{{item.time}}</view>
    </view>
  </block>  
</scroll-view>
</template>

<script>

export default {
  data() {
    return {
      lists: []
    };
  },

  components: {},
  props: {},

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this;
    uni.request({
    	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
    	method:'POST',
      data: {
        mode: 4,
        target: 'ats',
		openId: getApp().globalData.openId
      },
      success: function (res) {
        console.log(res);

        if (typeof res.data.Items[0] == 'undefined') {} else {
          that.setData({
            lists: res.data.Items
          });
        }
      }
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    var that = this;
    uni.request({
    	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
    	method:'POST',
      data: {
        mode: 4,
        target: 'ats',
		openId: getApp().globalData.openId
      },
      success: function (res) {
        console.log(res);

        if (typeof res.data.Items[0] == 'undefined') {} else {
          that.setData({
            lists: res.data.Items
          });
        }
      }
    });
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {},

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {},
  methods: {
    clickAt: function (e) {
      var that = this;
      console.log(this.lists[e.currentTarget.dataset.ind]._id);
      uni.request({
      	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
      	method:'POST',
        data: {
          mode: 5,
          target: 'ats',
          doc1: that.lists[e.currentTarget.dataset.ind]._id
        },
        success: function (res) {
          console.log(that.lists[e.currentTarget.dataset.ind].commuid); //取得全局App({..})实例

          getApp().globalData.var1 = that.lists[e.currentTarget.dataset.ind].comuId; //取得全局变量需要的值

          wx.navigateTo({
            url: '../xiaonei/xiaonei'
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
@import "./newAt.css";
</style>