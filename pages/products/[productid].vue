<script setup lang="ts">
import { ProductWithCategories } from '~/types/Products'
import {
    CurrencyDollarIcon,
    GlobeAmericasIcon,
} from '@heroicons/vue/24/outline'
import Breadcrumb from '~/components/navigation/Breadcrumb.vue'
import ProductVariants from '~/components/ProductVariants.vue'
import { useBasketStore } from '~/store/basket'

const route = useRoute()
const basketStore = useBasketStore()

const product = await useFetchWithCache<ProductWithCategories>(
    `/api/products/get-product-by-slug/${route.params.productid}`
)

const priceFormat = (price: number) => `£${(price / 100).toFixed(2)}` ?? '£0.00'

const addToBasket = (product: ProductWithCategories) => {
    basketStore.addItemsToBasket(product)
}

const policies = [
    {
        name: 'International delivery',
        icon: GlobeAmericasIcon,
        description: 'Get your order in 2 years',
    },
    {
        name: 'Loyalty rewards',
        icon: CurrencyDollarIcon,
        description: "Don't look at other tees",
    },
]
</script>

<template>
    <div class="bg-white">
        <div class="pt-6 pb-16 sm:pb-24">
            <Breadcrumb :product="product" />
            <div class="px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <div
                    class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8"
                >
                    <div class="lg:col-span-5 lg:col-start-8">
                        <div class="flex justify-between">
                            <h1 class="text-xl font-medium text-gray-900">
                                {{ product.name }}
                            </h1>
                            <p class="text-xl font-medium text-gray-900">
                                {{ priceFormat(product.price) }}
                            </p>
                        </div>
                        <h2
                            class="mt-8 text-base font-medium text-gray-900 capitalize"
                        >
                            Colour: {{ product.variant }}
                        </h2>
                        <ProductVariants
                            :product="product"
                            :variants="product.variants"
                        />
                    </div>

                    <!-- Image gallery -->
                    <div
                        class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0"
                    >
                        <h2 class="sr-only">Images</h2>

                        <div class="grid grid-cols-1 lg:gap-8">
                            <img
                                :key="product.img"
                                :src="product.img"
                                class="rounded-lg lg:col-span-2 lg:row-span-2"
                            />
                        </div>
                    </div>

                    <div class="mt-8 lg:col-span-5">
                        <button
                            type="button"
                            class="flex items-center justify-center w-full px-8 py-3 mt-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            @click="addToBasket(product)"
                        >
                            Add to basket
                        </button>

                        <!-- Product details -->
                        <div class="mt-10">
                            <h2 class="text-sm font-medium text-gray-900">
                                Description
                            </h2>

                            <div
                                class="mt-4 prose-sm prose text-gray-500"
                                v-html="product.description"
                            />
                        </div>

                        <!-- Policies -->
                        <section
                            aria-labelledby="policies-heading"
                            class="mt-10"
                        >
                            <h2 id="policies-heading" class="sr-only">
                                Our Policies
                            </h2>

                            <dl
                                class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
                            >
                                <div
                                    v-for="policy in policies"
                                    :key="policy.name"
                                    class="p-6 text-center border border-gray-200 rounded-lg bg-gray-50"
                                >
                                    <dt>
                                        <component
                                            :is="policy.icon"
                                            class="flex-shrink-0 w-6 h-6 mx-auto text-gray-400"
                                            aria-hidden="true"
                                        />
                                        <span
                                            class="mt-4 text-sm font-medium text-gray-900"
                                            >{{ policy.name }}</span
                                        >
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-500">
                                        {{ policy.description }}
                                    </dd>
                                </div>
                            </dl>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
