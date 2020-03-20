<script>
	export default {
		mounted(){
			uni.getStorage({
				key:"oidGG",
				success:function(res){
					getApp().globalData.openId=res.data;
				}
			})
			uni.getStorage({
				key:"unmGG",
				success:function(res){
					getApp().globalData.userNameGG=res.data;
				}
			})
			uni.getStorage({
				key:"avtGG",
				success:function(res){
					getApp().globalData.userAvatarUrlGG=res.data;
				}
			})
		},
		onLaunch: function() {
			var that = this;
			var newAts = 0;
			// wx.cloud.init({
			//   traceUser: true,
			//   env: 'tempsqu-ennf2'
			// }); // 展示本地存储能力

			var logs = wx.getStorageSync('logs') || [];
			logs.unshift(Date.now());
			wx.setStorageSync('logs', logs); // 登录

			// wx.login({
			// 	success: res => { // 发送 res.code 到后台换取 openId, sessionKey, unionId
			// 	}
			// }); // 获取用户信息

			// wx.getSetting({
			// 		success: res => {
			// 			if (res.authSetting['scope.userInfo']) {
			// 				// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
			// 				wx.getUserInfo({
			// 					success: res => {
			// 						// 可以将 res 发送给后台解码出 unionId
			// 						this.globalData.userInfo = res.userInfo; // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 						// 所以此处加入 callback 以防止这种情况

			// 						if (this.userInfoReadyCallback) {
			// 							this.userInfoReadyCallback(res);
			// 						}
			// 					}
			// 				});
			// 			}
			// 		}
			// 	}),

				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
					method:'POST',
					header:{
						'content-type':'application/json'
					},
					data: {
						mode: 4,
						target: 'ats',
						openId:'nihao'
					},
					success: function(res) {

						if (typeof res.data.Items == 'undefined') {} else {
							that.globalData.newAts = res.data.Items.length;

							if (that.globalData.newAts > 0 && that.globalData.newAts <= 99) {
								wx.setTabBarBadge({
									index: 3,
									text: that.globalData.newAts.toString()
								});
							} else if (that.globalData.newAts > 99) {
								wx.setTabBarBadge({
									index: 3,
									text: "99+"
								});
							} else {
								wx.removeTabBarBadge({
									index: 3
								});
							}
						}
					}
				});
		},
		globalData: {
			chatRoom: "GG",
			itemInfo:"",
			newAts: 0,
			userInfo: null,
			payLink: "",
			htpay1: "",
			invoice: "",
			cmulid: '',
			orderItems: [],
			sid: '',
			openId:'nihao',
			var1:'111',
			userAvatarUrlGG:'http://cdn.onlinewebfonts.com/svg/img_258083.png',
			userNameGG:'还未登录 请先登录'
		},
		methods: {}
	};
</script>
<style>
	@import "./app.css";
</style>
