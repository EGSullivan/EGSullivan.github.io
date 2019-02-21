//Code goes here

$(document).ready(function() { // do this when the document is loaded
	$("#intro").show(); // show intro screen
	$("#img1").hide(); // hide first image page
	$("#img2").hide(); // hide second image page
});

$("#pg1").click(function() { // do this when the Start Exploring button is clicked
	$("#intro").hide(); // hide intro screen
	$("#img1").show(); // show first image page
	$("#img2").hide(); // hide second image page
});

$("#scroll").click(fuction() { // do this when the scroll button is clicked
	$("#intro").show(); // show intro screen
	$("#img1").show(); // show first image page
	$("#img2").show(); // show second image page
});
