
window.addEventListener("load", function(){
    
    var finish = document.querySelector(".load");
    
    finish.classList.add("load_finish")
    
    
});

/*================================
        manu fix part start
==================================*/



$(window).scroll(function () {

    var scroll = $(this).scrollTop();

    if (scroll > 130) {
        $(".menu").addClass("menu_fix");
    } else {
        $(".menu").removeClass("menu_fix")
    }

});



/*================================
        manu fix part end
==================================*/


$(document).ready(function () {
    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();
    $('#bar5').barfiller();
    $('#bar6').barfiller();
    $('#bar7').barfiller();
    $('#bar8').barfiller();
});


jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


/*================================
        mixer  part start
==================================*/


var mixer = mixitup('.cont');



/*================================
        mixer  part end
==================================*/

window.addEventListener("load", function(){
    
    var finish = document.querySelector(".load");
    
    finish.classList.add("load_finish")
    
    
});

/*================================
        anq part start
==================================*/



$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    
    if(scroll > 300){
        $(".anq").fadeIn();
    }
    
    else{
        $(".anq").fadeOut();
    }
});


/*================================
        anq part end
==================================*/

/*================================
        team_slider part start
==================================*/

$('.team_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoPlay:true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
 
  ]
});

/*================================
        team_slider part end
==================================*/


/*================================
        blog part start
==================================*/

$('.blog_slick').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
    }
  ]
});


/*================================
        blog part end
==================================*/
