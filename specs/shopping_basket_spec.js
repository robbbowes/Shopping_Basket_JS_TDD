var assert = require("assert");
var ShoppingBasket = require("../shopping_basket");
var Item = require("../item");


describe("Shopping Basket", function() {

  beforeEach(function() {
    basket = new ShoppingBasket(false);
    discountBasket = new ShoppingBasket(true);
    sardines = new Item("Sardines", 2, false);
    bread = new Item("Loaf of bread", 1, true);
    caviar = new Item("Caviar", 30, false);
  });

it("starts empty", function(){
  assert.strictEqual(basket.itemsInBasket.length, 0);
});

it("can add sardines", function(){
  basket.add(sardines);
  assert.strictEqual(basket.itemsInBasket.length, 1);
});

it("can add multiple items", function(){
  basket.add(sardines);
  basket.add(bread);
  assert.strictEqual(basket.itemsInBasket.length, 2);
});

it("can remove sardines", function() {
  basket.add(sardines);
  basket.add(bread);
  assert.strictEqual(basket.itemsInBasket.length, 2);
  basket.remove(sardines);
  assert.strictEqual(basket.itemsInBasket.length, 1);
});

it("can get total cost of items", function() {
  basket.add(sardines);
  basket.add(bread);
  assert.strictEqual(basket.totalCost(), 3);
});

it("10% discount if over 20 pounds", function() {
  basket.add(caviar);
  assert.strictEqual(basket.totalCost(), 27);
});

it("5% discount for discount card", function() {
  discountBasket.add(bread);
  assert.strictEqual(discountBasket.totalCost(), 0.95);
});


});
