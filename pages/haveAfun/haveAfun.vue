<template>
<view class="">
	<view class="titleoption">
		<view class="option" @click="taskJump()">
			<image src="/static/任务.png" mode="icon" class="task"></image>
			<text class="tasktitle">今日任务</text>
			<text class="goldCoinsNumber">完成{{goldCoinsNumber}}</text>
		</view>
		<view class="line"></view>
		<view class="option" @click="tryhandSwimmingJump()">
			<image src="/static/游戏.png" mode="icon" class="task"></image>
			<text class="tasktitle">试玩手游</text>
			<text class="goldCoinsNumber">可领{{haveGoldCoinsNumber}}</text>
		</view>
	 </view>
         <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" :vertical="vertical" :indicator-active-color="indicatorActiveColor">
           <swiper-item v-for="(item,index) in rotaryPlantingMapArray" :key="item.id">
              <image :src="item.rotaryPlantingMap" :mode="mode"></image>
           </swiper-item >
           
       </swiper>    
      <view class="recommend">
		  <view class="recommendContent">
			  <view class="rectangle"></view>
			  <text class="recommendtitle">今日为你推荐</text>
		  </view>
		  <view class="">
			  <text class="recommendmsg">完成3个任务开惊喜宝箱</text>
		  </view>
		  <view class="recommendContent">
			  
			  <image src="/static/矩形.png" :mode="mode"  class="seeArrow"></image>
			  <text class="see">更多</text>
		  </view>	  
	  </view>
	   <view class="recommend">
	  		  <view class="recommendContent">
	  			  <image :src="haveAfun01" :mode="mode" class="haveAfunimg01"></image>
	  		  </view>
	  		  <view class="recommendSlogan">
	  			  <text class="recommendtitle">{{recommendtitle}}</text>
				  <text class="goldValue">{{goldValue}}</text>
				  <image :src="goldicon" :mode="mode"  class="goldicon"></image>
				  <text class="slogan">{{slogan}}</text>
	  		  </view>
	  		  <view class="recommendContent">
	  			  <view class="signIn" v-on:click="signIn()">去签到</view>
	  		  </view>	  
	  </view>
	   <view class="recommend">
	  		  <view class="recommendContent">
	  			  <view class="rectangle"></view>
	  			  <text class="recommendtitle">即点即玩小游戏</text>
	  		  </view>  
	  </view>
	  <view class="box">
          <view class="gameList" v-for="(item,index) in gameList" :key="item.id">
         	 <image :src="item.gameListimg" :mode="mode"></image>
         </view>
	  </view>   
			 <view class="septum"></view>
		 <view class="recommend">
			  <view class="recommendContent">
				  <view class="rectangle"></view>
				  <text class="recommendtitle">玩手游赚金币</text>
			  </view>  
	     </view>
		 <view class="mobileGames" v-for="(item,index) in mobileGamesList" :key="item.id">
		 	<image :src="item.mobileGamesimg" :mode="mode" class="mobileGamesimg"></image>
			<view class="playersNamebox">
				<image :src="item.mobileGamesHeadimage" :mode="mode" class="mobileGamesHeadimage"></image>
				<text class="playersName">{{item.playersName}}</text>
				<text class="income">{{item.income}}</text>
				<text class="downloadNow">立即下载</text>
			</view>
			<view class="proverbsbox">
				<text class="proverbs">{{item.proverbs}}</text>
				<view class="starbox">
					<image :src="item.staricon" :mode="mode" class="staricon"></image>
					<text>{{item.starNumber}}</text>
				</view>
			</view>
		 </view>
 </view>
</template>

<script>
	export default {
		data() {
			return {
			    mode:'aspectFit',
				rotaryPlantingMapArray:[{
					rotaryPlantingMap:'/static/haveAfun_03.gif'
				},
				{
					rotaryPlantingMap:'/static/haveAfun_03.gif'
				},
				{
					rotaryPlantingMap:'/static/haveAfun_03.gif'
				},
				],
				gameList:[{
					gameListimg:'/static/haveAfun_09.gif'
				},
				{
					gameListimg:'/static/haveAfun_12.gif'
				},
				{
					gameListimg:'/static/haveAfun_14.gif'
				},
				{
					gameListimg:'/static/haveAfun_19.gif'
				},
				{
					gameListimg:'/static/haveAfun_20.gif'
				},
				{
					gameListimg:'/static/haveAfun_21.gif'
				}],
				mobileGamesList:[{
					mobileGamesimg:'/static/haveAfun_24.gif',
					mobileGamesHeadimage:'/static/haveAfun_27.gif',
					playersName:'大圣归来',
					income:'月入300元',
					proverbs:'玩遍天下无敌手',
					staricon:'/static/五角星.png',
					starNumber:'9.3'
					
				},
				{
					mobileGamesimg:'/static/haveAfun_30.gif',
					mobileGamesHeadimage:'/static/haveAfun_33.gif',
					playersName:'大圣归来',
					income:'月入300元',
					proverbs:'玩遍天下无敌手',
					staricon:'/static/五角星.png',
					starNumber:'9.2'
					
				}],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular:true,
				vertical:false,
				indicatorActiveColor:"#FFFFFF",
				haveGoldCoinsNumber:'+1000金币',
				haveAfun01:'/static/haveAfun_06.gif',
				goldValue:'+50',
				goldicon:'/static/haveAfun_04.png',
				slogan:'去【领水滴】每日签到进行 签到',
				recommendtitle:'在星球果园签到'
				
			};
		},
		onLoad() {
	
	     },
		methods: {
		taskJump(){
			debugger
			uni.navigateTo({			
			url: '/pages/todaysMission/todaysMission'
			});
		},
		 tryhandSwimmingJump(){
			 uni.navigateTo({			
			 url:'/pages/tryHandSwimming/tryHandSwimming'
			 });
		 }
	   }
	}
</script>

<style lang="scss" scoped>
	//@import '../../pages/uni.css';
 
	.titleoption {
		width: 690rpx;
		height: 90rpx;
		display: flex;
		margin: 4% auto;
	}
	.titleoption .option {
		flex:2;
		margin: auto;
		overflow: hidden;
	}
	.titleoption .option .tasktitle{
		 font-size:$uni-font-size-lg;
		width: 70%;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height: 50rpx;		
	}
	.titleoption .option text{		
		display:block;
		float: left;
		margin-left: 3%;
	}
	 .titleoption .option .goldCoinsNumber{
		font-size:22rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(177,175,175,1)

	}
	.titleoption .option .task{
		width: 74rpx;
		height: 84rpx;
		float: left;
	}
 .swiper{
	 width: 690rpx;
	 height: 154rpx;
	 border-radius:10rpx;
	 margin: auto; 
 }
 .swiper image{
	 width: 100%;
	 height: 100%;
	 border-radius:10rpx;
 }
 .recommend .recommendContent .seeArrow{
	 width: 12rpx;
	 height: 20rpx;
	 float:right;
	 margin-top: 10upx;
	
 }

.recommend .recommendmsg{
	font-size:22rpx;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(255,80,64,1); 
	line-height: 40rpx;
    display: block;
 }
 .recommendContent .see{
	 float: right;
	 font-size:24rpx;
	 font-family:PingFang-SC-Bold;
	 font-weight:bold;
	 color:rgba(102,102,102,1);
	  margin-right: 0.5vh;
 }
 .box{
	 overflow: hidden;
	 width: 690rpx;
	 margin: auto;
 }
 .gameList{
	width:210rpx;
	height:250rpx;
	border-radius:10rpx; 
	float: left;
	margin: 10rpx;
	border: 0;
  }
 .gameList image{
	width: 100%;
	height: 100%;
	
 }

 .mobileGames{
	width:690rpx;
	height:408rpx;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 26rpx 3rpx rgba(234,234,233,1);
	border-radius:14rpx;
	margin: auto;
	margin-bottom: 2vh;
 }
 .mobileGamesimg{
	width:690rpx;
	height:226rpx;
	border-radius:14rpx 14rpx 0px 0px;
 }
 .mobileGamesHeadimage{
	width:65rpx;
	height:63rpx;
	border-radius:8rpx 10rpx 10rpx 10rpx;
 }
 .playersNamebox{
	 width: 660rpx;
	 margin: auto;
	margin-top: 42rpx;
	display:-webkit-flex;
	display: flex;
	 flex-direction:row;
	 justify-content: space-between;
	 align-items: center;
 }
 .downloadNow{
	width:177rpx;
	height:68rpx;
	background-color:rgba(255,80,64,1);
	border-radius:34rpx;
	font-size:30rpx;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(255,255,255,1);
	line-height: 68rpx;
	text-align: center;
	 display:block;
 }
  .line{
 	width:1px;
 	height:90rpx;
 	background:rgba(229,229,229,1);
 	margin-right: 40rpx;
 }
 .income{
	width:129rpx;
	height:32rpx;
	line-height: 32rpx;
	background-color:rgba(254,224,220,1);
	border-radius:4rpx;
	font-size:24rpx;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(255,80,64,1);
	 display:block;
	text-align: center;
	margin-left: -112rpx;
	
 }
 .playersName{
	font-size:32rpx;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(51,51,51,1);
	display:block;
	margin-left: -110rpx;
 }
 .proverbsbox{
	width: 660rpx;
	margin: auto;
	display:-webkit-flex;
	display: flex;
	flex-direction:row;
	justify-content: space-between;
	margin-top: 15rpx;
 }
.proverbsbox .proverbs{
	font-size:24rpx;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(102,102,102,1);
	display: block;
 }
.proverbsbox .staricon{
	width:22rpx;
	height:22rpx;
	margin-right: 6rpx;
 }
 .starbox{
	 margin-top: -15rpx;
	margin-right: 60rpx;
 }
 .starbox text{
	font-size:26rpx;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(163,163,163,1);
	
 }
  .rectangle{
 	width:8rpx;
 	height:28rpx;
 	background:rgba(255,0,0,1);
 	border-radius:3rpx;
 	margin-top: 8upx;
 	float: left;
 	margin-right: .5vh;
  }
  .recommendtitle{
 	 font-size: 28rpx;
 	font-family:PingFang-SC-Heavy;
 	font-weight:800;
 	color:rgba(51,51,51,1);
  }
   .recommend {
  	 width: 690rpx;
     margin: 4% auto auto;
 	display:-webkit-flex;
 	display: flex;
 	 flex-direction:row;
 	 justify-content:space-around;;
  }
  .recommend .recommendContent{
  	 
  	 flex: 4;
  	/* overflow: hidden; */
  }
   .recommend .recommendContent text{
  	 display: block;
  	 line-height: 40rpx;
  }
  .haveAfunimg01{
  	width:196rpx;
  	height:137rpx;
  	border-radius:10rpx;
  }
   .septum{
  	 width:100%;
  	 height:20rpx;
      background:rgba(249,249,249,1);
  	 margin-top: 41rpx;
  }
   .recommendSlogan{
  	width:300rpx;
  	/* margin-left: .7vh; */
 	margin-left: 6rpx;
  }
 .recommendSlogan .slogan{
  	font-size:24rpx;
  	font-family:PingFang-SC-Bold;
  	font-weight:bold;
  	color:rgba(102,102,102,1);
  	display: block;
  	margin-top: 1.2vh;
  }
   .recommendSlogan .goldValue{
  	font-size:26rpx;
  	font-family:Arial-BoldMT;
  	font-weight:bold;
  	color:rgba(249,162,37,1);
  }
   .goldicon{
  	 width: 22rpx;
  	 height: 22rpx;
  	 margin-left: 2rpx; 
  }
  .recommendContent .signIn{
  	width:156rpx;
  	height:56rpx;
  	border:2rpx solid rgba(255,80,64,1);
  	border-radius:28rpx;
  	font-size:26rpx;
  	font-family:PingFang-SC-Medium;
  	font-weight:500;
  	color:rgba(255,80,64,1);
      text-align: center;
  	float: right;
      margin-top: 72upx;
      line-height: 56rpx;
   }
   	.pages{
   	width:100%;
   	height:1rpx;
   	background-color:#EBEBEB;
   }
</style>
