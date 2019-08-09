<template>
	<view>
		<view class="pages"></view>
		<view class="beCarefulbox">
			<image :src="beCareful" mode="mode" class="beCareful"></image><text>信息仅用于实名认证，优赚宝将严格保障您的信息安全</text>
		</view>
		<form @submit="formSubmit" @reset="formReset">
			<view class="inputbox">
				<text>姓名</text>
				<input type="text" v-model="inputnameValue" name="inputnameValue"  placeholder="请输入身份证姓名" class="input" placeholder-style="color:#D4D4D4;" @confirm="confirmname"/>
			</view>
			<view class="inputbox" >
				<text>账号</text>
				<input type="idcard" v-model="inputidcardValue" name="inputidcardValue" placeholder="请输入身份证号码" class="input" placeholder-style="color:#D4D4D4;"  @confirm="confirm" />
			</view>
			<button formType="submit" class="submit" :class="{active:value ===1}">下一步</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode:'aspectFit',
				beCareful:'/static/beCareful.png',
				value:0,
				inputidcardValue:'',
				inputnameValue:''
			};
		},
		methods:{	
			confirmname:function(e){
				this.inputnameValue =e.target.value;
				if(this.inputidcardValue !=''){
					this.value = 1;
				}
			},
			confirm:function(e){
				//debugger
				this.inputidcardValue =e.target.value;
				if(this.inputnameValue !=''){
					this.value = 1;
				}
			},
			formSubmit:function(e){
				if(this.value > 0){
					uni.navigateTo({			
							url: '/pages/realNameAuthenticationTwo/realNameAuthenticationTwo'
						});
				}
			}
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
			background:#DDDDDD;
			border-radius:43rpx;
			margin: 70rpx auto auto;
			font-size:32rpx;
			font-family:PingFang-SC-Bold;
			font-weight:bold;
			color:#8A8A8A;
		}
		.active{
			background:#FF5040;
			color:#FFFFFF;
		}
</style>
