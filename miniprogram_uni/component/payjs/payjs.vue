<template>
<view>
<view class="bg" @tap.native.stop="onTapCancel"></view>
<view v-if="showPayModal" class="modal">
  <view class="content">支付需要跳转到第三方平台进行</view>
  <navigator class="button" target="miniProgram" app-id="wx959c8c1fb2d877b5" path="pages/pay" :extra-data="params" :version="envVersion" @success="navigateSuccess" @fail="navigateFail">确认跳转</navigator>
</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      showPayModal: false,
      paying: false
    };
  },

  components: {},
  props: {
    params: {
      // 支付订单参数
      type: Object,
      default: () => null
    },
    envVersion: {
      type: String,
      default: "release"
    }
  },

  /** 
   * 组件生命周期
   */
  lifetimes: {
    attached() {
      this.setPaying(false);

      if (!this.params) {
        console.error('[PAYJS] 跳转到 PAYJS 小程序失败 - 错误：没有传递跳转参数', r);
        this.$emit('fail', {
          error: true,
          navigateSuccess: false
        });
        this.$emit('complete');
      } // 监听 app.onShow 事件


      wx.onAppShow(appOptions => {
        if (!this.paying) return; // 恢复支付前状态

        this.setPaying(false);

        if (appOptions.scene === 1038 && appOptions.referrerInfo.appId === 'wx959c8c1fb2d877b5') {
          // 来源于 PAYJS 小程序返回
          console.log('[PAYJS] 确认来源于 PAYJS 回调返回');
          let extraData = appOptions.referrerInfo.extraData;

          if (extraData.success) {
            this.$emit('success', extraData);
            this.$emit('complete');
          } else {
            this.$emit('fail', {
              navigateSuccess: true,
              info: extraData
            });
            this.$emit('complete');
          }
        }
      }); // 尝试直接跳转到 PAYJS 发起小程序支付

      wx.navigateToMiniProgram({
        appId: 'wx959c8c1fb2d877b5',
        path: 'pages/pays',
        extraData: this.params,
        envVersion: this.envVersion,
        success: r => {
          console.log('[PAYJS] 跳转到 PAYJS 小程序成功', r); // 成功跳转：标记支付中状态

          this.setPaying(true);
        },
        fail: e => {
          // 跳转失败：弹出提示组件引导用户跳转
          console.log('[PAYJS] 跳转到 PAYJS 小程序失败 - 准备弹窗提醒跳转', e);
          this.setData({
            showPayModal: true
          });
        }
      });
    }

  },
  methods: {
    setPaying(newPayingData) {
      this.setData({
        paying: newPayingData
      });
      this.$emit('dataChange', {
        paying: newPayingData
      });
    },

    onTapCancel() {
      // 用户点击了支付组件外的地方（灰色地方）
      console.log('[PAYJS] 跳转到 PAYJS 小程序失败 - 用户点击了提醒窗体以外的地方');
      this.$emit('fail', {
        navigateSuccess: false
      });
      this.$emit('complete');
    },

    navigateSuccess() {
      console.log('[PAYJS] 跳转到 PAYJS 小程序成功'); // 成功跳转：标记支付中状态

      this.setPaying(true);
    },

    navigateFail(e) {
      // 跳转失败
      console.log('[PAYJS] 跳转到 PAYJS 小程序失败 - 失败回调', e);
      this.$emit('fail', {
        navigateSuccess: false,
        info: e
      });
      this.$emit('complete');
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
@import "./payjs.css";
</style>