import { PrismaClient, Products } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // const order = await prisma.orders.create({
    //     data: {
    //         userId: body.userId,
    //         stripeId: body.stripeId,
    //         name: body.name,
    //         address: body.address,
    //         postcode: body.postcode,
    //         city: body.city,
    //         county: body.county,
    //         country: body.country,
    //         products: {
    //             connect: body.products.map((product: any) => ({
    //                 id: Number(product.product.id),
    //             })),
    //         },
    //     },
    // })

    const order = await prisma.orders.create({
        data: {
            userId: body.userId,
            stripeId: body.stripeId,
            name: body.name,
            address: body.address,
            postcode: body.postcode,
            city: body.city,
            county: body.county,
            country: body.country,
        },
    })

    body.products.forEach(async (product: any) => {
        await prisma.orderItem.create({
            data: {
                orderId: order.id,
                productId: product.product.id,
                quantity: product.count,
            },
        })
    })

    return order
})
