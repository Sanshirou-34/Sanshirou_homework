document.write("Hello World!");

function sayHello(){
  var response = prompt("What's your name?");
  alert("Hello " + response + " , have a nice day !");
}

function add(a,b){
  return a+b;
}
console.log(add(20,30));

function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontsize = "25px";
  x.style.color = "red";
}
