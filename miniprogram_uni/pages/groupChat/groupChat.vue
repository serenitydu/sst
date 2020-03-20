<template>
	<view class="container">
		<scroll-view class="message_rec" scroll-y="true">
			<block v-for="(message, index) in msgs" :key="index">
				<view class="author_cont">
					<image :src="message.avt" class="msg_avt" mode="aspectFill"></image>
					<text class="author_name">{{message.unm}}</text>
				</view>
				<view class="chatBubble">
						<view class="blankSpace"></view>
						<text class="msgText">{{message.cnt}}</text>
						<view class="blankSpace2"></view>
				</view>
			</block>
		</scroll-view>
		<view class="message_send">
			<input class="inputArea" name="psw" placeholder="输入评论" :value="commentInput" @input="setpos"></input>
			<button class="confirm_but" @tap="sendMsg">发送</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentInput:"",
				msgs:[],
				chatRoom: "a",
			}
		},
		onLoad:function(){
			var that=this;
			this.setData({
				chatRoom: getApp().globalData.chatRoom
			})
			uni.request({
				url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/groupchatmtd",
				method: "POST",
				data:{
					mode:1,
					chatRoom: that.chatRoom
				},
				success:function(res){
					that.setData({
						msgs:res.data.Items[0].msgs
					})
				}
			})
		},
		/*
		mounted(){
			//get local storage
			if (localStorage.getItem("chatRoom")){
				try{
					msgs=JSON.parse(localStorage.getItem("chatRoom"));
				}catch(e){
					localStorage.removeItem("chatRoom");
				}
			}else{
				console.log("未找到本地文件");
			}
			//get sql storage
			uni.request({
				
			})
		},
		*/
		methods: {
			setpos:function(e){
				this.setData({
					commentInput:e.detail.value
				})
			},
			sendMsg:function(){
				var that=this;
				var oid=getApp().globalData.openId;
				var unm=getApp().globalData.userNameGG;
				var avt=getApp().globalData.userAvatarUrlGG;
				var content=this.commentInput;
				uni.request({
					url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/groupchatmtd",
					method:"POST",
					data:{
						mode:2,
						newmsg:[{
							avt:avt,
							cnt:content,
							unm:unm,
							open_Id:oid
						}],
						chatRoom:that.chatRoom
					},
					success:function(res){
						console.log(res);
						that.setData({
							msgs:that.msgs.concat([{avt:avt,cnt:content,unm:unm,open_Id:oid}])
						})
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

	@import "./groupChat.css";
</style>
