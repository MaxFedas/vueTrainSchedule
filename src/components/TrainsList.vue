<template>
  <div>
    <ScheduleHeader />
    <div v-for="train in trains">
      <div class="schedule-header">
        <div class="header-item"><b>{{ train.num }}</b></div>
        <div class="header-item item-date">
          <div>{{ train.from.stationTrain }}</div>
          <div>{{ train.to.stationTrain }}</div>
        </div>
        <div class="header-item item-date">
          <div>{{ train.from.date }}</div>
          <div>{{ train.to.date }}</div>
        </div>
        <div class="header-item">
          <div>{{ train.from.time }}</div>
          <div>{{ train.to.time }}</div>
        </div>
        <div class="header-item">{{ train.travelTime }}</div>
        <div class="header-item no-border">
          <div v-for="place in train.types">
            <div>{{ place.id }}: {{ place.places }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleHeader from './ScheduleHeader.vue';

export default {
  name: 'TrainsList',
  components: {
    ScheduleHeader,
  },
  props: {
    trains: Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  cursor: pointer;
  user-select: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
