<script setup lang="ts">
import { Product } from '~/types/Products'

const { product } = defineProps({
    product: {
        type: Object as PropType<Product>,
        default: false,
    },
})

const price = computed(() => `£${(product.price / 100).toFixed(2)}` ?? '£0.00')
const url = computed(() => `/products/${product.slug}`)
</script>

<template>
    <a :href="url" class="group">
        <div
            class="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7"
        >
            <img
                :src="product.img"
                :alt="product.name"
                class="object-cover object-center w-full h-full group-hover:opacity-75"
            />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
            {{ product.name }}
        </h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
            {{ price }}
        </p>
    </a>
</template>
