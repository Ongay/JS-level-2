const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = 'Item', price = 100) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');   // Метод array.map возвращает массив, а innerHTML выводит строку, поэтому запятые между элементами, чтобы его убрать Я добавил свойсто join(''), чтобы преобразовать в массив в строку и без знаков между элементами
}

renderGoodsList(goods);



