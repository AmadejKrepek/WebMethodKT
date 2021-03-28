<template>
<div>
{{data}}
  <button class="btn btn-success" v-on:click="ShowOnTable()">Submit</button>
    <table class="table" ref="table">
      <thead>
        <tr>
          <th scope="col">Parameter</th>
          <th scope="col">Utež</th>
          <th v-for="item in data.alternative" :key="item">{{item}}</th>
        </tr>
      </thead>
      <tbody v-for="item in data.parameter" :key="item">
        <td>{{item}}</td>
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
        data: Object
    }
}
</script>