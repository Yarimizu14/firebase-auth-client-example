<template>
  <div class="container">Hellow World!!</div>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.categoryDropdown {
  min-width: 15rem;
}

.articles {
  text-align: left;

  .article {
    .title {
      font-size: 1rem;
    }

    .media {
      font-size: 0.6rem;
    }

    .snippet {
      font-size: 0.4rem;
    }

    .articleImg {
      height: 35vh;
    }
  }
}
</style>
