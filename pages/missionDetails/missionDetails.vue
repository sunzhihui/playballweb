<template>
	<view>
		<view class="pages"></view>
		<view class="header">
			<view class="rewardiconbox">
				<image :src="rewardicon" mode="mode" class="rewardicon"></image>
				<view class="textbox">
					<text class="h3">每日高额奖励</text>
					<view class="text">
						月入最高<text class="prominent">{{glod}}</text>元
					</view>
				</view>
			</view>
			<view class="notice">
				{{notice}}
			</view>	
		</view>
		<view class="header">
			<view class="titlebox">
					<view class="ornament"></view>
					<text class="title">开启智能推荐</text>
					<text class="reward">{{reward}}</text>
			<!-- 		<view class="">￥</view> -->
					<image :src="goldicon" mode="mode" class="goldicon"></image>
					<view class="openbutton">立即开启</view>
				</view>
				<view class="recommend">
					{{recommend}}
				</view>
		</view>	
		<view class="titlebox">
				<view class="ornament"></view>
				<text class="title">今日试用</text>
				<text class="prominence">{{goldCoinConversion}}</text>
			</view>
	<view class="onTriallist" v-for="(item,index)  in onTriallist" :key="index">
		<image :src="item.softwareicon" mode="mode" class="softwareicon"></image>
		<view class="onTrialtextbox">
			<text class="onTrialtext">{{item.onTrialtext}}</text>
			<view class="onTrialSoftwareNamebox">
				<text class="onTrialSoftwareName">{{item.onTrialSoftwareName}}</text>
				<text class="reward">{{item.award}}</text>
				<image :src="goldicon" mode="mode" class="goldicon"></image>
				<view class="openbuttonText">{{item.buttonText}}</view>
			</view>	
		</view>		
		</view>
		<view class="button">立即开启</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode:'aspectFit',
				glod:'+30.00',
				rewardicon:'/static/fastEarning8.png',
				notice:'最新通知：打开可领金币！首次安装软件，试用满1分钟领取2000金币！每天来试用，还可领更多，最高可领20000金币！',
				goldicon:'/static/haveAfun_04.png',
				reward:'+500',
				recommend:'开启后，我们将在您解锁屏幕时帮您自动打开推荐试用的APP,打开成功即有金币奖励。每天平均自动完成2-4款试用任务，更多试用APP任务查看：“今日试用”。',
				goldCoinConversion:'10000金币=1元',
				onTriallist:[{
					softwareicon:'/static/TryHandswimming_09.gif',
					onTrialtext:'头条视频小说一应俱全',
					onTrialSoftwareName:'UC浏览器',
					award:'+800',
					buttonText:'打开领钱'
				},
				{
					softwareicon:'/static/TryHandswimming_11.gif',
					onTrialtext:'头条视频小说一应俱全',
					onTrialSoftwareName:'UC浏览器',
					award:'+800',
					buttonText:'打开领钱'
				},
				{
					softwareicon:'/static/TryHandswimming_13.gif',
					onTrialtext:'头条视频小说一应俱全',
					onTrialSoftwareName:'UC浏览器',
					award:'+800',
					buttonText:'打开领钱'
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
	.rewardicon{
		width:140rpx;
		height:140rpx;
		border-radius:10rpx;
	}
	.rewardiconbox{
		@extend .flex;
		width: 690rpx;
		margin:30rpx auto 28rpx;
	}
	.textbox{
		margin-left: 20rpx;
	}
	
	.textbox .h3{
		font-size:34rpx;
		font-weight:800;
	}
	.textbox text{
		@extend .text;
	}
	.text{
		font-size:30rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#333333;
	}
	.textbox .prominent{
		color:#FF2C23;
	}
	.notice{
		width: 638rpx;
		margin: 0 0 30rpx 30rpx;
		font-size:26rpx;
		font-weight:500;
		color:#000000;
		line-height:36rpx;
	}
	.header{
		border-bottom: 10rpx solid #F9F9F9;
	}
	.goldicon{
		@extend .goldicon;
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
	.reward{
		font-size:34rpx;
		font-weight:bold;
		color:#F9A225;
	}
	.titlebox{
		@extend .flex;
		width: 690rpx;
		margin:20rpx auto 24rpx;
	}
	.openbutton{
		width:156rpx;
		height:56rpx;
		border:2rpx solid #FF5040;
		border-radius:28rpx;
		font-size:26rpx;
		font-weight:500;
		color:#FF5040;
		text-align: center;
		line-height: 56rpx;
		margin-left:180rpx;
	}
	.recommend{
		@extend .notice;
		width: 671rpx;
		color: #333333;
	}
	.prominence{
		font-size:24rpx;
		font-weight:bold;
		color:#FF3B3B;
		position: absolute;
		right: 30rpx;
	}
	.softwareicon{
		width:196rpx;
		height:137rpx;
		border-radius:10rpx;
	}
	.onTriallist{
		@extend .titlebox;
		padding-bottom: 20rpx;
		border-bottom: 2rpx solid #EBEBEB;
	}
	.onTrialtextbox {
		@extend .flex;
		flex-direction: column;
		align-items: flex-start;
		height: 137rpx;
		justify-content: space-between ;
		margin-left: 15rpx;
	
	}
	.onTrialtextbox .onTrialtext{
		@extend .contentTitle;
		font-size:26rpx;
		width: 362rpx;
	}
	.onTrialtextbox .onTrialSoftwareName{
		width:188rpx;
		font-size:24rpx;
		font-weight:bold;
		color:#666666;
	}
	.onTrialSoftwareNamebox{
		@extend .flex;
	}
	.openbuttonText{
		@extend .openbutton;
		margin-left:8rpx;
	}
	.button{
		width:690rpx;
		height:81rpx;
		background:#FF3B3B;
		border-radius:41rpx;
		margin: 10rpx auto 36rpx;
		line-height: 81rpx;
		text-align: center;
		font-size:36rpx;
		font-weight:800;
		color:#ffffff;
	}
</style>
