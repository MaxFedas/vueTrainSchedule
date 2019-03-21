<template>
  <div>
    <div class="data-wrapper">
      <DatePicker v-on:getData="getDateOn" />
      <InputStation v-on:getData="getFromStation" direction="From" />
      <InputStation v-on:getData="getToStation" direction="To" />
      <button class="get-trains-btn btn--stripe" v-on:click="getPosts">
        Get Trains
      </button>
    </div>
    <div class="error-message" v-if="error">
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
      if (this.stationFrom === this.stationTo) return alert('Same station!');
      if (!this.date) return alert('Check date!');
      const stationFromId = stationsNumber.find(i => i[this.stationFrom])[this.stationFrom];
      const stationToId = stationsNumber.find(i => i[this.stationTo])[this.stationTo];
      const query = `from=${stationFromId}&to=${stationToId}&date=${this.date}&time=00%3A00`;
      const response = await PostsService.getTrains(query);
      if (response.data.error) {
        return this.error = response.data.data;
      }
      if (!response.data.length) {
        return this.error = 'Sorry, nothing found. :(';
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
