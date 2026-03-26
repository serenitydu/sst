<template>
	<view class="bkg">
		<view class="avtSpace">
			<image :src="avtUrl" @click="uploadImg" class="avtImg" mode="aspectFill" ></image>
		</view>
		<view  @tap="openInputBlock" class="nameSpace">{{userName}}</view>
		<view class="blankSpace">点击以更改头像/昵称</view>
		<view v-if="enabledBlock" class="changeNameBlock">
			<input @input="inputed" class="inputBlock" maxlength="20" placeholder="请输入新用户名..." clearable=true>
			<view class="confirmBtBlock">
				<view   @tap="submitUserName" class="confirmBt">确认</view>
				<view   @tap="disableBlock" class="confirmBt">取消</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
	import { Upload } from "@aws-sdk/lib-storage";
	var awsConfig = require("../../utils/awsConfig.js");
	//test s3
	var uploadingCount=0;
	var s3=new S3Client({
		region: awsConfig.region,
		credentials: {
			accessKeyId: awsConfig.accessKeyId,
			secretAccessKey: awsConfig.secretAccessKey
		}
	});
	export default {
		data() {
			return {
				avtUrl: "",
				userName:"",
				newName:"",
				enabledBlock:false
			}
		},
		onLoad: function (options) {
		    this.setData({
				avtUrl: getApp().globalData.userAvatarUrlGG,
				userName: getApp().globalData.userNameGG,
			})
		},
		onShow: function (options) {
		    this.setData({
				avtUrl: getApp().globalData.userAvatarUrlGG,
				userName: getApp().globalData.userNameGG,
			})
		},
		methods: {
			inputed:function(e){
				this.setData({
					newName:e.detail.value
				})
			},
			openInputBlock:function(){
				this.setData({
					enabledBlock: true
				})
				
			},
			disableBlock:function(){
				this.setData({
					enabledBlock: false
				})
			},
			submitUserName:function(){
				var that=this;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateuserinfo',
					method: 'POST',
					data: {
						mode: 4,
						openId: getApp().globalData.openId,
						nickName: that.newName
					},
					success: function(res) {
						console.log("update completed");
						that.setData({
							enabledBlock: false,
							userName: that.newName
						})
					}
				});
			},
			uploadImg:function(){
				var that=this;
				var d=new Date();
				var oldAvt=this.avtUrl;
				uni.chooseImage({
					count:1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success:function(res){
						var aaa;
						console.log(res.tempFiles);
						var imgidx=res.tempFiles[0];
						var xhr = new XMLHttpRequest();
						xhr.open('GET', imgidx['path'], true);
						xhr.responseType = 'blob';
						xhr.onload = function(e) {
						   if (this.status == 200) {
								aaa = this.response;
								var nnm='public/avatar/avat'+getApp().globalData.openId+d.getTime().toString()+".png";
								var params = {Bucket: 'nagi2', Key: nnm, Body: aaa};
								new Upload({ client: s3, params: params }).done().then(function(data) {
								  console.log("uploading...");
								  console.log("openId:"+getApp().globalData.openId);
								  console.log(data);
								  var ef="https://nagi2.s3.amazonaws.com/"+nnm;
								  uni.request({
								  	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateuserinfo',
								  	method: 'POST',
								  	data: {
								  		mode: 3,
								  		openId: getApp().globalData.openId,
										avtUrl: ef
								  	},
								  	success: function(res) {
										console.log("update completed");
										that.setData({
											avtUrl:ef
										})
										var newStr=oldAvt.substring(31,oldAvt.length);
										console.log(newStr);
										var params2={
											Bucket: "nagi2",
											Key:newStr
											//Key:"public/avatar/avatuow02122019170522oiw1578885912285.png"
										}
										s3.send(new DeleteObjectCommand(params2)).then(function(data){
											console.log(data);
										}).catch(function(err){
											console.log(err);
										})
								  	},
									fail:function(res){
										console.log(res);
									}
								  });
								}).catch(function(err) {
								  console.log("uploading...");
								  console.log(err);
								})
							}
						}
						xhr.send();
					}
				})
			},
			setData: function (obj, callback) {
			  let that = this;
			  let keys = [];
			  let val, data;
			  Object.keys(obj).forEach(function (key) {
			    keys = key.split('.');
			    val = obj[key];
			    data = that.$data;
			    keys.forEach(function (key2, index) {
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
@import "./userFile.css";
</style>
