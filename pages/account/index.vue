<script setup lang="ts">
import AccountNavigation from '@/components/account/AccountNavigation.vue'

const user = useSupabaseUser()

await navigateTo('/account/orders')

definePageMeta({
    middleware: ['auth'],
})
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
        </div>
    </div>
</template>
