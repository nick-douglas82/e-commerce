module.exports = [
    {
        productId: 1,
        connections: [{ id: 2 }],
    },
    {
        productId: 2,
        connections: [{ id: 1 }],
    },
    {
        productId: 3,
        connections: [{ id: 4 }, { id: 5 }, { id: 6 }],
    },
    {
        productId: 4,
        connections: [{ id: 3 }, { id: 5 }, { id: 6 }],
    },
    {
        productId: 5,
        connections: [{ id: 3 }, { id: 4 }, { id: 6 }],
    },
    {
        productId: 6,
        connections: [{ id: 3 }, { id: 4 }, { id: 5 }],
    },
    {
        productId: 8,
        connections: [{ id: 9 }, { id: 10 }],
    },
    {
        productId: 9,
        connections: [{ id: 8 }, { id: 10 }],
    },
    {
        productId: 10,
        connections: [{ id: 8 }, { id: 9 }],
    },
]
