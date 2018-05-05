<template>
  <div class="timer">
    <a>{{this.$store.state.first}}{{'  :  '}}{{this.$store.state.second}}</a>
    <br />
    <button v-on:click="start">start</button>
    {{' '}}
    <button v-on:click="stop">stop</button>
  </div>
</template>

<script>

export default {
  name: 'Timer',
  /* created() {
    this.$store.dispatch('start');
  }, */
  methods: {
    start() {
      this.$store.dispatch('start');
    },
    stop() {
      this.$store.dispatch('stop');
    },
  },
};
</script>

<style scoped>
a {
  font-size: 250%;
}

button {
    background-color: #42b983;
    border: none;
    color: white;
    padding: 10px 27px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>
