<script setup lang="ts">
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import TopNavigation from '~/components/navigation/TopNavigation.vue'
import SecondaryNavigation from '~/components/navigation/SecondaryNavigation.vue'
import CurrencySelector from '~/components/navigation/CurrencySelector.vue'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
    categories: [
        {
            name: 'Women',
            featured: [
                { name: 'Sleep', href: '#' },
                { name: 'Swimwear', href: '#' },
                { name: 'Underwear', href: '#' },
            ],
            collection: [
                { name: 'Everything', href: '#' },
                { name: 'Core', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Sale', href: '#' },
            ],
            categories: [
                { name: 'Basic Tees', href: '#' },
                { name: 'Artwork Tees', href: '#' },
                { name: 'Bottoms', href: '#' },
                { name: 'Underwear', href: '#' },
                { name: 'Accessories', href: '#' },
            ],
            brands: [
                { name: 'Full Nelson', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Significant Other', href: '#' },
            ],
        },
        {
            name: 'Men',
            featured: [
                { name: 'Casual', href: '#' },
                { name: 'Boxers', href: '#' },
                { name: 'Outdoor', href: '#' },
            ],
            collection: [
                { name: 'Everything', href: '#' },
                { name: 'Core', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Sale', href: '#' },
            ],
            categories: [
                { name: 'Artwork Tees', href: '#' },
                { name: 'Pants', href: '#' },
                { name: 'Accessories', href: '#' },
                { name: 'Boxers', href: '#' },
                { name: 'Basic Tees', href: '#' },
            ],
            brands: [
                { name: 'Significant Other', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Full Nelson', href: '#' },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}

const open = ref(false)
</script>

<template>
    <div class="bg-white">
        <!-- Mobile menu -->
        <TransitionRoot as="template" :show="open">
            <Dialog
                as="div"
                class="relative z-40 lg:hidden"
                @close="open = false"
            >
                <TransitionChild
                    as="template"
                    enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div class="fixed inset-0 z-40 flex">
                    <TransitionChild
                        as="template"
                        enter="transition ease-in-out duration-300 transform"
                        enter-from="-translate-x-full"
                        enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leave-from="translate-x-0"
                        leave-to="-translate-x-full"
                    >
                        <DialogPanel
                            class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                        >
                            <div class="flex px-4 pb-2 pt-5">
                                <button
                                    type="button"
                                    class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                    @click="open = false"
                                >
                                    <span class="sr-only">Close menu</span>
                                    <XMarkIcon
                                        class="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>

                            <!-- Links -->
                            <TabGroup as="div" class="mt-2">
                                <div class="border-b border-gray-200">
                                    <TabList class="-mb-px flex space-x-8 px-4">
                                        <Tab
                                            as="template"
                                            v-for="category in navigation.categories"
                                            :key="category.name"
                                            v-slot="{ selected }"
                                        >
                                            <button
                                                :class="[
                                                    selected
                                                        ? 'border-indigo-600 text-indigo-600'
                                                        : 'border-transparent text-gray-900',
                                                    'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium',
                                                ]"
                                            >
                                                {{ category.name }}
                                            </button>
                                        </Tab>
                                    </TabList>
                                </div>
                                <TabPanels as="template">
                                    <TabPanel
                                        v-for="(
                                            category, categoryIdx
                                        ) in navigation.categories"
                                        :key="category.name"
                                        class="space-y-12 px-4 pb-6 pt-10"
                                    >
                                        <div
                                            class="grid grid-cols-1 items-start gap-x-6 gap-y-10"
                                        >
                                            <div
                                                class="grid grid-cols-1 gap-x-6 gap-y-10"
                                            >
                                                <div>
                                                    <p
                                                        :id="`mobile-featured-heading-${categoryIdx}`"
                                                        class="font-medium text-gray-900"
                                                    >
                                                        Featured
                                                    </p>
                                                    <ul
                                                        role="list"
                                                        :aria-labelledby="`mobile-featured-heading-${categoryIdx}`"
                                                        class="mt-6 space-y-6"
                                                    >
                                                        <li
                                                            v-for="item in category.featured"
                                                            :key="item.name"
                                                            class="flex"
                                                        >
                                                            <a
                                                                :href="
                                                                    item.href
                                                                "
                                                                class="text-gray-500"
                                                                >{{
                                                                    item.name
                                                                }}</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p
                                                        id="mobile-categories-heading"
                                                        class="font-medium text-gray-900"
                                                    >
                                                        Categories
                                                    </p>
                                                    <ul
                                                        role="list"
                                                        aria-labelledby="mobile-categories-heading"
                                                        class="mt-6 space-y-6"
                                                    >
                                                        <li
                                                            v-for="item in category.categories"
                                                            :key="item.name"
                                                            class="flex"
                                                        >
                                                            <a
                                                                :href="
                                                                    item.href
                                                                "
                                                                class="text-gray-500"
                                                                >{{
                                                                    item.name
                                                                }}</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div
                                                class="grid grid-cols-1 gap-x-6 gap-y-10"
                                            >
                                                <div>
                                                    <p
                                                        id="mobile-collection-heading"
                                                        class="font-medium text-gray-900"
                                                    >
                                                        Collection
                                                    </p>
                                                    <ul
                                                        role="list"
                                                        aria-labelledby="mobile-collection-heading"
                                                        class="mt-6 space-y-6"
                                                    >
                                                        <li
                                                            v-for="item in category.collection"
                                                            :key="item.name"
                                                            class="flex"
                                                        >
                                                            <a
                                                                :href="
                                                                    item.href
                                                                "
                                                                class="text-gray-500"
                                                                >{{
                                                                    item.name
                                                                }}</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <p
                                                        id="mobile-brand-heading"
                                                        class="font-medium text-gray-900"
                                                    >
                                                        Brands
                                                    </p>
                                                    <ul
                                                        role="list"
                                                        aria-labelledby="mobile-brand-heading"
                                                        class="mt-6 space-y-6"
                                                    >
                                                        <li
                                                            v-for="item in category.brands"
                                                            :key="item.name"
                                                            class="flex"
                                                        >
                                                            <a
                                                                :href="
                                                                    item.href
                                                                "
                                                                class="text-gray-500"
                                                                >{{
                                                                    item.name
                                                                }}</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>

                            <div
                                class="space-y-6 border-t border-gray-200 px-4 py-6"
                            >
                                <div
                                    v-for="page in navigation.pages"
                                    :key="page.name"
                                    class="flow-root"
                                >
                                    <a
                                        :href="page.href"
                                        class="-m-2 block p-2 font-medium text-gray-900"
                                        >{{ page.name }}</a
                                    >
                                </div>
                            </div>

                            <div
                                class="space-y-6 border-t border-gray-200 px-4 py-6"
                            >
                                <div class="flow-root">
                                    <a
                                        href="#"
                                        class="-m-2 block p-2 font-medium text-gray-900"
                                        >Create an account</a
                                    >
                                </div>
                                <div class="flow-root">
                                    <a
                                        href="#"
                                        class="-m-2 block p-2 font-medium text-gray-900"
                                        >Sign in</a
                                    >
                                </div>
                            </div>

                            <div
                                class="space-y-6 border-t border-gray-200 px-4 py-6"
                            >
                                <CurrencySelector
                                    :currencies="currencies"
                                    version="mobile"
                                />
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <header class="relative">
            <nav aria-label="Top">
                <TopNavigation />
                <!-- Secondary navigation -->
                <SecondaryNavigation
                    :open="open"
                    :navigation="navigation"
                    @open="open = $event"
                />
            </nav>
        </header>
    </div>
</template>
