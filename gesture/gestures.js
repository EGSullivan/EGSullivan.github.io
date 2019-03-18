downX = 0
downY = 0

$("#gestureArea").mousedown(function(event) {
	$("#gestureResult").text("mouse down");
	var downX = (event.pageX)
	var downY = (event.pageY)
})
	
	

$("#gestureArea").mouseup(function(event) {
	
	var upX = (event.pageX)
	var upY = (event.pageY)
	
	if upX < downX:
		$("#gestureResult").text("swipe left")
	else if upX > downX:
		$("#gestureResult").text("swipe right")
	else if upX == downX:
		$("#gestureResult").text("mouse up");
})
