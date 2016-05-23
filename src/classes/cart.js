function Cart(catalogue) {
    this.order = [];
    this.add = function add(productId) {
        // añadir al carrito
        if (catalogue[productId] == null) {
            throw new Error("No se admiten productos que no estén en catálogo.");
        }
        this.order.push(productId);
    };
    this.total = function total() {
        if (this.order.length === 0) return 0;
         
        var sum = 0;
        for (var index = 0; index<this.order.length; index++) {
            var productId = this.order[index];
            if (catalogue[productId].discountAvailable) {
                 
            } else {
                sum = sum + catalogue[productId].price;
            }
        }
        return sum;
    };
};

module.exports = Cart;