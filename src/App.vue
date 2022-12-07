<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Segoe UI;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  all: unset;
	cursor: pointer;
}

body {
  padding: 0;
  margin: 0;
}

:root {
  --color-primary: #b0aeef;
  --color-secondary: #8684c7;

  --color-selected: #6462a6;
  --color-container: #c1d7f8;
  --color-button: #a8c0e3;
  --color-list: #a8c0e3;
  --color-season: #7a7ae150;
  --color-credit: #b0aeef;
  --color-line-credit: #9391bf;

  --color-tmdb-link: #a0b4d2;
}
</style>
