$(document).ready(function(event){
  $("#button").click(function(){
  var a = parseInt($("#a").val());
  var b = parseInt($("#b").val());
  var c = parseInt($("#c").val());

  if (a === b && b === c && c === a) {
    $("#displayspot").text("Equilateral");
  } else if (a === b || a === c || b === c){
    $("#displayspot").text("Isosceles");
  } else if (!(a+b<=c)||(a+c<=b)||(b+c<=a)){
    $("#displayspot").text("Scalene");
  } else {
    $("#displayspot").text("Not a triangle");
  }
  });
  // event.preventDefault();
  $("#refresh").click(function(){
  location.reload();
  });
});
