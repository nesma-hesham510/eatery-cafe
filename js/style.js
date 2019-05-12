$.fn.isOnScreen = function(el){
  var element = this.get(0);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}
// slide ins
$(window).scroll(function() {
  if($(".info").isOnScreen() == true) {
  $(".info").addClass("zoomIn");
}
}).scroll();

$(".boxes img").hover(function() {
  $( this ).toggleClass("scale");
});
