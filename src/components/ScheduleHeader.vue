<template>
  <div class="schedule-header">
    <div class="header-item">Train #</div>
    <div class="header-item item-date">
      <div>Train direction</div>
      <div>from/to</div>
    </div>
    <div class="header-item item-date">Date</div>
    <div class="header-item">
      <div>Departure</div>
      <div>Arriving</div>
    </div>
    <div class="header-item">Duration</div>
    <div class="header-item no-border">Availale Places</div>
  </div>
</template>

<script>

export default {
  name: 'ScheduleHeader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.schedule-header {
  display: flex;
  border: 1px solid #ddd;
  min-height: 35px;
  width: 100%;
}
.header-item {
  border-right: 1px solid #ddd;
  width: calc(12% - 1px);
  display: flex;
  flex-direction: column;
}
.item-date {
  width: calc(26% - 1px);
}
.no-border {
  border: none;
}
</style>
