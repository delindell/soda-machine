<template>
<div id="app">
    <h1>Eduity Fancy Soda Machine!</h1>
    <p>75 cents per soda! (Only Accepts Quarters)</p>
    <p>Number of Quarter {{ quarters }}</p>

    <button @click="addQuarter"> + ADD QUARTER</button>
    <button @click="ejectQuarters">EJECT QUARTERS</button>
    <ul>
      <li class="list-group-item" v-for="soda in sodas" :key="soda.id"><button>{{ soda.name }}</button></li>
    </ul>
  </div>
</template>

<script>
import sodaData from './helpers/data/sodaData.js';


export default {
  name: 'App',
  data() {
    return {
      quarters: 0,
      sodas: []
    }
  },
  methods: {
    addQuarter() {
      this.quarters ++
    },
    ejectQuarters() {
      this.quarters = 0
    },
    getTheSodas() {
      sodaData.getSodas()
        .then((results) => { this.sodas = results })
        .catch((err) => console.error('error getting sodas', err));
    },
  },
  mounted() {
    this.getTheSodas();
    console.log('mounted');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  margin: 5px;
}
</style>
