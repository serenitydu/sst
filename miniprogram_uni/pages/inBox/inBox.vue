<template>
	<view>
		<scroll-view class="container">
			<block v-for="(message, index) in messages" :key="index">
				<view class="mssView" :data-ind="idx" @tap="makeRead">
					<text space="true" decode="true" style="white-space:pre-wrap; ">{{message.content}}</text>
					<text>\nby: {{message.userName}} </text>
					<image class="newMss" src="https://cdn11.bigcommerce.com/s-hfhomm5/images/stencil/500x659/products/180/451/Solid_Red_Sized__25214.1507754519.jpg?c=2&imbypass=on"
					 v-if="message.status=='unread'"></image>

				</view>

			</block>
		</scroll-view>
		<view class="notificationArea">{{indicator}}</view>
		<view class="inputArea">
			<input placeholder="输入" @input="setInput" class="input1"></input>
			<button class="but1" open-type="getUserInfo" @getuserinfo="replyTo">提交</button>
		</view>
		<image src="https://cdn0.iconfinder.com/data/icons/essentials-solid/100/Refresh-512.png" mode="aspectFill" class="refreshBut"
		 @tap="refresh"></image>
	</view>
</template>

<script>
	//screen reso
	var winwd = 0;
	var winht = 0;
	var tmpid;
	// wx.cloud.init();

	export default {
		data() {
			return {
				messages: [],
				input: "",
				indicator: '载入中......',
				targetOid: '',
				subable: true,
				replyContent: ''
			};
		},

		components: {},
		props: {},
		onPullDownRefresh: function() {
			wx.stopPullDownRefresh();
		},
		onLoad: function() {
			this.setData({
				indicator: '载入中......'
			});
			var that = this;
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox',
				method: 'POST',
				data: {
					mode: 2,
					openId: getApp().globalData.openId
				},
				success: function(res) {
					console.log(res);

					if (res.data.Items.length == 0) {
						console.log('user not exist, add it to db'); //not exist

						uni.request({
							url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox',
							method: 'POST',
							data: {
								mode: 1,
								openId: getApp().globalData.openId
							},
							success: function(res) {
								console.log(res);
								that.setData({
									indicator: '请选择回复信息'
								});
							}
						});
					} else {
						//exist
						console.log('user exist, pull it from db');
						console.log(res.result.data[0].inbox);
						that.setData({
							messages: res.result.data[0].inbox,
							indicator: '请选择回复信息'
						});
						/*
						var tmpBox = res.result.data[0].inbox;
						//set all message to read
						for (var i = 0; i < tmpBox.length;i++){
						  tmpBox[i].status='read';
						}
						wx.cloud.callFunction({
						  name: 'manageInBox',
						  data:{
						    mode:5,
						    readBox:tmpBox
						  },success:function(res){
						    console.log('all read');
						  }
						})
						*/
					}
				}
			});
		},
		methods: {
			setInput: function(e) {
				this.setData({
					input: e.detail.value
				});
			},
			replyTo: function(e) {
				if (this.subable) {
					this.setData({
						subable: false
					});
					this.setData({
						indicator: '上传回复中......'
					});
					var that = this;
					var targetOpenId = this.targetOid; //1. get target's inbox id

					uni.request({
						url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox',
						method: 'POST',
						data: {
							mode: 3,
							target_openId: targetOpenId
						},
						success: function(res) {
							//check if that user has inbox
							console.log(res);
							var tmpRes = res;

							if (res.result.data.length == 0) {
								//user not exist
								console.log('user not exist');
								uni.request({
									url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox',
									method: 'POST',
									data: {
										mode: 6,
										target_openId: targetOpenId
									},
									success: function(res) {
										//created new inbox for that user
										console.log(res); //check number of space

										var nspc = 0;

										for (var i = 0; i < that.replyContent.length; i++) {
											if (that.replyContent.charAt(0) == ' ') {
												nspc++;
											}
										}

										var spc = '';

										for (var i = 0; i < nspc; i++) {
											spc += '&nbsp;';
										} //publish new comment


										console.log(res.result._id);
										var inboxId = res.result._id;
										uni.request({
											url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox',
											method: 'POST',
											data: {
												mode: 4,
												target_inBoxId: inboxId,
												content: that.replyContent + '\n' + spc + that.input,
												timeStamp: 46545665,
												unm: e.detail.userInfo.nickName,
												openId: getApp().globalData.openId
											},
											success: function(res) {
												console.log("成功发布");
												that.setData({
													indicator: '成功发布回复'
												});
											}
										});
									}
								});
							} else {
								//check number of space
								var nspc = 0;

								for (var i = 0; i < that.replyContent.length; i++) {
									if (that.replyContent.charAt(0) == ' ') {
										nspc++;
									}
								}

								var spc = '';

								for (var i = 0; i < nspc + 2; i++) {
									spc += '&nbsp;';
								} //user exist


								console.log(tmpRes.result.data[0]._id);
								var inboxId = tmpRes.result.data[0]._id;
								uni.request({
									url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox',
									method: 'POST',
									data: {
										mode: 4,
										target_inBoxId: inboxId,
										content: that.replyContent + '\n' + spc + that.input,
										timeStamp: 46545665,
										unm: e.detail.userInfo.nickName,
										openId: getApp().globalData.openId
									},
									success: function(res) {
										console.log("成功发布");
										that.setData({
											indicator: '成功发布回复'
										});
									}
								});
							}
						}
					});
					this.setData({
						subable: true
					});
				}
			},
			makeRead: function(e) {
				var that = this;
				var tmpBox = this.messages;
				var targetOpenId = tmpBox[e.currentTarget.dataset.ind].oid;
				var targetName = tmpBox[e.currentTarget.dataset.ind].userName;
				var ctt = tmpBox[e.currentTarget.dataset.ind].content;
				console.log(e.currentTarget.dataset.ind);
				this.setData({
					indicator: '回复给 ' + targetName,
					targetOid: targetOpenId,
					replyContent: ctt
				});

				if (tmpBox[e.currentTarget.dataset.ind].status != 'read') {
					tmpBox[e.currentTarget.dataset.ind].status = 'read';
					uni.request({
						url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox',
						method: 'POST',
						data: {
							mode: 5,
							readBox: tmpBox,
							openId: getApp().globalData.openId
						},
						success: function(res) {
							console.log('read');
							that.setData({
								messages: tmpBox
							});
						}
					});
				}
			},
			refresh: function() {
				this.onLoad();
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
	@import "./inBox.css";
</style>
