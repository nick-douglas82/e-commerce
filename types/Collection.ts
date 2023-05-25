import { Product } from '~/types/Products'
export type CollectionWithProducts = {
    id: number
    name: string
    slug: string
    products: Product[]
    description: string
}

export type Collection = Omit<CollectionWithProducts, 'products'>
