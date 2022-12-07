<template>
	<div class="container">
		<h1>404</h1>
		<p>Page Not Found</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "NotFoundScreen",

});
</script>

<style scoped>
.container{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
}

.container h1{
	font-size: 200px;
	font-weight: bold;
	color: black;
}

.container p{
	font-size: 40px;
	font-weight: bold;
	color: black;
}
</style>