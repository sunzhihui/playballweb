<template>
	<view>
		<view class="pages"></view>
		<view class="bannerbox">
			<image :src="banner" mode="mode" class="banner"></image>
		</view>
		<view class="prominence">
			<text>每月躺赚99元</text>
		</view>
		<view class="fastEarninglistbox">
			<view class="fastEarninglist" v-for="(item,index)  in fastEarninglist" :key="index">
				<image :src="item.fastEarningicon" mode="mode" class="fastEarningicon"></image>
				<view class="softwareName">
					<view class="alreadyInstalled">已安装</view>
					<text>{{item.softwareName}}</text>
				</view>
			</view>
		</view>
		<view class="button">一键安装领
			<text class="prominent">{{reapProfit}}</text>元
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode:'aspectFit',
				banner:'/static/fastEarningbanner.png',
				fastEarninglist:[{
					fastEarningicon:'/static/fastEarning5.png',
					softwareName:'锁屏看新闻'
				},
				{
					fastEarningicon:'/static/fastEarning6.png',
					softwareName:'二次元的世界'
				},
				{
					fastEarningicon:'/static/fastEarning7.png',
					softwareName:'天天P图'
				},
				{
					fastEarningicon:'/static/fastEarning8.png',
					softwareName:'现金贷'
				},
				{
					fastEarningicon:'/static/fastEarning9.png',
					softwareName:'老鹰小说'
				}],
				reapProfit:'5.00'
			};
		}
	}
</script>

<style lang="scss" scoped>
		.pages{
			@extend .pages;
		}
		.banner{
			width:750rpx;
			height:237rpx;
		}
		.prominence{
			width: 443rpx;
			height: 80rpx;
			background-image: url('/static/fastEarning2.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			text-align: center;
			line-height: 80rpx;
			font-size:44rpx;
			font-weight:800;
			color:#FF1800;
			position:absolute; 
			z-index: 2;
			margin: -80rpx 154rpx 0 153rpx;
		}
		.fastEarningicon{
			width: 122rpx;
			height: 122rpx;
			border-radius: 20rpx;
		}
		.alreadyInstalled{
			width:122rpx;
			height:34rpx;
			background:rgba(234,0,0,1);
			border-bottom-left-radius: 15rpx;
			border-bottom-right-radius: 15rpx;
			font-size:22rpx;
			color:#ffffff;
			text-align: center;
			position: absolute;
			z-index: 2;
			margin-top: -44rpx;
		}
		.softwareName text{
			font-size:26rpx;
			font-family:PingFang-SC-Bold;
			font-weight:bold;
			color:#333333;
			display: block;
		}
		.fastEarninglistbox{
			@extend .flex;
			flex-wrap:wrap;
			width: 690rpx;
			margin: 69rpx auto 83rpx;
			
		}
		.fastEarninglist{
			flex-basis:160rpx;
			margin: 15rpx 20rpx 30rpx 50rpx;

		}
		.button{
			width:623rpx;
			height:94rpx;
			background:linear-gradient(0deg,rgba(242,40,0,1) 0%,rgba(255,90,0,1) 99%);
			border-radius:47rpx;
			font-size:40rpx;
			font-family:MFLangQian_Noncommercial-Regular;
			font-weight:400;
			color:#ffffff;
			text-align: center;
			line-height: 94rpx;
			margin: auto auto 143rpx;
		}
		.prominent{
			font-size:48rpx;
			color:#FFFD2C;
		}
</style>
