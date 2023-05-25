export interface Product {
    description: string
    id: number
    img: string
    name: string
    notes: string | null
    price: number
    slug: string
    createdAt: string
    updatedAt: string
}

export interface Category {
    id: number
    name: string
    slug: string
    description: string
}

export interface ProductWithCategories extends Product {
    categories: Category[]
}
