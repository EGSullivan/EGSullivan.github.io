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
	$("#number").val(val + "1"); // type 1
});

$("#no2").click(function(){ // when 2 is clicked
	$("#number").val(val + "2"); // type 2
});

$("#no3").click(function(){ // when 3 is clicked
	$("#number").val(val +"3"); // type 3
});
