<script setup lang="ts">
import { useBasketStore } from '~/store/basket'
import { price } from '~/helpers/utils'
import Spinner from '~/components/Spinner.vue'

const { shipping, stage } = defineProps({
    shipping: {
        type: Number as PropType<number>,
        default: 0,
    },
    stage: {
        type: String as PropType<string>,
        default: 'basket',
    },
    isLoading: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
})

const user = useSupabaseUser()
const basketStore = useBasketStore()
const basketItems = basketStore.items

const basketTotal = computed(() =>
    basketItems.reduce((acc, item) => {
        return acc + item.product.price * item.count
    }, 0)
)

const orderTotal = computed(() =>
    isCheckout.value
        ? basketTotal.value + basketStore.shippingCost
        : basketTotal.value
)
const subTotal = computed(() => basketTotal.value)

const isBasket = computed(() => stage === 'basket')
const isCheckout = computed(() => stage === 'checkout')

watch(orderTotal, () => {
    basketStore.setBasketTotal(Number(orderTotal))
})
</script>

<template>
    <section
        aria-labelledby="summary-heading"
        class="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
            Order summary
        </h2>

        <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
                <dt class="text-sm text-gray-600">Subtotal</dt>
                <dd class="text-sm font-medium text-gray-900">
                    {{ price(subTotal) }}
                </dd>
            </div>
            <div v-if="shipping" class="flex items-center justify-between">
                <dt class="text-sm text-gray-600">Delivery</dt>
                <dd class="text-sm font-medium text-gray-900">
                    {{ price(basketStore.shippingCost) }}
                </dd>
            </div>
            <div
                class="flex items-center justify-between pt-4 border-t border-gray-200"
            >
                <dt class="text-base font-medium text-gray-900">Order total</dt>
                <dd class="text-base font-medium text-gray-900">
                    {{ price(orderTotal) }}
                </dd>
            </div>
        </dl>

        <div class="mt-6">
            <NuxtLink
                v-if="isBasket"
                :to="`${!user ? '/account/login' : '/checkout'}`"
                class="block w-full px-4 py-3 text-base font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
                <template v-if="!user">Please Login to Continue</template>
                <template v-else>Continue to Checkout</template>
            </NuxtLink>
            <button
                v-if="isCheckout"
                type="submit"
                class="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
                <Spinner v-if="isLoading" />
                <template v-else>Continue to Payment</template>
            </button>
        </div>
    </section>
</template>
