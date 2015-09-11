/* jQuery functions to handle events to apply new styles of div element with CSS transform attribute  */

/*$(document).ready(function() { */
$(function () {
    
 $("#transform").on("click", function () {
   // Change the value of the flow
   var $rotation = $("#rotation").val();
   var $skew = $("#skew").val();
   var $scale = $("#scale").val() / 100; // Scale factor 1.0 = 100%
   
   var $trStr = 'rotate('+$rotation+'deg) scale('+ $scale + ') skew('+ $skew+'deg)';
   
   $("#animElem").css("-webkit-transform", $trStr);
   $("#animElem").css("transform", $trStr);  
 });
  
});
