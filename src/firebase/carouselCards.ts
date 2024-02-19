import type { Ref } from 'vue'
import { collection, query, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/config'
import type { Photo } from '@/types'

export const getCarouselCards = async (carouselPhotos: Ref<Photo[]>, memberPhotos: string) => {
  const q = query(collection(db, memberPhotos))
  onSnapshot(q, (querySnapshot) => {
    const tempPics: Photo[] = []
    querySnapshot.forEach((doc) => {
      tempPics.push({
        id: doc.id,
        ...doc.data(),
      } as Photo)
    })
    carouselPhotos.value = tempPics
  })
}
