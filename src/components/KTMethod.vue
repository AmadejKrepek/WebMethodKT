<template>
  <div class="container">
  <div class="row">
    <div class="col-12 col-lg-12 mt-3">
      <h1>Kalkulator metode Kepner-Tregoe (K-T)</h1>
    </div>
  </div>
    <div class="row mt-4 bg-light p-4 border border-primary rounded">
      <div class="col-12 col-lg-3">
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            placeholder="Zapišite alternative"
            v-model="alternative"
          />
          <input
            class="form-control mt-2"
            type="text"
            placeholder="Zapišite parametre"
            v-model="parameter"
          />
          <input
            class="form-control mt-2"
            type="text"
            placeholder="Zapišite uteži"
            v-model="weight"
          />
          <input
            class="form-control mt-2"
            type="text"
            placeholder="Zapišite točke"
            v-model="point"
          />
        </div>
      </div>
      <div class="col-12 col-lg-5 mt-1">
        <button class="btn btn-success" v-on:click="submitFile()">Submit</button>
        <button class="btn btn-success ml-3" v-on:click="Verify()">Calculate</button>
        <button class="btn btn-success ml-3" v-on:click="Generate()">
          Generate graphs
        </button>
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
    <div class="row mt-2">
      <div class="col-12 col-lg-12">
          <p>Tabelarični prikaz podatkov</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-12">
        <Graph :data="data" :result="result" :checkMax="check" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-12 mt-2" v-if="gen === true">
        <h3>Primerjava alternativ</h3>
        <WindGraph
          :data="altArr"
          :labels="altTitle"
          :chartId="'chart1'"
          :label="'Alternatives'"
          :borderColor="'rgb(23, 79, 45)'"
          :type="'pie'"
        />
        <h3 class="mt-4">Parametri</h3>
        <WindGraph
          :data="paramArr"
          :labels="paramTitle"
          :chartId="'chart2'"
          :label="'Parameters'"
          :borderColor="'rgb(77, 39, 107)'"
          :type="'pie'"
        />
        <h3 class="mt-4">Prikaz občutljivosti izbranega parametra</h3>
        <apexchart
          type="line"
          :options="chartOptions"
          :series="seriesData"
        ></apexchart>
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
    WindGraph,
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
      seriesData: [],
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
      },
    };
  },
  methods: {
    submitFile() {
      let arr = MethodKT.OrganizeData(
        this.alternative,
        this.parameter,
        this.weight,
        this.point
      );
      const methodKT = new MethodKT(arr[0], arr[1], arr[2]);
      this.result = MethodKT.SumAndFindMaxValue(this.point, this.check, this.weight);
      MethodKT.ParameterAndWeight(this.parameter, this.weight);
      this.data = methodKT;
      //Clear all values after submitting button
      this.alternative = "";
      this.parameter = "";
      this.weight = "";
      this.point = "";
    },
    Verify() {
      this.check = true;
    },
    Generate() {
      this.altArr = MethodKT.GetAltArray();
      this.altTitle = MethodKT.GetAltTitle();
      this.paramArr = MethodKT.GetParamArray();
      this.paramTitle = MethodKT.GetParamTitle();
      this.seriesData = MethodKT.SelectedParam(this.paramSelector);
      this.gen = true;
    },
  },
};
</script>
