<template>
	<view class="content">
		<view>
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500" indicator-color="rgba(255,255,255,.3)" indicator-active-color="#ffffff">
							<swiper-item v-for="(item,index) in advArray" :key="item.id">
								<image :src="item.advimg" :mode="mode" width="100%"></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 余额提示 -->
		<view class="balance">
			<view class="balance_lf">
				<view class="balance_title">
					可提余额（元）
				</view>
				<view class="balance_num">
					{{score}}
				</view>
			</view>
			
			<view class="balance_rt">
				<view class="balance_look">
					查看明细
				</view>
				<view class="balance_login">
					立即登录体现
				</view>
			</view>
		</view>
		<!-- 小模块分栏 -->
		
		<view class="subfieled">
			<view class="subfield_plate">
				<img src="static/subfield_01.png" alt="">
				<text>刷小视频赚</text>
				
			</view>
			
			<view class="subfield_plate">
				<img src="static/subfield_02.png" alt="">
				<text>看新闻赚钱</text>
			</view>
			
			<view class="subfield_plate">
				<img src="static/subfield_03.png" alt="">
				<text>玩游戏赚钱</text>
			</view>
			
			<view class="subfield_plate">
				<img src="static/subfield_04.png" alt="">
				<text>看短视频赚</text>
			</view>
			
			<!-- <view class="subfield_plate" @click="subfieldPlate()">
				<img src="static/subfield_05.png" alt="">
				<text>快速赚</text>
			</view> -->
			
			<view class="subfield_plate">
				<img src="static/subfield_06.png" alt="">
				<text>领水果</text>
			</view>
			
			<view class="subfield_plate">
				<img src="static/subfield_07.png" alt="">
				<text>领金币</text>
			</view>
			
			<view class="subfield_plate">
				<img src="static/subfield_08.png" alt="">
				<text>9.9包邮</text>
			</view>
		</view>
		
		<!-- 推荐板块 -->
		<view class="recommend">
			<view class="recommend_title">
				<view class="line_red">
					
				</view>
				<view class="title_detail">
					今日为您推荐
				</view>
				<view class="recommend_task">
					完成三个任务得今日奖励
				</view>
				<view class="recommend_more">
					更多
					<image src="../../static/arr_rt.png" mode=""></image>
				</view>
			</view>
			
			<view class="recommed_detail" v-for="(item,index) in todayTop" :key="item.id">
				<view class="recommend_img">
					<image :src="item.listpic" mode="mode"></image>
				</view>
				<view class="recommend_mes">
					<view class="task_title">
						{{item.describe}}
					</view>
					<view class="task_detail">
						<view class="task_goal">
							{{item.name}}
						</view>
						<view class="recommend_install">
							安装{{item.grade}}
						</view>
					</view>
				</view>
			</view>
			
			<view class="recommed_detail">
				<view class="recommend_img">
					<image src="../../static/recommend_img.jpg" mode="mode"></image>
				</view>
				<view class="recommend_mes">
					<view class="task_title">
						上博科，高颜值交友！
					</view>
					<view class="task_detail">
						<view class="task_goal">
							安装博科直播
						</view>
						<view class="recommend_install">
							安装+100
						</view>
					</view>
				</view>
			</view>
			
			
			<view class="install_once">
				<view class="install_btn">
					立即意见安装+0.8元
				</view>
			</view>
		</view>
		
		<!-- 高额奖励 -->
		<view class="recommend award_height">
			<view class="recommend_title">
				<view class="line_red">
					
				</view>
				<view class="title_detail">
					高额奖励推荐
				</view>
				<view class="recommend_more">
					更多
					<image src="../../static/arr_rt.png" mode="mode"></image>
				</view>
			</view>
			<view class="recommed_detail" v-for="(item,index) in moreMoney" :key="item.id">
				<view class="recommend_img">
					<image src="../../static/recommend_img.jpg" mode="mode"></image>
				</view>
				<view class="recommend_mes">
					<view class="task_title">
						{{item.describe}}
					</view>
					<view class="task_detail">
						<view class="task_goal">
							 {{item.name}}
						</view>
						<view class="recommend_install">
						  {{item.appbtn}}
						</view>
					</view>
				</view>
			</view>
			
		<view v-show="userid<=0" class="Popupbox">
	
			<view class="registeredRedEnvelopebox">					
				<view class="clsebuttom" >
					<image src="/static/clse.png" mode="mode" @click="ClseSS()"></image>
				</view>
				<view class="registeredRedEnvelope"  @click="loginInJump()">
					<text class="registerText1">恭喜您获得一个新人红包！</text>
					<text class="registerText2">仅限新注册用户领取</text>
					<text class="registerText3">领取得18元</text>
				</view>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	import md5 from 'js-md5';
	export default {
		data() {
			return {
				 mode:'aspectFit',
				advArray:[],
				score:'',
				todayTop:[],
				userid:'',
				moreMoney:[]
            // indicatorDots: true,
            // autoplay: true,
            // interval: 2000,
            // duration: 500
			}
		},
	computed:{
		 Userid:function () {
		 	return this.$store.state.userid;
		 	}			
	},
		onLoad (option) {
			//debugger 
			
			//debugger
			 // this.memberData = this.$store.state.userid;
			 //  console.log( 'sss'+this.memberData+'ddddd');	  
			 var that = this;
			 let user_id = uni.getStorageSync('user_id')
			 var password = 'OneBase'+'l2V|gfZp{8`;jzR~6Y1_';
			var accesstoken = md5(password);
			uni.request({
				url: this.Url+'/api.php/Homepage/home', 
				data: {
					access_token: accesstoken,
					userid:user_id
				},
				header: {
					'content-type': 'application/json;charset=UTF-8' 
				},
				success: (res) => {
					//debugger
					let adv = [];
					let list =res.data.data.adv;
					let today_top = [];
					let  listS =res.data.data.today_top.data;
					let moreMoney = [];
					let  listMoney =res.data.data.moreMoney.data;
					 for (var i = 0; i < list.length; i++) {
					    adv[i] = {
					      id: list[i].id,
					      advimg:this.Url+list[i].img ,
					    };
					};	
					 for (var i = 0; i < listS.length; i++) {
					    today_top[i] = {
					      id: listS[i].id,
					      listpic:this.Url+listS[i].listpic ,
						  describe:listS[i].describe,
						   name:listS[i].name,
						   grade:'+'+listS[i].grade,
					    };
					};
					for (var i = 0; i < listMoney.length; i++) {
					    moreMoney[i] = {
					      id: listMoney[i].id,
					      listpic:this.Url+listMoney[i].listpic ,
						  describe:listMoney[i].describe,
						   name:listMoney[i].name,
						   appbtn:listMoney[i].appbtn,
					    };
					};
					
					that.advArray = adv;
					that.todayTop = today_top;
					that.moreMoney = moreMoney;
					that.score = res.data.data.score;	
					that.userid = user_id+'';
				    that.$store.state.userid= that.userid ;
				}
			});
			
		},
		methods: {
				ClseSS(){
					debugger
					// let that = this;
					// let obj = {
					// userid:22
					// }
					// that.$userid.setMemberObj(obj);
				//	console.log(that.$userid.setMemberObj(obj))
					// userid:function(){
					// 	   debugger
					// 	  return this.$store.state.userid;
					//    },
					let mem = {
						userid:'22',
					}
					
					 //  changeMember:function(){
						// 	
						// },      
				},
				subfieldPlate(){
					uni.navigateTo({			
						url: '/pages/fastEarning/fastEarning'
					});
				},
				loginInJump(){
					uni.navigateTo({			
						url: '/pages/logIn/logIn'
					});
				}
				
			// changeIndicatorDots(e) {
			// 	this.indicatorDots = !this.indicatorDots
			// },
			// changeAutoplay(e) {
			// 	this.autoplay = !this.autoplay
			// },
			// intervalChange(e) {
			// 	this.interval = e.target.value
			// },
			// durationChange(e) {
			// 	this.duration = e.target.value
			// }
		},
		// computed:{
		//    memberData:function(){
		// 	   
		// 	  return this.$store.state.userid;
		//    },
		// },
		
	}
</script>

<style lang="scss" scoped>
	
	.balance{
		width: 100%;
		height: 160upx;
		background-color: #fff;
	}
	
	.balance_lf,.balance_rt{
		float: left;
		width: 50%;
		height: 80upxpx;
		box-sizing: border-box;
		padding-top: 20upx;
	}
	
	.balance_lf{
		text-align:left;
		
	}
	
	.balance_rt{
		text-align: right;
		padding-right: 30upx;
	}
	
	.balance_title {
		font-size: 28upx;
		color: #333333;
		font-weight: 600;
		padding-left: 36upx;
	}
	
	.balance_num{
		font-size: 64upx;
		color: #FF5040;
		line-height: 64upx;
		margin-top: 20upx;
		padding-left: 30upx;
	}
	
	.balance_look{
		color: #666666;
		font-size: 25upx;
	}
	
	.swiper{
		width:100%;
		height: 210rpx;
	}
	.swiper image{
		width: 100%;
		height: 100%;
	}
	
	.balance_login{
		width: 200upx;
		height: 50upx;
		line-height: 50upx;
		border: 1px #FF6254 solid;
		border-radius: 24upx;
		font-size: 24upx;
		text-align: center;
		color: #FF6254;
		float: right;
		margin-top: 40upx;
	}
	
	.subfieled{
		height: 310upx;
		width: 100%;
		background-color: #FFFFFF;
		margin-top: 20upx;
	}
	
	.subfield_plate{
		float: left;
		width: 25%;
		text-align: center;
		margin-top: 20upx;
	}
	
	.subfield_plate img{
		width: 86upx;
		height: 86upx;
		
	}
	
	.subfield_plate text{
		width: 100%;
		font-size: 24upx;
		display:block;
		color: #333333;
	}
	
	/* recommend */
	
	.recommend{
		width: 100%;
		background-color: #fff;
		margin-top: 20upx;
		padding: 0 30upx;
	}
	
		
	.recommend_title{
		width: 100%;
		height: 66upx;
		padding-top: 30upx;
	}
	
	.line_red{
		width: 8upx;
		height: 28upx;
		background-color: #FF0000;
		border-radius: 4upx;
		float: left;
	}
	
	.title_detail{
		float: left;
		font-size: 32upx;
		height: 32upx;
		line-height: 28upx;
		margin-left: 8upx;
		font-weight: 600;
	}
	
	.recommend_task{
		float: left;
		width: 330upx;
		height: 36upx;
		line-height: 36upx;
		background-color: #F4F4F4;
		border-radius: 18upx;
		font-size: 20upx;
		text-align: center;
		color: #FF5040;
		margin-left: 10upx;
	}
	
	.recommend_more{
		float: right;
		font-size: 24upx;
		color: #666666;
	}
	
	.recommend_more image{
		width: 12upx;
		height: 20upx;
	}
	
	.recommed_detail{
		width: 100%;
		height: 180upx;
		border-bottom: 1px solid #EBEBEB;
		padding: 20upx 0;
		display: flex;
		
	}
	
	.recommend_img{
		width: 196upx;
		height: 137upx;
		overflow: hidden;
		border-radius: 10upx;
	}
	
	.recommend_img image{
		width: 100%;
		height: 100%;
	}
	
	.recommend_mes{
		width: 494upx;
		height: 137upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.task_title{
		width: 100%;
		height: 45upx;
		line-height: 45upx;
		font-size: 25upx;
		font-weight: 600;
		padding-left: 20upx;
	}
	
	.task_detail{
		width: 100%;
		display: flex;
	}
	
	.task_goal{
		width: 338upx;
		height: 56upx;
		line-height: 56upx;
		font-size: 23upx;
		color: #666666;
		padding-left: 20upx;
	}
	
	.recommend_install{
		width: 156upx;
		height: 56upx;
		line-height: 56upx;
		border-radius: 28upx;
		border: 2upx #FF5040 solid;
		text-align: center;
		font-size: 25upx;
		color: #ff5040;
		
	}
	
	.install_once{
		height: 156upx;
		width: 100%;
		padding-top: 40upx;
	}
	
	.install_btn{
		width: 390upx;
		height: 80upx;
		background-color: #FF503F;
		color: #ffffff;
		margin: 0 auto;
		border-radius: 40upx;
		text-align: center;
		line-height: 80upx;
		font-size: 28upx;
	}
		
	.award_height{
		margin-bottom: 100upx;
	}	
		
	uni-view{
		line-height: 1.5;
	}
	.Popupbox{
	  width:100%;   
	  top:0;
	  bottom:0;   
	  background:rgba(68,68, 68, 0.6);
	  z-index: 1;   
	  position: fixed; 
	  display: flex;
	}
	.registeredRedEnvelopebox{
		width: 532upx;
		height: 660upx;
		position: fixed;
		top:30%;
		left: 93rpx;
		z-index: 2;
	}
	.registeredRedEnvelope{
		width: 532upx;
		height: 622upx;
		background-image: url('/static/registeredRedEnvelope.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		@extend .flex;
		flex-direction: column;
	//align-items: center;
	justify-content: center;
		
	}
	.registeredRedEnvelope .registerText1{
		font-size:30rpx;
		font-weight:bold;
		color:#FEFDFD;
		line-height:17rpx;
		margin-top: -20rpx;
		margin-left: 60rpx;
	}
	.registeredRedEnvelope .registerText2{
		font-size:24rpx;
		font-weight:500;
		color:#DBA0A0;
		margin: 14rpx 0 30rpx 30rpx;
	}
	.registeredRedEnvelope .registerText3{
		font-size:48rpx;
		font-weight:800;
		color:#fff;
		margin-left: 30rpx;
	}
	.clsebuttom{
		width: 57rpx;
		height: 57rpx;	
		position: absolute;
		right: 30rpx;
		top:-57rpx;
	}
	.clsebuttom image{
		width: 100%;
		height: 100%;
	}
</style>
