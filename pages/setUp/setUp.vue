<template>
	<view class="bg">
		<view class="pages"></view>
		<view class="box">
			<view class="title"><text>账号与安全</text>  <image :src="indicate" mode="mode" class="indicate"></image></view>
		</view>
		
		<view class="titleTwo">
			<text class="titleh2">签到提醒</text>
			<switch  @change="switch1Change" :color=" color" style="transform:scale(1.1)"/>
			<text class="titleh5">开启后,系统日历每天提醒签到</text>
		</view>
		<view class="box magintop">
			<view class="title"> <text>关于优赚宝</text> <image :src="indicate" mode="mode" class="indicate"></image></view>
		</view>
		<view class="box magain">
			<view class="title"><text>检查更新</text> <image :src="indicate" mode="mode" class="indicate"></image></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode:'aspectFit',
				color:' #FF5040',
				indicate:'/static/indicate.png'
			};
		},
		methods:{
			switch1Change:function(e){
				//debugger
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pages{
		@extend .pages;
	}
	.bg{
		@extend .bg;
	}
	.box{
		width:100%;
		margin-top: 11rpx;
		background:#ffffff;
	}
	.title{
		width:690rpx;
		height:100rpx;
		margin: auto;
		font-size:32rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#333333;
		@extend .flex;
		justify-content: space-between;
	}
	.indicate{
		width: 15rpx;
		height: 25rpx;
	}
	.titleTwo{
		width:749rpx;
		height:150rpx;
		background:#ffffff;
		@extend .flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 10rpx;
	}
	.titleh2{
		font-size:32rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#333333;
		margin-left: 30rpx;
		margin-top: 20rpx;
	}
	switch{
		align-self:flex-end;
		margin-right: 30rpx;
	}
	.titleh5{
		@extend .titleh2;
		font-size:28rpx;
		color:#999999;
		margin-top: -30rpx;
	}
	.magintop{
		margin-top: 20rpx;
		border-bottom:2rpx solid #EBEBEB;
	}
	.magain{
		margin-top: 0;
	}
</style>
