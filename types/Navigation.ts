export type Link = { name: string; href: string }

export type Navigation = {
    categories: {
        name: string
        featured: Link[]
        collection: Link[]
        categories: Link[]
        brands: Link[]
    }[]
    pages: Link[]
}
