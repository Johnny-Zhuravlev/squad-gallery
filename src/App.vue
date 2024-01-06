<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Pic } from './types'
import { getPics } from '@/firebase/pics'
import PicsList from './components/PicsList.vue'

const pics = ref<Pic[]>([])

onMounted(async () => {
  getPics(pics)
})
</script>

<template>
  <main>
    <div class="container h-screen">
      <PicsList :pics="pics" />
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1400px;
  padding: 40px;
  margin: 0 auto;
}
</style>
