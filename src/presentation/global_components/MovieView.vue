<template>
  <div class="movie-item" @click="$emit('onClickItem', movie)">
    <img :src="urlImage(movie?.posterPath)" />
    <div class="item-date">{{ movie?.releaseDate }}</div>
    <div class="item-rate">{{ movie?.voteAverage }}</div>
    <div class="item-title">{{ movie?.originalTitle }}</div>
    <div class="top-content"></div>
  </div>
</template>

<script lang="ts">
import { Movie } from "@/domain/entities/Movie";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieView",
  props: {
    movie: Movie,
  },
  methods: {
    urlImage(posterPath?: string): string {
      return `https://image.tmdb.org/t/p/w185${posterPath}`;
    },
  },
});
</script>

<style scoped>
.top-content {
  transition: 0.5s ease;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
}

.top-content:hover {
  background-color: rgba(184, 176, 176, 0.7);
}

.movie-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.movie-item {
  color: white;
  width: 100%;
  aspect-ratio: 6/7;
  cursor: pointer;
  position: relative;
}

.item-date {
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px 7px;
  font-size: 0.9em;
  position: absolute;
}

.item-rate {
  top: 35px;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px 7px;
  font-size: 0.9em;
  position: absolute;
}

.item-title {
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px 7px;
  font-size: 0.9em;
  text-align: center;
  position: absolute;
}
</style>
