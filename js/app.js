$(document).ready(function(){

    // burger menu

    $('.hamburger').on('click', function(e) {
      e.preventDefault();
      $('.menu').toggleClass('slide-down');
    });

$('#menu1').click(function() {
$('html, body').animate({
    scrollTop: $("#favourite").offset().top
}, 700);
})

$('#menu2').click(function() {
$('html, body').animate({
    scrollTop: $("#maps").offset().top
}, 1000);
})

$('#menu3').click(function() {
$('html, body').animate({
    scrollTop: $("#contact").offset().top
}, 1000);
})


$('#more_info').click(function() {
$('html, body').animate({
    scrollTop: $("#history").offset().top
}, 800);
})


});
