import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const product = await prisma.products.findFirst({
        where: { slug: event?.context?.params?.slug },
        include: {
            categories: true,
            variants: true,
        },
    })
    return product
})
