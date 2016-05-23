function Cart(catalogue) {
    this.order = {};
    this.totalPrice = 0;
    this.add = function add(productId) {
        // añadir al carrito
        if (catalogue[productId] == null) {
            throw new Error("No se admiten productos que no están en catálogo.");
        }

        if (this.order[productId] == null) {
            this.order[productId] = {amount: 0};
        }

        this.order[productId].amount++;

        if (catalogue[productId].discountAvailable) {
            if (this.order[productId].amount % catalogue[productId].discountWhen !== 0) {
                this.totalPrice = this.totalPrice + catalogue[productId].price;
            }
        } else {
            this.totalPrice = this.totalPrice + catalogue[productId].price;
        }
    };

    this.total = function total() {
        return this.totalPrice;
    };
}

module.exports = Cart;