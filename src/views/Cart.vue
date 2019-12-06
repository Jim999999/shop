<template>
  <div class="cart">
  <div class="nav-bar">
    <van-nav-bar title="购物车"  />
  </div>
  <div class="order-list" >
      <van-card v-for="(item ,index) of orderList" :key="index"
        :num="item.num"
        :tag="item.tag"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.thumb"
        :origin-price="item.originPrice"
      >
      <div slot="footer">
        <van-button size="mini" @click="deleteOrder(index)">删除</van-button>
      </div>
    </van-card>
       
  </div>

  <div>
      <van-submit-bar class="submit-order" :price="totalPrice" button-text="提交订单" @submit="onSubmit">
        <!-- <span slot="tip">
          你的收货地址不支持同城送, <span>修改地址</span>
        </span> -->
      </van-submit-bar>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      checked:0,
      orderList :[
        
        ],
    }
  },
  created(){//预加载数据

    for(let i=0 ; i<=25; i++ ){
       let order = {
          num : 1,
          tag : '标签'+i,
           price : i,
          desc : '描述信息'+i,
          title : '商品标题'+i,
          thumb : 'https://img.yzcdn.cn/vant/t-thirt.jpg',
          originPrice : '20.00',
       };
       this.orderList.push(order);
    }
   
  },
  computed:{
    totalPrice(){
        return  this.orderList.reduce((sum,item)=>{
            sum += parseFloat(item.price);
            return sum ; //分
        },0) * 100;
    }
  },
  methods:{
    //删除订单
    deleteOrder(index){
       this.orderList.splice(index,1);
    },
    onSubmit(){
      this.$toast.success('提交成功');
    }
  }
}
</script>
<style scoped>
.nav-bar{
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 0;
}
.order-list{
  margin-top: 0.85rem;
  margin-bottom: 2rem;
}
.submit-order{
  margin-bottom: 0.75rem;
}
</style>