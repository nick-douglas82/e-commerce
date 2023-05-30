<script setup lang="ts">
import { price } from '~/helpers/utils'
import { useBasketStore } from '~/store/basket'
import { BasketItem } from '~/types/Basket'
import { XMarkIcon } from '@heroicons/vue/20/solid'

const { product } = defineProps({
    product: {
        type: Object as PropType<BasketItem>,
        required: true,
    },
})

const basketStore = useBasketStore()

const removeFromBasket = (product: BasketItem) => {
    basketStore.removeItemFromBasket(product)
}

const updateProductQuantity = (product: BasketItem) => {
    basketStore.updateProductQuantity(product)
}
</script>

<template>
    <li class="flex py-6 sm:py-10">
        <div class="flex-shrink-0">
            <img
                :src="product.product.img"
                :alt="product.product.name"
                class="object-cover object-center w-24 h-24 rounded-md sm:h-48 sm:w-48"
            />
        </div>

        <div class="flex flex-col justify-between flex-1 ml-4 sm:ml-6">
            <div
                class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0"
            >
                <div>
                    <div class="flex justify-between">
                        <h3 class="text-sm">
                            <a
                                href="#"
                                class="font-medium text-gray-700 hover:text-gray-800"
                                >{{ product.product.name }}</a
                            >
                        </h3>
                    </div>
                    <p class="mt-1 text-sm font-medium text-gray-900">
                        {{ price(product.product.price) }}
                    </p>
                </div>

                <div class="mt-4 sm:mt-0 sm:pr-9">
                    <label
                        :for="`quantity-${product.product.id}`"
                        class="sr-only"
                        >Quantity, {{ product.product.name }}</label
                    >
                    <select
                        :id="`quantity-${product.product.id}`"
                        :name="`quantity-${product.product.id}`"
                        v-model.number="product.count"
                        @change="updateProductQuantity(product)"
                        class="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>

                    <div class="absolute top-0 right-0">
                        <button
                            type="button"
                            class="inline-flex p-2 -m-2 text-gray-400 hover:text-gray-500"
                            @click="removeFromBasket(product)"
                        >
                            <span class="sr-only">Remove</span>
                            <XMarkIcon class="w-5 h-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>
