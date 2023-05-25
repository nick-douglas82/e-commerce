<script setup lang="ts">
import { useBasketStore } from '~/store/basket'
import {
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserIcon,
} from '@heroicons/vue/24/outline'
import useFetchWithCache from '~/composables/useFetchWithCache'
import { Collection } from '~/types/Collection'

const basketStore = useBasketStore()

const collections = await useFetchWithCache<Collection[]>(
    '/api/collections/get-all-collections'
)
</script>

<template>
    <div class="bg-white">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="border-b border-gray-200">
                <div class="flex items-center justify-between h-16">
                    <!-- Logo (lg+) -->
                    <div class="hidden lg:flex lg:items-center">
                        <a href="#">
                            <span class="sr-only">Your Company</span>
                            <img
                                class="w-auto h-8"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div>

                    <div class="hidden h-full lg:flex">
                        <nav class="ml-10">
                            <ul class="flex justify-center h-full space-x-8">
                                <li
                                    v-for="(
                                        collection, collectionIndex
                                    ) in collections"
                                    class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                >
                                    <NuxtLink
                                        :to="`/collections/${collection.slug}`"
                                    >
                                        {{ collection.name }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div class="flex items-center justify-end flex-1">
                        <div class="flex items-center lg:ml-8">
                            <div class="flex space-x-8">
                                <div class="hidden lg:flex">
                                    <a
                                        href="#"
                                        class="p-2 -m-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span class="sr-only">Search</span>
                                        <MagnifyingGlassIcon
                                            class="w-6 h-6"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>

                                <div class="flex">
                                    <a
                                        href="#"
                                        class="p-2 -m-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span class="sr-only">Account</span>
                                        <UserIcon
                                            class="w-6 h-6"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </div>

                            <span
                                class="w-px h-6 mx-4 bg-gray-200 lg:mx-6"
                                aria-hidden="true"
                            />

                            <div class="flow-root">
                                <NuxtLink
                                    to="/basket"
                                    class="flex items-center p-2 -m-2 group"
                                >
                                    <ShoppingCartIcon
                                        class="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <span
                                        class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                                        >{{ basketStore.count }}</span
                                    >
                                    <span class="sr-only"
                                        >items in cart, view bag</span
                                    >
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
