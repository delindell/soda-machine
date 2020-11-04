<template>
<div id="app">
    <h1>Eduity Fancy Soda Machine!</h1>
    <p>3 Quarters per soda!</p>
    <p>Number of Quarters: {{ quarters }}</p>

    <button @click="addQuarter"> + ADD QUARTER</button>
    <button @click="ejectQuarters">EJECT QUARTERS</button>
    <ul>
      <li class="list-group-item"><button v-for="soda in sodas" :key="soda.id" @click="dispenseSoda(soda.id, soda.name, soda.quantity)">{{ soda.name }}</button></li>
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
    dispenseSoda(sodaId, sodaName, sodaQuantity) {
      if (sodaQuantity === 0) {
        alert(`${sodaName} is sold out!`)
      }
      else if (this.quarters === 3 && sodaQuantity >= 1) {
        this.quarters = 0;
        const newSodaAmount = sodaQuantity - 1;
        alert(`Enjoy your ${sodaName}!`);
        const updatedSoda = {
          name: sodaName,
          quantity: newSodaAmount
        };
        sodaData.updateSodaQuantity(sodaId, updatedSoda);
      }
      else if (this.quarters < 3 && sodaQuantity >= 1) {
        alert('Insert more quarters!');
      }
      else if (this.quarters > 3 && sodaQuantity >= 1) {
        this.quarters = this.quarters - 3;
        const newSodaAmount = sodaQuantity - 1;
        console.log(newSodaAmount);
        alert(`Enjoy your ${sodaName}!`);
        const updatedSoda = {
          name: sodaName,
          quantity: newSodaAmount
        };
        sodaData.updateSodaQuantity(sodaId, updatedSoda);
      }
    },
    getTheSodas() {
      sodaData.getSodas()
        .then((data) => { this.sodas = data })
        .catch((err) => console.error('error getting sodas', err));
    },
  },
  mounted() {
    this.getTheSodas();
  },
};
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
ul {
  list-style-type: none;
}
</style>
