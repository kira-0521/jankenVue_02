<template>
  <div class="main">
    <h2>せいせき</h2>
    <button @click="clear">クリア</button>
    <ol>
      <li
        v-for="score in scores"
        :key="score"
      >
      {{ score }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    scores: Array,
  },
  watch: {
    scores: function() {
      localStorage.setItem('janken', this.scores);
    }
  },
  methods: {
    clear() {
      localStorage.removeItem('janken');
      this.$emit('riset-scores');
    }
  }

}
</script>

<style>

</style>