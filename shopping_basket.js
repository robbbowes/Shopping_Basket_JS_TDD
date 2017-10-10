var ShoppingBasket = function(discountCardBoolean) {
  this.itemsInBasket = [];
  this.discountCardBoolean = discountCardBoolean;
}

ShoppingBasket.prototype.add = function(item){
  this.itemsInBasket.push(item);
}

ShoppingBasket.prototype.remove = function(itemToRemove){

  var indexPosition = this.itemsInBasket.indexOf(itemToRemove);
  this.itemsInBasket.splice(indexPosition, 1);
}

ShoppingBasket.prototype.totalCost = function() {
  var bill = 0;
  for (item of this.itemsInBasket) {
    bill += item.price;
  }
  if (bill > 20) {
    bill = (bill * 0.9);
  }
  if (this.discountCardBoolean === true) {
    bill = (bill * 0.95);
  }
  return bill;
}


module.exports = ShoppingBasket;
