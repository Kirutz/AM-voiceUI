window.addEventListener("message", function (e) {

  if (e.data.displayWindow == "true") {
	    $(".cuadro").removeClass("slide-right");
		$(".cuadro").addClass("slide-left");
	  $(".cuadro").fadeIn(300);
  } else {
	 $(".cuadro").addClass("slide-right");
	 $(".cuadro").fadeOut(300);
  }
});

