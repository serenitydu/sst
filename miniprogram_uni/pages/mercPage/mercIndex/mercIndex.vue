<template>
	<view>
		<!--index.wxml-->
		<view class="container">
			<view class="loopads" :style="'width:' + loopadsWD + 'px; height: ' + loopadsHT + 'px;'">

				<text class="LoopTxt">选择想要管理的店铺</text>

			</view>


			<scroll-view class="shopList" scroll-y :style="'height: ' + shopHT + 'px;'">
				<block v-for="(item, index) in shops" :key="index">
					<view class="shopCSS" @tap="clickonStore" :data-shopId="item._id" :data-kind="item.kind">
						<image class="shopImg" mode="aspectFill" :src="item.img"></image>
						<text class="shopNM">{{item.title}}\n</text>
						<text class="shopCC">{{item.count}} Items</text>
					</view>
				</block>
			</scroll-view>


		</view>

		<image src="http://cdn.onlinewebfonts.com/svg/img_170543.png" class="scanQRBut" @tap="scanQRcode"></image>
	</view>
</template>

<script>
	//index.js
	//获取应用实例
	var deliRange = 20; //in miles
	//in miles
	var swipeEnable = true; //screen reso
	//screen reso
	var winwd = 0;
	var winht = 0;
	// wx.cloud.init({
	//   traceUser: true,
	//   env: 'tempsqu-ennf2'
	// });
	import popup from "../../../component/popup/popup";

	export default {
		data() {
			return {
				shops: "",
				loopadsHT: "",
				loopadsWD: "",
				shopHT: "",
				userInfo: "",
				hasUserInfo: false
			};
		},

		components: {
			popup
		},
		props: {},
		onPullDownRefresh: function() {
			this.onLoad();
		},
		onShow: function() { //this.onLoad();
		},
		onLoad: function() {
			//update from db
			var that = this;
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdata',
				method: 'POST',
				data: {
					dbname: "shops"
				},
				success: function(res) {
					var tmpShopLists = res.data.Items;
					uni.request({
						url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser',
						method: 'POST',
						success: function(res) {
							var newList = [];
							console.log(res.data.Items[0].open_Id);
							var userNow = res.data.Items[0].open_Id;

							for (var i = 0; i < tmpShopLists.length; i++) {
								console.log(tmpShopLists[i].owner);

								if (tmpShopLists[i].owner.includes(userNow)) {
									newList.push(tmpShopLists[i]);
								}
							}

							that.setData({
								shops: newList
							});
						}
					});
					wx.stopPullDownRefresh(); //get user's address to find nearby shops

					var tobeRemoved = [];
					/*
					wx.cloud.callFunction({
					  name: "getUser",
					  success: function (res) {
					    var tmpUserAddr = res.data.Items[0].address
					    for (var iss=0;iss<tmpShopLists.length;iss++){
					      var tmpShopAddr = tmpShopLists[iss].address;
					      wx.request({
					        url: 'https://maps.googleapis.com/maps/api/directions/json?origin=' + tmpShopAddr + '&destination=' + tmpUserAddr + '&key=AIzaSyBN4EcKh9xONylRy2pWlCRhtW4LBK5Voh0',
					        success: function (res) {
					          console.log(res.data.routes[0]);
					          if (res.data.routes[0].legs[0].distance.value * 0.000621371 <= deliRange) {
					            tobeRemoved.push({ add: tmpShopAddr});
					          }
					        }
					      })
					    }
					  }
					})*/
				}
			}); //get user's screen reso

			wx.getSystemInfo({
				success: function(res) {
					winwd = res.windowWidth;
					winht = res.windowHeight;
				}
			});
			this.setData({
				//screen reso
				loopadsHT: winht * 0.4,
				loopadsWD: winwd,
				//shops-list item size
				shopHT: winht * 0.6
			});
		},
		methods: {
			scanQRcode: function() {
				wx.scanCode({
					success: function(res) {
						console.log(res); //output string result

						console.log(res.result); //todo: 
					}
				});
			},
			getUserInfo: function(e) {
				console.log(e);
				getApp().globalData.userInfo = e.detail.userInfo;
				this.setData({
					userInfo: e.detail.userInfo,
					hasUserInfo: true
				});
			},
			clickonStore: function(e) {
				wx.setStorageSync('shopid', e.currentTarget.dataset.shopid);
				wx.navigateTo({
					url: '../manageStore/manageStore'
				}); //var tmp=wx.getStorageSync('shopid');
			},
			//functions preventing random sliding
			loopTCHstart: function() {
				swipeEnable = false;
			},
			loopTCHend: function() {
				swipeEnable = true;
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
	@import "./mercIndex.css";
</style>
