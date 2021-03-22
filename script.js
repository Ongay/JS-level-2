
class ProductList {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        this.goods.forEach(product => {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        });
    }
    totalSum() {       // Для ДЗ пришлось сконструировать класс, надеюсь конструкция правильная
        let sum = 0;
        this.goods.forEach(product => {
            sum += product.price;
        })
        return sum;
    }
}

class ProductItem {
    constructor(product, img = "https://placehold.it/200x150") {
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="goods-item">
                    <img src="${this.img}" width="200" height="150" alt="image">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="buy-button cart-button">Купить</button>
                </div>`;
    }
}
let list = new ProductList();
list.render();
console.log(list.totalSum());







// ДЗ первое по классам корзины
class Basket {
    constructor() {

    }
    addItem() {     // Add choosen items to basket list. Expected to put this method on button of product card and call it by object name Basket.addItem()

    }
    continueShopping() {    // To return on shopping at immediate click

    }
    emptyBasket() {     // To delete all items in the basket at one click

    }
    checkOut() {    // To check all choosen items, and move to payment page

    }
}

class BasketItem {
    constructor() {

    }
    deleteItem() {  // To delete specific item from basket list

    }
    increaseNumberOfItem() {    // To increase the number of specific item. Each click is plus one item

    }
    reduceNumberOfItem() {    // To reduce the number of specific item. Each click is minus one item

    }
    addToFavorites() {    // To add specific item to favorites list, so user's most buying product will be easy to fast buy

    }
    searchSimilarProducts() {   // To search similar product in the website, to let user compare prices for similar products from different sellers or brands

    }
}