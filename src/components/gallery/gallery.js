import jquery from "jquery";
export default (window.$ = window.jQuery = jquery);

$(document).ready(function(){
  $(function () {
      $(".gallery__control__right").mouseover(function () {
        $(".gallery__imgs").animate({
          "left": ($(window).width() - $(".gallery__imgs").width()),
          "right": 0
        }, 3000 * (1 + (parseInt($(".gallery__imgs").css("left").replace("px",""))/($(".gallery__imgs").width() - $(window).width()))), "linear");
      }).mouseout(function () {
        $(".gallery__imgs").stop();
      });
      $(".gallery__control__left").mouseover(function () {
        $(".gallery__imgs").animate({
          "right": ($(window).width() - $(".gallery__imgs").width()),
          "left": 0
        }, 3000 * (- (parseInt($(".gallery__imgs").css("left").replace("px",""))/($(".gallery__imgs").width()-$(window).width()))), "linear");
      }).mouseout(function () {
        $(".gallery__imgs").stop();
      });
  });
  $(window).resize(function() {
      $(".gallery__imgs").css("left", ($(window).width() - $(".gallery__imgs").width())/2);
      $(".gallery__imgs").css("right", ($(window).width() - $(".gallery__imgs").width())/2);
  });
  $('.gallery__imgs__item').click(function() {
    $('body').append('<div/ class="image-demo">');
    $('.image-demo').append('<img class="image-demo__img" src='+$(this).attr("src")+">");
    $("image-demo__img").ready(function(){
      $(".image-demo").animate({opacity: 1})
    });
  });
  $('body').click(function(event) {
    if($(event.target).attr("class") === "image-demo") {
      $(".image-demo").fadeOut();
      setTimeout(function (){
        $(".image-demo").remove();
      }, 400)
    }
  });
});