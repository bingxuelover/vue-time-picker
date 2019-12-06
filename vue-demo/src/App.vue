<template>
  <div id="app">
    <TimePicker
      :getOptions="options"
      :timeOccupied="timeOccupied"
      :timeRange="timeRange"
      :defaultStart="defaultStart"
      :defaultEnd="defaultEnd"
      @change-time="changeTime"
    />
    <TimeRangePicker
      :timeOccupied="timeOccupied"
      :timeRange="['08:30:00 - 18:00:00']"
      defaultStart="08:00:00"
      defaultEnd="18:00:00"
      @change-time="changeTime"
    />
  </div>
</template>

<script>
import TimePicker from "./components/TimePicker.vue";
import TimeRangePicker from "./components/TimeRangePicker.vue";
import options from "./json/options.json";

export default {
  name: "app",
  components: {
    TimePicker,
    TimeRangePicker
  },
  data() {
    /***
    options 全部的时间点
    timeRange 时间范围
    timeOccupied 已经占用的时间节点
    ***/
    return {
      defaultStart: "08:30",
      defaultEnd: "18:00",
      timeRange: [["08:30", "18:00"]],
      timeOccupied: [["09:00", "10:00"], ["13:00", "14:30"]],
      options
    };
  },
  methods: {
    changeTime() {
      //获取已经被预定的时间点
      this.timeOccupied = [["09:00", "10:30"], ["13:00", "14:30"]];
    }
  }
};
</script>

<style>
#app {
  font-family: "Microsoft YaHei", Arial, sans-serif;
  color: #333;
}
</style>
