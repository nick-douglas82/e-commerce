<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

useHead({
    meta: [
        {
            name: 'robots',
            content: 'noindex, nofollow',
        },
        {
            name: 'X-Robots-Tag',
            content: 'noindex',
        },
    ],
})
</script>

<template>
    <Header />
    <slot />
    <Footer />
</template>
