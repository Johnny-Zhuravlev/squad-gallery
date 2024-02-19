<script setup lang="ts">
import { ref } from 'vue'
import type { Pic } from '../types'
import type { Photo } from '../types'
import { getCarouselCards } from '@/firebase/carouselCards'
import CarouselCards from './CarouselCards.vue'
import Spinner from './Spinner.vue'

defineProps<{ pics: Pic[] }>()
const memberName = ref<string>('')
const memberCards = ref<string>('')
const carouselPhotos = ref<Photo[]>([])
const showMemberPics = async (pic: any) => {
  memberName.value = pic.author
  memberCards.value = pic.carousel_cards

  if (memberCards.value) {
    await getCarouselCards(carouselPhotos, memberCards.value)
  } else {
    return 'err'
  }
}

const closeCarouselModal = () => {
  memberName.value = ''
  memberCards.value = ''
  carouselPhotos.value = []
}
</script>

<template>
  <v-row class="flex-wrap pa-4 ga-2 justify-lg-space-between">
    <v-dialog width="800">
      <template v-slot:activator="{ props }">
        <v-card
          v-bind="props"
          v-for="pic of pics"
          :key="pic.id"
          width="310"
          height="310"
          class="rounded-lg overflow-hidden"
          :image="pic.url"
          :title="pic.title"
          prepend-icon="mdi-camera"
          theme="dark"
          @click="showMemberPics(pic)"
        ></v-card>
      </template>

      <template v-slot:default="{ isActive }">
        <CarouselCards
          v-if="carouselPhotos?.length"
          :carousel-cards="carouselPhotos"
          :title="memberName"
          @close="closeCarouselModal, isActive.value = false"
        />

        <Spinner v-else />
      </template>
    </v-dialog>
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
  transition: all 0.2s linear;
  backdrop-filter: blur(2px);
}
</style>
