<template>
  <div class="footer-credit">
    <div class="wrapper-credit" style="padding-bottom: 20px; padding-top: 20px;">
      <div class="credit" >
        <div class="credit-item">
          <p>About</p>
          <line-view
            style="
              background-color: var(--color-line-credit);
              height: 3px;
              margin-top: 10px;
            "
          />
          <a
            style="font-size: 17px; font-weight: normal; margin-top: 10px"
            target="_blank"
            href="https://www.themoviedb.org/"
          >
            Using TMDB API
          </a>
        </div>
				<div style="height:20px"></div>
        <div class="credit-item">
          <p>Info</p>
          <line-view
            style="
              background-color: var(--color-line-credit);
              height: 3px;
              margin-top: 10px;
            "
          />
          <a
            style="font-size: 17px; font-weight: normal; margin-top: 10px"
            target="_blank"
            href="https://www.linkedin.com/in/ridwanfatur/"
          >
            Linked In
          </a>
          <a
            style="font-size: 17px; font-weight: normal; margin-top: 10px"
            target="_blank"
            href="https://github.com/ridwanFatur"
          >
            Github
          </a>
        </div>
				<div style="height:20px"></div>
      </div>

			<sharing-button-view />
    </div>

    <div
      style="
        color: white;
        background-color: black;
        padding: 10px 10px;
        text-align: center;
      "
    >
      By Ridwan Faturrahman - 2022
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LineView from "@/presentation/global_components/LineView.vue";
import SharingButtonView from "./SharingButtonView.vue";

export default defineComponent({
  name: "CreditView",
  components: {
    LineView,
		SharingButtonView,
  },
});
</script>

<style scoped>
.wrapper-credit {
  background-color: var(--color-credit);
}

.credit-item {
  color: white;
  font-weight: bold;
	margin: 0px 15px 0px 15px;
  display: flex;
  flex-direction: column;
	align-items: flex-start;
}

@media only screen and (min-width: 768px) {
  /* For landscape tablets: */
  .credit {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1000px;
  }

  .wrapper-credit {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .credit-item {
    flex: 1;
  }
}
</style>
