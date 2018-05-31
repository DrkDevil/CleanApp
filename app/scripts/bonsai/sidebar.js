/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
$("#left-toggle").click(function(e) {
  e.preventDefault();
$("#pageWrapper").toggleClass("left-toggled");
});
$("#right-toggle").click(function(e) {
  e.preventDefault();
$("#pageWrapper").toggleClass("right-toggled");
});
