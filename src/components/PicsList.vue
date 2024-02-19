<script setup lang="ts">
import type { Pic } from '../types'

defineProps<{ pics: Pic[] }>()
const emits = defineEmits(['open-photo']);
</script>

<template>
  <v-row class="flex-wrap pa-4 ga-2 justify-lg-space-between">
    <v-card
      v-for="pic of pics"
      :key="pic.id"
      width="310"
      height="310"
      :image="pic.url"
      :title="pic.title"
      prepend-icon="mdi-camera"
      theme="dark"
      @click="emits('open-photo', pic)"
    ></v-card>
  </v-row>
</template>

<style scoped>
:deep(.v-card) {
  display: flex;
  align-items: flex-end;
  cursor: pointer;
}
:deep(.v-card:hover) .v-card-item {
  opacity: 1;
}

:deep(.v-card-item) {
  width: 100%;
  opacity: 0;
  transition: all .2s linear;
  backdrop-filter: blur(2px);
}
</style>
