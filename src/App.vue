<template>
  <div id="app">

    <img src="./assets/eduity-logo.png" alt="eduity-logo">
    <h1>Eduity Fancy Soda Machine!</h1>
    <p><strong>3 Quarters per soda!</strong></p>
    <p><strong>Number of Quarters: {{ quarters }}</strong></p>

    <button class="btn btn-outline-success" @click="addQuarter"> + ADD QUARTER</button>
    <button class="btn btn-outline-danger" @click="ejectQuarters">EJECT QUARTER(S)</button>

    <h3>Sodas</h3>

    <ul>
      <li><button class="btn btn-outline-secondary" v-for="soda in sodas" :key="soda.id" @click="dispenseSoda(soda.id, soda.name, soda.quantity)">{{ soda.name }}</button></li>
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
  min-height: 100vh; /* will cover the 100% of viewport */
  text-align: center;
  color: #2c3e50;
  padding-top: 30px;
  overflow: hidden;
  display: block;
  position: relative;
  background-color: antiquewhite;
}
h3 {
  margin-top: 15px;
}
button {
  margin: 5px;
}
ul {
  list-style-type: none;
}
img {
  max-height: 100px;
  max-width: 100px;
}
</style>
