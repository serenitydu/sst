<template>
	<view>
		<view :style="'width: ' + imgwd + '; height: ' + imght + 'px;'">
			<image :src="coll.img" mode="aspectFill" style="width: 100%; height: 100%;"></image>
		</view>

		<view :style="'width: ' + imgwd + '; height: ' + botht + 'px;'">
			<view class="title">{{coll.title}}</view>
			<view class="sectitle">${{coll.stitle}}</view>
			<view class="des">{{coll.des}}</view>
			<view class="flavCard">
				<view class="flavCardL">{{coll.customKey}}</view>
				<view class="flavCardR">{{coll.flavor}}</view>
			</view>
			<view class="section1">
				<picker @change="bindPickerChange1" :value="index1" :range="coll.array1">
					<view class="picker">
						SIZE：{{coll.array1[index1]}}
					</view>
				</picker>
			</view>

			<view class="section2">
				<picker @change="bindPickerChange2" :value="index2" :range="array2">
					<view class="picker">
						数量：{{array2[index2]}}
					</view>
				</picker>
			</view>

			<view class="atc">
				<view class="img" :style="'background:' + (cost!=0?'#FFD161':'#E7E7E7') + ';'" @tap="tapCart">
					<image src="../../static/icons/trolley.png" style="width:60rpx; height:60rpx;"></image>
				</view>
				<button class="adtocart" @tap="addtoCart" hover-class="btn_hover">加入购物车</button>
			</view>

		</view>
	</view>
</template>

<script>
	var tmpid;
	var tmpshopid;
	var winwd = 0;
	var winht = 0;

	export default {
		data() {
			return {
				title: "麻辣小龙虾",
				stitle: "$50",
				des: "大风大浪骄傲了大家很快就处女在u为撒发达",
				array1: ["大", "中", "小"],
				index1: 0,
				array2: [],
				index2: 0,
				flavor: "辣",
				coll: "",
				imght: "",
				imgwd: "",
				botht: ""
			};
		},

		components: {},
		props: {},
		onPullDownRefresh: function() {
			wx.stopPullDownRefresh();
		},
		onLoad: function() {
			var that = this;
			tmpid = wx.getStorageSync('itemId');
			tmpshopid = wx.getStorageSync('shopid');
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid',
				method: 'POST',
				data: {
					itemId: tmpid,
					mode: 0
				},
				success: function(res) {
					console.log(res.data.Items[0]);
					that.setData({
						coll: res.data.Items[0]
					});
					var tmpKC = that.coll.kc;
					var newArr = [];

					for (var i = 1; i <= tmpKC; i++) {
						newArr.push(i);
					}

					that.setData({
						array2: newArr
					});
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
				imght: winht * 0.4,
				imgwd: winwd,
				//shops-list item size
				botht: winht * 0.6
			});
		},
		methods: {
			bindPickerChange1: function(e) {
				console.log(e.detail.value);
				this.setData({
					index1: e.detail.value
				});
			},
			bindPickerChange2: function(e) {
				console.log(e.detail.value);
				console.log(this.array2);
				this.setData({
					index2: e.detail.value
				});
			},
			tapCart: function(e) {
				wx.navigateTo({
					url: '../pays/pay'
				});
			},
			addtoCart: function(e) {
				var that = this;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts',
					method: 'POST',
					data: {
						dbname: "carts",
						openId: getApp().globalData.openId,
					},
					success: function(res) {
						console.log(res);

						if (res.data.Items.length == 0) {
							//userUsingCartFirstTime
							uni.request({
								url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/initcart',
								method: 'POST',
								data: {
									shop_Id: tmpshopid
								},
								success: function(res) {
									var itemLis = []; //same store

									uni.request({
										url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid',
										method: 'POST',
										data: {
											itemId: tmpid,
											mode: 0
										},
										success: function(res) {
											console.log('as1'); //check store

											var i = 0;
											var coun = 1;
											var pos = 0;

											for (i = 0; i < itemLis.length; i++) {
												if (res.data.Items[0]._id == itemLis[i].Item_Id) {
													coun = itemLis[i].count + 1;
													pos = i;
												}
											}

											if (coun == 1) {
												itemLis.push({
													Item_Id: res.data.Items[0]._id,
													size: 'Large',
													count: 1
												});
											} else {
												itemLis[pos].count = coun;
											}

											uni.request({
												url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem',
												method: 'POST',
												data: {
													openId: getApp().globalData.openId,
													itemList: itemLis,
													sid: tmpshopid
												},
												success: function(res) {
													console.log('succ');
												},
												fail: console.error
											});
										}
									});
								}
							});
						} else {
							var itemLis = res.data.Items[0].items;
							console.log(itemLis);

							if (tmpid == res.data.Items[0].shop_Id) {
								//same store
								uni.request({
									url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid',
									method: 'POST',
									data: {
										itemId: tmpid,
										mode: 0
									},
									success: function(res) {
										console.log('as1'); //check store

										var i = 0;
										var coun = 1;
										var pos = 0;

										for (i = 0; i < itemLis.length; i++) {
											if (res.data.Items[0]._id == itemLis[i].Item_Id) {
												coun = itemLis[i].count + 1;
												pos = i;
											}
										}

										if (coun == 1) {
											itemLis.push({
												Item_Id: res.data.Items[0]._id,
												size: 'Large',
												count: 1
											});
										} else {
											itemLis[pos].count = coun;
										}

										uni.request({
											url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem',
											method: 'POST',
											data: {
												openId: getApp().globalData.openId,
												itemList: itemLis,
												sid: tmpshopid
											},
											success: function(res) {
												console.log('succ');
											},
											fail: console.error
										});
									}
								});
							} else {
								//diff store
								//get item info
								uni.request({
									url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid',
									method: 'POST',
									data: {
										itemId: tmpid,
										mode: 0
									},
									success: function(res) {
										console.log(res.result); //check store

										uni.request({
											url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem',
											method: 'POST',
											data: {
												openId: getApp().globalData.openId,
												itemList: [{
													Item_Id: res.data.Items[0]._id,
													size: 'Large',
													count: 1
												}],
												sid: tmpshopid
											},
											success: function(res) {
												console.log('succ');
											},
											fail: console.error
										});
									}
								});
							}
						}
					},
					fail: console.error
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
	@import "./item.css";
</style>
