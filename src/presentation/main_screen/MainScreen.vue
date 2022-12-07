<template>
  <div class="container">
    <div class="header">TMDB App Portofolio</div>

    <!-- Menus -->
    <menu-view />
    <line-view />

    <!-- Content -->
    <div style="min-height: 700px;">
      <router-view></router-view>
    </div>

    <!-- Credit -->
    <line-view />
    <credit-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuView from "@/presentation/main_screen/components/MenuView.vue";
import LineView from "../global_components/LineView.vue";
import CreditView from "../global_components/CreditView.vue";

export default defineComponent({
  name: "MainScreen",
  components: {
    MenuView,
    LineView,
    CreditView,
  },
});
</script>

<style scoped>
.header {
  background-color: var(--color-primary);
  color: white;
  padding: 30px 10px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}
</style>
