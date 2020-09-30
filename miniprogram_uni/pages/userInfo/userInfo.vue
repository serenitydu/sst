<template>
	<view>
		<!--pages/userInfo/userInfo.wxml-->
		<view>
			<view class="userinfo">
				<image @click="tologin" class="userinfo-avatar" :src="userAvatarUrl" mode=aspectFill>
				</image>
				<view class="nickname">
				    {{userNickName}}
				</view>
			</view>

			<view class="expArea">
				<view class="expBack">

				</view>
				<image class="expGauge" :style="'width:' + ExpGaugeRatio + '%;'" src="../../static/images/expgauge.jpg"></image>

				<text class="expText">EXP: {{exp}}/{{toNextLvl}}</text>
			</view>

			<view class="list">
				<view class="wallet">
					<text>等级\nlv{{level}}</text>
				</view>
				<view class="discount">
					<text>金币\n{{gold}}</text>
				</view>
				<view class="nut">
					<text>松果\n{{scoin}}</text>
				</view>
			</view>


			<view class="weui-cells__title">基本信息</view>
			<view class="weui-cells">
				<view class="weui-cell" @tap="openPhone">
					<view class="weui-cell__bd">
						<p>手机号码</p>
					</view>
					<view class="weui-cell__ft">
						<p>{{phoneData}}</p>
					</view>
				</view>

				<view class="weui-cell" @tap="openAddress">
					<view class="weui-cell__bd">
						<p>收货地址</p>
					</view>
					<view class="weui-cell__ft">
						<p>{{addrData}}</p>
					</view>
				</view>

			</view>

			<view class="weui-cells__title">帖子管理</view>
			<view class="weui-cells">
				<view class="weui-cell weui-cell_access" @tap="goPostManage">
					<view class="weui-cell__bd">
						我的发帖
					</view>
					<view class="weui-cell__ft">
					</view>
				</view>

				<view class="weui-cell weui-cell_access" @tap="gotoAt">
					<view class="weui-cell__bd">
						新的@
					</view>
					<view v-if="newAts>0&&newAts<=99" class="identifier1">
						{{newAts}}
					</view>
					<view v-else-if="newAts>99" class="identifier2">
						99+
					</view>
					<view class="weui-cell__ft">
					</view>
				</view>

				<view v-if="showMerc" class="weui-cell weui-cell_access" @tap="goPostMerc">
					<view class="weui-cell__bd">
						商家界面
					</view>
					<view class="weui-cell__ft">
					</view>
				</view>
			</view>




		</view>

		<view class="popupInput" v-if="!phoneInputDis">
			<input class="popupInputInput" placeholder="  请输入手机号码" @input="phoneNumInput"></input>
			<button class="popupInputButton" @tap="confirmPhoneNum">确认</button>
			<view class="popupInputButton2" @tap="cancelInput">取消</view>
		</view>

		<view class="popupInput" v-if="!addInputDis">
			<input class="popupInputInput" placeholder="  请输入送货地址" @input="addInput"></input>
			<button class="popupInputButton" @tap="confirmAddress">确认</button>
			<view class="popupInputButton2" @tap="cancelInput">取消</view>
		</view>

		<view class="signupBut" @tap="signUp">每日签到</view>
		<view class="refreshBut" @tap="refreshPage">刷新</view>
	</view>
</template>

<script>
	// pages/userInfo/userInfo.js
	var canDelete = true;
	var util = require("../../utils/util.js");

	export default {
		data() {
			return {
				// onPullDownRefresh: function () {
				//   wx.stopPullDownRefresh()
				// },
				showMerc: false,
				userInfo: null,
				phoneInputDis: true,
				addInputDis: true,
				phoneData: "",
				addrData: "",
				scoin: 0,
				gold: 0,
				level: 1,
				toNextLvl: 1000,
				exp: 0,
				ExpGaugeRatio: 0.01,
				posts: [],
				newAts: 0,
				phone: "",
				addr: "",
				userNickName: "",
				userAvatarUrl: ""
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function() {
			
			/*
			var that = this;
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser',
				method: 'POST',
				data: {
					openId: getApp().globalData.openId
				},
				success: function(res) {
					
					if (res.data.Items.length>0){
						that.setData({
							userNickName: res.data.Items[0].nickName,
							userAvatarUrl: res.data.Items[0].avtUrl
						})
						that.updatePhone();
						that.updateAddress();
						that.updateProp();
						uni.request({
							url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
							method: 'POST',
							data: {
								mode: 4,
								target: 'ats',
								openId: getApp().globalData.openId
							},
							success: function(res) {
								console.log(typeof res.data.Items == 'undefined');
						
								if (typeof res.data.Items == 'undefined') {} else {
									that.setData({
										newAts: res.data.Items.length
									});
								}
							}
						});
					}else{
						that.tologin();
					}
				}
			});
			*/
		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {
			var that = this;
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser',
				method: 'POST',
				data: {
					openId: getApp().globalData.openId
				},
				success: function(res) {
					if (res.data.Items.length>0){
						getApp().globalData.userNameGG=res.data.Items[0].nickName;
						getApp().globalData.userAvatarUrlGG=res.data.Items[0].avtUrl;
						that.setData({
							userNickName: res.data.Items[0].nickName,
							userAvatarUrl: res.data.Items[0].avtUrl
						})
						that.updatePhone();
						that.updateAddress();
						that.updateProp();
						uni.request({
							url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
							method: 'POST',
							data: {
								mode: 4,
								target: 'ats',
								openId: getApp().globalData.openId
							},
							success: function(res) {
								console.log(typeof res.data.Items == 'undefined');
						
								if (typeof res.data.Items == 'undefined') {} else {
									that.setData({
										newAts: res.data.Items.length
									});
								}
							}
						});
					}else{
						that.tologin();
					}
				}
			});
		},

		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function() {},

		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function() {},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		onPullDownRefresh: function() {
			var that = this;
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser',
				method: 'POST',
				data: {
					openId: getApp().globalData.openId
				},
				success: function(res) {
					if (res.data.Items.length>0){
						getApp().globalData.userNameGG=res.data.Items[0].nickName;
						getApp().globalData.userAvatarUrlGG=res.data.Items[0].avtUrl;
						that.setData({
							userNickName: res.data.Items[0].nickName,
							userAvatarUrl: res.data.Items[0].avtUrl
						})
						that.updatePhone();
						that.updateAddress();
						that.updateProp();
						uni.request({
							url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
							method: 'POST',
							data: {
								mode: 4,
								target: 'ats',
								openId: getApp().globalData.openId
							},
							success: function(res) {
								console.log(typeof res.data.Items == 'undefined');
						
								if (typeof res.data.Items == 'undefined') {} else {
									that.setData({
										newAts: res.data.Items.length
									});
								}
							}
						});
						uni.stopPullDownRefresh();
					}else{
						that.tologin();
					}
				}
			});
		},
		methods: {
			tologin(){
				if (getApp().globalData.openId=="nihao"){
					//not logged in
					uni.navigateTo({
						url: '../login/login',
					});
				}else{
					uni.navigateTo({
						url: '../userFile/userFile',
					});
				}
				
			},
			phoneNumInput: function(e) {
				this.setData({
					phone: e.detail.value
				});
			},
			updatePhone: function(e) {
				var that = this;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser',
					method: 'POST',
					data:{
						openId: getApp().globalData.openId
					},
					success: function(res) {
						console.log(res);
						if (res.data.Items.length == 0){
							
							uni.navigateTo({
								url: '../register/register',
							});
						}else
						if (res.data.Items[0].merc != 'no') {
							that.setData({
								showMerc: true
							});
						}

						if (res.data.Items.length == 0 || res.data.Items[0].phone.length == 0) {
							that.setData({
								phoneData: "未绑定"
							});
						} else {
							that.setData({
								phoneData: res.data.Items[0].phone
							});
						}
					},
					fail: function(res) {
						that.setData({
							phoneData: "未绑定"
						});
					}
				});
			},
			gotoAt: function(e) {
				wx.removeTabBarBadge({
					index: 3
				}), wx.navigateTo({
					url: '../newAt/newAt'
				});
			},
			updateAddress: function(e) {
				var that = this;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser',
					method: 'POST',
					data:{
						openId:getApp().globalData.openId
					},
					success: function(res) {
						if (res.data.Items.length == 0 || res.data.Items[0].address.length == 0) {
							that.setData({
								addrData: "未填写"
							});
						} else {
							that.setData({
								addrData: res.data.Items[0].address
							});
						}
					},
					fail: function(res) {
						that.setData({
							addrData: "未绑定"
						});
					}
				});
			},
			updateProp: function(e) {
				var that = this;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser',
					method: 'POST',
					data:{
						openId:getApp().globalData.openId
					},
					success: function(res) {
						if (!res.data.Items.length == 0) {
							var expInfo = util.lvlFromExp(res.data.Items[0].exp);
							var exp1 = parseInt(expInfo.remExp);
							var exp2 = parseInt(expInfo.expToNext);
							console.log(expInfo.remExp / expInfo.expToNext);
							var tmpLvl = expInfo.resLvl;
							that.setData({
								scoin: res.data.Items[0].scoin,
								gold: res.data.Items[0].gold,
								level: tmpLvl,
								toNextLvl: exp2,
								exp: exp1,
								ExpGaugeRatio: expInfo.remExp / expInfo.expToNext * 100 * 0.6
							});
						}
					},
					fail: function(res) {
						console.log("no user found");
					}
				});
			},
			goPostManage: function(e) {
				wx.navigateTo({
					url: '../postmanage/postmanage'
				});
			},
			addInput: function(e) {
				this.setData({
					addr: e.detail.value
				});
			},
			refreshPage: function() {
				this.updatePhone();
				this.updateAddress();
				this.updateProp();
			},
			signUp() {
				util.updateUserDateRecord(2);
				var that = this;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
					method: 'POST',
					data: {
						mode: 4,
						target: 'ats'
					},
					success: function(res) {
						if (typeof res.data.Items == 'undefined') {} else {
							that.setData({
								newAts: res.data.Items.length
							});
						}
					}
				});
			},
			//确认输入电话号码并传入数据库
			confirmPhoneNum: function(e) {
				var phnum = this.phone;
				var that = this;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser',
					method: 'POST',
					data:{
						openId:getApp().globalData.openId
					},
					// 传给云函数的参数
					success: function(res) {
						if (res.data.Items.length == 0) {
							//not in db yet
							console.log(res);
							uni.request({
								url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adduserinfo',
								method: 'POST',
								// 传给云函数的参数
								data: {
									mode: 1,
									phone: phnum
								},
								success: function(res) {
									that.updatePhone();
									console.log(res);
									that.setData({
										phoneInputDis: true,
										addInputDis: true
									});
								},
								fail: function(res) {
									console.log(res);
								}
							});
						} else {
							console.log(phnum);
							uni.request(
							{
								url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateuserinfo',
								method: 'POST',
								// 传给云函数的参数
								data: {
									mode: 1,
									phone: phnum,
									openId: getApp().globalData.openId
								},
								success: function(res) {
									that.updatePhone();
									console.log("update Succcccc");
									that.setData({
										phoneInputDis: true,
										addInputDis: true
									});
								},
								fail: function(res) {
									console.log(res);
								}
							});
						}
					},
					fail: function(res) {
						console.log(res);
						console.log("suck");
					}
				});
			},
			//确认输入住址码并传入数据库
			confirmAddress: function(e) {
				var addr = this.addr;
				var that = this;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser',
					method: 'POST',
					data:{
						openId:getApp().globalData.openId
					},
					// 传给云函数的参数
					success: function(res) {
						if (res.data.Items.length == 0) {
							uni.request({
								url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adduserinfo',
								method: 'POST',
								// 传给云函数的参数
								data: {
									mode: 2,
									address: addr
								},
								success: function(res) {
									that.updateAddress();
									console.log("update Succcccc");
									that.setData({
										phoneInputDis: true,
										addInputDis: true
									});
								},
								fail: function(res) {
									console.log(res);
								}
							});
						} else {
							uni.request({
								// 云函数名称
								url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateuserinfo',
								method: 'POST',
								// 传给云函数的参数
								data: {
									mode: 2,
									address: addr,
									openId: getApp().globalData.openId
								},
								success: function(res) {
									that.updateAddress();
									console.log("update Succcccc");
									that.setData({
										phoneInputDis: true,
										addInputDis: true
									});
								},
								fail: function(res) {
									console.log("suck");
								}
							});
						}
					},
					fail: function(res) {
						console.log("suck");
					}
				});
			},
			openPhone: function() {
				this.setData({
					phoneInputDis: false
				});
			},
			openAddress: function() {
				this.setData({
					addInputDis: false
				});
			},
			cancelInput: function() {
				this.setData({
					phoneInputDis: true,
					addInputDis: true
				});
			},
			goPostMerc: function() {
				wx.navigateTo({
					url: '../mercPage/mercIndex/mercIndex'
				});
			},
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
	@import "./userInfo.css";
</style>
