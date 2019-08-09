<template>
	<view>
		<view class="pages"></view>
		<view class="bannerbox">
			<image :src="banner" mode="mode" class="banner"></image>
		</view>
		<view class="box">
			<view class="welfareSocietylist" v-for="(item,index)  in welfareSocietylist" :key="index" >
				<image :src="item.Iconimage" mode="mode" class="Iconimage"></image>
				<view class="centre">
					<text class="title">{{item.title}}</text>
					<text class="tips">{{item.tips}}</text>
					<view class="receivebutton"  @click="welfareSociety(index)">立即领取</view>
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
				banner:'/static/banner1.png',
				welfareSocietylist:[{
					Iconimage:'/static/tadyTask_03.png',
					title:'新人超大福利',
					tips:'送99元话费'
				},
				{
					Iconimage:'/static/tadyTask_07.png',
					title:'支付宝',
					tips:'新老用户红包领不停！'
				},
				{
					Iconimage:'/static/tadyTask_09.png',
					title:'腾讯大王卡WIFI不限量',
					tips:'首充50元得120元话费！'
				},
				]
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
	.banner{
		width:750rpx;
		height:236rpx;
	}
	.Iconimage{
		width: 196rpx;
		height: 137rpx;
	}
	.receivebutton{
		width:156rpx;
		height:56rpx;
		background:linear-gradient(0deg,rgba(255,132,0,1) 0%,rgba(255,186,112,1) 98%);
		border-radius:28rpx;
		font-size:26rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#ffffff;
		text-align: center;
		line-height: 56rpx;
		align-self: flex-end;
	}
	.welfareSocietylist{
		@extend .flex;
		width: 690rpx;
		margin:auto auto 20rpx ;
		border-bottom: 2rpx solid #EBEBEB;
		padding-bottom: 20rpx;
	}
	.centre{
		@extend .flex;
		flex-direction: column;
		align-items: flex-start;
		flex-basis:500rpx;
		margin-left: 20rpx;
	}
	.centre .title{
		font-size:30rpx;
		font-family:PingFang-SC-Heavy;
		font-weight:800;
		color:#333333;
	}
	.centre .tips{
		font-size:24rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#FF5646;
		line-height:50rpx;
	}
	.box{
		margin-top: 30rpx;
		margin-bottom: 56rpx;
	}
</style>
