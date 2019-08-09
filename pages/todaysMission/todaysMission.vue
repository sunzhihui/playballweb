<template>
	<view>
		<view class="pages"></view>
		<view class="" v-for="item in todayTaskList" :key="item.id">
		   <view class="recommend">
				  <view class="recommendContent">
					  <view class="rectangle"></view>
					  <text class="recommendtitle">{{item.taskTitle}}</text>
				  </view>  
		</view>
			<view class="recommend newbieTaskList" v-for="itemson in item.newbieTaskList" :key="itemson">
				<view class="recommendContent">
					<image :src="itemson.haveAfun01" :mode="mode" class="haveAfunimg01"></image>
				</view>
				<view class="recommendSlogan">
				  		<text class="recommendtitle">{{itemson.recommendtitle}}</text>
						<text class="goldValue">{{itemson.goldValue}}</text>
						<image :src="itemson.goldicon" :mode="mode"  class="goldicon"></image>
						<text class="slogan">{{itemson.slogan}}</text>
				</view>
				<view class="recommendContent">
					<view class="signIn" v-on:click="signIn()">{{itemson.signIn}}</view>
				</view>
			</view>
			<view passive  class="septum" v-if=""></view>
		</view>
		
	</view>
</template>


<script >
	export default {
		data() {
			return {
				newbieTaskList:'0',
				todayTaskList:[{
					taskTitle:"新手任务",
					newbieTaskList:[{
						haveAfun01:'/static/haveAfun_06.gif',
						recommendtitle:'在星球果园签到',
						goldValue:'+50',
						goldicon:'/static/haveAfun_04.png',
						slogan:'去【领水滴】每日签到进行 签到',
						signIn:'去签到'
					},
					{
						haveAfun01:'/static/tadyTask_03.png',
						recommendtitle:'试玩斗地主一次',
						goldValue:'+50',
						goldicon:'/static/haveAfun_04.png',
						slogan:'棋牌欢乐多，金币赚不停',
						signIn:'去签到'
					},
					{
						haveAfun01:'/static/tadyTask_07.png',
						recommendtitle:'幸运大转盘抽奖',
						goldValue:'+50',
						goldicon:'/static/haveAfun_04.png',
						slogan:'转盘新用户首次免费',
						signIn:'去签到'
					}]
				},
				{
					taskTitle:'日常任务',
					newbieTaskList:[{
						haveAfun01:'/static/tadyTask_09.png',
						recommendtitle:'在星球果园签到',
						goldValue:'+50',
						goldicon:'/static/haveAfun_04.png',
						slogan:'去【领水滴】每日签到进行 签到',
						signIn:'去玩游戏'
					},
					{
						haveAfun01:'/static/tadyTask_11.png',
						recommendtitle:'试玩斗地主一次',
						goldValue:'+50',
						goldicon:'/static/haveAfun_04.png',
						slogan:'棋牌欢乐多，金币赚不停',
						signIn:'去玩游戏'
					},
					{
						haveAfun01:'/static/tadyTask_13.png',
						recommendtitle:'幸运大转盘抽奖',
						goldValue:'+50',
						goldicon:'/static/haveAfun_04.png',
						slogan:'转盘新用户首次免费',
						signIn:'去玩游戏'
					}]
				}],
					
				
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
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
