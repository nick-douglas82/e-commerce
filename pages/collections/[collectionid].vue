<script setup lang="ts">
const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt:
            'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt:
            'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt:
            'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt:
            'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]
</script>

<template>
    <main>
        <div class="bg-white">
            <div class="mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">
                    Bins & Accessories
                </h1>
                <p class="mt-4 max-w-xl text-sm text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    sit animi temporibus repudiandae id accusamus vero
                    cupiditate aut cumque? Itaque aliquid porro at ullam
                    eligendi. Nobis repellendus unde tempora dolorem?
                </p>
            </div>
        </div>

        <section
            aria-labelledby="products-heading"
            class="mx-auto px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8"
        >
            <h2 id="products-heading" class="sr-only">Products</h2>

            <div
                class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
            >
                <a
                    v-for="product in products"
                    :key="product.id"
                    :href="product.href"
                    class="group"
                >
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                    >
                        <img
                            :src="product.imageSrc"
                            :alt="product.imageAlt"
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">
                        {{ product.name }}
                    </h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">
                        {{ product.price }}
                    </p>
                </a>
            </div>
        </section>
    </main>
</template>
