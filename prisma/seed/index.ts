const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const Categories = require('./data/categories')
const Products = require('./data/products')
const Variants = require('./data/variants')

async function runSeeders() {
    await Promise.all(
        Categories.map(async (category: any) =>
            prisma.category.create({
                data: category,
            })
        )
    )

    setTimeout(async () => {
        await Promise.all(
            Products.map(async (product: any) =>
                prisma.products.create({
                    data: product,
                })
            )
        )
    }, 1000)

    setTimeout(async () => {
        await Promise.all(
            Variants.map(async (variant: any) =>
                prisma.products.update({
                    where: {
                        id: variant.productId,
                    },
                    data: {
                        variants: {
                            connect: variant.connections,
                        },
                    },
                })
            )
        )
    }, 5000)
}
runSeeders()
    .catch((e) => {
        console.error(`There was an error while seeding: ${e}`)
        process.exit(1)
    })
    .finally(async () => {
        console.log('Successfully seeded database. Closing connection.')
        await prisma.$disconnect()
    })
