function Cart(catalogue) {
    this.order = [];
    this.add = function add(productId) {
        // añadir al carrito
        if (catalogue[productId] == null) {
            throw new Error("No se admiten productos que no están en catálogo.");
        }
        this.order.push(productId);
    };
    this.total = function total() {
        if (this.order.length === 0) return 0;
        var amount = [];
        var sum = 0;
        for (var index = 0; index < this.order.length; index++) {
            var productId = this.order[index];
            if(amount[productId] === undefined) {
                amount[productId] = 0;
            }
            amount[productId]++;
            if (catalogue[productId].discountAvailable) {
                if(amount[productId] % catalogue[productId].discountWhen !== 0) {
                    sum = sum + catalogue[productId].price;
                }
            } else {
                sum = sum + catalogue[productId].price;
            }
        }
        return sum;
    };
};

module.exports = Cart;