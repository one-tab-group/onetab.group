import { defineStore } from 'pinia'

interface GlobalState {
  showPricingAlert: boolean
}

export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    showPricingAlert: false
  }),
  actions: {
    setGlobalState(payload: Partial<GlobalState>) {
      Object.assign(this, payload)
    }
  }
})
