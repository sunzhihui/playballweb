<template>
	<view>
		<view class="my_wanllet_head">
			<view class="money_can">
				可提金币
			</view>
			<view class="money_extract">
				<view class="gold_num">
					5076
				</view>
				<view class="extract_btn">
					提现
				</view>
			</view>
			
			<view class="my_wallet_bt">
				<view class="extract_num">
					可提5.07元
				</view>
				<view class="extract_rate">
					汇率：1000金币=1元
				</view>
			</view>
		</view>
		
		<view class="money_total">
			<view class="money_total_list">
				<text>今日收益金币</text>
				<span>18</span>
			</view>
			
			<view class="money_total_list">
				<text>累计收益金币</text>
				<span>5076</span>
			</view>
			
			<view class="money_total_list">
				<text>累计支出金币</text>
				<span>16</span>
			</view>
		</view>
		
		<view class="bill_detail">
			<view class="bill_title">
				<view class="bill_earn active">
					收益明细
				</view>
				<view class="bill_expend">
					支出明细
				</view>
			</view>
			<view class="bill_days">
				<uni-collapse>
					<uni-collapse-item :show-animation="true" title="7月1日">
						<view style="padding: 10upx 30upx;" class="item_content">
							<view class="bill_time">
								10:05
							</view>
							<view class="bill_content">
								优赚宝 签到
							</view>
							<view class="bill_num">
								+10
							</view>
						</view>
						<view style="padding: 10upx 30upx;" class="item_content">
							<view class="bill_time">
								10:05
							</view>
							<view class="bill_content">
								优赚宝 时段奖励
							</view>
							<view class="bill_num">
								+8
							</view>
						</view>
						
					</uni-collapse-item>
					<uni-collapse-item :show-animation="true" title="7月15日">
						<view style="padding: 10upx 30upx;" class="item_content">
							<view class="bill_time">
								10:05
							</view>
							<view class="bill_content">
								优赚宝 时段奖励
							</view>
							<view class="bill_num">
								+8
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCollapse from '@../../components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@../../components/uni-collapse-item/uni-collapse-item.vue'
	import uniList from '@../../components/uni-list/uni-list.vue'
	import uniListItem from '@../../components/uni-list-item/uni-list-item.vue'
	
	export default {
		components: {
			uniCollapse,
			uniCollapseItem,
			uniList,
			uniListItem
		},
		data() {
			return {
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'spinner'
				}
			}
		},
		onLoad() {
			debugger
		},
		methods: {
			change(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
@import url("my_wallet.css");
</style>
