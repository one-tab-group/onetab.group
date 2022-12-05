import { defineStore } from 'pinia'

interface GlobalState {
  showPricingAlert: boolean
  showOpenTabsAlert: boolean
}

export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    showPricingAlert: false,
    showOpenTabsAlert: false
  }),
  actions: {
    setGlobalState(payload: Partial<GlobalState>) {
      Object.assign(this, payload)
    }
  }
})
