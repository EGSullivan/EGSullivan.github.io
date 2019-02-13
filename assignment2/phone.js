$(document).ready(function() { // do this when the document is loaded
	$("#tBar").show() // show tab bar
	$("#tabCon1").show(); // show dialer
	$("#tabCon2").hide(); // hide contact list
	$("#tabCon3").hide(); // hide add contact
});

$("#tab1").click(function() { // when "tab1" is clicked
	$("#tBar").show(); // show tab bar
	$("#tabCon1").show();	// show dialer
	$("#tabCon2").hide(); // hide contact list
	$("#tabCon3").hide(); // hide add contact
	$("#tabCon4").hide(); // hide help page
});

$("#tab2").click(function() { // when "tab2" is clicked
	$("#tBar").show(); // show tab bar
	$("#tabCon1").hide(); // hide dialer
	$("#tabCon2").show(); // show contact list
	$("#tabCon3").hide(); // hide add contact
	$("tabCon4").hide(); // hide help page
});

$("#tab3").click(function() { // when "tab3" is clicked
	$("#tBar").show(); // show tab bar
	$("#tabCon1").hide(); // hide dialer
	$("#tabCon2").hide(); // hide contact list
	$("#tabCon3").show(); // show add contact
	$("#tabCon4").hide(); // hide help page
});

$("#tab4").click(function() { // when "tab4" is clicked
	$("tBar").show(); // show tab bar
	$("#tabCon1").hide(); // hide dialer
	$("tabCon2").hide(); // hide contact list
	$("tabCon4").show(); // show help page
});

$("#no1").click(function(){ // when 1 is clicked
	$("#number").val("1"); // type 1
});

$("#no2").click(function(){ // when 2 is clicked
	$("#number").val("2"); // type 2
});

$("#no3").click(function(){ // when 3 is clicked
	$("#number").val("3"); // type 3
});

$("#no4").click(function(){ // when 4 is clicked
	$("#number").val("4"); // type 4
});

$("#no5").click(function(){ // when 5 is clicked
	$("#number").val("5"); // type 5
});

$("#no6").click(function(){ // when 6 is clicked
	$("#number").val("6"); // type 6
});

$("#no7").click(function(){ // when 7 is clicked
	$("#number").val("7"); // type 7
});

$("#no8").click(function(){ // when 8 is clicked
	$("#number").val("8"); // type 8
});

$("#no9").click(function(){ // when 9 is clicked
	$("#number").val("9"); // type 9
});

$("#zero").click(function(){ // when 0 is clicked
	$("number").val("0"); // type 0
});
