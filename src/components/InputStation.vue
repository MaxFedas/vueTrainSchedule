<template>
  <div>
    {{ direction }}:
    <input type="text" v-model="station" list="stations" class='station-piker' v-on:change="passData">
    <datalist id="stations">
      <option v-for="station in stationsNumber" :key="station" >{{ Object.keys(station)[0] }}</option>
    </datalist>
  </div>
</template>

<script>
import stationsNumber from '../consts/StationsNumber.js';
export default {
  name: 'InputStation',
  props: {
    direction: String
  },
  data: function () {
    return {
      station: '',
      stationsNumber: stationsNumber,
    }
  },
  methods: {
    passData() {
      this.$emit('getData', this.station);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
