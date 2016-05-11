/***********************************************************************************************************************************
Make a page where the user can drag a couple of elements around with a mouse.

Make a large div (with relative position) and put some smaller elements (with absolute position) inside of it.

Set a handler for the mousedown event on those draggable elements. It should have a variable that holds the event target (the element that was clicked on). It should also get the difference between the position of that element (its left and top CSS settings) and the mouse (the event's pageX and pageY in jQuery).

That event handler should then set event handlers for two other events: A mousemove handler should update the element's position so that the difference between that and the mouse's new position stays constant. A mouseup handler should remove those two event handlers so dragging finishes. (With jQuery, use the off method.) These handlers should be set on the entiredocument, rather than the target element.

Optional features: Confine the dragged elements to remain inside the outer div. Set the cursor for the draggle elements appropriately (e.g. grab).

***********************************************************************************************************************************/

//initialize variables

var evtTarget;

//resetPage();

//event listeners
/*$('#div-fuchsia').on('mousedown', onMouseDownDrag);
$('#div-blue').on('mousedown', onMouseDownDrag);
$('#div-fuchsia').on('mousemove', onMouseMoveUpdatePos);
$('#div-blue').on('mousemove', onMouseMoveUpdatePos);
$('#div-fuchsia').on('mouseup', onMouseUpDrop);
$('#div-blue').on('mouseup', onMouseUpDrop);*/