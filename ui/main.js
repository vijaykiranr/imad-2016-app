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

var openSesame = document.getElementById('buttonO');
openSesame.onclick = function changeText(){
    document.getElementById('italicStuff').innerHTML = 
    `To make to STAR; learn to AIM first!
To learn to AIM; contrive to FLY first!
To contrive to FLY; adieu to FEAR first!
To adieu to FEAR; dare to PEOPLE first!
To dare to PEOPLE; comfort to GOAL first!
To comfort to GOAL; homage to TIME first!
To homage to TIME; apprentice to HELP first!
To apprentice to HELP; lucubrate to INTEGRITY first!
--- Inspired from my mind; not stolen from minds.`;
}

request.open('GET', "http://vijaykiranr.imad.hasura-app.io/counter", true);
request.send(null);

};

var namei = document.getElementById('name');
var input = namei.value;
var submit = document.getElementById('submit');
submit.onclick = function(){
var names = ['name1','name2','name3','name4'];
list = '';
for(i=0;i<names.length;i++){
    list += '<li>'+names[i]+'</li>';
}
var ul = document.getElementById('namelist');
ul.innerHTML = list;
};
           
                
               
            /*    var fibo = function(n){
                    if(n === 0 || n===1){return n;}
                    else{
                    return(this.fibo(n-1)+this.fibo(n-2));
                    }
                    
                };
                
                console.log(fibo(56));
        
            */
/*

Welcome to BYJU'S
Vijay
Academic Counsellor
Good
Vijay
Hello! How may I help you?
Student
Hello
Good morning
Vijay
Hello may I know your queries.
Student
I am currently working in IT TECH industry for 4 years. 
Just came to check the website of BYJU's.
I am passionate about two things in my life, 1.Programming/Digital; 2.Teaching.
I think that the future of REAL KNOWLEDGE based education will happen through a LAPTOP and an INTERNET connection.
Classrooms will be outdated in say 10 years.
So i like this concept of ONLINE TEACHING and LEARNING.
The only way to eliminate poverty from INDIA is by FREE EDUCATION delivered to all ages.
So i like this concept of BYJU's and it is also aligned with my GOAL.
Myself VIJAY KIRAN R
Just saw your careers page.
Right now i am pursuing a course in IIT MADRAS in MODERN APPLICATION DEVELOPMENT
Interested in PROGRAMMING.
What qualifications do you expect from a person aspiring to join BYJU's for a career.
 Read
?
Delivered

Type in your message here and press Enter to send
Powered by LiveChat


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