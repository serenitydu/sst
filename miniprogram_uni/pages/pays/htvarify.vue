<template>
	<view class="mainCont">
		此页面每五秒刷新一次，用来验证支付是否完成
	</view>
</template>

<script>
	export default {
		data() {
			return {
				invoice: ""
			};
		},

		components: {},
		props: {},

		/**
		 * Lifecycle function--Called when page load
		 */
		onLoad: function(options) {
			console.log(getApp().globalData.invoice);
			var orderItems = getApp().globalData.orderItems;
			var sid = getApp().globalData.shop_id;
			this.setData({
				invoice: getApp().globalData.invoice
			});
			var that = this;
			var tkn = 'Bearer 05bcd02d83986b631ff81134e2bd85fe2934232329b5fa6a4d2fb3309d8e6800';
			console.log(that.invoice);
			wx.request({
				url: 'https://api.hantepay.com/v1.3/transactions/merchant/' + that.invoice,
				//url: 'https://api.hantepay.com/v1.3/transactions/merchant/ht1908211429_nsKhIJRs' , 
				header: {
					'Content-Type': 'application/json',
					'Authorization': tkn
				},
				method: 'GET',
				success: function(res) {
					console.log(res);
					var tmpres = res.data;
					uni.request({
						url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/ordermanager',
						method: 'POST',
						data: {
							mode: 0,
							time: tmpres.time,
							status: tmpres.status,
							ref: tmpres.reference,
							itemList: orderItems,
							shop_id: sid,
							openId: getApp().globalData.openId
						},
						success: function(res) {
							console.log(res);
							uni.request({
								url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/initcart',
								method:'POST',
								data: {
									shop_Id: 'ssid'
								}
							});
						},
						fail: function(res) {
							console.log(res);
						}
					});
				},
				fail: function(res) {
					console.log(res);
				}
			}); //var interv=setInterval(function(){    })
		},

		/**
		 * Lifecycle function--Called when page is initially rendered
		 */
		onReady: function() {},

		/**
		 * Lifecycle function--Called when page show
		 */
		onShow: function() {},

		/**
		 * Lifecycle function--Called when page hide
		 */
		onHide: function() {},

		/**
		 * Lifecycle function--Called when page unload
		 */
		onUnload: function() {},

		/**
		 * Page event handler function--Called when user drop down
		 */
		onPullDownRefresh: function() {},

		/**
		 * Called when page reach bottom
		 */
		onReachBottom: function() {},

		/**
		 * Called when user click on the top right corner to share
		 */
		onShareAppMessage: function() {},
		methods: {
			setData: function(obj, callback) {
				let that = this;
				let keys = [];
				let val, data;
				Object.keys(obj).forEach(function(key) {
					keys = key.split('.');
					val = obj[key];
					data = that.$data;
					keys.forEach(function(key2, index) {
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
	@import "./htvarify.css";
</style>
