<template>
	 <div class="line-screen"></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
	name: "LineView",
});

</script>

<style scoped>
.line-screen {
  width: 100%;
  height: 5px;
  background-color: var(--color-selected);
}

</style>