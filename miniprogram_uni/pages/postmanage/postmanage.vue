<template>
	<view>
		<view>
			<scroll-view class="botPanel" scroll-y="true">
				<view class="weui-cells__title">帖子管理</view>
				<view class="record-box" v-for="(post, index) in posts" :key="index">
					<view class="record" :style="'left:' + post.offsetX + 'px'" @touchstart="recordStart" catchtouchmove="recordMove"
					 :data-index="idx" @touchend="recordEnd" :data-naviParam="post" :data-commuId="post.comDir" :data-commuListId="post._id"
					 @tap="tapComu">
						<view class="left">
							{{post.detail}}
						</view>
						<view class="right">
							{{post.date}}
						</view>
					</view>
					<view class="delete-box" :data-targetind="idx" @touchend="recordEnd" :data-naviParam="post" :data-commuId="post.comDir"
					 :data-commuListId="post._id" @tap="deletePost">
						<view>删除</view>
					</view>
				</view>

			</scroll-view>

		</view>

		<view v-if="!cd" class="cover0">
			<view class="cover2">
				<image src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif" class="sendingGif"></image>
				<view class="loadingText">Deleting...</view>
			</view>

			<view class="cover">
			</view>
		</view>
	</view>
</template>

<script>
	var recordStartX = 0;
	var currentOffsetX = 0;
	var canDelete = true;
	var util = require("../../utils/util.js");

	export default {
		data() {
			return {
				posts: [],
				cd: true,
				community: ""
			};
		},

		components: {},
		props: {},
		onLoad: function() {
			this.pullUserPost();
		},
		methods: {
			recordStart: function(e) {
				recordStartX = e.touches[0].clientX;
				currentOffsetX = this.posts[e.currentTarget.dataset.index].offsetX;
				console.log('start x ', recordStartX);
			},
			recordMove: function(e) {
				console.log(e.currentTarget.dataset.index);
				var posts = this.posts;
				var item = posts[e.currentTarget.dataset.index];
				var x = e.touches[0].clientX;
				var mx = recordStartX - x;
				console.log('move x ', mx);
				var result = currentOffsetX - mx;

				if (result >= -80 && result <= 0) {
					item.offsetX = result;
				}

				this.setData({
					posts: posts
				});
			},
			recordEnd: function(e) {
				var posts = this.posts;
				var item = posts[e.currentTarget.dataset.index];
				console.log('end x ', item.offsetX);

				if (item.offsetX < -40) {
					item.offsetX = -80;
				} else {
					item.offsetX = 0;
				}

				this.setData({
					posts: posts
				});
			},
			//redirect to posts
			tapComu: function(e) {
				var that = this;
				var inde = e.currentTarget.dataset.index; //取得全局App({..})实例

				getApp().globalData.var1 = e.currentTarget.dataset.commuid; //取得全局变量需要的值

				var cid = e.currentTarget.dataset.commulistid;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter',
					method: 'POST',
					data: {
						postId: cid,
						mode: 2
					},
					success: function(res) {
						var tmpList = that.posts;
						console.log(tmpList);
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
			//delete post with given post id
			deletePost: function(e) {
				console.log(e);
				var that = this;

				if (canDelete) {
					canDelete = false;
					this.setData({
						cd: false
					});
					var index = e.currentTarget.dataset.targetind;
					var commuListId = this.posts[e.currentTarget.dataset.targetind]._id;
					var tmpXiaoneiId = this.posts[e.currentTarget.dataset.targetind].comDir;
					var that = this;
					var imgs = this.posts[e.currentTarget.dataset.targetind].img;
					uni.request({
						url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/deletewithid',
						method: 'POST',
						data: {
							dbname: 'xiaonei',
							id: tmpXiaoneiId
						},
						success: function(res) {
							uni.request({
								url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/deletewithid',
								method: 'POST',
								data: {
									dbname: 'commuList',
									id: commuListId
								},
								success: function(res) {
									console.log("Succc");
									util.cloudRemove(imgs);
									var tmp = that.posts;
									tmp.splice(index, 1);
									that.setData({
										posts: tmp
									});
									canDelete = true;
									that.setData({
										cd: true
									});
								},
								fail: function(res) {
									console.log("disanceng");
									console.log(res);
								}
							});
						},
						fail: function(res) {
							console.log(res);
						}
					});
				} else {}
			},
			//pull user's posts
			pullUserPost: function() {
				console.log("loading user posts");
				var that = this;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/managepost',
					method:'POST',
					data: {
						mode: 2,
						dbname: 'commuList'
					},
					success: function(res) {
						console.log(res.data.Items);
						that.setData({
							posts: res.data.Items
						});
					},
					fail: function(res) {
						console.log("fail");
						console.log(res);
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
	@import "./postmanage.css";
</style>
