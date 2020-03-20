<template>
<view class="bkg">
  <canvas style="width: 200px; height: 200px;" canvas-id="myQrcode"></canvas>
</view>
</template>

<script>
// pages/showCP/showCP.js
import drawQrcode from "../../utils/weapp.qrcode.min";

export default {
  data() {
    return {
      cpId: 'AAAAAAAAAAAA',
      sId: 'FFFFFFFFF'
    };
  },

  components: {},
  props: {},

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this;
    drawQrcode({
      width: 200,
      height: 200,
      canvasId: 'myQrcode',
      text: that.cpId + that.sId,
      background: '#ffea76'
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
@import "./showCP.css";
</style>