<script setup lang="ts">
import { BasketItem } from '~/types/Basket'
import BasketListItem from '~/components/basket/BasketListItem.vue'

const { basketItems } = defineProps({
    basketItems: {
        type: Array as PropType<BasketItem[]>,
        required: true,
    },
})
</script>

<template>
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
        <BasketListItem
            v-for="product in basketItems"
            :product="product"
            :key="product.product.id"
        />
    </ul>
</template>
