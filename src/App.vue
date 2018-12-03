<template>
  <div id="app">
  <footer>
  <router-link to="/index" v-cloak id="curr" ><img src="./assets/images/20180503154746736hPU .png" alt="" /><p>首页</p></router-link>
  <router-link to="/shop" v-cloak><img src="./assets/images/20180503154754480y7a.png" alt="" /><p>商城</p></router-link>
  <router-link to="/sale" v-cloak><img src="./assets/images/201805031548018675Z6.png" alt="" /><p>优惠</p></router-link>
  <router-link to="/my" v-cloak><img src="./assets/images/201805031548109810vs.png" alt="" /><p>我的</p></router-link>
       
  </footer>
  <router-view ></router-view>
  </div>
</template>

<script>
	
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	changeBgc(e){
  		console.log(1)
  		console.log($(e.target))
  	}
  	
  }
  
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	text-decoration: none;
}
.router-link-active{
	color: #64B0D5;
}
[v-cloak]{
	display:none;
}
#app{
	margin-bottom: 16%;
	overflow: hidden;
	height: 100%;
}
 #app footer{
 	z-index: 10;
 	padding:1% 0;
 	box-sizing: border-box;
 	background: #fff;
    text-align:center;
    width:100%;
    position:fixed;
    bottom:0;
    display:flex;
        border-top: 1px solid #e2e2e2;
 }
 footer a{
   	display: block;
    flex:3;
    height:100%;
    color: #666666
 }
 #app footer a img{
 	width: 19%;
 	margin-top: 6%;
 }
</style>
