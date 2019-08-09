<template>
	<view class="content">
				<view class="top_title">
			<view class="title_name">
				<text style="font-size: 34upx;color: #ffffff;">头条</text>
			</view>
			<view class="title_name">
				<text>社会</text>
			</view>
			<view class="title_name">
				<text>娱乐</text>
			</view>
			<view class="title_name">
				<text>笑话</text>
			</view>
			<view class="title_name">
				<text>健康</text>
			</view>
			<view class="title_name">
				<text>汽车</text>
			</view>
		</view>
		
		<view class="news_list" @tap="navigateTo">
			<view class="news_detail">
				<view class="news_title">
					别怕撤档，七月还有这些电影可以看
				</view>
				
				<view class="news_img">
					
						<image src="../../static/recommend_img.jpg" mode=""></image>
					
						<image src="../../static/recommend_img.jpg" mode=""></image>
					
						<image src="../../static/recommend_img.jpg" mode=""></image>
					
				</view>
				
				<view class="news_mes">
					<view class="news_source">
						爱电影网
					</view>
					<view class="news_time">
						3天前
					</view>
				</view>
			</view>
		</view>
		
		<view class="ad_list">
			<view class="ad_detail">
				<view class="ad_text">
					旅游推荐目的地，周末去哪儿不用愁，帮你快速选择纳凉好去处 赶快出发吧
				</view>
				<view class="ad_img">	
					<image src="../../static/recommend_img.jpg" mode=""></image>
				</view>
			</view>
			
			<view class="ad_mes">
				<text>广告</text>
				<text>大山旅游</text>
				<text>一天前</text>
			</view>
		</view>
		
		<view class="video_list">
			<view class="video_title">
				武汉超颜值办公室入驻，高速WIFI咖啡，超值价格，高端享受
			</view>
			<view class="uni-padding-wrap uni-common-mt">
			    <view>
			        <video id="myVideo" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
			              controls autoplay="flse"></video>
			    </view>
			    
			</view>
			
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
			navigateTo(){
				uni.navigateTo({
					url:'../news_read/news_read'
				})
			}
		}
	}
</script>

<style scoped>
	.top_title{
		width: 100%;
		height: 42upx;
		background-color: #FF5040;
	}
	
	.title_name{
		width: 16.6%;
		float: left;
		text-align: center;
		font-size: 28upx;
	}
	.title_name text{
		width: 100%;
		height: 42upx;
		line-height: 42upx;
		color: #E0DADA;
	}
	
	.news_detail{
		width: 100%;
		background-color: #ffffff;
		padding: 0 30upx;
		padding-top: 28upx;
	}
	
		
	.news_title{
		color: #333333;
		font-size: 36upx;
		font-weight: 600;
	}
	
	.news_img{
		width: 100%;
		/* padding: 0 30upx; */
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		padding-top: 10px;
	}
	
	
	.news_img image{
		width: 220upx;
		height: 140upx;
		display: block;
		border-radius: 10upx;
	}
	
	.news_mes{
		margin-top: 10px;
		padding-bottom: 10px;
		border-bottom: 1px #EBEBEB solid;
		display: flex;	
		font-size: 12px;
		color: #B7B7B7;
		
	}
	
	.news_source{
		margin-right: 10px;
	}
	
	.ad_list{
		width: 100%;
		padding: 20upx 30upx;
	}
	
	.ad_detail{
		display: flex;
	}
		
	.ad_text{
		padding-right: 12px;
		width: 470upx;
		font-size: 32upx;
		font-weight: 600;
	}
	
	.ad_img{
		width: 220upx;
		height: 140upx;
		overflow: hidden;
		border-radius: 5px;
	}
	
	.ad_img image{
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.ad_mes{
		width: 100%;
		border-bottom: 1px #EBEBEB solid;
		display: flex;
	}
	
	.ad_mes text{
		font-size: 12px;
		color: #B7B7B7;
		padding: 10px 0;
		margin-right: 10px;
	}
	
	.video_list{
		width: 100%;
		padding: 0 30upx;
	}
	
	.video_title{
		color: #333333;
		font-size: 32upx;
		font-weight: 600;
		height: 80upx;
		line-height: 80upx;
		text-overflow: ellipsis;
	    overflow: hidden;
	    white-space: nowrap;/*文本不换行*/
	}
	
	.video_play{
		width: 690upx;
		height: 400upx;
		overflow: hidden;
		border-radius: 5px;
	}
	
	.video_play image{
		width: 100%;
		height: 100%;
	}
	
	.uni-common-mt{
		width: 690upx;
		height: 400upx;
		margin: 0 auto;
		overflow: hidden;
		border-radius: 10upx;
	}
	
	#myVideo{
		width: 100%;
		height: 400upx;
	}
	
	.uni-padding-wrap{
		padding: 0;
	}
</style>
