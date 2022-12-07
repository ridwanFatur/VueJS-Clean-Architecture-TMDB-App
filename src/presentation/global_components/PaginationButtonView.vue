<template>
  <div class="pagination-container">
    <div v-for="(item, index) of paginationButtonList" :key="index">
      <div
        class="pagination-item"
        :class="{ selected: item == currentPage }"
        @click="$emit('gotoPage', item)"
      >
        <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PaginationButtonView",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
  },
  data: () => {
    return {};
  },
  computed: {
    currentPage(): number {
      const currentPage: number = parseInt(
        this.$route.params["page"] as string
      );
      return currentPage;
    },
    paginationButtonList(): number[] {
      const currentPage: number = parseInt(
        this.$route.params["page"] as string
      );

      const list: number[] = [];

      for (let i = -4; i < 5; i++) {
        const numberPage = currentPage + i;
        if (numberPage <= this.totalPages && numberPage >= 1) {
          list.push(numberPage);
        }
      }

      return list;
    },
  },
});
</script>

<style scoped>
.pagination-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
	flex-wrap: wrap;
}

.pagination-item {
  width: min-content;
  display: flex;
  padding: 10px;
  transition: 0.3s;
  background-color: var(--color-primary);
  color: white;
  cursor: pointer;
}

.pagination-item:hover {
  background-color: var(--color-button);
}

.selected {
  background-color: var(--color-selected);
}
</style>
