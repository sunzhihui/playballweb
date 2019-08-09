<template>
	<view class="bg">
		<view class="pages"></view>
		<view class="inputInvitationCodebox">
			<text class="text">输入好友邀请码可以领取红包</text>
			<form @submit="formSubmit" >
				<view class="btn-area">
					<input type="text" value="" placeholder="请输入您的邀请码" class="input" placeholder-style="color:#D7D7D5;"/>
					<button formType="submit" class="submit">确定</button>
				</view>
			</form>
			<image :src="inputInvitationCodeimg" mode="mode" class="inputInvitationCodeimg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode:'aspectFit',
				inputInvitationCodeimg:'/static/inputInvitationCodeimg.png'
			};
		}
	}
</script>

<style lang="scss" scoped>
	.pages{
		@extend .pages;
	}
	.bg{
		width: 100%;
		height: 1260rpx;
		background-color:#D92623;
	}
	.inputInvitationCodebox{
		@extend .flex;
		flex-direction: column;
		align-items: center;
	}
	.text{
		font-size:34rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#F9D98E;
		margin: 98rpx auto 33rpx;
	}
	.btn-area{
		@extend .flex;
		justify-content: space-around;
		background: url('/static/inputbox.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 606rpx;
		height: 97rpx;
		margin-bottom: 56rpx;
	}
	.submit{
		width: 120rpx;
		font-size:30rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#E8B74C;
		background-color: #fff;
		margin: 0;
	}
	button::after{
	      border: none;
	}
	.inputInvitationCodeimg{
		width: 572rpx;
		height: 558rpx;
	}
</style>
