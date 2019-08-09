<template>
	<view class="content">
		<view class="banner">
			<image src="../../static/money_banner.jpg" mode=""></image>
		</view>
		
		<view class="money_task">
			<view class="sign_in">
				<view class="sign_in_day active">
					<image src="../../static/rex_pack.png" mode=""></image>
					<text>388</text>
					<span>金币</span>
					<view class="days_num">
						第一天
					</view>
				</view>
				<view class="sign_in_day">
					<image src="../../static/rex_pack.png" mode=""></image>
					<text>388</text>
					<span>金币</span>
					<view class="days_num">
						第一天
					</view>
				</view>
				<view class="sign_in_day">
					<image src="../../static/rex_pack.png" mode=""></image>
					<text>388</text>
					<span>金币</span>
					<view class="days_num">
						第一天
					</view>
				</view>
				<view class="sign_in_day">
					<image src="../../static/rex_pack.png" mode=""></image>
					<text>388</text>
					<span>金币</span>
					<view class="days_num">
						第一天
					</view>
				</view>
				<view class="sign_in_day">
					<image src="../../static/rex_pack.png" mode=""></image>
					<text>388</text>
					<span>金币</span>
					<view class="days_num">
						第一天
					</view>
				</view>
				<view class="sign_in_day">
					<image src="../../static/rex_pack.png" mode=""></image>
					<text>388</text>
					<span>金币</span>
					<view class="days_num">
						第一天
					</view>
				</view>
				<view class="sign_in_day">
					<image src="../../static/rex_pack.png" mode=""></image>
					<text>388</text>
					<span>金币</span>
					<view class="days_num">
						第一天
					</view>
				</view>
			</view>
			<view class="task_con">
				<view class="task_rate">
					<view class="rate_mark">
						<text>1</text>
						<span class="mark_line01"></span>
						<text>2</text>
						<span class="mark_line02"></span>
						<text>3</text>
					</view>
				</view>
				<view class="task_detail">
					<view class="task_mes">
						<view class="rate_content">
							<view class="task_title">
								获得1次头条阅读
							</view>
							<view class="money_icon">
								<image src="../../static/money_task.png" mode=""></image>
								<text>30</text>
							</view>
						</view>
						<view class="task_skip">
							去阅读
						</view>
					</view>
					
					<view class="task_mes">
							<view class="rate_content">
								<view class="task_title">
									获得1次头条阅读
								</view>
								<view class="money_icon">
									<image src="../../static/money_task.png" mode=""></image>
									<text>30</text>
								</view>
							</view>
							<view class="task_skip">
								去阅读
							</view>
						
					</view>	
					
					<view class="task_end">
						<image src="../../static/gift.png" mode=""></image>
						完成以上所有任务再领：388金币
					</view>
				</view>
				
				
				
			</view>
		</view>
		
		<view class="task_img">
			<image src="../../static/recommend_img.jpg" mode=""></image>
			<image src="../../static/recommend_img.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	page{
		background-color: #E00025;
	}
	.banner{
		width: 100%;
		height: 230upx;
	}
	
	.banner image{
		width: 100%;
		height: 100%;
	}
	
	.money_task{
		width: 690upx;
		background-color: #ffffff;
		margin: 0 auto;
		position: relative;
		top: -10px;
		border-radius: 5px;
	}
	
	.sign_in{
		width: 100%;
		height: 240upx;
		background-color: #fbf1cc;
		border-radius: 5px;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		padding: 0 5px;
	}
	
	.sign_in_day{
		width: 86upx;
		height: 144upx;
		position: relative;
		bottom: 40upx;
	}
	
	.sign_in_day image{
		width: 100%;
		height: 104upx;
	}
	
	.sign_in_day text{
		display: block;
		width: 100%;
		color: #FFF70F;
		position: absolute;
		bottom: 70upx;
		text-align: center;
		font-size: 18upx;
		height: 24upx;
		line-height: 24upx;
	}
	
	.sign_in_day span{
		display: block;
		width: 100%;
		color: #FFF70F;
		position: absolute;
		bottom: 50upx;
		text-align: center;
		font-size: 14upx;
		height: 20upx;
		line-height: 20upx;
	}
	
	.sign_in .active{
		width: 124upx;
		height: 194upx;
	}
	
	.sign_in .active image{
		height: 155upx;
	}
	
	
	.sign_in .active text{
		bottom: 90upx;
		font-size: 28upx;
	}
	
	.sign_in .active span{
		font-size: 24upx;
		height: 30upx;
		line-height: 30upx;
		bottom: 54upx;
	}
	
	.days_num{
		color: #C29661;
		width: 100%;
		height: 36upx;
		line-height: 36upx;
		text-align: center;
		font-size: 26upx;
		
	}
	
	.sign_in .active .days_num{
		color: #FF6250;
	}
	
	.task_con{
		width: 100%;
		padding: 0 40upx;
		display: flex;
	}
	
	.task_rate{
		width: 56upx;
		height: 440upx;
		padding-top: 36upx;
	}
	
	.rate_mark{
		height: 360upx;
		display: flex;
		flex-direction: column;
	}
	
	.task_rate .rate_mark text{
		width: 40upx;
		height: 40upx;
		line-height: 40upx;
		background-color: #FF5040;
		border-radius: 50%;
		text-align: center;
		color: #ffffff;
		margin: 0 auto;
	}
	
	.task_rate .rate_mark span{
		background-color: #FDD2D5;
		width: 8upx;
		margin: 0 auto;
	}
	
	.task_rate .rate_mark .mark_line01{
		height: 120upx;
	}
	
	.task_rate .rate_mark .mark_line02{
		height: 120upx;
	}
	
	.task_detail{
		width: 554upx;
		/* padding-top: 36upx; */
	}
	
	.task_mes{
		width: 100%;
		border-bottom: 1px #F6F5F5 solid;
		padding-top: 36upx;
		display: flex;
	}
	
	.rate_content{
		width: 370upx;
		padding-bottom: 20upx;
	}
	
	.task_title{
		width: 100%;
		font-size: 30upx;
		padding-left: 6upx;
	}
	
	.money_icon{
		width: 100upx;
		height: 40upx;
		margin-top: 20upx;
		padding-left: 6upx;
		position: relative;
	}
	
	.rate_content .money_icon image{
		width: 100%;
		height: 100%;
	}
	
	.rate_content .money_icon text{
		position: absolute;
		height: 28upx;
		line-height: 28upx;
		top: 6upx;
		right: 20upx;
		color: #FF362B;
		font-size: 22upx;
	}
	
	.task_skip{
		width: 184upx;
		height: 60upx;
		line-height: 60upx;
		background-color: #FF5F5F;
		border-radius: 30upx;
		text-align: center;
		color: #ffffff;
		margin-top: 35upx;
		font-size: 30upx;
	}
	
	.task_end{
		width: 100%;
		height: 110upx;
		/* line-height: 110upx; */
		background-color: #FFF0EE;
		border: 1px #FF9595 solid;
		padding-left: 10upx;
		display: flex;
		align-items: center;
		border-radius: 10upx;
		font-size: 30upx;
	}
	
	.task_detail .task_end image{
		width: 50upx;
		height: 44upx;
		
	}
	
	.task_img{
		width: 100%;
		padding: 0 30upx;
		display: flex;
		justify-content: space-between;
		margin-bottom: 40rpx;
	}
	.content .task_img image{
		width: 335upx;
		height: 272upx;
		border-radius: 10upx;
	}
</style>
