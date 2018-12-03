<template>
	<h1><span @click="back()">返回</span>流量充值</h1>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
</style>