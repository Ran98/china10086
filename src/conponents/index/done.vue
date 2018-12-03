<template>
	<h1><span @click="back()">返回</span>这是充值页面</h1>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
				back(){
					// 返回到上一级
					this.$router.go(-1)
				}
			}
	}
</script>

<style>
</style>