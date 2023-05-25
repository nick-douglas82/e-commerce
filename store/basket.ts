import { defineStore } from 'pinia'
import { BasketItem } from '~/types/Basket'
import { ProductWithCategories } from '~/types/Products'

export const useBasketStore = defineStore('basket', {
    state: () => ({
        items: [] as BasketItem[],
        totalValue: 0,
        count: 0,
    }),
    actions: {
        addItemsToBasket(item: ProductWithCategories) {
            const itemInBasket = this.items.find(
                (basketItem) => basketItem.product.id === item.id
            )

            if (!itemInBasket) {
                this.items.push({
                    product: item,
                    count: 1,
                })
            } else {
                itemInBasket.count++
            }

            this.count++
            this.totalUpBasket()
        },
        removeItemFromBasket(item: BasketItem) {
            const itemInBasket = this.items.find(
                (basketItem) => basketItem.product.id === item.product.id
            )

            if (itemInBasket) {
                if (itemInBasket.count === 1) {
                    this.items.splice(this.items.indexOf(itemInBasket), 1)
                    itemInBasket.count--
                    this.count--
                } else {
                    itemInBasket.count--
                    this.count--
                    this.totalUpBasket()
                }
            }
        },
        totalUpBasket() {
            this.totalValue = this.items.reduce(
                (acc, item) => acc + item.product.price * item.count,
                0
            )
        },
    },
})
