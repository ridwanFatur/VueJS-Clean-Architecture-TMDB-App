<template>
  <div class="ads-container" v-show="isShow">
    <div class="ads-main-content">
			<button @click="closeAds" class="close-button">X</button>
      <p>{{adsMessage ?? "Ads Message"}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AdsExample",
	props: {
		adsMessage: String,
	},
	data: () => {
		return {
			isShow: true,
		};
	},
	methods: {
		closeAds(){
			this.isShow = false;
		}
	},	
});
</script>

<style scoped>
.close-button{
	border: none;
  cursor: pointer;
  text-decoration: none;
	background-color: var(--color-button);
	color: white;
	padding: 4px;
	transition: 0.3s;
	align-self: flex-end;
	margin-bottom: 10px;
}

.close-button:hover {
  background-color: var(--color-primary);
}

.ads-container {
  padding: 10px;
  width: 100%;
	display: none;
}

.ads-main-content {
  width: 100%;
	padding: 10px;
  border-width: 1px;
  border-color: black;
	border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.ads-main-content p{
	text-align: start;
}

@media only screen and (min-width: 1200px) {
  /* For large desktop  */
	.ads-container{
		display: flex;
	}
}
</style>
