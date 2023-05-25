<script setup lang="ts">
import { ProductWithCategories } from '~/types/Products'

const { product } = defineProps({
    product: {
        type: Object as PropType<ProductWithCategories>,
        default: false,
    },
})
</script>

<template>
    <nav aria-label="Breadcrumb" class="px-4 mx-auto sm:px-6 lg:px-8">
        <ol role="list" class="flex items-center space-x-4">
            <li>
                <div class="flex items-center">
                    <NuxtLink
                        to="/"
                        class="mr-4 text-sm font-medium text-gray-900"
                        >Home</NuxtLink
                    >
                    <svg
                        viewBox="0 0 6 20"
                        aria-hidden="true"
                        class="w-auto h-5 text-gray-300"
                    >
                        <path
                            d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </li>
            <li>
                <div class="flex items-center">
                    <NuxtLink
                        :to="`/collections/${product.categories[0].slug}`"
                        class="mr-4 text-sm font-medium text-gray-900"
                        >{{ product.categories[0].name }}
                    </NuxtLink>
                    <svg
                        viewBox="0 0 6 20"
                        aria-hidden="true"
                        class="w-auto h-5 text-gray-300"
                    >
                        <path
                            d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </li>
            <li class="text-sm">
                <span
                    aria-current="page"
                    class="font-medium text-gray-500 hover:text-gray-600"
                    >{{ product.name }}
                </span>
            </li>
        </ol>
    </nav>
</template>
