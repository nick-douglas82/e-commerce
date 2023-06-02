<script setup lang="ts">
import { Collection } from '~/types/Collection'
import useFetchWithCache from '~/composables/useFetchWithCache'

const collections = await useFetchWithCache<Collection[]>(
    '/api/collections/get-all-collections'
)
</script>

<template>
    <div class="bg-white">
        <!-- Hero section -->
        <div class="relative bg-gray-900">
            <!-- Decorative image and overlay -->
            <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
                <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
                    alt=""
                    class="object-cover object-center w-full h-full"
                />
            </div>
            <div
                aria-hidden="true"
                class="absolute inset-0 bg-gray-900 opacity-50"
            />

            <div
                class="relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0"
            >
                <h1
                    class="text-4xl font-bold tracking-tight text-white lg:text-6xl"
                >
                    An e-commerce demo site
                </h1>
                <p class="mt-4 text-xl text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur vel, modi, ducimus ut a accusamus id quis magnam
                    maxime natus earum suscipit obcaecati nisi aperiam. Cumque
                    accusamus quasi molestias incidunt?
                </p>
                <NuxtLink
                    to="#"
                    class="inline-block px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100"
                    >Shop New Arrivals
                </NuxtLink>
            </div>
        </div>

        <main>
            <!-- Collection section -->
            <section
                aria-labelledby="collection-heading"
                class="max-w-xl px-4 pt-24 mx-auto sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
            >
                <h2
                    id="collection-heading"
                    class="text-2xl font-bold tracking-tight text-gray-900"
                >
                    Shop by Collection
                </h2>
                <p class="mt-4 text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Culpa adipisci provident labore molestiae placeat sunt
                    facere itaque magni quis delectus laboriosam fugiat minus
                    mollitia reprehenderit voluptas unde nam, dicta debitis!
                </p>

                <div
                    class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
                >
                    <NuxtLink
                        v-for="collection in collections"
                        :key="collection.name"
                        :to="`collections/${collection.slug}`"
                        class="block group"
                    >
                        <div
                            aria-hidden="true"
                            class="overflow-hidden rounded-lg aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                        >
                            <img
                                :src="collection.img"
                                :alt="collection.name"
                                class="object-cover object-center w-full h-full"
                            />
                        </div>
                        <h3 class="mt-4 text-base font-semibold text-gray-900">
                            {{ collection.name }}
                        </h3>
                        <p class="mt-2 text-sm text-gray-500">
                            {{ collection.description }}
                        </p>
                    </NuxtLink>
                </div>
            </section>

            <!-- Featured section -->
            <section
                aria-labelledby="comfort-heading"
                class="px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8"
            >
                <div class="relative overflow-hidden rounded-lg">
                    <div class="absolute inset-0">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                            alt=""
                            class="object-cover object-center w-full h-full"
                        />
                    </div>
                    <div
                        class="relative px-6 py-32 bg-gray-900 bg-opacity-75 sm:px-12 sm:py-40 lg:px-16"
                    >
                        <div
                            class="relative flex flex-col items-center max-w-3xl mx-auto text-center"
                        >
                            <h2
                                id="comfort-heading"
                                class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                            >
                                Some whitty title
                            </h2>
                            <p class="mt-3 text-xl text-white">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Esse autem inventore harum
                                similique excepturi, tenetur nesciunt eos alias
                                tempora non beatae dolore. Maxime nobis minus
                                earum molestiae impedit, cumque ratione.
                            </p>
                            <NuxtLink
                                to="#"
                                class="block w-full px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100 sm:w-auto"
                                >A none working button
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
