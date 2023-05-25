const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seedProducts() {
    try {
        await prisma.products.create({
            data: {
                name: 'Porta™ 40L Easy-empty Pedal Bin',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: 'https://picsum.photos/id/21/800/800',
                slug: 'porta-40l-easy-empty-pedal-bin-grey',
                price: 14900,
                categories: {
                    connect: [{ id: 1 }],
                },
            },
        })
        await prisma.products.create({
            data: {
                name: 'Porta™ 40L Easy-empty Pedal Bin',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: 'https://picsum.photos/id/20/800/800',
                slug: 'porta-40l-easy-empty-pedal-bin-blue',
                price: 14900,
                categories: {
                    connect: [{ id: 1 }],
                },
                variants: {
                    connect: [{ id: 1 }],
                },
            },
        })
        await prisma.products.create({
            data: {
                name: 'Totem Max 60L Waste & Recycling Bin',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: 'https://picsum.photos/id/15/800/800',
                slug: 'totem-max-60l-waste-recycling-bins-stone',
                price: 19900,
                categories: {
                    connect: [{ id: 1 }],
                },
            },
        })
        await prisma.products.create({
            data: {
                name: 'Totem Max 60L Waste & Recycling Bin',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: 'https://picsum.photos/id/17/800/800',
                slug: 'totem-max-60l-waste-recycling-bins-black',
                price: 19900,
                categories: {
                    connect: [{ id: 1 }],
                },
            },
        })
        await prisma.products.create({
            data: {
                name: 'Totem Max 60L Waste & Recycling Bin',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: 'https://picsum.photos/id/13/800/800',
                slug: 'totem-max-60l-waste-recycling-bins-grey',
                price: 19900,
                categories: {
                    connect: [{ id: 1 }],
                },
            },
        })
        await prisma.products.create({
            data: {
                name: 'Totem Max 60L Waste & Recycling Bin',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: 'https://picsum.photos/id/11/800/800',
                slug: 'totem-max-60l-waste-recycling-bins-steel',
                price: 22900,
                categories: {
                    connect: [{ id: 1 }],
                },
            },
        })
        await prisma.products.create({
            data: {
                name: 'Titan 30L Trash Compactor',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: 'https://picsum.photos/id/8/800/800',
                slug: 'titan-30l-trash-compactor-stainless-steel',
                price: 19900,
                categories: {
                    connect: [{ id: 1 }],
                },
            },
        })
        await prisma.products.create({
            data: {
                name: 'Totem Compact 40L Waste & Recycling Bin',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: 'https://picsum.photos/id/9/800/800',
                slug: 'totem-compact-40l-waste-recycling-bins-stone',
                price: 17900,
                categories: {
                    connect: [{ id: 1 }],
                },
            },
        })
        await prisma.products.create({
            data: {
                name: 'Totem Compact 40L Waste & Recycling Bin',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: 'https://picsum.photos/id/2/800/800',
                slug: 'totem-compact-40l-waste-recycling-bins-grey',
                price: 17900,
                categories: {
                    connect: [{ id: 1 }],
                },
            },
        })
        await prisma.products.create({
            data: {
                name: 'Totem Compact 40L Waste & Recycling Bin',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: 'https://picsum.photos/id/5/800/800',
                slug: 'totem-compact-40l-waste-recycling-bins-steel',
                price: 19900,
                categories: {
                    connect: [{ id: 1 }],
                },
            },
        })
        await prisma.products.create({
            data: {
                name: '2 Replacement Odour Filters',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: 'https://picsum.photos/id/20/800/800',
                slug: 'replacement-odour-filters-black',
                price: 900,
                categories: {
                    connect: [{ id: 1 }],
                },
            },
        })
        await prisma.products.create({
            data: {
                name: 'IW2 Food Waste 50 Caddy Liners',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: 'https://picsum.photos/id/7/800/800',
                slug: 'food-waste-bin-liners-iw2-white',
                price: 900,
                categories: {
                    connect: [{ id: 1 }],
                },
            },
        })
    } catch (error) {
        console.error(error)
    } finally {
        await prisma.$disconnect()
    }
}

async function seedCategory() {
    try {
        await prisma.category.create({
            data: {
                name: 'Bins & Accessories',
                description:
                    'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                slug: 'bins-accessories',
            },
        })

        await prisma.category.create({
            data: {
                name: 'Laundry',
                description:
                    'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                slug: 'laundry',
            },
        })

        await prisma.category.create({
            data: {
                name: 'Kitchen & Cooking',
                description:
                    'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                slug: 'kitchenware',
            },
        })

        await prisma.category.create({
            data: {
                name: 'Storage & Organisation',
                description:
                    'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                slug: 'storage',
            },
        })

        await prisma.category.create({
            data: {
                name: 'Bathroom',
                description:
                    'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                slug: 'bathroom',
            },
        })

        await prisma.category.create({
            data: {
                name: 'Cleaning',
                description:
                    'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                slug: 'cleaning',
            },
        })
    } catch (error) {
        console.error(error)
    } finally {
        await prisma.$disconnect()
    }
}

seedCategory()
seedProducts()
