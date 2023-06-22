<script setup lang="ts">
const client = useSupabaseClient()

const signOut = async () => {
    await client.auth.signOut()
    navigateTo('/')
}
</script>

<template>
    <nav class="flex justify-center -mb-px space-x-8" aria-label="Tabs">
        <NuxtLink
            to="/account/orders"
            :class="[
                $route.name === 'account-orders'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
            ]"
            >Orders</NuxtLink
        >
        <button
            to="#"
            class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent appearance-none hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
            @click="() => signOut()"
        >
            Logout
        </button>
    </nav>
</template>
