const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

function renderGoodsItem(title = 'Item', price = 100) {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
}

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');   // Метод array.map возвращает массив, а innerHTML выводит строку, поэтому запятые между элементами, чтобы его убрать Я добавил свойсто join(''), чтобы преобразовать в массив в строку и без знаков между элементами

}
renderGoodsList(goods);



// Написал код для отображения корзины по клику
let basketSum = document.createElement('span');
basketSum.classList.add('basket-sum');
basketSum.innerHTML = "Итого 0";
console.log(basketSum);

let table;

let basketActive = false;
function renderBasket() {
    !basketActive ? basketActive = true : basketActive = false;
    if (basketActive) {
        table = `<div class="basket-wrapper"> <table class="basket"></table> </div>`;
        document.querySelector('main').insertAdjacentHTML("afterbegin", table);
        let basketWrap = document.querySelector('.basket-wrapper');
        basketWrap.append(basketSum);
    }
    else {
        document.querySelector('.basket-wrapper').remove();
    }
}
console.log(table);


// document.querySelector('.cart-button').addEventListener('click', renderBasket);
document.querySelector('.cart-button').onclick = renderBasket;

