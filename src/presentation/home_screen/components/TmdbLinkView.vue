<template>
  <a class="tmdb-link" target="_blank" href="https://www.themoviedb.org/">
    <p>TMDB Website</p>
    <img src="@/assets/ic_tmdb.svg" />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TmdbLinkView",
});
</script>

<style scoped>
.tmdb-link {
  background-color: var(--color-tmdb-link);
  color: white;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: 0.3s;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.tmdb-link img {
  width: 50px;
  height: 50px;
}

.tmdb-link:hover {
  background-color: var(--color-secondary);
}

@media only screen and (min-width: 768px) {
  /* For landscape tablets: */

  .tmdb-link {
    align-self: flex-start;
  }
}
</style>
