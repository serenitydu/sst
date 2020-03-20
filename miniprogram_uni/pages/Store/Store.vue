<template>
	<view>
		<view class="loopads" :style="'width:' + loopadsWD + 'px; height: ' + loopadsHT + 'px;'" @tap="showPopup">
			<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000" :style="'width:' + loopadsWD + 'px; height: ' + loopadsHT + 'px;'">
				<block v-for="(item, index) in loopimgs1" :key="index">
					<swiper-item>
						<image :src="item.img" class="slide-image" mode="aspectFill" :style="'width: 100%; height: ' + loopadsHT + 'px;'"></image>
						<text class="LoopTxt">{{item.des}}</text>
					</swiper-item>
				</block>
			</swiper>
		</view>

		<view class="rowSelector">

			<block v-for="(item, index) in cata" :key="index">
				<view :class="'swiper-tab-item ' + (currentTab==index?'active':'')" :data-current="index" @tap="clickTab">{{item}}</view>
			</block>

		</view>


		<swiper class="topswiper" :current="currentTab" duration="300">

			<block v-for="(goodpage, index) in goods" :key="index">
				<swiper-item catchtouchmove="stopTouchMove">
					<scroll-view scroll-y :style="'height: ' + scrollHeight + 'px;'">
						<block v-for="(itemName, index2) in goods[groupindex]" :key="index2">
							<view v-if="idx%2==0" class="itemCardOdd" :style="'top:' + (((idx/2))*cardHeight) + 'px'">
								<image :src="itemName.img" class="itemImg" mode="aspectFill" @tap="clickItem" :data-itemId="itemName.itemId"></image>
								<view class="brandText">{{itemName.brand}}</view>
								<view class="titleText">{{itemName.title}}</view>
								<view class="priceText">${{itemName.price}}</view>
								<image src="https://www.shareicon.net/download/2015/12/05/682687_add_512x512.png" class="atc" mode="aspectFill"
								 @tap="addtoCart" :data-itemId="itemName.itemId"></image>
							</view>
							<view v-else class="itemCardEven" :style="'top:' + ((((idx-1)/2))*cardHeight) + 'px'">
								<image :src="itemName.img" class="itemImg" @tap="clickItem" :data-itemId="itemName.itemId" mode="aspectFill"></image>
								<view class="brandText">{{itemName.brand}}</view>
								<view class="titleText">{{itemName.title}}</view>
								<view class="priceText">${{itemName.price}}</view>
								<image src="https://www.shareicon.net/download/2015/12/05/682687_add_512x512.png" class="atc" mode="aspectFill"
								 @tap="addtoCart" :data-itemId="itemName.itemId"></image>
							</view>
						</block>
					</scroll-view>

				</swiper-item>

			</block>
		</swiper>


		<popup id="popup" title="优惠" content="你妈妈买菜涨价辣！" btn_no="拒绝" btn_ok="点击领取" @error="_error" @success="_success">
		</popup>


		<image src="https://cdn1.iconfinder.com/data/icons/ecommerce-free/96/Cart-512.png" mode="aspectFill" class="Cart"
		 @tap="tapCart"></image>
	</view>
</template>

<script>
	//screen reso
	var winwd = 0;
	var winht = 0;
	var tmpid;

	import popup from "../../component/popup/popup";

	export default {
		data() {
			return {
				currentTab: 0,
				user_openId: 'AAA',
				loopadsHT: "",
				loopadsWD: "",
				scrollHeight: "",
				initCardPos: "",
				cardHeight: "",
				loopimgs1: "",
				goods: "",
				cata: ""
			};
		},

		components: {
			popup
		},
		props: {},
		onReady: function() {
			//获得popup组件
			this.popup = this.selectComponent("#popup");
		},
		onPullDownRefresh: function() {
			wx.stopPullDownRefresh();
		},
		onLoad: function() {
			tmpid = wx.getStorageSync('shopid');
			console.log(tmpid); //get user's screen reso

			wx.getSystemInfo({
				success: function(res) {
					winwd = res.windowWidth;
					winht = res.windowHeight;
				}
			});
			this.setData({
				//screen reso
				loopadsHT: winht * 0.3,
				loopadsWD: winwd,
				scrollHeight: winht * 0.64,
				initCardPos: winht * 0.36,
				cardHeight: winht * 0.64 * 0.6
			});
			var that = this;
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdatawithkey',
				method: 'POST',
				data: {
					dbname: "StoreAds",
					shopId: tmpid
				},
				success: function(res) {
					that.setData({
						loopimgs1: res.data.Items[0].contents
					});
				}
			});
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdatawithkey',
				method: 'POST',
				data: {
					dbname: "items",
					shopId: tmpid
				},
				success: function(res) {
					that.setData({
						goods: res.data.Items[0].contents
					});
				}
			});
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
				method:'POST',
				data: {
					mode: 1,
					target: "shops",
					iddd: tmpid
				},
				success: function(res) {
					console.log(res.result[0].catagory);
					that.setData({
						cata: res.result[0].catagory
					});
				},
				fail: function(res) {
					console.log(res);
				}
			});
		},
		methods: {
			showPopup() {
				this.popup.showPopup();
			},

			//取消事件
			_error() {
				console.log('你点击了取消');
				this.popup.hidePopup();
			},

			//确认事件
			_success() {
				console.log('你点击了确定');
				this.popup.hidePopup();
			},

			tapCart: function(e) {
				wx.navigateTo({
					url: '../pays/pay'
				});
			},
			clickTab: function(e) {
				var that = this;

				if (this.currentTab === e.target.dataset.current) {
					return false;
				} else {
					that.setData({
						currentTab: e.target.dataset.current
					});
				}

				console.log(this.currentTab);
			},
			stopTouchMove: function() {
				return false;
			},
			clickItem: function(e) {
				console.log(e.currentTarget.dataset.itemid);
				wx.setStorageSync("itemId", e.currentTarget.dataset.itemid);
				wx.setStorageSync("shopid", tmpid); //var tmp=wx.getStorageSync('shopid');

				wx.navigateTo({
					url: '../item/item'
				});
			},
			addtoCart: function(e) {
				//show popup
				this.showPopup();
				var that = this;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts',
					method:'POST',
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
								method:'POST',
								data: {
									shop_Id: tmpid
								},
								success: function(res) {
									var itemLis = []; //same store

									uni.request({
										url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid',
										method:'POST',
										data: {
											itemId: e.target.dataset.itemid,
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
												method:'POST',
												data: {
													openId: getApp().globalData.openId,
													itemList: itemLis,
													sid: tmpid
												},
												success: function(res) {
													console.log('succ');

													that._success();
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
									method:'POST',
									data: {
										itemId: e.target.dataset.itemid,
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
											method:'POST',
											data: {
												openId: getApp().globalData.openId,
												itemList: itemLis,
												sid: tmpid
											},
											success: function(res) {
												console.log('succ');

												that._success();
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
									method:'POST',
									data: {
										itemId: e.target.dataset.itemid,
										mode: 0
									},
									success: function(res) {
										console.log(res.result); //check store

										uni.request({
											url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem',
											method:'POST',
											data: {
												openId: getApp().globalData.openId,
												itemList: [{
													Item_Id: res.data.Items[0]._id,
													size: 'Large',
													count: 1
												}],
												sid: tmpid
											},
											success: function(res) {
												console.log('succ');

												that._success();
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
	@import "./Store.css";
</style>
