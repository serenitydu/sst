<template>
	<view class="container">
		<view class="topPanel">
			<view class="authPanel">
				<image :src="gInfo.authorImg" class="avt" mode="aspectFill"></image>
				<view class="nameSpace">
					<text class="names">{{gInfo.author}}</text>
					<text class="names">{{gInfo.date}}</text>
				</view>
			</view>
			<view class="imgDisp">
				<swiper class="swiper" autoplay="true" interval="5000" duration="1000" >
				  <block v-for="(item, index) in gInfo.img" :key="index">
					<swiper-item>
					  <image :src="item" class="lbt" mode="aspectFill"></image>
					</swiper-item>
				  </block>
				</swiper>
			</view>
			<view class="desc">
				<text class="txts">{{gInfo.title}}</text>
				<text class="txts2">{{gInfo.desc}}</text>
			</view>
		</view>
		<view class="spaceA"></view>
		<view class="botPanel">
			<view class="joinBt" :data-naviParam="gInfo.groupChatId" :data-naviParam2="gInfo.groupChatTitle"  @tap="tapGC">
				<text class="txts3">加入群聊</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gInfo:{}
			}
		},
		onLoad:function(){
			console.log("saffsafsafs");
			this.setData({
				gInfo:getApp().globalData.groupActInfo
			})
		   console.log(getApp().globalData.groupActInfo);
		   
		},
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
	@import "./GroupActPage.css";
</style>

