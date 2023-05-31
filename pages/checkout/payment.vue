<script setup lang="ts">
import { Form } from 'vee-validate'
import { useBasketStore } from '~/store/basket'
import { useUserStore } from '~/store/user'
import OrderSummary from '~/components/basket/OrderSummary.vue'
import Spinner from '~/components/Spinner.vue'

type DeliveryMethods = {
    id: number
    title: string
    turnaround: string
    price: number
}

definePageMeta({
    middleware: ['auth'],
})

const userStore = useUserStore()
const user = useSupabaseUser()
const basketStore = useBasketStore()
const isLoading = ref(false)
let stripe = null as any
const clientSecret = ref(null)
let card = null as any
let elements = null

const stripeInit = async () => {
    const runtimeConfig = useRuntimeConfig()
    // @ts-ignore
    stripe = Stripe(runtimeConfig.public.stripePK)

    let res: any = await $fetch('/api/stripe/paymentintent', {
        method: 'POST',
        body: {
            amount: basketStore.totalValue + basketStore.shippingCost,
        },
    })

    clientSecret.value = res.client_secret

    elements = stripe.elements()

    var style = {
        base: {
            fontSize: '18px',
        },
        invalid: {
            color: '#EE4B2B',
            iconColor: '#EE4B2B',
        },
    }

    card = elements.create('card', {
        hidePostalCode: true,
        style: style,
    })

    // Stripe injects an iframe into the DOM
    card.mount('#card-element')
    card.on('change', function (event: any) {
        // Disable the Pay button if there are no card details in the Element
        document.querySelector('button')!.disabled = event.empty
        document.querySelector('#card-error')!.textContent = event.error
            ? event.error.message
            : ''
    })
}

watch(
    () => basketStore.totalValue,
    async () => {
        if (basketStore.totalValue + basketStore.shippingCost > 0) {
            await nextTick()
            stripeInit()
        }
    },
    { immediate: true }
)

const pay = async () => {
    isLoading.value = true

    let result = await stripe.confirmCardPayment(clientSecret.value, {
        payment_method: { card: card },
    })

    if (result.error) {
        showError(result.error.message)
        isLoading.value = false
    } else {
        await createOrder(result.paymentIntent.id)
        basketStore.items = []
        basketStore.shippingCost = 0
        basketStore.totalValue = 0
        basketStore.count = 0

        setTimeout(() => {
            return navigateTo('/checkout/success')
        }, 500)
    }
}

const createOrder = async (stripeId: string) => {
    await useFetch('/api/orders/create', {
        method: 'POST',
        body: {
            userId: user?.value?.id,
            stripeId: stripeId,
            name: `${userStore.shippingInfo.firstname} ${userStore.shippingInfo.lastname}`,
            address: userStore.shippingInfo.address,
            postcode: userStore.shippingInfo.postcode,
            city: userStore.shippingInfo.city,
            county: userStore.shippingInfo.county,
            country: userStore.shippingInfo.country,
            products: basketStore.items,
        },
    })
}

const showError = (errorMsgText: string) => {
    let errorMsg = document.querySelector('#card-error')!

    errorMsg.textContent = errorMsgText
    setTimeout(() => {
        errorMsg.textContent = ''
    }, 4000)
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
                Payment
            </h1>

            <div
                class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
            >
                <section class="lg:col-span-7">
                    <form @submit.prevent="pay()">
                        <div
                            class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            id="card-element"
                        />

                        <p
                            id="card-error"
                            role="alert"
                            class="mt-4 text-sm font-semibold text-red-700"
                        />

                        <button
                            type="submit"
                            class="flex items-center justify-center w-full px-4 py-3 mt-10 text-base font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                            <Spinner v-if="isLoading" />
                            <div v-else>Place order</div>
                        </button>
                    </form>
                </section>

                <OrderSummary
                    :shipping="basketStore.shippingCost"
                    stage="payment"
                    :is-loading="isLoading"
                />
            </div>
        </div>
    </div>
</template>
