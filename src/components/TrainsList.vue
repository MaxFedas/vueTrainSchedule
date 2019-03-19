<template>
  <div>
    <ScheduleHeader />
    <div v-for="train in trains" :key="train.num">
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
          <div v-for="place in train.types" :key="place.id">
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
