//Code goes here

$(document).ready(function() { // do this when the document is loaded
	$("#intro").show(); // show intro screen
	$("#img1").hide(); // hide first image page
	$("#img2").hide(); // hide second image page
	$("#img3").hide(); // hide third image page
	$("#img4").hide();
});

$("#pg1").click(function() { // do this when the Start Exploring button is clicked
	$("#intro").hide(); // hide intro screen
	$("#img1").show(); // show first image page
	$("#img2").hide(); // hide second image page
	$("#img3").hide(); // hide third image page
	$("#img4").hide();
});

$("#pg2").click(function() { // do this when first Next button is clicked
	$("#intro").hide(); // hide intro screen
	$("#img1").hide(); // hide first image page
	$("#img2").show(); // show second image page
	$("#img3").hide(); // hide third image page
	$("#img4").hide();
});

$("#pg3").click(function() {
	$("#intro").hide();
	$("#img1").hide();
	$("#img2").hide();
	$("#img3").show();
	$("#img4").hide();
});

$("#pg4").click(function() {
	$("#intro").hide();
	$("#img1").hide();
	$("#img2").hide();
	$("#img3").hide();
	$("#img4").show();
});

$("#homebutton").click(function() {
	$("#intro").show();
	$("#img1").hide();
	$("#img2").hide();
	$("#img3").hide();
	$("#img4").hide();
});

$("#scroll").click(function() { // do this when the scroll button is clicked
	$("#intro").show(); // show intro screen
	$("#img1").show(); // show first image page
	$("#img2").show(); // show second image page
	$("#img3").show(); // show third image page
	$("#img4").show();
});

