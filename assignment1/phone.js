$(document).ready(function() { // do this when the document is loaded
	$("#tBar").show(); // show tab bar
	$("#tabCon1").show(); // show dialer
	$("#tabCon2").hide(); // hide contact list
	$("#tabCon3").hide(); // hide add contact
});

$("#tab1").click(function() { // when "tab1" is clicked
	$("#tBar").show(); // show tab bar
	$("#tabCon1").show();	// show dialer
	$("#tabCon2").hide(); // hide contact list
	$("#tabCon3").hide(); // hide add contact
});

$("#tab2").click(function() { // when "tab2" is clicked
	$("#tBar").show(); // show tab bar
	$("#tabCon1").hide(): // hide dialer
	$("#tabCon2").show(): // show contact list
	$("#tabCon3").hide(): // hide add contact
});

$("#tab3").click(function() { // when "tab3" is clicked
	$("#tBar").show(); // show tab bar
	$("#tabCon1").hide(); // hide dialer
	$("#tabCon2").hide(); // hide contact list
	$("#tabCon3").show(); // show add contact
});
