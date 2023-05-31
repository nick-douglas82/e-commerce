const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const Categories = require('./data/categories')
const Products = require('./data/products')

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
