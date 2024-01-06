<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { collection, query, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/config'

interface Pic {
  author: string
  date: string
  desc: string
  id: string
  title: string
  url: string
}
const pics = ref<Pic[]>([])

onMounted(async () => {
  const q = query(collection(db, 'pics'))
  onSnapshot(q, (querySnapshot) => {
    const tempPics: Pic[] = []
    querySnapshot.forEach((doc) => {
      tempPics.push({
        id: doc.id,
        ...doc.data(),
      } as Pic)
    })
    pics.value = tempPics
  })
})
</script>

<template>
  <main>
    <div class="container h-screen ">
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
