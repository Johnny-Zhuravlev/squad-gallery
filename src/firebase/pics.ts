import type { Ref } from 'vue'
import { collection, query, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/config'
import type { Pic } from '@/types'

export const getPics = async (pics: Ref<Pic[]>) => {
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
}
