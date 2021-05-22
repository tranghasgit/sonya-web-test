$(document).ready(function(){
  if ($(window).width() < 600) {
    addBeads(10,10,8);
  } else {
    addBeads(20,20,14)
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


});

$(window).resize(function(){
    if ($(window).width() < 600) {
      addBeads(10,10,8);
    } else {
      addBeads(20,20,14)
    }
})

// function add beads to page
function addBeads (bw,bh,bn){
  for (var i = 0; i < bn; i++) {
    var newDiv = "<div class='beads bead-" + i + "'><img src='../media/deco/img-" + i + ".png'></div>";

    var randPosLR = Math.floor(Math.random() * ($(window).width() - bw));
    var randPosLH = Math.floor(Math.random() * ($(window).height() - bh));

    $("body").append(newDiv);
    $(".bead-" + i).css({
      "position":"absolute",
      "top": randPosLH,
      "right" : randPosLR,
      "width": bw,
      "height": bh,
      "pointer-events": "none",
    });
  }
}
