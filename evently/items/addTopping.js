function(e, topping) {
  //$.log('start_addTopping.js: ' + topping);
  $$(this).toppings.push({"topKey" : topping.slice(1),"index": $$(this).toppings.length});
  //for (i=0;i<$$(this).toppings.length; i++) {
  //  $.log('addTopping[' + i + ']: ' + $$(this).toppings[i]);
  //}
  //$.log('end_addTopping.js: ' + topping);
  $(this).trigger('topping');
}