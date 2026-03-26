<template>
	<view class="containor">
		<view class="publish_text_area">
			<!-- 标题 -->
			<view class="text_area_title">
				<input class="title_input" placeholder="请输入标题" maxlength="25" placeholder-style="color:#b3b3b3;font-size:16px;"
				 @input="handleTitleInput" :value="title"></input>
				<!-- 标题字数限制 -->
				<view :class="( titleCount < 25 ? 'title_input_counter' : 'title_input_error_counter' )">{{titleCount}}/25</view>
			</view>
			<!-- 内容 -->
			<view class="text_area_content">
				<view class="area_content">
					<view class="area_content_out">
						<textarea class="content-textarea" placeholder="请输入正文内容..." maxlength="400" placeholder-style="color:#b3b3b3;font-size:12px;"
						 style="height: 8rem" @input="handleContentInput" :value="content"></textarea>
						<!-- 字数限制 -->
						<view :class="( contentCount < 400 ? 'content_textarea_counter' : 'content_textarea_error_counter')">{{contentCount}}/400</view>
					</view>
				</view>
			</view>
		</view>

		<view class="publish_imgs_area">
			<!-- 图片 -->
			<view class="imgs_area" v-for="(item, index) in images" :key="index">
				<view class="iamge_item">
					<image class="iamge_content" :src="item" :data-id="index" mode="aspectFill" @tap="previewIamge"></image>
					<image class="iamge_cancel" src="../../static/icons/delete.png" mode="aspectFill" :data-id="index" @tap="deleteImage"></image>
				</view>
			</view>

			<!-- 图片上传图片按钮 -->
			<view class="imgs_area" @tap="chooseImage" v-if="images.length < 9">
				<view class="iamge_item">
					<image class="iamge_content" src="../../static/icons/add.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>

		<view class="choice_area">
			<view class="text_area_title">
				<input class="title_input" placeholder="Selling price" placeholder-style="color:#b3b3b3;font-size:16px;" @input="setprice"></input>
			</view>

			<view class="text_area_title">
				<input class="title_input" placeholder="Zip" placeholder-style="color:#b3b3b3;font-size:16px;" @input="setpos"></input>
			</view>

			<view class="text_area_title">
				<input class="title_input" placeholder="Original price" placeholder-style="color:#b3b3b3;font-size:16px;" @input="setoriPrice"></input>
			</view>

			<view class="text_area_title">
				<picker class="picker" :style="'color:' + pickerColor" @change="bindPickerChange" :value="index" :range="array1">
					{{startWord}}
				</picker>
			</view>

		</view>

		<view class="btn_all_area">
			<button class="btn_area" type="primary" open-type="getUserInfo" @tap="submit">提交</button>
		</view>
	</view>
</template>

<script>
	import { S3Client } from "@aws-sdk/client-s3";
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
	var tempFilePaths;
	var clickable = true;
	const mainCat = ["日常用品", "二手汽车", "家具生活", "其他"];

	var util = require("../../utils/util.js");

	export default {
		data() {
			return {
				pickerColor: '#b3b3b3',
				buttonStatus: false,
				startWord: "Catagory",
				cata: "撒旦发生",
				catal: mainCat[3],
				price: 0,
				oriPrice: 0,
				index: 0,
				array1: ["top", "jg", "mid", "bot", "sup"],
				division: "",
				tag: [],
				pos: '',
				currentTab1: 3,
				isRequest: false,
				// 标题数
				titleCount: 0,
				// 详情数
				contentCount: 0,
				// 标题内容
				title: "",
				// 标题内容
				content: "",
				
				uploadingCount:0,
				// 图片列表
				images: [],
				imagesOri: [],
			};
		},

		components: {},
		props: {},

		onLoad() {
			var tmpCat = "";
			tmpCat = wx.getStorageSync("postR");

			if (tmpCat.localeCompare("出二手") == 0 || tmpCat.localeCompare("技能提供") == 0) {
				this.setData({
					isRequest: true
				});
			}

			this.setData({
				cata: tmpCat
			});
		},

		methods: {
			clickTab1: function(e) {
				var that = this;
				that.setData({
					currentTab1: e.target.dataset.current1,
					catal: mainCat[e.target.dataset.current1]
				});
				console.log(this.catal);
			},
			submit: function(e) {
				var uName = getApp().globalData.userNameGG;
				var uAva = getApp().globalData.userAvatarUrlGG;
				var that = this;
				this.setData({
					buttonStatus: true
				});

				if (clickable) {
					var timeStp = new Date();
					console.log(timeStp.getHours().toString() + ":" + timeStp.getMinutes());
					console.log(timeStp.getMonth() + 1 + "/" + timeStp.getDate().toString() + "/" + timeStp.getFullYear().toString());
					var dateString = (timeStp.getMonth() + 1).toString() + "/" + timeStp.getDate().toString() + "/" + timeStp.getFullYear()
						.toString();
					var timeString = timeStp.getHours().toString() + ":" + timeStp.getMinutes();
					var newDate = dateString + " " + timeString;
					this.clickable = false;
					wx.setStorage({
						key: 'newPost',
						data: this
					});
					var tmparr = this.images;
					var tmparr2 = [];
					var cat1 = this.catal;
					var name1 = this.title;
					var description1 = this.content;
					var price1 = parseFloat(this.price);
					var oriprice1 = parseFloat(this.oriprice);
					var tags1 = this.tag;
					var position1 = this.pos;
					var leng = tmparr.length;
					var finished = 0;

					if (tmparr.length != 0) {
						tmparr.forEach(function (imgidx) {
						  var tmpCloudPath = "";
									
									
									var d = new Date();
									var i=0;
									var aaa;
									var xhr = new XMLHttpRequest();
									xhr.open('GET', imgidx['path'], true);
									xhr.responseType = 'blob';
									xhr.onload = function(e) {
										uploadingCount=uploadingCount+1;
									    if (this.status == 200) {
											aaa = this.response;
											var nnm='public/'+getApp().globalData.openId+d.getTime()+uploadingCount.toString()+'.png';
											tmparr2.push("https://nagi2.s3.amazonaws.com/"+nnm);
											console.log("tmparr2 in");
											console.log(tmparr2);
											var params = {Bucket: 'nagi2', Key: nnm, Body: aaa};
											//var params = {Bucket: 'nagi2', Key: 'public/gggg.png', Body: "https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Cars/March/CR-Cars-InlineHero-Mazda-CX-30-f-3-19"};
											new Upload({ client: s3, params: params }).done().then(function(data) {
											  console.log("uploading...");
											  console.log(data);
											  finished++;
											  			console.log("tmparr2 out");
											  			console.log(tmparr2);
											  
											  if (finished == leng) {
											  	//database
											  	uni.request({
											  		url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateershoudata',
											  		method: 'POST',
											  		// 传给云函数的参数
											  		data: {
											  			openId: getApp().globalData.openId,
											  			cat: cat1,
											  			name: name1,
											  			description: description1,
											  			price: price1,
											  			oriprice: oriprice1,
											  			tags: tags1,
											  			position: position1,
											  			img: tmparr2,
											  			authorName: uName,
											  			authorAva: uAva,
											  			timeStamp: newDate
											  		},
											  		success: function(res) {
											  			that.setData({
											  				buttonStatus: false
											  			});
											  			util.updateUserDateRecord(1);
											  			wx.switchTab({
											  				url: '../commu/commu'
											  			});
											  		},
											  		fail: function(res) {
											  			console.log(res);
											  		}
											  	});
											  }
											}).catch(function(err) {
											  console.log("uploading...");
											  console.log(err);
											});
										    // myBlob is now the blob that the object URL pointed to.
										}
									};
									xhr.send();
								

								console.log(tmpCloudPath);
								console.log("uploaded");
							
						});
					} else {
						uni.request({
							url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateershoudata',
							method: 'POST',
							// 传给云函数的参数
							data: {
								openId: getApp().globalData.openId,
								cat: cat1,
								name: name1,
								description: description1,
								price: price1,
								oriprice: oriprice1,
								tags: tags1,
								position: position1,
								img: [],
								authorName: uName,
								authorAva: uAva,
								timeStamp: newDate
							},
							success: function(res) {
								console.log("uploaded1");
								console.log(res);
								that.setData({
									buttonStatus: false
								});
								util.updateUserDateRecord(1);
								wx.switchTab({
									url: '../commu/commu'
								});
							},
							fail: function(res) {
								console.log(res);
							}
						});
					}
				}
			},
			setTitle: function(e) {
				this.setData({
					title: e.detail.value
				});
			},
			settags: function(e) {
				var tmp = e.detail.value;
				var tm = [];
				tm = tmp.split(";");

				if (tm[tm.length - 1].localeCompare("") == 0) {
					tm.pop();
				}

				this.setData({
					tag: tm
				});
			},
			setDes: function(e) {
				this.setData({
					content: e.detail.value
				});
			},
			setprice: function(e) {
				this.setData({
					price: e.detail.value
				});
			},
			setpos: function(e) {
				this.setData({
					pos: e.detail.value
				});
			},
			setoriPrice: function(e) {
				this.setData({
					oriPrice: e.detail.value
				});
			},
			bindPickerChange: function(e) {
				console.log(e.detail.value);
				this.setData({
					startWord: this.array1[e.detail.value]
				});

				if (this.startWord != 'Catagory') {
					this.setData({
						pickerColor: 'black'
					});
				}
			},

			// 标题操作
			handleTitleInput(event) {
				let inputValue = event.detail.value; // 确保标题不存在空格  

				if (inputValue.lastIndexOf(" ") != -1) {
					inputValue = inputValue.substring(0, inputValue.lastIndexOf(" "));
				}

				let titleCount = inputValue.length;

				if (titleCount <= 25) {
					this.setData({
						titleCount: titleCount,
						title: inputValue
					});
				}
			},

			// 内容操作
			handleContentInput(event) {
				let textareaValue = event.detail.value;
				let contentCount = textareaValue.length;

				if (contentCount <= 400) {
					this.setData({
						contentCount: contentCount,
						content: textareaValue
					});
				}
			},

			ImageOperator() {
			  uni.chooseImage({
			    count: 9,
			    sizeType: ['original', 'compressed'],
			    sourceType: ['album', 'camera'],
			    success: res => {
			      // 上传的图片数据
			      const imgList = res.tempFilePaths; // 原始的图片数据
				  const imgListOri = res.tempFiles;
				  
			      const imageList = this.images; // 原来的图片数量
				  const imageListOri = this.imagesOri;
			
			      let imageLenght = imageList.length; // 当前的图片数量
			
			      let nowLenght = imgList.length;
			      console.log(imageLenght);
			
			      if (imageLenght == 9) {
			        console.log("数量已经有9张，请删除在添加...");
			      }
			
			      if (imageLenght < 9) {
			        let images = []; // 获取缺少的图片张数
					let imagesOri = [];
			        let residue = 9 - imageLenght; // 如果缺少的张数大于当前的的张数  
			
			        if (residue >= nowLenght) {
			          // 直接将两个数组合并为一个  
			          images = imageList.concat(imgList);
			          imagesOri = imageListOri.concat(imgListOri);
			        } else {
			          // 否则截取当前的数组一部分  
			          images = imageList.concat(imgList.slice(0, residue));
			          imagesOri = imageListOri.concat(imgListOri.slice(0, residue));
			        }
			        this.setData({
			          images,
					  imagesOri
			        });
			      }
			    }
			  });
			},

			// 图片获取
			chooseImage() {
				if (this.images.length == 0) {
					wx.showToast({
						title: '请选择要上传的图片',
						icon: 'none',
						duration: 2000,
						success: res => {
							this.ImageOperator();
						}
					});
				} else {
					this.ImageOperator();
				}
			},

			// 删除图片
			deleteImage(event) {
				//获取数据绑定的data-id的数据
				const nowIndex = event.currentTarget.dataset.id;
				let images = this.images;
				images.splice(nowIndex, 1);
				this.setData({
					images
				});
			},

			// 预览图片
			previewIamge(event) {
				const nowIndex = event.currentTarget.dataset.id;
				const images = this.images;
				wx.previewImage({
					current: images[nowIndex],
					//当前预览的图片
					urls: images //所有要预览的图片

				});
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
	@import "./pubReq.css";
</style>
