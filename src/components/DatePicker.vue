<template>
  <div>
    Date:
    <input type="date" v-model="date" v-on:change="passData">
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  data: function () {
    return {
      date: null,
    }
  },
  methods: {
    passData() {
      this.$emit('getData', this.date);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
