import jquery from "jquery";
export default (window.$ = window.jQuery = jquery);


$(document).ready(function(){
    const items = $(".home__header__menu__item");
    console.log(items);
    $(".home__header__menu > a, .home__down-btn, .home__main__menu__button").click(function(e) {
        var number = 7;
        for(let i = 0; i < items.length; i++) {
            if(items[i].id == this.id) {
                number = i;
                break;
            }
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

