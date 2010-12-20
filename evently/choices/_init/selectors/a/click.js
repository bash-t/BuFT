function() {
  //trigger the event topping with the parameter "cheese"
  //$(this).trigger('topping', 'cheese');
  $.log($(this).attr('href'));
  $(this).trigger('addTopping', $(this).attr('href'));
}
