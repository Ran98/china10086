<template>
	<div id="warpper">
		<mt-header title="活动">
  <router-link to="/shop" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
</mt-header>
	<dl>
		<dt><img src="../../assets/images/20181108173558257nqS.jpg" alt="" /></dt>
		<dd>嗨翻了，全面免流的狂欢，完美助力剁手节</dd>
	</dl>
	<dl>
		<dt><img src="../../assets/images/201811021408088100Js.jpg" alt="" /></dt>
		<dd>不看气质，看这里！幸运大转盘，每天赚不停！</dd>
	</dl>
	<dl>
		<dt><img src="../../assets/images/20180511113800732naH.jpg" alt="" /></dt>
		<dd>在线选号，壕礼不断</dd>
	</dl>
	<div class="k_sevn">
		<div class="left_f">
			<router-link to="">登录</router-link>
		</div>
		<div class="right_f">
			<router-link to="">帮助</router-link> | 
			<router-link to="">意见反馈</router-link>
		</div>
	</div>
	</div>
</template>
<style scoped>
	*{
		padding:0;
		margin:0;
		list-style: none;
		text-decoration: none;
	}
	.mint-header{
		height: 2.92rem;
    	font: 1.2rem/2rem "microsoft yahei";
    	text-align: center;
    	background: #f7f7f7;
    	color: #333333;
	}
	dl{
		margin:2% 3%
	}
	dl img{
		width: 100%;
	}
	.k_sevn{
		background: #f7f7f7;
	overflow: hidden;
	padding:2% 0;
}
.k_sevn a{
	    color: #0085d0;
}
.left_f{
	float: left;
	width: 50%;
	box-sizing: border-box;
	padding: 0 5%;
}
.right_f{
	padding: 0 5%;
	float: right;
	width: 50%;
	box-sizing: border-box;
	text-align: right;
}
</style>
<script type="text/javascript">
	export default{
		
	}
</script>