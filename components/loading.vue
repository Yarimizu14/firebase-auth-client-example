<template>
  <div v-if="loading" class="loading-page">
    <b-spinner
      variant="primary"
      class="spinner"
      label="Large Spinner"
    ></b-spinner>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 10;

  .spinner {
    width: 4rem;
    height: 4rem;
  }
}
</style>
