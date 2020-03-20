<template>
	<view class="zai-box">
		<image src="../../static/zaizai-login/register.png" mode='aspectFit' class="zai-logo"></image>
		<view class="zai-title">LOGO区域</view>
		<view class="zai-form">
			<input class="zai-input" v-model="userName" placeholder-class placeholder="请输入用户名" />
			<input class="zai-input" v-model="userCode" placeholder-class password placeholder="请输入密码"/>
			<input class="zai-input" v-model="userCodeConfirm" placeholder-class password placeholder="请再输入一次密码"/>
			<button class="zai-btn" v-on:click="onClickRegi">立即注册</button>
			<navigator url="../login/login" open-type='navigateBack' hover-class="none" class="zai-label">已有账号，点此去登录.</navigator>
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
				userCodeConfirm:"",
				clicked: false
			};
		},
	
		components: {},
		props: {},
		onLoad: function() {
			console.log(this.$data.userName);
		},
			
		methods:{
			onClickRegi: function() {
				var that=this;
				if (!this.$data.clicked){
					if (this.$data.userCodeConfirm.length<6){
						uni.showToast({
							title:'密码需要至少6位',
							icon:'none',
							position:'bottom'
						})
						console.log("密码需要至少6位");
					}
					else{
						
						if (this.$data.userCodeConfirm.localeCompare(this.$data.userCode)==0){
							console.log("密码符合");
							this.setData({
								clicked:true
							})
							uni.request({
								url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/reginewuser',
								method: 'POST',
								data: {
									userName: this.$data.userName,
									userCode: this.$data.userCodeConfirm,
								},
								success: function(res) {
									if (res.data.localeCompare("Nope!")==0){
										//already registered
										uni.showToast({
											title:'用户名已被使用',
											icon:'none',
											position:'bottom'
										})
										console.log("用户名已被使用");
									}else{
										//registered
										uni.showToast({
											title:'注册成功',
											icon:'none',
											position:'bottom'
										})
										console.log("注册成功");
										uni.navigateTo({
											url: '../login/login',
										});
									}
									that.setData({
										clicked:false
									})
								},
							})
						}else{
							console.log("密码不和");
							
						}
					}
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
		margin-top: 60upx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>