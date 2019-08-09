<template>
	<view>
		<view class="bg-red-envelope">
			<view class="red-envelope">
				<image class="gold-coin-image" src="../../static/64-金币.png" mode=""></image>
			</view>
		</view>
		
		<view class="predict">
			加入后预计每周可赚<text class="gain">50元</text>
		</view>
		
		<view class="wechat-login" @click="login()">
			<image class="wechat-icon" src="../../static/微信.png" mode=""></image>
			<text class="wechat-text">微信一键登录</text>
		</view>
		<view class="agreement-statement">
			<label>
				<checkbox class="checkbox" color="red"/>
			</label>
			已阅读并同意玩赚星球
			<text class="user-protocol">
				用户协议及隐私保护声明
			</text>
		</view>
		
		<view class="other-ways-login">
			<view class="other-ways">
				其他方式登录
			</view>
			<view class="mobile-phone-login" @click="mobileLoginJump()">
				<image class="phone-image" src="../../static/组20.png" mode=""></image>
				<view class="phone-login">手机登录</view>
				
			</view>
		</view>
	
	</view>
</template>

<script>
	import md5 from 'js-md5';
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			login(){
				let accesstoken = md5(this.OneBase);
				let user_token = uni.getStorageSync('user_token');
				//let user_token ='';
				let url = this.Url;
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
					console.log(loginRes.authResult);
					console.log('用户openid：'+loginRes.authResult.openid);
					
					let str='openid='+loginRes.authResult.openid;
					
					let data_sign = md5(str+'l2V|gfZp{8`;jzR~6Y1_');
					console.log('user_token:'+user_token); 
					console.log('data_sign:'+data_sign);
					uni.request({
						url: url+'/api.php/common/wxLogin', 
						data: {
							access_token: accesstoken,
							data_sign:data_sign,
							openid:loginRes.authResult.openid,
							user_token:user_token
						},
						method: 'POST',
						header: {
							'content-type': 'application/json;charset=UTF-8' 
						},
						success: (res) => {
						 console.log(res.data);
							uni.setStorageSync('user_token',res.data.data.user_token);
							 uni.setStorageSync('user_id',res.data.data.user_id);
							let user_id = res.data.data.user_id;
							if(res.data.data.phone=== null){
								uni.navigateTo({			
									url: '/pages/loginInTwo/loginInTwo'
								});
								
							}else{
								
								  let mem = {
											 userid:user_id,
											};
									let $obj = {}
									$obj.cont = mem ;
									$obj.str = 'mem'
									this.$store.dispatch('changeFun',$obj);
									
									this.$store.state.userid = mem.userid;
									this.$forceUpdate()
									console.log(this.$store.state.userid)
								uni.switchTab({
								
									url: '/pages/index/index'
								});
							}
						 
						}
					});
				  }
				});
			},
			mobileLoginJump(){
				uni.navigateTo({			
					url: '/pages/loginInTwo/loginInTwo'
				});
			}
		},
		onLoad:function(){
			//debugger
			  
		}
	}
</script>

<style lang="scss" scoped>
	page{
		@extend page;
		background-color: #FFFFFF;
	}
	.agreement-statement uni-label .uni-checkbox .uni-checkbox-wrapper .uni-checkbox-input{
		width: 36upx;
		height: 36upx;
		border: 2upx solid #FE776B;
	}
	.bg-red-envelope{
		width: 750upx;
		height: 350upx;
		position: relative;
		overflow: hidden;
	}
	.red-envelope{
		width: 900upx;
		height: 300upx;
		background: #FF5040;
		border-radius:50% 50%;
		position: absolute;
		top: -25%;
		left: -10%;
	}
	.gold-coin-image{
		width: 150upx;
		height: 150upx;
		position: absolute;
		left: 40%;
		bottom:-27%;
	}
	
	.predict{
		text-align: center;
		font-size: 40upx;
		color: #3F120E;
		font-family:PingFang-SC-Heavy;
		font-weight:800;
	}
	.gain{
		color: #FF5040;
	}
	
	.wechat-login{
		width: 690upx;
		margin: 170upx auto 0;
		height: 90upx;
		background: #FD6051;
		border-radius:45px;	
		text-align: center;
		line-height: 90upx;
		color: #FFFEFE;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
	}
	.wechat-icon{
		width: 50upx;
		height: 40upx;
		vertical-align: middle;
		margin-right: 16upx;
	}
	
	
	
	
	.agreement-statement{
		width: 750upx;
		margin-top: 27upx;
		font-size: 26upx;
		text-align: center;
	}
	
	.user-protocol{
		color: #FE776B;
	}
	
	
	.other-ways-login{
		width: 690upx;
		height: 200upx;
		margin: 240upx auto 0;
		position: relative;
		border-top: 1px solid #bebebe;
	}
	.other-ways{
		width: 250upx;
		height: 30upx;
		font-size: 30upx;
		line-height: 30upx;
		text-align: center;
		color: #999999;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		position: absolute;
		top: -15upx;
		left: 200upx;
		background: #FFFFFF;
	}
	.mobile-phone-login{
		text-align: center;
		position: absolute;
		top: 60upx;
		left: 260upx;
	}
	.phone-image{
		width: 84upx;
		height: 84upx;
	}
	.phone-login{
		margin-top: 16upx;
		font-size:30upx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color: #666;	
	}
</style>
