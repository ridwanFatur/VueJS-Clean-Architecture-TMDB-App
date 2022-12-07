<template>
  <div class="sharing-button-container">
    <div
      class="sharing-button-item whatsapp"
      @click="onClickLink('https://www.whatsapp.com/')"
    >
      <img src="@/assets/ic_whatsapp.svg" />
    </div>
    <div
      class="sharing-button-item twitter"
      @click="onClickLink('https://twitter.com/')"
    >
      <img src="@/assets/ic_twitter.svg" />
    </div>
    <div
      class="sharing-button-item facebook"
      @click="onClickLink('https://www.facebook.com/')"
    >
      <img src="@/assets/ic_facebook.svg" />
    </div>
    <div
      class="sharing-button-item instagram"
      @click="onClickLink('https://www.instagram.com/')"
    >
      <img src="@/assets/ic_instagram.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SharingButtonView",
  methods: {
    onClickLink(link: string) {
      window.open(link, "_blank");
    },
  },
});
</script>

<style scoped>
.sharing-button-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.sharing-button-item {
	width: 8vw;
	height: 8vw;
  max-width: 80px;
  max-height: 80px;
  cursor: pointer;
  transition: 0.3s;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sharing-button-item img {
	width: 5vw;
	height: 5vw;
	max-width: 50px;
	max-width: 50px;
}

.sharing-button-item:hover {
  opacity: 0.5;
}

.whatsapp {
  background-color: #25d366;
}

.twitter {
  background-color: #1dcaff;
}

.facebook {
  background-color: #5c79ff;
}

.instagram {
  background-color: #962fbf;
}

@media only screen and (min-width: 768px) {
  /* For landscape tablets: */
  .sharing-button-container {
    width: 8vw;
		background-color: red;
    display: flex;
    flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		position: fixed;
		right: 0;
		top: 50vh;
		bottom: 50vh;
  }
}
</style>
