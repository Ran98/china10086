<template>
	<div class="warrper">
		<mt-header title="充值交费">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<img src="../../assets/images/yhkcz-img.jpg" alt="" width="100%" />
		<div id="rmb">
		<router-link to="/zaixian">
			在线充值
		</router-link>
		<router-link to="/ka">
			充值卡充值
		</router-link>
		<router-link to="/jifen">
			积分充值
		</router-link>
		</div>
		<router-view></router-view>
		
		
		
		
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			back() {
				// 返回到上一级
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;
	}
	
	.mintui {
		font-size: 28px;
		color: #333;
	}
	
	.mint-header {
		background-color: #EFEFEF;
		color: #333;
		font-weight: 400;
		font-size: 16px;
	}
	#rmb{
		display: flex;
		border-bottom: 1px solid #EFEFEF;
	}
	#rmb a{
		flex: 1;
		text-align: center;
		/*border-bottom: solid 2px #0185cf;
    	color: #0185cf;*/
    	color: #666;
    	font-size: 15px;
    	line-height: 40px;
	}
</style>