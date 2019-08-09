<template>
	<view class="bg">
		<view class="pages"></view>
		<view class="tips">您可以选择以下任意一种方式完成实名认证：</view>
		<view class="box">
					<view class="idCardiconbox">
				<image :src="idCardicon1" mode="mode" class="idCardicon"></image>
				<view class="contentbox magain">
					<view class="cornerMarker">推荐</view>
					<text class="contentTitle">自动快捷认证</text>
					<text>提交身份信息，即时认证</text>
				</view>
				<view class="indicatebox">
					<text>即时生效</text>
					<image :src="indicate" mode="mode" class="indicate"></image>
				</view>
			</view>
			<view class="idCardiconbox" @click="onlineSubmissionIdentityCardInformationJump()">
				<image :src="idCardicon2" mode="mode" class="idCardicon"></image>
				<view class="contentbox">
					<text>人工认证</text>
					<text>需要手持身份证并拍摄照片,3个工作日内审核完成</text>
				</view>
				<view class="indicatebox">
					<image :src="indicate" mode="mode" class="indicate"></image>
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
				indicate:'/static/indicate.png',
				idCardicon1:'/static/idCardicon1.png',
				idCardicon2:'/static/idCardicon2.png'
			};
		},
		methods:{
			onlineSubmissionIdentityCardInformationJump:function(){
				uni.navigateTo({			
						url: '/pages/onlineSubmissionIdentityCardInformation/onlineSubmissionIdentityCardInformation'
					});
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
		padding-top: 50rpx;
	   background-color: #fff;
	}
	.indicate{
		width: 15rpx;
		height: 25rpx;
	}
	.idCardicon{
		width: 80rpx;
		height: 80rpx;
	}
	.tips{
		width:100%;
		height:70rpx;
		background:#EEEEEE;
		font-size:28rpx;
		font-weight:bold;
		color:#666666;
		line-height: 70rpx;
		padding-left: 30rpx
	}
	.idCardiconbox{
		@extend .flex;
		width: 690rpx;
		margin: auto;
		justify-content: space-between;
		padding-bottom: 50rpx;
	}
	.idCardiconbox .contentbox{
		@extend .flex;
		flex-direction: column;
		align-items: flex-start;
		font-size:24rpx;
		font-weight:bold;
		color:#666666;
	}
	.magain{
		margin-left: -120rpx;
	}
	.idCardiconbox .indicatebox text{
		font-size:28rpx;
		font-weight:bold;
		color:#FF5040;
		margin-right: 20rpx;
	}
	 .contentTitle{
		 @extend .contentTitle;
		 margin-bottom: 6rpx;
	 }
	 .cornerMarker{
		 background-image: url('/static/cornerMarker.png');
		 background-repeat: no-repeat;
		 background-size: 100% 100%;
		 font-size:20rpx;
		 font-weight:500;
		 color:#fff;
		 width: 57rpx;
		 height: 35rpx;
		 text-align: center;
		 align-self: flex-end;
		 margin-right: 15rpx;
		margin-bottom: -20rpx;
	 }
</style>
