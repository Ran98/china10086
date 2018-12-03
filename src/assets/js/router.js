import vueRouter from 'vue-router'
import index from '../../conponents/index/index.vue'
import shop from '../../conponents/index/shop.vue'
import sale from '../../conponents/index/sale.vue'
import my from '../../conponents/index/my.vue'
import up from '../../conponents/index/up.vue'
import G4 from '../../conponents/index/G4.vue'
import bill from '../../conponents/index/bill.vue'
import done from '../../conponents/index/done.vue'
import balance from '../../conponents/index/balance.vue'
import are from '../../conponents/index/are.vue'
import international from '../../conponents/index/international.vue'
import Housekeeper from '../../conponents/index/Housekeeper.vue'
import zaixian from '../../conponents/index/zaixian.vue'
import ka from '../../conponents/index/ka.vue'
import jifen from '../../conponents/index/jifen.vue'
export default new vueRouter({
	routes:[
	{
		path:'/index',component:index
	},
	{
		path:'/shop',component:shop
	},
	{
		path:'/sale',component:sale
	},
	{
		path:'/my',component:my
	},
	
	{
		path:'/up',component:up,
		children:[
						{
							path:'/zaixian',component:zaixian
						},
						{
							path:'/ka',component:ka
						},
						{
							path:'/jifen',component:jifen
						},
						{
							path:'/',component:zaixian
						}
					]
	},
	{
		path:'/G4',component:G4
	},
	{
		path:'/bill',component:bill
	},
	{
		path:'/done',component:done
	},
	{
		path:'/balance',component:balance
	},
	{
		path:'/are',component:are
	},
	{
		path:'/international',component:international
	},
	{
		path:'/Housekeeper',component:Housekeeper
	},
	{
		path:'/*',component:index
	}
	
	]
})