<template>
	<view class="identifying-code">
		<view class="account-security">为了账户安全</view>
		<view class="verify-mobile-number">请验证手机号</view>
		<form @submit="formSubmit">
		<view class="cell-phone-number">
			<input class="phone-number" type="text" v-model="inputnameValue" name ='inputnameValue' placeholder="请输入11位手机号码" maxlength="11" placeholder-style="font-size:24upx"/>
		</view>
		
		<view class="input-verification-code">
			<input class="verification-code" type="text" placeholder="请输入验证码" v-model="inputcodeValue" name ='inputcodeValue' maxlength="6" placeholder-style="font-size:24upx" @blur="inputcode"/>
			<text  class="obtain" @click="authenticationCode()" >{{text}}</text>
			
		</view>
		
		<button  class="sign-in-now" formType="submit"  :class="{active:active ==1}">
			立即登录
		</button>
		</form>
		<view class="agreement-statement">
			<image class="tick-image" src="../../static/redright.png" mode="mode" ></image>
			已阅读并同意玩赚星球
			<text class="user-protocol">
				用户协议及隐私保护声明
			</text>
		</view>	
	</view>
</template>

<script>
	import md5 from 'js-md5';
	export default {
			
		data() {
			return {
				inputnameValue:'',
				text:'获取验证码',
				count: 10,
				intervalId:'',
				inputcodeValue:'',
				active:''
			};
		},
		methods:{
			//获取验证码
			authenticationCode(){
				let count = 10;
               if(this.count===10){
				 let ponpe = this.inputnameValue;
				  if((/^1(3|4|5|6|7|8|9)\d{9}$/.test(ponpe))){	
				  	let intervalId = setInterval(() => {								
				  						count-- ;	
										this.count = count;							
				  						this.text= count+'s'		
				  					},1000);
				  	setTimeout(() => {
				  			  clearInterval(intervalId);
				  			  this.text= '获取验证码';
				  			  this.count = 10;
				  			  console.log(this.count);
				  	},10000);
					 var accesstoken = md5(this.OneBase);
						uni.request({
							url: this.Url+'/api.php/common/sendCode', 
							data: {
								access_token: accesstoken,
								phone:ponpe
							},
							method: 'POST',
							header: {
								'content-type': 'application/json;charset=UTF-8' 
							},
							success: (res) => {
							 uni.setStorageSync('code_id', res.data.data);
							}
						});
					
				  }else{
					    alert("手机号码有误");  
				  }				
			   }
			},
			inputcode(res){
			 if(res.detail.value.length==6&& this.inputnameValue.length>7){
				 this.active = 1;
			 };
				
			},
			formSubmit(res){
				//debugger
				let user_token = uni.getStorageSync('user_token');
				//let user_token ='';
				 console.log('res.datauser_token:'+user_token);
				const code_id = uni.getStorageSync('code_id');
				let phone = res.detail.value.inputnameValue;
				let code = res.detail.value.inputcodeValue;
				 let accesstoken = md5(this.OneBase);
				 let str='code='+code+'&code_id='+code_id+'&phone='+phone;
				 let data_sign = md5(str+'l2V|gfZp{8`;jzR~6Y1_');
			uni.request({
				url: this.Url+'/api.php/common/login', 
				data: {
					access_token: accesstoken,
					phone:phone,
					data_sign:data_sign,
					code:code,
					code_id:code_id,
					user_token:user_token
				},
				method: 'POST',
				header: {
					'content-type': 'application/json;charset=UTF-8' 
				},
				success: (res) => {
				//	debugger
					uni.setStorageSync('code_name', res.data.data.name);
					uni.setStorageSync('user_id', res.data.data.user_id);
					uni.setStorageSync('user_token', res.data.data.user_token);
					let user_id = +res.data.data.user_id+'';
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
			});
		},	
		}
	}
</script>

<style lang="scss" scoped>
		.identifying-code{
			width: 616upx;
			padding: 100upx 67upx 0; 
		}
		.account-security{
			font-size: 36upx;
			color: #333333;
			font-family:PingFang-SC-Bold;
			font-weight:bold;
		}
		.verify-mobile-number{
			font-size: 24upx;
			margin-top: 36upx;
			color: #666666;
		}
			
		.cell-phone-number{
			width: 616upx;
			height: 84upx;
			margin-top: 30upx;
			padding-top: 30upx;
			font-size: 24upx;
			border-bottom: 1upx solid #efefef;
		}	
		
		
		.input-verification-code{
			width: 616upx;
			margin-top: 10upx;
			padding-bottom: 37upx;
			border-bottom: 1upx solid #efefef;
		}
		.verification-code{
			display:inline-block;
			width: 496upx;
			height: 24upx;
			font-size: 24upx;
			margin-top: 37upx;
			vertical-align: bottom;
		}
		.obtain{
			font-size: 24upx;
			color: #FF5040;
		}
		.sign-in-now{
			width: 616upx;
			height: 74upx;
			line-height: 74upx;
			background: #d8d8d8;
			color: #999;
			font-size: 36upx;
			font-family:PingFang-SC-Bold;
			font-weight:bold;
			text-align: center;
			border-radius: 37upx;
			margin-top: 62upx;
		}
		
		.agreement-statement{
			width: 616upx;
			margin-top: 30upx;
			font-size: 26upx;
		}
		.tick-image{
			width: 36upx;
			height: 36upx;
			vertical-align:top;
			margin-right: 9upx;
		}
		.user-protocol{
			color: #FE776B;
		}
		.active{
			    background: #FF5040;
				color:#fff;
		}
</style>
