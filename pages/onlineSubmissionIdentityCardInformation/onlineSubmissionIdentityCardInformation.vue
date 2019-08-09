<template>
	<view>
		<view class="pages"></view>
		<view class="beCarefulbox">
			<image :src="beCareful" mode="mode" class="beCareful"></image><text>信息仅用于实名认证，优赚宝将严格保障您的信息安全</text>
		</view>
		<form @submit="formSubmit" @reset="formReset">
			<view class="inputbox">
				<text>姓名</text>
				<input type="text" v-model="inputnameValue" name="inputnameValue"  placeholder="请输入身份证姓名" class="input" placeholder-style="color:#D4D4D4;"/>
			</view>
			<view class="inputbox" >
				<text>账号</text>
				<input type="idcard" v-model="inputidcardValue" name="inputidcardValue" placeholder="请输入身份证号码" class="input" placeholder-style="color:#D4D4D4;"/>
			</view>
			<view class="content">
				<text class="h4">身份证照片</text>
				<view class="idCardbox">
					<view class="">
						<view class="cameraiconbox">
							<image :src="cameraicon" mode="mode" class="cameraicon"></image>
							<text>点击拍照</text>
						</view>
						<text class="magain">拍摄/上传人像面手持照</text>
					</view>
					<view class="">
						<view class="cameraiconbox">
							<image :src="cameraicon" mode="mode" class="cameraicon"></image>
							<text>点击拍照</text>
						</view>
						<text class="magain">拍摄/上传国徽面手持照</text>
					</view>
				</view>
				</view>
			
			<view class="photoRequirements">
				<text class="titleh4">身份证照片要求：</text>
				<text>1、照片需为后置摄像头拍摄的手持照，人像面与国徽面均需要上传</text>
				<text>2、请以写有当日日期的纸张作为身份证背景拍摄</text>
				<text>3、请确保身份证信息真实有效，图片清晰，边角完整，背景可见</text>
				<text>4、单张照片大小需在100KB以上10MB以下</text>
			</view>
			<button formType="submit" class="submit" >下一步</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode:'aspectFit',
				beCareful:'/static/beCareful.png',
				cameraicon:'/static/cameraicon.png',
				inputidcardValue:'',
				inputnameValue:''
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
	.beCarefulbox{
		width:100%;
		height:50rpx;
		background:#FFF8CE;
		font-size:24rpx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:#FD3E3E;
		line-height: 50rpx;
		@extend .flex;
		margin-bottom: 20rpx;
		
	}
	.beCareful{
		width: 30rpx;
		height: 30rpx;
		margin:0 10rpx 0 30rpx;
	}
	.inputbox{
		@extend .flex;
		height:100rpx;
		border-bottom:2rpx solid #EBEBEB;
	}
	.inputbox text{
		font-size:32rpx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:#666666;
		margin:0 40rpx 0 30rpx;
	}
	.submit{
		width:690rpx;
		height:86rpx;
		background:#FF5040;
		border-radius:43rpx;
		margin: 70rpx auto auto;
		font-size:32rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#FFFFFF;
		margin-bottom: 189rpx;
	}
	.photoRequirements {
		width: 690rpx;
		margin: auto; 
	}
	.photoRequirements text{
		font-size:28rpx;
		color:rgba(51,51,51,1);
		display: block;
	}
	.photoRequirements .titleh4{
		font-size:30rpx;
		font-weight:800;
	}
	.cameraicon{
		width: 100rpx;
		height: 100rpx;
		z-index: 2;
		background-color: rgba(0,0,0,1);
	}
	.cameraiconbox{
		width:280rpx;
		height:330rpx;
		background:rgba(0,0,0,1);
		opacity:0.8;
		font-size:28rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(255,80,64,1);
		@extend .flex;
		flex-direction: column;
		justify-content: center;
		    margin-left: 30rpx;
	}
	.idCardbox{
		@extend .flex;
		width: 680rpx;
		margin: auto;
		justify-content: space-between;
	}
	.content{
		font-size:30rpx;
		font-weight:bold;
		color:#333333;
		border-bottom: 2rpx solid #EBEBEB;
		margin-bottom: 63rpx;
	}
	.h4{
		font-size: 32rpx;
		display: block;
		margin: 40rpx 0 40rpx 30rpx;
	}
	.magain{
		display: block;
		margin: 30rpx 0 30rpx 18rpx;
	}
</style>
