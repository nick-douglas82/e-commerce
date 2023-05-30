<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()

definePageMeta({
    middleware: ['auth'],
})

const signOut = async () => {
    await client.auth.signOut()
    navigateTo('/')
}
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
                    <nav
                        class="flex justify-center -mb-px space-x-8"
                        aria-label="Tabs"
                    >
                        <NuxtLink
                            to="#"
                            :class="[
                                $route.name === 'account'
                                    ? 'border-indigo-500 text-indigo-600'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                            ]"
                            >Account Overview</NuxtLink
                        >
                        <NuxtLink
                            to="#"
                            class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
                            >Orders</NuxtLink
                        >
                        <NuxtLink
                            to="#"
                            class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
                            >Addresses</NuxtLink
                        >
                        <NuxtLink
                            to="#"
                            class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
                            >Wishlist</NuxtLink
                        >
                        <button
                            to="#"
                            class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent appearance-none hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
                            @click="() => signOut()"
                        >
                            Logout
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
