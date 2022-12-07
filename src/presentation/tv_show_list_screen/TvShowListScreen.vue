<template>
  <div class="container-list">
    <!-- Main -->
    <div class="wrapper-main">
      <div class="main">
        <div class="wrapper-content">
          <!-- Detail Source -->
          <div class="details-source">
            The data on this website comes from the
            <a target="_blank" href="https://www.themoviedb.org/"
              ><u>TMDB API</u></a
            >
          </div>

          <!-- Tv Show List -->
          <div class="details-list">
            <p>Tv Show List</p>
          </div>
          <line-view />

          <network-result-view
            v-if="typeof totalPages === 'undefined'"
            :networkResult="tvShowNetworkResult"
          >
            <template v-slot:hasData>
              <pagination-button-view
                :totalPages="totalPages ?? 1"
                @gotoPage="gotoPage"
              /> </template
          ></network-result-view>

          <pagination-button-view
            v-else
            :totalPages="totalPages ?? 1"
            @gotoPage="gotoPage"
          />

          <network-result-view :networkResult="tvShowNetworkResult">
            <template v-slot:hasData>
              <div class="item-list">
                <tv-show-view
                  v-for="index in tvShowNetworkResult.data?.[0].length"
                  :key="index"
                  :tv-show="tvShowNetworkResult.data?.[0].at(index - 1)"
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

          <network-result-view
            v-if="typeof totalPages === 'undefined'"
            :networkResult="tvShowNetworkResult"
          >
            <template v-slot:hasData>
              <pagination-button-view
                :totalPages="totalPages ?? 1"
                @gotoPage="gotoPage"
              /> </template
          ></network-result-view>

          <pagination-button-view
            v-else
            :totalPages="totalPages ?? 1"
            @gotoPage="gotoPage"
          />
        </div>
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
import TvShowView from "../global_components/TvShowView.vue";
import PaginationButtonView from "../global_components/PaginationButtonView.vue";

// Data
import {
  NetworkResult,
  ResultEmpty,
  ResultHasData,
  ResultLoading,
  ResultError,
} from "@/core/NetworkResult";
import { TvShow } from "@/domain/entities/TvShow";
import { useCaseGetPopularTvShows } from "@/injection";
import { GetPopularTvShowsParams } from "@/domain/usecases/tmdb/GetPopularTvShows";

export default defineComponent({
  name: "TvShowListScreen",
  components: {
    LineView,
    ProgressCircular,
    NetworkResultView,
    TvShowView,
    PaginationButtonView,
  },
  data: () => {
    const tvShowNetworkResult: NetworkResult<[TvShow[], number]> =
      new ResultEmpty();
    const currentPage: number | undefined = 1;
    let totalPages: number | undefined;

    return {
      tvShowNetworkResult: tvShowNetworkResult,
      page: currentPage,
      totalPages: totalPages,
    };
  },
  methods: {
    onClickTvShow(tvShow: TvShow) {
      window.open("https://www.themoviedb.org/", "_blank");
    },
    async loadTvShow(currentPage: number) {
      this.tvShowNetworkResult = new ResultLoading();
      const result = await useCaseGetPopularTvShows.call(
        new GetPopularTvShowsParams({ page: currentPage })
      );

      if (result.left != undefined) {
        this.tvShowNetworkResult = new ResultError(result.left.message);
      } else if (result.right != undefined) {
        this.totalPages = result.right[1];
        this.tvShowNetworkResult = new ResultHasData(result.right);
      }
    },
    gotoPage(toPage: number) {
      if (this.page !== toPage) {
        this.$router.push({ path: `/tv-shows/${toPage}` });
      }
    },
    onParamChanged() {
      if (this.$route.name == "TvShowsScreen") {
        const currentPage: number = parseInt(
          this.$route.params["page"] as string
        );

        this.page = currentPage;
        this.loadTvShow(this.page);
      } 
    },
  },
  mounted() {
    const currentPage: number = parseInt(this.$route.params["page"] as string);
    this.page = currentPage;
    this.loadTvShow(currentPage);
  },
  watch: {
    "$route.params": "onParamChanged",
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

.container-list {
  display: flex;
  flex-direction: column;
}

.main {
  background-color: var(--color-container);
  padding: 25px 30px 25px 30px;
	min-height: 1000px;
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
}
</style>
