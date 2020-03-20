<template>
<view>
<view class="testBut" @tap="scanC">ssss</view>
<canvas style="width: 200px; height: 200px;" canvas-id="myQrcode"></canvas>
</view>
</template>

<script>
// pages/testPage/test2.js
import drawQrcode from "../../utils/weapp.qrcode.min";

export default {
  data() {
    return {};
  },

  components: {},
  props: {},

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    drawQrcode({
      width: 200,
      height: 200,
      canvasId: 'myQrcode',
      text: '松鼠小镇测试生成二维码'
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {},

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
    scanC: function () {
      wx.scanCode({
        success: function (res) {
          console.log(res); //output string result

          console.log(res.result);
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
@import "./test2.css";
</style>