const products = [
    { id: 1, title: 'Shirt', price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: 250 },
];

let header = new Vue({
    el: '#header',
    data() {
        return {
            isVisible: false,
            searchBox: '',
            searchResult: '',
            cartItems: [],
        }
    },
    computed: {
        searchHandler() {
            return products.filter(item => {
                return item.title.toLowerCase().includes(this.searchResult);
            });
        }
    },
    methods: {
        searchBoxer() {
            this.searchResult = this.searchBox;
        },
        cartVisible() {
            this.isVisible = !this.isVisible;
        }
    },
})


let goodsList = new Vue({
    el: '.goods-list',
    // data() {
    //     return {
    //         goods: [],
    //     };
    // },

    // created() {
    //     this.goods = header.searchHandler;
    // },

    computed: {
        render() {
            return header.searchHandler;
        },
        // addId() {
        //     let btns = document.querySelectorAll('.goods-item');
        //     console.log();

        //     return btns;
        // }
    },
    // methods: {
    //     addItem() {
    //         this.addId;

    //     }
    // }
});
console.log(goodsList.render);







// class ProductList {
//     constructor(container = '.goods-list') {
//         this.container = container;
//         this.goods = [];
//         this.fetchProducts();
//     }
//     fetchProducts() {
//         this.goods = [
//             { title: 'Shirt', price: 150 },
//             { title: 'Socks', price: 50 },
//             { title: 'Jacket', price: 350 },
//             { title: 'Shoes', price: 250 },
//         ];
//     }
//     render() {
//         const block = document.querySelector(this.container);
//         this.goods.forEach(product => {
//             const productObj = new ProductItem(product);
//             block.insertAdjacentHTML('beforeend', productObj.render());
//         });
//     }
//     totalSum() {
//         // let sum = 0;
//         // this.goods.forEach(product => {
//         //     sum += product.price;
//         // })
//         // return sum;
//         let res = this.goods.reduce((sum, item) => sum += item.price, 0);
//         window.onload = () => alert(res);
//     }
// }

// class ProductItem {
//     constructor(product, img = "https://placehold.it/200x150") {
//         this.title = product.title;
//         this.price = product.price;
//         this.img = img;
//     }
//     render() {
//         return `<div class="goods-item">
//                     <img src="${this.img}" width="200" height="150" alt="image">
//                     <h3>${this.title}</h3>
//                     <p>${this.price}</p>
//                     <button class="buy-button cart-button">Купить</button>
//                 </div>`;
//     }
// }
// let list = new ProductList();
// list.render();
// console.log(list.totalSum());







// // ДЗ первое по классам корзины
// class Basket {
//     constructor() {
//         this.container;
//         this.items = [];
//     }
//     addItem() {

//     }
//     removeItem() {

//     }
//     changeItemQuantity() {

//     }
//     render() {

//     }
// }

// class BasketItem {
//     constructor() {

//     }
//     render() {

//     }
// }