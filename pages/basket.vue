<script setup lang="ts">
import { useBasketStore } from '~/store/basket'
import { BasketItem } from '../types/Basket'
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
                    <div
                        v-if="basketItems.length === 0"
                        class="pt-3 border-t border-gray-200 divide-y divide-gray-200"
                    >
                        Your basket is empty
                    </div>
                    <ul
                        v-else
                        role="list"
                        class="border-t border-b border-gray-200 divide-y divide-gray-200"
                    >
                        <li
                            v-for="product in basketItems"
                            :key="product.product.id"
                            class="flex py-6 sm:py-10"
                        >
                            <div class="flex-shrink-0">
                                <img
                                    :src="product.product.img"
                                    :alt="product.product.name"
                                    class="object-cover object-center w-24 h-24 rounded-md sm:h-48 sm:w-48"
                                />
                            </div>

                            <div
                                class="flex flex-col justify-between flex-1 ml-4 sm:ml-6"
                            >
                                <div
                                    class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0"
                                >
                                    <div>
                                        <div class="flex justify-between">
                                            <h3 class="text-sm">
                                                <a
                                                    href="#"
                                                    class="font-medium text-gray-700 hover:text-gray-800"
                                                    >{{
                                                        product.product.name
                                                    }}</a
                                                >
                                            </h3>
                                        </div>
                                        <p
                                            class="mt-1 text-sm font-medium text-gray-900"
                                        >
                                            {{ price(product.product.price) }}
                                        </p>
                                    </div>

                                    <div class="mt-4 sm:mt-0 sm:pr-9">
                                        <label
                                            :for="`quantity-${product.product.id}`"
                                            class="sr-only"
                                            >Quantity,
                                            {{ product.product.name }}</label
                                        >
                                        <select
                                            :id="`quantity-${product.product.id}`"
                                            :name="`quantity-${product.product.id}`"
                                            v-model.number="product.count"
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
                                                @click="
                                                    removeFromBasket(product)
                                                "
                                            >
                                                <span class="sr-only"
                                                    >Remove</span
                                                >
                                                <XMarkIcon
                                                    class="w-5 h-5"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>

                <!-- Order summary -->
                <section
                    aria-labelledby="summary-heading"
                    class="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                >
                    <h2
                        id="summary-heading"
                        class="text-lg font-medium text-gray-900"
                    >
                        Order summary
                    </h2>

                    <dl class="mt-6 space-y-4">
                        <div class="flex items-center justify-between">
                            <dt class="text-sm text-gray-600">Subtotal</dt>
                            <dd class="text-sm font-medium text-gray-900">
                                {{ price(subTotal) }}
                            </dd>
                        </div>
                        <div
                            class="flex items-center justify-between pt-4 border-t border-gray-200"
                        >
                            <dt class="text-base font-medium text-gray-900">
                                Order total
                            </dt>
                            <dd class="text-base font-medium text-gray-900">
                                {{ price(orderTotal) }}
                            </dd>
                        </div>
                    </dl>

                    <div class="mt-6">
                        <button
                            type="submit"
                            class="w-full px-4 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                            Checkout
                        </button>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
