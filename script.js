const products = [
    { id: 1, title: 'Shirt', price: 150, imgSrc: 'https://via.placeholder.com/200x150' },
    { id: 2, title: 'Socks', price: 50, imgSrc: 'https://via.placeholder.com/200x150' },
    { id: 3, title: 'Jacket', price: 350, imgSrc: 'https://via.placeholder.com/200x150' },
    { id: 4, title: 'Shoes', price: 250, imgSrc: 'https://via.placeholder.com/200x150' },
];

const app = new Vue({
    el: '#app',

    data() {
        return {
            goods: [...products],
            userSearch: '',
            userSearchResult: '',
            cartItems: [],
            visibility: false
        }
    },

    computed: {
        fetchGoods() {
            return this.goods.filter(item => {
                return item.title.toLowerCase().includes(this.userSearchResult);
            })
        }
    },

    methods: {
        searchResult() {
            this.userSearchResult = this.userSearch;
        },

        cartVisibility() {
            this.visibility = !this.visibility;
        },

        addProduct(item) {
            let find = this.cartItems.find(el => el.id === item.id);
            if (find) {
                find.quantity++;
            } else {
                const prod = Object.assign({ quantity: 1 }, item);
                this.cartItems.push(prod)
            }
        },

        deleteItem(item) {
            if (item.quantity > 1) {
                item.quantity--;
            }
            else {
                this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
        }
    }

})