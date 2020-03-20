<template>
	
<view>
	<view class="status_bar">
		<!-- 这里是状态栏 -->
	</view>
  <scroll-view scroll-x="true" style="width: 100%;white-space:nowrap; border:none;">
    <!-- tab -->
    <view class="tab">
      <view class="tab-nav" style="font-size:12px">
        <view v-for="(item, index) in tabnav.tabitem" :key="index" @tap="setTab(index)" :style="'min-width:20%;max-width:20%;text-align:center;height: 80rpx;'">
          {{item.text}}
        </view>
        <view>
          <view class="tab-line" :style="'width:' + (16) + '%;transform:translateX(' + (100*showtab+25*showtab) + '%);'">
          </view>
        </view>
      </view>
    </view>
  </scroll-view>


<view class="we-slide">     
  <swiper-item>
      <view style="height:800rem; background: #ffffff;">
        <scroll-view :style="'height: ' + ratio + 'px'" scroll-y="true">
          <block v-for="(itemName, idx) in community" :key="idx"> 
            <view class="xiaoneiBlock" :style="'height:'+ itemName.height + 'rpx;'" :data-naviParam="itemName" :data-commuId="itemName.comDir" :data-ind="idx" :data-commuListId="itemName._id" @tap="tapComu">
              <block>
                <image :src="itemName.authorImg" class="authImg" mode="aspectFill"></image>
                <view class="FLcontainer">
                  <view class="userNm">{{itemName.author}}</view>
                  <view class="lv" :style="'color:' + itemName.color + '; '">lvl:{{itemName.lvl}}</view>
                </view>
                <view class="comdate">{{itemName.date}}</view>
				<image v-if="itemName.img[0]!=null" :src="itemName.img[0]" class="xiaoneiImg" mode="aspectFill"></image>
                <view class="xiaoneiDetail" :style="'top:'+ itemName.detail_top + 'rpx;'">{{itemName.detail}}</view>
                <view class="xiaoneiText" :style="'top:'+ itemName.text_top + 'rpx;'"><text class="xiaoneiText_wrap_text">{{itemName.text}}</text></view>
                
                <view v-if="itemName.tags[0]!=null" class="tagArea1" :style="'top:'+ itemName.tags_top + 'rpx;'">
                  <block v-for="(tag, index2) in itemName.tags" :key="index2">
                    <view class="tagCard">
						<text decode="true">#{{tag}}</text>
                    </view>
                  </block>
                </view>
				<view class="cutLine"></view>
                <view class="comment_vote">
                  <view class="views1">
                      <image src="../../static/icons/view.png" mode="aspectFill" class="comment_icon"></image>
                      <view class="text_skewing">{{itemName.vc}}次查看</view>
                  </view>

                  <view class="views2">
                    <block v-if="voted==false" :data-commuList="itemName" :data-ind="idx" @tap.native.stop="upVoteComment">
                      <image src="../../static/icons/up_vote.png" mode="aspectFill" class="comment_icon"></image>
                    </block>

                    <block v-else-if="voted" :data-commuList="itemName" :data-ind="idx" @tap.native.stop="upVoteComment">
                      <image src="../../static/icons/up_voted.png" mode="aspectFill" class="comment_icon"></image>
                    </block>
                    
                    <view class="text_skewing">{{itemName.upC}}个赞</view>
                  </view>

                  <view class="views3">
                      <image src="../../static/icons/comment.png" mode="aspectFill" class="comment_icon"></image>
                      <view class="text_skewing">{{itemName.cc}}条评论</view>
                  </view>

                </view>
              </block>
            </view>
			

            <view style="width=100%; height:25rpx; background:#f1f1f1;"></view>
          </block>
        </scroll-view>
      </view>
  </swiper-item>

  <view v-if="comMenu" style="width:100%;height:100%;top:0; position:absolute;right:0;background:#808080; opacity:0.8;" @tap="showMenu"></view>
  <view v-if="comMenu" style="width:100%;height:50%;top:60%; position:absolute;right:0;background:#f5f5f5; opacity:0.99;border-radius: 30rpx;">
    <view class="comMn" style="left:17.5%; top:30%" data-postR="出二手" @tap="comMenuRedirect">
      <image src="../../static/icons/ershou.png" style="width: 120rpx; height:120rpx; position: absolute;" mode="aspectFill"></image>
    </view>
    <text style="position:absolute;top:55%;left:16.5%;font-size:35rpx;">跳蚤市场</text>
    <view class="comMn" style="right:17.5%; top:30%" data-postR="发需求" @tap="comMenuRedirectPost">
      <image src="../../static/icons/publish.png" style="width: 120rpx; height:120rpx;; position: absolute;" mode="aspectFill"></image>
    </view>
    <text style="position:absolute;top:55%;right:16.5%;font-size:35rpx;">松鼠酒馆</text>
  </view>
  <image src="../../static/icons/more.png" mode="aspectFill" @tap="showMenu" style="width: 100rpx; height:100rpx;position: absolute; right:30rpx; bottom:27px;z-index: 4;"></image>

</view>
</view>
</template>

<script>
//index.js
var util = require("../../utils/util.js"); //获取应用实例
//获取应用实例
const app = getApp().globalData;
var winwd = 0;
var winht = 0;
var comid = "";
var swipeEnable = true;
var swiped = false;
// wx.cloud.init({
//   traceUser: true,
//   env: 'tempsqu-ennf2'
// });
var loadNums = 0;
var testdb1 = [];
var intervalSign;

export default {
  data() {
    return {
      voted: false,
      showtab: 0,
      //顶部选项卡索引
      tabnav: {
        tabnum: 5,
        tabitem: [{
          "id": 0,
          "text": "全部"
        }, {
          "id": 1,
          "text": "社团活动"
        }, {
          "id": 2,
          "text": "美食"
        }, {
          "id": 3,
          "text": "电竞开黑"
        }, {
          "id": 4,
          "text": "二刺螈"
        }, {
          "id": 5,
          "text": "摄影"
        }, {
          "id": 6,
          "text": "兴趣"
        }, {
          "id": 7,
          "text": "汽车"
        }, {
          "id": 8,
          "text": "其他"
        }]
      },
      index1: 0,
      avlLocations: ['Columbus', 'D.C.'],
      signed: false,
      opaci: 0,
      comMenu: false,
      midPos: 0,
      community: 0,
      naviParam: 0,
      ratio: 0,
      secondHandCarInfo: [],
      secondHandDailyInfo: [],
      secondHandFurnInfo: [],
      secondHandOthInfo: [],
      secondHandCarInfood: [],
      secondHandDailyInfood: [],
      secondHandFurnInfood: [],
      secondHandOthInfood: [],
      currentTab: 0,
      currentTab1: 0,
      upperTh: 0,
      filterStyle: "",
      scrollheight: 0,
      redirectorSize: 0,
      loopimgs1: [],
      redSpace: 0,
      loopadsHT: 0,
      btnLineW: 0,
      winWidth: 0,
      winheight: 0,
      textboxWD: 0,
      textboxHT: 0,
      searchbtnWD: 0,
      searchbtnHT: 0,
      searchAreaWD: 0,
      searchAreaHT: 0,
      motto: 'Hello World',
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      upAvi: true,
      avtUrl: "",
      author: "",
      communityod: "",
      locationIconSize: "",
      locationIconSpace: "",
      locationTextLeft: "",
      searchbarLength: "",
      searchIconSpace: "",
      searchBarLength: "",
    };
  },

  components: {},
  props: {},

  onLoad() {
    //取得全局App({..})实例
    comid = getApp().globalData.var1; //取得全局变量需要的值

    uni.getSystemInfo({
      success: function (res) {
        winwd = res.windowWidth;
        winht = res.windowHeight;
        console.log(winwd);
      }
    });
    this.initialize();
    const device = wx.getSystemInfoSync();
    var iiii = comid;
  },

  onShow: function () {
    if (loadNums >= 2) {
      this.initialize();
      console.log("call onshow");
    }
  },
  onPullDownRefresh: function () {
    this.initialize();
    console.log("call pulldown");
  },
  methods: {
    //事件处理函数
    bindViewTap: function () {
      wx.navigateTo({
        url: '../logs/logs'
      });
    },
    comMenuRedirect: function (e) {
      console.log(e.currentTarget.dataset);
      wx.setStorageSync('postR', e.currentTarget.dataset.postr);
      wx.navigateTo({
        url: '../pubReq/pubReq'
      });
    },
    comMenuRedirectPost: function (e) {
      console.log(e.currentTarget.dataset);
      wx.setStorageSync('postR', e.currentTarget.dataset.postr);
      wx.navigateTo({
        url: '../pubPost/pubPost'
      });
    },
    tapComu: function (e) {
      var that = this;
      var inde = e.currentTarget.dataset.ind; //取得全局App({..})实例

      getApp().globalData.var1 = e.currentTarget.dataset.commuid; //取得全局变量需要的值

      var cid = e.currentTarget.dataset.commulistid;
      console.log(e.currentTarget.dataset.commulistid);
      getApp().globalData.cmulid = e.currentTarget.dataset.commuid; //取得全局变量需要的值

      uni.request({
      	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter',
      	method: 'POST',
        data: {
          postId: cid,
          mode: 2,
		  openId:app.openId
        },
        success: function (res) {
          var tmpList = that.community;
          tmpList[inde].vc++;
          that.setData({
            community: tmpList
          });
        }
      });
      wx.navigateTo({
        url: '../xiaonei/xiaonei'
      });
    },
    showMenu: function () {
      this.setData({
        comMenu: !this.comMenu
      });
    },
    tapErshou: function (e) {
      
	  getApp().globalData.itemInfo=e.currentTarget.dataset.naviparam;
      console.log(e.currentTarget.dataset.naviparam._id);
      uni.request({
      	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter',
      	method: 'POST',
        data: {
          postId: e.currentTarget.dataset.naviparam._id,
          mode: 3,
		  openId:app.openId
        },
        success: function (res) {}
      });
      wx.navigateTo({
        url: '../tuan/tuan'
      });
    },
    upVoteComment: function (e) {
      //TODO: update database with the up conts
      if (this.upAvi) {
        console.log(this.upAvi);
        this.setData({
          voted: true,
          upAvi: false
        });
        var that = this;
        var c = e.currentTarget.dataset.commulist;
        var inde = e.currentTarget.dataset.ind;
        console.log(e.currentTarget.dataset.commulist);
        
            console.log(c.upvoter);
            var opid = getApp().globalData.openId;

            if (!c.upvoter.includes(getApp().globalData.openId)) {
              //didnt upvoted
              uni.request({
              	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter',
              	method: 'POST',
                data: {
                  postId: c._id,
                  mode: 1,
				  openId:getApp().globalData.openId
                },
                success: function (res) {
                  var tmpList = that.community;
                  tmpList[inde].upC++;
                  tmpList[inde].upvoter.push(opid);
                  that.setData({
                    community: tmpList,
                    communityod: tmpList
                  });
                  that.setData({
                    upAvi: true
                  });
                }
              });
            } else {
              console.log('already upvoted');
              that.setData({
                upAvi: true
              });
            }
          
        
      }
    },
    updateAnn: function () {//TODO：更新from数据库

    },
    bindPickerChange1: function (e) {
      console.log(e.detail.value);
      this.setData({
        index1: e.detail.value
      });
    },
    handleSearchInput: function (e) {
      var tm = e.detail.value;
      var tmpList = util.searchByTagsCom(this.communityod, tm);
      console.log(tmpList);
      this.setData({
        community: tmpList
      });
      tmpList = util.searchByTagsSH(this.secondHandCarInfood, tm);
      console.log(tmpList);
      this.setData({
        secondHandCarInfo: tmpList
      });
      tmpList = util.searchByTagsSH(this.secondHandDailyInfood, tm);
      console.log(tmpList);
      this.setData({
        secondHandDailyInfo: tmpList
      });
      tmpList = util.searchByTagsSH(this.secondHandFurnInfood, tm);
      console.log(tmpList);
      this.setData({
        secondHandFurnInfo: tmpList
      });
      tmpList = util.searchByTagsSH(this.secondHandOthInfood, tm);
      console.log(tmpList);
      this.setData({
        secondHandOthInfo: tmpList
      });
    },
    handleTagSearch: function (tagString) {
      var tm = [];
      tm = tagString.split(";");
	  
      if (tm[tm.length - 1].localeCompare("") == 0) {
        //tm.pop();
      }

      console.log(tm);
      var tmpList = util.searchByTags(this.communityod, tm);
      console.log(tmpList);
      this.setData({
        community: tmpList
      });
    },
    //initialize the page data
    initialize: function () {
      this.updateAnn();
      var tmp = [];
      var tmpratio = winwd / 750;
      tmpratio = tmpratio * (50 + 88);
      var that = this; //initialize commu list
    
      uni.request({
      	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb',
      	method: 'POST',
        // 传给云函数的参数
        data: {
          target: 'commuList',
          iddd: '',
          mode: 3
        },
    	success: (res) => {
    		console.log("commuLoaded"); //get comment count
    		
    		wx.stopPullDownRefresh();
    		loadNums++;
    		console.log(res.data.Items[0]);
    		for (var j = 0; j < res.data.Items.length; j++) {
    			res.data.Items[j].lvl=1;
    		} 
    		var allist=res.data.Items;
    		allist.sort(function(aa,bb){
    			var a=aa.date;
    			var b=bb.date;
    			//console.log(a);
    			//console.log(b);
    			var a1=a.split("/");
    			var a2=a1[2].split(" ");
    			a1[2]=a2[0];
    			a1[3]=a2[1];
    			a2=a1[3].split(":");
    			a1[3]=a2[0];
    			a1[4]=a2[1];
    			
    			var b1=b.split("/");
    			var b2=b1[2].split(" ");
    			b1[2]=b2[0];
    			b1[3]=b2[1];
    			b2=b1[3].split(":");
    			b1[3]=b2[0];
    			b1[4]=b2[1];
    			
    			if (parseInt(a1[2])>parseInt(b1[2])){
    				return -1;
    			}else
    			if (parseInt(a1[2])<parseInt(b1[2])){
    				return 1;
    			}else
    			if (parseInt(a1[1])>parseInt(b1[1])){
    				return -1;
    			}else
    			if (parseInt(a1[1])<parseInt(b1[1])){
    				return 1;
    			}else
    			if (parseInt(a1[0])>parseInt(b1[0])){
    				return -1;
    			}else
    			if (parseInt(a1[0])<parseInt(b1[0])){
    				return 1;
    			}else
    			if (parseInt(a1[3])<parseInt(b1[3])){
    				return 1;
    			}else
    			if (parseInt(a1[3])>parseInt(b1[3])){
    				return -1;
    			}else
    			if (parseInt(a1[4])<parseInt(b1[4])){
    				return 1;
    			}else
    			if (parseInt(a1[4])>parseInt(b1[4])){
    				return -1;
    			}else{
    				return 0;
    			}
    		})
			
			var post_index; //每一个帖子object
			var post_height, text_top, detail_top, tags_top;
			for (post_index in allist) {
				post_height = 1180;//帖子高度
				detail_top = 760;//标题高度
				text_top = 820;//正文高度
				tags_top = 920;
				//帖子较短的情况
				if (allist[post_index].text.length < 20){
					post_height -= 50;
					tags_top -= 50;
				}
				//无图片的情况
				if (allist[post_index].img[0] == null){
					post_height -= 630;
					detail_top -= 630;
					text_top -= 630;
					tags_top -=630;
				}
				//无tags的情况
				if (allist[post_index].tags[0] == null){
					post_height -= 70;
				}
				//tag数量大于4的情况，换行
				if (allist[post_index].tags.length > 4){
					post_height += 80;
				}
				allist[post_index].height = post_height;
				allist[post_index].detail_top = detail_top;
				allist[post_index].text_top = text_top;
				allist[post_index].tags_top = tags_top;
			}
			
    		//console.log(allist);
    		that.setData({
    		  community: allist,
    		  communityod: allist
    		});
    		var newList = allist

			
			var oidList = [];
    		for (var i = 0; i < that.community.length; i++) {
    		  uni.request({
    		  	url: 'https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getgroupuser',
    		  	method: 'POST',
    		    data: {
    		      openId: that.community[i].oid
    		    },
    		    success: function (res) {
					console.log(res);
    		      for (var j = 0; j < newList.length; j++) {
    		        if (newList[j].oid == res.data.Items[0].open_Id) {
    		          newList[j].lvl = util.lvlFromExp(res.data.Items[0].exp).resLvl;
    		          var tl = newList[j].lvl;
    		          if (tl <= 2) newList[j].color = '#cfcfcf';else if (tl <= 4) newList[j].color = '#67bf75';else if (tl <= 6) newList[j].color = '#7dc0ff';else if (tl <= 8) newList[j].color = '#7705a1';else if (tl <= 10) newList[j].color = '#f5b433';else newList[j].color = '#ff6e6e';
    		        }
    		      }
    			  
    		      that.setData({
    		        community: newList,
    		        communityod: newList
    		      });
    			  
    		    }
    		  });
    		}
    	}
      })
    
      this.setData({
        midPos: 325 - (winwd - 30) / 6 + 50,
        btnLineW: winht / 667 * 60 + 10,
        winWidth: winwd,
        winheight: winht,
        loopadsHT: winht * 0.25,
        searchbtnHT: winht * 0.07 - 10,
        textboxHT: winht * 0.07 - 10,
        textboxWD: winwd - winht * 0.07 + 10 - 15,
        searchbtnWD: winht * 0.07 - 10,
        searchAreaWD: winwd,
        searchAreaHT: winht * 0.07,
        loopimgs1: tmp,
        redirectorSize: (winwd - 30) / 3,
        redSpace: winwd / 2 - (winwd - 60) / 6,
        ratio: winht - 40,
        locationIconSize: winht * 0.08 * 0.8,
        locationIconSpace: winht * 0.08 * 0.1,
        locationTextLeft: winht * 0.08 * 1.1,
        searchbarLength: (winwd * 0.8 - winht * 0.08) * 0.95,
        searchIconSpace: (winwd * 0.8 - winht * 0.08) * 0.95 - winht * 0.08 * 0.85,
        searchBarLength: (winwd * 0.8 - winht * 0.08) * 0.95 - winht * 0.08 * 0.9
      });
      this.setData({
        upperTh: this.loopadsHT + this.redirectorSize + this.loopadsHT + 18,
        filterStyle: "width: " + this.winWidth.toString() + "px; height: " + (this.loopadsHT / 2).toString() + "px;",
        scrollheight: this.winheight - this.searchbtnHT
      });
    },
    stopSwiper: function () {},
    clickTab: function (e) {
      var that = this;

      if (this.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        });
      }
    },
    clickTab1: function (e) {
      var that = this;

      if (this.currentTab1 === e.target.dataset.current1) {
        return false;
      } else {
        that.setData({
          currentTab1: e.target.dataset.current1
        });
      }
    },
    setTab: function (e) {
      this.setData({
        showtab: e
      });
      var ame = this.showtab;
	  
      ame = this.tabnav.tabitem[ame].text;

      if (ame == '全部') {
        this.handleTagSearch('');
      } else{
		  this.handleTagSearch(ame);
	  }
    },
    getUserInfo: function (e) {
      console.log(e);
      getApp().globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
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
@import "./commu.css";
</style>