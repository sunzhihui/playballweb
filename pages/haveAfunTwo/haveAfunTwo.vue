<template>
	<view>
		<view>
			<image :src="banner" mode="mode"  class="banner"></image>
		</view>
		<view class="header">
			<image :src="headPortrait" mode="mode" class="headPortrait"></image>
			<view class="headercontent">
				<text class="userName">{{userName}}</text>
				<view class="text">
					月入<text class="prominence">{{income}}</text>元
				</view>	
			</view>
			<view class="score">
				<text>9.2</text>
			</view>
		</view>
		<view class="rebatebox">
			<image :src="gifticon" mode="mode" class="gifticon"></image>
			<text>{{rebate}}</text>
		</view>
		<view class="titlebox">
			<view class="ornament"></view>
			<text class="title">赚钱任务</text>
			<text class="prominencegoldCoin">{{goldCoinConversion}}</text>
		</view>
		<view class="tasklist" v-for="(item,index)  in tasklist" :key="index">
			<view class="tasktext">
				<view class="h4">{{item.tasktext1}}</view>
				<view>{{item.tasktext2}}</view>
			</view>
			<view class="taskAwardbox">
				<view class="taskAward">
					<text>{{item.taskAward}}</text>
					<image :src="goldicon" mode="mode" class="goldicon"></image>
				</view>
				<view class="amount">已领取
					<text>{{item.amount}}</text>金币
				</view>
			</view>
		</view>	
		<view class="titleboxT">
			<view class="ornament"></view>
			<text class="title">游戏简介</text>
			<!-- <text class="prominencegoldCoin"></text> -->
		</view>
		<view class="introductionToGame">
			{{introductionToGame}}
		</view>
				<view class="titleboxT">
			<view class="ornament"></view>
			<text class="title">游戏截图</text>
		</view>
		    
                <scroll-view :scroll-left="scrollLeft" scroll-x="true" class="scroll-x" @scroll-with-animation="scrollWithAnimation" @scroll="scroll" >
					<view >
						  <view class="screenshotslist" v-for="(item,index)  in screenshotslist" :key="index">
							 <image :src="item.screenshots" mode="mode" class=""></image>
						</view>
					</view>
                </scroll-view>
			<view class="buttom">立即下载</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode:'aspectFit',
				banner:'/static/haveAfun21.png',
				headPortrait:'/static/haveAfun_33.gif',
				userName:'大圣归来',
				income:'70',
				gifticon:'/static/haveAfun22.png',
				rebate:'每充1元返1000金币',
				goldCoinConversion:'1000金币=1元',
				goldicon:'/static/haveAfun_04.png',
				tasklist:[{
					tasktext1:'每日登录游戏玩3分钟',
					tasktext2:'每日登录游戏玩3分钟即可获得金币奖励',
					taskAward:'+1000',
					amount:'0'	
				},
				{
					tasktext1:'每日登录游戏玩3分钟',
					tasktext2:'每日登录游戏玩3分钟即可获得金币奖励',
					taskAward:'+1000',
					amount:'0'	
				},
				{
					tasktext1:'每日登录游戏玩3分钟',
					tasktext2:'每日登录游戏玩3分钟即可获得金币奖励',
					taskAward:'+1000',
					amount:'0'	
				}],
				introductionToGame:'《龙族幻想》是由江南《龙族》正版IP授权的旗舰级开放世界RPG手游大作。集结豪华游戏制作班底，共同为这款开放大作打造出华丽逼真的多国场景，精致细腻的人物外显材，在游戏中呈现昼夜交替、晴雨天气等丰富的环境变化，给玩家带来如同置身现实世界的真实感受。',
				screenshotslist:[{
					screenshots:'/static/haveAfun23.png'
				},
				{
					screenshots:'/static/haveAfun24.png'
				},
				{
					screenshots:'/static/haveAfun23.png'
				},
				{
					screenshots:'/static/haveAfun24.png'
				}],
				scrollLeft:0,
				
			};
		},
		methods:{
			   scroll: function(e) {
				 //  debugger
            // console.log(e)
             this.scrollLeft = e.detail.scrollLeft
        },
		}
	}
</script>

<style lang="scss" scoped>
	page{
		@extend page;
		background-color: #ffffff;
	}
		.banner{
			width:750rpx;
			height:407rpx;
		}
		.headPortrait{
			width:120rpx;
			height:117rpx;
			border-radius:10rpx;
		}
		.gifticon{
			width: 29rpx;
			height: 31rpx;
			margin-right: 15rpx;
		}
		.header{
			@extend .flex;
			width: 690rpx;
			margin: auto;
			
		}
		.headercontent{
			@extend .flex;
			flex-direction: column;
			align-items: flex-start;
			height: 137rpx;
			justify-content: space-around;
			margin-left: 15rpx;
			font-size:30rpx;
			font-weight:bold;
			color:#666666;
		}
		.userName{
			font-size:34rpx;
			font-weight:bold;
			color:#333333;
		}
		.prominence{
			color: #FF5040;
		}
		.score{
		  position: absolute;
		  right: 30rpx;
		  font-size:50rpx;
		  font-weight:bold;
		  color:#FF5040;
		}
		.rebatebox{
			@extend .flex;
			font-size:24rpx;
			font-weight:bold;
			color:#FC6254;
			padding: 10rpx 0 20rpx 20rpx;
			border-bottom: 10rpx solid #EBEBEB;
		}
		.titlebox{
			@extend .flex;
			width: 690rpx;
			margin:20rpx auto 24rpx;
			font-size:24rpx;
			font-weight:bold;
			padding-bottom: 30rpx;
			border-bottom: 2rpx solid #EBEBEB;
		}
		.ornament{
			width:8rpx;
			height:28rpx;
			background:#FF0000;
			border-radius:3rpx;	
		}
		
		.title{
			font-size:32rpx;
			font-weight:800;
			color:#333333;
			margin: 0 14rpx 0 10rpx;
		}
		.prominencegoldCoin{
			@extend .prominence;
			position: absolute;
			right: 30rpx;
		}
		.goldicon{
			@extend .goldicon;
		}
		.tasklist{
			@extend .flex;
			justify-content: space-between;
			width: 690rpx;
			margin:20rpx auto 24rpx;
			padding-bottom: 20rpx;
			border-bottom: 2rpx solid #EBEBEB;
		}
		.tasktext{
			font-size:24rpx;
			font-weight:bold;
			color:#999999;
		}
		
		.tasktext .h4{
			font-size:30rpx;
			color:#333333;
			margin-bottom: 15rpx;
		}
		.taskAward {
			font-size:34rpx;
			font-weight:bold;
			color:#FFAF3E;
		}

		.amount{
			font-size:24rpx;
			font-weight:bold;
			color:#D1CFCF;
			margin-top: 15rpx;
		}
		.titleboxT{
			@extend .titlebox;
			border-bottom: 0;
			padding: 0;
		}
		.introductionToGame{
			width:689rpx;
			height:108rpx;
			font-size:26rpx;
			font-weight:bold;
			color:#999999;
			margin: auto ;
			overflow:hidden; 
			 text-overflow: ellipsis;
			display: -webkit-box;
		  -webkit-line-clamp: 3;  
		  -webkit-box-orient: vertical;
		}
		.screenshots{
			width:260rpx;
			height:470rpx;
			border-radius:10rpx;
		}
		.screenshotslist image{
			width:260rpx;
			height:470rpx;
		}
		.screenshotslist{
		display: inline-block;
		width:260rpx;
		height:470rpx;
		border-radius:10rpx;
		margin: 2%  -1% 2% 4%;
		}
		.scroll-x {
		white-space: nowrap;
		width: 100%;
	}
	.buttom{
		width:690rpx;
		height:86rpx;
		background:#FF3B3B;
		border-radius:43rpx;
		font-size:36rpx;
		font-weight:800;
		color:rgba(255,255,255,1);
		line-height: 86rpx;
		text-align: center;
		margin: 50rpx auto 30rpx;
	}
</style>
