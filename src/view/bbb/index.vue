<template>
  <div>
    bbb-conteent
    <p @click="toShitu(1)">hahha1</p>
    <p @click="toShitu(2)">hahah2</p>
    <router-view ref="bbb"></router-view>
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
        name: 'haha' + order
      });
    }
  }
};
</script>

<style scoped>
</style>