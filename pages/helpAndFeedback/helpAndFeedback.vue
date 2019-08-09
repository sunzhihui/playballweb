<template>
	<view>
		<view class="pages"></view>
		<view class="title">提现问题</view>
		<view class="problemList" v-for="(item,index)  in problemList" :key="index"  @click="interestSelected(index)">
			<text>{{item.problem}}</text>
			<image :src="item.instructionsIcon" mode="mode" class="instructionsIcon"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode:'aspectFit',
				problemList:[{
					problem:'满足什么条件才可以提现？',
					instructionsIcon:'/static/instructionsIcon.png'
				},
				{
					problem:'提现后多久到账？',
					instructionsIcon:'/static/instructionsIcon.png'
				},
				{
					problem:'如何填写邀请码？',
					instructionsIcon:'/static/instructionsIcon.png'
				}]
			};
		},
		methods:{
			interestSelected:function(index){
				uni.navigateTo({
					url: '../helpAndFeedbackTwo/helpAndFeedbackTwo?index='+index
				});
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.pages{
		@extend .pages;
	}
	.title{
		
		
		width:100%;
		height:100rpx;
		background:#F8F8F8;
		font-size:30rpx;
		font-weight:500;
		color:#FE594A;
		padding-left: 30rpx;
		line-height: 100rpx;
	}
	.instructionsIcon{
		width: 16rpx;
		height: 26rpx;
		position: absolute;
		right: 30rpx;
	}
	.problemList{
		@extend .title;
		@extend.flex;
		color:#333333;
		background:rgba(255,255,255,1);
		border-bottom: 1rpx solid #EBEBEB;
	}
</style>
