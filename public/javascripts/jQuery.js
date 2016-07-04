$(document).ready(function() {
  $(window).load(function() {
    isMobile = false;
    isiPhone6 = false;
    // console.log(isMobile + '      +_+_+_+_+_+_+_ isMobile')
    window.addEventListener('scroll', function(e){
      console.log("HITSSSSSS")
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 1,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
            console.log("if addheader hits");
        } else {
            if (classie.has(header,"smaller")) {
              console.log("removeheader hits ")
                classie.remove(header,"smaller");
            }
        }
    });


    // // ___+_+_+_+_ ANIMATE THE METERS _+_+_+_+_+_+____

    // $(".meter > span").each(function() {
    //   console.log('meter hits')
    //   $(this)
    //     .data("origWidth", $(this).width())
    //     .width(0)
    //     .animate({
    //       width: $(this).data("origWidth")
    //       // or + "%" if fluid
    //     }, 1200);
    // });


    if($('.iphone6').css('display') === 'none') {
      isiPhone6 = true;
      $('.aboutMeImage').css('display','none');
      $('.aboutMeImageMobile').css('display','block');
      $('.footer').css('display','none');
    }

    if($('.header').css('height')>'500px' && $('.iphone6').css('display') != 'none') {
        isMobile = true;
        $('.aboutMeImage').css('display','none');
        $('.aboutMeImageMobile').css('display','block');
        $('.footer').css('display','none');
        // $('.aboutMeImage').css('display','none');
    //     $(".circleImageFooter").css("width","226px");
    //     $(".circleImageFooter").css("margin-left","172px");
    }

    // if(isMobile === true) {
    //   $(".circleImageHeader").addClass("circleImageRoll");
    // }
  });

    // $(window).scroll(function() {
    //   if ($(this).scrollTop() > 5){
    //       if(isMobile === true || isiPhone6 === true) {
    //         // $(".circleImageHeader").css("width","226px");
    //         $(".circleImageHeader").css("margin-left","153px");
    //         $(".circleImageHeader").addClass("circleImageRoll");
    //       }
    //       // if(isiPhone6 === true) {
    //       //   $(".circleImageHeader").addClass("circleImageRoll");
    //       // }
    //     // $(".midPage").animate({marginTop:"117px"}, 3000);
    //     $(".testUnderImg").css('visibility','hidden').hide().slideUp();
    //     $(".testUnderImg1").css('visibility','hidden').hide().slideUp();
    //     $(".header").addClass("sticky");
    //     $(".circleImage").addClass("circleImageHeader");
    //     $(".circleImageHeader").removeClass("circleImage");
    //     $('.spotifyHide').addClass('spotify');
    //     $('.spotify').removeClass('spotifyHide')
    //     $('.spotify').css('display','flex');
    //     $('.socialMedia').css('display','flex');
    //     $('.socialMediaIcons').css('display','flex').show();
    //     $('.headerName').css('visibility','visible').slideDown();
    //     $('.headerEmail').css('display','flex');
    //     $('.headerEmail').css('visibility','visible');
    //     $(".midPage").stop().css('margin','70px auto');
    //     // $('.followBttn').css('visibility','visible').hide().slideDown();
    //     // $('.followBttn').css('display', 'flex');
    //   } else if($(this).scrollTop() <= 1) {
    //     // console.log($(".aboutMe").width() + '   width');
    //       if(isMobile === true) {
    //         $(".circleImageHeader").css("width","");
    //         $(".circleImageHeader").css("margin-left","");
    //         $(".circleImageHeader").removeClass("circleImageRoll");
    //         $(".circleImage").removeClass("circleImageHeader");
    //         // console.log("eat my ass")
    //       }
    //       $(".circleImageHeader").css("width","");
    //       $(".circleImageHeader").css("margin-left","");
    //       $(".circleImageHeader").removeClass("circleImageRoll");
    //       $(".circleImage").removeClass("circleImageHeader");
    //       $(".testUnderImg").css('visibility','visible');
    //       $(".testUnderImg1").css('visibility','visible');
    //       $(".testUnderImg").css('display','')
    //       $(".testUnderImg1").css('display','')
    //       $(".header").removeClass("sticky");
    //       $(".circleImageHeader").addClass("circleImage");
    //       $(".circleImage").removeClass("circleImageHeader");
    //       $('.spotify').addClass('spotifyHide');
    //       $('.spotifyHide').removeClass('spotify')
    //       $('.spotifyHide').css('display','none').hide();
    //       $('.headerName').css('visibility','hidden');
    //       $('.headerEmail').css('visibility','hidden');
    //       $('.socialMedia').css('display','none');
    //       $(".midPage").stop().css('margin','0 auto');
    //       // $(".midPage").animate({marginTop:""}, 3000);
    //       // $('.socialMediaIcons').css('display','none');
    //       // $('.socialMediaIcons').css('visibility','visible');
    //     };
    //   });

    $(window).scroll(function() { 
      if($(window).scrollTop() + $(window).height() == $(document).height()) { 

      } 
    });


    // $('.github').on('hover', function(){
    //   console.log('Does this trigger?')
    // })

    $('.spotifySocial').on('click', function(){
      window.open('https://play.spotify.com/artist/2ciByYBF9snRskYOqoB5Qf', '_blank');
    })

    $('.instagram').on('click', function(){
      window.open('https://www.instagram.com/wilsonrondini/', '_blank');
    })

    $('.youtube').on('click', function() {
      window.open('https://www.youtube.com/channel/UCQzQJexzf0Md7FVVhfLuGjA');
    })


    $('.twitterSocial').on('click', function(){
      window.open('https://www.twitter.com/wilbecoding', '_blank');
    })

    $('.linkedIn').on('click', function(){
      window.open('https://www.linkedin.com/in/wilsonrondiniiv', '_blank');
    })

    $('.github').on('click', function(){
      window.open('https://github.com/WilBeCoding', '_blank');
    })
});

