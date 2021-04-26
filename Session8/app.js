// JS HTML DOM 
const btn1 = document.getElementById("btn1");
const div1 = document.getElementById("div1");
console.log(btn1);
console.log(div1);
btn1.onclick = function() {
    div1.classList.toggle("hidden");
}

const btn2 = document.getElementById("btn2");
const div2 = document.getElementById("div2");
btn2.onclick = function(){
    const color = (Math.random().toString(16) + "000000").substring(2,8);
    div2.style.backgroundColor = "#" + color ;
}

const btn3 = document.getElementById("btn3");
const div3_1 = document.getElementById("div31");
const div3_2 = document.getElementById("div32");

btn3.onclick = function() {
    var TG = div3_1.innerHTML;
    div3_1.innerHTML = div3_2.innerHTML;
    div3_2.innerHTML = TG;
}

const btn4 = document.getElementById("btn4");
const div4 = document.getElementById("div4");
var fSize = 14; 
btn4.onclick = function() {
    fSize ++;
    div4.style.fontSize = fSize +'px';
}
