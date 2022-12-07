<template>
  <div class="tvShow-item" @click="$emit('onClickItem', tvShow)">
    <img :src="urlImage(tvShow?.posterPath)" />
    <div class="item-date">{{ tvShow?.firstAirDate }}</div>
    <div class="item-rate">{{ tvShow?.voteAverage }}</div>
    <div v-show="typeof tvShow?.originalName !== undefined" class="item-title">{{ tvShow?.originalName }}</div>
    <!-- <div class="item-season">3 Seasons</div> -->
		<div class="top-content"></div>
  </div>
</template>

<script lang="ts">
import { TvShow } from "@/domain/entities/TvShow";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TvShowView",
  props: {
    tvShow: TvShow,
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


.tvShow-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s ease;
}

.tvShow-item img:hover {
  opacity: 0.3;
}

.tvShow-item {
  background-color: #ababab;
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
  max-lines: 1;
  position: absolute;
}

.item-season {
  top: 70px;
  right: 0;
  background: var(--color-primary);
  padding: 5px 7px;
  font-size: 0.9em;
  text-align: center;
  max-lines: 1;
  position: absolute;
}
</style>
