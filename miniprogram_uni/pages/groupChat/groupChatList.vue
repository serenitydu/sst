<template>
	<view class="container">
		<block v-for="(message, index) in gcList" :key="index">
			<view class="gcBlock" :data-naviParam="message.id"  @tap="tapGC">
				<span class = "imageBlock">
					<image src="../../static/bear-smile-line.png" class="groupImg"></image>
				</span>
				<span class = "titleBlock">
					<text class="titleText">{{message.title}}</text>
				</span>
				
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gcList:[]
			}
		},
		onLoad:function(){
			var that=this;
			
			uni.request({
				url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/groupchatmtd",
				method: "POST",
				data:{
					mode:5,
					openId: getApp().globalData.openId
				},
				success:function(res){
					console.log(res.data);
					
					var gc=res.data
					that.setData({
						gcList:gc
					})
					
				}
			})
			
		   
		   
		},
		methods: {
			tapGC:function(e){
				console.log(e.currentTarget.dataset.naviparam);
				getApp().globalData.chatRoom=e.currentTarget.dataset.naviparam;
				uni.navigateTo({
					url:"./groupChat"
				})
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
	}
</script>

<style>
	@import "./groupChatList.css";
</style>
