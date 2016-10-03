var button = document.getElementById('counter');
button.onclick = function(){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
      if(request.status === 200){
        var counter = request.responseText;
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
      }}
  };


request.open('GET', "http://vijaykiranr.imad.hasura-app.io/counter", true);
request.send(null);

};


           
                
               
            /*    var fibo = function(n){
                    if(n === 0 || n===1){return n;}
                    else{
                    return(this.fibo(n-1)+this.fibo(n-2));
                    }
                    
                };
                
                console.log(fibo(56));
        
            */


/*var counter = 0;
            var button = document.getElementById('counter');
            button.onclick = function(){
                var span = document.getElementById('count');
                counter = counter+1;
                span.innerHTML = counter.toString();
            };
*/
/*console.log('Loaded!');
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
    margin = margin+1;
    vj.style.marginLeft = margin+"px"; 
};

vj.onmouseover = function(){
    setInterval(moveRight,49);
};
*/