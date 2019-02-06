function Pizza(toppingOne, toppingTwo, toppingThree, size) {
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
  this.size = size;
};

Pizza.prototype.price = function() {
  var totalPrice = this.toppingOne + this.toppingTwo + this.toppingThree + this.size;
  console.log(totalPrice);
  if (this.size < 1) {
    alert("Error. Please enter a size for your pizza.");
  }
  else if (1 <= totalPrice && totalPrice <= 2) {
    return 1 + ".00";
  }
  else if (totalPrice == 3) {
    return 2 + ".00";
  }
  else if (totalPrice == 4) {
    return 3 + ".00";
  }
  else if (totalPrice == 5) {
    return 4 + ".00";
  }
  else if (totalPrice == 6) {
    return 5 + ".00";
  }
  else if (11 <= totalPrice && totalPrice <= 24) {
    return 99 + ".00";
  }
  else if (totalPrice > 30) {
    return 5 + ".00 (surprisingly)";
  }
};

$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    var topping1 = parseInt($("#toppings1").val());
    var topping2 = parseInt($("#toppings2").val());
    var topping3 = parseInt($("#toppings3").val());
    var size = parseInt($("#size").val());
    var freshHotAndReadyNonBrandSpecificPizza = new Pizza(topping1, topping2, topping3, size);

    $("#result").text("$" + freshHotAndReadyNonBrandSpecificPizza.price() + " is your total cost. Please pay it.");
  });
});
