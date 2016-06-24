
$(document).ready(function() {
  $(window).load(function() {
    isMobile = false;

    // console.log($('.header').css('height'));
    if($('.header').css('height')>'500px') {
        isMobile = true;       
        // console.log(isMobile + '   isMobile is true')
    }

    // console.log(isMobile +   '     isMobile')

    // console.log($(".aboutMe").width() + '   width on load');

    if(isMobile === true) {
      $(".circleImageHeader").addClass("circleImageRoll");
      console.log("first mobile if statement hits")
    }
  });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1){
          if(isMobile === true) {
            $(".circleImageHeader").css("width","226px");
            $(".circleImageHeader").css("margin-left","172px");
            $(".circleImageHeader").addClass("circleImageRoll");
          }

        $(".midPage").animate({marginTop:"117px"}, 3000);
        $(".testUnderImg").css('visibility','hidden').hide().slideUp();
        $(".testUnderImg1").css('visibility','hidden').hide().slideUp();
        $(".header").addClass("sticky");
        $(".circleImage").addClass("circleImageHeader");
        $(".circleImageHeader").removeClass("circleImage");
        $('.spotifyHide').addClass('spotify');
        $('.spotify').removeClass('spotifyHide')
        $('.spotify').css('display','flex');
        $('.socialMedia').css('display','flex');
        $('.socialMediaIcons').css('display','flex').show();
        $('.headerName').css('visibility','visible').slideDown();
        $('.headerEmail').css('display','flex');
        $('.headerEmail').css('visibility','visible');
        // $(".midPage").stop().css('marginTop','117');
        // $('.followBttn').css('visibility','visible').hide().slideDown();
        // $('.followBttn').css('display', 'flex');
      } else if($(this).scrollTop() <= 1) {
        // console.log($(".aboutMe").width() + '   width');
          if(isMobile === true) {
            $(".circleImageHeader").css("width","");
            $(".circleImageHeader").css("margin-left","");
            $(".circleImageHeader").removeClass("circleImageRoll");
            $(".circleImage").removeClass("circleImageHeader");
            // console.log("eat my ass")
          }
          $(".circleImageHeader").css("width","");
          $(".circleImageHeader").css("margin-left","");
          $(".circleImageHeader").removeClass("circleImageRoll");
          $(".circleImage").removeClass("circleImageHeader");
          $(".testUnderImg").css('visibility','visible');
          $(".testUnderImg1").css('visibility','visible');
          $(".testUnderImg").css('display','')
          $(".testUnderImg1").css('display','')
          $(".header").removeClass("sticky");
          $(".circleImageHeader").addClass("circleImage");
          $(".circleImage").removeClass("circleImageHeader");
          $('.spotify').addClass('spotifyHide');
          $('.spotifyHide').removeClass('spotify')
          $('.spotifyHide').css('display','none').hide();
          $('.headerName').css('visibility','hidden');
          $('.headerEmail').css('visibility','hidden');
          $('.socialMedia').css('display','none');
          $(".midPage").animate({marginTop:""}, 3000);
          // $('.socialMediaIcons').css('display','none');
          // $('.socialMediaIcons').css('visibility','visible');
        };
      });

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

