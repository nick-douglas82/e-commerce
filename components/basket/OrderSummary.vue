<script setup lang="ts">
import { price } from '~/helpers/utils'

const { subTotal, orderTotal } = defineProps({
    subTotal: {
        type: Number as PropType<number>,
        required: true,
    },
    orderTotal: {
        type: Number as PropType<number>,
        required: true,
    },
})
</script>

<template>
    <section
        aria-labelledby="summary-heading"
        class="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
            Order summary
        </h2>

        <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
                <dt class="text-sm text-gray-600">Subtotal</dt>
                <dd class="text-sm font-medium text-gray-900">
                    {{ price(subTotal) }}
                </dd>
            </div>
            <div
                class="flex items-center justify-between pt-4 border-t border-gray-200"
            >
                <dt class="text-base font-medium text-gray-900">Order total</dt>
                <dd class="text-base font-medium text-gray-900">
                    {{ price(orderTotal) }}
                </dd>
            </div>
        </dl>

        <div class="mt-6">
            <button
                type="submit"
                class="w-full px-4 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
                Checkout
            </button>
        </div>
    </section>
</template>
