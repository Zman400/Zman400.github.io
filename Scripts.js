var a;
var b;

function add(){
  var a = Number(document.getElementById("firstnumber").value);
  var b = Number(document.getElementById("secondnumber").value);

  sum = a + b;
  document.getElementById("output").innerHTML = "Addition: " + sum;
}

function subtract(){
  var a = Number(document.getElementById("firstnumber").value);
  var b = Number(document.getElementById("secondnumber").value);

  sub = a - b;
  document.getElementById("output").innerHTML = "Subtraction: " + sub;
}

function multiply(){
  var a = Number(document.getElementById("firstnumber").value);
  var b = Number(document.getElementById("secondnumber").value);

  var multiply = a * b;
  document.getElementById("output").innerHTML = "Multiplication: " + multiply;
}

function divide(){
  var a = Number(document.getElementById("firstnumber").value);
  var b = Number(document.getElementById("secondnumber").value);

  var division = a / b;
  document.getElementById("output").innerHTML = "Divison: " + division;
}

function reset(){
   document.getElementById("firstnumber").value = "";
   document.getElementById("secondnumber").value = "";

}
