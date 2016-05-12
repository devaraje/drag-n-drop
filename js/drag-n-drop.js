/***********************************************************************************************************************************
Make a page where the user can drag a couple of elements around with a mouse.

Make a large div (with relative position) and put some smaller elements (with absolute position) inside of it.

Set a handler for the mousedown event on those draggable elements. It should have a variable that holds the event target (the element that was clicked on). It should also get the difference between the position of that element (its left and top CSS settings) and the mouse (the event's pageX and pageY in jQuery).

That event handler should then set event handlers for two other events: A mousemove handler should update the element's position so that the difference between that and the mouse's new position stays constant. A mouseup handler should remove those two event handlers so dragging finishes. (With jQuery, use the off method.) These handlers should be set on the entiredocument, rather than the target element.

Optional features: Confine the dragged elements to remain inside the outer div. Set the cursor for the draggle elements appropriately (e.g. grab).

***********************************************************************************************************************************/

//initialize variables

var pagex;
var pagey;
var diffx;
var diffy;
var elem;

//event listeners
$('#div-fuchsia').on('mousedown', onMouseDownDrag);
$('#div-blue').on('mousedown', onMouseDownDrag);


function onMouseDownDrag(evt){
  
  evt.preventDefault;
  var etarget = evt.target;
  elem = $(etarget);
  var top = ($( etarget ).css( "top")).split("px")[0];
  var left = ($( etarget ).css("left")).split("px")[0];
  pagex = evt.pageX;
  pagey = evt.pageY;
  diffx = Math.abs(top - pagex);
  diffy = Math.abs(left - pagey);
  
  console.log('top : ' + top);
  console.log('left : ' + left);
  console.log('pagex : ' + pagex);
  console.log('pagey : ' + pagey);
  
  console.log(etarget);
  
  $(document).on('mousemove', onMouseMoveUpdatePos);
  $(document).on('mouseup', onMouseUpDrop);
}

function onMouseMoveUpdatePos(evt){
  
  evt.preventDefault;
  console.log("in mousemove");
  pagex = evt.pageX;
  pagey = evt.pageY;
  var top = String(pagex + diffx) + "px";
  var left = String(pagey - diffy) + "px";
  $(elem).css("top", top);
  $(elem).css("left", left);
  $(elem).show;
  
}

function onMouseUpDrop(evt){
  
  evt.preventDefault;
  console.log("in mouseup");
  $(document).off('mousemove', onMouseMoveUpdatePos);
  $(elem).off('mousedown', onMouseDownDrag);
  $(elem).show;
}