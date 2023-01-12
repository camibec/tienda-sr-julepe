const products = [
    {
        id: '1',
        name: 'Golocan',
        price: 120,
        category: 'snacks',
        img: 'https://static.wixstatic.com/media/c42b32_429ad8d36b424375af25b3a0a2138f41~mv2.png/v1/crop/x_76,y_0,w_1348,h_1661/fill/w_630,h_776,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/330.png',
        stock: 60,
        description: 'sabor chocolate'

    },
    {
        id: '2',
        name: 'Oreja',
        price: 80,
        category: 'snacks',
        img: 'https://www.anguspet.com/wp-content/uploads/2019/06/An_treats_snacks_mascotas_orejas_12.png',
        stock: 100,
        description: 'orejas angus sin quimicos'
    },
]

export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}