<template>
<swiper class="swiper">  
  <swiper-item>  
    <view class="indi">加入新商家</view>
    <view class="operation">
      <input class="shopName" @input="bindShopName" placeholder="输入店家名称"></input>
      <input class="cata" @input="bindcata" placeholder="输入店家商品分类，用逗号隔开（半角）"></input>
      <input class="img" @input="bindimg" placeholder="输入店家封面图片链接"></input>
      <input class="address" @input="bindadd" placeholder="输入店家地址"></input>
      <input class="adimg" @input="bindadimg" placeholder="输入店家首页展示照片"></input>
      <input class="addes" @input="bindaddes" placeholder="输入店家首页展示照片描述"></input>
      <view class="submit1" @tap="tapSubmig">提交</view>
      <view class="clipb1" @tap="copytoCPB" :hidden="cpb1">复制ID</view>
    </view>
    <view class="console">{{result1}}</view>
  </swiper-item> 
  <swiper-item>  
    <view class="indi">加入新物品</view>
    <view class="operation">
      <input class="shopName" @input="bindShopId" placeholder="输入店家Id"></input>
      <input class="cata" @input="bindcata2" placeholder="输入物品所在分类"></input>
      <input class="img" @input="bindimg2" placeholder="输入商品图片链接"></input>
      <input class="des" @input="binddes" placeholder="输入商品描述"></input>
      <input class="size" @input="bindsize" placeholder="输入尺寸选项，用逗号隔开（半角）"></input>
      <input class="price" @input="bindprice" placeholder="输入商品价格"></input>
      <input class="itemName" @input="binditemName" placeholder="输入商品名称"></input>
      <input class="brand" @input="bindbrand" placeholder="输入商品品牌"></input>
      <view class="submit1" @tap="tapSubmig2">提交</view>
      <view class="clipb1" @tap="copytoCPB2" :hidden="cpb2">复制ID</view>
    </view>
    <view class="console">{{result2}}</view>
  </swiper-item> 
</swiper>
</template>

<script>
var tmpres;

export default {
  data() {
    return {
      result1: "返回结果:",
      cpb1: true,
      cpb2: true,
      newStoreId: "",
      shopName: "",
      catagoryList: "",
      indexImg: "",
      adImg: "",
      adDes: "",
      shopAddr: "",
      shopId: "",
      catagory: "",
      indexImg2: "",
      des: "",
      sizeList: "",
      price: "",
      itemName: "",
      brand: "",
      result2: ""
    };
  },

  components: {},
  props: {},
  onLoad: function () {},
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },
  methods: {
    //第1页数据采集
    bindShopName: function (e) {
      this.setData({
        shopName: e.detail.value
      });
    },
    bindcata: function (e) {
      var tmpstr = e.detail.value;
      var cataList = tmpstr.split(",");

      if (cataList[cataList.length - 1].length == 0) {
        var tmp = cataList.pop();
      }

      console.log();
      this.setData({
        catagoryList: cataList
      });
    },
    bindimg: function (e) {
      this.setData({
        indexImg: e.detail.value
      });
    },
    bindadimg: function (e) {
      this.setData({
        adImg: e.detail.value
      });
    },
    bindaddes: function (e) {
      this.setData({
        adDes: e.detail.value
      });
    },
    bindadd: function (e) {
      this.setData({
        shopAddr: e.detail.value
      });
    },
    //复制到剪切板
    copytoCPB: function (e) {
      var that = this;
      wx.setClipboardData({
        data: that.newStoreId,
        success: function (res) {
          wx.showToast({
            title: '复制成功'
          });
        }
      });
    },
    //第一页提交
    tapSubmig: function (e) {
      var that = this;
      uni.request({
      	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adddata',
      	method: 'POST',
        data: {
          dbname: "shops",
          dataSe: {
            count: 0,
            img: that.indexImg,
            title: that.shopName,
            address: that.shopAddr,
            catagory: that.catagoryList,
            kind: 'normal',
            owner: []
          }
        },
        success: function (res) {
          //add owner's openid
          console.log(res.result._id);
          that.setData({
            newStoreId: res.result._id,
            cpb2: true,
            cpb1: false
          });
          var count = that.catagoryList.length;
          var tmpArray = [];
          var i;

          for (i = 0; i < count; i++) {
            tmpArray.push([]);
          }

          uni.request({
          	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adddata',
          	method: 'POST',
            data: {
              dbname: "items",
              dataSe: {
                contents: tmpArray,
                sId: that.newStoreId
              }
            },
            success: function (res) {
              uni.request({
              	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adddata',
              	method: 'POST',
                data: {
                  dbname: "StoreAds",
                  dataSe: {
                    contents: [{
                      des: that.adDes,
                      img: that.adImg
                    }],
                    sId: that.newStoreId
                  }
                },
                success: function (res) {
                  that.setData({
                    result1: "返回结果: 添加成功，请保留店铺Id:" + res.result._id
                  });
                }
              });
            }
          });
        }
      });
    },
    //第二页数据采集
    bindShopId: function (e) {
      this.setData({
        shopId: e.detail.value
      });
    },
    bindcata2: function (e) {
      this.setData({
        catagory: e.detail.value
      });
    },
    bindimg2: function (e) {
      this.setData({
        indexImg2: e.detail.value
      });
    },
    binddes: function (e) {
      this.setData({
        des: e.detail.value
      });
    },
    bindsize: function (e) {
      var tmpstr = e.detail.value;
      var cataList = tmpstr.split(",");

      if (cataList[cataList.length - 1].length == 0) {
        var tmp = cataList.pop();
      }

      this.setData({
        sizeList: cataList
      });
    },
    bindprice: function (e) {
      this.setData({
        price: e.detail.value
      });
    },
    binditemName: function (e) {
      this.setData({
        itemName: e.detail.value
      });
    },
    bindbrand: function (e) {
      this.setData({
        brand: e.detail.value
      });
    },
    //第2页提交
    tapSubmig2: function (e) {
      var that = this;
      var currentItemId = 0;
      uni.request({
      	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemcounts',
      	method: 'POST',
        data: {},
        success: function (res) {
          currentItemId = res.data.Items[0].value;
          uni.request({
          	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adddata',
          	method: 'POST',
            data: {
              dbname: "itemInfo",
              dataSe: {
                array1: that.sizeList,
                array2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                des: that.des,
                flavor: "辣!",
                img: that.indexImg2,
                index1: 0,
                index2: 0,
                itemId: currentItemId,
                stitle: that.price,
                title: that.itemName
              }
            },
            success: function (res) {
              console.log(res.result._id);
              that.setData({
                newStoreId: res.result._id,
                cpb2: false,
                cpb1: true
              }); //get CataList

              uni.request({
              	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
              	method:'POST',
                data: {
                  mode: 1,
                  target: "shops",
                  iddd: that.shopId
                },
                success: function (res) {
                  console.log(res.data.Items[0].catagory);
                  var cataL = res.data.Items[0].catagory;
                  var catInd = 0;

                  for (var i = 0; i < cataL.length; i++) {
                    if (cataL[i].localeCompare(that.catagory) == 0) {
                      catInd = i;
                      break;
                    }
                  } //addNewItemintoitems
                  //getCurrentItems


                 uni.request({
                 	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/addnewitemintostore',
                 	method: 'POST',
                    data: {
                      mode: 2,
                      shopId: that.shopId
                    },
                    success: function (res) {
                      console.log("current item list");
                      console.log(res.data.Items[0].contents);
                      var newItemList = res.data.Items[0].contents;
                      var tmpEntry = {
                        brand: that.brand,
                        img: that.indexImg2,
                        itemId: currentItemId,
                        price: that.price,
                        title: that.itemName
                      };
                      newItemList[catInd].push(tmpEntry); //additIntoDB

                      uni.request({
                      	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/addnewitemintostore',
                      	method: 'POST',
                        data: {
                          mode: 1,
                          newCont: newItemList
                        },
                        success: function (res) {
                          //updateItemCountParam
                          uni.request({
                          	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/addnewitemintostore',
                          	method: 'POST',
                            data: {
                              mode: 3
                            },
                            success: function (res) {
                              uni.request({
                              	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/addnewitemintostore',
                              	method: 'POST',
                                data: {
                                  mode: 4,
                                  shopId: that.shopId
                                },
                                success: function (res) {
                                  //updateItemCountParam
                                  that.setData({
                                    result2: "返回结果: 添加成功"
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                },
                fail: function (res) {
                  that.setData({
                    result1: "返回结果: 店家不存在"
                  });
                }
              });
            }
          });
        }
      });
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
};
</script>
<style>
@import "./navi.css";
</style>