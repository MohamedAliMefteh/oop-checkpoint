class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product; 
        this.quantity = quantity;
    }


    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = []; 
    }

    addItem(product, quantity) {
        const item = new ShoppingCartItem(product, quantity);
        this.items.push(item);
    }


    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }


    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }


    displayCart() {
        console.log("Shopping Cart Items:");
        this.items.forEach(item => {
            console.log(`${item.product.name} - Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed(2)}`);
        });
    }
}

const product1 = new Product(1, "Laptop", 999.99);
const product2 = new Product(2, "Headphones", 199.99);
const product3 = new Product(3, "Mouse", 49.99);

const cart = new ShoppingCart();


cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);


cart.displayCart();
console.log(`Total: $${cart.getTotal().toFixed(2)}`);


cart.removeItem(2);


cart.displayCart();
console.log(`Total: $${cart.getTotal().toFixed(2)}`);
