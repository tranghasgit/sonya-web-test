$(window).scroll(function() {
  sessionStorage.scrollTop = $(this).scrollTop();
});

$(document).ready(function(){

  // keep same scroll position after reload
  if (sessionStorage.scrollTop != "undefined") {
    $(window).scrollTop(sessionStorage.scrollTop);
  }

  // parallax effect
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true },
  });


  // gallery lightbox function
  $(".scroll-item").click(function(){
    $('#scroll-wrapper').css({
      "overflow-y" : "hidden"
    });

    // var randomAud = Math.floor(Math.random() * 3)
    // var audio = $(".audio");
    // audio.get(randomAud).play();
    // console.log(randomAud);


    // find index of clicked image
    var i = $(this).data('index');

    // open gallery lightbox
    $("#gallery-popup").fadeIn();
    $("#gallery-popup > .close-button").fadeIn();
    $(".gallery-wrapper").scrollLeft(0); // reset scroll position
    $('[data-target]:not(:last-child)').css({
      "margin-right" : '.5em',
      "margin-left" : '0em',
    });
    // $('[data-target]').css({
    //   "opacity" : .25,
    // });

    // scroll target image to correct position determined by clicked image
    var target = $("#gallery-popup").find("[data-target='" + i + "']");
    var outerContW = $(".gallery-wrapper").outerWidth();
    var targetW = target.outerWidth();
    var offCenter = (outerContW - targetW) / 2;
    var offset = target.offset().left - offCenter;
    $(".gallery-wrapper").scrollLeft(offset);

    target.css({
      // "margin-right" : targetW,
      "opacity" : 1,
    });


    $('[data-target]').each(function(){
      $(this).click(function(){
        $(this).animate({
          // "margin-right" : $(this).outerWidth(),
          "opacity" : 1,
        });
      });
    });
  });

  // close lightbox
  $("#gallery-popup > .close-button").click(function(){
    $("#gallery-popup").fadeOut();
    $(this).fadeOut();
    $('#scroll-wrapper').css({
      "overflow-y" : "auto"
    });
  });

  // add beads to page
  const beadsSet1 = 14;
  for (var i = 0; i < beadsSet1; i++) {
    var newDiv = "<div class='beads bead-" + i + "'><img src='media/deco/img-" + i + ".png'></div>";
    const beadW = 50;
    const beadH = 50;
    const beadsOffsetY = 100;

    var posLR = ["left","right"];
    var randPosLR = Math.floor(Math.random() * ($(window).width() - beadW));
    var randPosLH = Math.floor(Math.random() * ($("#scroll-wrapper").height() - beadH));
    var xPos = 50 + 80 * Math.sin((i / 80) * 5 * Math.PI);

    $("#scroll-wrapper").append(newDiv);
    $(".bead-" + i).css({
      "position":"absolute",
      "top": randPosLH,
      // "top": i * beadH + beadsOffsetY,
      "right" : randPosLR,
      "width": beadW,
      "height": beadH,
      // "background-color":"#000"
    });
  }

  $(".dropdown-info-content, .dropdown-about-content, .dropdown-contact-content").hide();
  $(".dropdown-info p:first-child").click(function(ev){
    ev.preventDefault();
    $(".dropdown-info-content").slideToggle("slow");
  });

  $(".dropdown-about p:first-child").click(function(e){
    e.preventDefault();
    $(".dropdown-about-content").slideToggle("slow");
  });

  $(".dropdown-contact p:first-child").click(function(eve){
    eve.preventDefault();
    $(".dropdown-contact-content").slideToggle("slow");
  });

// Ending of document ready function
});
