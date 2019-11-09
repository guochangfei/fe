<template>
  <div class="content">
    <p @click="buy(1)">套餐1</p>
    {{price}}
    <p class="green">套餐2</p>
    <bbb />
  </div>
</template>

<script>
import bbb from '../bbb';
export default {
  components: { bbb },
  data() {
    return {
      price: 0
    };
  },
  methods: {
    buy(orderId) {
      // const _this = this;
      this.$post('/api/getPrice', {
        id: orderId
      }).then(res => {
        res;
        //res {price:111, error: false}
        // _this.price = res.price;
      });
    }
  }
};
</script>

<style scoped lang="less">
.content {
  font-size: 40px;
  .green {
    color: green;
  }
}
</style>