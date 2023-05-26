<script setup lang="ts">
import { useBasketStore } from '~/store/basket'
import { BasketItem } from '../types/Basket'
import OrderSummary from '~/components/basket/OrderSummary.vue'
import { XMarkIcon } from '@heroicons/vue/20/solid'

const basketStore = useBasketStore()

const basketItems = basketStore.items

const price = (price: number) => `£${(price / 100).toFixed(2)}` ?? '£0.00'

const removeFromBasket = (product: BasketItem) => {
    basketStore.removeItemFromBasket(product)
}

const orderTotal = computed(() =>
    basketItems.reduce((acc, item) => {
        return acc + item.product.price * item.count
    }, 0)
)

const subTotal = computed(() => orderTotal.value * (1 - 20 / 100))
</script>

<template>
    <div class="bg-white">
        <div
            class="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <h1
                class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
                Shopping Basket
            </h1>
            <div
                class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
            >
                <section aria-labelledby="cart-heading" class="lg:col-span-7">
                    <h2 id="cart-heading" class="sr-only">
                        Items in your shopping cart
                    </h2>
                    <BasketList :basket-items="basketItems" />
                </section>
                <OrderSummary :sub-total="subTotal" :order-total="orderTotal" />
            </div>
        </div>
    </div>
</template>
