//console.log("hello");
//console.log(4+4);

//var total = 14.0;
//console.log("£" + total);
//console.log(`total proce is £${total}`)

//alert("hi");
//prompts("type something");

//var n1 = prompt("Enter a number");
//var n1 = prompt("enter another number");
//alert(Number(n1) + Number(n2));
/*
document.getElementById("msg").intterHTML = " Changed with js";

document.getElementById("timer").innerHTML ="";

var today = newDAte();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
    greeting = ("good Evening");
}
else if (hourNow>12){
    greeting="good afternoon");
}
else if (hourNow>0){
    greeting = "good morning")
}
else{
    greeting = "welcome";
}

document.getElementById("time").innerHTML = `hello and ${greeting}`;


*/
//invoice example
var sign = "Bristol Zoo!";
var length = sign.length;
var subtotal = length * 2.99;
var shipping = 4.99;
var total = subtotal+shipping;

document.getElementById("userSign").innerHTML= sign;
document.getElementById("tiles").textContent = length;
document.getElementById("subtotal").textContent = `£${subtotal}`;
document.getElementById("shipping").textContent = `£${shipping}`;
document.getElementById("total").textContent = `£${total}`;
