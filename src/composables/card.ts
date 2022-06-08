import { ref } from 'vue'

export function useCard() {
  const isShowing = ref(false)

  function toggleShowing(value: boolean) {
    isShowing.value = value
  }

  return {
    isShowing,
    toggleShowing,
  }
}
