<template>
<view>
<view class="bg">
  <scroll-view class="scrollpage1" scroll-y :style="'height: ' + height + 'px; '" >
    <view class="page_intend">


      <!--头像，发帖时间-->
      <view class="AVcontainer">
        <image :src="avtUrl" class="authorimg"></image>
        <view class="user_info_bar">
          <view class="username_lvl">
            <view class="username">{{author}}</view>
            <view class="lvlInd1" :style="'color:' + aAcolor">lvl{{authorLvl}}</view>
		  </view>
          <view class="date">{{date}}</view>
        </view>
		<image src="../../static/more-2-line.png" class="moreFunction" @tap="reportThis"></image>
		
      </view>
      
      <!--帖子名-->
      <scroll-view class="post_name" scroll-y>
        {{name}}
      </scroll-view>

      <!--帖子内容-->
      <scroll-view class="post_content" scroll-y :style="'height: ' + desht + '/2px;'">
        {{des}}
      </scroll-view>

      <!--图片-->
      <view v-if="loopimgs1[0]!=null">
        <view :style="'width: ' + width + 'px; height: ' + loopht + 'px; position:relative; top:30rpx;'">
        <swiper class="swiper" autoplay="true" interval="5000" duration="1000" :style="'width: ' + width + 'px; height: ' + loopht + 'px;'">  
          <block v-for="(item, index) in loopimgs1" :key="index">  
            <swiper-item>  
              <image :src="item" :data-list="loopimgs1" mode="aspectFill" :style="'width: 94%; height: ' + (loopht*0.94) + 'px; border-radius: 15rpx;'" @tap="previewImg"></image>  
            </swiper-item>
          </block>  
        </swiper>
        </view>
      </view>

      <!--*点赞，评论图标*-->
      <view class="vote_comment_icon">
        <image src="../../static/icons/comment.png" mode="aspectFill" style="width:60rpx;height:60rpx; left:20rpx;"></image>
        <image src="../../static/icons/up_vote.png" mode="aspectFill" style="width:60rpx;height:60rpx;position:relative;left:80%;"></image>
      </view>

      <!--帖子评论-->
      <view v-for="(item, idx) in comments" :key="idx">
        <view class="comment" :data-naviParam="idx" @tap="clickComment">
          <view class="ComContainer">
            <image :src="item[2]" class="authorimg"></image>
              <view class="user_info_bar">
                <view class="username_lvl">
                  <view>{{item[1]}}</view>
                  <view class="lvlInd1" :style="'color:' + item[6]">lvl{{item[5]}}</view>
                </view>
                
                <view class="date">{{item[3]}}</view>
              </view>
          </view>
            <view style="position:relative;">
              {{item[0]}}
            </view>
        </view>
      </view>
    </view>

  </scroll-view>

  <!--底部评论输入，按钮-->
  <view class="botBlock">
	<button class="cmtBt" open-type="getUserInfo" @tap="upcomment">发送</button>
	<input name="psw" placeholder="输入评论" :value="commentInput" @input="setpos" class="botBut1"></input>
  </view>
</view>

<view v-if="commenting" class="cover0">
  <view class="cover2">
    <image src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif" class="sendingGif"></image>
    <view class="loadingText">发送中。。。</view>
  </view>
  
  <view class="cover">
  </view>
</view>
</view>
</template>

<script>
var comid = "";
var winwd = 0;
var winht = 0;
var submitting = false;
var util = require("../../utils/util.js");

export default {
  data() {
    return {
      commenting: false,
      aAcolor: 'cyan',
      authorLvl: 0,
      imgList: [],
      placeHolder: "输入评论",
      CurrentUserAvt: "",
      time: "",
      CurrentName: "",
      author: "",
      avtUrl: "",
      date: "",
      width: 0,
      height: 0,
      loopht: 0,
      desht: 0,
      name: "",
      des: "",
      price: 0,
      currency: "¥",
      loopimgs1: [],
      sliderht: 0,
      botht: 0,
      botbutwd: 0,
      botbutht: 0,
      botbutedge: 0,
      comments: [],
      postid: "",
      aid: "",
      commentInput: "",
      sttOid: ""
    };
  },

  components: {},
  props: {},

  onLoad() {
    //取得全局App({..})实例
    comid = getApp().globalData.var1; //取得全局变量需要的值
    this.updateTuanInfoFromDB();
    var that = this;

    if (true) {
      console.log(comid);
      uni.getSystemInfo({
        success: function (res) {
          winwd = res.windowWidth;
          winht = res.windowHeight;
        }
      });
      this.setData({
        width: winwd,
        height: winht - 50,
        loopht: winht * 0.6,
        desht: winwd * 0.28,
        sliderht: winht - winwd * 0.4 * 0.4,
        botht: winwd * 0.4 * 0.4,
        botbutwd: winwd * 0.4,
        botbutht: winwd * 0.4 * 0.4,
        botbutedge: winwd * 0.05
      });
      var iiii = comid;
      uni.request({
      	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
      	method:'POST',
        // 传给云函数的参数
        data: {
          target: 'xiaonei',
          iddd: iiii,
          mode: 1
        },
		success: (res) => {
				  console.log(res);
			this.setData({
			  comments: res.data.Items[0].comments,
			  des: res.data.Items[0].desc,
			  loopimgs1: res.data.Items[0].imgs,
			  date: res.data.Items[0].date,
			  avtUrl: res.data.Items[0].avatarUrl,
			  author: res.data.Items[0].author,
			  name: res.data.Items[0].title,
			  aid: res.data.Items[0].authorOID
			}); //poster's lvl
			
			uni.request({
				url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getgroupuser',
				method:'POST',
			  data: {
			    openId: that.aid
			  },
			  success: function (res) {
			    var lvl = util.lvlFromExp(res.data.Items[0].exp).resLvl;
			    var aAcolor = '';
			    if (lvl <= 2) aAcolor = '#cfcfcf';else if (lvl <= 4) aAcolor = '#67bf75';else if (lvl <= 6) aAcolor = '#7dc0ff';else if (lvl <= 8) aAcolor = '#7705a1';else if (lvl <= 10) aAcolor = '#f5b433';else aAcolor = '#ff6e6e';
			    that.setData({
			      authorLvl: lvl,
			      aAcolor: aAcolor
			    });
			  }
			}); //comments' lvl
			
			var umb = that.comments;
			var tmpSet = new Set([]);
			
			for (var ii = 0; ii < umb.length; ii++) {
			  tmpSet.add(umb[ii][4]);
			}
			
			tmpSet = Array.from(tmpSet);
			
			for (var ii = 0; ii < tmpSet.length; ii++) {
			  console.log(tmpSet[ii]);
			  uni.request({
			  	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getgroupuser',
			  	method:'POST',
			    data: {
			      openId: tmpSet[ii]
			    },
			    success: function (res) {
			      for (var i = 0; i < umb.length; i++) {
			        if (res.data.Items[0].open_Id == umb[i][4]) {
			          umb[i].push(util.lvlFromExp(res.data.Items[0].exp).resLvl);
			          if (umb[i][5] <= 2) umb[i].push('#cfcfcf');else if (umb[i][5] <= 4) umb[i].push('#67bf75');else if (umb[i][5] <= 6) umb[i].push('#7dc0ff');else if (umb[i][5] <= 8) umb[i].push('#7705a1');else if (umb[i][5] <= 10) umb[i].push('#f5b433');else umb[i].push('#ff6e6e');
			        }
			      }
			
			      that.setData({
			        comments: umb
			      });
			    }
			  });
			}
		}
      })
    }
  },

  methods: {
    updateTuanInfoFromDB() {
      var tmpInfo;

      try {
        tmpInfo = wx.getStorageSync('itemInfo');
      } catch (e) {} // Do something when catch error
      //todo: fetch information from database


      this.setData({
        name: tmpInfo.name,
        des: tmpInfo.description,
        price: tmpInfo.price,
        loopimgs1: tmpInfo.img,
        currency: tmpInfo.currency
      });
    },
	reportThis(){
		
	},
    // 预览图片
    previewImg(event) {
      var src = event.currentTarget.dataset.src; //获取data-src

      var imgList = event.currentTarget.dataset.list; //获取data-list
      //图片预览

      wx.previewImage({
        current: src,
        // 当前显示图片的http链接
        urls: imgList // 需要预览的图片http链接列表

      });
    },

    buynow() {
      wx.navigateTo({
        url: '../payment/payment'
      });
    },

    atc() {},

    setpos: function (e) {
      this.setData({
        commentInput: e.detail.value
      });
    },
    //click on specific comment
    // add username to input
    clickComment: function (e) {
      console.log(e.currentTarget.dataset.naviparam);
      var tmpindex = e.currentTarget.dataset.naviparam;
      var tmpunm = this.comments[tmpindex][1];
      this.setData({
        placeHolder: "@" + tmpunm + " ",
        commentInput: "@" + tmpunm + " ",
        sttOid: this.comments[tmpindex]
      });
      console.log(tmpunm);
    },
    upcomment: function (e) {
	  if ( getApp().globalData.openId=="nihao"){
		  uni.showToast({
		  	title:'游客无法评论',
		  	icon:'none',
		  	position:'bottom'
		  })
	  }else
      if (!this.commenting) {
        this.setData({
          commenting: true
        });
        var that = this;
        var timeStp = new Date();
        //console.log(timeStp.getHours().toString() + ":" + timeStp.getMinutes());
        //console.log(timeStp.getMonth() + 1 + "/" + timeStp.getDate().toString() + "/" + timeStp.getFullYear().toString());
        var dateString = (timeStp.getMonth() + 1).toString() + "/" + timeStp.getDate().toString() + "/" + timeStp.getFullYear().toString();
        var timeString = timeStp.getHours().toString() + ":" + timeStp.getMinutes();
        var curDate = util.formatTime2(new Date());
        var curDateStr = curDate.month + "/" + curDate.day + "/" + curDate.year + "";
        var avurl = getApp().globalData.userAvatarUrlGG;
        var unm = getApp().globalData.userNameGG;
        var cmuid = getApp().globalData.cmulid;
        that.setData({
          CurrentUserAvt: avurl,
          CurrentName: unm
        }); //deal with @

        console.log(this.commentInput.charAt(0));
        var nr = this.commentInput;

        if (nr.length >= 25) {
          nr = nr.substring(0, 25) + '...';
        }

        if (this.commentInput.charAt(0) == '@') {
          //new @
          //get @ target
          var newAt = this.placeHolder;
          console.log(newAt); //get fromer's oppid

          var starterI = this.sttOid[4];
          console.log(starterI);
          uni.request({
          	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adduserinfo',
          	method:'POST',
            data: {
			openId: getApp().globalData.openId,
              mode: 3,
              fromId: starterI,
              text: nr,
              author: unm,
              authorImg: avurl,
              time: dateString + ' ' + timeString,
              comuId: comid
            },
            success: function (res) {
              console.log(res);
            }
          });
        } else {
          //get fromer's oppid
          var starterI = this.aid;
          uni.request({
          	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adduserinfo',
          	method:'POST',
            data: {
				openId: getApp().globalData.openId,
              mode: 3,
              fromId: starterI,
              text: nr,
              author: unm,
              authorImg: avurl,
              time: dateString + ' ' + timeString,
              comuId: comid
            },
            success: function (res) {
              console.log(res);
            }
          });
        }
		console.log("comid is "+typeof(comid));
        uni.request({
        	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postcomment',
        	method:'POST',
          // 传给云函数的参数
          data: {
            id: comid,
            comment: this.commentInput,
            name: unm,
            avt: avurl,
			openId: getApp().globalData.openId,
            date: dateString + ' ' + timeString
          },
          success: function (res) {
            uni.request({
            	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postpost',
            	method:'POST',
              data: {
                mode: 4,
                cid: cmuid
              },
              success: function (res) {
                console.log("cc succ");
              }
            });
            console.log("succ");
            util.updateUserDateRecord(3);
            that.setData({
              commenting: false
            });
          },
          fail: function (res) {
            console.log(res);
          }
        });
        var cmt = this.comments;
        var tmpd = [this.commentInput, this.CurrentName, this.CurrentUserAvt, this.date];
        cmt.push(tmpd); //console.log(cmt);

        this.setData({
          comments: cmt
        });
      }
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
@import "./xiaonei.css";
</style>