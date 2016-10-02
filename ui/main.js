console.log('Loaded!');
alert("WELCOME TO MY WORLD!!");

var y = prompt("Are you READY TO CHANGE THE WORLD FOR GOOD???");
if(y === true){console.log("To lead a happy life, tie your life to a GOAL, not to PEOPLE or OBJECTS!!!");
}

var element = document.getElementById("testid");
console.log(element);
element.innerHTML = "";
element.innerHTML = "<p>PARAGRAPH</p>";
margin = 0;
var vj = document.getElementById("vj");
var moveRight = function(){
    margin = margin+3;
    vj.style.marginLeft = margin+"px"; 
};

vj.onmouseover = function(){
    var interval = setInterval(moveRight,49);
};