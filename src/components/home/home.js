import jquery from "jquery";
export default (window.$ = window.jQuery = jquery);


$(document).ready(function(){
    const items = $(".home__header__menu__item");
    $(".home__header__menu > a, .home__down-btn").click(function(e) {
        for(let i = 0; i < items.length; i++) {
            if(items[i] == this) {
                var number = i;
                break;
            }
            var number = 0;
        }
        e.preventDefault();
        goToByScroll(this.id, number);
    });
})

function goToByScroll(id, number) {
    id = id.replace("-link", "");
    $('html,body').stop(true, false).animate({
        scrollTop: $("#" + id).offset().top
    }, {duration: 350 * (number + 1)});
}

