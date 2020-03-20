<template>
	<view>
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
									<image src="http://pngimg.com/uploads/minus/minus_PNG55.png" class="atc" mode="aspectFill" @tap="deletItem"
									 :data-index1="groupindex" :data-index2="idx" :data-itemId="itemName"></image>
								</view>
								<view v-else class="itemCardEven" :style="'top:' + ((((idx-1)/2))*cardHeight) + 'px'">
									<image :src="itemName.img" class="itemImg" @tap="clickItem" :data-itemId="itemName.itemId" mode="aspectFill"></image>
									<view class="brandText">{{itemName.brand}}</view>
									<view class="titleText">{{itemName.title}}</view>
									<view class="priceText">${{itemName.price}}</view>
									<image src="http://pngimg.com/uploads/minus/minus_PNG55.png" class="atc" mode="aspectFill" @tap="deletItem"
									 :data-index1="groupindex" :data-index2="idx" :data-itemId="itemName"></image>
								</view>
							</block>
						</scroll-view>

					</swiper-item>

				</block>
			</swiper>


			<popup id="popup" title="优惠" content="你妈妈买菜涨价辣！" btn_no="拒绝" btn_ok="点击领取" @error="_error" @success="_success">
			</popup>



			<image src="../../../static/icons/more.png" mode="aspectFill" class="toAddPage" @tap="toAddPage"></image>

		</view>

		<view class="submitBut" @tap="openAds">更新</view>

		<scroll-view scroll-x class="imageWindow" v-if="imgPop">
			<input maxlength="-1" class="imgInput" placeholder="输入图片链接" @input="updateImg"></input>
			<input maxlength="-1" class="imgInput" placeholder="输入广告语" @input="updateAds"></input>
			<view class="leftBut" @tap="parseNewImg">确定</view>
			<view class="rightBut" @tap="cancelImg">取消</view>
		</scroll-view>
	</view>
</template>

<script>
	//screen reso
	var winwd = 0;
	var winht = 0;
	var tmpid;
	var deleting = false;
	// wx.cloud.init();

	export default {
		data() {
			return {
				currentTab: 0,
				user_openId: 'AAA',
				shopid: "",
				imgPop: false,
				newImgStr: "",
				newAds: "",
				loopimgs1: "",
				loopadsHT: "",
				loopadsWD: "",
				scrollHeight: "",
				initCardPos: "",
				cardHeight: "",
				goods: "",
				cata: ""
			};
		},

		components: {},
		props: {},
		onReady: function() {},
		onPullDownRefresh: function() {
			wx.stopPullDownRefresh();
		},
		onLoad: function() {
			tmpid = wx.getStorageSync('shopid');
			console.log(tmpid);
			this.setData({
				shopid: tmpid
			}); //get user's screen reso

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
						loopimgs1: res.result.data[0].contents
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
						goods: res.result.data[0].contents
					});
				}
			});
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
				method: 'POST',
				data: {
					mode: 1,
					target: "shops",
					iddd: tmpid
				},
				success: function(res) {
					wx.stopPullDownRefresh();
					console.log(res.data.Items[0].catagory);
					that.setData({
						cata: res.data.Items[0].catagory
					});
				},
				fail: function(res) {
					console.log(res);
				}
			});
		},
		onPullDownRefresh: function() {
			this.onLoad();
			console.log("call pulldown");
		},
		methods: {
			updateImg: function(e) {
				console.log(e.detail.value);
				this.setData({
					newImgStr: e.detail.value
				});
			},
			updateAds: function(e) {
				console.log(e.detail.value);
				this.setData({
					newAds: e.detail.value
				});
			},
			parseNewImg: function() {
				var img1 = this.newImgStr;
				var ads1 = this.newAds;
				var that = this;
				var shopId = tmpid;
				console.log(shopId);
				var newL = [{
					des: ads1,
					img: img1
				}];
				console.log(newL);
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postpost',
					method: 'POST',
					data: {
						mode: 3,
						sId: shopId,
						contents: newL
					},
					success: function(res) {
						console.log(res);
						that.setData({
							loopimgs1: newL,
							imgPop: false
						});
					},
					fail: function(res) {
						that.setData({
							imgPop: false
						});
					}
				});
			},
			cancelImg: function() {
				this.setData({
					imgPop: false
				});
			},
			openAds: function() {
				this.setData({
					imgPop: true
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
					url: '../manageItem/manageItem'
				});
			},
			toAddPage: function() {
				wx.setStorageSync("shopid", this.shopid);
				wx.navigateTo({
					url: '../addItem/addItem'
				});
			},
			deletItem: function(e) {
				if (!deleting) {
					deleting = true;
					var that = this;
					console.log(e.currentTarget.dataset.itemid);
					var imid = e.currentTarget.dataset.itemid.itemId;
					var in1 = e.currentTarget.dataset.index1;
					var in2 = e.currentTarget.dataset.index2; //1. delete from items

					var tmpList = this.goods;
					var tmpList1 = tmpList[in1].splice(in2, 1);
					uni.request({
						url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postpost',
						method: 'POST',
						data: {
							mode: 1,
							sid: that.sid,
							contents: tmpList
						},
						success: function(res) {
							console.log(res);
						},
						fail: function(res) {
							console.log(res);
							deleting = false;
						}
					}); //2. delete from iteminfo

					uni.request({
						url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postpost',
						method: 'POST',
						data: {
							mode: 2,
							itemId: imid
						},
						success: function(res) {
							console.log(res);
							that.setData({
								goods: tmpList
							});
							deleting = false;
						},
						fail: function(res) {
							console.log(res);
							deleting = false;
						}
					});
					console.log(this.goods);
				}
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
	@import "./manageStore.css";
</style>
