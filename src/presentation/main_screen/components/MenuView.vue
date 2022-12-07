<template>
  <div class="wrapper-menu">
    <div class="header-menu">
      <div class="menus">
        <router-link to="/home" class="menu">Home</router-link>
        <custom-router-link
          to="/movies/1"
          class="menu"
          routeName="MovieListScreen"
          >Movie List</custom-router-link
        >
        <custom-router-link
          to="/tv-shows/1"
          class="menu"
          routeName="TvShowsScreen"
          >Tv Show List</custom-router-link
        >
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search Movies/Tv Shows" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomRouterLink from "./CustomRouterLink.vue";

export default defineComponent({
  name: "MenuView",
  components: {
    CustomRouterLink,
  },
});
</script>

<style scoped>
.menus {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.menus .menu {
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: left;
  display: flex;
  align-items: center;
  transition: 0.3s;
}

.menus .menu.router-link-active {
  background-color: var(--color-selected);
}

.menus .menu:hover {
  background-color: var(--color-selected);
}

/* .menus .menu.selected {
  background-color: var(--color-selected);
} */

.search-box {
  padding: 10px 15px;
}

.search-box input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
}

.search-box input[type="text"]:focus {
  outline: none;
}

.wrapper-menu {
  background-color: var(--color-secondary);
}

@media only screen and (min-width: 768px) {
  /* For landscape tablets: */
  .menus {
    display: flex;
    flex-direction: row;
  }

  .wrapper-menu {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .header-menu {
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }

  .search-box input[type="text"] {
    box-sizing: border-box;
    width: 250px;
    padding: 8px 10px;
  }
}
</style>
