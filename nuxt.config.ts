import { resolve } from 'path'
// @ts-nocheck
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    modules: [
        'nuxt-lodash',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
    ],
    runtimeConfig: {
        public: {
            stripePK: process.env.STRIPE_PK_KEY,
        },
        app: {
            head: {
                script: [{ src: 'https://js.stripe.com/v3/', defer: true }],
                charset: 'utf-8',
                viewport: 'width=device-width, initial-scale=1',
            },
        },
    },
    typescript: {
        typeCheck: true,
        shim: false,
        strict: true,
    },
})
