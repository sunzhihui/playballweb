<template>
	<view class="bg">
		<view class="pages"></view>
		<view class="box">
			<view class="title"><view class="titleh2">提现支付宝账号</view><text class="tips">您还没有填写账号信息</text>  <image :src="indicate" mode="mode" class="indicate"></image></view>
		</view>
		<view class="box magintop">
			<view class="title"> <text class="titleh2">提现微信账号</text><text class="tips">您还没有微信授权</text> <image :src="indicate" mode="mode" class="indicate"></image></view>
		</view>
		<view class="box magain">
			<view class="title"><text class="titleh2">实名认证</text><text class="tips">去认证</text> <image :src="indicate" mode="mode" class="indicate"></image></view>
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
	}
</script>

<style lang="scss" scoped>
		.pages{
			@extend .pages;
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
			justify-content:flex-end;
		}
		.titleh2{
			position: absolute;
			left: 30rpx;
		}
		.tips{
			font-size:28rpx;
			font-family:PingFang-SC-Bold;
			font-weight:bold;
			color:#429CFD;
			margin-right: 20rpx;
			justify-self: right !important;
		}
		
		.indicate{
			width: 15rpx;
			height: 25rpx;
		}
		.magintop{
			border-bottom:2rpx solid #EBEBEB;
		}
		.magain{
			margin-top: 0;
		}
</style>
