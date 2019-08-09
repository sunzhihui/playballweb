<template>
	<view>
		<view>
			<view class="pages"></view>
			<view class="line"></view>
			<view class="box" v-show="index==='0'">
				<text class="title">满足什么条件才可以提现</text>
				<view class="content">
					<text>您好，为了保证每位用户上网行为的真是有效，打造一个公平公正的平台，提现需要满足以下条件：</text>
					<text>1. 绑定支付宝账户或者授权微信账户，具体绑定方法如下：</text>
					<text>a. 支付宝绑定方法：登录优赚宝APP-我的-设置-账户与安全-提现支付宝账户进行支付宝账户绑定；</text>
					<text>b. 微信账户授权方法：登录优赚宝APP-我的-设置-账户与安全-提现微信账号进行微信账户授权。</text>
					<text>2. 优赚宝账户未受限，若您的账户已被封禁，无法进行提现；</text>
					<text>3. 满足以下三个提现规则中的任意一个：</text>
					<text> （1）连续5天每天获得1500金币的用户即可获得10元提现机会，提现后重新获得提现机会；</text>
					<text> （2）连续25天每天获得1500金币的用户即可获得10元提现机会，提现后重新获得提现机会；</text>
					<text> （3）收益达到30元及以上，随时都可申请提现</text>
					<text>注：</text>
					<text>1. 每天累计获得1500金币，包括优赚宝APP任务及高额任务；</text>
					<text>2. 成功邀请好友：邀请收益页面显示好友手机号，表示您邀请好友成功；</text>
					<text>3. 提现申请提交后，提现条件将重新计算。</text>
				</view>
			</view>
			<view class="box" v-show="index==='1'">
				<text class="title">提现后多久到账？</text>
				<view class="content">
					<text>您好，提交申请后，一般会在5个工作日之内完成审核到账。若页面显示“审核中”，还请继续等待。若页面显示“提现成功”，您可以根据您的提现方式打开支付宝或者微信进行查看。您可以在我的钱包-支出明细-查看提现记录。</text>
					<text>如果您申请支付宝提现，请登录支付宝点击【我的】-【账单】-【搜索】，输入优赚宝进行详细查询。如果您申请微信提现，您登录微信点击【我】-【钱包】-【零钱】右上方点击零钱明细查看来自【优赚宝平台】的收入明细。</text>
				</view>
			</view>
			<view class="box" v-show="index==='2'">
				<text class="title">如何填写邀请码？</text>
				<view class="content">
					<text>在【我的】页面里面进行邀请码填写，若您是通过扫描好友的二维码下载注册的优赚宝APP,则默认是已经填过邀请码了，页面上将不再显示填写框。</text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:'',
			};
		},
		onLoad:function(option)  {
			let ind = option.index 
			this.index = ind;
			console.log(this.index);
		},
		
		
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
		.line{
			width:100%;
			height:20rpx;
			background:#F8F8F8;
		}
		.box{
			width: 685rpx;
			margin: auto;
		}
		.box .title{
			font-size:34rpx;
			font-family:PingFang-SC-Bold;
			font-weight:bold;
			color:#333333;
			border-bottom: 2rpx solid #EBEBEB;
			padding-bottom: 29rpx;
			display: block;
			line-height: 80rpx;
			height: 60rpx;
			margin-bottom: 35rpx;
		}		
		.content text{
			display: block;
			font-size:30rpx;
			color: #333333;
		}
		
</style>
