var assert = require('chai').assert;
var Cart = require('../src/classes/cart.js');

// Testing system
(function() {
    var rules = {
        FUCH: { name: "Fuchikoma", price: 2500, discountAvailable: true, discountWhen: 3 },
        TACH: { name: "Tachikoma", price: 3000, discountAvailable: true, discountWhen: 4 },
        LOGI: { name: "Logicoma", price: 8000, discountAvailable: false },
        MADO: { name: "MADOX-01 Slave Trooper", price: 15000, discountAvailable: false },
        GUGD: { name: "Exoesqueleto Guges modelo D", price: 32000, discountAvailable: false },
        INGR: { name: "Ingram AV-98 Patrol Labor", price: 26000, discountAvailable: true, discountWhen: 4 },
        ZERO: { name: "Shinohara Heavy Industries Type X-0", price: 30000, discountAvailable: false },
        GRIF: { name: "Schaft Enterprises Type-j9 Griffon", price: 90000, discountAvailable: false },
        BROC: { name: "Schaft military Division Type 2B/7B Brocken", price: 10000, discountAvailable: true, discountWhen: 5 }
    };
    function assertEquals(result, expected, msg) {
        if (result === expected) {
            console.log("CORRECT", msg);
        } else {
            console.log("ERROR in test: \""+msg+"\"!! ", "Expected: " + expected + ", but got: " + result);
        }
    }
    function assertThrows(action, msg) {
        try {
            action();
        } catch (e) {
            console.log("CORRECT", msg);
            return;
        }
        console.log("ERROR in test: \""+msg+"\"!! ", "Exception not thrown");
    }
    (function() {
        var cart = new Cart(rules);
        assertEquals(cart.total(), 0, "El carro vacio no vale nada");
    })();
    (function() {
        var cart = new Cart(rules);
        assertThrows(function() { cart.add('NONE'); }, "No se aceptan productos que no estan en el catalogo");
    })();
    (function() {
        var cart = new Cart(rules);
        cart.add('FUCH');
        assertEquals(cart.total(), 2500, "El total para 1 FUCH es 2500");
    })();
    (function() {
        var cart = new Cart(rules);
        cart.add('FUCH');
        cart.add('INGR');
        cart.add('ZERO');
        assertEquals(cart.total(), 58500, "El total para 1 FUCH, 1 INGR, 1 ZERO es 58500");
    })();
    (function() {
        var cart = new Cart(rules);
        cart.add('FUCH');
        cart.add('FUCH');
        cart.add('FUCH');
        assertEquals(cart.total(), 5000, "El total para 3 FUCH es 5000");
    })();
    (function() {
        var cart = new Cart(rules);
        cart.add('FUCH');
        cart.add('FUCH');
        cart.add('TACH');
        cart.add('TACH');
        cart.add('MADO');
        assertEquals(cart.total(), 26000, "El total para 2 FUCH, 2 TACH, 1 MADO es 26000");
    });//();
    (function() {
        var cart = new Cart(rules);
        for (var i=0;i<4;i++) cart.add('FUCH');
        for (var j=0;j<10;j++) cart.add('TACH');
        cart.add('BROC');
        assertEquals(cart.total(), 41500, "El total para 4 FUCH, 10 TACH, 1 BROC es 41500");
    });//();
})();

