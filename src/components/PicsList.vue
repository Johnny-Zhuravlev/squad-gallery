<script setup lang="ts">
import type { Pic } from '../types'

defineProps<{pics: Pic[]}>()
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
    ></v-card>
  </v-row>
</template>

<style scoped></style>
