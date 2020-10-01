$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

var myElement = document.querySelector("header");

var headroom = new Headroom(myElement, {
  tolerance: {
    up: 20,
    down: 5,
  },
  offset: 20,
});
headroom.init();

// COLOR MODE
$(".colormode").click(function () {
  $(".colormode-icon").toggleClass("active");
  $("body").toggleClass("dark-mode");
});
