<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
} from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import { useBasketStore } from '~/store/basket'
import { useUserStore } from '~/store/user'
import { checkoutSchema } from '~/validation/rules'
import { price } from '~/helpers/utils'
import OrderSummary from '~/components/basket/OrderSummary.vue'

type DeliveryMethods = {
    id: number
    title: string
    turnaround: string
    price: number
}

definePageMeta({
    middleware: ['auth'],
})

const basketStore = useBasketStore()
const userStore = useUserStore()
const isLoading = ref(false)
let stripe = null
const clientSecret = ref(null)
let card = null
let elements = null
const showModal = ref(false)

const deliveryMethods: Array<DeliveryMethods> = [
    {
        id: 1,
        title: 'Standard',
        turnaround: '4–10 business days',
        price: 500,
    },
    {
        id: 2,
        title: 'Express',
        turnaround: '2–5 business days',
        price: 1600,
    },
]

const selectedDeliveryMethod = ref(deliveryMethods[0])

watch(
    () => selectedDeliveryMethod.value,
    (selection) => {
        basketStore.setShippingCost(selection.price)
    },
    { immediate: true }
)

const onSubmit = async (values: any) => {
    isLoading.value = true
    userStore.shippingInfo = values

    await navigateTo({
        path: '/checkout/payment',
    })
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
                Checkout
            </h1>

            <Form
                @submit="onSubmit"
                :validation-schema="checkoutSchema"
                class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
            >
                <section class="lg:col-span-7">
                    <h2
                        id="contact-info-heading"
                        class="text-lg font-medium text-gray-900"
                    >
                        Contact information
                    </h2>

                    <div class="mt-6">
                        <label
                            for="email"
                            class="block text-sm font-medium text-gray-700"
                            >Email address</label
                        >
                        <div class="mt-1">
                            <Field
                                name="email"
                                type="email"
                                id="email"
                                autocomplete="email"
                                class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            <ErrorMessage
                                name="email"
                                class="text-sm font-semibold text-red-700"
                            />
                        </div>
                    </div>

                    <h2 class="mt-10 text-lg font-medium text-gray-900">
                        Shipping information
                    </h2>

                    <div
                        class="grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
                    >
                        <div>
                            <label
                                for="firstname"
                                class="block text-sm font-medium text-gray-700"
                                >First name</label
                            >
                            <div class="mt-1">
                                <Field
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    autocomplete="given-name"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage
                                    name="firstname"
                                    class="text-sm font-semibold text-red-700"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                for="lastname"
                                class="block text-sm font-medium text-gray-700"
                                >Last name</label
                            >
                            <div class="mt-1">
                                <Field
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    autocomplete="family-name"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage
                                    name="lastname"
                                    class="text-sm font-semibold text-red-700"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label
                                for="namenumber"
                                class="block text-sm font-medium text-gray-700"
                                >House name or number</label
                            >
                            <div class="mt-1">
                                <Field
                                    type="text"
                                    name="namenumber"
                                    id="namenumber"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage
                                    name="namenumber"
                                    class="text-sm font-semibold text-red-700"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label
                                for="address"
                                class="block text-sm font-medium text-gray-700"
                                >Address</label
                            >
                            <div class="mt-1">
                                <Field
                                    type="text"
                                    name="address"
                                    id="address"
                                    autocomplete="street-address"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage
                                    name="address"
                                    class="text-sm font-semibold text-red-700"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                for="city"
                                class="block text-sm font-medium text-gray-700"
                                >City</label
                            >
                            <div class="mt-1">
                                <Field
                                    type="text"
                                    name="city"
                                    id="city"
                                    autocomplete="address-level2"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage
                                    name="city"
                                    class="text-sm font-semibold text-red-700"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                for="county"
                                class="block text-sm font-medium text-gray-700"
                                >County</label
                            >
                            <div class="mt-1">
                                <Field
                                    type="text"
                                    name="county"
                                    id="county"
                                    autocomplete="address-level1"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage
                                    name="county"
                                    class="text-sm font-semibold text-red-700"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                for="country"
                                class="block text-sm font-medium text-gray-700"
                                >Country</label
                            >
                            <div class="mt-1">
                                <Field
                                    as="select"
                                    id="country"
                                    name="country"
                                    autocomplete="country-name"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="united kingdom">
                                        United Kingdom
                                    </option>
                                </Field>
                                <ErrorMessage
                                    name="county"
                                    class="text-sm font-semibold text-red-700"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                for="postcode"
                                class="block text-sm font-medium text-gray-700"
                                >Postal code</label
                            >
                            <div class="mt-1">
                                <Field
                                    type="text"
                                    name="postcode"
                                    id="postcode"
                                    autocomplete="postcode"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage
                                    name="postcode"
                                    class="text-sm font-semibold text-red-700"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label
                                for="phone"
                                class="block text-sm font-medium text-gray-700"
                                >Phone</label
                            >
                            <div class="mt-1">
                                <Field
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    autocomplete="phone"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage
                                    name="phone"
                                    class="text-sm font-semibold text-red-700"
                                />
                            </div>
                        </div>
                    </div>
                    <RadioGroup v-model="selectedDeliveryMethod" class="mt-10">
                        <RadioGroupLabel
                            class="text-lg font-medium text-gray-900"
                            >Delivery method</RadioGroupLabel
                        >

                        <div
                            class="grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
                        >
                            <RadioGroupOption
                                as="template"
                                v-for="deliveryMethod in deliveryMethods"
                                :key="deliveryMethod.id"
                                :value="deliveryMethod"
                                v-slot="{ checked, active }"
                            >
                                <div
                                    :class="[
                                        checked
                                            ? 'border-transparent'
                                            : 'border-gray-300',
                                        active ? 'ring-2 ring-indigo-500' : '',
                                        'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
                                    ]"
                                >
                                    <span class="flex flex-1">
                                        <span class="flex flex-col">
                                            <RadioGroupLabel
                                                as="span"
                                                class="block text-sm font-medium text-gray-900"
                                                >{{
                                                    deliveryMethod.title
                                                }}</RadioGroupLabel
                                            >
                                            <RadioGroupDescription
                                                as="span"
                                                class="flex items-center mt-1 text-sm text-gray-500"
                                                >{{
                                                    deliveryMethod.turnaround
                                                }}</RadioGroupDescription
                                            >
                                            <RadioGroupDescription
                                                as="span"
                                                class="mt-6 text-sm font-medium text-gray-900"
                                                >{{
                                                    price(deliveryMethod.price)
                                                }}</RadioGroupDescription
                                            >
                                        </span>
                                    </span>
                                    <CheckCircleIcon
                                        v-if="checked"
                                        class="w-5 h-5 text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span
                                        :class="[
                                            active ? 'border' : 'border-2',
                                            checked
                                                ? 'border-indigo-500'
                                                : 'border-transparent',
                                            'pointer-events-none absolute -inset-px rounded-lg',
                                        ]"
                                        aria-hidden="true"
                                    />
                                </div>
                            </RadioGroupOption>
                        </div>
                    </RadioGroup>
                </section>

                <OrderSummary
                    :shipping="selectedDeliveryMethod.price"
                    stage="checkout"
                    :is-loading="isLoading"
                />
            </Form>
        </div>
    </div>
</template>
