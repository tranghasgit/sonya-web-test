$(window).scroll(function() {
  sessionStorage.scrollTop = $(this).scrollTop();
});

$(document).ready(function(){
  // keep same scroll position after reload
  if (sessionStorage.scrollTop != "undefined") {
    $(window).scrollTop(sessionStorage.scrollTop);
  }

  // add image gallery
  var iframe = "<iframe id='gallery-popup' src='gallery.html' width='100%' height='100%'></iframe>";
  var closeButton = "<div id='close-button'><p>close</p></div>";
  $(".scroll-wrapper").append(iframe);
  $(".scroll-wrapper").append(closeButton);
  $("#gallery-popup").hide();
  $("#close-button").hide();

  // var iframe = $('iframe');
  // var targetItem = $('#gallery-popup').contents().find('[data-target="' + 3 + '"]').offset().left;
  // const targetItem = $('[data-target="' + 3 + '"]', iframe.contents()).offset().left;
  // console.log(targetItem);


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
    const i = $(this).data('index');
    console.log(i);

    // const targetItem = $('[data-target="' + i + '"]');
    // console.log(targetItem);
    // const offsetTarget = targetItem.offset().left;
    // $('.gallery-wrapper').scrollLeft(off3);

    // show gallery view on img click
    $("#gallery-popup").fadeIn();
    $("#close-button").fadeIn();
    
    // close gallery view on button click
    $("#close-button").click(function(){
      $("#gallery-popup").fadeOut();
      $(this).fadeOut();
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










});
