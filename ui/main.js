console.log('Loaded!');
alert("WELCOME TO MY WORLD!!");

var y = prompt("Are you READY TO CHANGE THE WORLD FOR GOOD???");
if(y === true){console.log("To lead a happy life, tie your life to a GOAL, not to PEOPLE or OBJECTS!!!");
}

var element = document.getElementById("testid");
console.log(element);
element.innerHTML = "";
element.innerHTML = "<p>PARAGRAPH</p>";

var vj = document.getElementById("vj");
vj.onMouseDown = function(){
    vj.style.marginLeft = "100px"; 
};