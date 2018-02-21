'use strict';
//AIIF

(function () {
    console.log('Hi! We did it!');

    //object Product

    function Product(name, price, bestBefore) {
        var d = bestBefore.split('-')
        this.id = (function () {
            return 10000 + Math.floor(Math.random() * 90000);
        })(),
            this.name = name,
            this.price = price,
            this.bestBefore = new Date(d[2], d[1] - 1, d[0]),
            this.getInfo = function () {
                var code = this.name.substring(0, 1) + this.name.substring((this.name.length - 1));
                // var date = this.bestBefore.substring(0,10);
                console.log(code.toUpperCase() + this.id + ', ' + this.name + ', ' + this.price.toFixed(2) + ', ' + this.bestBefore);
            }
    }

    var coffee = new Product('Minas', 125.50, '30-4-2018');
    var chocolate = new Product('Galeb', 239.99, '15-06-2019');
    var yogurt = new Product('Balans', 112.50, '10-02-2018');

    //array of objects ShoppingBag

    function ShoppingBag() {
        this.list = [],
        this.avgPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                console.log(this.list[i].price);
                 sum += this.list[i].price;
            }
            // console.log(sum);
            return (sum /= this.list.length).toFixed(3);
        },
        this.addProduct = function (product){
            if (product.bestBefore-new Date()>0) this.list.push(product);
            else console.log('Kakva ste vi ovo prodavnica!!?');
        },
        this.getMostExpensive = function (){
            var max = [this.list[0].price, 0];
            for (var i = 1; i < this.list.length; i++) {
                if (max[0]<this.list[i].price) max=[this.list[i].price, i];
            } 
            this.list[max[1]].getInfo();
        },
        this.totalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                sum += this.list[i].price;
            }
            return sum;
        }

    }

    function PaymentCard (balance, active, date) {
        var d = date.split('-');
        this.balance = balance,
        this.active = active,
        this.valid = new Date ('20'+d[1], d[0])
    }

    function checkoutAndBuy (card, shoppingCart) {
        if (card.active && (card.valid - new Date()>0)) {
            if (card.balance >= shoppingCart.totalPrice()) {
                console.log('Uspesna kupovina!');
            } else console.log('Nemate dovoljno novca! Nedostaje Vam jos ', shoppingCart.totalPrice - card.balance());
            
        } else console.log('Kartica je istekla ili je blokirana!');
    }




    var bag1 = new ShoppingBag();
    bag1.addProduct(coffee);
    bag1.addProduct(chocolate);
    bag1.addProduct(yogurt);
    bag1.getMostExpensive();
    console.log(bag1, bag1.avgPrice());
    var card = new PaymentCard(1000,true,'04-19');
    // console.log(bag1.totalPrice());
    checkoutAndBuy(card, bag1);




})();
// console.log(new Date);