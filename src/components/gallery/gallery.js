import jquery from "jquery";
export default (window.$ = window.jQuery = jquery);

$(document).ready(function(){
  $(".gallery__imgs").width($(".gallery__imgs").width());
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
})