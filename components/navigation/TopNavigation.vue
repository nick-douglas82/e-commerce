<script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
    <div class="bg-gray-900">
        <div
            class="flex items-center justify-between h-10 px-4 mx-auto sm:px-6 lg:px-8"
        >
            <div
                class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
            >
                <NuxtLink
                    v-if="!user"
                    to="/account/login"
                    class="text-sm font-medium text-white hover:text-gray-100"
                    >Sign in</NuxtLink
                >
                <NuxtLink
                    v-else
                    to="/account"
                    class="text-sm font-medium text-white hover:text-gray-100"
                    >Account</NuxtLink
                >
            </div>
        </div>
    </div>
</template>
