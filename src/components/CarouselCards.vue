<script setup lang="ts">
import type { Photo } from '../types'

defineProps<{ title: string; carouselCards: Photo[] }>()
const emit = defineEmits(['close'])
</script>

<template>
  <v-card :title="`${title} cards`" class="rounded-lg">
    <v-carousel show-arrows="hover" hide-delimiters>
      <v-carousel-item
        v-for="photo in carouselCards"
        :key="photo.id"
        :src="photo.src"
        cover
      >
        <div class="carousel-card-text">{{ photo.title }}</div>
      </v-carousel-item>
    </v-carousel>

    <v-card-actions>
      <span class="mdi mdi-close" @click="emit('close')"></span>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
:deep(.v-card) {
  display: flex;
  align-items: flex-end;
  cursor: pointer;
}

:deep(.v-card-item) {
  opacity: 1 !important;
}

:deep(.v-card-item__content) {
  margin: 0 0 14px;
}

:deep(.v-card-actions) {
  min-height: unset;
  position: absolute;
  right: 0;
  top: 9px;
}

:deep(.v-responsive__content) {
  position: relative;
}

.carousel-card-text {
  padding: 10px;
  font-size: 22px;
  font-weight: 600;
  background: #fff;
  border-radius: 10px 0 0;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
