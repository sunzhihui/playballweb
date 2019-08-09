<template>
	<view>
		<view class="news" >
			<image :src="newsicon" :mode="mode" class="newsimg"></image>
			<text>{{news}}</text>
		</view>
	<view class="barChartbox">
		<view class="barChart" >
			<image :src="barChartbutton" :mode="mode" class="barChartbutton" @click="barChartbutton()"></image>
			<view  class="rulesbox">规 则</view>
			<view class="invitationCodebox">
				<text>我的邀请码：</text>
				<input type="text" :value="invitationCode" maxlength="11" placeholder=""/>
			</view>
		</view>
	</view>
		   <view class="tagbox">   
				<view class="uni-tagtitle">
					 <view @click="twshow()" :class="{active:cur===0}" class="uni-tag">邀请好友</view>
					 <view class="clearance"></view>
					 <view @click="thshow()" :class="{active:cur===1}" class="uni-tag">邀请收益</view>
				</view>	
				<view class="uni-tagcontent">
					<view v-show="cur === 0">
						<view class="inviteFriendArraybox" >
							<view class="inviteFriendArray" v-for="item in inviteFriendArray" :key="item.id">
								<text>{{item.inviteFriendmsg}}</text>
								<text class="sign">{{item.inviteFriendProfit}}</text>
							</view>	
						</view>
						<view class="redflagSlogan">
							<image :src="redflag" mode="mode" class="redflag"></image>
							<text >{{rewardInterval}}</text>
							<view class="bubbleboxs" >
								<text class="bubblemsg">{{bubblemsg}}</text>
							</view>	
						</view>
						<view class="redEnvelopesbox">
							<image :src="redEnvelopes1" mode="mode" class="redEnvelopes1"></image>
							<image :src="redEnvelopes2" mode="mode" class="redEnvelopes2"></image>
						</view>
						
							 <view   v-show="step===0" :class="{actives:step===0}" class="uni-step"></view>
							 <view   v-show="step===1" :class="{actives1:step===1}" class="uni-step"></view>
							 <view   v-show="step===2" :class="{actives2:step===2}" class="uni-step"></view>
							 <view   v-show="step===3" :class="{actives3:step===3}" class="uni-step"></view>
							 <view   v-show="step===4" :class="{actives4:step===4}" class="uni-step"></view>
							 <view class="ringbox">
								 <view :class="{activering:step>=1}" class="uni-stepring"></view>
								 <view :class="{activering:step>=2}" class="uni-stepring"></view>
								 <view :class="{activering:step>=3}" class="uni-stepring"></view>
								 <view :class="{activering:step>=4}" class="uni-stepring"></view>
							 </view>
							  <view class="ringbox ringcontent">
							 		<view  class="">分享1次</view>
							 		<view  class="">邀请1位好友</view>
							 		<view  class="">邀请2位好友</view>
							 		<view  class="sign">奖励升级</view>
							 </view>
						<view class="groupDiagrambox">
							<view class="groupDiagrambg1" @click="groupDiagrambg1()">
								<view class="groupDiagrammsg ">12元/位</view>
								<view class="groupDiagrammsg2">24元</view>
								<view class="groupDiagrammsg3">邀请第1-2位</view>
							</view>
							<view class="overline">
								<image :src="overlineicon" mode="mode"></image>
							</view>
							<view class="groupDiagrambg2">
								<view class="groupDiagrammsg1 ">12元/位</view>
								<view class="groupDiagrammsg2">24元</view>
								<view class="fontColor">邀请第3-5位</view>
							</view>
							<view class="overline">
								<image :src="overlineicon" mode="mode" ></image>
							</view>
							<view class="groupDiagrambg2">
								<view class="groupDiagrammsg1 ">12元/位</view>
								<view class="groupDiagrammsg2">24元</view>
								<view class="fontColor">邀请第3-5位</view>
							</view>
						</view>
							 <view   v-show="animation===true" :class="{popupanimation:animation===true}" class="popup" @click="groupDiagrambg1()">
								 <view class="popupBarchart">
									<text>奖励说明</text>
								 </view>
								 <view class="awardAmountbox">
								 	<image :src="redEnvelopes3" mode="mode"></image>
									<text class="awardAmount">{{awardAmount}}</text>元
								 </view>
								 <view class="popupContent">
									活动开始后，成功<text class="akey">邀请第1-2位</text>好友时，每位好友会按照<text class="akey">12元/位</text>的奖励发放时，共计可得<text class="akey">24元</text>
								 </view>
								 <view class="popupbottom">
								 	<text>立即邀请好友</text>
								 </view>
							 </view>
						<view class="overlineTbox">
							<view class="overlineT">
								<image :src="overlineicon" mode="mode" class="overlineicon"></image>
							</view>
						</view>
						<view class="groupDiagramTbox">
							<view class="groupDiagrambg3">
								<view class="groupDiagrammsg1 ">15元/位</view>
								<view class="groupDiagrammsg2">1200元</view>
								<view class="fontColor">邀请第5-510位</view>
							</view>
							<view class="overline">
								<image :src="overlineicon" mode="mode" class="turn"></image>
							</view>
							<view class="groupDiagrambg3">
								<view class="groupDiagrammsg1 ">16元/位</view>
								<view class="groupDiagrammsg2">6400元</view>
								<view class="fontColor">邀请第101-500位</view>
							</view>
						</view>
						<view class="overlineTtbox">
							<view class="overlineT">
								<image :src="overlineicon" mode="mode" class="overlineicon"></image>
							</view>
						</view>
						<view class="groupDiagramTbox">
							<view class="groupDiagrambg3">
								<view class="groupDiagrammsg1 ">17元/位</view>
								<view class="groupDiagrammsg2">42600</view>
								<view class="fontColor">邀请第501-800位</view>
							</view>
							<view class="overline">
								<image :src="overlineicon" mode="mode" class="turn"></image>
							</view>
							<view class="groupDiagrambg3">
								<view class="groupDiagrammsg1 ">18元/位</view>
								<view class="groupDiagrammsg2">55000元</view>
								<view class="fontColor">邀请第3001-6000位</view>
							</view>
							
						</view>
						
					</view>
					
				</view>	
					
					<view v-show="cur===1">
						gggg
					</view>
					<view class="intermedIatelayer"></view>
					<view class="roundedRectangle">
						<view class="tipbox">
							<text class="tips">快速提现金额：</text>
							<text class="cashWithdrawal">{{cashWithdrawal}}</text>
							<text class="tipbutton">立即提现</text>
						</view>
					</view>
					<view class="rulebox">
						<view class="ruletitle">
							<image :src="ruletitleimg" mode="mode" class="ruletitleimg"></image>
							<view class="ruletitleh1">怎么邀请好友</view>
							<image :src="ruletitleimg2" mode="mode" class="ruletitleimg"></image>
						</view>
						
						<view class="sharingStepsiconbox">
							<image :src="sharingStepsicon" mode="mode" class="sharingStepsicon"></image>
							<image :src="sharingStepsicon1" mode="mode" class="sharingStepsicon1"></image>
							<image :src="sharingStepsicon2" mode="mode" class="sharingStepsicon2"></image>
						</view>
						<view class="sharingStepsiconmsgbox">
							<view class="sharingStepsmsg" >
								<text class="">点击按钮</text>
								<text>分享给好友</text>
							</view>
							<view class="sharingStepsmsg  " >	
								<text>好友打开链接</text>
								<text>下载安装</text>
							</view>
							<view class="sharingStepsmsg magin" >
								<text>好友获得40金币</text>
								<text>或Ta邀请一位好友</text>
								<text>您获得红包</text>
							</view>
						</view>
						<view class="contentbox">
							<view class="content">
								<view>获得40金币说明：</view>
								<view> 1、好友每天使用玩赚大陆中的软件获得40金币，师傅就能获得当天奖励；</view>
								<view> 2、比如您通过玩赚大陆，下载后使用手机浏览器、等软件累计获得40金币；</view>
								<view>3、签到、开宝箱、下载获得的金币不计算在之内。</view>
							</view>
						</view>
						<view class="ruletitle">
							<image :src="ruletitleimg" mode="mode" class="ruletitleimg"></image>
							<view class="ruletitleh1">怎么邀请好友</view>
							<image :src="ruletitleimg2" mode="mode" class="ruletitleimg"></image>
						</view>
						
						<view class="contentbox2">
							<view class="numberbox">1
							</view>
							<view class="sharingStepcontent">
								可以告诉您的朋友：登录领最高
								<text  class="strong">88元现金</text>，可立即提现。
							</view>
						</view>
						<view class="contentbox2">
							<view class="numberbox">2
							</view>
							<view class="sharingStepcontent">
								邀请您的家人、同学、同事、朋友成功率最高。
							</view>
						</view>
						<view class="contentbox2">
							<view class="numberbox">3
							</view>
							<view class="sharingStepcontent">
								分享到3个以上微信群/QQ群，邀请成功的几率提高<text  class="strong">200%</text>
							</view>
						</view>
					</view>
					<view class="footbox">
						<view class="iconbox" @click="wechatshare()">
							<image :src="wechatIcon" mode="mode"></image>
							<text>微信邀请</text>
						</view>
						<view class="iconbox">
							<image :src="QQIcon" mode="mode"></image>
							<text>微信邀请</text>
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
				newsicon:'/static/喇叭.png',
				news:'123****3210邀请好友赚了500元',
				invitationCode:'A1234567890',
				barChartbutton:'/static/大.png',
				cur: 0,
          		step:1,	
				animation:false,
				redflag:'/static/国旗_flag51.png',
				rewardInterval:'当前奖励区间：12元/位',
				redEnvelopes1:'/static/redEnvelopes1.png',
				redEnvelopes2:'/static/redEnvelopes2.png',
				bubblemsg:'13元/位',
				overlineicon:'/static/overlineicon.png',
				cashWithdrawal:'￥0',
				ruletitleimg:'/static/1.png',
				ruletitleimg2:'/static/2.png',
				sharingStepsicon:'/static/sharingStepsicon1.png',
				sharingStepsicon1:'/static/sharingStepsicon2.png',
				sharingStepsicon2:'/static/sharingStepsicon3.png',
				wechatIcon:'/static/wechat.png',
				QQIcon:'/static/qq.png',
				awardAmount:'24',
				redEnvelopes3:'/static/redEnvelopes3.png',
				inviteFriendArray:[
					{
						inviteFriendmsg:'有效好友：',
						inviteFriendProfit:'0位'
					},
					{
						inviteFriendmsg:'已到账收益：',
						inviteFriendProfit:'0元'
					},
					{
						inviteFriendmsg:'预计收益：',
						inviteFriendProfit:'0元'
					}
				],
		}
	},
	   computed: {
		   
			},
	methods: {
		/**
		 * tab选项
		 */
		twshow(){
			this.cur=0; 
		},
		thshow(){
			this.cur=1;	
		},
		//弹窗
		groupDiagrambg1(){
			let animation = this.$data.animation;
			if(animation===false){
				animation=true;
			}else{
				animation=false;
			};
			this.animation = animation;
		},
		
		/**
		 * 分享
		 */
		wechatshare(){
			uni.share({
				provider: "weixin",
				scene: "WXSceneSession",
				type: 1,
				summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				success: function (res) {
					console.log("success:" + JSON.stringify(res));
				},
				fail: function (err) {
					console.log("fail:" + JSON.stringify(err));
				}
			});
		}
	  }
	}
</script>

<style lang="scss" scoped>
	$tag-pd:0px 32upx;
	$tag-small-pd:0px 16upx;
	@mixin tag-disabled {
		opacity: 0.5;
	}
	view{
		margin: 0;
		padding: 0;
		// font-size: 0;
		border: 0;
	}
	.barChartbox{
		width: 100%;
		height: 440rpx;
	    background:linear-gradient(180deg,rgba(248,108,0,1) 0%,rgba(242,40,0,1) 100%);
	}
	.barChart{
		background-image: url('/static/banner.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 100%;
		height: 440rpx;
		border: 0;;
	}
	.barChart image{
		width: 396rpx;
		height: 103rpx;
		position: relative;
		left: 186rpx;
		top:255rpx;
	}
	.news{
		width:100%;
		height:60rpx;
		background:rgba(244,67,12,1);
		display:-webkit-flex;
		display: flex;
		 flex-direction:row;
		justify-content: center;
		align-items: center;
	}
	.news .newsimg{
		width: 24rpx;
		height: 24rpx;
	}
	.news text{
		font-size:26rpx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		margin-left: 6rpx;
	}
	.invitationCodebox{
		font-size:24rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(229,211,154,1);
		position: relative;
		top:180rpx;
		display:-webkit-flex;
		display: flex;
		 flex-direction:row;
		justify-content:center;
		align-items: center;
		width: 320rpx;
		border-bottom: 1px solid #FE8666;
		margin: auto;
		padding-bottom: 10rpx;
		
	}
	.invitationCodebox input{
		width: 170rpx;
		font-size:24rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(229,211,154,1);
	}
	.rulesbox{
		width:40rpx;
		height:70rpx;
		background:linear-gradient(180deg,rgba(251,151,79,1) 0%,rgba(255,121,32,1) 100%);
		border-radius:4rpx 0px 0px 4rpx;
		font-size:24rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(201,64,26,1);
		line-height:36rpx;
		text-align: center;
	    position: relative;
		left: 710rpx;
		top:142rpx;
	}
	.tagbox{
		width:100%;
		height:2471rpx;
		background:linear-gradient(180deg,rgba(242,40,0,1) 0%,rgba(248,108,0,1) 100%);
	}
	.uni-tagtitle{
		width:100%;
		height:93rpx;
		display:-webkit-flex;
		display: flex;
		 flex-direction:row;
		align-items: center;
		justify-content: center;
	}
	.clearance{
		width: 10rpx;
	}
	.uni-tag {
		width:340rpx; 
		height:93rpx;
		line-height: calc(60upx - 2px);
		font-size: 32rpx;
		display: inline-flex;
		align-items: center;
		color: #F12D00;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		background:linear-gradient(0deg,rgba(254,223,116,1) 0%,rgba(255,245,183,1) 100%);
		border-radius:10rpx 10rpx 0px 0px;
		justify-content: center;
	}
	.active{
	  color: #BA8412;
	 background:rgba(255,255,255,1);	  
	  height:84rpx;
	  border-top: 9rpx solid #FEC976;
	}
	
	.uni-tagcontent{
		width:690rpx;
		height:980rpx;
		margin: auto;
		display:-webkit-flex;
		display: flex;
		 flex-direction:row;
		justify-content: center;
		background:rgba(255,255,255,1);
		z-index: 2;
		position: relative;
	}
	.inviteFriendArraybox{
		width:636rpx;
		height:68rpx;
		background:rgba(255,247,237,1);
		border:1rpx solid rgba(252,191,116,1);
		border-radius:34rpx;
		display:-webkit-flex;
		display: flex;
		 flex-direction:row;
		justify-content: center;
		align-items: center;
		margin: 28rpx auto auto;
	}
	.inviteFriendArray{
		font-size:24rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		 flex-direction:row;
		justify-content: center;
		align-items: center;
		margin-right: 14rpx;
	}
	.sign{
		color:#F33200;
	}
	.redflagSlogan{
		width: 586rpx;
		margin: 43rpx auto auto;
		font-size:26rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(241,45,0,1);
		overflow: hidden;
	}

	.redflagSlogan .redflag{
		width: 24rpx;
		height: 38rpx;
		margin-right: 10rpx;
	}
	.bubbleboxs{
		width: 108upx;
		height: 40upx;
		background-image: url('/static/圆角矩形20.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		float: right;
		margin-top: 30rpx;
	}
	.bubblemsg{
		font-size:20rpx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height: 30rpx;
		text-align: center;
		display: block;
	}
	.redEnvelopesbox{
		width: 586rpx;
		display:-webkit-flex;
		display: flex;
		 flex-direction:row;
		justify-content:space-between;
		 margin: 4rpx auto auto;
	}
	.redEnvelopes1{
		width: 54rpx;
		height: 64rpx;
	}
	.redEnvelopes2{
		width: 82rpx;
		height: 64rpx;
	}
	.uni-step{
		width:636rpx;
		height:16rpx;
		background-color:#FFDDB0;
		border-radius:8rpx;
		margin-top: 44rpx;
	}
	.ringbox {
		display:-webkit-flex;
		display: flex;
		flex-direction:row;
		justify-content:space-around;
		margin-top: -30rpx;
	}
	.uni-stepring{
		width:31rpx;
		height:31rpx;
		background:#FFDDB0;
		border:6rpx solid #FFB420;
		border-radius:50%;	
	}
	.activering{
		border:6rpx solid #FD6C22;
	}
	.actives1{
		background:linear-gradient(90deg,rgba(255,39,20,1) 0%,rgba(255,221,176,1) 22%);
	}
	.actives2{
		background:linear-gradient(90deg,rgba(255,39,20,1) 0%,rgba(255,221,176,1) 50%);
	}
	.actives3{
		background:linear-gradient(90deg,rgba(255,39,20,1) 0%,rgba(255,221,176,1) 80%);
	}
	.actives4{
		background:linear-gradient(90deg,rgba(255,39,20,1) 0%,rgba(255,221,176,1) 120%);
	}
	.ringcontent{
		font-size:24rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#CC952E;
		margin: 20rpx 0 30rpx 0;
	}

	.groupDiagrambox ,.groupDiagramTbox{
		width: 650rpx;
		display:-webkit-flex;
		display: flex;
		 flex-direction:row;
		justify-content:space-between;
		overflow: hidden;
		margin-top: 39rpx;
		margin: auto;
	}
		.groupDiagramTbox{
		margin-top: 0rpx;
	}
	.groupDiagrambg1 ,.groupDiagrambg2{
		width: 146rpx;
		height: 116rpx;
		background-image: url('/static/组 39.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;	
		
	}
	.groupDiagrambg2{
		background-image: url('/static/组 39(1).png');
	}
	.groupDiagrambg3{
		width: 283rpx;
		height: 125rpx;
		background-image: url('/static/组 39(2).png');
		background-repeat: no-repeat;
		background-size: 100% 100%;	
	}
	.groupDiagrammsg1 ,.groupDiagrammsg{
		font-size:16upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:#C17A00;
		text-align: center;	
	}
	.groupDiagrammsg2{
		font-size:30upx;
		font-family:PingFang-SC-Heavy;
		font-weight:800;
		color:rgba(255,255,255,1);
		text-align: center;			
	}
	.groupDiagrammsg3 ,.fontColor{
		font-size:20upx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(254,153,144,1);
		text-align: center;	
	}
	.fontColor{
		color: #FEE2BE;
	}
	.groupDiagrammsg{
		color:#D41403;
	}
	.overline ,.overlineT{
		width: 110rpx;
		height: 56rpx;
		background-color: #FFDFB7;
		display: flex;
		flex-direction:row;
		justify-content:center;
		align-items: center;
		margin-top: 30rpx;
	}
	.overline image{
		width: 25rpx;
		height: 21rpx;	
	}
	.overlineTbox{
		display: flex;
		flex-direction:row;
		justify-content:flex-end;
		margin-right: 75rpx;
	}
	.overlineTtbox{
		margin-left: 75rpx;
		margin-top: -3rpx;
	}
	.overlineT{
		
		height: 49rpx;
		width: 56rpx;	
		margin-top:0rpx;
		margin-bottom: -6rpx;
	}
	.overlineicon{
		width: 25rpx;
		height: 21rpx;	
		transform: rotate(90deg) ;
	}
	.turn{
		transform: rotate(180deg) ;
	}
	.intermedIatelayer{
		width:726rpx;
		height:385rpx;
		background:rgba(201,17,1,1);
		border-radius:10px;
		margin: auto;	
		margin-top: -290rpx;
		z-index: 1;
	}
	.roundedRectangle{
		width: 749rpx;
		height: 249rpx;
		background-image: url('/static/圆角矩形24.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;	
		position: relative;
		z-index: 2;
		margin: -180rpx auto auto;
		
		
	}
	.tipbox{
		display: flex;
		flex-direction:row;
		justify-content:center;
		align-items: center;
		font-size:34rpx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		 padding-top: 130rpx;
	}
	.cashWithdrawal{
		color: #FFD71F;
	}
	.tipbutton{
		width:195rpx;
		height:63rpx;
		background:rgba(209,18,0,1);
		border-radius:32rpx;
		color: #DC554B;
		text-align: center;
		line-height: 63rpx;
		display: block;
		margin-left: 100rpx;
			}
	.rulebox{
		width:690rpx;
		height:1285rpx;
		background:rgba(255,255,255,1);
		border-radius:10rpx;
		margin:24rpx auto auto;
	}
	.ruletitle{
		font-size:34rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#B65F16;
		display: flex;
		flex-direction:row;
		justify-content:center;
		align-items: center;
		padding-top: 44rpx;
	}
	.ruletitleimg{
		width: 114rpx;
		height: 6rpx;
	}
	.ruletitleh1{
		margin: 0 20rpx 0 20rpx;
	}
	.sharingStepsiconbox ,.sharingStepsiconmsgbox{
		margin: 34rpx auto auto;
		display: flex;
		flex-direction:row;
		justify-content:space-around;
		align-items: flex-end;
	}
	.sharingStepsiconmsgbox{
		 margin-top: 10px;
		justify-content:space-around;
		align-items: flex-start;
	}
	.sharingStepsicon{
		width: 70rpx;
		height: 90rpx;
	}
	.sharingStepsicon1{
		width: 66rpx;
		height: 86rpx;
		margin-left: -15rpx;
	}
	.sharingStepsicon2{
		width: 102rpx;
		height: 80rpx;
	}
	.sharingStepsmsg{
		font-size:24rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#666666;	
		text-align: center;	
	}
	.sharingStepsmsg text{
		display: block;
	}
	.contentbox{
		width:636rpx;
		height:293rpx;
		background:#FFF6F0;
		border-radius:10rpx;
		margin: 22rpx auto auto;
	}
	.content{
		width:568rpx;
		font-size:24rpx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:#666666;
		margin: auto;
		line-height: 40rpx;
		padding-top: 25rpx;
	}
	.strong{
		color: #F73A00;
	}
	.numberbox{
		width:35rpx;
		height:35rpx;
		background:#EDB07B;
		border-radius:50%;
		font-size:34rpx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:#ffffff;
		text-align: center;
		line-height: 35rpx;
	}
	.contentbox2{
		width: 583rpx;
		margin:35rpx auto auto;
		display: flex;
		flex-direction:row;
		justify-content:center;
		align-items: flex-start;
	}
	.sharingStepcontent{
		width: 504rpx;
		font-size:26rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:$uni-font-size-color;
		line-height:40rpx;
		margin-left: 16rpx;
	}
	.footbox{
		position: fixed;
		width:750rpx;
		height:165rpx;
		background:#ffffff;
		box-shadow:0px 0px 24px 0px rgba(221,221,221,1);
		bottom: 0rpx;
		z-index: 4;
		display: flex;
		flex-direction:row;
		justify-content:space-around;
		align-items: center;
	}

	.iconbox text{
		display: block;
		font-size:22rpx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:#333333;
		line-height:44rpx;
		margin-left: -10rpx;
	}
	.iconbox image{
		width: 72rpx;
		height: 72rpx;
	}
	.popup{
		position: absolute;
		width:500rpx;
		height:551rpx;
		background:#ffffff;
		border-radius:10rpx;
		top:-40rpx;
		left: 95rpx;
		z-index: 5;
		display: flex;
		flex-direction:column;
		justify-content:space-around;
		align-items: center;
	}

	.popupBarchart{
		background-image: url('/static/popupBarchart.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;	
		width: 314rpx;
		height: 75rpx;
		text-align: center;
		line-height: 72rpx;
		font-size:38rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#ffffff;
		margin-top: 20rpx;
	}
	.awardAmountbox{
		width:376rpx;
		height:80rpx;
		background:rgba(255,251,231,1);
		border-radius:8rpx;
		font-size:34rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#000000;
		display: flex;
		flex-direction:row;
		justify-content:center;
		align-items: center;
	}
	.awardAmountbox image{
		width:93rpx;
		height:97rpx;
	}
	.awardAmount{
		font-size:52rpx;
		color:#FF3333;
		margin-bottom: 15rpx;
	}
	.popupContent{
		width: 450rpx;
		font-size:24rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(0,0,0,1);
		line-height:40rpx;
	}
	.akey{
		color: #FD3232;
	}
	.popupbottom{
		width:386rpx;
		height:60rpx;
		background:#FF3333;
		border-radius:30rpx;
		font-size:30rpx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:#fff;
		line-height: 60rpx;
		text-align: center;
		margin-bottom: 32rpx;
	}
</style>
