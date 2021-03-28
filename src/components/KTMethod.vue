<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-3">
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            placeholder="Zapišite alternative"
            v-model="alternative"
          />
          <input
            class="form-control"
            type="text"
            placeholder="Zapišite parametre"
            v-model="parameter"
          />
        </div>
      </div>
      <div class="col-12 col-lg-2 mt-4">
          <button class="btn btn-success" v-on:click="submitFile()">Submit</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-12">
        <Graph :data="data"/>
      </div>
    </div>
  </div>
</template>

<script>
import Graph from "./Graph";
import MethodKT from "../functions/MethodKT.js";

export default {
  name: "KTMethod",
  components: {
    Graph,
  },
  data() {
    return {
      data: [],
      alternative: [],
      parameter: [],
    };
  },
  methods: {
    submitFile() {
      let arr = MethodKT.OrganizeData(this.alternative, this.parameter);
      const methodKT = new MethodKT(arr[0], arr[1])
      this.data = methodKT;
      console.log(methodKT)
    },
  },
  props: {},
};
</script>
