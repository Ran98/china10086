
<template>
	<div id="conter">
	<div id="head">
		<div class="left_h">
		<img src="../../assets/images/logo.png" alt="" />
		</div>
		<div class="right_h">
			<div id="add">
			<a href="#">
				<span>广州</span><img src="../../assets/images/down.png" alt="" />
			
			</a>
				<img src="../../assets/images/info_n.png" alt="" />
				<img src="../../assets/images/icon-search.png" alt="" />
			</div>
		</div>
			
	</div>
	<mt-swipe :auto="4000">
  <mt-swipe-item><img src="../../assets/images/20181109144946307Mqk.jpg" alt="" /></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/images/201811091518443154FO.jpg" alt="" /></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/images/20181114143523082RfT.jpg" alt="" /></mt-swipe-item>
    <mt-swipe-item><img src="../../assets/images/20181114143759848EIx.jpg" alt="" /></mt-swipe-item>
</mt-swipe>
	<div class="k_one">
		<ul>
			<li><router-link to="/up">
					<img src="../../assets/images/2018051715582591796d.png" alt="" />
					<p>话费充值</p>
				</router-link>
					
			</li>
			<li><router-link to="/G4">
					<img src="../../assets/images/20180517155920454ryU.png" alt="" />
					<p>流量充值</p>
				</router-link>
			</li>
			<li><router-link to="/bill">
					<img src="../../assets/images/20180517160544181a1D.png" alt="" />
					<p>账单查询</p>
			</router-link>
			</li>
			<li><router-link to="/balance">
					<img src="../../assets/images/20180517160609868CSa.png" alt="" />
					<p>套餐余量</p>
				</router-link>	
			</li>
		</ul>
	<router-view></router-view>
		<ul>
			<li><router-link to="/done">
					<img src="../../assets/images/20180517160632454pGn.png" alt="" />
					<p>已办业务</p>
				</router-link>	
			</li>
			<li><router-link to="/Housekeeper">
					<img src="../../assets/images/20180517160955042nB6.png" alt="" />
					<p>流量管家</p>
				</router-link>	
			</li>
			<li><router-link to="/are">
					<img src="../../assets/images/201805171610406916zw.png" alt="" />
					<p>4G专区</p>
				</router-link>	
			</li>
			<li><router-link to="/international">
					<img src="../../assets/images/20180517161206947Lac.png" alt="" />
					<p>国际/港澳</p>
				</router-link>	
			</li>
		</ul>
	</div>
	<div class="k_two">
		<ul>
			<li>
				<a href="">
				<h5>买手机</h5>
				<img src="../../assets/images/20180518144010375037.png" alt="" />
				</a>
			</li>
			<li>
				<a href="">
				<h5>办业务</h5>
				<img src="../../assets/images/201805181442097766Ug.png" alt="" />
				</a>
			</li>
			<li>
				<a href="">
				<h5>选号卡</h5>
				<img src="../../assets/images/20180518144321133FxW.png" alt="" />
				</a>
			</li>
		</ul>
	</div>
	<div class="k_three">
		<h3><img src="../../assets/images/icon1.png" alt="" /><span>终端推荐</span></h3>
		<ul>
			<li>
				<img src="../../assets/images/201805181031410211Gh.jpg" alt="" />
				<h4>{{msg}}</h4>
				<p>华为p20</p>
			</li>
			<li>
				<img src="../../assets/images/20180518103152226c5c.jpg" alt="" />
				<h4>3199元</h4>
				<p>华为Mate10 Pro</p>
			</li>
		</ul>
		<ul>
			<li>
				<img src="../../assets/images/20180518103156622ahn.jpg" alt="" />
				<h4>7888元</h4>
				<p>苹果X</p>
			</li>
			<li>
				<img src="../../assets/images/2018051810320248547x.jpg" alt="" />
				<h4>2099元</h4>
				<p>华为荣耀Play</p>
			</li>
		</ul>
	</div>
	<div class="k_four">
		<h3><img src="../../assets/images/icon2.png" alt="" /><span>业务推荐</span></h3>
		<ul>
			<li>
				<div class="left_four">
					<h5>4G流量季度包</h5>
					<p>流量多多 优惠多多</p>
				</div>
				<div class="right_four">
				<img src="../../assets/images/20180518103054767kro.jpg" alt="" />
				</div>
			</li>
			<li>
				<div class="left_four">
					<h5>4G流量半年包</h5>
					<p>一次办理 半年有效</p>
				</div>
				<div class="right_four">
				<img src="../../assets/images/201805181031013576bn.jpg" alt="" />
				</div>
			</li>
		</ul>
	</div>
	<div class="k_five">
		<h3><img src="../../assets/images/icon3.png" alt="" /><span>号卡推荐</span></h3>
		<div class="left_five">
			<img src="../../assets/images/20180517164650703HsK.png" alt="" />
			<h4>选号专区</h4>
			<p>海量靓号随心选</p>
		</div>
		<div class="right_five">
			<ul>
				<li>
				<div class="left_four">
					<h5>4G专区</h5>
					<p>移动4G就是快</p>
				</div>
				<div class="right_four">
				<img src="../../assets/images/20180517164622667ILz.png" alt="" />
				</div>
				</li>
				<li>
				<div class="left_four">
					<h5>VoLTE</h5>
					<p>4G视频通话服务</p>
				</div>
				<div class="right_four">
				<img src="../../assets/images/20180517164600240QAX.png" alt="" />
				</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="k_six">
			<h3><img src="../../assets/images/icon4.png" alt="" /><span>特色专区</span></h3>
			<ul>
				<li>
					<div class="left_four">
					<h5>国际/港澳台</h5>
					<p>畅游各地不断网</p>
				</div>
				<div class="right_four">
				<img src="../../assets/images/20180517155502169d2N.png" alt="" />
				</div>
				</li>
				<li>
					<div class="left_four">
					<h5>活动专区</h5>
					<p>用户福利全在这里</p>
				</div>
				<div class="right_four">
				<img src="../../assets/images/2018051715551251867h.png" alt="" />
				</div>
				</li>
				<li>
					<div class="left_four">
					<h5>宽带专区</h5>
					<p>百兆宽带优惠享</p>
				</div>
				<div class="right_four">
				<img src="../../assets/images/20180517155534068YK8.png" alt="" />
				</div>
				</li>
				<li>
					<div class="left_four">
					<h5>手机病毒预警</h5>
					<p>保护个人信息安全</p>
				</div>
				<div class="right_four">
				<img src="../../assets/images/20180517155539389wKN.png" alt="" />
				</div>
				</li>
				<li>
					<div class="left_four">
					<h5>流量免费集中营</h5>
					<p>省流量、赚流量</p>
				</div>
				<div class="right_four">
				<img src="../../assets/images/20180517155551300XVh.png" alt="" />
				</div>
				</li>
				<li>
					<div class="left_four">
					<h5>移动俱乐部</h5>
					<p>贴心服务精彩无限</p>
				</div>
				<div class="right_four">
				<img src="../../assets/images/201805171547321942yC.png" alt="" />
				</div>
				</li>
			</ul>
	</div>
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

<script type="text/javascript">export default {
	data() {
		return {
			msg: ""
		}
	},
	mounted() {
		this.$http.get('./data/ptu.json')
			.then((response) => {
//				console.log(response);
				this.msg = response.data.phone[0].Price
			})

	}

}</script>
<style scoped>
	* {
	padding: 0;
	margin: 0;
	list-style: none;
	text-decoration: none;
}

#head {
	overflow: hidden;
	background: #f2f2f2;
	position: relative;
	top: 0;
}

.left_h {
	width: 50%;
	float: left;
	height: 100%;
	padding: 0.7rem 0.5rem;
	box-sizing: border-box;
}

.left_h img {
	width: 80%;
}

.right_h {
	float: right;
	width: 50%;
	padding: 0.7rem 0.5rem;
	box-sizing: border-box;
}

#add {
	text-align: right;
}

#add a {
	display: inline-block;
	color: black;
	vertical-align: middle;
}

#add a img {
	width: 20%;
}

#add img {
	vertical-align: middle;
	width: 12%;
	margin-right: 5%;
}

.mint-swipe {
	padding-bottom: 40%;
}

.mint-swipe-items-wrap {
	position: static;
}

.mint-swipe img {
	height: 100%;
}

.k_one {
	width: 100%;
	text-decoration: none;
}

.k_one ul,
.k_two ul {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	/*width: 100%;*/
}

.k_one ul li {
	padding: 2% 3%;
	text-align: center;
	list-style: none;
	flex: 1;
}

.k_one ul li a {
	color: #666666;
	font-size: 0.7rem;
	display: block;
}

.k_one ul li a img {
	width: 60%;
}

.k_two ul li {
	border: 1px solid #eeeeee;
	flex: 1;
	text-align: center;
	margin-right: 1%;
}

.k_two ul li:nth-of-type(3) {
	margin-right: 0;
}

.k_two ul li img {
	width: 50%;
	margin-bottom: 15%;
}

.k_two ul li h5 {
	font-size: 1rem;
	font-weight: 400;
	margin: 15% 0;
}

.k_two ul li:nth-of-type(1) h5 {
	color: #EE2F6D;
}

.k_two ul li:nth-of-type(2) h5 {
	color: #FDAE32;
}

.k_two ul li:nth-of-type(3) h5 {
	color: #896EF9;
}

.k_three {}

.k_three h3,.k_four h3,.k_five h3,.k_six h3
{
	color: #FC719A;
	height: 2.8rem;
	font-size: 1rem;
	line-height: 2.8rem;
	text-align: center;
	background: #f2f2f2;
}

.k_three h3 img,.k_four h3 img,.k_five h3 img,.k_six h3 img
 {
	vertical-align: middle;
	height: 45%;
}

.k_three h3 span,.k_four h3 span,.k_five h3 span,.k_six h3 span
 {
	vertical-align: middle;
	margin-left: 1%;
}

.k_four h3 span {
	color: #A853FD;
}
.k_five h3 span{
	color: #24AADD;
}
.k_six h3 span{
	color: #117DEA;
}
.k_three ul {
	text-align: center;
	display: flex;
}

.k_three ul li {
	flex: 1;
	padding: 0.53rem;
	border-right: 1px solid #eeeeee;
	border-bottom: 1px solid #eeeeee;
}

.k_three ul li:nth-of-type(2n) {
	border-right: 0;
}

.k_three ul:nth-of-type(2) li {
	border-bottom: 0;
}

.k_three ul li img {
	width: 80%;
}

.k_three ul li h4 {
	padding-top: 0.448rem;
	color: #E40077;
	font: 1rem/1rem "microsoft yahei";
}

.k_three ul li p {
	width: 100%;
	padding-top: 0.384rem;
	margin: 0 auto;
	font: 0.75rem/0.75rem "microsoft yahei";
	color: #333333;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
}
.k_four ul {
	display: flex;
	text-align: center;
}

.k_four ul li {
	flex: 1;
	border-bottom: 1px solid #eeeeee;
}

.left_four{
	float: left;
	width: 70%;
}

.left_four h5 {
	width: 100%;
	padding-top: 16%;
	font: 1rem/1rem "microsoft yahei";
	font-weight: 600;
	color: #333333;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.left_four p{
	width: 100%;
    padding: 0.56rem 0 1.33rem;
    font: 0.712rem/0.712rem "microsoft yahei";
    color: #999999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.right_four{
	float: right;
	width: 30%;
}

.right_four img {
	margin-top: 1rem;
	width: 85%;
}
.k_five{
	overflow: hidden;
}
.k_five .left_five{
	text-align: center;
	float: left;
	width: 50%;
}
.k_five .right_five{
	box-sizing: border-box;
	border-left: 1px solid #eeeeee;
	text-align: center;
	float: right;
	width:50%;
}
.k_five .left_five img{
	display: block;
	width: 55%;
	margin: 0 auto ;
	vertical-align: middle;
}
.k_five .left_five p{
	color: #999999;
}
.k_five .right_five ul li{
	overflow: hidden;
}
.k_five .right_five ul li:nth-of-type(1){
	border-bottom: 1px solid #eeeeee;
}
.k_six ul{
	display: flex;
	flex-wrap: wrap;
}
.k_six ul li{
	box-sizing: border-box;
	padding: 3%;
	width: 50%;
	border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
	}
.k_six ul li:nth-of-type(2n){
	border-right: 0;
}
.k_sevn{
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