<template>
	<view>
		<view class="container">
			<block v-for="(message, index) in gList" :key="index">
				<view class="gcBlock" :data-naviParam="message.groupChatId" :data-naviParam2="message.groupChatTitle" @tap="tapGC">
					<view class="nameBlock">
						<view class="avtBlock">
							<image :src="message.authorImg" class="avt" mode="aspectFill"></image>
						</view>
						<view class="infoBlock">
							<view class="authorName">{{message.author}}</view>
							<view class="dateStr">{{message.date}}</view>
						</view>
					</view>
					<view class="contentBlock">
						<image :src="message.img[0]" class="contentImg" mode="aspectFill"></image>
						<view class="descBlock">{{message.desc}}</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gList:[],
				oid:""
			}
		},
		onLoad:function(){
			var that=this;
			this.setData({
				oid:getApp().globalData.openId
			})
			this.setData({
				oid:"uow02122019170522oiw"
			})
			uni.request({
				url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",
				method: "POST",
				data:{
					mode:2,
					target:"GroupActs"
				},
				success:function(res){
					console.log(res.data.Items);
					that.setData({
						gList:res.data.Items
					})
					
					
					
				}
			})
			
		   
		   
		},
		//uow02122019170522oiw
		methods: {
			tapGC:function(e){
				var that=this;
				var asp={
					"title":e.currentTarget.dataset.naviparam2,
					"id":e.currentTarget.dataset.naviparam
				}
				uni.request({
					url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/groupchatmtd",
					method: "POST",
					data:{
						mode:5,
						openId: that.oid
					},
					success:function(res){
						if (res.data=="notFound"){
							if (that.oid=="nihao"){
								uni.showToast({
									title:'请先登录',
									icon:'none',
									position:'bottom'
								})
							}else{
								uni.request({
									url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/groupchatmtd",
									method: "POST",
									data:{
										mode:6,
										groupId:asp,
										openId: that.oid
									},
									success:function(res){
										uni.showToast({
											title:'加入成功',
											icon:'none',
											position:'bottom'
										})
										getApp().globalData.chatRoom=e.currentTarget.dataset.naviparam;
										uni.navigateTo({
											url:"./groupChat"
										})
									}
								})
							}
						}
						else{
							for (var ans in res.data){
								console.log(res.data[ans]);
								if (res.data[ans].id==e.currentTarget.dataset.naviparam){
									uni.showToast({
										title:'你已经在此群里',
										icon:'none',
										position:'bottom'
									})
									getApp().globalData.chatRoom=e.currentTarget.dataset.naviparam;
									uni.navigateTo({
										url:"../groupChat/groupChat"
									})
								}
							}
							uni.request({
								url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/groupchatmtd",
								method: "POST",
								data:{
									mode:4,
									chatRoom:asp,
									openId: that.oid
								},
								success:function(res){
									uni.showToast({
										title:'成功加入',
										icon:'none',
										position:'bottom'
									})
									getApp().globalData.chatRoom=e.currentTarget.dataset.naviparam;
									uni.navigateTo({
										url:"../groupChat/groupChat"
									})
								}
							})
						}
						
						
					}
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
@import "./GroupActList.css";
</style>
