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
          <input
            class="form-control"
            type="text"
            placeholder="Zapišite uteži"
            v-model="weight"
          />
          <input
            class="form-control"
            type="text"
            placeholder="Zapišite točke"
            v-model="point"
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
import Graph from "./Table";
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
      weight: [],
      point: [],
    };
  },
  methods: {
    submitFile() {
      let arr = MethodKT.OrganizeData(this.alternative, this.parameter, this.weight, this.point);
      const methodKT = new MethodKT(arr[0], arr[1], arr[2])
      this.data = methodKT;
      console.log(methodKT)
    },
  },
  props: {},
};
</script>
