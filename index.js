$(window).scroll(function() {
  sessionStorage.scrollTop = $(this).scrollTop();
});

$(document).ready(function(){
  $("#gallery-popup").hide();
  $("#video-embed").hide();
  $("#gallery-popup > .close-button").hide();
  $("#video-embed > .close-button").hide();

  // keep same scroll position after reload
  if (sessionStorage.scrollTop != "undefined") {
    $(window).scrollTop(sessionStorage.scrollTop);
  }

  // parallax effect
  var rellax = new Rellax('.parallax-item');

  // randomize image left position based on 4 anchor points
  var arr = [0,1/4,2/4,3/4];

  $(".scroll-item").each(function(){
    const winW = $(window).width();
    const itemW = $(this).children().width();
    const offset = (winW-itemW) * arr[Math.floor(Math.random() * arr.length)];
    $(this).children().css({
      "margin-left" : offset
    });


  }).click(function(){
    $('html,body').css({
      "overflow-y" : "hidden"
    });

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
    $('[data-target]').css({
      "opacity" : .25,
    });

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
    $('html,body').css({
      "overflow-y" : "auto"
    });
  });




  // add beads to page
  const beadsSet1 = 4;
  for (var i = 0; i < beadsSet1; i++) {
    var newDiv = "<div class='beads bead-"+i+"'><img src='media/deco/img-"+i+".png'></div>";
    const beadW = 50;
    const beadH = 50;
    const beadsOffsetY = 100;

    $("body").append(newDiv);
    $(".bead-"+i).css({
      "position":"absolute",
      "top": i * beadH + beadsOffsetY,
      "right": 0,
      "width": beadW,
      "height": beadH,
      // "background-color":"#000"
    });
  }
  const beadsSet2 = 8;
  for (var i = beadsSet1; i < beadsSet2; i++) {
    var newDiv = "<div class='beads bead-"+i+"'><img src='media/deco/img-"+i+".png'></div>";
    const beadW = 50;
    const beadH = 50;
    const beadsOffsetY = 800;

    $("body").append(newDiv);
    $(".bead-"+i).css({
      "position":"absolute",
      "top": i * beadH + beadsOffsetY,
      "left": 0,
      "width": beadW,
      "height": beadH,
      // "background-color":"#000"
    });
  }
  const beadsSet3 = 10;
  for (var i = beadsSet2; i < beadsSet3; i++) {
    var newDiv = "<div class='beads bead-"+i+"'><img src='media/deco/img-"+i+".png'></div>";
    const beadW = 50;
    const beadH = 50;
    const beadsOffsetY = 2600;

    $("body").append(newDiv);
    $(".bead-"+i).css({
      "position":"absolute",
      "top": i * beadH + beadsOffsetY,
      "left": 0,
      "width": beadW,
      "height": beadH,
      // "background-color":"#000"
    });
  }
  const beadsSet4 = 16;
  for (var i = beadsSet3; i < beadsSet4; i++) {
    var newDiv = "<div class='beads bead-"+i+"'><img src='media/deco/img-"+i+".png'></div>";
    const beadW = 50;
    const beadH = 50;
    const beadsOffsetY = 2600;

    $("body").append(newDiv);
    $(".bead-"+i).css({
      "position":"absolute",
      "top": i * beadH + beadsOffsetY,
      "right": 0,
      "width": beadW,
      "height": beadH,
      // "background-color":"#000"
    });
  }

  // open vieo lightbox
  $(".beads").each(function(){
    $(this).click(function(){
      $('html,body').css({
        "overflow-y" : "hidden"
      });
      $("#video-embed").fadeIn();
      $("#video-embed > .close-button").fadeIn();
    });
  });

  // close video lightbox
  $("#video-embed > .close-button").click(function(){
    $("#video-embed").fadeOut();
    $(this).fadeOut();
    $('html,body').css({
      "overflow-y" : "auto"
    });
  });






// Ending of document ready function
});
