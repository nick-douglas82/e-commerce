import { Product } from '~/types/Products'

export type Order = {
    address: string
    city: string
    country: string
    county: string
    created_at: string
    id: number
    name: string
    postcode: string
    products: Array<Product>
}
