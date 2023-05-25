<script setup lang="ts">
import { ProductWithCategories } from '~/types/Products'

const { product, variants } = defineProps({
    product: {
        type: Object as PropType<ProductWithCategories>,
        default: false,
    },
    variants: {
        type: Array as PropType<ProductWithCategories[]>,
        default: false,
    },
})
</script>

<template>
    <div class="flex mt-2 gap-x-4">
        <div class="flex flex-col items-center gap-y-3">
            <div class="w-28 h-28">
                <img class="rounded-md" :src="product.img" />
            </div>

            <div class="w-4 h-4 bg-gray-900 rounded-full" />
        </div>

        <div
            class="flex flex-col items-center gap-y-3 group"
            v-for="(variant, index) in variants"
            :key="index"
        >
            <NuxtLink :to="`/products/${variant.slug}`" class="w-28 h-28">
                <img class="rounded" :src="variant.img" />
            </NuxtLink>
            <div
                class="w-4 h-4 transition-all duration-200 ease-in-out border border-gray-900 rounded-full group-hover:bg-gray-200 group-hover:border-gray-200"
            />
        </div>
    </div>
</template>
