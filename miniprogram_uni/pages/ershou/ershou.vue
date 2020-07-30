<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="searchBarCon">
			<image src="https://img.icons8.com/pastel-glyph/2x/worldwide-location--v1.png" mode="aspectFill" class="locationIcon"
			 :style="'left:' + locationIconSpace + 'px;width:' + locationIconSize + 'px;'"></image>
			<view class="locationCon" :style="'left:' + locationTextLeft + 'px;'">
				<picker @change="bindPickerChange1" :value="index1" :range="avlLocations">

					{{avlLocations[index1]}}

				</picker>
			</view>
			<view class="searchBar" :style="'width:' + searchbarLength + 'px;'"></view>
			<image src="https://img.icons8.com/cotton/2x/search--v2.png" mode="aspectFill" class="searchIcon" :style="'right:' + searchIconSpace + 'px;width:' + locationIconSize + 'px;'"></image>
			<input class="searchInput" placeholder="请输入搜索关键字" placeholder-style="color:#b3b3b3;font-size:16px;" @input="handleSearchInput"
			 :style="'width:' + searchBarLength + 'px'"></input>
		</view>
		<view class="we-slide">
			<swiper :current="currentTab" duration="300">
				<swiper-item>
					<scroll-view scroll-x="true" style="width: 100%;white-space:nowrap;">
						<!-- tab -->
						<view class="tab">
							<view class="tab-nav" style="font-size:12px">
								<view v-for="(item, index) in tabnav.tabitem" :key="index" @tap="clickTab1" :data-current1="index" :style="'min-width:20%;background: #fff;max-width:20%;text-align:center;height: 80rpx;' + (index>4?'border-bottom: 1rpx dotted #ddd;':'')">
									{{item.text}}
								</view>
								<view>
									<view class="tab-line" :style="'width:20%;transform:translateX(' + (100*showtab) + '%);'">
									</view>
								</view>
							</view>
						</view>
					</scroll-view>

					<scroll-view class="ershou1" style="width: 100%; height: 100%">
						<swiper @change="changeTab" class="ershou1" :current="currentTab1" duration="300">
							<block v-for="(itemc, index) in totalList" :key="index">
								<swiper-item>
									<scroll-view :style="'width: 100%; height: ' + ratio + 'px; flex-flow: row;justify-content: space-between;z-index:14;'"
									 scroll-y="true">
										<view class="announcement">
											<text>{{anncmt}}</text>
										</view>

										<block v-for="(itemName, index2) in itemc" :key="index2">

											<view v-if="index2%2==0" class="ershouItem2" :style="'top:' + (20+(index2/2)*20) + 'rpx;'" :data-naviParam="itemName"
											 @tap="tapErshou">
												<image :src="itemName.img[0]" mode="aspectFill" class="ershouImg"></image>
												<view class="ershouTitle" style="word-break:break-all">{{itemName.name}}</view>
												<!--view class="ershouDescription">{{itemName.description}}</view-->
												<view class="ershouPrice">${{itemName.price}}</view>
												<view class="spLine"></view>
												<view class="ershouAV">
													<image :src="itemName.authorAva" class="authorimg"></image>
													<text class="AVcontainer1">{{itemName.authorName}}</text>
												</view>
											</view>
											<view v-else class="ershouItem1" :style="'top:' + (-40+(index2/2)*570) + 'rpx;'" :data-naviParam="itemName" @tap="tapErshou">
												<image :src="itemName.img[0]" mode="aspectFill" class="ershouImg"></image>
												<view class="ershouTitle">{{itemName.name}}</view>
												<!--view class="ershouDescription">{{itemName.description}}</view-->
												<view class="ershouPrice">${{itemName.price}}</view>
												<view class="spLine"></view>
												<view class="ershouAV">
													<image :src="itemName.authorAva" class="authorimg"></image>
													<text class="AVcontainer1">{{itemName.authorName}}</text>
												</view>
											</view>

											
										</block>

									</scroll-view>
								</swiper-item>
							</block>

						</swiper>
					</scroll-view>
				</swiper-item>
			</swiper>
			
		</view>
	</view>
</template>

<script>
	var util = require("../../utils/util.js"); //获取应用实例
	//获取应用实例
	const app = getApp().globalData;
	var winwd = 0;
	var winht = 0;
	var comid = "";
	var swipeEnable = true;
	var swiped = false;
	// wx.cloud.init({
	// 	traceUser: true,
	// 	env: 'tempsqu-ennf2'
	// });
	var loadNums = 0;
	var testdb1 = [];
	var intervalSign;

	export default {
		data() {
			return {
				showtab: 0,
				//顶部选项卡索引
				tabnav: {
					tabnum: 6,
					tabitem: [{
						"id": 0,
						"text": "日常用品",
						"content": "secondHandDailyInfo"
					}, {
						"id": 1,
						"text": "二手汽车",
						"content": "secondHandCarInfo"
					}, {
						"id": 2,
						"text": "家具生活",
						"content": "secondHandFurnInfo"
					}, {
						"id": 3,
						"text": "电子产品",
						"content": "secondHandElcInfo"
					}, {
						"id": 4,
						"text": "课本书籍",
						"content": "secondHandBookInfo"
					}, {
						"id": 5,
						"text": "其他",
						"content": "secondHandOthInfo"
					}]
				},
				index1: 0,
				avlLocations: ['Columbus', 'D.C.'],
				signed: false,
				opaci: 0,
				comMenu: false,
				anncmt: "广告位，招租",
				midPos: 0,
				community: 0,
				naviParam: 0,
				ratio: 0,
				secondHandCarInfo: [],
				secondHandDailyInfo: [],
				secondHandFurnInfo: [],
				secondHandOthInfo: [],
				secondHandElcInfo: [],
				secondHandBookInfo: [],
				secondHandCarInfood: [],
				secondHandDailyInfood: [],
				secondHandFurnInfood: [],
				secondHandOthInfood: [],
				secondHandElcInfood: [],
				secondHandBookInfood: [],
				totalList: [],
				currentTab: 0,
				currentTab1: 0,
				upperTh: 0,
				filterStyle: "",
				scrollheight: 0,
				redirectorSize: 0,
				loopimgs1: [],
				redSpace: 0,
				loopadsHT: 0,
				btnLineW: 0,
				winWidth: 0,
				winheight: 0,
				textboxWD: 0,
				textboxHT: 0,
				searchbtnWD: 0,
				searchbtnHT: 0,
				searchAreaWD: 0,
				searchAreaHT: 0,
				motto: 'Hello World',
				userInfo: {},
				hasUserInfo: false,
				canIUse: wx.canIUse('button.open-type.getUserInfo'),
				upAvi: true,
				avtUrl: "",
				author: "",
				communityod: "",
				locationIconSize: "",
				locationIconSpace: "",
				locationTextLeft: "",
				searchbarLength: "",
				searchIconSpace: "",
				searchBarLength: "",
				coll: ""
			};
		},

		components: {},
		props: {},

		onLoad() {
			//取得全局App({..})实例
			comid = getApp().globalData.var1; //取得全局变量需要的值
			wx.getSystemInfo({
				success: function(res) {
					winwd = res.windowWidth;
					winht = res.windowHeight;
				}
			});
			this.initialize();
			const device = wx.getSystemInfoSync();
			var iiii = comid;
			/*
			这段不知道是干嘛的。。。先跳过
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
				method: 'POST',
				// 传给云函数的参数
				data: {
					target: 'secondHand',
					iddd: iiii,
					mode: 1
				},
				success: (res) => {
					console.log("secondHand loaded");
					console.log(res);
					console.log("secondHand loaded");
					wx.stopPullDownRefresh();
					this.setData({
						coll: res.data.Items[0],
						avtUrl: res.data.Items[0].authorAva,
						author: res.data.Items[0].authorName
					});
				}
			})
			*/
		},

		onShow: function() {
			if (loadNums >= 2) {
				this.initialize();
				console.log("call onshow");
			}
		},
		onPullDownRefresh: function() {
			if (loadNums >= 2) {
				this.initialize();
				console.log("call pulldown");
			}
		},
		methods: {
			stopSwiper() {
				return false
			},
			//事件处理函数
			bindViewTap: function() {
				wx.navigateTo({
					url: '../logs/logs'
				});
			},
			comMenuRedirect: function(e) {
				wx.setStorageSync('postR', e.currentTarget.dataset.postr);
				wx.navigateTo({
					url: '../pubReq/pubReq'
				});
			},
			comMenuRedirectPost: function(e) {
				wx.setStorageSync('postR', e.currentTarget.dataset.postr);
				wx.navigateTo({
					url: '../pubPost/pubPost'
				});
			},
			tapComu: function(e) {
				var that = this;
				var inde = e.currentTarget.dataset.ind; //取得全局App({..})实例

				getApp().globalData.var1 = e.currentTarget.dataset.commuid; //取得全局变量需要的值

				var cid = e.currentTarget.dataset.commulistid;
				console.log(e.currentTarget.dataset.commulistid);
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter',
					method: 'POST',
					data: {
						postId: cid,
						mode: 2,
						openId: app.openId
					},
					success: function(res) {
						var tmpList = that.community;
						tmpList[inde].vc++;
						that.setData({
							community: tmpList
						});
					}
				});
				wx.navigateTo({
					url: '../xiaonei/xiaonei'
				});
			},
			showMenu: function() {
				this.setData({
					comMenu: !this.comMenu
				});
			},
			tapErshou: function(e) {
				console.log(e.currentTarget.dataset.naviparam); //取得全局App({..})实例

				getApp().globalData.var1 = e.currentTarget.dataset.naviparam._id; //取得全局变量需要的值
				getApp().globalData.itemInfo=e.currentTarget.dataset.naviparam;
				console.log(e.currentTarget.dataset.naviparam._id);
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter',
					method: 'POST',
					data: {
						postId: e.currentTarget.dataset.naviparam._id,
						mode: 3,
						openId: app.openId
					},
					success: function(res) {}
				});
				wx.navigateTo({
					url: '../tuan/tuan'
				});
			},
			upVoteComment: function(e) {
				//TODO: update database with the up conts
				if (this.upAvi) {
					console.log(this.upAvi);
					this.setData({
						upAvi: false
					});
					var that = this;
					var c = e.currentTarget.dataset.commulist;
					var inde = e.currentTarget.dataset.ind;
					console.log(e.currentTarget.dataset.commulist);
					wx.cloud.callFunction({
						name: 'login',
						success: function(res) {
							console.log(c.upvoter);
							var opid = res.result.openid;

							if (!c.upvoter.includes(res.result.openid)) {
								//didnt upvoted
								uni.request({
									url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter',
									method: 'POST',
									data: {
										postId: c._id,
										mode: 1,
										openId: app.openId
									},
									success: function(res) {
										var tmpList = that.community;
										tmpList[inde].upC++;
										tmpList[inde].upvoter.push(opid);
										that.setData({
											community: tmpList,
											communityod: tmpList
										});
										that.setData({
											upAvi: true
										});
									}
								});
							} else {
								console.log('already upvoted');
								that.setData({
									upAvi: true
								});
							}
						}
					});
				}
			},
			updateAnn: function() { //TODO：更新from数据库

				/*
				this.setData({
				  anncmt:"这里是测试文字，长一点的\n 打折打折打折打折打折打折"
				});
				*/
			},
			bindPickerChange1: function(e) {
				console.log(e.detail.value);
				this.setData({
					index1: e.detail.value
				});
			},
			handleSearchInput: function(e) {
				var tm = e.detail.value;
				var tmpList = util.searchByTagsCom(this.communityod, tm);
				console.log(tmpList);
				this.setData({
					community: tmpList
				});
				tmpList = util.searchByTagsSH(this.secondHandCarInfood, tm);
				console.log(tmpList);
				this.setData({
					secondHandCarInfo: tmpList
				});
				tmpList = util.searchByTagsSH(this.secondHandDailyInfood, tm);
				console.log(tmpList);
				this.setData({
					secondHandDailyInfo: tmpList
				});
				tmpList = util.searchByTagsSH(this.secondHandFurnInfood, tm);
				console.log(tmpList);
				this.setData({
					secondHandFurnInfo: tmpList
				});
				tmpList = util.searchByTagsSH(this.secondHandElcInfood, tm);
				console.log(tmpList);
				this.setData({
					secondHandElcInfo: tmpList
				});
				tmpList = util.searchByTagsSH(this.secondHandBookInfood, tm);
				console.log(tmpList);
				this.setData({
					secondHandBookInfo: tmpList
				});
				tmpList = util.searchByTagsSH(this.secondHandOthInfood, tm);
				console.log(tmpList);
				this.setData({
					secondHandOthInfo: tmpList
				});
				var tmpLLLL = [];
				tmpLLLL.push(this.secondHandDailyInfo);
				tmpLLLL.push(this.secondHandCarInfo);
				tmpLLLL.push(this.secondHandFurnInfo);
				tmpLLLL.push(this.secondHandElcInfo);
				tmpLLLL.push(this.secondHandBookInfo);
				tmpLLLL.push(this.secondHandOthInfo);
				this.setData({
					totalList: tmpLLLL
				});
			},
			handleTagSearch: function(tagString) {
				var tm = [];
				tm = tagString.split(";");

				if (tm[tm.length - 1].localeCompare("") == 0) {
					tm.pop();
				}

				console.log(tm);
				var tmpList = util.searchByTags(this.communityod, tm);
				console.log(tmpList);
				this.setData({
					community: tmpList
				});
			},
			//initialize the page data
			initialize: function() {
				this.updateAnn();
				var tmp = [];
				var tmpratio = winwd / 750;
				tmpratio = tmpratio * (50 + 88);
				var that = this; //initialize commu list
/*
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
					method: 'POST',
					// 传给云函数的参数
					data: {
						target: 'commuList',
						iddd: '',
						mode: 3
					},
					success: (res) => {
						loadNums++;
						that.setData({
							community: res.data.Items,
							communityod: res.data.Items
						});
						var newList = res.data.Items;
						var oidList = [];

						for (var i = 0; i < that.community.length; i++) {
							uni.request({
								url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getgroupuser',
								method: 'POST',
								data: {
									openId: that.community[i].oid
								},
								success: function(res) {
									if (res.data.Items.length < 0) {
										for (var j = 0; j < newList.length; j++) {
											if (newList[j].oid == res.data.Items[0].open_Id) {
												newList[j].lvl = util.lvlFromExp(res.data.Items[0].exp).resLvl;
											}
										}

										that.setData({
											community: newList,
											communityod: newList
										});
									}
								}
							});
						}
					}
				})
*/
				this.setData({
					midPos: 325 - (winwd - 30) / 6 + 50,
					btnLineW: winht / 667 * 60 + 10,
					winWidth: winwd,
					winheight: winht,
					loopadsHT: winht * 0.25,
					searchbtnHT: winht * 0.07 - 10,
					textboxHT: winht * 0.07 - 10,
					textboxWD: winwd - winht * 0.07 + 10 - 15,
					searchbtnWD: winht * 0.07 - 10,
					searchAreaWD: winwd,
					searchAreaHT: winht * 0.07,
					loopimgs1: tmp,
					redirectorSize: (winwd - 30) / 3,
					redSpace: winwd / 2 - (winwd - 60) / 6,
					ratio: winht - tmpratio,
					locationIconSize: winht * 0.04 * 0.8,
					locationIconSpace: winht * 0.04 * 0.1,
					locationTextLeft: winht * 0.04 * 1.1,
					searchbarLength: (winwd * 0.8 - winht * 0.04) * 0.98,
					searchIconSpace: (winwd * 0.8 - winht * 0.04) * 0.98 - winht * 0.04 * 0.85,
					searchBarLength: (winwd * 0.8 - winht * 0.04) * 0.98 - winht * 0.04 * 0.9
				});
				this.setData({
					upperTh: this.loopadsHT + this.redirectorSize + this.loopadsHT + 18,
					filterStyle: "width: " + this.winWidth.toString() + "px; height: " + (this.loopadsHT / 2).toString() + "px;",
					scrollheight: this.winheight - this.searchbtnHT
				}); //initialize secondhand info 

				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdata',
					method: 'POST',
					// 传给云函数的参数
					data: {
						dbname: 'secondHand'
					}
				}).then(res => {
					res = res[1];
					wx.stopPullDownRefresh();
					console.log(res.data.Items);
					loadNums++;
					var tempSHlist = res.data.Items;
					var tmpsecondHandDailyInfo = [];
					var tmpsecondHandCarInfo = [];
					var tmpsecondHandFurnInfo = [];
					var tmpsecondHandElcInfo = [];
					var tmpsecondHandBookInfo = [];
					var tmpsecondHandOthInfo = [];

					for (var i = 0; i < tempSHlist.length; i++) {
						console.log(tempSHlist[i].cat);
						if (tempSHlist[i].cat == "日常用品") {
							tmpsecondHandDailyInfo.push(tempSHlist[i]);
						} else if (tempSHlist[i].cat == "二手汽车") {
							tmpsecondHandCarInfo.push(tempSHlist[i]);
						} else if (tempSHlist[i].cat == "家具生活") {
							tmpsecondHandFurnInfo.push(tempSHlist[i]);
						} else if (tempSHlist[i].cat == "其他") {
							tmpsecondHandOthInfo.push(tempSHlist[i]);
						} else if (tempSHlist[i].cat == "电子产品") {
							tmpsecondHandElcInfo.push(tempSHlist[i]);
						} else if (tempSHlist[i].cat == "课本书籍") {
							tmpsecondHandBookInfo.push(tempSHlist[i]);
						}
					}

					that.setData({
						secondHandDailyInfo: tmpsecondHandDailyInfo,
						secondHandCarInfo: tmpsecondHandCarInfo,
						secondHandFurnInfo: tmpsecondHandFurnInfo,
						secondHandElcInfo: tmpsecondHandElcInfo,
						secondHandBookInfo: tmpsecondHandBookInfo,
						secondHandOthInfo: tmpsecondHandOthInfo,
						secondHandDailyInfood: tmpsecondHandDailyInfo,
						secondHandCarInfood: tmpsecondHandCarInfo,
						secondHandFurnInfood: tmpsecondHandFurnInfo,
						secondHandElcInfood: tmpsecondHandElcInfo,
						secondHandBookInfood: tmpsecondHandBookInfo,
						secondHandOthInfood: tmpsecondHandOthInfo
					});
					var tmpLLLL = [];
					tmpLLLL.push(tmpsecondHandDailyInfo);
					tmpLLLL.push(tmpsecondHandCarInfo);
					tmpLLLL.push(tmpsecondHandFurnInfo);
					tmpLLLL.push(tmpsecondHandElcInfo);
					tmpLLLL.push(tmpsecondHandBookInfo);
					tmpLLLL.push(tmpsecondHandOthInfo);
					console.log(tmpLLLL.length);
					
					that.setData({
						totalList: tmpLLLL
					});
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
			},
			changeTab(e){
				this.clickTab1({
					target:{
						dataset:{
							current1:e.detail.current
						}
					}
				})
			},
			clickTab1: function(e) {
				var that = this;
				let index = e.target.dataset.current1
				if (this.currentTab1 === index) {
					return false;
				} else {
					that.setData({
						showtab: index,
						currentTab1: index
					});
				}
			},
			getUserInfo: function(e) {
				getApp().globalData.userInfo = e.detail.userInfo;
				this.setData({
					userInfo: e.detail.userInfo,
					hasUserInfo: true
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
	@import "./ershou.css";
</style>
