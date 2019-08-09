<template>
	<view>
		<view class="pages"></view>
		<view class="textTitle"><text class="titlelg">选择您感兴趣的内容</text>我们将推荐合适的内容给您</view>
		<view class="interestsListbox" >
			<view class="interestsList"  v-for="(item,index)  in interestsList" :key="index"  @click="interestSelected(index)">
				<view class="classNamebgimgbox">
					<image :src="item.classNamebgimg" mode="mode" class="classNamebgimg"></image>
					<image v-show="item.hidden===true" :src="item.selectedicon" mode="mode" class="selectedicon"></image>
					<text v-show="item.hidden===false"  mode="mode" class="selectediconN"></text>
				</view>
				<text class="className">{{item.className}}</text>
			</view>	
		</view>
		 <view class="buttom"  :class="{actives:act>=1}"  @click="nextStepbuttom()">完成</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode:'aspectFit',
				act:'',
				interestsList:[{
					classNamebgimg:'/static/questionnaireInterest01.png',
					selectedicon:'/static/questionnaireInterest15.png',
					className:'房产民生',
					hidden:false
				},
				{
					classNamebgimg:'/static/questionnaireInterest02.png',
					selectedicon:'/static/questionnaireInterest15.png',
					className:'小说段子',
					hidden:false
				},
				{
					classNamebgimg:'/static/questionnaireInterest03.png',
					selectedicon:'/static/questionnaireInterest15.png',
					className:'游戏电竞',
					hidden:false
				},
				{
					classNamebgimg:'/static/questionnaireInterest05.png',
					selectedicon:'/static/questionnaireInterest15.png',
					className:'美食天下',
					hidden:false
				},
				{
					classNamebgimg:'/static/questionnaireInterest06.png',
					selectedicon:'/static/questionnaireInterest15.png',
					className:'汽车之旅',
					hidden:false
				},
				{
					classNamebgimg:'/static/questionnaireInterest04.png',
					selectedicon:'/static/questionnaireInterest15.png',
					className:'全球旅行',
					hidden:false
				}]
			};
		},
		methods:{
			interestSelected:function(index){
				 let hid = this.interestsList[index].hidden;
				 if (hid == true) {
				  this.interestsList[index].hidden = false
				        
				 }else {
				  this.interestsList[index].hidden = true;  
				 };
				let list = this.interestsList.length;
				let a=0;
				for(let i=0 ;i<list;i++){
					let stat = this.interestsList[i].hidden;
					 if(stat ==true){
						 a = 1+i;	
					 };
					
				};
				 this.act= a;
				 
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
	.textTitle{
		@extend .flex;
		flex-direction: column;
		font-size:30rpx;
		font-weight:bold;
		color:#999999;
		margin-top: 69rpx;
	}
	.titlelg{
		font-size:38rpx;
		color:#333333;
		font-weight:800;
		margin-bottom: 14rpx;
	}
	.classNamebgimg{
		width:200rpx;
		height:200rpx;
		border-radius:10rpx;
	}
	.selectedicon {
		width: 24rpx;
		height: 24rpx;
		position: absolute;
		margin-top: 10rpx;
		margin-left: -38rpx;
	}
	.selectediconN{
		@extend .selectedicon;
		width: 22rpx;
		height: 22rpx;
		background:#000000;
		border:2rpx solid #FFFFFF;
		opacity:0.5;
		border-radius:50%;
	}
	.className{
		font-size:30rpx;
		color:#666666;
	}
	.interestsListbox{
		@extend .flex;
		justify-content:space-around;
		flex-wrap:wrap;
		margin-top:88rpx;
		margin-left: 30rpx;
	}
	.interestsList{
		margin-right: 40rpx;
		 margin-top: 30rpx;
		text-align: center;
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
		margin: 81rpx auto auto;
	}
	.actives{
		background: #FE4644 !important;
	}
</style>
