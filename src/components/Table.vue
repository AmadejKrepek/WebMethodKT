<template>
<div>
    <table class="table" ref="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Parameter</th>
          <th scope="col">Utež</th>
          <th v-for="item in data.alternative" :key="item">{{item.alt}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data.parameter" :key="item">
          <td>{{item.param}}</td>
          <td>{{item.utez}}</td>
          <td v-for="item1 in item.point" :key="item1">{{item1}}</td>
        </tr>
        <tr>
          <td><span v-if="checkMax === true">Result:</span></td>
          <td></td>
          <td v-for="item in result" :key="item">
            <span v-if="Math.max(...result) === item">
              <b>{{item}}</b>
            </span>
            <span v-else>
              {{item}}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: "Graph",
    methods: {
        ShowOnTable() {
        }
    },
    data() {
        return {
            param: null,
        };
    },
    props: {
        data: Object,
        result: Array,
        maxValue: Number,
        checkMax: Boolean,
    }
}
</script>