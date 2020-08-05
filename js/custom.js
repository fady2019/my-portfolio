$(document).ready(function(){
    //nice scroll
    $("body").niceScroll({
        cursorcolor:"#00ff2a",
        cursorborder: "1px solid #00ff2a",
        cursorborderradius: "5px",
        cursorwidth: "8px",
        zindex:10000
    });

    //swiper
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,  
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    swiper.slideTo(2);

    //stop loading 
    $(".loadingPage").delay(5000).fadeOut(500, function(){
        fullMyDes();
    })
    function fullMyDes(){
        let Delay = 0;
        $("svg path").each(function(){
            $(this).delay(Delay).animate({
                "strokeDashoffset":"0px"
            },750,function(){
                $(this).css("strokeDasharray","0px");

                if($(this).is(":last-of-type")){
                    $(".home .desMyself svg").css({"animation": "fillBack .5s linear forwards"})
                }

            });
            Delay += 500;
        })
    }


    //open and close menu
    function showMenu(){
        $(".navbar .pointsWithMenu").animate({
            "left":"0"
        },750)
    }
    function hideMenu(){
        $(".navbar .pointsWithMenu").animate({
            "left":"-100%"
        },750)
    }
    function scrollToSection(ele){
        let elOffset = $("." + ele.data("name")).offset().top - $(".navbar").outerHeight();
        $("body, html").animate({
            "scrollTop": elOffset
        },750)
    }
    // function sync(){

    // }

    $(".navbar a").click(function(e){ e.preventDefault() })
    $(".navbar .menu").click(function(){ showMenu(); })
    $(".navbar .pointsWithMenu i").click(function(){ hideMenu(); })

    $(".navbar li").click(function(){
        scrollToSection($(this))
    })

    $(".navbar .pointsWithMenu ul li").click(function(){ hideMenu() })

    //sync and sync animation
    function checkOffsetFunc(){
        let windowScrollTop = $(window).scrollTop(),
            aboutMeOffsetTop = $('.aboutMe').offset().top,
            myWorksOffsetTop = $('.myWorks').offset().top,
            mySkillsOffserTop = $('.mySkills').offset().top,
            subtractValue = 200;

        if(windowScrollTop >= (aboutMeOffsetTop - subtractValue) ){
            $('.aboutMe .myImage').addClass("animate__bounceInLeft")
            $('.aboutMe .MyInfo').addClass("animate__bounceInRight")
            $('.aboutMe .myImage').removeClass("animate__bounceOutLeft")
            $('.aboutMe .MyInfo').removeClass("animate__bounceOutRight")
        }else{
            $('.aboutMe .myImage').removeClass("animate__bounceInLeft")
            $('.aboutMe .MyInfo').removeClass("animate__bounceInRight")
            $('.aboutMe .myImage').addClass("animate__bounceOutLeft")
            $('.aboutMe .MyInfo').addClass("animate__bounceOutRight")
        }

        if(windowScrollTop >= (myWorksOffsetTop - subtractValue) ){
            $('.myWorks .subContainer').addClass("animate__fadeInUp")
            $('.myWorks .subContainer').removeClass("animate__fadeOutDown")
        }else{
            $('.myWorks .subContainer').removeClass("animate__fadeInUp")
            $('.myWorks .subContainer').addClass("animate__fadeOutDown")
        }

        if(windowScrollTop >= (mySkillsOffserTop - subtractValue) ){
            $('.mySkills .subContainer .education').addClass("animate__bounceInRight")
            $('.mySkills .subContainer .skills').addClass("animate__bounceInLeft")
            $('.mySkills .subContainer .education').removeClass("animate__bounceOutRight")
            $('.mySkills .subContainer .skills').removeClass("animate__bounceOutLeft")
        }else{
            $('.mySkills .subContainer .education').addClass("animate__bounceOutRight")
            $('.mySkills .subContainer .skills').addClass("animate__bounceOutLeft")
            $('.mySkills .subContainer .education').removeClass("animate__bounceInRight")
            $('.mySkills .subContainer .skills').removeClass("animate__bounceInLeft")
        }

        if( windowScrollTop > 800 ){
            $(".up").fadeIn()
        }else{
            $(".up").fadeOut()
        }

        //sync links
        $(".navbar li").each(function(){
            let element = '.' + $(this).data('name'),
                elementOffsetTop = $(element).offset().top;
            if(windowScrollTop >= (elementOffsetTop-subtractValue) && !$(this).hasClass('active') ){
                $(this).addClass('active').siblings().removeClass('active')
            }
        })
    };
    checkOffsetFunc();
    $(window).scroll(function(){
        checkOffsetFunc();
    })

    //set rate of skills
    $(".mySkills .skills .allSkills .skill").each(function(){
        let rate = $(this).find("#progress").data('rate');
        $(this).find("#langInfo #rate").text(rate + '%');
        $(this).find("#progress span").css('width', rate + '%')
    })

    //scroll up
    $(".up").click( _ => {
        $('body, html').animate({
            scrollTop: 0
        },1500)
    })
})
