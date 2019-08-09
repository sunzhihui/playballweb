<template>
	<view>
		<view class="pages"></view>
		<view class=" goldCoinsbox">
			￥<text class="cashWithdrawal">{{cashWithdrawal}}</text><text class="goldCoins">({{goldCoins}}金币)</text>
		</view>
		<view passive  class="septum" ></view>
		<view class="methodOfwithdrawal">
			<view><text>提现方式</text></view>
			<view class="iconbox" @click="wechatSelected()" :class="{active:selected===1}"><image v-show="selected===1" :src="selectedicon" mode="mode" class="selectedicon"></image><image :src="wechaticon" mode="mode"  class="wechaticon"></image><text>微信</text></view>
			<view class="iconbox" @click="alipayselected()" :class="{active:selected===2}"><image v-show="selected===2" :src="selectedicon" mode="mode" class="alipayselectedicon"></image><image :src="alipayicon" mode="mode"  class="alipayicon"></image><text>支付宝</text></view>
		</view>
		<view passive  class="septum" ></view>
		<view class="exchangeRateBox">
			<text class="">活动专属提现</text>
			<text class="exchangeRate">汇率：1000金币=1元</text>
		</view>
		<view class="userAttributebox">
			<view @click="newuserSelected()"  :class="{active:userselected===1}" class="userselectedbox" >
				<image v-show="userselected===1" :src="selectedicon" mode="mode" class="userselected"></image>
					<text>1元</text>
					<text class="userAttribute">新用户专享</text>
			</view>
			<view  @click="userSelected()"  :class="{active:userselected===2}" class="userselectedbox">
					<image v-show="userselected===2" :src="selectedicon" mode="mode" class="userselected"></image>
					<text>10元</text>
					<text class="userAttribute">连续活跃专享</text>
			</view>
		</view>
		<view class="tipsbox">
			<image :src="goldicon" mode="mode"></image>
			<text>您已达到条件，可以立即提现</text>
		</view>
		<view passive  class="septum" ></view>
		<view class="exchangeRateBox">
			<text class="">普通提现</text>
		</view>
		<view class="facevalueArray">
			<view class="" v-for="item in facevalueArray" :key="item.id">
				<view class="facevalue">{{item.facevalue}}</view>
			</view>
		</view>
		<view class="mattersNeedingAttention">
			<text>注意事项：</text>                        
			<text>1、提现申请将在5工作日内审核到账，请耐心等待；</text>
			<text>2、提现金额将在提现审核通过以后，汇入您的支付宝或者微信钱包中，您可以在支付宝账单或者微信钱包明细中查询</text>
		</view>
		<view class="cashWithdrawalbuttom">立即提现</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode:'aspectFit',
				cashWithdrawal:'5.07',
				goldCoins:'5076',
				selected:1,
				userselected:1,
				wechaticon:'/static/wechat.png',
				alipayicon:'/static/alipayicon.png',
				selectedicon:'/static/selectedicon.png',
				goldicon:'/static/haveAfun_04.png',
				facevalueArray:[{
					facevalue:'10元'
				},
				{
					facevalue:'20元'
				},
				{
					facevalue:'30元'
				},
				{
					facevalue:'40元'
				},
				{
					facevalue:'50元'
				}],
			};
		},
		methods:{
			/**
			 * 提现方式的选中
			 */
			wechatSelected(){
				this.selected = 1;
			},
			alipayselected(){
				this.selected = 2;
			},
			newuserSelected(){
				this.userselected = 1;
			},
			userSelected(){
				this.userselected = 2;
			}
		}
	}
</script>

<style lang="scss" scoped>
	$tag-color:#FF5040;
	page{
		@extend page;
		background-color: #ffffff;
	}
	.flex{
		display:-webkit-flex;
		display: flex;
		flex-direction:row;
		justify-content:space-around;
		align-items: center;
		
	}
	.goldCoinsbox{
		width: 100%;
		height: 105rpx;
		font-size:30rpx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:$tag-color;
		@extend .flex;
		align-items: flex-end;
		justify-content: flex-start;
		margin-bottom: 40rpx;
	}	
	.cashWithdrawal{
		font-size:80rpx;
		margin-bottom: -16rpx;
	}
	.goldCoins{
		color: #999999;
	}
	.methodOfwithdrawal{
		@extend .flex;
		width: 95%;
		height: 151rpx;	
		margin: auto;
	}
	.methodOfwithdrawal text{
		font-size:32rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:$font-size-cloor;
	}
	.alipayicon ,.wechaticon{
		width: 54rpx;
		height: 54rpx;
		margin-right: 10rpx;
	}

	.selectedicon ,.alipayselectedicon ,.userselected{
		width: 56rpx;
		height: 50rpx;
		justify-self: flex-start;
		align-self: flex-start;
		margin-left: -60rpx;
	}
	.alipayselectedicon{
		margin-left: -30rpx;
	}
	.userselected{
		margin-left: 0rpx;
	}
	.active {
		border:2rpx solid $tag-color!important;
	}
	.septum{
		    margin-top: 0px;
	}
	.exchangeRateBox{
		@extend .flex;
		width:90%;
		@extend .titlefon-size-lg;
		margin: 30rpx auto auto;
		justify-content: space-between;
	}
	.titlefon-size-lg{
		font-size:32rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:$uni-font-size-color;
	}
	.titlefon-size-base{
		font-size:26rpx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:#999999;
	}
	.exchangeRate{
		@extend .titlefon-size-base;
	}
	.iconbox{
		@extend .flex;
		width:242rpx;
		height:92rpx;
		border-radius:6rpx;
		justify-content: center;
		border:2rpx solid #DEDEDE;
	}
	.userselectedbox{
		@extend .flex;
		width:216rpx;
		height:119rpx;
		border-radius:6rpx;
		margin-left: 40rpx;
		flex-direction: column;
		border:2rpx solid  #DEDEDE;
		@extend .titlefon-size-lg;
	}
	
	.userAttribute{
	@extend .titlefon-size-base;
		font-size:28rpx;
	}
	.userAttributebox{
		@extend .flex;
		justify-content: flex-start;
		margin-top: 40rpx;
		width: 90%;
	}
	.tipsbox{
		@extend .flex;
		justify-content: flex-start;
		width:690rpx;
		height:82rpx;
		background:rgba(255,246,246,1);
		border-radius:4rpx;
		margin: 38rpx auto 20rpx;
		font-size:28rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:$tag-color;
	}
	.tipsbox image{
		width: 32rpx;
		height: 32rpx;
		margin: 0 10rpx 0 20rpx;
	}
	.facevalueArray{
		// width: 690rpx;
		@extend .flex;
		justify-content: flex-start;
		flex-wrap:wrap;
		margin-left: 15rpx;
	}
	.facevalue{
		@extend .flex;
		width:216rpx;
		height:83rpx;
		border:2rpx solid rgba(222,222,222,1);
		border-radius:6rpx;
		margin: 15rpx  0 0rpx 15rpx;
	}
	.mattersNeedingAttention{
		width:676rpx;
		margin: 49rpx auto 31rpx;
	}
	.mattersNeedingAttention text{
		display: block;
		@extend .titlefon-size-base;
		color: #666;
	}
	.cashWithdrawalbuttom{
		width:690rpx;
		height:86rpx;
		background:$tag-color;
		border-radius:43rpx;
		font-size:44rpx;
		//font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#fff;
		line-height:86rpx;
		text-align: center;
		margin: 31rpx auto 80rpx;
	}
	
	  	.pages{
	  	width:100%;
	  	height:1rpx;
	  	background-color:#EBEBEB;
	  }
</style>
