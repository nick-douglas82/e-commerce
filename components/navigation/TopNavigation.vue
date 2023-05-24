<script setup lang="ts">
import CurrencySelector from '~/components/navigation/CurrencySelector.vue'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
</script>

<template>
    <div class="bg-gray-900">
        <div
            class="mx-auto flex h-10 items-center justify-between px-4 sm:px-6 lg:px-8"
        >
            <CurrencySelector :currencies="currencies" version="desktop" />
            <p
                class="flex-1 text-center text-sm font-medium text-white lg:flex-none"
            >
                Get free delivery on orders over $100
            </p>

            <div
                class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
            >
                <a
                    href="#"
                    class="text-sm font-medium text-white hover:text-gray-100"
                    >Create an account</a
                >
                <span class="h-6 w-px bg-gray-600" aria-hidden="true" />
                <a
                    href="#"
                    class="text-sm font-medium text-white hover:text-gray-100"
                    >Sign in</a
                >
            </div>
        </div>
    </div>
</template>
