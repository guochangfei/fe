<template>
  <div>
    2222222222
    <el-tree :data="data1" :props="defaultProps"></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: this.$constants.table,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    handleNodeClick() {
      //console.log(data);
    }
  }
};
</script>

<style>
</style>