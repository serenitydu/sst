<template>
	<!--index.wxml-->
	<view class="container">
		<view class="loopads" :style="'width:' + loopadsWD + 'px; height: ' + loopadsHT + 'px;'" @touchstart="loopTCHstart"
		 @touchend="loopTCHend">
			<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000" :style="'width:' + loopadsWD + 'px; height: ' + loopadsHT + 'px;'">
				<block v-for="(item, index) in loopimgs1" :key="index">
					<swiper-item>
						<image :src="item.img" class="slide-image" mode="aspectFill" :style="'width: 100%; height: ' + loopadsHT + 'px;'"></image>
						<text class="LoopTxt">{{item.des}}{{info11}}</text>
					</swiper-item>
				</block>
			</swiper>
		</view>


		<scroll-view class="shopList" scroll-y :style="'height: ' + shopHT + 'px;'">
			<block v-for="(item, index) in shops" :key="index">
				<view class="shopCSS" @tap="clickonStore" :data-shopId="item._id" :data-kind="item.kind">
					<image class="shopImg" mode="aspectFill" :src="item.img"></image>
					<text class="shopNM">{{item.title}}\n</text>
					<text class="shopCC">{{item.ccount}} Items</text>
				</view>
			</block>
		</scroll-view>


		<image src="../../static/icons/more.png" mode="aspectFill" class="toAddPage" @tap="toAddPage"></image>
	</view>
</template>

<script>
	
	import { S3Client } from "@aws-sdk/client-s3";
	import { Upload } from "@aws-sdk/lib-storage";
	//test s3
	var uploadingCount=0;
	var s3=new S3Client({
		region: "us-east-2",
		credentials: {
			accessKeyId: "AKIAYRSMNDSISF7IPPPN",
			secretAccessKey: "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"
		}
	});
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
	import popup from "../../component/popup/popup";

	export default {
		data() {
			return {
				info11:"GG1",
				shops: "",
				loopimgs1: "",
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
		    
			
			var that = this;
			
			//update from db
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdata',
				method: 'POST',
				data: {
					dbname: "shops"
				},
				success: function(res) {
					wx.stopPullDownRefresh(); //get user's address to find nearby shops

					var tobeRemoved = [];
					var tmpShopLists = res.data.Items;

					uni.request({
						url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser',
						method: 'POST',
						data:{
							openId:getApp().globalData.openId
						},
						success: function(res) {
							if(res.data.Items[0]){
								var tmpUserAddr = res.data.Items[0].address
								for (var iss = 0; iss < tmpShopLists.length; iss++) {
									var tmpShopAddr = tmpShopLists[iss].address;
									wx.request({
										url: 'https://maps.googleapis.com/maps/api/directions/json?origin=' + tmpShopAddr + '&destination=' + tmpUserAddr + '&key=AIzaSyBN4EcKh9xONylRy2pWlCRhtW4LBK5Voh0',
										success: function(res) {
											if (res.data.routes[0].legs[0].distance.value * 0.000621371 <= deliRange) {
												tobeRemoved.push({
													add: tmpShopAddr
												});
											}
										}
									})
								}
							}
						}
					})

					that.setData({
						shops: tmpShopLists
					});
				}
			});
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdata',
				method: 'POST',
				data: {
					dbname: "frontPageAds",
					openId:getApp().globalData.openId
				},
				success: function(res) {
					that.setData({
						loopimgs1: res.data.Items
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
				loopadsHT: winht * 0.4,
				loopadsWD: winwd,
				//shops-list item size
				shopHT: winht * 0.6
			});
		},
		methods: {
			testUpImg: function(){
				var that = this;
				var imgList=[];
				uni.chooseImage({
				    count: 9, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						var d = new Date();
						imgList=res.tempFiles;
						console.log(imgList[0]['path']);
						var i=0;
						for (i=0;i<imgList.length;i++){
							var aaa;
							var xhr = new XMLHttpRequest();
							xhr.open('GET', imgList[i]['path'], true);
							xhr.responseType = 'blob';
							xhr.onload = function(e) {
								uploadingCount=uploadingCount+1;
							  if (this.status == 200) {
							    aaa = this.response;
								var nnm='public/'+getApp().globalData.openId+d.getTime()+uploadingCount.toString()+'.png';
								var params = {Bucket: 'nagi2', Key: nnm, Body: aaa};
								//var params = {Bucket: 'nagi2', Key: 'public/gggg.png', Body: "https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Cars/March/CR-Cars-InlineHero-Mazda-CX-30-f-3-19"};
								new Upload({ client: s3, params: params }).done().then(function(data) {
								  console.log("uploading...");
								  console.log(data);
								}).catch(function(err) {
								  console.log("uploading...");
								  console.log(err);
								});
							    // myBlob is now the blob that the object URL pointed to.
							  }
							};
							xhr.send();
						}
				    },
					fail:function(res){
						console.log("ymb");
						that.setData({
							info11:"failed"+imgList[0]["path"]
						})
					}
				});
			},
			getUserInfo: function(e) {
				getApp().globalData.userInfo = e.detail.userInfo;
				this.setData({
					userInfo: e.detail.userInfo,
					hasUserInfo: true
				});
			},
			clickonStore: function(e) {
				wx.setStorageSync('shopid', e.currentTarget.dataset.shopid);

				if (e.currentTarget.dataset.kind == 'normal') {
					wx.navigateTo({
						url: '../Store/Store'
					});
				} else {
					wx.navigateTo({
						url: '../Pintuan/Pintuan'
					});
				} //var tmp=wx.getStorageSync('shopid');

			},
			//functions preventing random sliding
			loopTCHstart: function() {
				swipeEnable = false;
			},
			loopTCHend: function() {
				swipeEnable = true;
			},
			toAddPage: function() {
				wx.navigateTo({
					url: '../navi/navi'
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
	@import "./index.css";
</style>
