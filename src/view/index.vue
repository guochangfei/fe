<template>
  <div>
    index
    zheshi wo de zhuyr @@@
    <p class="blue" @click="toBuy">购买</p>
    <common1 />
    <router-view ref="index"></router-view>
    <p @click="toShitu(1)">shitu1</p>
    <p @click="toShitu(2)">shitu2</p>
    <p @click="toShitu('1-out')">shitu1-out</p>
    <p @click="toShitu('2-out')">shitu2-out</p>
    <el-button>ssssss</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    toBuy() {
      this.$router.push({
        name: 'buy'
      });
    },
    toShitu(order) {
      this.$router.push({
        name: 'shitu' + order
      });
    }
  }
};
</script>

<style>
</style>