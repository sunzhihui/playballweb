<template style="background-color: #F7F7F7;">
	<view >
		<view class="pages"></view>
		<view class="body">
			<form @submit="formSubmit" @reset="formReset">
				<view class="inputbox">
					<text>姓名</text>
					<input type="text" value="" name="slider"  placeholder="支付宝预留真实姓名" class="input" placeholder-style="color:#D4D4D4;" @confirm="confirm"/>
					
				</view>
				<view class="inputbox" >
					<text>账号</text>
					<input type="number" value="" name="input" placeholder="未填写" class="input" placeholder-style="color:#D4D4D4;"  @confirm="confirm"/>
				</view>
				<button formType="submit" class="submit" :class="{active:value !=''}">确认</button>
			</form>			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:''
			};
			
		},
		methods:{
			 formSubmit: function(e) {				
				      this.chosen = e.target.value;
					 uni.showModal({
						title: '',
						content: '请仔细核对姓名及账号',
						confirmText:'绑定',
						success: function (res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
            console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
        },
		confirm:function(e){
			this.value =e.target.value;
		},
		}
	}
</script>

<style lang="scss" scoped>


	.pages{
		@extend .pages;
		border-top: 2rpx solod #EBEBEB;
		margin-bottom: 52rpx;
	}
	.inputbox{
		@extend .flex;
		width:100%;
		height:100rpx;
		background:#fff;
		margin-bottom: 2rpx;
		padding-left:30rpx;
		font-size:32rpx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:#666666;
	}
	.font-cont{
		color:#D4D4D4;	
	}
	.input{
		margin-left: 30rpx;
		//color:#D4D4D4;
	}
	.submit{
		width:690rpx;
		height:86rpx;
		background:#DDDDDD;
		border-radius:43rpx;
		font-size:32rpx;
		color:#8A8A8A;
		margin-top: 70rpx;
	}
	.active{
		background:#FF5D4E;
		color:#fff;
	}
</style>
