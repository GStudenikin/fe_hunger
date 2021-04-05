import jquery from "jquery";
export default (window.$ = window.jQuery = jquery);

$(document).ready(function(){
    var elems = $(".specialties__slider__info");
    order(elems.length, "#s", "#s0")
    $(".selected").animate({opacity: 1}, 0);
    $(".specialties__control__block__button").click(function(e) {
        var id = this.id.replace("-btn", "");
        var selected = $(".selected");
        var elems = $(".specialties__slider__info");
        if (id != selected.attr('id')) {
            var old = $(".selected");
            old.animate({opacity: 0}, 500);
            old.removeClass("selected");
            var currentId = "#".concat(id);
            console.log("curId", currentId);
            var current = $(currentId);
            current.addClass("selected");
            setTimeout(function (){
                order(elems.length, "#s", currentId);
                current.animate({opacity: 1}, 500);
            }, 500);
        } else {
        }
    });
})

function order(elems, idPrefix, currentId) {
    $(currentId).css({'order' : '1'});
    for(let i = 1; i < elems; i++) {
        $(idPrefix+((i+parseInt(currentId.replace(idPrefix, "")))%elems)).css({"order" : (i+1)%elems});
    }
}