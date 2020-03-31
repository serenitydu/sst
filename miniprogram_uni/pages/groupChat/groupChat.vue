<template>
	<view class="container">
		<scroll-view class="message_rec" scroll-y="true">
			<view class="blankArea"></view>
			<block v-for="(message, index) in msgs" :key="index">
				<view v-if="userId!=message.open_Id" class="chatArea">
					<image :src="message.avt" class="msg_avt1" mode="aspectFill"></image>
					<text class="msgText"><div class = "msgTextAlign">{{message.cnt}}</div></text>
				</view>
				<view v-else class="chatArea">
					<text class="msgText2"><div class = "msgTextAlign">{{message.cnt}}</div></text>
					<image :src="message.avt" class="msg_avt2" mode="aspectFill"></image>
				</view>
				<view class="timeB">
					<text class="msgDate">{{message.tsp}}</text>
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
				userId:"nihao"
			}
		},
		onLoad:function(){
			this.setData({
				userId:getApp().globalData.openId
			})
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
					console.log(res);
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
				var dt=new Date();
				var yr=dt.getYear()+1900;
				var mn=dt.getMonth()+1;
				var dtStr=yr.toString()+"-"+mn.toString()+"-"+dt.getDate().toString()+" "+dt.getHours().toString()+":"+dt.getMinutes().toString();
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
							open_Id:oid,
							tsp:dtStr
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
