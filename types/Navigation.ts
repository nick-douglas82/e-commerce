export type Link = { name: string; href: string }

export type Navigation = {
    categories: {
        name: string
        featured: Array<Link>
        collection: Array<Link>
        categories: Array<Link>
        brands: Array<Link>
    }[]
    pages: Array<Link>
}
