<script setup lang="ts">
import dayjs from 'dayjs'
import AccountNavigation from '@/components/account/AccountNavigation.vue'
import { price } from '~/helpers/utils'

definePageMeta({
    middleware: ['auth'],
})

const user = useSupabaseUser()

const { data: orders } = await useFetch(
    `/api/orders/get-all-by-user/${user?.value?.id}`
)
</script>

<template>
    <div class="bg-white">
        <div
            class="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <h1
                class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
                Hello, {{ user?.user_metadata.name }}
            </h1>
            <div class="hidden sm:block">
                <div class="mt-8 border-b border-gray-200">
                    <AccountNavigation />
                </div>
            </div>

            <main class="mt-10">
                <div class="max-w-xl">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">
                        Your Orders
                    </h1>
                    <p class="mt-2 text-sm text-gray-500">
                        Check the status of recent orders, manage returns, and
                        discover similar products.
                    </p>
                </div>
                <div class="mt-12 space-y-16 sm:mt-16">
                    <section v-for="order in orders" :key="order.id">
                        <div
                            class="space-y-1 md:flex md:items-baseline md:space-x-4 md:space-y-0"
                        >
                            <h2
                                :id="`${order.id}-heading`"
                                class="text-lg font-medium text-gray-900 md:flex-shrink-0"
                            >
                                Order #{{ order.id }}
                            </h2>
                            <div
                                class="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1"
                            >
                                <p class="text-sm font-medium text-gray-500">
                                    Ordered:
                                    {{
                                        dayjs(order.created_at).format(
                                            'D MMMM YYYY'
                                        )
                                    }}
                                </p>
                            </div>
                        </div>

                        <div
                            class="flow-root mt-6 -mb-6 border-t border-gray-200 divide-y divide-gray-200"
                        >
                            <div
                                v-for="orderItem in order.orderItems"
                                :key="orderItem.id"
                                class="py-6 sm:flex"
                            >
                                <div
                                    class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8"
                                >
                                    <img
                                        :src="orderItem.product.img"
                                        :alt="orderItem.product.name"
                                        class="flex-none object-cover object-center w-20 h-20 rounded-md sm:h-48 sm:w-48"
                                    />
                                    <div class="min-w-0 flex-1 pt-1.5 sm:pt-0">
                                        <h3
                                            class="text-sm font-medium text-gray-900"
                                        >
                                            <NuxtLink
                                                :to="`/products/${orderItem.product.slug}`"
                                                >{{
                                                    orderItem.product.name
                                                }}</NuxtLink
                                            >
                                        </h3>
                                        <p
                                            class="text-sm text-gray-500 truncate"
                                        >
                                            <span class="capitalize">{{
                                                orderItem.product.variant
                                            }}</span>
                                            {{ ' ' }}
                                            <span
                                                class="mx-1 text-gray-400"
                                                aria-hidden="true"
                                                >&middot;</span
                                            >
                                            {{ ' ' }}
                                            <span class="capitalize"
                                                >qty
                                                {{ orderItem.quantity }}</span
                                            >
                                        </p>
                                        <p
                                            class="mt-1 font-medium text-gray-900"
                                        >
                                            {{
                                                price(
                                                    orderItem.product.price *
                                                        orderItem.quantity
                                                )
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    </div>
</template>
