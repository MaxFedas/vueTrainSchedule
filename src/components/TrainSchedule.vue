<template>
  <div>
    <div class="data-wrapper">
      <DatePicker v-on:getData="getDateOn" />
      <InputStation v-on:getData="getFromStation" direction="From" />
      <InputStation v-on:getData="getToStation" direction="To" />
      <button class="get-trains-btn" v-on:click="getPosts">
        Get Trains
      </button>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <TrainsList :trains="this.trains" />
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService';
import TrainsList from './TrainsList.vue';
import stationsNumber from '../consts/StationsNumber.js';
import InputStation from './InputStation.vue';
import DatePicker from './DatePicker.vue';
export default {
  name: 'TrainSchedule',
  components: {
    TrainsList,
    InputStation,
    DatePicker,
  },
  data: function () {
    return {
      trains: [],
      checkedNames: [],
      date: null,
      stationFrom: '',
      stationTo: '',
      stationsNumber: stationsNumber,
      error: ''
    }
  },
  methods: {
    async getPosts () {
      // console.log(this.date, this.stationFrom);
      if (this.stationFrom === this.stationTo) return alert('Same station!');
      if (!this.date) return alert('Check date!');
      const stationFromId = stationsNumber.find(i => i[this.stationFrom])[this.stationFrom];
      const stationToId = stationsNumber.find(i => i[this.stationTo])[this.stationTo];
      const query = `from=${stationFromId}&to=${stationToId}&date=${this.date}&time=00%3A00`;
      const response = await PostsService.getTrains(query);
      if (response.data.error) {
        return this.error = response.data.data;
      }
      this.error = '';
      this.trains = response.data;
    },
    getFromStation(data) {
      this.stationFrom = data;
    },
    getToStation(data) {
      this.stationTo = data;
    },
    getDateOn(data) {
      this.date = data;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.station-piker::-webkit-calendar-picker-indicator {
  display: none;
}
.get-trains-btn {
  border: 1px solid grey;
  border-radius: 4px;
  height: 30px;
  user-select: none;
  cursor: pointer;
  outline: none;
}
.data-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
