<script setup lang="ts">
import { ref } from 'vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { Product, ProductWithCategories } from '~/types/Products'
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

// const product = {
//     name: 'Basic Tee',
//     price: '$35',
//     rating: 3.9,
//     reviewCount: 512,
//     href: '#',
//     breadcrumbs: [
//         { id: 1, name: 'Women', href: '#' },
//         { id: 2, name: 'Clothing', href: '#' },
//     ],
//     images: [
//         {
//             id: 1,
//             imageSrc:
//                 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
//             imageAlt: "Back of women's Basic Tee in black.",
//             primary: true,
//         },
//     ],
//     colors: [
//         {
//             name: 'Black',
//             bgColor: 'bg-gray-900',
//             selectedColor: 'ring-gray-900',
//         },
//         {
//             name: 'Heather Grey',
//             bgColor: 'bg-gray-400',
//             selectedColor: 'ring-gray-400',
//         },
//     ],
//     sizes: [
//         { name: 'XXS', inStock: true },
//         { name: 'XS', inStock: true },
//         { name: 'S', inStock: true },
//         { name: 'M', inStock: true },
//         { name: 'L', inStock: true },
//         { name: 'XL', inStock: false },
//     ],
//     description: `
//       <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
//       <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
//     `,
//     details: [
//         'Only the best materials',
//         'Ethically and locally made',
//         'Pre-washed and pre-shrunk',
//         'Machine wash cold with similar colors',
//     ],
// }
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

// const selectedColor = ref(product.colors[0])
// const selectedSize = ref(product.sizes[2])
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
                        <!-- Reviews -->
                        <div class="mt-4">
                            <h2 class="sr-only">Reviews</h2>
                            <div class="flex items-center">
                                <!-- <p class="text-sm text-gray-700">
                                    {{ product.rating }}
                                    <span class="sr-only"> out of 5 stars</span>
                                </p> -->
                                <!-- <div class="flex items-center ml-1">
                                    <StarIcon
                                        v-for="rating in [0, 1, 2, 3, 4]"
                                        :key="rating"
                                        :class="[
                                            product.rating > rating
                                                ? 'text-yellow-400'
                                                : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0',
                                        ]"
                                        aria-hidden="true"
                                    />
                                </div> -->
                                <!-- <div
                                    aria-hidden="true"
                                    class="ml-4 text-sm text-gray-300"
                                >
                                    ·
                                </div>
                                <div class="flex ml-4">
                                    <a
                                        href="#"
                                        class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                        >See all
                                        {{ product.reviewCount }} reviews</a
                                    >
                                </div> -->
                            </div>
                        </div>
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

                        <div class="pt-8 mt-8 border-t border-gray-200">
                            <!-- <h2 class="text-sm font-medium text-gray-900">
                                Fabric &amp; Care
                            </h2> -->

                            <!-- <div class="mt-4 prose-sm prose text-gray-500">
                                <ul role="list">
                                    <li
                                        v-for="item in product.details"
                                        :key="item"
                                    >
                                        {{ item }}
                                    </li>
                                </ul>
                            </div> -->
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
