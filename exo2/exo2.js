let x = parseInt (prompt("Quelle est la valeur de x ?"));
let y = parseInt (prompt("Quelle est la valeur de y ?"));

if (x > y){
    p1= "x est plus grand que y";
}
else if (x <= y){
    p1="y est plus grand que x";
}
let para = document.getElementById("p1");

para.innerHTML = p1;