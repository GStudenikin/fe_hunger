import './components/simple/form/form.js'
import './components/home/home.js'
import './components/specialties/specialties.js'

import jquery from "jquery";
export default (window.$ = window.jQuery = jquery);

    $(document).ready(function(){        
        $(window).bind('scroll', function(){
            if($(this).scrollTop() > 500)
                $('.go-top').addClass('go-top_show');
            else {
                $('.go-top').removeClass('go-top_show');
        }

        $(".go-top").click(function(e) {
            $('body,html').stop(true, false).animate({
                scrollTop: 0
            }, {duration: 1000});
        });
    });
})