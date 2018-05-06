<template>
  <div class="panel">
    <div class="timers">
      <div class="timer">
        <a v-bind:class="activeClassFirst">{{formatFirst}}</a>
      </div>
      {{' | '}}
      <div class="timer">
        <a v-bind:class="activeClassSecond">{{formatSecond}}</a>
      </div>
    </div>
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
const calculateTime = (time) => {
  const minutes = Math.floor(time / 6000);
  const formattedMinutes = (`0${minutes}`).slice(-2);
  const seconds = Math.floor((time - (6000 * minutes)) / 100);
  const formattedSeconds = (`0${seconds}`).slice(-2);
  const milliseconds = (time - (6000 * minutes) - (100 * seconds));
  const formattedMilliseconds = (`0${milliseconds}`).slice(-2);
  return `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
};

export default {
  name: 'TimerPanel',
  methods: {
    start() {
      this.$store.dispatch('start');
    },
    stop() {
      this.$store.dispatch('stop');
    },
    reset() {
      this.stop();
      this.$store.dispatch('reset');
    },
  },
  computed: {
    formatFirst() {
      return `${calculateTime(this.$store.state.first.time)}`;
    },
    formatSecond() {
      return `${calculateTime(this.$store.state.second.time)}`;
    },
    switchButtonId() {
      return this.$store.state.first.active ? 2 : 1;
    },
    activeClassFirst() {
      return {
        active: this.$store.state.first.active,
      };
    },
    activeClassSecond() {
      return {
        active: this.$store.state.second.active,
      };
    },
  },
  created() {
    this.start();
  },
};
</script>

<style scoped>
.timers {
  font-size: 250%;
  padding: 27px 10px;
}

.timer {
  display: inline-block;
  margin: 15px;
}

a {
  padding: 5px;
  border: 1px solid white;
}

.active {
  border: 1px solid #42b983;
  padding: 5px;
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
