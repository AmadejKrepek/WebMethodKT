<template>
<div>
{{data}}
    <table class="table" ref="table">
      <thead>
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
          <td v-for="item1 in item.point" :key="item1">{{item.utez*item1}}</td>
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
        data: Object
    }
}
</script>