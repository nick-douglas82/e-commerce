<script setup lang="ts">
import { PropType } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const { currencies, version } = defineProps({
    currencies: {
        type: Array as PropType<string[]>,
        required: true,
    },
    version: {
        type: String as PropType<'desktop' | 'mobile'>,
        default: 'desktop',
    },
})

const isDesktop = computed(() => version === 'desktop')

const isDesktopBreakPoint = useMediaQuery('(min-width: 768px)')
const isMobileBreakPoint = useMediaQuery('(max-width: 768px)')
</script>

<template>
    <!-- Desktop Version -->
    <form
        v-if="isDesktop && isDesktopBreakPoint"
        class="hidden lg:block lg:flex-1"
    >
        <div class="flex">
            <label for="desktop-currency" class="sr-only">Currency</label>
            <div
                class="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white"
            >
                <select
                    id="desktop-currency"
                    name="currency"
                    class="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                >
                    <option v-for="currency in currencies" :key="currency">
                        {{ currency }}
                    </option>
                </select>
                <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
                >
                    <ChevronDownIcon
                        class="h-5 w-5 text-gray-300"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </div>
    </form>
    <!-- Mobile Version -->
    <form v-if="!isDesktop && isMobileBreakPoint">
        <div class="inline-block">
            <label for="mobile-currency" class="sr-only">Currency</label>
            <div
                class="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white"
            >
                <select
                    id="mobile-currency"
                    name="currency"
                    class="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                >
                    <option v-for="currency in currencies" :key="currency">
                        {{ currency }}
                    </option>
                </select>
                <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
                >
                    <ChevronDownIcon
                        class="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </div>
    </form>
</template>
