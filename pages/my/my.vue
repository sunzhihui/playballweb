<template>
	<view class="content">
		<view class="personal">
			<view class="personal_pic">
				<image src="../../static/mine/head_por.jpg" mode=""></image>
			</view>
			<view class="personal_datum">
				<view class="personal_ID">
					123456789
				</view>
				<view class="invite_code">
					我的邀请码：LFH159753
				</view>
			</view>
		</view>
		
		<view class="wallet">
			<view class="wallet_num">
				<view class="wallet_all">
					<text>5069</text>
					<span>可提金币</span>
					<view class="draw_money">
						立即提现
					</view>
				</view>
				<view class="wallet_today" @tap="navigateToWallet">
					
					<text>100</text>
					<span>可提金币</span>
					<view class="draw_money">
							我的钱包
					</view>
				</view>
			</view>
			<view class="wallet_dynamic">
				钱包动态：今日已赚<text>18金币</text>，超过20%的人！去赚更多
			</view>
		</view>
		
		<view class="subfieled">
			<view class="subfieled_list">
				<image src="../../static/mine/sub_01.png" mode=""></image>
				<text>赚钱必备</text>
			</view>
			<view class="subfieled_list">
				<image src="../../static/mine/sub_02.png" mode=""></image>
				<text>邀请好友</text>
			</view>
			<view class="subfieled_list" @tap="navigateTo">
				<image src="../../static/mine/sub_03.png" mode=""></image>
				<text>新人红包</text>
			</view>
			<view class="subfieled_list">
				<image src="../../static/mine/sub_04.png" mode=""></image>
				<text>刷小视频赚</text>
			</view>
		</view>
		
		<view class="banner">
			<image src="../../static/mine/banner@2x.png" mode=""></image>
		</view>
		
		<view class="course">
			<view class="course_title">
				新手赚钱教程
			</view>
			<view class="course_list">
				<view class="course_task active">
					<view class="course_money">
						+5.01元
					</view>
					<text>看新闻</text>
					<span>得金币</span>
				</view>
				
				<view class="course_task">
					<view class="course_money">
						+5.01元
					</view>
					<text>看新闻</text>
					<span>得金币</span>
				</view>
				
				<view class="course_task">
					<view class="course_money">
						+5.01元
					</view>
					<text>做任务开</text>
					<span>宝箱</span>
				</view>
				
				<view class="course_task">
					<view class="course_money">
						+5.01元
					</view>
					<text>1元提现</text>
					<span>新人专享</span>
				</view>
				
			</view>
		</view>
		
		<view class="apply">
			<view class="apply_title">
				星球应用
			</view>
			<view class="apply_list">
				<view class="apply_sub">
					<image src="../../static/mine/apply_01.png" mode=""></image>
					<text>星球果园</text>
				</view>
				<view class="apply_sub">
					<image src="../../static/mine/apply_02.png" mode=""></image>
					<text>星球福利</text>
				</view>
				<view class="apply_sub">
					<image src="../../static/mine/apply_03.png" mode=""></image>
					<text>邀请好友</text>
				</view>
				<view class="apply_sub">
					<image src="../../static/mine/apply_04.png" mode=""></image>
					<text>输入邀请码</text>
				</view>
				<view class="apply_sub">
					<image src="../../static/mine/apply_05.png" mode=""></image>
					<text>玩游戏赚钱</text>
				</view>
				<view class="apply_sub">
					<image src="../../static/mine/apply_06.png" mode=""></image>
					<text>免费小说</text>
				</view>
				<view class="apply_sub">
					<image src="../../static/mine/apply_07.png" mode=""></image>
					<text>有奖问卷</text>
				</view>
				<view class="apply_sub">
					<image src="../../static/mine/apply_08.png" mode=""></image>
					<text>点我领金币</text>
				</view>
			</view>
		</view>
		
		<view class="apply">
			<view class="apply_title">
				帮助中心
			</view>
			<view class="apply_list">
				<view class="apply_sub">
					<image src="../../static/mine/help_01.png" mode=""></image>
					<text>帮助中心</text>
				</view>
				<view class="apply_sub">
					<image src="../../static/mine/help_02.png" mode=""></image>
					<text>设置</text>
				</view>
			</view>
		</view>
		<view class="" @click="shareJump()">
			分享好友
			</view>
			<view class="" @click="presentationJump()">
			立即提现
			</view>
			<view class="" @click="addAlipayJump()">
				添加支付宝
			</view>
			<view class="" @click="applicationForPresentationJump()">
				提现申请提交
			</view>
			<view class="" @click="inputInvitationCodeJump()">
				输入邀请码
			</view>
			<view class="" @click="questionnaireInvestigationJump()">
				问卷调查
			</view>
			<view class="" @click="downloadMakeMoneyJump()">
				下载赚钱
			</view>
			<view class="" @click="helpAndFeedbackJump()">
				帮助与反馈
			</view>
			<view class="" @click="setUpJump()">
				设置
			</view>
			<view class="" @click="accountAndSecurityJump()">
				账号与安全
			</view>
			<view class="" @click="realNameAuthenticationJump()">
				实名认证
			</view>
			<view class="" @click="starWelfareSocietyJump()">
				星球福利社
			</view>
			<view class="" @click="missionDetailsJump()">
				任务详情
			</view>
			<view class="" @click="haveafunTwoJump()">
				玩一玩2
			</view>
	</view>
</template>

<script>
		export default {
			data() {
				return {
				
				}
			},
			methods: {
				navigateTo(){
					uni.navigateTo({
						url:'../task_center/task_center'
					})
				},
				navigateToWallet(){
					uni.navigateTo({
						url: '../my_wallet/my_wallet',
						// success: res => {},
						// fail: () => {},
						// complete: () => {}
					});
				},
			  shareJump(){
				uni.navigateTo({			
					url: '/pages/inviteGoodFriends/inviteGoodFriends'
				});
			},
		  presentationJump(){
						uni.navigateTo({			
							url: '/pages/presentation/presentation'
						});
					},
			addAlipayJump(){
						uni.navigateTo({			
							url: '/pages/addAlipay/addAlipay'
						});
					},
			applicationForPresentationJump(){
						uni.navigateTo({			
								url: '/pages/applicationForPresentation/applicationForPresentation'
							});
						},
			inputInvitationCodeJump(){
						uni.navigateTo({			
								url: '/pages/inputInvitationCode/inputInvitationCode'
							});
						},
			questionnaireInvestigationJump(){
						uni.navigateTo({			
								url: '/pages/questionnaireInvestigation/questionnaireInvestigation'
							});
						},
			downloadMakeMoneyJump(){
						uni.navigateTo({			
								url: '/pages/downloadMakeMoney/downloadMakeMoney'
							});
						},
			helpAndFeedbackJump(){
						uni.navigateTo({			
								url: '/pages/helpAndFeedback/helpAndFeedback'
							});
						},
			setUpJump(){
						uni.navigateTo({			
								url: '/pages/setUp/setUp'
							});
						},
			accountAndSecurityJump(){
						uni.navigateTo({			
								url: '/pages/accountAndSecurity/accountAndSecurity'
							});
						},
			realNameAuthenticationJump(){
						uni.navigateTo({			
								url: '/pages/realNameAuthentication/realNameAuthentication'
							});
						},
			starWelfareSocietyJump(){
						uni.navigateTo({			
								url: '/pages/starWelfareSociety/starWelfareSociety'
							});
						},
			fastEarningJump(){
					uni.navigateTo({			
							url: '/pages/fastEarning/fastEarning'
						});
					},
			missionDetailsJump(){
				uni.navigateTo({			
						url: '/pages/missionDetails/missionDetails'
					});
				},
				haveafunTwoJump(){
					uni.navigateTo({			
							url: '/pages/haveAfunTwo/haveAfunTwo'
						});
					},
	        }
	}
</script>

<style scoped>
	.content{
		width: 100%;
		/* padding: 0 30upx; */
	}
	
	.personal{
		width: 100%;
		background-color: #ff5040;
		padding: 0 30upx 95upx 30upx;
		display: flex;
	}
	
	.personal_pic{
		width: 118upx;
		height: 118upx;
		overflow: hidden;
		border-radius: 50%;
	}
	
	.personal_pic image{
		width: 100%;
		height: 100%;
	}
	
	.personal_datum{
		width: 570upx;
		height: 118upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 30upx;
	}
	
	.personal_ID{
		/* width: 100%; */
		color: #FFFFFF;
		font-size: 28upx;
	}
	
	.invite_code{
		color: #ffffff;
		font-size: 26upx;
	}
	
	/* wallet */
	
	.wallet{
		width: 690upx;
		height: 300upx;
		margin: 0 auto;
		padding: 0 15upx;
		background-color: #ffffff;
		border-radius: 10upx;
		position: relative;
		top: -55upx;
	}
	
	.wallet_num{
		width: 100%;
		display: flex;
		padding-top: 60upx;
		padding-bottom: 20upx;
		border-bottom: 2upx #E2E2E2 solid;
	}
	
	.wallet_all{
		width: 350upx;
		border-right: 2upx #DEDEE2 solid;
	}
	
	.wallet_today{
		width: 310upx;
		
	}
	
	.wallet_all text{
		display: block;
		width: 100%;
		text-align: center;
		color: #333333;
		font-size: 36upx;
		font-weight: 600;
		letter-spacing: 2upx;
	}
	
	.wallet_all span{
		display: block;
		width: 100%;
		text-align: center;
		color: #666666;
		font-size: 24upx;
	}
	
	.draw_money{
		width: 170upx;
		height: 60upx;
		line-height: 60upx;
		border-radius: 30upx;
		color: #ff5040;
		margin: 0 auto;
		text-align: center;
		font-size: 25upx;
		margin-top: 30upx;
		border: 2upx #ff5040 solid;
	}
	
	.wallet_today text{
		display: block;
		width: 100%;
		text-align: center;
		color: #333333;
		font-size: 36upx;
		font-weight: 600;
		letter-spacing: 2upx;
	}
	
	.wallet_today span{
		display: block;
		width: 100%;
		text-align: center;
		color: #666666;
		font-size: 24upx;
	}
	
	.wallet_dynamic{
		height: 50upx;
		line-height: 50upx;
		font-size: 22upx;
	}
	
	.wallet_dynamic text{
		color: #ff5040;
	}
	
	.subfieled{
		width:690upx;
		margin: 0 auto;
		display: flex;
		background-color: #ffffff;
		border-radius: 10upx;
		padding-top: 30upx;
		padding-bottom: 10upx;
	}
	
	.subfieled_list{
		width: 25%;
	}
	
	.subfieled_list image{
		display: block;
		width: 88upx;
		height: 88upx;
		margin: 0 auto;
	}
	
	.subfieled_list text{
		display: block;
		font-size: 24upx;
		height: 60upx;
		line-height: 60upx;
		width: 100%;
		text-align: center;
	}
	
	/* banner */
	
	.banner{
		width: 690upx;
		height: 110upx;
		margin: 0 auto;
		margin-top: 30upx;
	}
	
	.banner image{
		width: 100%;
		height: 100%;
	}
	
	
	/* course */
	
	.course{
		width: 690upx;
		margin: 0 auto;
		background-color: #ffffff;
		border-radius: 10upx;
		margin-top: 30upx;
		padding: 25upx 20upx 30upx 20upx;
	}
	
	.course_title{
		width: 100%;
		font-size: 33upx;
	}
	
	.course_list{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-top: 20upx;
	}
	
	.course_task{
		width: 144upx;
		height: 164upx;
		background-image: url(../../static/mine/course_task.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50% 50%;
		padding-top: 80upx;
	}
	
	.course_money{
		width: 100%;
		text-align: center;
		color: #F03C25;
		font-size: 29upx;
		/* margin-top: 40upx; */
		display: none;
		
	}
	
	.course_task text{
		display: block;
		color: #E5E5E3;
		text-align: center;
		width: 100%;
		font-size: 23upx;
	}
	
	.course_task span{
		display: block;
		color: #E5E5E3;
		text-align: center;
		width: 100%;
		font-size: 23upx;
	}
	
	.course_list .active{
		height: 178upx;
		background-image: url(../../static/mine/course_task_end.png);
		padding-top: 33upx;
	}
	
	.active .course_money{
		display: block;
	}
	
	.active text{
		display: none;
	}
	
	.active span{
		display: none;
	}
	
	/* apply */
	
	.apply{
		width: 690upx;
		margin: 0 auto;
		background-color: #ffffff;
		border: 10upx;
		margin-top: 30upx;
		/* margin-bottom: 100upx; */
		padding: 20upx 0;
	}
	
	.apply_title{
		width: 100%;
		padding-left: 20upx;
		font-size: 33upx;
		height: 46upx;
		line-height: 46upx;
	}
	
	.apply_list{
		max-width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	
	.apply_sub{
		width: 25%;
		padding: 24upx;
	}
	
	.apply_sub image{
		display: block;
		width: 60upx;
		height: 60upx;
		margin: 0 auto;
	}
	
	.apply_sub text{
		display: block;
		width: 100%;
		font-size: 23upx;
		color: #666666;
		text-align: center;
	}
</style>
