<template>
	<view class="zai-box">
		<image src="../../static/zaizai-login/login.png" mode='aspectFit' class="zai-logo"></image>
		<view class="zai-title">{{infoText}}</view>
		<view class="zai-form">
			<input class="zai-input" v-model="userName" placeholder-class placeholder="请输入用户名" />
			<input class="zai-input" v-model="userCode" placeholder-class password placeholder="请输入密码"/>
			<view class="zai-label">忘记密码？</view>
			<button class="zai-btn" v-on:click="onClickSignin">立即登录</button>
			<navigator url="../register/register" hover-class="none" class="zai-label">还没有账号？点此注册.</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// onPullDownRefresh: function () {
				//   wx.stopPullDownRefresh()
				// },
				userName:"",
				userCode:"",
				clicked:false,
				infoText:"sss"
			};
		},
	
		components: {},
		props: {},
		onLoad: function() {
			console.log(this.$data.userName);
			
		},
			
		methods:{
			onClickSignin: function() {
				console.log(this.userCode.match(/[\uff00-\uffff]/g));
				var that=this;
				if(!this.$data.userName || !this.$data.userName){
					uni.showToast({
						title:'请输入用户名或密码',
						icon:'none',
						position:'bottom'
					})
					return false
				}
				if (!this.$data.clicked){
					this.setData({
						clicked:true
					})
					uni.request({
						url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/checkusercred',
						method: 'POST',
						data: {
							userName: this.$data.userName,
							userCode: this.$data.userCode,
						},
						success: function(res) {
							that.setData({
								infoText:that.userCode+"  "+that.userName
							})
							console.log(res);
							if (res.data.localeCompare("Nope!")==0){
								//wrong unm/pcd
								uni.showToast({
									title:'用户名密码错误',
									icon:'none',
									position:'bottom'
								})
								that.setData({
									clicked:false
								})
							}else{
								getApp().globalData.openId=res.data;
								//get user vat and nm
								uni.request({
									url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser',
									method: 'POST',
									data: {
										openId: getApp().globalData.openId
									},success:function(res){
										console.log(res);
										getApp().globalData.userNameGG=res.data.Items[0].nickName;
										getApp().globalData.userAvatarUrlGG=res.data.Items[0].avtUrl;
										console.log("glb dta "+getApp().globalData.openId);
										uni.showToast({
											title:'登陆成功',
											icon:'none',
											position:'bottom'
										})
										that.setData({
											clicked:false
										})
										uni.switchTab({
											url: '../userInfo/userInfo',
										});
										uni.setStorage({
											key:"unmGG",
											data: getApp().globalData.userNameGG
										})
										uni.setStorage({
											key:"avtGG",
											data: getApp().globalData.userAvatarUrlGG
										})
										uni.setStorage({
											key:"oidGG",
											data: getApp().globalData.openId
										})
									}
								})
								
							}
						}
					})
				}
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
	.zai-box{
		padding: 0 100upx;
		position: relative;
	}
	.zai-logo{
		width: 100%;
		width: 100%;
		height: 310upx;
	}
	.zai-title{
		position: absolute;
		top: 0;
		line-height: 360upx;
		font-size: 68upx;
		color: #fff;
		text-align: center;
		width: 100%;
		margin-left: -100upx;
	}
	.zai-form{
		margin-top: 300upx;
	}
	.zai-input{
		background: #e2f5fc;
		margin-top: 30upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
	}
	.input-placeholder, .zai-input{
		color: #94afce;
	}
	.zai-label{
		padding: 60upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}
	.zai-btn{
		background: #ff65a3;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>
