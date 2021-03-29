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
      <div class="col-12 col-lg-4 mt-4">
          <button class="btn btn-success" v-on:click="submitFile()">Submit</button>
          <button class="btn btn-success ml-3" v-on:click="Verify()">Calculate</button>
          <button class="btn btn-success ml-3" v-on:click="Generate()">Generate graphs</button>
      </div>
      <div class="col-12 col-lg-3">
          <input
            class="form-control"
            type="text"
            placeholder="Izberite si parameter"
            v-model="paramSelector"
          />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-12">
        <Graph :data="data" :result="result"/>
      </div>
    </div>
        <div class="row">
      
      <div class="col-12 col-lg-12" v-if="gen === true">
        <WindGraph
          :data="altArr"
          :labels="altTitle"
          :chartId="'chart1'"
          :label="'Alternatives'"
          :borderColor="'rgb(23, 79, 45)'"
          :type="'pie'"
        />
        <WindGraph
          :data="paramArr"
          :labels="paramTitle"
          :chartId="'chart2'"
          :label="'Parameters'"
          :borderColor="'rgb(77, 39, 107)'"
          :type="'pie'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Graph from "./Table";
import MethodKT from "../functions/MethodKT.js";
import WindGraph from "./Chart";

export default {
  name: "KTMethod",
  components: {
    Graph,
    WindGraph
  },
  data() {
    return {
      data: [],
      paramSelector: [],
      alternative: [],
      parameter: [],
      weight: [],
      point: [],
      check: false,
      result: [],
      gen: false,
      altArr: [],
      altTitle: [],
      paramArr: [],
      paramTitle: [],
      paraTitle: [],
    };
  },
  methods: {
    submitFile() {
      let arr = MethodKT.OrganizeData(this.alternative, this.parameter, this.weight, this.point);
      const methodKT = new MethodKT(arr[0], arr[1], arr[2])
      this.result = MethodKT.SumAndFindMaxValue(this.point, this.check, this.weight);
      MethodKT.ParameterAndWeight(this.parameter, this.weight);
      this.data = methodKT;
    },
    Verify() {
      this.check = true;
    },
    Generate() {
      this.altArr = MethodKT.GetAltArray();
      this.altTitle = MethodKT.GetAltTitle();
      this.paramArr = MethodKT.GetParamArray();
      this.paramTitle = MethodKT.GetParamTitle();
      MethodKT.SelectedParam(this.paramSelector);
      this.gen = true;
    }
  },
  props: {},
};
</script>
