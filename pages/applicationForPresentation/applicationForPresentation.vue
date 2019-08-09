<template>
	<view class="bg">
		<view class="pages"></view>
		<view class="bgsm">
			<view class="successiconTipsbox">
				<image :src="successicon" mode="mode" class="successiconlg"></image>
				<view class="">申请成功</view>
			</view>
			<view class="tipsMsgboxlg">
				<view class="tipsMsgbox">
					<image :src="successiconmin" mode="mode" class="successiconsm"></image>
					<view class="strip"></view>
				</view>
				<view class="textInformation">
					<view class="fontsizelg">提现申请已提交，等待后台处理</view>
					<view><text class="fontsizebise">本次提现金额：</text>{{sumOfMoney}}</view>	
				</view>
			</view>
			<view class="tipsArrivalAccountbox">
				<view class="tipsMsgbox">
					<view class="stripT"></view>
					<image :src="greyGoldcoins" mode="mode" class="successiconsm"></image>
				</view>
				<view class="">
					<view class="">预计07-16 22：00前到账</view>
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
				successicon:'/static/successicon.png',
				successiconmin:'/static/successiconmin.png',
				greyGoldcoins:'/static/greyGoldcoins.png',
				sumOfMoney:'1元'
			};
			
		},
		methods:{
				onNavigationBarButtonTap:function(e){
				uni.navigateTo({			
					url: '/pages/presentation/presentation'
				});
			},
		},
	}
</script>

<style lang="scss" scoped>
	.pages{
		@extend .pages;
	}
	.successiconlg{
		width: 70rpx;
		height: 70rpx;
	}
	.strip {
		width:4rpx;
		height:59rpx;
		background:#FF5040;
		margin-left: 14rpx;
		margin-top: -6rpx;
	}
	.stripT{
		width:4rpx;
		height:114rpx;
		background:#EAEAEA;
		margin-left: 14rpx;
	}
	.successiconsm{
		width: 34rpx;
		height: 34rpx;
	}
	.bgsm{
		background-color:#fff;
		padding-bottom: 30rpx;
	}
	.successiconTipsbox{
			@extend .flex;
			flex-direction:column;
			font-size:34rpx;
			font-family:PingFang-SC-Medium;
			font-weight:500;
			color:#333333;
			padding-top: 40rpx;
	}
	.tipsMsgbox{
		@extend .flex;
		flex-direction:column;
		align-items: flex-start;
		margin:0 20rpx 0 30rpx;
	}
	.textInformation{
		@extend .flex;
		flex-direction:column;
		align-items:flex-start;
		font-size:24rpx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:#333333;
	}
	.fontsizelg{
		font-size:32rpx;
		color:#FF5040;
		margin-bottom: 8rpx;
	}
	.fontsizebise{
		font-size:26rpx;
		color:#999999;
	}
	.tipsMsgboxlg{
		@extend .flex;
		margin-top: 37rpx;
	}
	.tipsArrivalAccountbox{
		@extend .flex;
		align-items:flex-end;
		font-size:32rpx ;
		color:#333333;
	}
	.bg{
		width: 100%;
		height: 1260rpx;
		background-color:#F7F7F7;
	}
</style>
