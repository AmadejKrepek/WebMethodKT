<template>
  <canvas :id="chartId"></canvas>
</template>
<script>
import CreateChart from "../functions/CreateChart.js";
export default {
  name: "Home",
  components: {},
  methods: {},
  mounted() {
    CreateChart(this.chartId, this.data, this.labels, this.label, this.borderColor, this.type);
  },
  props: {
    data: Array,
    labels: Array,
    chartId: String,
    label: String,
    borderColor: String,
    type: String
  },
};
</script>