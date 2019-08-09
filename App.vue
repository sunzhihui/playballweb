<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
		
	}
</script>

<style>	
	 view{
			box-sizing: border-box;	
		}
	/*每个页面公共css */
	.uni-tabbar .uni-tabbar__icon{
		width: 36px;
		height: 22px;
	}
</style>
