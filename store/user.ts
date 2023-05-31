import { defineStore } from 'pinia'
import { ShippingInfo } from '~/types/Shipping'

export const useUserStore = defineStore('user', {
    state: () => ({
        shippingInfo: {} as ShippingInfo,
    }),
})
