import './main.scss';

//simple
import './components/simple/article/article.scss'
import './components/simple/illustration/illustration.scss'
import './components/simple/form/form.scss'
import './components/simple/form/form.js'

// sections
import './components/home/home.scss'
import './components/home/home.js'
import './components/about-us/about-us.scss'
import './components/team/team.scss'
import './components/booking/booking.scss'
import './components/specialties/specialties.scss'
import './components/specialties/specialties.js'
import './components/menu/menu.scss'
import './components/private-events/private-events.scss'
import './components/gallery/gallery.scss'
import './components/contact/contact.scss'
import './components/location/location.scss'
import './components/footer/footer.scss'

import './fonts/banny/banny.scss';
import './fonts/opensans/opensans.scss';
import './fonts/material-icons/material-icons.scss';

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