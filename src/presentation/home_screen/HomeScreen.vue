<template>
  <div class="container">
    <!-- Main -->
    <div class="wrapper-main">
      <div class="ads">
        <ads-example-view
          ads-message="This is Example Ads Message, bla.. bla.. bla.. , here here here"
        />
      </div>
      <div class="main">
        <div class="wrapper-content">
          <!-- Detail Source -->
          <div class="details-source">
            The data on this website comes from the
            <a target="_blank" href="https://www.themoviedb.org/"
              ><u>TMDB API</u></a
            >
          </div>

          <!-- Movie List -->
          <div class="details-list">
            <p>Movie List</p>
            <button @click="onClickCheckOtherMovies">Check Other Movies</button>
          </div>
          <line-view />

          <network-result-view :networkResult="movieNetworkResult">
            <template v-slot:hasData>
              <div class="item-list">
                <movie-view
                  v-for="index in movieNetworkResult.data?.[0].length"
                  :key="index"
                  :movie="movieNetworkResult.data?.[0].at(index - 1)"
                  @onClickItem="onClickMovie"
                />
              </div>
            </template>

            <template v-slot:error>
              <div class="error-section">
                <p>{{ movieNetworkResult?.message }}</p>
              </div>
            </template>

            <template v-slot:loading>
              <div class="loading-section">
                <progress-circular />
              </div>
            </template>

            <template v-slot:empty>
              <div></div>
            </template>
          </network-result-view>

          <!-- Tv Show List -->
          <div class="details-list" style="margin-top: 40px">
            <p>Tv Show List</p>
            <button @click="onClickCheckOtherTvShows">
              Check Other Tv Shows
            </button>
          </div>
          <line-view />

          <network-result-view :networkResult="tvShowNetworkResult">
            <template v-slot:hasData>
              <div class="item-list">
                <tv-show-view
                  v-for="index in tvShowNetworkResult.data?.[0].length"
                  :key="index"
                  :tvShow="tvShowNetworkResult.data?.[0].at(index - 1)"
                  @onClickItem="onClickTvShow"
                />
              </div>
            </template>

            <template v-slot:error>
              <div class="error-section">
                <p>{{ tvShowNetworkResult?.message }}</p>
              </div>
            </template>

            <template v-slot:loading>
              <div class="loading-section">
                <progress-circular />
              </div>
            </template>

            <template v-slot:empty>
              <div></div>
            </template>
          </network-result-view>
        </div>

        <!-- TMDB -->
        <tmdb-link-view />
      </div>
      <div class="ads">
        <ads-example-view
          ads-message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis mauris vitae sem feugiat ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam congue metus turpis, sit amet commodo mauris dignissim vitae. Cras commodo turpis sit amet magna lobortis, quis consectetur nibh malesuada. Nulla faucibus mi sit amet mi maximus condimentum. Maecenas auctor est semper, tincidunt mauris quis, aliquet dui. Fusce id tempor diam. Praesent commodo eget lectus quis rutrum. Suspendisse quis felis ac sem pellentesque ultrices sit amet sed lacus. Morbi tristique pretium quam, nec elementum lacus volutpat nec. Pellentesque molestie consectetur semper."
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// View
import LineView from "../global_components/LineView.vue";
import ProgressCircular from "../global_components/ProgressCircular.vue";
import NetworkResultView from "../global_components/NetworkResultView.vue";
import MovieView from "../global_components/MovieView.vue";
import TmdbLinkView from "./components/TmdbLinkView.vue";
import TvShowView from "../global_components/TvShowView.vue";
import AdsExampleView from "../global_components/AdsExampleView.vue";

// Data
import {
  NetworkResult,
  ResultEmpty,
  ResultHasData,
  ResultLoading,
  ResultError,
} from "@/core/NetworkResult";
import { Movie } from "@/domain/entities/Movie";
import { TvShow } from "@/domain/entities/TvShow";

import {
  GetPopularMoviesParams,
} from "@/domain/usecases/tmdb/GetPopularMovies";

import { useCaseGetPopularMovies, useCaseGetPopularTvShows } from "@/injection";
import { GetPopularTvShowsParams } from "@/domain/usecases/tmdb/GetPopularTvShows";

export default defineComponent({
  name: "HomeScreen",
  components: {
    LineView,
    ProgressCircular,
    NetworkResultView,
    MovieView,
    TmdbLinkView,
    TvShowView,
    AdsExampleView,
  },
  data: () => {
    const movieNetworkResult: NetworkResult<[Movie[], number]> = new ResultEmpty();
    const tvShowNetworkResult: NetworkResult<[TvShow[], number]> = new ResultEmpty();

    return {
      movieNetworkResult: movieNetworkResult,
      tvShowNetworkResult: tvShowNetworkResult,
    };
  },
  methods: {
    onClickMovie(movie: Movie) {
      window.open("https://www.themoviedb.org/", "_blank");
    },
    onClickTvShow(tvShow: TvShow) {
      window.open("https://www.themoviedb.org/", "_blank");
    },
    onClickCheckOtherMovies() {
      this.$router.push({ path: "/movies" });
    },
    onClickCheckOtherTvShows() {
      this.$router.push({ path: "/tv-shows" });
    },
    async loadMovie() {
      this.movieNetworkResult = new ResultLoading();
      const result = await useCaseGetPopularMovies.call(
        new GetPopularMoviesParams({page: 1})
      );

      if (result.left != undefined) {
        this.movieNetworkResult = new ResultError(result.left.message);
      } else if (result.right != undefined) {
        this.movieNetworkResult = new ResultHasData(result.right);
      }
    },
    async loadTvShow() {
      this.tvShowNetworkResult = new ResultLoading();
      const result = await useCaseGetPopularTvShows.call(
        new GetPopularTvShowsParams({page: 1})
      );

      if (result.left != undefined) {
        this.tvShowNetworkResult = new ResultError(result.left.message);
      } else if (result.right != undefined) {
        this.tvShowNetworkResult = new ResultHasData(result.right);
      }
    },
  },
  mounted() {
    this.loadMovie();
    this.loadTvShow();
  },
});
</script>

<style scoped>
.error-section {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-section {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
}

.main {
  background-color: var(--color-container);
  padding: 25px 30px 25px 30px;

  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
}

.details-list {
  display: flex;
  flex-direction: row;
  background-color: var(--color-secondary);
  padding: 5px 10px;
  justify-content: space-between;
  align-items: center;
}

.details-list p {
  color: white;
  font-weight: bold;
}

.details-list button {
  background-color: var(--color-button);
  color: white;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  padding: 5px 10px;
  transition: 0.3s;
}

.details-list button:hover {
  background-color: var(--color-primary);
}

.details-source {
  background-color: var(--color-primary);
  color: white;
  font-size: 1rem;
  padding: 8px 12px;
  text-align: center;
}

.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  column-gap: 10px;
  row-gap: 20px;
  padding: 10px 10px;
  background-color: var(--color-list);
}

@media only screen and (min-width: 768px) {
  /* For landscape tablets: */
  .item-list {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }

  .main {
    width: 100%;
    max-width: 1000px;
    grid-template-columns: 5fr 3fr;
    column-gap: 20px;
    margin-top: 20px;
  }

  .wrapper-main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }

  .ads {
    flex: 1;
  }
}
</style>
