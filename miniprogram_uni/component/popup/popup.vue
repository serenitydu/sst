<template>
<!--pages/popup/popup.wxml-->
<view class="wx-popup" :hidden="flag">
  <view class="popup-container">
    <view class="wx-popup-title">{{title}}</view>
    <view class="wx-popup-con">{{content}}</view>
    <view class="wx-popup-btn">
      <text class="btn-no" @tap="_error">{{btn_no}}</text>
      <text class="btn-ok" @tap="_success">{{btn_ok}}</text>
    </view>
  </view>
</view>
</template>

<script>

export default {
  data() {
    return {
      flag: true
    };
  },

  components: {},
  props: {
    title_val: {
      // 属性名
      type: String,
      // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      default: '标题' // 属性初始值（可选），如果未指定则会根据类型选择一个

    },
    // 弹窗内容
    content_val: {
      type: String,
      default: '内容'
    },
    // 弹窗取消按钮文字
    btn_no_val: {
      type: String,
      default: '取消'
    },
    // 弹窗确认按钮文字
    btn_ok_val: {
      type: String,
      default: '确定'
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持

  },
  methods: {
    //隐藏弹框
    hidePopup: function () {
      this.setData({
        flag: !this.flag
      });
    },

    //展示弹框
    showPopup() {
      this.setData({
        flag: !this.flag
      });
    },

    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _error() {
      //触发取消回调
      this.$emit("error");
    },

    _success() {
      //触发成功回调
      this.$emit("success");
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
@import "./popup.css";
</style>