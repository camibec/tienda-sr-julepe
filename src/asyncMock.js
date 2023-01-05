const products = [
    {
        id: '1',
        name: 'Golocan',
        price: 120,
        category: 'snacks',
        img: 'buscar imagen',
        stock: 60,
        description: 'sabor chocolate'

    },
    {
        id: '2',
        name: 'Oreja',
        price: 80,
        category: 'snacks',
        img: 'buscar imagen',
        stock: 100,
        description: 'orejas angus sin quimicos'
    },
]

export const getProducts = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}