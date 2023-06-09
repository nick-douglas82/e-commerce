import { Product } from '~/types/Products'
export type CollectionWithProducts = {
    id: number
    name: string
    slug: string
    img: string
    products: Array<Product>
    description: string
}

export type Collection = Omit<CollectionWithProducts, 'products'>
