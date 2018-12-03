<template>
	<main>
		<div class="nab">
			<div class="xian_one">
			<div class="i">
			<input type="text" placeholder="请输入11位移动手机号码"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入11位移动手机号码'"/>
			<p>号码簿</p>
			</div>
			<div class="money">
				<ul>
					<li><button @click="rmb1($event)">10元</button></li>
					<li><button @click="rmb1($event)">30元</button></li>
					<li><button @click="rmb1($event)">50元</button></li>
					<li><button @click="rmb1($event)">100元</button></li>
					<li><button @click="rmb1($event)">200元</button></li>
					<li><button @click="rmb1($event)">300元</button></li>
					<li><button @click="rmb1($event)">400元</button></li>
					<li><button @click="rmb1($event)">500元</button></li>
					<li><input  type="text" placeholder="10~5000整数"  oninput="if(value.length>4)value=value.slice(0,4);if(value<0)value=0" onfocus="this.placeholder=''" onblur="this.placeholder='10~5000整数'"/></li>
				</ul>
				<div class="dis">
					<p>
						实际到账：<span>￥</span><b>{{rmb}}</b>
					</p>
					<p>
						支付金额：<span>￥</span><b>{{rmb}}</b>
					</p>
				</div>
				<div class="sale">
					<ul>
						<li>
							<i></i>
						</li>
						<li></li>
					</ul>
				</div>
			<mt-button size="large" disabled>立即充值</mt-button>
			</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				rmb:""
			}
		},
		filters:{
			zhe(value){
				return value.slice(0,value.length-1)
			}
		},
		methods:{
			rmb1(e){
				this.rmb=e.target.innerHTML
			}
//			rmb2(e){
//				this.rmb=e.target.value
//			}
		}
	}
</script>

<style>
	.xian_one{
		padding:5% 5%;
	}
	.xian_one .i input{
		margin: 0 auto;
	    height: 40px;
	    width: 96%;
	    box-sizing: border-box;
	    display: block;
	    outline: none;
	    border: 0;
	    font-size: 25px;
	    background-image: url("../../assets/images/icon-sperson-1.png");
	    background-repeat: no-repeat;
	    background-size: 35px;
	    background-position-X:99%;
	    color: #A4A4A4;
	    padding-right:35px;
	}
	.i{
	border: 0;
    border-bottom: 1px solid #DFDFDF;
    border-radius: 0;
    margin-top: .2333rem;
    margin-bottom: .2667rem;
    padding:5% 0;
	}
	.i p{
		margin:0 auto;
		width:96%;
		text-align: right;
		box-sizing: border-box;
		color: #A4A4A4;
	}
	.money ul{
		text-align: center;
		display: flex;
		flex-wrap:wrap;
		margin-bottom:15px;
	}
	.money ul li{
		width: 33.3%;
	}
	.money ul li button{
		display: block;
		outline: none;
		margin: 5% auto;
	    display: block;
	    outline: none;
	    width: 80%;
	    padding: 8% 10%;
	    border-radius: 6px;
	    border: 1px solid #117DEA;
	    background: #fff;
	    color: #0085D0;
	    font-weight: 500;
	    font-size: 16px;
	}
	.money ul li input{
		background: 0;
			display: block;
		outline: none;
		margin: 5% auto;
	    display: block;
	    outline: none;
	    width: 58%;
	    padding: 8% 10%;
	    border-radius: 6px;
	    border: 1px solid #117DEA;
	    background: #fff;
	    color: #0085D0;
	    font-weight: 500;
	    font-size: 12px;
	    text-align: center;
	    height: 21px;
	}
	.dis p{
		display: inline-block;
		font-size: 0.8rem;
		padding: 0 7px;
		width: 50%;
		box-sizing: border-box;
		text-align: center;
	}
	.dis p:nth-of-type(2){
		float: right;
	}
	.dis p:nth-of-type(2) span,.dis p:nth-of-type(2) b{
		color: #ED2688;
	}
</style>