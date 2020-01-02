import Vue from 'vue'
import TimePicker from "./components/TimePicker.vue";
import TimeRangePicker from "./components/TimeRangePicker.vue";

const install = (Vue) => {
  Vue.component('time-picker', TimePicker)
  Vue.component('time-range-picker', TimeRangePicker)
}

export default install;
