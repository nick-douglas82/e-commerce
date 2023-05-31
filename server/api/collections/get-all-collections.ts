import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    return (await prisma.category.findMany()).sort((a, b) =>
        a.name.localeCompare(b.name)
    )
})
