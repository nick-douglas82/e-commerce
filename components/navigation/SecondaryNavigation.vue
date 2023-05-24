<script setup lang="ts">
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/vue'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserIcon,
} from '@heroicons/vue/24/outline'
import { Navigation } from '~/types/Navigation'

const { open } = defineProps({
    navigation: {
        type: Object as PropType<Navigation>,
        default: false,
    },
    open: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
})

const emit = defineEmits<{
    (e: 'open', value: boolean): void
}>()
</script>

<template>
    <div class="bg-white">
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="border-b border-gray-200">
                <div class="flex h-16 items-center justify-between">
                    <!-- Logo (lg+) -->
                    <div class="hidden lg:flex lg:items-center">
                        <a href="#">
                            <span class="sr-only">Your Company</span>
                            <img
                                class="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div>

                    <div class="hidden h-full lg:flex">
                        <!-- Mega menus -->
                        <PopoverGroup class="ml-8">
                            <div class="flex h-full justify-center space-x-8">
                                <Popover
                                    v-for="(
                                        category, categoryIdx
                                    ) in navigation.categories"
                                    :key="category.name"
                                    class="flex"
                                    v-slot="{ open }"
                                >
                                    <div class="relative flex">
                                        <PopoverButton
                                            :class="[
                                                open
                                                    ? 'border-indigo-600 text-indigo-600'
                                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
                                            ]"
                                            >{{ category.name }}</PopoverButton
                                        >
                                    </div>

                                    <transition
                                        enter-active-class="transition ease-out duration-200"
                                        enter-from-class="opacity-0"
                                        enter-to-class="opacity-100"
                                        leave-active-class="transition ease-in duration-150"
                                        leave-from-class="opacity-100"
                                        leave-to-class="opacity-0"
                                    >
                                        <PopoverPanel
                                            class="absolute inset-x-0 top-full text-gray-500 sm:text-sm"
                                        >
                                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                                            <div
                                                class="absolute inset-0 top-1/2 bg-white shadow"
                                                aria-hidden="true"
                                            />

                                            <div class="relative bg-white">
                                                <div class="mx-auto px-8">
                                                    <div
                                                        class="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10"
                                                    >
                                                        <div
                                                            class="grid grid-cols-2 gap-x-8 gap-y-10"
                                                        >
                                                            <div>
                                                                <p
                                                                    :id="`desktop-featured-heading-${categoryIdx}`"
                                                                    class="font-medium text-gray-900"
                                                                >
                                                                    Featured
                                                                </p>
                                                                <ul
                                                                    role="list"
                                                                    :aria-labelledby="`desktop-featured-heading-${categoryIdx}`"
                                                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                >
                                                                    <li
                                                                        v-for="item in category.featured"
                                                                        :key="
                                                                            item.name
                                                                        "
                                                                        class="flex"
                                                                    >
                                                                        <a
                                                                            :href="
                                                                                item.href
                                                                            "
                                                                            class="hover:text-gray-800"
                                                                            >{{
                                                                                item.name
                                                                            }}</a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <p
                                                                    id="desktop-categories-heading"
                                                                    class="font-medium text-gray-900"
                                                                >
                                                                    Categories
                                                                </p>
                                                                <ul
                                                                    role="list"
                                                                    aria-labelledby="desktop-categories-heading"
                                                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                >
                                                                    <li
                                                                        v-for="item in category.categories"
                                                                        :key="
                                                                            item.name
                                                                        "
                                                                        class="flex"
                                                                    >
                                                                        <a
                                                                            :href="
                                                                                item.href
                                                                            "
                                                                            class="hover:text-gray-800"
                                                                            >{{
                                                                                item.name
                                                                            }}</a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="grid grid-cols-2 gap-x-8 gap-y-10"
                                                        >
                                                            <div>
                                                                <p
                                                                    id="desktop-collection-heading"
                                                                    class="font-medium text-gray-900"
                                                                >
                                                                    Collection
                                                                </p>
                                                                <ul
                                                                    role="list"
                                                                    aria-labelledby="desktop-collection-heading"
                                                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                >
                                                                    <li
                                                                        v-for="item in category.collection"
                                                                        :key="
                                                                            item.name
                                                                        "
                                                                        class="flex"
                                                                    >
                                                                        <a
                                                                            :href="
                                                                                item.href
                                                                            "
                                                                            class="hover:text-gray-800"
                                                                            >{{
                                                                                item.name
                                                                            }}</a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div>
                                                                <p
                                                                    id="desktop-brand-heading"
                                                                    class="font-medium text-gray-900"
                                                                >
                                                                    Brands
                                                                </p>
                                                                <ul
                                                                    role="list"
                                                                    aria-labelledby="desktop-brand-heading"
                                                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                >
                                                                    <li
                                                                        v-for="item in category.brands"
                                                                        :key="
                                                                            item.name
                                                                        "
                                                                        class="flex"
                                                                    >
                                                                        <a
                                                                            :href="
                                                                                item.href
                                                                            "
                                                                            class="hover:text-gray-800"
                                                                            >{{
                                                                                item.name
                                                                            }}</a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </PopoverPanel>
                                    </transition>
                                </Popover>

                                <a
                                    v-for="page in navigation.pages"
                                    :key="page.name"
                                    :href="page.href"
                                    class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                    >{{ page.name }}</a
                                >
                            </div>
                        </PopoverGroup>
                    </div>

                    <!-- Mobile menu and search (lg-) -->
                    <div class="flex flex-1 items-center lg:hidden">
                        <button
                            type="button"
                            class="-ml-2 rounded-md bg-white p-2 text-gray-400"
                            @click="emit('open', true)"
                        >
                            <span class="sr-only">Open menu</span>
                            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                        </button>

                        <!-- Search -->
                        <a
                            href="#"
                            class="ml-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                            <span class="sr-only">Search</span>
                            <MagnifyingGlassIcon
                                class="h-6 w-6"
                                aria-hidden="true"
                            />
                        </a>
                    </div>

                    <!-- Logo (lg-) -->
                    <a href="#" class="lg:hidden">
                        <span class="sr-only">Your Company</span>
                        <img
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                            class="h-8 w-auto"
                        />
                    </a>

                    <div class="flex flex-1 items-center justify-end">
                        <div class="flex items-center lg:ml-8">
                            <div class="flex space-x-8">
                                <div class="hidden lg:flex">
                                    <a
                                        href="#"
                                        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span class="sr-only">Search</span>
                                        <MagnifyingGlassIcon
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>

                                <div class="flex">
                                    <a
                                        href="#"
                                        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span class="sr-only">Account</span>
                                        <UserIcon
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </div>

                            <span
                                class="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                                aria-hidden="true"
                            />

                            <div class="flow-root">
                                <a
                                    href="#"
                                    class="group -m-2 flex items-center p-2"
                                >
                                    <ShoppingCartIcon
                                        class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <span
                                        class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                                        >0</span
                                    >
                                    <span class="sr-only"
                                        >items in cart, view bag</span
                                    >
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
