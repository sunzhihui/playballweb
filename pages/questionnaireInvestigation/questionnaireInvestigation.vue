<template>
	<view>
		<view class="pages"></view>
		<view class="text">完善信息更好的为您提供服务</view>
		<view class="genderbox">
			<view class="gender">
				<view class="genderMaleicon" @click="genderMaleSelected()" :class="{activeMale:selected===1}"></view>
				<text>男</text>
			</view>
			<view class="gender">
				<view class="genderFemaleicon" @click="genderFemaleSelected()" :class="{activeFemale:selected===2}"></view>
				<text>女</text>
			</view>
		</view>
		<view class="h2text">选择年龄</view>
		<view class="ageRangeListbox">
			<view class="ageRangeList" v-for="(item,index)  in ageRangeList" :key="index" :class="{active:index===ins}" @click="ageRangeSelected(index)">
				{{item.ageRange}}
			</view>
		</view>
		<view class="buttom"  :class="{actives:act>=1}"  @click="nextStepbuttom()">下一步</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected:0,
				ins:'',
				act:'',
				ageRangeList:[{
					ageRange:'18岁以下'
				},
				{
					ageRange:'19-24岁'
				},
				{
					ageRange:'25-30岁'
				},
				{
					ageRange:'31-40岁'
				},
				{
					ageRange:'41-50岁'
				},
				{
					ageRange:'50岁以上'
				}]
			};
		},
		methods:{
			genderMaleSelected:function(){
				this.selected = 1;
				if(this.ins ===0){
					this.act=this.ins+this.selected;
				}else if(this.ins >0){
					this.act=this.ins+this.selected;
				};
				  
			},
			genderFemaleSelected:function(){
				this.selected = 2;
				if(this.ins ===0){
					this.act=this.ins+this.selected;
				}else if(this.ins >0){
					this.act=this.ins+this.selected;
				};
			},
			 getData(){
			    axios.get(someapi).then(res =>{
			        this.ageRangeList = res.data;
			    })
			},
			ageRangeSelected:function(index){
				 this.ins=index;
				 if(this.selected >0){
				 	this.act=this.ins+this.selected;
				 };				
				},
			nextStepbuttom:function(){
				console.log('选中性别:'+this.selected,'年龄区间:'+this.ins);
				if(this.act>=1){
						uni.navigateTo({			
							url: '/pages/questionnaireInvestigationTwo/questionnaireInvestigationTwo'
						});
				};
				
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
		.text{
			width: 100%;
			font-size:34rpx;
			font-family:PingFang-SC-Bold;
			font-weight:bold; 
			text-align: center;
			color: #333333;
			margin: 78rpx auto 122rpx;
		}
		.genderMaleicon ,.genderFemaleicon{
			background: url('/static/uncheckedMale.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			width: 183rpx;
			height: 183rpx;
		}
		.genderFemaleicon{
			background: url('/static/uncheckedFemale.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
		}
		.activeMale{
			background: url('/static/selectedMale.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
		}
		.activeFemale{
			background: url('/static/selectedFemale.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
		}
		.gender{
			@extend .flex;
			flex-direction: column;
			font-size:32rpx;
			font-family:PingFang-SC-Bold;
			font-weight:bold;
			color:#333333;
			text-align: center;
		}
		.genderbox{
			@extend .flex;
			justify-content: space-around;
		}
		.h2text{
			font-size:32rpx;
			font-family:PingFang-SC-Bold;
			font-weight:bold;
			color:#333333;
			margin: 114rpx 0  0rpx 30rpx;
		}
		.ageRangeList{
			width:190rpx;
			height:60rpx;
			border:2rpx solid #FE4644;
			border-radius:30rpx;
			font-size:30rpx;
			font-family:PingFang-SC-Bold;
			font-weight:bold;
			color:#FE4644;
			line-height: 60rpx;
			text-align: center;
			margin-top: 40rpx;
		}
		.ageRangeListbox{
			@extend .flex;
			justify-content:space-around;
			flex-wrap:wrap;
			margin: auto;
			
		}
		.active{
			color:#fff;
			background: #FE4644;
		}
		.actives{
			background: #FE4644 !important;
		}
		.buttom{
			width:690rpx;
			height:90rpx;
			background:#CECECE;
			border-radius:45rpx;
			font-size:36rpx;
			font-family:PingFang-SC-Bold;
			font-weight:bold;
			color:#FFFFFF;
			line-height: 90rpx;
			text-align: center;
			margin: 161rpx auto auto;
		}
</style>
