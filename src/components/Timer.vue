<template>
  <div class="timer">
    <a>{{formatTime}}</a>
    <br />
    <br />
    <button v-on:click="start">start</button>
    {{' '}}
    <button v-on:click="stop">stop</button>
    {{' '}}
    <button v-on:click="reset">reset</button>
    {{' '}}
    <router-link :to="{ path: `${switchButtonId}` }" tag="button">switch</router-link>
  </div>
</template>

<script>
const computeTime = (time) => {
  const minutes = Math.floor(time / 6000);
  const formattedMinutes = (`0${minutes}`).slice(-2);
  const seconds = ((time - (6000 * minutes)) / 100).toFixed(2);
  return `${formattedMinutes}:${seconds}`;
};

export default {
  name: 'Timer',
  created() {
    this.$store.dispatch('start');
  },
  methods: {
    start() {
      this.$store.dispatch('start');
    },
    stop() {
      this.$store.dispatch('stop');
    },
    reset() {
      this.$store.commit('reset');
    },
  },
  computed: {
    formatTime() {
      return `${computeTime(this.$store.state.first)}  |  ${computeTime(this.$store.state.second)}`;
    },
    switchButtonId() {
      return this.$store.state.firstActive ? 2 : 1;
    }
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
