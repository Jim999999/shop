<template>
  <div class="about">
    <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
    />
  </div>
</template>

<script>
export default {
  data() { 
    return {
      activeId: 1,
      activeIndex: 0,
      items: [
        { text: '广东', children: [
          {text:'广州'},
          {text:'深圳'},
          {text:'珠海'},
          {text:'佛山'},
          {text:'东莞'},
          {text:'惠州'},
          {text:'江门'},
          ]},
        { text: '江苏', children: [
          {text:'苏州'},
          {text:'徐州'},
          ]}
      ]
    };
  }
}
</script>>