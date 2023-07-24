let cart = {
  items: [
    { id: 1, name: "Nike Sneakers", quantity: 0 },
    { id: 2, name: "Reebok Shirt", quantity: 0 },
    { id: 3, name: "Adidas Socks", quantity: 0 },
    { id: 4, name: "Black Shoe Laces", quantity: 0 }
  ]
};

exports.getCart = () => {
  return cart;
};

exports.setCart = (newCart) => {
  cart = newCart;
};
