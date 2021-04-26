// JS HTML DOM 

var btn1 = document.getElementById("btn1");
console.log(btn1);
var div1 = document.getElementById("div1");
console.log(div1);

btn1.onclick = function() {
    div1.classList.toggle("hidden");
}

var btn2 = document.getElementById("btn2");
var div2 = document.getElementById("div2");
btn2.onclick = function(){
    var color = (Math.random().toString(16) + "000000").substring(2,8);
    div2.style.backgroundColor = "#" + color ;
}

var btn3 = document.getElementById("btn3");
var div3_1 = document.getElementById("div31");
var div3_2 = document.getElementById("div32");

btn3.onclick = function() {
    var TG1 = div3_1.innerHTML;
    var TG2 = div3_2.innerHTML;
    div3_1.innerHTML = TG2;
    div3_2.innerHTML = TG1;
}

var btn4 = document.getElementById("btn4");
var div4 = document.getElementById("div4");
var fSize = 14;
btn4.onclick = function() {
    fSize = fSize + 1;
    div4.style.fontSize = fSize +"px";
}