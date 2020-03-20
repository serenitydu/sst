<template>
	<view>
		<view :style="'width: ' + imgwd + '; height: ' + imght + 'px;'">
			<image :src="coll.img" mode="aspectFill" style="width: 100%; height: 100%;" @tap="openImg"></image>
		</view>

		<view :style="'width: ' + imgwd + '; height: ' + botht + 'px;'">
			<input :value="newTitle" class="title" @input="updateTitle"></input>

			<input :value="'$' + newPrice" class="sectitle" @input="updatePrice"></input>
			<input :value="newDesc" class="des" @input="updateDesc"></input>
			<view class="flavCard">
				<input :value="newCustomKey" class="flavCardL" @input="updateCK"></input>
				<input :value="newFlav" class="flavCardR" @input="updateFlav"></input>
			</view>
			<view class="section1">
				<picker @change="bindPickerChange1" :value="index1" :range="coll.array1">
					<view class="picker">
						SIZE：{{coll.array1[index1]}}
					</view>
				</picker>
			</view>

			<view class="section2">
				<view class="kcMark">库存</view>
				<input :value="newKc" class="picker" @input="updateKc"></input>
			</view>


			<view class="atc">

				<button class="adtocart" @tap="submitNew" hover-class="btn_hover">{{advic}}</button>
			</view>

		</view>

		<scroll-view scroll-x class="imageWindow" v-if="imgPop">
			<input maxlength="-1" class="imgInput" placeholder="输入图片链接，用分号隔开" @input="updateImg"></input>
			<view class="leftBut" @tap="parseNewImg">确定</view>
			<view class="rightBut" @tap="cancelImg">取消</view>
		</scroll-view>
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
				array2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				index2: 0,
				flavor: "辣",
				customKey: "口味",
				newCustomKey: "口味",
				newTitle: "",
				newPrice: "",
				newFlav: "",
				newDesc: "",
				newImgStr: "aaa;sddd",
				newImg: [],
				imgPop: false,
				coll: {},
				newKc: 0,
				advic: "提交物品编辑",
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
						coll: res.data.Items[0],
						newTitle: res.data.Items[0].title,
						newPrice: res.data.Items[0].stitle,
						newDesc: res.data.Items[0].des,
						newFlav: res.data.Items[0].flavor,
						newKc: res.data.Items[0].kc,
						customKey: res.data.Items[0].customKey,
						newCustomKey: res.data.Items[0].customKey
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
			parseNewImg: function() {
				//todo change single img to list of img
				var tmpImgL = this.newImgStr.split(';');
				console.log(this.newImgStr.split(';'));
				var tmpC = this.coll;
				tmpC.img = this.newImgStr.split(';')[0];
				this.setData({
					coll: tmpC,
					newImg: tmpImgL,
					imgPop: false
				});
			},
			openImg: function() {
				this.setData({
					imgPop: true
				});
			},
			cancelImg: function() {
				this.setData({
					imgPop: false
				});
			},
			bindPickerChange1: function(e) {
				console.log(e.detail.value);
				this.setData({
					index1: e.detail.value
				});
			},
			bindPickerChange2: function(e) {
				console.log(e.detail.value);
				this.setData({
					index2: e.detail.value
				});
			},
			updateTitle: function(e) {
				console.log(e.detail.value);
				this.setData({
					newTitle: e.detail.value
				});
			},
			updatePrice: function(e) {
				console.log(e.detail.value);
				this.setData({
					newPrice: e.detail.value.substring(1, e.detail.value.length)
				});
			},
			updateCK: function(e) {
				console.log(e.detail.value);
				this.setData({
					newCustomKey: e.detail.value
				});
			},
			updateDesc: function(e) {
				console.log(e.detail.value);
				this.setData({
					newDesc: e.detail.value
				});
			},
			updateKc: function(e) {
				console.log(e.detail.value);
				this.setData({
					newKc: e.detail.value
				});
			},
			tapCart: function(e) {
				wx.navigateTo({
					url: '../pays/pay'
				});
			},
			updateFlav: function(e) {
				console.log(e.detail.value);
				this.setData({
					newFlav: e.detail.value
				});
			},
			updateImg: function(e) {
				console.log(e.detail.value);
				this.setData({
					newImgStr: e.detail.value
				});
			},
			submitNew: function() {
				this.setData({
					advic: "上传中..."
				});
				var that = this;
				var price1 = this.newPrice;
				var title1 = this.newTitle;
				var desc1 = this.newDesc;
				var flav1 = this.newFlav;
				var img1 = this.coll.img;
				var ck1 = this.newCustomKey;
				var kc1 = parseInt(this.newKc); //1. update itemInfo

				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateiteminfo',
					method: 'POST',
					data: {
						mode: 1,
						id: tmpid,
						price: price1,
						title: title1,
						desc: desc1,
						img: img1,
						flav: flav1,
						kc: kc1,
						ck: ck1
					},
					success: function(res) {
						console.log(res);
					},
					fail: function(res) {
						console.log(res);
					}
				}); //2. update items table

				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdatawithkey',
					method: 'POST',
					data: {
						dbname: "items",
						shopId: tmpshopid
					},
					success: function(res) {
						console.log(res.data.Items[0].contents);
						var tmp1 = res.data.Items[0].contents;

						for (var i = 0; i < tmp1.length; i++) {
							for (var j = 0; j < tmp1[i].length; j++) {
								if (tmp1[i][j].itemId == tmpid) {
									//found target
									tmp1[i][j].img = img1;
									tmp1[i][j].price = price1;
									tmp1[i][j].title = title1; //update

									uni.request({
										url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateiteminfo',
										method: 'POST',
										data: {
											mode: 2,
											id: tmpshopid,
											coll: tmp1
										},
										success: function(res) {
											console.log(res);
											that.setData({
												advic: "上传完成"
											});
										},
										fail: function(res) {
											console.log(res);
										}
									});
								}
							}
						}
					}
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
	@import "./manageItem.css";
</style>
