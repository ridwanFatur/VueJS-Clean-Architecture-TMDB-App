<template>
  <div>
    <div v-if="isNetworkResultHasData(networkResult)">
      <slot name="hasData"></slot>
    </div>

    <div v-if="isNetworkResultError(networkResult)">
      <slot name="error"></slot>
    </div>
    <div v-else-if="isNetworkResultLoading(networkResult)">
      <slot name="loading"></slot>
    </div>

    <div v-else>
      <slot name="empty"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  NetworkResult,
  ResultEmpty,
  ResultHasData,
  ResultLoading,
  ResultError,
} from "@/core/NetworkResult";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NetworkResultView",
  props: {
    networkResult: NetworkResult,
  },
  methods: {
    // Network Result Method
    isNetworkResultHasData(networkResult?: NetworkResult<any>): boolean {
      return networkResult instanceof ResultHasData;
    },

    isNetworkResultLoading(networkResult?: NetworkResult<any>): boolean {
      return networkResult instanceof ResultLoading;
    },

    isNetworkResultEmpty(networkResult?: NetworkResult<any>): boolean {
      return networkResult instanceof ResultEmpty;
    },

    isNetworkResultError(networkResult?: NetworkResult<any>): boolean {
      return networkResult instanceof ResultError;
    },
  },
});
</script>

<style scoped></style>
