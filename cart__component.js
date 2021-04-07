Vue.component('cart-component', {
    props: ['productsList'],

    template: ` <div class="cart-wrapper">
                    <button class="cart-button" @click="$root.cartVisibility">Корзина</button>
                    <div class="cart-items" v-show="$root.visibility">                    
                        <cart-item-component v-for="item of productsList" :key="item.id" :cart-product="item"></cart-item-component>
                        <p class="empty-cart-text" v-if="productsList == false"> Корзина пуста </p>
                    </div>
                </div>`,

})

Vue.component('cart-item-component', {
    props: ['cartProduct'],
    template: ` <div class="cart-item">
                    <div class="cart-item-bio">
                        
                        <img :src="cartProduct.imgSrc"/>
                        
                        <div class="item-info-wrap">
                            <h4>{{ cartProduct.title }}</h4>
                            <p>Quantity: {{ cartProduct.quantity }}</p>
                            <p>{{ cartProduct.price }}</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="-item-total-price">{{ cartProduct.quantity * cartProduct.price }}</p>
                        <button @click="$root.deleteItem(cartProduct)">&times;</button>
                    </div>

                </div>`,
    methods: {
        itemInfo() {
            console.log(app.goods);
        },
    }
})