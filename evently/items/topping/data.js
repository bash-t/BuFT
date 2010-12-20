function(e, topping) {
//e is the event, topping is the argument
  //console.log('data.js topping:' + topping);
  //return {toppingVal : topping.slice(1)};
  return {toppingsVal : $$(this).toppings};
}