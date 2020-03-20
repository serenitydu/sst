<template>
	<view>
		<view class="topP">
			<view class="address">Shipping Address</view>
			<view class="Editaddress">Edit</view>
			<view class="addressed">
				<text>{{selectedAddress}}</text>
			</view>

			<view class="orderTag">Your Order</view>

			<picker class="time-picker" mode="multiSelector" @change="bindStartMultiPickerChange" @tap="pickerTap" @columnchange="bindMultiPickerColumnChange"
			 :value="multiIndex" :range="multiArray">{{startDate}}</picker>

			<view class="orderEdit">Edit</view>
			<scroll-view class="orders" scroll-y>
				<block v-for="(item, index) in orderItems" :key="index">
					<view class="itemCard">
						<view class="leftCard">
							<image :src="item.img" mode="aspectFill" class="itemImg"></image>
						</view>
						<view class="rightCard">
							<view class="itemTitle">
								{{item.title}}
							</view>
							<view class="itemSub">
								{{item.sub}}
							</view>
							<view class="count">
								count: {{item.count}}
							</view>
							<image src="https://peoplepng.com/wp-content/uploads/2019/03/minus-png-minus-png-1600_1600.png" mode="aspectFill"
							 class="minus" @tap="tapminus" :data-tar="item._id"></image>
							<image src="http://www.sclance.com/pngs/plus-png/plus_png_1045918.jpg" mode="aspectFill" class="plus" @tap="tapplus"
							 :data-tar="item._id"></image>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
		<view class="midP">
			<view class="totalTag">SubTotal</view>
			<view class="totalDisp">{{totalP}}</view>
			<view class="totalDisp2">{{totalRMB}}</view>
		</view>
		<view class="botP">
			<view class="buyBut1" @tap="onTapPayPPL">Pay With Paypal</view>
			<view class="buyBut2" @tap="onTapPaywechat">Pay With WXpay</view>
		</view>
		<payjs v-if="preparePay" :params="orderParams" @success="bindPaySuccess" @fail="bindPayFail" @complete="bindPayComplete"
		 @dataChange="bindDataChange"></payjs>

		<view v-if="!weAv" class="cover0">
			<view class="cover2">
				<image src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif" class="sendingGif"></image>
				<view class="loadingText">Redirecting...</view>
			</view>

			<view class="cover">
			</view>
		</view>
	</view>
</template>

<script>
	// pages/pays/pay.js
	var date = new Date();
	var currentHours = date.getHours();
	var currentMinute = date.getMinutes();
	var winwd = 0;
	var winht = 0;
	var ssid = '';
	import payjs from "../../component/payjs/payjs";

	export default {
		data() {
			return {
				oid: "",
				weAv: true,
				pplAv: true,
				startDate: "Choose deliver time",
				multiArray: [
					['今天', '明天', '3-2', '3-3', '3-4', '3-5'],
					[0, 1, 2, 3, 4, 5, 6],
					[0, 10, 20]
				],
				multiIndex: [0, 0, 0],
				orderParams: {},
				// 支付发起参数
				preparePay: false,
				// 控制 payjs 组件的创建与销毁
				paying: false,
				// 可选：如需知晓用户是否「已经跳转到了 PAYJS 小程序还未返回」的状态则可通过事件处理函数监听事件内的 paying 数据
				selectedAddress: "请确认已绑定地址和手机号\n载入中",
				orderItems: [{
					img: "https://media1.giphy.com/media/11FuEnXyGsXFba/source.gif",
					title: "载入中",
					size: "",
					sub: "",
					count: 0,
					_id: ""
				}],
				totalP: "$",
				totalRMB: "¥",
				orderResults: "",
				needRefreshOrderParams: false,
				topH: "",
				wd: "",
				midH: "",
				exchangeRate: ""
			};
		},

		components: {
			payjs
		},
		props: {},

		/**
		 * Lifecycle function--Called when page load
		 */
		onLoad: function(options) {
			var that = this;
			var fromC = encodeURIComponent("USD");
			var toC = encodeURIComponent("CNY");
			var qu = fromC + '_' + toC;
			var url = 'https://free.currconv.com/api/v7/convert?q=' + qu + '&compact=ultra&apiKey=' + '90f1c50a20c8d1f5168b';
			wx.getSystemInfo({
				success: function(res) {
					winwd = res.windowWidth;
					winht = res.windowHeight;
				}
			});
			this.setData({
				topH: winht * 0.7,
				wd: winwd,
				midH: winht * 0.15
			});
			that.setData({
				selectedAddress: "正在获取汇率"
			}); //get exchangerate

			wx.request({
				url: url,
				data: {},
				success: function(res) {
					that.setData({
						exchangeRate: res.data.USD_CNY
					});
					console.log(res.data.USD_CNY);
					that.setData({
						selectedAddress: "汇率获取成功"
					});
					uni.request({
						url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts',
						method: 'POST',
						data: {
							dbname: "carts",
							openId: getApp().globalData.openId
						},
						success: function(res) {
							that.setData({
								selectedAddress: "购物车加载成功"
							});
							var shopId = res.data.Items[0].shop_Id;
							ssid = shopId; //update address and time est

							uni.request({
								url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getUser',
								method: 'POST',
								data: {
									openId: getApp().globalData.openId
								},
								success: function(res) {
									var userAdd = res.data.Items[0].address;
									that.setData({
										selectedAddress: res.data.Items[0].address,
										oid: res.data.Items[0].open_Id
									});
									uni.request({
										url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
										method: 'POST',
										data: {
											mode: 1,
											iddd: shopId,
											target: 'shops'
										},
										success: function(res) {
											var shopAddr = res.result[0].address; //get delivery Time
											//test data to wali

											if (!(typeof userAdd === "undefined") && userAdd.length > 0) {
												wx.request({
													url: 'https://maps.googleapis.com/maps/api/directions/json?origin=' + res.result[0].address +
														'&destination=' + userAdd + '&key=AIzaSyBN4EcKh9xONylRy2pWlCRhtW4LBK5Voh0',
													success: function(res) {
														console.log(res.data.routes[0].legs[0]);
														that.setData({
															selectedAddress: "From: " + shopAddr + "\nTo: " + that.selectedAddress +
																"\n Estimated Time: " + res.data.routes[0].legs[0].duration.text
														});
													}
												});
											} else {
												that.setData({
													selectedAddress: "请先设置送货地址\n Please set up your shipping address first."
												});
											}
										},
										fail: function(res) {
											console.log(res);
										}
									});
								}
							}); //update item list

							var finalList = [];
							var sz = res.data.Items[0].size;
							var itemLis = res.data.Items[0].items;
							var a1 = [];
							var totalPrice = 0.00;

							for (var i = 0; i < itemLis.length; i++) {
								///why the fuck have this worked.
								var tmpobj = {
									id: itemLis[i].Item_Id,
									cnt: itemLis[i].count
								};
								a1.push(tmpobj);
								var imId = itemLis[i].Item_Id;
								uni.request({
									url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid',
									method:'POST',
									data: {
										itemId: imId,
										mode: 1
									},
									success: function(res) {
										var tmpo;

										for (var aa = 0; aa < a1.length; aa++) {
											if (a1[aa].id == res.data.Items[0]._id) {
												tmpo = a1[aa];
												break;
											}
										}

										totalPrice += parseFloat(res.data.Items[0].stitle, 10) * tmpo.cnt;
										var rPrice = (totalPrice * that.exchangeRate).toFixed(2);
										finalList.push({
											img: res.data.Items[0].img,
											title: res.data.Items[0].title,
											size: sz,
											sub: "$" + res.data.Items[0].stitle,
											count: tmpo.cnt,
											_id: res.data.Items[0]._id
										});
										console.log(res.data.Items[0].stitle + "   " + tmpo.cnt + "   " + parseInt(res.data.Items[0].stitle,
											10));
										that.setData({
											orderItems: finalList,
											totalP: "$" + totalPrice.toFixed(2).toString(10),
											totalRMB: "¥" + rPrice.toString(10)
										});
									},
									fail: console.error
								});
							}
						}
					});
				},
				fail: function(res) {
					that.setData({
						selectedAddress: JSON.stringify(res)
					});
				}
			});
		},

		/**
		 * Lifecycle function--Called when page is initially rendered
		 */
		onReady: function() {},

		/**
		 * Lifecycle function--Called when page show
		 */
		onShow: function() {},

		/**
		 * Lifecycle function--Called when page hide
		 */
		onHide: function() {},

		/**
		 * Lifecycle function--Called when page unload
		 */
		onUnload: function() {},

		/**
		 * Page event handler function--Called when user drop down
		 */
		onPullDownRefresh: function() {},

		/**
		 * Called when page reach bottom
		 */
		onReachBottom: function() {},

		/**
		 * Called when user click on the top right corner to share
		 */
		onShareAppMessage: function() {},
		methods: {
			onTapPay: function() {
				// 事件处理函数 - 点击支付按钮
				this.setData({
					preparePay: true,
					orderParams: { // 这里传入【后端返回并签名完毕】的支付发起参数
					}
				});
			},
			//wechatpay button response
			onTapPaywechat: function() {
				this.setData({
					selectedAddress: "初始化汉特pay"
				});
				console.log("call wxpay");
				var that = this;

				if (this.weAv) {
					this.setData({
						weAv: false
					});
					var priceStr = this.totalP;
					priceStr = priceStr.substring(1, priceStr.length);
					var pt = parseFloat(priceStr);
					console.log(pt); // htPay: function (accToken, amount, currency, invoicNum) 
					//generate reference num

					var dt = new Date();
					var invoice = "ht" + dt.getFullYear().toString().substring(2, 4);
					var tmp1 = (dt.getMonth() + 1).toString();

					if (tmp1.length == 1) {
						tmp1 = '0' + tmp1;
					}

					invoice += tmp1;
					tmp1 = dt.getDate().toString();

					if (tmp1.length == 1) {
						tmp1 = '0' + tmp1;
					}

					invoice += tmp1;
					tmp1 = dt.getHours().toString();

					if (tmp1.length == 1) {
						tmp1 = '0' + tmp1;
					}

					invoice += tmp1;
					tmp1 = dt.getMinutes().toString();

					if (tmp1.length == 1) {
						tmp1 = '0' + tmp1;
					}

					console.log('tmp1: ' + tmp1);
					invoice += tmp1 + this.oid.substring(this.oid.length - 1 - 8, this.oid.length);
					this.htPay("05bcd02d83986b631ff81134e2bd85fe2934232329b5fa6a4d2fb3309d8e6800", pt, "USD", invoice);
				}
			},
			//paypal button response
			onTapPayPPL: function() {
				this.setData({
					selectedAddress: "初始化paypal"
				});
				var that = this;

				if (this.pplAv) {
					//generate invoice num
					var dt = new Date();
					var invoice = "pp" + dt.getFullYear().toString().substring(2, 4);
					var tmp1 = (dt.getMonth() + 1).toString();

					if (tmp1.length == 1) {
						tmp1 = '0' + tmp1;
					}

					invoice += tmp1;
					tmp1 = dt.getDate().toString();

					if (tmp1.length == 1) {
						tmp1 = '0' + tmp1;
					}

					invoice += tmp1;
					tmp1 = dt.getHours().toString();

					if (tmp1.length == 1) {
						tmp1 = '0' + tmp1;
					}

					invoice += tmp1;
					tmp1 = dt.getMinutes().toString();

					if (tmp1.length == 1) {
						tmp1 = '0' + tmp1;
					}

					invoice += tmp1 + this.oid.substring(this.oid - 1 - 4, this.oid);
					this.setData({
						pplAv: false
					});
					var newList = [];

					for (var i = 0; i < this.orderItems.length; i++) {
						var tmpEntry = this.orderItems[i];

						if (typeof tmpEntry.size === "undefined") {
							tmpEntry.size = "";
						}

						var newEntry = {
							"name": tmpEntry.title,
							"description": tmpEntry.size,
							"quantity": tmpEntry.count.toString(),
							"price": tmpEntry.sub.substring(1, tmpEntry.sub.length),
							"tax": parseFloat((parseFloat(tmpEntry.sub.substring(1, tmpEntry.sub.length)) * 0.075).toFixed(2)),
							"sku": "d1w2",
							"currency": "USD"
						};
						console.log("tax: " + parseFloat((parseFloat(tmpEntry.sub.substring(1, tmpEntry.sub.length)) * 0.075).toFixed(2)));
						newList.push(newEntry);
					} // pplPay: function (accToken, itemList, shipping, discount, invoicNum)


					this.pplPay("A21AAHUF_WYgW6biaVBjkPOJsi4W-cNsG4GU6DSqkoa9m3ZgzrRU6ISMcgAQO4sN3bxKeQNcn7al7eyXGM1HA-K6qpqqcbtZA",
						newList, "15.99", "0", invoice);
				}
			},

			/**
			 * 支付成功的事件处理函数
			 * 
			 * res.detail 为 PAYJS 小程序返回的订单信息
			 * 
			 * 可通过 res.detail.payjsOrderId 拿到 PAYJS 订单号
			 * 可通过 res.detail.responseData 拿到详细支付信息
			 */
			bindPaySuccess(res) {
				console.log('success', res);
				console.log('[支付成功] PAYJS 订单号：', res.detail.payjsOrderId);
				this.setData({
					orderResults: res.detail,
					needRefreshOrderParams: true
				});
				wx.showModal({
					title: '支付成功',
					content: 'PAYJS 订单号：' + res.detail.payjsOrderId,
					showCancel: false
				});
			},

			/**
			 * 支付失败的事件处理函数
			 * 
			 * res.detail.error 为 true 代表传入小组件的参数存在问题
			 * res.detail.navigateSuccess 代表了是否成功跳转到 PAYJS 小程序
			 * res.detail.info 可能存有失败的原因
			 * 
			 * 如果下单成功但是用户取消支付则可在 res.detail.info.payjsOrderId 拿到 payjs 订单号
			 */
			bindPayFail(res) {
				console.log('fail', res);

				if (res.detail.error) {
					console.error('发起支付失败', res.detail.info);
				} else if (res.detail.navigateSuccess) {
					console.log('[取消支付] PAYJS 订单号：', res.detail.info.payjsOrderId);
				}
			},

			/**
			 * 支付完毕的事件处理函数
			 * 
			 * 无论支付成功或失败均会执行
			 * 应当在此销毁 payjs 组件
			 */
			bindPayComplete() {
				console.log('complete');
				this.setData({
					preparePay: false // 销毁 payjs 组件

				});
			},

			/**
			 * 【可选】组件内部数据被修改时的事件
			 * 
			 * 当前仅用于监听 paying 数据
			 * 当用户跳转到 PAYJS 小程序并等待返回的过程中 paying 值为 true
			 */
			bindDataChange(res) {
				if (res.detail.paying) {
					this.setData({
						paying: res.detail.paying
					});
				}
			},

			tapminus: function(e) {
				var totalPrice = 0.00;
				var target = e.currentTarget.dataset.tar;
				var that = this;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts',
					method:'POST',
					data: {
						dbname: "carts",
						openId: getApp().globalData.openId
					},
					success: function(res) {
						var tmpid = res.data.Items[0].shop_Id;
						var itemLis = res.data.Items[0].items;

						for (var i = 0; i < itemLis.length; i++) {
							console.log(itemLis[i]);

							if (itemLis[i].Item_Id == target) {
								itemLis[i].count = itemLis[i].count - 1;

								if (itemLis[i].count <= 0) {
									itemLis.splice(i, 1);
									console.log('delete');
									console.log(itemLis);
								}

								uni.request({
									url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem',
									method:'POST',
									data: {
										openId: getApp().globalData.openId,
										itemList: itemLis,
										sid: tmpid
									},
									success: function(res) {
										console.log('succ'); //update display

										uni.request({
											url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts',
											method:'POST',
											data: {
												dbname: "carts",
												openId: getApp().globalData.openId
											},
											success: function(res) {
												var finalList = [];
												var sz = res.data.Items[0].size;
												var itemLis = res.data.Items[0].items;
												var a1 = [];

												if (itemLis.length == 0) {
													that.setData({
														orderItems: []
													});
												} else {
													for (var i = 0; i < itemLis.length; i++) {
														///why the fuck have this worked.
														var tmpobj = {
															id: itemLis[i].Item_Id,
															cnt: itemLis[i].count
														};
														a1.push(tmpobj);
														var imId = itemLis[i].Item_Id;
														uni.request({
															url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid',
															method:'POST',
															data: {
																itemId: imId,
																mode: 1
															},
															success: function(res) {
																var tmpo;

																for (var aa = 0; aa < a1.length; aa++) {
																	if (a1[aa].id == res.data.Items[0]._id) {
																		tmpo = a1[aa];
																		break;
																	}
																}

																totalPrice += parseFloat(res.data.Items[0].stitle, 10) * tmpo.cnt;
																var rPrice = (totalPrice * that.exchangeRate).toFixed(2);
																finalList.push({
																	img: res.data.Items[0].img,
																	title: res.data.Items[0].title,
																	size: sz,
																	sub: '$' + res.data.Items[0].stitle,
																	count: tmpo.cnt,
																	_id: res.data.Items[0]._id
																});
																that.setData({
																	orderItems: finalList,
																	totalP: "$" + totalPrice.toFixed(2).toString(10),
																	totalRMB: "¥" + rPrice.toString(10)
																});
															},
															fail: console.error
														});
													}
												}
											}
										});
									},
									fail: console.error
								});
								break;
							}
						}
					}
				});
			},
			tapplus: function(e) {
				var totalPrice = 0.00;
				var target = e.currentTarget.dataset.tar;
				var that = this;
				uni.request({
					url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts',
					method:'POST',
					data: {
						dbname: "carts",
						openId: getApp().globalData.openId
					},
					success: function(res) {
						var tmpid = res.data.Items[0].shop_Id;
						var itemLis = res.data.Items[0].items;

						for (var j = 0; j < itemLis.length; j++) {
							if (itemLis[j].Item_Id == target) {
								itemLis[j].count = itemLis[j].count + 1;
								uni.request({
									url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem',
									method:'POST',
									data: {
										openId: getApp().globalData.openId,
										itemList: itemLis,
										sid: tmpid
									},
									success: function(res) {
										console.log('succ'); //update display

										uni.request({
											url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts',
											method:'POST',
											data: {
												dbname: "carts",
												openId: getApp().globalData.openId
											},
											success: function(res) {
												var finalList = [];
												var sz = res.data.Items[0].size;
												var itemLis = res.data.Items[0].items;
												var a1 = [];

												for (var i = 0; i < itemLis.length; i++) {
													///why the fuck have this worked.
													var tmpobj = {
														id: itemLis[i].Item_Id,
														cnt: itemLis[i].count
													};
													a1.push(tmpobj);
													var imId = itemLis[i].Item_Id;
													uni.request({
														url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid',
														method:'POST',
														data: {
															itemId: imId,
															mode: 1
														},
														success: function(res) {
															var tmpo;

															for (var aa = 0; aa < a1.length; aa++) {
																if (a1[aa].id == res.data.Items[0]._id) {
																	tmpo = a1[aa];
																	break;
																}
															}

															totalPrice += parseFloat(res.data.Items[0].stitle, 10) * tmpo.cnt;
															var rPrice = (totalPrice * that.exchangeRate).toFixed(2);
															finalList.push({
																img: res.data.Items[0].img,
																title: res.data.Items[0].title,
																size: sz,
																sub: res.data.Items[0].stitle,
																count: tmpo.cnt,
																_id: res.data.Items[0]._id
															});
															that.setData({
																orderItems: finalList,
																totalP: "$" + totalPrice.toFixed(2).toString(10),
																totalRMB: "¥" + rPrice.toString(10)
															});
														},
														fail: console.error
													});
												}
											}
										});
									},
									fail: console.error
								});
								break;
							}
						}
					}
				});
			},
			pickerTap: function() {
				date = new Date();
				var monthDay = ['今天', '明天'];
				var hours = [];
				var minute = [];
				currentHours = date.getHours();
				currentMinute = date.getMinutes(); // 月-日

				for (var i = 2; i <= 28; i++) {
					var date1 = new Date(date);
					date1.setDate(date.getDate() + i);
					var md = date1.getMonth() + 1 + "-" + date1.getDate();
					monthDay.push(md);
				}

				var data = {
					multiArray: this.multiArray,
					multiIndex: this.multiIndex
				};

				if (data.multiIndex[0] === 0) {
					if (data.multiIndex[1] === 0) {
						this.loadData(hours, minute);
					} else {
						this.loadMinute(hours, minute);
					}
				} else {
					this.loadHoursMinute(hours, minute);
				}

				data.multiArray[0] = monthDay;
				data.multiArray[1] = hours;
				data.multiArray[2] = minute;
				this.setData(data);
			},
			bindMultiPickerColumnChange: function(e) {
				date = new Date();
				var that = this;
				var monthDay = ['今天', '明天'];
				var hours = [];
				var minute = [];
				currentHours = date.getHours();
				currentMinute = date.getMinutes();
				var data = {
					multiArray: this.multiArray,
					multiIndex: this.multiIndex
				}; // 把选择的对应值赋值给 multiIndex

				data.multiIndex[e.detail.column] = e.detail.value; // 然后再判断当前改变的是哪一列,如果是第1列改变

				if (e.detail.column === 0) {
					// 如果第一列滚动到第一行
					if (e.detail.value === 0) {
						that.loadData(hours, minute);
					} else {
						that.loadHoursMinute(hours, minute);
					}

					data.multiIndex[1] = 0;
					data.multiIndex[2] = 0; // 如果是第2列改变
				} else if (e.detail.column === 1) {
					// 如果第一列为今天
					if (data.multiIndex[0] === 0) {
						if (e.detail.value === 0) {
							that.loadData(hours, minute);
						} else {
							that.loadMinute(hours, minute);
						} // 第一列不为今天

					} else {
						that.loadHoursMinute(hours, minute);
					}

					data.multiIndex[2] = 0; // 如果是第3列改变
				} else {
					// 如果第一列为'今天'
					if (data.multiIndex[0] === 0) {
						// 如果第一列为 '今天'并且第二列为当前时间
						if (data.multiIndex[1] === 0) {
							that.loadData(hours, minute);
						} else {
							that.loadMinute(hours, minute);
						}
					} else {
						that.loadHoursMinute(hours, minute);
					}
				}

				data.multiArray[1] = hours;
				data.multiArray[2] = minute;
				this.setData(data);
			},
			loadData: function(hours, minute) {
				var minuteIndex;

				if (currentMinute > 0 && currentMinute <= 10) {
					minuteIndex = 10;
				} else if (currentMinute > 10 && currentMinute <= 20) {
					minuteIndex = 20;
				} else if (currentMinute > 20 && currentMinute <= 30) {
					minuteIndex = 30;
				} else if (currentMinute > 30 && currentMinute <= 40) {
					minuteIndex = 40;
				} else if (currentMinute > 40 && currentMinute <= 50) {
					minuteIndex = 50;
				} else {
					minuteIndex = 60;
				}

				if (minuteIndex == 60) {
					// 时
					for (var i = currentHours + 1; i < 24; i++) {
						hours.push(i);
					} // 分


					for (var i = 0; i < 60; i += 10) {
						minute.push(i);
					}
				} else {
					// 时
					for (var i = currentHours; i < 24; i++) {
						hours.push(i);
					} // 分


					for (var i = minuteIndex; i < 60; i += 10) {
						minute.push(i);
					}
				}
			},
			loadHoursMinute: function(hours, minute) {
				// 时
				for (var i = 0; i < 24; i++) {
					hours.push(i);
				} // 分


				for (var i = 0; i < 60; i += 10) {
					minute.push(i);
				}
			},
			loadMinute: function(hours, minute) {
				var minuteIndex;

				if (currentMinute > 0 && currentMinute <= 10) {
					minuteIndex = 10;
				} else if (currentMinute > 10 && currentMinute <= 20) {
					minuteIndex = 20;
				} else if (currentMinute > 20 && currentMinute <= 30) {
					minuteIndex = 30;
				} else if (currentMinute > 30 && currentMinute <= 40) {
					minuteIndex = 40;
				} else if (currentMinute > 40 && currentMinute <= 50) {
					minuteIndex = 50;
				} else {
					minuteIndex = 60;
				}

				if (minuteIndex == 60) {
					// 时
					for (var i = currentHours + 1; i < 24; i++) {
						hours.push(i);
					}
				} else {
					// 时
					for (var i = currentHours; i < 24; i++) {
						hours.push(i);
					}
				} // 分


				for (var i = 0; i < 60; i += 10) {
					minute.push(i);
				}
			},
			bindStartMultiPickerChange: function(e) {
				var that = this;
				var monthDay = that.multiArray[0][e.detail.value[0]];
				var hours = that.multiArray[1][e.detail.value[1]];
				var minute = that.multiArray[2][e.detail.value[2]];

				if (monthDay === "今天") {
					var month = date.getMonth() + 1;
					var day = date.getDate();
					monthDay = month + "月" + day + "日";
				} else if (monthDay === "明天") {
					var date1 = new Date(date);
					date1.setDate(date.getDate() + 1);
					monthDay = date1.getMonth() + 1 + "月" + date1.getDate() + "日";
				} else {
					var month = monthDay.split("-")[0]; // 返回月

					var day = monthDay.split("-")[1]; // 返回日

					monthDay = month + "月" + day + "日";
				}

				var startDate = monthDay + " " + hours + ":" + minute;
				that.setData({
					startDate: startDate
				});
			},
			//pay with paypal, return a redirect url to paypal experience

			/*
			* item format:
			*"items": [
			              {
			                "name": "hat",
			                "description": "Brown hat.",
			                "quantity": "5",
			                "price": "5",
			                "tax": "0.01",
			                "sku": "1",
			                "currency": "USD"
			              },
    
			* shipping address example:
			"shipping_address": {
			              "recipient_name": "boss Zhao",
			              "line1": "645 jsway ave",
			              "line2": "???",
			              "city": "Columbus",
			              "country_code": "US",
			              "postal_code": "43214",
			              "phone": "011862212345678",
			              "state": "OH"
			            }
			*/
			pplPay: function(accToken, itemList, shipping, discount, invoicNum) {
				this.setData({
					selectedAddress: "正在进入paypal"
				}); //access token

				var that = this;
				var tkn = 'Bearer ' + accToken; //total

				var subT = 0.00;
				var total = 0.00;
				var totalTax = 0.00; //

				for (var i = 0; i < itemList.length; i++) {
					var quanti = parseFloat(itemList[i].quantity);
					var price = parseFloat(itemList[i].price);
					var tax = parseFloat(itemList[i].tax) * quanti;
					subT += quanti * price;
					totalTax += tax;
				}

				total = subT + parseFloat(shipping) + totalTax - parseFloat(parseFloat(discount).toFixed(2));
				total = parseFloat(total.toFixed(2));
				subT = parseFloat(subT.toFixed(2));
				totalTax = parseFloat(totalTax.toFixed(2));
				wx.request({
					//test link, change later
					url: 'https://api.sandbox.paypal.com/v1/payments/payment',
					header: {
						'Content-Type': 'application/json',
						'Authorization': tkn
					},
					method: "POST",
					data: {
						"intent": "sale",
						"payer": {
							"payment_method": "paypal"
						},
						"transactions": [{
							"amount": {
								"total": total.toString(),
								"currency": "USD",
								"details": {
									"subtotal": subT.toString(),
									"tax": totalTax.toString(),
									"shipping": shipping.toString(),
									"discount": discount.toString()
								}
							},
							"description": "测试的松鼠小镇paypal支付.",
							//what is this
							"custom": "EBAY_EMS_90048630024435",
							"invoice_number": invoicNum.toString(),
							"payment_options": {
								"allowed_payment_method": "INSTANT_FUNDING_SOURCE"
							},
							//what is this
							"soft_descriptor": "ECHI5786786",
							"item_list": {
								"items": itemList
							}
						}],
						"note_to_payer": "Contact us for any questions on your order.",
						"redirect_urls": {
							//change later
							"return_url": "https://example.com/return",
							"cancel_url": "https://example.com/cancel"
						}
					},
					success: function(res) {
						that.setData({
							selectedAddress: "paypal转接中"
						});
						console.log(res);
						console.log(res.data.links[1].href);
						getApp().globalData.payLink = res.data.links[1].href; //return res.data.links[1].href;

						wx.navigateTo({
							url: '../testPage/testThird'
						});
						that.setData({
							pplAv: true
						});
					},
					fail: function(res) {
						that.setData({
							selectedAddress: JSON.stringify(res)
						});
						console.log(res);
						getApp().globalData.invoice = invoicNum;
						that.setData({
							pplAv: true
						});
					}
				});
			},
			//pay with hante, return a redirect url to paypal experience

			/*
			* item format:
			*"items": [
			              {
			                "name": "hat",
			                "description": "Brown hat.",
			                "quantity": "5",
			                "price": "5",
			                "tax": "0.01",
			                "sku": "1",
			                "currency": "USD"
			              },
    
			* shipping address example:
			"shipping_address": {
			              "recipient_name": "boss Zhao",
			              "line1": "645 jsway ave",
			              "line2": "???",
			              "city": "Columbus",
			              "country_code": "US",
			              "postal_code": "43214",
			              "phone": "011862212345678",
			              "state": "OH"
			            }
			*/
			htPay: function(accToken, amount, currency, invoicNum) {
				console.log('invoicNum in htPay: ' + invoicNum);
				this.setData({
					selectedAddress: "正在进入汉特支付" + ", amount is: " + amount + ", invoice: " + invoicNum
				});
				console.log("amount is: " + amount + ", currency is: " + currency); //access token

				var that = this;
				var tkn = 'Bearer ' + accToken;
				wx.request({
					//test link, change later
					url: 'https://api.hantepay.com/v1.3/transactions/micropay',
					header: {
						'Content-Type': 'application/json',
						'Authorization': tkn
					},
					method: "POST",
					data: {
						"amount": amount * 100,
						"currency": currency,
						"vendor": "wechatpay",
						"reference": invoicNum,
						"ipn_url": "page/pays/pays",
						"open_id": that.oid,
						"client_ip": "http://139.199.112.175"
					},
					success: function(res) {
						that.setData({
							selectedAddress: "汉特支付转接中"
						});
						var tmpR = res.data;
						console.log(res);
						that.setData({
							weAv: true
						});
						console.log(tmpR);
						wx.requestPayment({
							timeStamp: tmpR.timeStamp,
							nonceStr: tmpR.nonceStr,
							package: tmpR.wechatPackage,
							signType: "MD5",
							paySign: tmpR.paySign,

							success(res) {
								console.log(res);
								getApp().globalData.invoice = invoicNum;
								getApp().globalData.orderItems = that.orderItems;
								getApp().globalData.sid = ssid;
								wx.navigateTo({
									url: '../pays/htvarify'
								});
							},

							fail(res) {
								console.log(res);
							}

						});
					},
					fail: function(res) {
						that.setData({
							selectedAddress: JSON.stringify(res)
						});
						that.setData({
							pplAv: true
						});
					}
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
	@import "./pay.css";
</style>
