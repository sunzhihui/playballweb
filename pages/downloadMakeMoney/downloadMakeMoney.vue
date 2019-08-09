<template>
	<view>
			<view class="pages"></view>
			<view class="recommend newbieTaskList" v-for="item in mobileGamesList" :key="item">
				<view class="recommendContent">
					<image :src="item.mobileGamesimg" :mode="mode" class="haveAfunimg01"></image>
				</view>
				<view class="recommendSlogan">
				  		<text class="recommendtitle">{{item.recommendtitle}}</text>
						<text class="slogan">{{item.slogan}}</text>
				</view>
				<view class="recommendContent">
					<view class="installIn" v-on:click="signIn()">{{item.signIn}}
					  <text class="goldValue">{{item.goldValue}}</text>
					  <image v-show="item.goldicon !=''" :src="item.goldicon" :mode="mode"  class="goldicon"></image>
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
				mobileGamesList:[{
					mobileGamesimg:'/static/tadyTask_07.png',
					recommendtitle:'能赚钱的浏览器',
					goldValue:'+50',
					goldicon:'/static/haveAfun_04.png',
					slogan:' 7788浏览器',
					signIn:'安装'
				},
				{
					mobileGamesimg:'/static/tadyTask_09.png',
					recommendtitle:'金币红包天天限时领取',
					goldValue:'+50',
					goldicon:'/static/haveAfun_04.png',
					slogan:'安装2355手机助手',
					signIn:'安装'
				},
				{
					mobileGamesimg:'/static/tadyTask_09.png',
					recommendtitle:'金币红包天天限时领取',
					goldValue:'',
					goldicon:'',
					slogan:'安装2355手机助手',
					signIn:'立即安装'
				}]
			};
		}
	}
</script>

<style lang="scss" scoped>
		.pages{
			@extend .pages;
		}
		page{
			@extend page;
			background-color: #ffffff;
		}
		.recommendContent .installIn{
			width:156rpx;
			height:56rpx;
			background:rgba(255,91,78,1);
			border-radius:28rpx;
			font-size:26rpx;
			font-family:PingFang-SC-Medium;
			font-weight:500;
			color:rgba(255,255,255,1);
			display:-webkit-flex;
			display: flex;
			 flex-direction:row;
			justify-content: center;
			align-items: center;
			margin-top: 60rpx;
			margin-left: 40rpx;
			
			
		}
		
		.newbieTaskList{
			padding-bottom: 20rpx;
			border-bottom: 1rpx solid #EBEBEB;
		}
		.goldValue{
			font-size:26rpx;
			font-family:Arial-BoldMT;
			font-weight:bold;
			color:#FFD453;
		}
		.recommendContent .installIn{
			width:205rpx;
			height:56rpx;
			border:2rpx solid rgba(255,0,0,1);
			border-radius:28rpx;
			font-size:26rpx;
			font-family:PingFang-SC-Medium;
			font-weight:500;
			color:rgba(255,6,6,1);
			margin-left: 0px;
			background-color: #fff;
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
