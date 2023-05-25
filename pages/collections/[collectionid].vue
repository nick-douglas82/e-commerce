<script setup lang="ts">
import { Product } from '~/types/Products'
import ProductItem from '~/components/Product.vue'
import { CollectionWithProducts } from '~/types/Collection'
import useFetchWithCache from '~/composables/useFetchWithCache'
const route = useRoute()

const collection = await useFetchWithCache<CollectionWithProducts>(
    `/api/collections/get-collection-by-slug/${route.params.collectionid}`
)
</script>

<template>
    <main>
        <div class="bg-white">
            <div class="px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">
                    {{ collection?.name }}
                </h1>
                <p class="max-w-xl mt-4 text-sm text-gray-700">
                    {{ collection?.description }}
                </p>
            </div>
        </div>

        <section
            aria-labelledby="products-heading"
            class="px-4 pb-16 mx-auto sm:px-6 sm:pb-24 lg:px-8"
        >
            <h2 id="products-heading" class="sr-only">Products</h2>

            <div
                v-if="collection"
                class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
            >
                <ProductItem
                    v-for="product in collection.products"
                    :product="product"
                    :key="product.id"
                />
            </div>
        </section>
    </main>
</template>
