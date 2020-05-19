<template>
	<view class="container">
		<block v-for="(message, index) in gcList" :key="index">
			<view class="gcBlock" :data-naviParam="message.id"  @tap="tapGC">
				<span class = "imageBlock">
					<image :src="message.firstAvat" class="groupImg"></image>
				</span>
				<view class = "textBlock">
					<view class = "fLine">
						<text class="titleText">{{message.title}}</text>
						<text class="timeText">{{message.tsp}}</text>
						
					</view>
					<view class = "sLine">
						<text class="messageText">{{message.lastMsg}}</text>
						
						
					</view>
					
				</view>
				
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
					var gc=res.data;
					that.setData({
						gcList:gc
					})
					var tmp=that.gcList
					for (var ids in that.gcList){
						uni.request({
							url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/groupchatmtd",
							method: "POST",
							data:{
								mode:7,
								chatRoomId: that.gcList[ids].id
							},
							success:function(res){
								var i=0;
								for (i=0;i<tmp.length;i++){
									if (tmp[i].id==res.data.chatRoomId){
										tmp[i].lastMsg=res.data.cnt;
										tmp[i].tsp=res.data.timeStp;
										break;
									}
								}
								that.setData({
									gcList:tmp
								})
								console.log(that.gcList);
								
							}
						})
					}
					
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
