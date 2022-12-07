<template>
  <div :class="{ 'router-link-active': isActiveRoute }" @click="gotoPage">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CustomRouterLink",
  props: {
    to: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return {
      isActive: false,
    };
  },
  methods: {
    gotoPage() {
      this.$router.push({ path: `${this.to}` });
    },
  },
  computed: {
    isActiveRoute(): boolean {
      if (this.$route.name == this.routeName) {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>

<style scoped></style>
