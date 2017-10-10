var assert = require("assert");
var Item = require("../item");

describe("Item", function() {

  beforeEach(function() {
    sardines = new Item("Sardines", 2, false);
});

it("has a name", function() {
  assert.strictEqual(sardines.name, "Sardines");
});

it("has a price", function(){
  assert.strictEqual(sardines.price, 2);
});

it("is not eligible for bogof", function(){
  assert.strictEqual(sardines.bogof, false);
});

});
